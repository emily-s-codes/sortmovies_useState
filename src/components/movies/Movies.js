import React, { useState } from "react";
import SingleMovie from "../singleMovie/SingleMovie";
import "./Movies.css";
import movies from "../data/Data";

function MovieList(props) {
    const [sortMovies, setSort] = useState(movies);

    const handlenewToOld = () => {
        console.log("test")
        const newToOldCopy = [...sortMovies];
        newToOldCopy.sort((a, b) => b.year.localeCompare(a.year));
        setSort(newToOldCopy);
    }

    const handleOldToNew = () => {
        console.log("test")
        const oldToNewCopy = [...sortMovies];
        oldToNewCopy.sort((a, b) => a.year.localeCompare(b.year));
        setSort(oldToNewCopy);
    }

    const handleBestToWorst = () => {
        const bestToWorstCopy = [...sortMovies];
        bestToWorstCopy.sort((a, b) => b.rate.localeCompare(a.rate));
        setSort(bestToWorstCopy);
    }
    const handleWorstToBest = () => {
        const worstToBestCopy = [...sortMovies];
        worstToBestCopy.sort((a, b) => a.rate.localeCompare(b.rate));
        setSort(worstToBestCopy);
    }

    const handleAToZ = () => {
        console.log("test")
        const aToZCopy = [...sortMovies];
        aToZCopy.sort((a, b) => a.title.localeCompare(b.title));
        setSort(aToZCopy);
    }

    const handleZToA = () => {
        console.log("test")
        const ZToACopy = [...sortMovies];
        ZToACopy.sort((a, b) => b.title.localeCompare(a.title));
        setSort(ZToACopy);
    }

    return (
        <section className="movieListSection">
            <h2>Ex 3_1 Sortable Movie List</h2>
            <div className="movieSortDiv">
                <button className="movieSortButton" onClick={handlenewToOld}>Newest to Oldest</button>
                <button className="movieSortButton" onClick={handleOldToNew}>Oldest to Newest</button>
                <button className="movieSortButton" onClick={handleBestToWorst}>Best to Worst</button>
                <button className="movieSortButton" onClick={handleWorstToBest}>Worst to Best</button>
                <button className="movieSortButton" onClick={handleAToZ}>A-Z</button>
                <button className="movieSortButton" onClick={handleZToA}>Z-A</button>
            </div>
            <section className="movieCardSection">
                {sortMovies.map((singleMovie, index) => {
                    return <SingleMovie key={index} {...singleMovie} />
                })}
            </section>
        </section>)
}

export default MovieList;