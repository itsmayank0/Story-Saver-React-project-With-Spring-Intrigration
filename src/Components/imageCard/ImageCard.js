import React from "react";

export default function ImageCard({ images }) {
  if (!images) {
    return <div></div>
  }
  return (

    <>
      {images.length === 1 ?  (
        <img src={images[0]} className="card-img-top" alt="..." />
      ) : (
        <></>
      )}
      {images.length === 2 ? (
        <div>
          <img src={images[0]} className="card-img-top w-50" alt="..." />
          <img src={images[1]} className="card-img-top w-50" alt="..." />
        </div>
      ) : (
        <></>
      )}
      {images.length === 3 ? (
        <div>
          <img src={images[0]} className="card-img-top w-100" alt="..." />
          <img src={images[1]} className="card-img-top w-50" alt="..." />
          <img src={images[2]} className="card-img-top w-50" alt="..." />
        </div>
      ) : (
        <></>
      )}
      {images.length === 4 ? (
        <div>
          <img src={images[0]} className="card-img-top w-50" alt="..." />
          <img src={images[1]} className="card-img-top w-50" alt="..." />
          <img src={images[2]} className="card-img-top w-50" alt="..." />
          <img src={images[3]} className="card-img-top w-50" alt="..." />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
