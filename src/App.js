import { useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header'
import Mainview from './Mainview'
import Comments from './Comments';


function App() {

  const [images, setImage] = useState()

  useEffect(() =>{
  fetch('http://localhost:5000/getGallery')
  .then(res => res.json())
  .then(d=> setImage(d))
  },[1])

  return (
    <div className='container-fluid'>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element= {<Mainview images={images}/>} />
            <Route path='/comments' element={<Comments/>} />
          </Routes>
        </BrowserRouter>
    </div>

  )
}

export default App;
