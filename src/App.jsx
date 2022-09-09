import { Routes, Route } from "react-router-dom";
import Home from '../src/Components/Home/Home.jsx'
import AddBook from "./Components/AddBook/AddBook.jsx";
import './App.scss'
import EditBook from "./Components/EditBook/EditBook.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
function App() {
  return (
    <div className="container">
      <div className="row">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='addbook' element={<AddBook />}></Route>
          <Route path='editbook/:id' element={<EditBook />}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
