import { baseUrl } from "../../config";
import axios from "axios"
import { useEffect, useState } from "react"
import img from "../assets/vite.svg"
import { useNavigate } from "react-router-dom";

const Books = () => {
  const navigate = useNavigate()
  const [book, setBook] = useState([]);
 


  useEffect(() => {
    async function fun() {
      try {
        const res = await axios.get(`${baseUrl}/books`)
        setBook(res.data.booksFound)
        console.log(res.data.booksFound)
      } catch (err) {
        console.log(err)
      }

    }
    fun()
  }, [])
  console.log(book)
  // const handleDelete = async (id) => {
  //   try {
  //     console.log(id)
  //     const deletedOne = await axios.delete(`${baseUrl}/book/${id}`)
  //     console.log(deletedOne)

  //     // Remove the deleted book from the state
  //     setBook((prevBooks) => prevBooks.filter(book => book._id !== id));

  //   } catch (err) {
  //     console.log(err)
  //   }
  // }


  // function handleUpdate(book){
  //  navigate("/bookForm", {state:{book}})
  // }
  return (
    <>
      <h1>Books Page</h1>
      {/* {book.map((elem) => {
        return (
          <>
            <p>{elem.bookname} is of {elem.price} in {elem.language}</p>
            <button onClick={()=>handleUpdate(elem)}>Update</button>
            <button onClick={() => handleDelete(elem._id)}>Delete</button>
            <img src={img} />
            <hr />
          </>
        )
      })} */}
      <h1>Book1 </h1>
    </>
  )
}


export default Books;