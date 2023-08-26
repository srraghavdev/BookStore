import React,{useContext} from "react";
import global from '../context/globalcontext'


let Book=({obj})=>{
    let{main,Setmain,clickedbook,Setclickedbook}=useContext(global)
    function addactive(){
        Setclickedbook(obj)
    }
return (
    <div className="book-nonactive" onClick={()=>addactive(obj)}>
       { obj.volumeInfo.imageLinks ? <img src={obj.volumeInfo.imageLinks.thumbnail} className="books"></img> : <div className="noimage2">No Image available</div> }
    </div>
)
}
export default Book