import './SideDrawer.css'

const SideDrawer = props => {
 
  let drawerClass = 'side-drawer'
  if (props.show) drawerClass = drawerClass + ' open'
  
  return (
    <nav className={drawerClass}>
      <ul>
        <li><a href="/education">Education</a></li>
        <li><a href="https://github.com/Baiz0n" target="_blank">Projects</a></li>
        <li><a href="/employment">Employment History</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default SideDrawer
