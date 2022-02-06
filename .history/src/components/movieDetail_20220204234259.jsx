import movie from "../resources/movie.json";
const MovieDetail = () => {
  const imageURL = `https://image.tmdb.org/t/p/w200${poster_path} `;
  return (
    <section className="section-container">
      <div>
        <img src={imageURL} alt="" />
      </div>
      <div>
        <h3></h3>
        <p></p>
        <p></p>
      </div>{" "}
    </section>
  );
};

export { MovieDetail };
