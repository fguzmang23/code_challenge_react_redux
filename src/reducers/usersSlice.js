import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (arg, thunkAPI) => {
    try {
      // return thunkAPI.rejectWithValue("Error");
      const { data, status } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (status === 200) {
        return data;
      } else {
        throw "Error";
      }
    } catch (error) {
      return error;
    }
  },
  {
    condition: (arg, { getState, extra }) => {
      const {
        usersReducer: { status: fetchStatus },
      } = getState();

      if (fetchStatus === "loading" || fetchStatus === "succeeded") {
        return false;
      }
    },
  }
);

const userAdapter = createEntityAdapter({});

const initialState = userAdapter.getInitialState({
  status: "idle",
  errors: [],
  users: [],
});

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    initUsers(state, action) {
      userAdapter.setAll(state, []);
      state.users = [];
    },
    updateUser(state, { payload: { userId, username, email, phone, name } }) {
      const index = state.users.findIndex((user) => user.id === userId);

    
      state.users[index] = {
        ...state.users[index],
        username: username,
        email,
        phone,
        name,
      };
    },
    createUser(state, { payload: { username, email, phone, name } }) {

      const maxId = state.users.reduce(
        (prev, curr) => (curr > prev ? curr : prev),
        0
      );

      let newId;
      let contin = true;
      while (contin) {
        newId = Math.floor(Math.random() * 500);
        // eslint-disable-next-line no-loop-func
        contin = state.users.some((user) => user.id === newId);
      }

      state.users[state.users.length] = {
        id: newId,
        username,
        email,
        phone,
        name,
      };
    },
    deleteUser(state, { payload: { userId } }) {
      const newUsersState = state.users.filter((user) => user.id !== userId);
      state.users = newUsersState;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.users = [...state.users, ...payload];
      state.status = "succeeded";
    },
    [fetchUsers.rejected]: (state, action) => {
      state.errors = [...state.errors, action];
      state.status = "failed";
    },
  },
});

export const selectStatus = ({ usersReducer: { status } }) => status;
export const { updateUser, createUser, deleteUser } = usersSlice.actions;
export const selectUserById = ({ usersReducer: { users } }, idIn) =>
  users.find((user) => user.id === idIn);
export const selectUsers = ({ usersReducer: { users } }) => users;
export default usersSlice.reducer;
