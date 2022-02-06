const API = "https://api.themoviedb.org/3";
const getApi = (path) => {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGY4ZGY1NTU3ZTc4YTc3OWVjZTRhZGIwMGFhNzU1YiIsInN1YiI6IjYxZmQzNmIwY2U5OTdhMDBkZDY1ZDRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iiWIOK9FNTHL2kT9JmbmynNXWbREne_hbhX5zP5ppG8",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
};

export { getApi };
