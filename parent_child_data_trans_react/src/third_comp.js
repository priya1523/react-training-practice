//pre-built libraries
import React, { useState} from "react";

function ThirdComp(Props){

    const [text,setText] = useState(Props.defaultValue);

    function handleChange(event){
        setText(event.currentTarget.value);
        Props.valueFromThirdComp(event.currentTarget.value);
    }

    return <section className="third-comp">
        <h3>This is the third component !</h3>
        <input onChange={handleChange} value={text}/>
        <p>The third comp : {text}</p>
        <h3>The end of the Third component .</h3>
    </section>
}

export default ThirdComp;