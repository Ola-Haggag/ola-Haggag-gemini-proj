import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faPlus , faUndo , faCog } from '@fortawesome/free-solid-svg-icons';
import { faMessage , faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { context } from "../context/context";

const Sidebar = () => {
    const[collapse , setCollapse] = useState(false)
    const {onSent,prevPrompts,setRecentPrompt} = useContext(context)
    
    const loadPrompt = async (prompt) =>{
        setRecentPrompt(prompt)
       await onSent(prompt)
    }
    function toggleCollapse() {
        setCollapse(prevCollapse => !prevCollapse)
    }
    return(
        <div className="sidebar">
            <div className="sideupper">
            <FontAwesomeIcon onClick={toggleCollapse} className="icn bar d-block" icon={faBars} />

            <div className="chat mt-5">
                <FontAwesomeIcon className="plus" icon={faPlus} />
                {collapse &&<p className="pchat">New Chat</p>}
            </div>

            {collapse&&<div className="recent">
                <p className="rec-title mt-4 mb-4">Recent</p>
                {prevPrompts.map((item,index)=>{
                    return(
                        <div onClick={()=>loadPrompt(item)} className="recentData">
                            <FontAwesomeIcon  className="" icon={faMessage} />
                            <p className="p-recent">{item}...</p>
                        </div>
                    )
                })}
             
            </div>}
            </div>

            <div className="sidebottom">
                <div className="bottomData">
                  <FontAwesomeIcon className="icn" icon={faQuestionCircle} />
                  {collapse&&<p>Help</p>}
               </div>
               <div className="bottomData">
                  <FontAwesomeIcon className="icn" icon={faUndo} />  
                  {collapse&&<p>Activity</p>}
               </div>
               <div className="bottomData">
                  <FontAwesomeIcon className="icn" icon={faCog} />
                  {collapse&&<p>Settings</p>}
               </div>
            </div>
        </div>
    )
}
export default Sidebar