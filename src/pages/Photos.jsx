import React from "react";

export default function Photos() {
  const [photos, setPhotos] = React.useState();
  React.useEffect(() => {
    fetch(`/api/photos`)
      .then((response) => response.json())
      .then((data) => setPhotos(data.photos));
  }, []);
  if (photos === undefined) {
    return <p>Loading...</p>;
  }
  console.log(photos);
  const photoElements = photos.map((photo) => (
    <div key={photo.id} className="photo-title">
      <img src={photo.imageUrl} alt="" width={100} />
    </div>
  ));

  return <div className=" photo-list ">{photoElements}</div>;
}
