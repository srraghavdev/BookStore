import React from "react";
import global from "../context/globalcontext";
import HighlightedBook from "./HighlightedBook";
import { useContext } from "react";
import Clickedbook from "./Clickedbook";

let ActiveBookSection =()=>{
    let {main,Setmain,clickedbook,Setclickedbook}=useContext(global)
    
    return (
        <div >
            {  JSON.stringify(clickedbook).length===2 ?    <div className="activebooksection"> 
                                                            {main.map((element,index)=>{
                                                                                            if(index<3){
                                                                                                                            return <HighlightedBook element={element} ></HighlightedBook>
                                                                                                                        }
                                                                                                                })
                                                                                    } </div>  : <Clickedbook element={clickedbook}></Clickedbook>
                                                                                
            }   
      </div>
    )
}

export default ActiveBookSection