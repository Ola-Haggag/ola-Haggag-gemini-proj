import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import image from './user.png'
import addImage from './addImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass , faLightbulb , faMessage } from '@fortawesome/free-regular-svg-icons';
import { faCode , faMicrophone } from '@fortawesome/free-solid-svg-icons';
import send from './send.png'
import gemini from './gemini.png'
import { useContext } from 'react';
import { context } from './context/context';

function App() {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(context)
  return (
    <div id='root' className="App">
      <Sidebar/>

       <div className="main">
        <div className='navbar'>
          <h4>Gemini</h4>
          <img className='imageUser' src={image} alt='not found'/>
        </div> {/* navbar */}

        <div className='container-main'>
            {!showResult &&(<>
            
              <div className='container-title '>
              <h2 className='title titleHello fw-bold'>Hello, Dev.</h2>
              <h2 className='title fw-bold'>How can I help you today?</h2>
          </div>

          <div className='cards'>
            <div className='card'>
              <p>Suggest beautiful places to see on an upcoming road trip</p>
              <FontAwesomeIcon className='card-icon' icon={faCompass} />
            </div>
            <div className='card'>
              <p>Briefly summarize this concept: urban planning</p>
              <FontAwesomeIcon className='card-icon'  icon={faLightbulb}/>
            </div>
            <div className='card'>
              <p>Brainstorm team bonding activities for our work retreat</p>
              <FontAwesomeIcon className='card-icon'  icon={faMessage} />
            </div>
            <div className='card'>
              <p>Tell me about React js and React native</p>
              <FontAwesomeIcon className='card-icon'  icon={faCode} />
            </div>
          </div>{/* cards */}
            </>
            )}
            {showResult && <div className='result'>
               <div className='result-title'>
                 <img className='imageUser' src={image} alt='not found'/>
                 <p style={{fontSize: "20px" , marginTop: "20px"}}>{recentPrompt}</p>
               </div>
                 <div className='result-data'>
                  <img src={gemini} alt='not found' style={{width: "30px" , height: "30px"}}/>
                  {loading&&(<div className='loader'>
                      <hr/>
                      <hr/>
                      <hr/>
                  </div>
                  )}
                  {!loading && <p>{resultData}</p>}
                  
                 </div>
              </div>}
         

        <div className='container-bottom'>
            <div className='search-prompt'>
              <input onChange={(e) =>setInput(e.target.value)} value={input} className='search-input' type='text' placeholder='Enter a prompt here'/>
              <div className='prompt-icons'>
                <img className='prompt-icon ' src={addImage} alt='' style={{height: "25px" , width: "25px"}}/>
                <FontAwesomeIcon className='prompt-icon' icon={faMicrophone} />
                <img onClick={() => onSent()} className='prompt-icon ' src={send} alt=''/>
              </div>
           </div>
           <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>{/* container-bottom */}



        </div> {/* container */}
       </div>

    </div>
  );
}

export default App;
