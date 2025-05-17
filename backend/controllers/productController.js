import {v2 as cloudinary} from 'cloudinary'
import productModel from "../models/productModel.js"

// Add product function

const addProduct = async (req, res) => {
    
    try {
        
        const {name, description, price, category, subCategory, sizes, bestseller} = req.body

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item)=> item !== undefined)
        
        let imagesUrl = await Promise.all(
            images.map(async(item)=> {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
                return result.secure_url
            })
        )

        const productData = {
            name,
            description, 
            category, 
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        }
        console.log(productData);
        
        const product = new productModel(productData);

        await product.save();

        res.json({success: true, message: "Product Added"});
        console.log("FILES RECEIVED:", req.files);

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }

}

// List product function
const listProduct = async (req, res) => {
    
    try {
        const products = await productModel.find({});
        res.json({success: true, products})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// remove product function
const removeProduct = async (req, res) => {
    
    try {
        const { id } = req.params; 

        const deletedProduct = await productModel.findByIdAndDelete(id);

        if(deletedProduct){
            res.json({success: true, message: "Product Removed"})
        } 
        else{
            res.json({success: false, message: "Product Not Found"})
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }
}

// single product function
const singleProduct = async (req, res) => {

    try {
        const {id} = req.params
        const product = await productModel.findById(id)
        
        if(product){
        res.json({success: true, product});
        }
        else{
        res.json({success: false, message: "Couldn't Find Product"});
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }

}

export {addProduct, listProduct, removeProduct, singleProduct}