import Image from 'next/image';
import React from 'react'

type Trailer = {
  _id: string;
  trailerImage: string;
}

async function getData() {
  const res = await fetch('https://paisa-challange.herokuapp.com/api/v1/paisaflix/trailers');
  const { data }: { success: boolean; data: Trailer[] } = await res.json();
  // The return value is *not* serialized
  // You can return Date; Map; Set; etc.
  return data;
}

const Trailers = async () => {
  const trailers = await getData();
  return (
    <div className="container text-white">
      <h3 className="text-3xl font-bold mb-6">Trailers</h3>
      <ol className="relative w-full flex -mx-[7.5px] snap-x snap-mandatory overflow-x-auto pb-8">
        {
          trailers.length && trailers.map((trailer, idx) => (
            <li className="snap-center shrink-0 px-[7.5px] relative basis-1/4" key={trailer._id}>
              <Image src={trailer.trailerImage} alt="Trailer Image" width="297" height="137" />
              <b className="font-bold absolute top-100 right-6 text-3xl -translate-y-1/2">{String(idx + 1).padStart(2, "0")}</b>
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default Trailers
