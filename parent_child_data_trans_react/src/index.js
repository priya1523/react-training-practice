//pre-nuilt libraries 
import React, { useState} from "react";
import { createRoot } from "react-dom/client";
// custome components
import SecondComp from "./second_comp";
//css file
import './index.css';
import ThirdComp from "./third_comp";

const DEFAULT_VALUE = "Hello.."

function App() {

    const [text, setText] = useState(DEFAULT_VALUE);

    // function getValueFromSecondComp(data){
    //     setText(data);
    // }

    function getvalurFromThirdComp(data){
        setText(data);
    }

    // return <main className="first-comp">
    //     <h1>This is the Main component !</h1> 
    //     <SecondComp vauleFromSecondComp={getValueFromSecondComp} defaultValue={text}/>
    //     <p>The main Comp : {text}</p>
    //     <h1>This is end of Main componeznt .</h1>
    // </main>

    return <main className="first-comp">
        <h1>This is the Main component !</h1>
        <SecondComp defaultValue={text}>
            <ThirdComp defaultValue={text} valueFromThirdComp={getvalurFromThirdComp}></ThirdComp>
        </SecondComp>
        <p>The main Comp : {text}</p>
        <h1>This is end of Main component .</h1>
    </main>
}

const app = createRoot(document.getElementById('root'));
app.render(<App/>);