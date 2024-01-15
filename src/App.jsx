import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './component/NavBar'
import Login from './assets/Login'

import Films from './assets/Films'
import CreateFilm from './assets/CreateFilm'
import UpdateFilm from './assets/UpdateFilm'
import Home from './assets/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <BrowserRouter>
     <NavBar />
     <Routes>
     <Route path='/' element={<Films/>}></Route>
     <Route path='/create' element={<CreateFilm/>}></Route>
     <Route path='/update/:id' element={<UpdateFilm/>}></Route>
     <Route path='/home' element={<Home/>}></Route>
     <Route path='/login' element={<Login/>}></Route>




     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
