import { BookProvider } from "./components/BookContext";
import BookList from "./components/BookStyles/BookList";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <BookList />
      </BookProvider>
    </div>
  );
}

export default App;
