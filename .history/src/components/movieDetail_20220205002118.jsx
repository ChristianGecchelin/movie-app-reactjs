import movie from "../resources/movie.json";
const MovieDetail = () => {
  const imageURL = `https://image.tmdb.org/t/p/w400${movie.poster_path} `;

  return (
    <section className="section-container">
      <div className="img-container">
        <img src={imageURL} alt={movie.title} />
      </div>
      <div className="text-container">
        <h3>{movie.title}</h3>
        <p>{movie.genres.map((genre) => genre.name).join(" - ")}</p>
        <p>{movie.overview}</p>
      </div>
    </section>
  );
};

export { MovieDetail };
