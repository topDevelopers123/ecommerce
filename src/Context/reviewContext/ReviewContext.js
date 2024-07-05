import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ReviewContext = createContext()

function ReviewContextProider({ children }) {
    const [reviewData, setReviewData] = useState(null);
    const token = localStorage.getItem('token');

    const postReviewData = async () => {
        try {
            const res = await axios.post('/review/add', {
                headers: { 'Authorization': `Bearer ${token}` },
            })
            setReviewData(res.data.data)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        postReviewData()
    }, [])

    return (
        <ReviewContext.Provider value={{ reviewData }}>
            {children}
        </ReviewContext.Provider>
    )
}
export default ReviewContextProider;