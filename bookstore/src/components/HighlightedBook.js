import React,{useContext} from "react";
import global from '../context/globalcontext'

let HighlightedBook =({element})=>{
    let{main,Setmain,clickedbook,Setclickedbook}=useContext(global)
    function addactive(){
    Setclickedbook(element)
    }
    return(
        <div className="highbook" onClick={()=>addactive(element)}>
            <div className="leftbook">
           { element.volumeInfo.imageLinks ? <img src={element.volumeInfo.imageLinks.thumbnail} alt='def' className="tilted"></img> : <div className="noimage1">No Image available </div> }
            </div>
            <div className="rightbook">
                <div className="title">{element.volumeInfo.title}</div>
                <p className="text">{element.volumeInfo.description}</p>
                <a href={element.volumeInfo.previewLink} className="readmore">Now Read!</a>
            </div>
        </div>
    )
}
export default HighlightedBook