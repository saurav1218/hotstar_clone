
import './App.css';
import Home from './components/home';
import Movies from './components/movies';
import Navbar from './components/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Tv from './components/tv';
import Sports from './components/sports';
import Search from './components/search';
import Login from './components/login';

import WatchList from './components/watchlist';
import SinglePage from './components/singlePage';
import SignUp from './components/signin';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
    
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watchlist' element={<WatchList/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/tv' element={<Tv/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/singlePage/:id' element={<SinglePage/>}/>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
