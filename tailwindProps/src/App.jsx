import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'
import Student from './student'
function App() {

  return (
    <>
      
   <Card/ >

   <Student name = "anil sidhu" age ={30}  isStudent = {true}/>
   <Student  name = "ram singh"  age = {45}  isStudent = {true}>
    <Student name = "divya" age = {20} isStudent = {true} />


   </Student>
   </>
    
  )
}

export default App
