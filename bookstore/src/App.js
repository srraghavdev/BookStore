import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useEffect,useContext } from 'react';
import global from './context/globalcontext';
import axios from 'axios'
import ActiveBookSection from './components/ActiveBookSection';
import BookSection from './components/BookSection';
function App() {
  let {main,Setmain,clickedbook,Setclickedbook}=useContext(global)
  console.log(main)
  console.log(clickedbook)
  useEffect(()=>{
    (async ()=>{
      try{
        let res1= await axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
        let res2= await axios.get('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes')
        Setmain([...res1.data.items,...res2.data.items])
        Setclickedbook({})
      }
     catch(error){
      alert('Error:'+error)
     }
    })()
  },[])
  return (
    <div>
    <Navbar></Navbar>
   {main.length!=0 && <ActiveBookSection></ActiveBookSection> }
   <div className="heading">More Books</div>    
    {main.length!=0 && <BookSection></BookSection>}
    </div>
 
  );
}

export default App;
