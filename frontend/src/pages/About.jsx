import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="about_img" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta cupiditate, ullam vero explicabo eius debitis eum quis enim sit autem, ab sapiente assumenda laboriosam minima ut nobis voluptas quas repudiandae. Eveniet accusantium quos cum illo commodi, ducimus a officia suscipit similique facere!</p>
          <p>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae suscipit error at sapiente repellendus. Quo quod nobis est laboriosam hic fugiat itaque sequi porro soluta recusandae? Sint, omnis temporibus. sit amet consectetur adipisicing elit. Impedit minus temporibus quis. Itaque, laborum distinctio.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa esse reiciendis quasi et accusantium vitae, voluptatem ex voluptatibus maiores unde repudiandae laboriosam</p>
        </div>
      </div>

      <div className='text-xl py-4'>
           <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
           <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae quos doloribus rerum excepturi eos impedit, neque facilis? Soluta culpa voluptatum quos, voluptatem eum libero sit qui ut nisi nulla.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae quos doloribus rerum excepturi eos impedit, neque facilis? Soluta culpa voluptatum quos, voluptatem eum libero sit qui ut nisi nulla.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae quos doloribus rerum excepturi eos impedit, neque facilis? Soluta culpa voluptatum quos, voluptatem eum libero sit qui ut nisi nulla.</p>
            </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About