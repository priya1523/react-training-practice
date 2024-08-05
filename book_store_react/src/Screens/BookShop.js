//imports
import React, { useContext } from "react";
import NavBar from "../molecules/NavBar";
import { BookCTX } from "../context";


//form component
const CreateBook = (props) =>{

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        // console.log("Form data");
        const  form = event.currentTarget;
        // console.log(form);
        const formData = new FormData(form);
        // console.log(formData);
        const bookName = formData.get('bookName');
        // console.log(bookName);
        const bookPrice = formData.get('bookPrice');
        const bookType = formData.get('bookType');

        const data = {
            bookName,
            bookPrice,
            bookType
        }

        console.log(data);

        props.onBookCreate(data);
    }

    return <section>
        <form onSubmit={handleFormSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>Book Name : </td>
                        <td>
                            <input type="text" name="bookName" />
                        </td>
                    </tr>
                    <tr>
                        <td>Book Price : </td>
                        <td>
                            <input type="number" name="bookPrice" />
                        </td>
                    </tr>
                    <tr>
                        <td>Book Type : </td>
                        <td>
                            <select name="bookType">
                                <option value={''}>Select..</option>
                                <option value={'Art'}>Art</option>
                                <option value={'Novel'}>Novel</option>
                                <option value={'Tech'}>Tech</option>
                                <option value={'History'}>History</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit">Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </section>
}

function BookShop(){

    //useContext
    const bookCtx = useContext(BookCTX);

    const getDataFromCreateBook = (data) =>{
    
        console.log("This is data : ", data);
        bookCtx.addBook(data);
    }


    return <main id="book-shop-screen">
        <h2>This is Book Shop component !</h2>
        <NavBar/>
        <CreateBook onBookCreate = {getDataFromCreateBook}/>
    </main>
}

export default BookShop