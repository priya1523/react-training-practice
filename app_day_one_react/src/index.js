
import { APP_VERSION, promisify, APP_NAME as app_name0} from "./second";
import bigTask from "./second";
import React, {useState} from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";

const APP_NAME = "Mordan Bas";

// sub function/component
const Article = () => {
    return <article>
                <section>
                    <h3>It's a Good Day !</h3>
                    <h5>Let's go to beatch .....</h5>
                </section>
                <section>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis consectetur sed non dolor error blanditiis saepe consequuntur fuga aliquam, eum sit dicta, nesciunt accusantium recusandae. Perspiciatis maxime expedita explicabo adipisci.
                    </p>
                </section>
            </article>
}



// main function
//component --> Any function which return the html is called as component
// components can be used as html tags
function Greeting()
{
    let initialValue = 100;

    const [firstEl, secondEl] = useState(initialValue);

    const [placeholder, setPlaceholder] = useState("");

    // const my_arr = [1,2,3,4];

    const [myArr,setMyArr] = useState([1,2,3,4,5]);

    const [toggleP,setToggleP] = useState(false);
    
    // const el1 = state_arr[0];
    // const el2 = state_arr[1];

    // let new_arr = [];

    //handleClick function for increase
    function handleClick(){
        secondEl(firstEl + 1);
    }

    function handleReset(){
        secondEl(initialValue);
    }

    const handleChange = (event) =>{
        // console.log(event.currentTarget.value);
        setPlaceholder(event.currentTarget.value);
    }

    function handleClickOnAdd(){
        // my_arr.push("w");
        // console.log(my_arr);

        myArr.push("w");
        console.log(myArr);
        const new_arr = [...myArr];
        setMyArr(new_arr);
    }

    return <main>
        <Article/> 
        <h3>The number is : {firstEl}</h3>
        <button onClick={handleClick}>Increase</button>
        <button onClick={handleReset}>Reset</button>
        <br/><br/>
        <section>
            <h4>{placeholder}</h4>
            <input onChange={handleChange} className={'my-class-' + firstEl} placeholder="Enter Something..." />
        </section>
        <section>
            <h4>{myArr}</h4>
            <button onClick={handleClickOnAdd}>Add</button>
        </section>
        <code>
            <ul>
                {myArr.map((el,index)=>{
                    return <li key={index}>{el}</li>
                })}
            </ul>
        </code>
        <section>
            <h4>This is dynamic section !</h4>
            <button onClick={function(){
                setToggleP(!toggleP);
            }}>Show/Hide</button>
            {
                // function(){
                //     if(toggleP){
                //         return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis consectetur sed non dolor error blanditiis saepe consequuntur fuga aliquam, eum sit dicta, nesciunt accusantium recusandae. Perspiciatis maxime expedita explicabo adipisci.</p>
                //     }
                // }()
                toggleP ? (<p>This is P tag...</p>) : (<p>No data found !</p>)
            }
            <br/>   
            {
                function(){
                    const max = 20;
                    let msg = "";

                    if(max>30){
                        msg = "It's greater !"
                    }else{
                        msg = "It's lesser !"
                    }
                    return msg;
                }()
            }
        </section>
    </main>
}

console.log("Hello !")

const array_ = () =>{
    const arr = new Array(1000);
    return arr.map(()=>{
        return "$";
    });
}

// binding with the index.html file
const root = createRoot(document.getElementById("root"));
// console.log(root);
//ReactDom.render(<Greeting/>,root); //old way
root.render(<Greeting/>); // new way

