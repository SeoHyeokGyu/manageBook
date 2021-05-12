import React, {useEffect, useState} from 'react';
import BookItem from "../../components/BookItem";

const Home = () => {

    const [books,setBooks] = useState([]);


    return (
        <div>
          <h1>
              책 리스트 보기
              <BookItem/>
          </h1>  
        </div>
    );
};

export default Home;