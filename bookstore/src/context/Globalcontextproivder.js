import React,{useState} from "react";
import global from "./globalcontext";

const Globalcontextprovider=(props)=>{
    let [main,Setmain]=useState([])
    let [clickedbook,Setclickedbook]=useState({})

    return (
        <global.Provider value={{
        main:main,
        Setmain:Setmain,
        clickedbook:clickedbook,
        Setclickedbook:Setclickedbook
         }}>
            {props.children}
        </global.Provider>   
    )
}
export default Globalcontextprovider