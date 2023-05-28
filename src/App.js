
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addmovie from "./component/Addmovie";
import Moviedetails from "./component/Moviedetails";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Favorites from "./component/Favorites";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
         <Navbar/>
          <Routes>

          
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Addmovie/>}/>
            <Route path="/moviedetails/:id" element={<Moviedetails/>}/>
            <Route path="/Fav" element={<Favorites/>}/>
           

          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;