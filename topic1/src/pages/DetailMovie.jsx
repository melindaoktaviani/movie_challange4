// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
 
// eslint-disable-next-line react/prop-types
const DetailMovie = ({ match }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          // eslint-disable-next-line react/prop-types
          `https://api.themoviedb.org/3/movie/${match.params.id}vite_api_auth_token=VITE_API_AUTH_TOKEN`   
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  // eslint-disable-next-line react/prop-types
  }, [match.params.id]);

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DetailMovie;
