import "./SingleMovie.css";

function SingleMovie(props) {
    return (
        < article className="singleMovie" >
            <p className="movieTitle">{props.title}</p>
            {/* {props.year.map((yearNumber, index) => {
                return <p key={index}>{Number(yearNumber)}</p>
            })} */}
            <p>{Number(props.year)}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <ul className="genreList">
                {props.genre.map((singleGenre, index) => {
                    return <li key={index}>{singleGenre}</li>
                })}
            </ul>
        </article >
    )
}

export default SingleMovie;