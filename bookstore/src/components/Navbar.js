import React from 'react'
import Logo from '../images/Logo.png'
import Search from '../images/Search.png'
import Name from '../images/Name.png'
import Avatar from '../images/Avatar.png'
import Noti from '../images/Noti.png'
import Heart from '../images/Heart.png'
import Premium from '../images/Premium.png'
import { useState,useContext } from 'react'
import axios from 'axios'
import global from '../context/globalcontext'

let Navbar= ()=>{
    let[search,Setsearch]=useState('')
    let{main,Setmain,clickedbook,Setclickedbook}=useContext(global)
    async function searchfn(){
        if(search){
            try{
             let res= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
            Setmain([...res.data.items])
            Setclickedbook({}) 
            }
           catch(error){
            alert('Error: '+ error)
           }
        }
    }
    return (
        <navbar>
            <div className='left'>
             <img src={Logo} alt='def'></img>
             <img src={Name} alt='def'></img>   
            </div>
            <div className='middle'>
                <div className='search'>
                 <img src={Search} alt='def' placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..." ></img>   
                 <input type='text' value={search} onChange={(event)=>Setsearch(event.target.value)}></input>   
                </div>
                <button onClick={searchfn}>Search</button>
            </div>
            <div className='right'>
                <img src={Heart} alt='def'></img>
                <img src={Noti} alt='def'></img>
                <img src={Premium} alt='def'></img>
                <img src={Avatar} alt='def'></img>
            </div>
        </navbar>
    )
}

export default Navbar