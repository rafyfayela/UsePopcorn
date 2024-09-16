// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Rating from "@mui/material/Rating";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import Typography from "@mui/material/Typography";

// const StyledRatings = styled(Rating)({
//   "& .MuiRating-iconFilled": {
//     color: "#ff6d75",
//   },
//   "& .MuiRating-iconHover": {
//     color: "#ff3d47",
//   },
// });

// export default function StarRatings() {
//   const [value, setValue] = React.useState(2);
//   return (
//     <Box
//       sx={{
//         "& > legend": { mt: 2 },
//       }}
//     >
//       <Typography component="legend"></Typography>
//       <StyledRatings
//         name="customized-color"
//         defaultValue={2}
//         value={value}
//         getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
//         precision={0.5}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         icon={<FavoriteIcon fontSize="inherit" />}
//         emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
//       />
//     </Box>
//   );
// }
// ********************************************************************************************
// ********************************************************************************************
// ********************************************************************************************
// ********************************************************************************************
import { useState } from "react";
import propTypes from "prop-types";

StarRating.propTypes = {
  maxRating: propTypes.number,
  DefaultRating: propTypes.number,
  size: propTypes.number,
  messages: propTypes.array,
  color: propTypes.string,
  className: propTypes.string,
};

const ContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const StarContainerStyle = {
  display: "flex",
  gap: "1px",
};

export default function StarRating({
  maxRating = 5,
  color = "#ff3d47",
  size = 28,
  className = "",
  messages = [],
  DefaultRating = 3,
}) {
  const [Rating, SetRating] = useState(DefaultRating);
  function handleRating(rating) {
    SetRating(rating);
  }
  const [tempRating, setTempRating] = useState(0);
  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size}px`,
  };
  return (
    <div style={ContainerStyle} className={className}>
      <div style={StarContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : Rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : Rating - 1]
          : tempRating || Rating || ""}
      </p>
    </div>
  );
}

function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer ",
  };
  return (
    <span
      role="button"
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill={color}
          stroke={color}
        >
          <path d="M480-195.5 460-214q-96.13-88.18-159.07-150.59Q238-427 201.72-473.9q-36.29-46.9-50.5-84.48Q137-595.95 137-633.5q0-69.5 47.5-117t117-47.5q52.47 0 97.98 28.5Q445-741 480-685.5q35.5-55.5 80.75-84T658.5-798q69.5 0 117 47.44Q823-703.11 823-633.69q0 37.73-14.22 75.31-14.21 37.58-50.46 84.42-36.25 46.85-98.9 109.37Q596.77-302.07 500-214l-20 18.5Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill={color}
        >
          <path d="M480-195.5 460-214q-96.13-88.18-159.07-150.59Q238-427 201.72-473.9q-36.29-46.9-50.5-84.48Q137-595.95 137-633.5q0-69.5 47.5-117t117-47.5q52.47 0 97.98 28.5Q445-741 480-685.5q35.5-55.5 80.75-84T658.5-798q69.5 0 117 47.44Q823-703.11 823-633.69q0 37.73-14.22 75.31-14.21 37.58-50.46 84.42-36.25 46.85-98.9 109.37Q596.77-302.07 500-214l-20 18.5Zm0-34.5q94.82-86.57 156.35-147.98t97.34-106.72q35.81-45.3 49.81-80.09 14-34.78 14-68.57 0-59.64-39.86-99.39t-98.89-39.75q-48.25 0-88.5 27.5t-77.75 87h-25q-38.5-60.5-78.25-87.5t-88-27q-58.03 0-98.39 39.75t-40.36 99.44q0 33.82 14.07 68.64t49.75 79.99Q262-439.5 323.5-378.25 385-317 480-230Zm0-271.5Z" />
        </svg>
      )}
    </span>
  );
}

/*
FULL STAR




EMPTY STAR



*/

// -------
