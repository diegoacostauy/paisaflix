import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

type Props = {
  rating: number;
};

const Stars = ({ rating}: Props) => {
  const starsFilled = Math.round(rating);
  const starsHalf = rating % 1 != 0;
  const stars = 5 - starsFilled - (starsHalf ? 1 : 0);

  return (
    <ul className="flex gap-x-3">
      {new Array(starsFilled).fill(0).map((star, idx) => (
        <li key={idx} className="text-yellow-400">
          <BsStarFill size="24" />
        </li>
      ))}

      {starsHalf && (
        <li key={starsFilled + 1} className="text-yellow-400">
          <BsStarHalf size="24" />
        </li>
      )}

      {stars > 0 &&
        new Array(stars).fill(0).map((star) => (
          <li key={starsFilled + 1 + (starsHalf ? 1 : 0)} className="text-yellow-400">
            <BsStar size="24" />
          </li>
        ))}
    </ul>
  );
};

export default Stars;
