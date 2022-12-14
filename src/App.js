import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header'
import Mainview from './Mainview'
import Comments from './Comments';


function App() {

  return (
    <div className='container-fluid'>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element= {<Mainview/>} />
            <Route path='/comments/:id' element={<Comments/>} />
          </Routes>
        </BrowserRouter>
    </div>

  )
}

export default App;
