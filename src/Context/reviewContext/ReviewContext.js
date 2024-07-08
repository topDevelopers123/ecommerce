import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "../index.context";

export const ReviewContext = createContext()

function ReviewContextProider({ children }) {
    const { authorizeToken, API } = useAuthContext()
    const [reviewData, setReviewData] = useState(null);

    const postReviewData = async () => {
        try {
            const res = await axios.post(`${API}/review/add`, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` },
            })
            setReviewData(res.data.data)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (authorizeToken){
            
            postReviewData()
        }
    }, [authorizeToken])

    return (
        <ReviewContext.Provider value={{ reviewData }}>
            {children}
        </ReviewContext.Provider>
    )
}
export default ReviewContextProider;