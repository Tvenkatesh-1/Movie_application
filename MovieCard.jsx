import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className="container">
<div className="movie">
    <div>
        <p>{movie.Year}</p>
        </div>
    <div>
    <img src={movie.Poster!=="N/A"?movie.Poster:"http://via.placeholder.com/404"} alt={movie.Type}/>
    </div>
<div>
    <span>{movie.Title}</span>
    <h1>{movie.Type}</h1>
</div>
</div>
</div>
  );
}

export default MovieCard