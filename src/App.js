import { BookProvider } from "./components/BookContext";
import BookList from "./components/BookStyles/BookList";
import ReviewsCard from "./components/ReviewsCard";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <BookList />
      </BookProvider>
      <ReviewsCard/>
    </div>
  );
}

export default App;
