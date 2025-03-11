import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../../config";
import { useLocation } from "react-router-dom";
const Bookform = () => {
    const location = useLocation()
    console.log(location.state)

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState(0);
    function nameChange(e) {
        setName(e.target.value)
    }

    function authorChange(e) {
        setAuthor(e.target.value)
    }

    function priceChange(e) {
        setPrice(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const createdBook = await axios.post(`${baseUrl}/books`, { bookname: name, price, language: author })
            console.log(createdBook)
            alert("created")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <h1>Books Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Book Name</label>
                    <input type="text" name="name" value={name} onChange={nameChange} />
                </div>
                <br />
                <div>
                    <label>Book Author Name</label>
                    <input type="text" name="author" value={author} onChange={authorChange} />
                </div>
                <br />
                <div>
                    <label>Book Price</label>
                    <input type="number" name="price" value={price} onChange={priceChange} />
                </div>
                <br />
                <div>
                    <button >Create Book</button>
                </div>
            </form>
        </>
    )
}

export default Bookform