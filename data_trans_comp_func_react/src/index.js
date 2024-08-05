//import pre-built libraries
import React, { useState, createContext, useEffect, useCallback, useReducer } from "react";
import { createRoot } from "react-dom/client";

//import css file
import './index.css';

//create context==>gives the common parent for all the child component
// by using the context in react we can avoid the props drilling..
const ChatContext = createContext();

const BOOK_INITAL_VALUE = {
    name : "",
    price : 0,
    author : ""
} 

//child component
function ChatA(){

    return (<ChatContext.Consumer>
        {function(data){

        const handleFormSubmit=(event)=>{
            event.preventDefault();
            const form = (event.currentTarget);
            // console.log(form);
            const formData = new FormData(form);
            // console.log(formData);
            const user_res = formData.get('response');
            // console.log(user_res);
            data.addToListA(user_res);
        }
        return <article className="chat">
        <ol>
        {
           data.listB.map(res => <li>{res}</li>)
        }
        </ol>
        <form onSubmit={handleFormSubmit}>
            <input name='response'/>
            <button>Send</button>
        </form>
    </article>
    }}
    </ChatContext.Consumer>)
}

//child component
function ChatB(props){

    const handleFormSubmit=(event)=>{
        event.preventDefault();
    
        const form = (event.currentTarget);
        console.log(form);
        const formData = new FormData(form);
        console.log(formData);
        const user_res = formData.get('response');
        console.log(user_res);
        props.enterB(user_res);
    }

    return <article className="chat">
            <ol>
                {
                    props.resA.map(res => <li>{res}</li>)
                }
            </ol>        
            <form onSubmit={handleFormSubmit}>
                <input name='response'/>
                <button>Send</button>
            </form>   
        </article>
}

//component
function ParentOfChatA(){

    return <ChatA/>
}

//component
function SuperParentOfChatA(){
    return <ParentOfChatA />
}

//main component
function App(){

    //array for the chatA
    const [resFromA, setResFromA] = useState([]);
    //array for the chatB
    const [resFromB, setResFromB] = useState([]);

    const[list,setList] = useState([]);

    

    const handleDataFromChatA = (data) =>{
        const new_arr = [...resFromA,data];
        setResFromA(new_arr);
    }

    const handleDataFromChatB = (data) =>{
        const new_arr = [...resFromB,data];
        setResFromB(new_arr);
    }

    useEffect(()=>{
        if(list.length == 0){
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res =>{
                console.log(res);
                return res.json();
            })
            .then((jsonData)=>setList(jsonData))
            .catch(err => console.log(err));
        }
    },[list])

    useEffect(()=>{
       if(resFromB.length != 0){
            console.log("Got response from B : Trigger chain.");
            setResFromA([...resFromA,"Change happend in B"])
       }
    },[resFromB])

    useEffect(()=>{
        if(resFromA.length != 0){
             console.log("Got response from A : Trigger chain.");
            //  setResFromA([...resFromA,"Change happend in B"])
            setList({},...list);
        }
     },[resFromA])

     useEffect(()=>{
        if(list.length != 0){
            console.log("List got new value");
        }
     },[list])

     function Book(){

        // const [book, setBook] = useState(BOOK_INITAL_VALUE);

        const [book, setBook] = useReducer(function(previousState,currentState){
            // console.log("Well, it is here.. ",state);
            const price = currentState.price;
            let actualprice = 0;
            if(price > 10){
                actualprice = 10;
            }else{
                actualprice = price;
            }
            return {
                ...previousState,
                ...currentState,
                price : actualprice
            }
        },BOOK_INITAL_VALUE);

        function handleBookName(event){
            setBook({
                name : event.currentTarget.value
            })
        }

        function handleBookPrice(event){
            const value = event.currentTarget.value;
            setBook({
                price : value
            })
        }

        function handleBookAuthor(event){
            setBook({
                author : event.currentTarget.value
            })
        }

        return <section>
            <form>
                <table>
                    <tr>
                        <td>Book name : </td>
                        <td>
                            <input type="text" onChange={handleBookName}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Book Price : </td>
                        <td>
                            <input type="number" onChange={handleBookPrice} />
                        </td>
                    </tr>
                    <tr>
                        <td>Book Author : </td>
                        <td>
                            <input type="text" onChange={handleBookAuthor} />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit">Submit</button>
                        </td>
                    </tr>
                </table>
                <article>
                    <p>
                        {JSON.stringify(book)}
                    </p>
                </article>
            </form>
        </section>
     }

    return <main>
        {/* <ChatA resB={resFromB} enterA={handleDataFromChatA}/> */}
        {/* <ChatContext.Provider value={{
            listA : resFromA,
            listB : resFromB,
            addToListA : handleDataFromChatA,
            addToListB : handleDataFromChatB
        }}>
            <SuperParentOfChatA />
            <ChatB resA={resFromA} enterB={handleDataFromChatB}/>
        </ChatContext.Provider> */}
        <Book />
    </main>
}

const app = createRoot(document.getElementById('root'));
app.render(<App/>);


// useState() --> reactive state(data)
// useEffect() --> to protect function call or code from multiple executions.App
// useCallback() --> to protect from multiple function declaration
// useMemo() --> will protect from multiple function execution which will give value
// useContext() --> help to avoid the props drilling