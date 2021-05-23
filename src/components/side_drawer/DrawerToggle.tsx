
import './DrawerToggle.css'

const DrawerToggle = props => {
  return (
    <div>
      <button 
        className = "toggle-button" 
        onClick = {props.click}>
          <div className = "line"></div>
          <div className = "line"></div>
          <div className = "line"></div>
      </button>
    </div>
  )
}

export default DrawerToggle
