import './Toolbar.css'
import DrawerToggle from '../side_drawer/DrawerToggle'

const Toolbar = props => {
  return (
    <header className = "toolbar">
      <nav className = "navigation">
        <div className = "toggle-button">
          <DrawerToggle click = {props.drawerClick}/>
        </div>

        <div className = "title">
          <h3><a href="/">Joel's Porftfolio</a></h3>
        </div>

        <div className = "spacer"></div>

        <div className = "navigation-items">
          <ul>
            <li><a href="/education">Education</a></li>
            <li><a href="https://github.com/Baiz0n" target="_blank">Projects</a></li>
            <li><a href="/employment">Employment History</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Toolbar
