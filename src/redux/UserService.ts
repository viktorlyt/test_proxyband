/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Album, Post, User } from '../react-app-env';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<User[], void>({
      query: () => ({
        url: '/users',
      }),
    }),
    fetchAllPosts: build.query<Post[], void>({
      query: () => ({
        url: '/posts',
      }),
    }),
    fetchAllAlbums: build.query<Album[], void>({
      query: () => ({
        url: '/albums',
      }),
    }),
  }),
});

export const { useFetchAllAlbumsQuery, useFetchAllPostsQuery, useFetchAllUsersQuery } = userAPI;
