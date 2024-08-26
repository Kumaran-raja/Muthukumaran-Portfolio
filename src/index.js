import React from "react";
import ReactDOM from 'react-dom';
import './index.css'
import image from './images/mypic.jpg'
import instagram from './images/instagram.png'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import logo from './images/logo3.png'
import aboutImg from './images/about.jpg'
import html from './images/html.png'
import js from './images/js.png'
import css from './images/css.png'

import java from './images/java.png'
import react from './images/react.png'
import mongodb from './images/mongodb.png'
import firebase from './images/firebase.png'
import git from './images/git.png'
import androidStudio from './images/android-studio.png'
import vsCode from './images/visual-studio.png'
import aws from './images/aws.png'
import mysql from './images/mysql.png'
import spring from './images/spring-boot.png'
import jQuery from './images/jquery.png'
import bootstrap from './images/bootstrap.png'
import location from './images/location.png'
import email from './images/gmail.png'
import phone from './images/phone.png'
import digital from './images/digital marketing.jpg'
import calculator from './images/calculator.jpg'
import comingsoon from './images/coming soon.jpg'

class Header extends React.Component{
  render(){
    return(
      <div className="Home">

      <header >
        <nav>
          <div style={{display:"flex"}}>
            <img className="logo" src={logo} alt="logo"/>

            <h1 className='name'>KUMARANRAJA</h1>
          </div>
          <div className='nav1'>
            <a className="nav_item" href='#' >Home</a>
            <a className="nav_item" href='#about' >About</a>
            <a className="nav_item" href='#skills' >Skills</a>
            <a className="nav_item" href='#project' >Project</a>
            <a className="nav_item" href='#contact' >Contact</a>
          </div>
        </nav>
      </header>
      <section>
      
        <div style={{marginTop:"auto",marginBottom:'auto'}}>
          <img className='profile_img' src={image} alt="My Image"></img>

        </div>
        <div>
          <h1 className="myName">Hi, I am <br></br>MUTHUKUMARAN R</h1>
          <h1 className="role">Full-Stack Developer | Android Application Developer</h1>
          <div className="contact_img_icons">
            <a href="https://www.instagram.com/kumaranraja_22/" target="blank"><img className="contact_img" src={instagram}/></a>
            <a href="https://github.com/Kumaran-raja" target="blank"><img className="contact_img" src={github}/></a>
            <a href="https://www.linkedin.com/in/muthukumaran-r/" target="blank"><img className="contact_img" src={linkedin}/></a>
          </div>
        </div>
       
      </section>
      </div>
    )
  }
}


class About extends React.Component{
  render(){
    return(
      <div id="about" >
        <div className="about_img_container">
          <img className="about_img" src={aboutImg} alt="Computer Image"></img>
        </div>
          <div className="about_content_container">
          <h1 className="about_headline" style={{ color:"greenyellow"}}>About Us</h1>
          <h3 className="about_content">I am <span>Muthukumaran R</span>, an enthusiastic software developer from India with a Bachelor of Technology in <span>Information Technology</span> and a specialization in full stack development and application development. My passion lies in creating practical solutions for real-world problems, and I thrive on the challenge of transforming innovative ideas into functional applications. I am deeply committed to continuous learning and improvement, which drives me to explore new technologies and frameworks regularly. This dedication allows me to stay ahead of industry trends and integrate cutting-edge solutions into my projects. My goal is to leverage my skills and knowledge to build impactful software that addresses diverse needs and delivers exceptional user experiences.</h3>
        </div>
        
      </div>
    )
  }
 
}
class Skills extends React.Component{
  render(){
    return(
      <div id="skills">
        <div >
          <h1 className="skills_headline">Skills</h1>

        </div>
       <div style={{borderLeft:"1px solid", paddingLeft:"20px"}}>
          <h1 className="skill_set">Frontend Development</h1>
          <div className="skills_container">
            <div>
              <img className="skills_img" src={html} alt="HTML5 logo" />
              <p className="skill_name">HTML</p>
            </div>
            <div>
              <img className="skills_img" src={css} alt="CSS logo"/>
              <p className="skill_name">CSS</p>
            </div>
            <div>
              <img className="skills_img" src={bootstrap} alt="bootstrap logo" />
              <p className="skill_name">Bootstrap</p>
            </div>
            <div>
              <img className="skills_img" src={js} alt="js logo" />
              <p className="skill_name">JavaScript</p>
            </div>
            <div>
              <img className="skills_img" src={jQuery} alt="jquery logo" />
              <p className="skill_name">jQuery</p>
            </div>
            <div>
              <img className="skills_img" src={react} alt="react logo" />
              <p className="skill_name">React</p>
            </div>
          </div>
          <h1 className="skill_set">Backend Development</h1>
          <div className="skills_container">

            <div>
              <img className="skills_img" src={java} alt="java logo"/>
              <p className="skill_name">Java</p>
            </div>
            <div>
              <img className="skills_img" src={mongodb} alt="mongoDb logo" />
              <p className="skill_name">MongoDB</p>
            </div>
            <div>
              <img className="skills_img" src={firebase} alt="firebase logo"/>
              <p className="skill_name">Firebase</p>
            </div>
            <div>
              <img className="skills_img" src={mysql} alt="mySql logo" />
              <p className="skill_name">MySQL</p>
            </div>
            <div>
              <img className="skills_img" src={spring} alt="spring logo"/>
              <p className="skill_name">Spring</p>
            </div>
            <div>
              <img className="skills_img" src={aws} alt="AWS logo" />
              <p className="skill_name">AWS</p>
            </div>
          </div>
          <h1 className="skill_set">Development Tools</h1>
          <div className="skills_container">
            <div>
              <img className="skills_img" src={vsCode} alt="VS logo" />
              <p className="skill_name">VS Code</p>
            </div>
            <div>
              <img className="skills_img" src={androidStudio} alt="android studio logo" />
              <p className="skill_name">Android Studio</p>
            </div>
            <div>
              <img className="skills_img" src={git} alt="git logo"/>
              <p className="skill_name">Git</p>
            </div>
            <div>
              <img className="skills_img" src={github} alt="github logo"/>
              <p className="skill_name">GitHub</p>
            </div>
          </div>

       </div>
       
      </div>
    )
  }
 
}

class Project extends React.Component{
  render(){
    return(
      <div >
        <div id="project">
          <h1 style={{textAlign:"center" ,marginBottom:"30px", color:"greenyellow"}}>Projects</h1>
            <div className="Project_grid">
              <div className="project_container">
                <img className="project_img" src={digital} alt="digital marketing image"/>
                  <h3 className="project_name">Digital Marketing Application</h3>
                  <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                    <a href="https://github.com/Kumaran-raja/digitalMarketingApp" target="_blank" rel="noopener noreferrer">
                      <button className="source_code">Source Code</button>
                    </a>
                  </div>
              </div>
              <div className="project_container">
                <img className="project_img" src={calculator} alt="calculator image"/>
                <h3 className="project_name">Calculator</h3>
                <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                    <a href="https://github.com/Kumaran-raja/Calculator" target="blank"><button className="source_code">
                      Source Code
                    </button></a>
                  </div>
              </div>
          
              
            </div>
        </div>
      </div>
    )
  }
 
}
class Contact extends React.Component{

  render(){
    return(
      <div id="contact">
         <div style={{margin:"auto"}}>
         <h1 className="contact_headline" style={{ color:"greenyellow"}}>Contact Me</h1>

          <div style={{display:"flex", gap:"20px"}}>
            <img className="contact_page_img" src={location} alt="location icon" />
            <div>
            <h2 className="contact_head">Address</h2>
            <h3 className="contact_data" onClick={()=>{window.open('https://www.google.com/maps?q=8.442198813044733, 77.63033155266302', 'blank')}}>136/2 Nadar street,<br></br>Sirumalanchi,Tirunelveli, Tamilnadu - 627103</h3>
          </div>
            </div>
            <div style={{display:"flex", gap:"20px"}}>
            <img className="contact_page_img" src={email} alt="email icon" />
            <div>
            <h2 className="contact_head">Email</h2>
            <h3 className="contact_data" onClick={()=>{window.open('mailto:kumaranraja222@gmail.com','blank')}}>kumaranraja222@gmail.com</h3>
          </div>
            </div>
            <div style={{display:"flex", gap:"20px"}}>
            <img className="contact_page_img" src={phone} alt="phone icon" />
            <div>
            <h2 className="contact_head">Phone</h2>
            <h3 className="contact_data" onClick={()=>{window.open("tel:9543439311",'blank')}}>9543439311</h3>
          </div>
        
            </div>
            <div className="contact_img_icons">
            <a href="https://www.instagram.com/kumaranraja_22/" target="blank"><img className="contact_img" src={instagram}/></a>
            <a href="https://github.com/Kumaran-raja" target="blank"><img className="contact_img" src={github}/></a>
            <a href="https://www.linkedin.com/in/muthukumaran-r/" target="blank"><img className="contact_img" src={linkedin}/></a>
            <a href="https://drive.google.com/file/d/1wBDQ_fuUP-cDaHbZRNY1KgS8VBgq1YuM/view?usp=sharing" target="blank">
            <button className="resume_button" >Resume</button></a>
          </div>
          </div>
          <div className="messageBox">
            <h1>Send me a message</h1>
              <div>
                <div>
                <input className="input" placeholder="Your Name"/>

                </div>
                <div>
                <input className="input" placeholder="Your Email"/>
                  
                </div>
                <div>
                <textarea className="message" placeholder="Message Here..."/>
                </div>
                <button className="submit">Send</button>
              </div>

          </div>
        <h1 className="copyRights">&copy; 2024 MUTHUKUMARAN. All rights reserved.</h1>

      </div>
    )
  }
 
}
class Call extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        
      </div>
    )
  }
}
ReactDOM.render(<Call/>,document.getElementById('root'));

