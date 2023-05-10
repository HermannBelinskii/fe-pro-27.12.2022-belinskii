import React from 'react';
import Btn from '../../../Button/Btn';

const UsersAlbums = ({ userAlbums, handleShowPhotos }) => {
  return (
    <>
      {userAlbums.length > 0 && (
        <div>
          <h3>Albums:</h3>
          <ul>
            {userAlbums.map((album) => (
              <li key={album.id}>
                {album.title}
                <Btn onClick={() => handleShowPhotos(album.id)} title={'Show Photos'}/>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default UsersAlbums;

