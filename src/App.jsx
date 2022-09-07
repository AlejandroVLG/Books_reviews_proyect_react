import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './containers/Home/Home'
import Book from './containers/Book/Book'
import Review from './containers/Review/Review'
import NewBook from './containers/NewBook/NewBook'
import MyProfile from './containers/MyProfile/MyProfile'
import Register from './containers/User/Register/Register'
import Login from './containers/User/Login/Login'
import EditBook from './containers/EditBook/Editbook'
import NewReview from './containers/NewReview/NewReview'
import EditReview from './containers/EditReview/EditReview'
import './App.css'

function App() {

  return (

    <div className="App">
      <BrowserRouter>

        <Header />
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Book />} />
          <Route path="/reviews/:id" element={<Review />} />
          <Route path="/newBook" element={<NewBook />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editBook/:id" element={<EditBook />} />
          <Route path="/newReview/:id" element={<NewReview />} />
          <Route path="/editReview/:id" element={<EditReview />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
