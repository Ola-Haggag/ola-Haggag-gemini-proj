import { createContext, useState } from "react";
import runChat from "../config/gemimi";

export const context = createContext()

const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("")
    const [prevPrompts,setPrevPrompts] = useState([])
    const [showResult,setShowResult] = useState(false)
    const [loading,setLoading] = useState(false)
    const [resultData,setResultData] = useState("")
    
    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response
        if(prompt !== undefined){
            response = await runChat(prompt)
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            response = await runChat(input)
        }
     /*    setRecentPrompt(input)
        setPrevPrompts(prev=>[...prev,input])
        const response =  await runChat(input) */
        setResultData(response)
        setLoading(false)
        setInput("")

    }
/*     onSent("What is react js")
 */    const contextValue = {
           prevPrompts,
           setPrevPrompts,
           onSent,
           setRecentPrompt,
           recentPrompt,
           showResult,
           loading,
           resultData,
           input,
           setInput
       }
    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}
export default ContextProvider