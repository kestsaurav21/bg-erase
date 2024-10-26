import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
    <div className='pb-16 flex flex-col items-center'>
        {/* Title */}
        <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        See the magic. Try now
        </h1>

        {/* Upload Button */}
        <div>
            <input type="file" name='file' id='fileupload1' hidden />
            <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 '
                htmlFor="fileupload1">
                <img className='w-[20]' src={assets.upload_btn_icon} alt="upload-icon" />
                <p className='text-white text-md'>Upload your Image</p>
            </label>
        </div>

    </div>
  )
}

export default Upload