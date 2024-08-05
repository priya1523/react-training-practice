//imports
import React,{createContext} from "react";

const initial_data = {
    id : "",
    review : "Supper Bad Book",
    reviewedBy : "Valmiki",
    targetBook : "Ramayana"
}

export const BookCTX = createContext(null);

export const ReviewCTX = createContext(null);