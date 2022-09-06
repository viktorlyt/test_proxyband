import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useFetchAllUsersQuery } from '../redux/UserService';
import AlbumModal from './AlbumModal';
import PostList from './PostList';

const UserList: FC = () => {
  const { data: users } = useFetchAllUsersQuery();

  return (
    <div className="user__list">
      <h1 className="title">Users:</h1>
      {users && users.map(user => (
        // eslint-disable-next-line
        <>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <p key={user.id}>
            {user.id}
            .
            {user.name}
            {'    '}
          </p>
          <p>
            <NavLink target="_blank" to={user.id.toString()}>
              <button
                type="button"
                className="posts_btn"
                onClick={() => <PostList />}
              >
                Posts
              </button>
            </NavLink>
            <NavLink to={`/albums/${user.id.toString()}`}>
              <button
                type="button"
                className="albums_btn"
                onClick={() => <AlbumModal />}
              >
                Albums
              </button>
            </NavLink>
          </p>
        </>
      ))}
    </div>
  );
};

export default UserList;
