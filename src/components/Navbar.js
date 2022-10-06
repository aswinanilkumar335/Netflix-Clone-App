import React from 'react'
import './Navbar.css'
import {useEffect,useState} from 'react'

function Navbar() {
    const [show,setShow]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>200){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    },[])

  return (
    <div className={`nav${show && "black_nav"}`}>
        <img className='logo' src='https://i.postimg.cc/CKVzvJn4/netflix-official-logo-icon-168085.png'
        alt='Netflix logo'>
        </img>
    </div>
  )
}

export default Navbar