import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Props = {
  rating: number;
};

const Stars = ({ rating}: Props) => {
  return (
    <ul className="flex gap-x-3">
      {new Array(Math.round(rating)).fill(0).map((star, idx) => (
        <li key={idx} className="text-yellow-400">
          <AiFillStar size="24" />
        </li>
      ))}
    </ul>
  );
};

export default Stars;
