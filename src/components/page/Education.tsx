import './Education.css'

const Education = () => {
  return (
    <div>
      <div className = "education-container">
        <div className = "left-education">
          <h1>Eductation</h1>
        </div>

        <div className = "years-container">
          <div className = "year-item">
            <div className = "year-wrapper">
              <p className ="year">2018 - present</p>
            </div>
            

            <div className="par-wrapper">
              <h5>My Eduction</h5>
              <p>On this page you'll find my education jurney which started in March 2018. I started as a self tought dev, later taking a mobile app dev bootcamp in Android, that all together led me to start studying CS</p>
            </div>
          </div>
        </div>

      </div>



      <div className = "education-container" style={{backgroundColor: '#4d007a'}}>
        <div className = "left-education">
          <h1>Frontend</h1>
        </div>

        <div className = "years-container">
          <div className = "year-item">
           <div className = "year-wrapper">
              <p className ="year">April 2018</p>
            </div>
            
            <div className="par-wrapper">
              <h5>Udemy Coure: <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">Course</a></h5>
              <p>Completed half of this course, which includes the basics of Frontend; Html, CSS and basic Javascript. The course gave me the opportunity to code up my first few super basic projects</p>
            </div>
          </div>

          <div className = "par-spacer"></div>

          <div className = "year-item">
            <div className = "year-wrapper">
              <p className ="year">2021</p>
            </div>
            
            <div className="par-wrapper">
              <h5>React</h5>
              <p>After studying CS and working oversees, I picked up React using various sources for learning it</p>
            </div>
          </div>
        </div>
      </div>


      <div className = "education-container" style={{backgroundColor: '#2e3238'}}>
        <div className = "left-education">
          <h1>Native Android</h1>
        </div>

        <div className = "years-container">
          <div className = "year-item">
           <div className = "year-wrapper">
              <p className ="year">2018 - 2019</p>
            </div>
            
            <div className="par-wrapper">
              <h5>John Bryce</h5>
              <p>Completed Successfully the Android Mobile App development course offered by John Bryce institution.</p>
              <p>The course included two major projects.</p>
              <p>Was a great introduction to computer programming</p>
              <p>while being given the oppertunity to solve real world problems with a mobile device</p>
            </div>
          </div>

          <div className = "par-spacer"></div>

          <div className = "year-item">
            <div className = "year-wrapper">
              <p className ="year">2018</p>
            </div>
            
            <div className="par-wrapper">
              <h5>Team Tree House</h5>
              <p>In order to supplement my education at John Bryce,</p>
              <p>I took upon myself to complete beginner Android tracks at <a href="https://teamtreehouse.com/">Team Tree House</a></p>
            </div>
          </div>
        </div>
      </div>


      <div className = "education-container" style={{backgroundColor: '#0d2a4c'}}>
        <div className = "left-education">
          <h1>University</h1>
        </div>

        <div className = "years-container">
          <div className = "year-item">
            <div className = "year-wrapper">
              <p className ="year">2019 - present</p>
            </div>
            

            <div className="par-wrapper">
              <h5>Open University of Israel</h5>
              <p>Currently pusuing a BSc in Computer Science, GPA 91. I plan to complete the degree in early 2023.</p>
              <p>University studies has helped me develop analytical and rigorous thinking. This is particularly helpful when facing theoretically intellectually difficult literature on technology and in general</p>
            </div>
          </div>
        </div>

      </div>

      <div className = "bottom-space"></div>


    </div>
  )
}

export default Education
