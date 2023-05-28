import { useEffect, useState } from "react";
import Movieslist from "./Movieslist.jsx";
import Addmovie from "./Addmovie.jsx";

const Home = () => {

    let [movies , setMovies] = useState(null);
    let [error , setError] = useState(null);
    let [pending , setPending] = useState(true);
    

    useEffect(()=>{
        if(localStorage.getItem("fav")==null)
        {
          localStorage.setItem("fav","[]")
        }
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{ return res.json() })
            .then((data)=>{ 
                console.log(data);
                setMovies(data);
                setPending(false);
                })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);
            })
        } , 3000)
    } , [])


    return ( 
        <div className="home">   
        
        <h1>hi how are you</h1>

        {pending==true  &&  <h1>Loading.......</h1>}

        {error && <h1> {error} </h1>}

        {movies && <Movieslist movies={movies} title="All movies"/>}


        


        </div>
     );
}






export default Home;


