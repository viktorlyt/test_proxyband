import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../react-app-env';

type Users = {
  users: User[];
};

const initialState: Users = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<User[]>) => {
      state.users.push(...action.payload);
    },
  },
});

export default userSlice.reducer;
export const { getUsers } = userSlice.actions;
