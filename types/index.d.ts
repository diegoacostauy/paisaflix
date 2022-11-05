export type Movie = {
  _id: string;
  name: string;
  genre: string;
  duration: number;
  rating: number;
  views: number;
  coverImage: string;
  trailerImage: string
};

export type EndpointType = "hero" | "movies" | "trailers";
