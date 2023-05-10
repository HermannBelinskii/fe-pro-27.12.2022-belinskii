import React from 'react';
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Loyout from './components/appLayout/Layout/index'
import UsersPage from './components/pageViews/UsersPage/UersPage';
import HomePage from './components/pageViews/HomePage/HomePage';
import ContactPage from './components/pageViews/ContactPage/ContactPage';
import UsersAlboms from './components/pageViews/UsersPage/components/UsersAlbums';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: Loyout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: 'users',
        Component: UsersPage
      },
      {
        path: 'users/:id',
        Component: UsersAlboms
      },
      {
        path:'contacts',
        Component: ContactPage
      }
    ]
  },

])

function App() {
  return <RouterProvider router={routes} />
}

export default App

