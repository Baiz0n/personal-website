import './App.css';
import Toolbar from './components/toolbar/Toolbar'
import SideDrawer from './components/side_drawer/SideDrawer'
import Backdrop from './components/backdrop/Backdrop'
import { useState } from 'react';
import Main from './components/page/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Education from './components/page/Education'
import Employment from './components/page/Employlment'
import Contact from './components/page/Contact'

function App() {

  const [showDrawer, setShowDrawer] = useState(false);
  const onDrawerClick = () => setShowDrawer(!showDrawer);
  const onBackdropClick = () => setShowDrawer(false);

  let backdrop = showDrawer &&
  <Backdrop backdropClick = { onBackdropClick }/>

  const [isStartup, setIsStartup] = useState(false)

  return (
    <Router>
      <div style={{height: '100%'}}>
        <Toolbar 
          drawerClick = { onDrawerClick }
        />

        <SideDrawer
          show = { showDrawer }
        />
        {backdrop}

          <Switch>
            <Route path = "/" exact component = {Main}/>
            <Route path = "/education" component = {Education}/>
            <Route path = "/employment" component = {Employment}/>
            <Route path = "/contact" component = {Contact}/>
          </Switch> 
      </div>
    </Router>
  );
}

export default App;
