import React,{useContext} from "react";
import global from "../context/globalcontext";
import Book from "./Book";


let BookSection =()=>{
    let {main,Setmain}=useContext(global)
    console.log(main)
    return (
        <div className="booksection">
          {
            main.map((element,index)=>{
                if(index>=3){
                    return <Book obj={element}></Book>
                }
            })
        }   
        </div>
    )
}

export default BookSection