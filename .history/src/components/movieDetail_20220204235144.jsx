import movie from "../resources/movie.json";
const MovieDetail = () => {
  const imageURL = `https://image.tmdb.org/t/p/w300${movie.poster_path} `;
  const genres = movie.genres.name.join(",");
  return (
    <section className="section-container">
      <div>
        <img src={imageURL} alt={movie.title} />
      </div>
      <div>
        <h3>{movie.title}</h3>
        <p>{genres}</p>
        <p>{movie.overview}</p>
      </div>
    </section>
  );
};

export { MovieDetail };
