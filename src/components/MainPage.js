// src/MainPage.js
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Book from './Book';
import bookPages from './bookContent';
import bookPages2 from './bookContent2';
import bookPages3 from './bookContent3';


const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const age = location.state?.age;
  const name = location.state?.name;
  const gender = location.state?.gender;

  const [selectedBookTitle, setSelectedBookTitle] = useState(null);


  const books = [
    { title: "풍풍이", content: bookPages },
    { title: "바마", content: bookPages2 },
    { title: "흥부와 놀부", content: bookPages3 }
  ];

  const handleBookSelect = (title) => {
    setSelectedBookTitle(title);
  }


  
  const recommendedBook = age >= 10 ? '풍풍이' : '바마';
  const Nickname = gender === 'male' ? '왕자님' : '공주님';
  const handleBookClick = (path) => {
    navigate(path);
  }





  return (
    // <div>
    //   <h1>환영합니다! {name} {Nickname} !</h1>
    //   <p>{age}세에 맞는 책을 추천합니다: {recommendedBook}</p>
      
    //   {books.map((book, index) => (
    //       // <div key={index} onClick={() => handleBookSelect(book.title)}>
    //       //   {book.title}
    //       // </div>
    //     <li key={index}>
    //       <Link to={book.path}>{book.title}</Link>
    //     </li>
    //   ))}
      
    //   {selectedBookTitle && <Book bookTitle={selectedBookTitle} />}
    // </div>
    <div>
      <h1>환영합니다! {name} {Nickname} !</h1>
      <p>{age}세에 맞는 책을 추천합니다: {recommendedBook}</p>
      <ul>
        <li><Link to="/book/풍풍이">풍풍이</Link></li>
        <li><Link to="/book/바마">바마</Link></li>
        <li><Link to="/book/흥부와 놀부">흥부와 놀부</Link></li>
      </ul>
    </div>
  );
};

export default MainPage;
