import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-center max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20 '>
        {/* ------- left section -------- */}
        <div >
            <h1 className=''>
            Remove the <br />
            <span>background</span> from <br />
            images for free.
            </h1>

            <p>
            Our AI background remover instantly removes the background of your photos in seconds. <br />
            Then you can add any new background or leave it transparent!
            </p>

            <div>
                <input type="file" name='file' id='fileupload' hidden />
                <label htmlFor="fileupload">
                    <img src={assets.upload_btn_icon} alt="upload-icon" />
                    <p>Upload your Image</p>
                </label>
            </div>

        </div>
        {/* ------- right section -------- */}

    </div>
  )
}

export default Header