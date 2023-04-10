import React,{Fragment, useState, useEffect,useCallback } from "react";
import AddMovie from "./MoviePages/AddMovie";
import MovieList from './MoviePages/MoviesList';
import './App.css';
//import { json } from "react-router-dom";

function App(){
  const [movies, setMovies]= useState([]);
  const [isLoading, setIsLoading]= useState(false);
  const [error,setError] =useState(null);

  
  const fetchMoviesHandler = useCallback(async ()=> {
    setIsLoading(true);
    setError(null);
    try{
        
        const response = await fetch('https://ecommerce-81a9e-default-rtdb.firebaseio.com/movies.json')
        if(!response.ok){
           throw new Error('Something went wrong ...Retry!!');
        }

        const data = await response.json();
          

        const loadedMovies=[];
        for(const key in data){
            loadedMovies.push ({
                id:key,
                title: data[key].title,
                openingText: data[key].openingText,
                releaseDate: data[key].releaseDate,
            });
        }
           
        setMovies(loadedMovies);   
    }catch(error){
    setError(error.message);
    }
    setIsLoading(false);
    },[]);

    useEffect(()=>{
        fetchMoviesHandler();
         },[fetchMoviesHandler]);

    async function addMoviesHandler(movie){
       const response = await fetch('https://ecommerce-81a9e-default-rtdb.firebaseio.com/movies.json' , {
            method:'POST',
            body: JSON.stringify(movie),
            headers:{
                'Content-Type': 'application/json'
            }       
         });
         const data = await response.json();
         console.log(data);
     }
 
    let content =<p>Found no Movie!</p>
    if(movies.length >0){
    content = <MovieList movies ={movies} />;
    }
    if (error){
        content =<p>error</p>;
    }
    if(isLoading){
        content = <p>Loading..</p>;
    }

return(
<Fragment>
    <section>
        <AddMovie onAddMovie={addMoviesHandler}/>
    </section>
    <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
    </section>
    <section>
     {content}        
    </section>
</Fragment>
);
}
export default App;