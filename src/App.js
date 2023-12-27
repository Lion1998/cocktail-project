
import Home from './pages/Home/Home'
import Login from './pages/LoginRegister/Login';
import BookTable from './pages/BookTable/BookTable';
import Register from './pages/LoginRegister/Register';
import { BrowserRouter , Routes ,Route} from 'react-router-dom';
function App() {
  return(
    <div className='App'>
      
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path='/home' element= {<Home />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/book_table' element={<BookTable />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
