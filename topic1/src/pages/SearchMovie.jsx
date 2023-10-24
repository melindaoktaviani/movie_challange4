// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const Search = ({ setMovies }) => {
  // eslint-disable-next-line no-undef
  const [query, setQuery] = useState('');

  const searchMovies = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?vite_api_auth_token=VITE_API_AUTH_TOKEN&query=${query}`
      );

      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <form onSubmit={searchMovies}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
