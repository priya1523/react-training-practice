import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

import "./index.css";

const data = ['Java', 'C', 'C++', 'Python', 'Angular', 'React'];



//component-sub

const ProgrammingLanguage = (Props)=>{
    // console.log(Props);

    //handle click function for child component
    function handleClick(){
        console.log("The clcik from the child componet value : "+Props.value);
        Props.recieveValue(Props.value);
    }

    return <article className="language">
                    <section>
                        <h1>{Props.value}</h1>
                    </section>
                    <section>
                        {/* <button onClick={handleClick}>Click here for more info....</button> */}
                        {Props.renderFooter(Props.value)}
                    </section>
                </article>
}


//component-main
function App(){

    const[text, setText] = useState();

    function handleRecieve(returnValue){
        setText(returnValue);
        console.log(`The parent get the value ${returnValue} in return from child`);
    }

    return <main>
        { text ? <h1>The selected Language is : {text}</h1> : null }
        {
            data.map(function(el){
                return <ProgrammingLanguage value = {el} 
                    recieveValue = {handleRecieve}
                    renderFooter={function(pLanguage){
                        //
                        if (pLanguage == "Java"){
                            return <button>Click Here</button>
                        }
                        if(pLanguage == "C"){
                            return <input/>
                        }
                        if(pLanguage == "C++"){
                            return <select>
                                <option>Select..</option>
                                <option>C++</option>
                                <option>Php</option>
                            </select>
                        }

                        return <a href="https://www.google.co.in/"> Click Here...</a>
                    }}/>
            })
        }
    </main>
}

const app = createRoot(document.getElementById('root'));
app.render(<App/>);