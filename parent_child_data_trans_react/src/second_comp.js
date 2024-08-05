//pre-built libraries
import React,{ useState } from "react";

//custome components
import ThirdComp from "./third_comp";

function SecondComp(Props){

    const [text, setText] = useState(Props.defaultValue);

    function getValueFromThirdComp(data){
        setText(data);
        Props.vauleFromSecondComp(data);
    }

    return <section className="second-comp">
        <h2>This is second component !</h2>
        {/* <input value={text} onChange={handleChange}/> */}
        {/* <ThirdComp valueFromThirdComp = {getValueFromThirdComp} defaultValue={text}/> */}
        {Props.children}
        <p>The second component : {text}</p>
        <h2>The end of the second component .</h2>
    </section>
}

export default SecondComp;