import ProfileSticker from './profile/profile-sticker.png'
import './Main.css'

const p1 = "Welcome to my website"
const p2 = "I'm Joel, a student aspiring"
const p3 = "to become an awesome dev"
const p4 = "....maybe at your company ;)"
const p5 = "Feel free to checkout all the links"

const Main = () => {
  return (
    <div className = "first-container">
      <div className = "second-container">
        <img src = {ProfileSticker} alt="Yoel"/>

        <h1>Hi!</h1>

          <div className = "typewriter__container">
            <div className = "typewriter">
              <p>{p1}</p>
              <p>{p2}</p>
              <p>{p3}</p>
              <p>{p4}</p>
              <p>{p5}</p>
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default Main
