import React, {useEffect, useState} from 'react';
import BookItem from "../../components/BookItem";

const Home = () => {

    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/book").then(res=> res.json()).then(res=>{
            console.log(1,res);
            setBooks(res);
        });
    },[])


    return (
        <div>
          <h1>
              책 리스트 보기
              {books.map((book) =><BookItem key={book.id} book={book}/>
              )}
          </h1>
        </div>
    );
};

export default Home;