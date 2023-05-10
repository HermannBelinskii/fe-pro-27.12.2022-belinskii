import React, { useEffect, useState } from 'react';
import { getUsers, getUserAlbums, getAlbumPhotos } from '../../../App/index';
import Btn from '../../Button/Btn';
import UsersAlbums from './components/UsersAlboms';
import AlbumPhotos from './components/AlbomsPhotos';

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
      <h1>Users</h1>
      <ul>
        {contacts.map((user) => (
          <li key={user.id}>
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
    </>
  );
};

export default UsersPage;
