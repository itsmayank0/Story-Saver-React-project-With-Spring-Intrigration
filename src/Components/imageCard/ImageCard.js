import React from "react";

export default function ImageCard({ images }) {
  if (!images) {
    return <div></div>
  }
  return (

    <>
      {images.length === 1 ?  (
        <img src={`data:image/png;base64,`+images[0].data} className="card-img-top" alt="..." />
      ) : (
        <></>
      )}
      {images.length === 2 ? (
        <div>
          <img src={`data:image/png;base64,`+images[0].data} className="card-img-top w-50" alt="..." />
          <img src={`data:image/png;base64,`+images[1].data} className="card-img-top w-50" alt="..." />
        </div>
      ) : (
        <></>
      )}
      {images.length === 3 ? (
        <div>
          <img src={`data:image/png;base64,`+images[0].data} className="card-img-top w-100" alt="..." />
          <img src={`data:image/png;base64,`+images[1].data} className="card-img-top w-50" alt="..." />
          <img src={`data:image/png;base64,`+images[2].data} className="card-img-top w-50" alt="..." />
        </div>
      ) : (
        <></>
      )}
      {images.length === 4 ? (
        <div>
          <img src={`data:image/png;base64,`+images[0].data} className="card-img-top w-50" alt="..." />
          <img src={`data:image/png;base64,`+images[1].data} className="card-img-top w-50" alt="..." />
          <img src={`data:image/png;base64,`+images[2].data} className="card-img-top w-50" alt="..." />
          <img src={`data:image/png;base64,`+images[3].data} className="card-img-top w-50" alt="..." />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
