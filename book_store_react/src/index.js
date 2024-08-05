//imports
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./Screens/Home";
import BookShop from "./Screens/BookShop";
import Order from "./Screens/Order";
import ContactUs from "./Screens/ContactUs";
import { useState } from "react";
import { BookCTX, ReviewCTX } from "./context";
import Critique from "./Screens/Critique";


const router = createBrowserRouter([
    {
        path : "/",
        element : <Home />
    },
    {
        path : "book-list",
        element : <BookShop />
    },
    {
        path : "orders",
        element : <Order />
    },
    {
        path : "contact-us",
        element : <ContactUs />
    },
    {
        path : "critique",
        element : <Critique />
    }
])

function RootComponent(){

    const [books,setBooks] = useState([]);
    const [reviews,setreviews] = useState([]);

    const addBooks = (newBook) => {
        setBooks([newBook,...books])
    }

    const addReviews = (newReview) => {
        setreviews([newReview,...reviews])
    }

    return <BookCTX.Provider value = {
                {   books : books,
                    addBook : addBooks 
                }
            }>
            <ReviewCTX.Provider value = {
                {   reviews : reviews,
                    addReview : addReviews
                }
            }>
                <RouterProvider router={router}>
                    <h1>Hello</h1>
                    <App/>
                </RouterProvider>
            </ReviewCTX.Provider>
        </BookCTX.Provider>
}

const root = createRoot(document.getElementById("root"));
root.render(<RootComponent/>);