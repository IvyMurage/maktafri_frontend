// import { BookProvider } from "./components/BookContext";
// import BookList from "./components/BookStyles/BookList";
import NewBook from "./components/NewBook/NewBookForm"

function App() {
  return (
    <div className="App">
      {/* <BookProvider>
        <BookList />
      </BookProvider> */}
      <NewBook/>
    </div>
  );
}

export default App;
