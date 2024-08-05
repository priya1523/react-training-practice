//imports
import React, { useContext } from "react";
import NavBar from "../molecules/NavBar";
import { BookCTX, ReviewCTX } from "../context";



function Order(){

    //context
    const bookCtx = useContext(BookCTX);
    const reviewCtx = useContext(ReviewCTX);

    return <main id="order-screen">
        <h2>This is Order component !</h2>
        <NavBar/>
        <article>
            <h3>Book List : </h3>
            <ul>
                {
                    bookCtx.books.map((el,index) => {
                        return <li key={index}>
                            {JSON.stringify(el)}
                        </li>
                    })
                }
            </ul>
            <hr></hr>
            <h3>The Reviews : </h3>
            <ul>
                {
                    reviewCtx.reviews.map((el,index) => {
                        return <li key={index}>
                            {JSON.stringify(el)}
                        </li>
                    })
                }
            </ul>
        </article>
    </main>
}

export default Order