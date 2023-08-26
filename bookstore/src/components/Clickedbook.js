import React,{useContext} from "react";
import global from '../context/globalcontext'

let Clickedbook =({element})=>{
   console.log(element)
    let{main,Setmain,clickedbook,Setclickedbook}=useContext(global)
    function addactive(){
    Setclickedbook(element)
    }
   
    return(
        <div className="highbook" onClick={()=>addactive(element)} id='clicked'>
            <div className="leftbook">
           { element.volumeInfo.imageLinks ? <img src={element.volumeInfo.imageLinks.thumbnail} alt='def' className="tilted" id='clickedimg'></img> : <div className="noimage1">No Image available </div> }
            </div>
            <div className="rightbook" id='clicked2'>
                <div className="title">{element.volumeInfo.title}</div>
                <div className="author">
                    <p className="p1">{element.volumeInfo.authors[0]}</p>
                    <p className="p2">Published On : {element.volumeInfo.publishedDate}</p>
                </div>
                <p className="text" id='desc'>{element.volumeInfo.description}</p>
                <p className="infobook">Avg Rating : {element.volumeInfo.averageRating} | Rating Count : {element.volumeInfo.ratingsCount} | Publisher : {element.volumeInfo.publisher} | Language : {element.volumeInfo.language}
                <div className="buttons">
                 <a href={element.volumeInfo.previewLink} className="readmore">Now Read!</a>
                 <a href={element.volumeInfo.infoLink} className="readmore">More Info!</a>    
                </div>
                </p>
                
            </div>
        </div>
    )
}
export default Clickedbook