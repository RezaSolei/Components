import React from 'react'
import './AddFeature.css'

function AddFeature() {
  return (

    <div>
        <div>
            <div className='closeIcon-addfeature'>
                <p className='add-feature-text'>Add feature</p>
                <div className='closeIcon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
                </div>
                <div className='line'></div>
                <div>
                    <p className='feature-text2'>
                        Please Choose What Type Of Feature You Want To add?
                    </p>
                </div>
                <div className='button-features'>
                    <button className='border'><p>Normal Feature</p></button>
                    <button className='border'><p>Color Feature</p></button>
                    <button className='border'><p>Variable Feature</p></button>
                </div>
            </div>
            </div>
        </div>
  )
}

export default AddFeature