import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-center max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20 '>
        {/* ------- left section -------- */}
        <div >
            <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-neutral-700 leading-tight'>
            Remove the <br />
            <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span> from <br />
            images for free.
            </h1>

            <p className='my-6 text-[1rem] text-gray-500 '>
            Our AI background remover instantly removes the background of your photos in seconds. <br />
            Then you can add any new background or leave it transparent!
            </p>

            <div className='' >
                <input type="file" name='file' id='fileupload' hidden />
                <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 '
                 htmlFor="fileupload">
                    <img src={assets.upload_btn_icon} alt="upload-icon" />
                    <p>Upload your Image</p>
                </label>
            </div>

        </div>
        {/* ------- right section -------- */}
        <div className='h-[40rem]] w-[30rem]'>
            <img className='' src={assets.header_img} alt="" />
        </div>

    </div>
  )
}

export default Header