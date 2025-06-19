''' ##### App.jsx
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import {Outlet} from "react-router-dom"



function App () {

  return(

   <>
     <Nav/>
     <Outlet/>
     <Footer/>

   </>
  )
}
export default App

###App.css
nav{
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    background-color: rgb(35, 34, 34);
    color: white;
}

nav ul{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style: none;
}

.footer{
     width: 100%;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color:black;
    color: white;
    font-size: 40px;
}

.home{
    padding: 2rem;
    text-align: center;
    background: #abd0f1;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: xx-large;
}

.welcome-text {
    animation: fadeInUp 1.2s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.home p {
    font-size: 1.1rem;
    color: #555;
}

.about{
    background-color: #6af9bd;
}

.contact{
    background-color:rgb(243, 204, 120);
}


.about,
.contact {
    padding: 2rem;
    text-align: center;
    
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.fade-in {
    animation: fadeInUp 1.2s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
}

.about p,
.contact p {
    font-size: 1.1rem;
    color: #555;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}


a{
    text-decoration: none;
    color: white;

}

a.active{
    color: red;
} 

###Home.jsx
import React from 'react'
import '../App.css'

function Home () {
    return(
        <div className="home">
            <h2 className="welcome-text">👋 Welcome to My React Website</h2>
            <p>This is your dynamic homepage with a smooth entrance animation!</p>
        </div>
    )
     

}

export default Home

####About.jsx
import React from 'react'
import '../App.css'

function About () {
    return(
       <div className="about">
        <h2 className="fade-in">👨‍💻 About Me</h2>
            <p>
                I'm a passionate developer exploring the world of React and web technologies.
            </p>
       </div>
    )
     

}

export default About

####Contact.jsx
import React from 'react'
import '../App.css'

function Contact () {
    return(
        <div className="contact">
             <h2 className="fade-in">📬 Contact Me</h2>
            <p>
                Feel free to reach out for collaborations or just to say hello!
            </p>
            <p>
                [mandalanjali2001@gmail.com]
            </p>
        </div>
    )
     

}

export default Contact

######Nav.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

function Nav () {
    return(
        <nav>
            <h1>LOGO</h1>
            <ul>
               <NavLink to="/"><li>HOME</li></NavLink>
               <NavLink to="/about"><li>ABOUT</li></NavLink>
               <NavLink to="/contact"><li>CONTACT</li></NavLink>
            </ul>
        </nav>
    )
     

}

export default Nav





if not responsive then make it responsive only.
'''