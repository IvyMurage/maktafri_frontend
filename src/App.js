import React from "react";
import { Route, Routes } from "react-router-dom";
import { BookProvider } from "./components/BookContext";
import BookPage from "./components/BookPageReview/BookPage";
import BookList from "./components/BookStyles/BookList";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import ReviewsCard from "./components/ReviewsCard";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h3 id="bookList-heading">Popular Now</h3>
                <BookList />
              </>
            }
          />
          <Route path="/booklist/:id" element={<BookPage />} />
        </Routes>
      </BookProvider>
      {/* <ReviewsCard /> */}
      <Footer />
    </div>
  );
}

export default App;
