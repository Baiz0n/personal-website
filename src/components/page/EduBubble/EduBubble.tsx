import SubBubble from './SubBubble'

const EduBubble = (_subBubbleData, parentBubbleData) => {
  return (
    <div className = "education-container">

      <div className = "left-education">
        <h1 style={{color: parentBubbleData.color}}>{parentBubbleData.title}</h1>
      </div>

      <div className = "sub-bubble__container">
        <SubBubble subBubbleData = {_subBubbleData}/>
      </div>

    </div>
  )
}

export default EduBubble
