import React, { useEffect, useState } from 'react';
import { getUsers, getUserAlbums, getAlbumPhotos } from '../../../Api/index';
import Btn from '../../Button/Btn';
import UsersAlbums from './components/UsersAlbums';
import AlbumPhotos from './components/AlbumsPhotos';

const UsersPage = () => {
  const [contacts, setContacts] = useState([]);
  const [userAlbums, setUserAlbums] = useState({});
  const [expandedUserId, setExpandedUserId] = useState(null);
  const [albumPhotos, setAlbumPhotos] = useState([]);
  const [showPhotos, setShowPhotos] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await getUsers();
      setContacts(userList);
    };
    fetchUsers();
  }, []);

  const handleShowAlbums = async (userId) => {
    if (expandedUserId === userId) {
      setExpandedUserId(null);
      setUserAlbums({});
    } else {
      const albums = await getUserAlbums(userId);
      setExpandedUserId(userId);
      setUserAlbums({ [userId]: albums });
    }
    setShowPhotos(false);
    setAlbumPhotos([]);
  };

  const handleShowPhotos = async (albumId) => {
    const photos = await getAlbumPhotos(albumId);
    setAlbumPhotos(photos);
    setShowPhotos(true);
  };

  const handleClosePhotos = () => {
    setShowPhotos(false);
    setAlbumPhotos([]);
  };

  return (
    <>
      <div className="mx-auto p-5" >
        <h1>Users</h1>
        <ul className="list-group w-600">
          {contacts.map((user) => (
            <li className="list-group-item w-600" key={user.id}>
              <a href="#">{user.name}</a>
              <Btn
                userId={user.id}
                onClick={handleShowAlbums}
                title={expandedUserId === user.id ? 'Hide Albums' : 'Show Albums'}
              />
              {expandedUserId === user.id && (
                <>
                  <UsersAlbums
                    userAlbums={userAlbums[user.id]}
                    handleShowPhotos={handleShowPhotos}
                  />
                  {showPhotos && (
                    <AlbumPhotos albumPhotos={albumPhotos} onClose={handleClosePhotos} />
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UsersPage;
