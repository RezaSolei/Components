import React from 'react'
import './KeywordIndicator.css'

function KeywordIndicator({keyword}) {
    console.log(keyword);
    const ChangeKeywordColor = () => ({
        width:"70%",
        background:'green',
        height:'7px'
    })

  return (
    <div>
    <div className='progress' style={{height:'7px'}}>
        <div className='progress-bar' style={ChangeKeywordColor()}></div>
    </div>
    <p className='progress-text'>3 keyword was added</p>
    </div>
    
  )
}

export default KeywordIndicator