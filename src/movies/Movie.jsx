import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

export function Movie({ movie, config }) {
  return (
    <li>
      <Link to='details'>
        {config.images.base_url && (
          <img
            src={config.images?.base_url + 'w342' + movie.poster_path}
            alt={movie.title + ' Poster'}
            className='movie-poster'
          />
        )}
        <h3 className='movie-title'>{movie.title}</h3>
      </Link>
    </li>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};