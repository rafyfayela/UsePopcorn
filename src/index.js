import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRatings from "./StarRatings.js";
import "./index.css";
import App from "./App";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRatings onSetRating={setMovieRating} />
//       <p>this movie got {movieRating}</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Test /> */}
    <App />
  </React.StrictMode>
);
