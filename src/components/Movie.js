import react from 'react';
import { Link } from 'react-router-dom';

// export default ({ id }) => id;
const Movie = ({ id }) => {
    return (
        <Link to={`/${id}`}>{id}</Link>
    )
}
export default Movie;