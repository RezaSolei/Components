import React from 'react'
import './LocationComponent.css'

function LocationComponent() {
  return (
    <div className='container-location'>
        <div> 
            <div className='first-text'><p >Add New Location</p>
            </div>


            <div className='close-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
            </div>
            <p className='line-space'></p>
            <div className='map-container'>
            
                <input className="border" type='text' placeholder="  saber noori"></input>
                <div className='map'>
                <form class="example">
                    <input className='search-input' type="text" placeholder="  Search address" name="search2">
                        </input>
                    <button className='search-button' type="submit">Search</button>
             </form>
             </div> 
            </div>
            <div className='footer'>
                <div className='line-container'><p className='line-space'></p></div>
                <div className='buttons'>
                    <button className='button-SaveChanges'>Save Changes</button>
                    <button className='button-cancle'>Cancle</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LocationComponent