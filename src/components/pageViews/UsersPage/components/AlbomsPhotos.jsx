import React from 'react';

const AlbumPhotos = ({ albumPhotos }) => {
  return (
    <>
      <h3>Photos:</h3>
      <ul>
        {albumPhotos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AlbumPhotos;
