import React from 'react'
import KeywordIndicator from './KeywordIndicator'
import './FirstComponent.css'
import infoIcon from './imgs/Info-icon.png'
import { useState } from 'react'
import imageIcon from './imgs/image-icon.png'


function FirstComponent() {

  const [keyword ,setKeyword] =useState('');


  return (
    <div className='background_color'>
    <div className='mane_div'>
      <div className='div_List'>
          <ul>
            <li className='list'><button>BASIC INFROMATION</button></li>
            <li className='list'><button>ATTRIBUTES</button></li>
            <li className='list'><button>PRICE & DELIVIRY</button></li>
            <li className='list'><button>DESCRIPTIONS</button></li>
            <li className='list'><button>SPECIFICATIONS</button></li>
          </ul>
          <div className='line2'>
          <div className='line'></div>
          </div>
      </div>
      <div className="links">
        
          <input type='text' required="required" className="border"></input>
          <span className='spann'>Product Titles</span>
          <img className='info-Icon' src={infoIcon} alt="info_icon"></img>
          <p className='info-Text'>hint text about the title</p>
      </div>
      


      <div className='borderr'>
      <select class="form-select form-select-lg mb-3 shadow-none" aria-label=".form-select-lg example">
                 <option value="1">One</option>
                 <option value="2">Two</option>
                 <option value="3">Three</option>
          </select>
          
          <select class="form-select form-select-lg mb-3 shadow-none" aria-label=".form-select-lg example">
                 <option value="1">One</option>
                 <option value="2">Two</option>
                 <option value="3">Three</option>
          </select>

          </div>

          
          <p className='selector-first-text'>categories</p>
          <p className='selector-secound-text'>sub-categories</p>
          <img className='info-Icon2' src={infoIcon} alt="info_icon"></img>
          <p className='info-Text2'>hint text about the title</p>

          
            <div className='indictor'>
            <div className='form-group mb-1'>
                <input type="text"className='form-control shadow-none' onChange={e => setKeyword(e.target.value)}> 
                 </input>
            </div>
            </div>
            <p className='keyword_text1'>keywords</p>
            <div className='KeywordIndicator'>
                <KeywordIndicator keyword={keyword}/>
            </div>
            <p className='keyword_text2'>keyword Quality</p>
            <p className='keyword_text3'>Excellent</p>


            <div className='div-imageuploader'>
              
              <img src={imageIcon} alt="imageicon"></img>

            </div>

            

            {/* <p className='imageuploader-text'>image product</p> */}
            <div className='imageuploader-border'></div>

<div className='upload_folder'>
            <input type="file" name="file" id="file" class="inputfile" />
            <label label for="file">image product</label>
            </div>
            <div className='footer'>
                  <span className='line'></span>
            </div>
            <button className='footer-button-next'>NEXTSTEP</button>
            <button className='footer-button-cancle'>CANCEL</button>
    </div>
    </div>
  )
}

export default FirstComponent