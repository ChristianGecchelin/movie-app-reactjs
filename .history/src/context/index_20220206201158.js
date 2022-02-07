import { createContext } from "react";

const MovieContext = createContext();

function MovieProvider(props) {
  return <MovieContext.Provider>{props.children}</MovieContext.Provider>;
}
