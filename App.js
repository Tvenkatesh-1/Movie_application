import React, { useEffect, useState } from "react";
import "./App.css";
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";

// const movie={
//     "Title": "Avengers: Age of Ultron",
//     "Year": "2015",
//     "imdbID": "tt2395427",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
// }

const API_URL="http://www.omdbapi.com/?i=tt3896198&apikey=fbb9886f";
const App=()=>{

    const[movies,setMovies]=useState([]);
    const[searchMovieTerm,setsearchMovieTerm]=useState(" ");

    const searchMovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies("Avengers");
    },[])
    return(
<div className="app">
    <h1>MovieRulez</h1>
    <div className="search">
        <input placeholder="Movie search here" value={searchMovieTerm} onChange={(e)=>{setsearchMovieTerm(e.target.value)}}/>
        <img src={searchIcon} alt="Search" onClick={()=>{searchMovies(searchMovieTerm)}}/>
    </div>
     {
        movies?.length>0
        ?(
            <div className="container">
                {
                    movies.map((movie)=>(
                        <MovieCard movie={movie}/>
                    ))
                }
                </div>
        ):(
            <div className="conatainer">
                <h1>Movies not found</h1>
                </div>
        )
     }
   
    
</div>
    );
}
export default App;