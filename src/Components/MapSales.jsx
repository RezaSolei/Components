import React from 'react'
import './MapSales.css'
import WorldMap from './imgs/World-Map.jpg'
import CanadaIcon from './imgs/canada-icon.png'
import UsaIcon from './imgs/usa-icon.png'
import AustraliaIcon from './imgs/Australia-icon.png'
import IndiaIcon from './imgs/india-icon.png'
import IranIcon from './imgs/iran-icon.png'
import UkIcon from './imgs/uk-icon.png'

function MapSales() {
  return (
    <div>
    
    
        <div className='Map'>
            <h1 className='Map_text'>Most Sales in Countries</h1>
            <img className='world-map-img' src={WorldMap} alt="WorldMap"></img>
        </div>

        <div>
            
            <div className='VerticalLine'></div>
            <h2 className='CountriesText'>Top Countries</h2>
            <div className='countries'>
                <img className='canadaIcon' src={CanadaIcon} alt="canadaIcon"></img>
                <p className='canadatext'>canada</p>
                <p className='price'>s<span>152.423</span></p>
                <img className='UsaIcon' src={UsaIcon} alt="UsaIcon"></img>
                <p className='usatext'>United state</p>
                <p className='price'>s<span>152.423</span></p>
                <img className='AustraliaIcon'src={AustraliaIcon} alt="AustraliaIcon"></img>
                <p className='Australiatext'>Australia</p>
                <p className='price'>s<span>152.423</span></p>
                <img className='IndiaIcon' src={IndiaIcon} alt="IndiaIcon"></img>
                <p className='Indiatext'>India</p>
                <p className='price'>s<span>152.423</span></p>
                <img className='IranIcon' src={IranIcon} alt="IranIcon"></img>
                <p className='irantext'>Iran</p>
                <p className='price'>s<span>152.423</span></p>
                <img className='canadaIcon' src={UkIcon} alt="UkIcon"></img>
                <p className='Uktext'>United kingdom</p>
                <p className='price'>s<span>152.423</span></p>
            </div>
        </div>
    </div>
  )
}

export default MapSales