import React from 'react'

const SubBubble = (subBubbleData) => {
  return (
      <div className = "year-item">
        <div className = "year-wrapper">
          <p className ="year">{subBubbleData.year}</p>
        </div>
          

        <div className="par-wrapper">
          <h5>{subBubbleData.title}
            <a href={subBubbleData.href}>{subBubbleData.link}</a>
          </h5>
          <p>{subBubbleData.par}</p>
          </div>
      </div>
  )
}

export default SubBubble
