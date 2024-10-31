import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const Header = () => {

    const { removeBg } = useContext(AppContext);

  return (
    <div className='flex items-center justify-center max-sm:flex-col-reverse gap-y-10 gap-x-2 px-4 mt-10 lg:px-44 sm:mt-20 '>
        {/* ------- left section -------- */}
        <div >
            <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-neutral-700 leading-tight'>
            Remove the <br className='max-md:hidden' />
            <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span> from <br className='max-md:hidden' />
            images for free.
            </h1>

            <p className='my-6 text-[1rem] text-gray-500 text-justify'>
            Our AI background remover instantly removes the background of your <br className='max-sm:hidden'/> photos in seconds. <br className='max-sm:hidden'/>
            Then you can add any new background or leave it transparent!
            </p>

            {/* Upload Button */}
            <div >
                <input onChange={ e => removeBg(e.target.files[0])} type="file" name='file' accept='image/*' id='fileupload' hidden />
                <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 '
                 htmlFor="fileupload">
                    <img className='w-[20]' src={assets.upload_btn_icon} alt="upload-icon" />
                    <p className='text-white text-md'>Upload your Image</p>
                </label>
            </div>

        </div>
        {/* ------- right section -------- */}
        <div className='w-full max-w-md' >
            <img src={assets.header_img}  />
        </div>

    </div>
  )
}

export default Header