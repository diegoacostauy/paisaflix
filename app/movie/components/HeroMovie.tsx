import React from "react";
import Hero from "../../components/Hero";

type Props = {
  id: string
}


const HeroMovie = ({ id }: Props) => {
  return (
    <Hero endpoint="movies" id={id}/>
  )
};

export default HeroMovie;
