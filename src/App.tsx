/* eslint-disable no-console */
/* eslint-disable max-len */
import 'bulma/css/bulma.css';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import './App.scss';
import UserList from './components/UserList';
import AlbumModal from './components/AlbumModal';

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path=":userId" element={(<PostList />)} />
        <Route path="albums/:userID" element={(<AlbumModal />)} />
      </Routes>
    </>
  );
};
