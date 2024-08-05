import { useContext, useState } from "react";
import NavBar from "../molecules/NavBar";
import { BookCTX, ReviewCTX } from "../context";


function Critique(){

    //context
    const bookCtx = useContext(BookCTX);
    const reviewCtx = useContext(ReviewCTX);

    //states
    const [reviewObj,setReviewObj] = useState({
        bookName : '',
        review : '',
        reviewedBy : ''
    });
    // const [bookName,setBookName] = useState();
    // const [reviewedBy,setReviewedBy] = useState();

    const handleBookName = (event) => {
        // console.log(event.currentTarget.value);
        // setBookName(event.currentTarget.value);
        setReviewObj({
            ...reviewObj,
            bookName : event.currentTarget.value
        })
    }

    const handleReview = (event) => {
        // console.log(event.currentTarget.value);
        // setReview(event.currentTarget.value);
        setReviewObj({
            ...reviewObj,
            review : event.currentTarget.value
        })
    }

    const handleReviewedBy = (event) => {
        // console.log(event.currentTarget.value);
        // setReviewedBy(event.currentTarget.value);
        setReviewObj({
            ...reviewObj,
            reviewedBy : event.currentTarget.value
        })
    }

    const handlereviewSubmit = (event) => {
        // const reviewData = {
        //     review,
        //     bookName,
        //     reviewedBy
        // }
        // console.log(reviewData);
        // reviewCtx.addReview(reviewData);
        reviewCtx.addReview(reviewObj);
    }

    return <main>
        <h2>This is Critique page ...</h2>
        <NavBar />
        <article>
            <h1>Write the Review about the books !</h1>
            {reviewObj.bookName ? <p>{`Let's write about the `+reviewObj.bookName}</p> : null}
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Select Book : </td>
                            <td>
                                <select onChange={handleBookName}>
                                    <option value={''}>Select Book ... </option>
                                    {
                                        bookCtx.books.map((el,index) => {
                                            return <option value={el.bookName} key={index}>{el.bookName}</option>
                                        })
                                    }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Review : </td>
                            <td>
                                <input type="text" onChange={handleReview} />
                            </td>
                        </tr>
                        <tr>
                            <td>Reviewed By : </td>
                            <td>
                                <input type="text" onChange={handleReviewedBy} />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="button" onClick={handlereviewSubmit}>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </article>
    </main>
}

export default Critique;