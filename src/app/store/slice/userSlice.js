import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addNewUser = createAsyncThunk(
  "todos/addNewUser",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const user = {
        id_telegram: 555,
        user_name: "test555",
      };

      const response = await fetch(
        "https://1659-188-68-160-86.ngrok-free.app//api/create_user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            api_key: "ars",
          },
          body: JSON.stringify(user),
        }
      );

      if (!response.ok) {
        throw new Error("Can't add user. Server error.");
      }

      const data = await response.json();
      console.log(data);
      // dispatch(addTodo(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  "todos/fetchUser",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://f185-94-25-239-73.ngrok-free.app/api/get_user_info/1`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Can't get user.Server Error!");
      }

      const data = await response.json();
      console.log(data);
      // return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserToken = createAsyncThunk(
  "todos/getUserToken",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://d4c8-94-25-239-73.ngrok-free.app/api/get_count_tokens/555`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            api_key: "ars",
          },
          // mode: 'no-cors'
        }
      );

      if (!response.ok) {
        throw new Error("Can't get user.Server Error!");
      }

      const data = await response.json();
      console.log(data);
      // return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserPharm = createAsyncThunk(
  "todos/getUserPharm",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://f185-94-25-239-73.ngrok-free.app/api/get_count_pharmd/1`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            api_key: "ars",
          },
          // mode: 'no-cors'
        }
      );

      if (!response.ok) {
        throw new Error("Can't get user.Server Error!");
      }

      const data = await response.json();
      console.log(data);
      // return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeToken = createAsyncThunk(
  "todos/changeToken",
  async function (_, { rejectWithValue }) {
    try {
      const user = {
        id_telegram: 1,
        amount: 50,
        add: true,
      };
      const response = await fetch(
        `https://f185-94-25-239-73.ngrok-free.app/api/change_token`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (!response.ok) {
        throw new Error("Can't get user.Server Error!");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changePharm = createAsyncThunk(
  "todos/changePharm",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://d4c8-94-25-239-73.ngrok-free.app/api/change_pharmd`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            api_key: "ars",
          },
          body: {
            id_telegram: 1,
            amount: 1000,
            add: true,
          },
          // mode: 'no-cors'
        }
      );

      if (!response.ok) {
        throw new Error("Can't get user.Server Error!");
      }

      const data = await response.json();
      console.log(data);
      // return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
  console.log(state.error);
};

const userSlice = createSlice({
  name: "userCase",
  initialState: {
    user: null,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // addNewUser
    builder
      .addCase(addNewUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addNewUser.fulfilled, (state) => {
        state.status = "resolved";
      })
      .addCase(addNewUser.rejected, setError);
    // fetchUser
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state) => {
        state.status = "resolved";
      })
      .addCase(fetchUser.rejected, setError);
    // getUserToken
    builder
      .addCase(getUserToken.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUserToken.fulfilled, (state) => {
        state.status = "resolved";
      })
      .addCase(getUserToken.rejected, setError);
    // getUserPharm
    builder
      .addCase(getUserPharm.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUserPharm.fulfilled, (state) => {
        state.status = "resolved";
      })
      .addCase(getUserPharm.rejected, setError);
    // changeToken
    builder
      .addCase(changeToken.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(changeToken.fulfilled, (state) => {
        state.status = "resolved";
      })
      .addCase(changeToken.rejected, setError);
    // changePharm
    builder
      .addCase(changePharm.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(changePharm.fulfilled, (state) => {
        state.status = "resolved";
      })
      .addCase(changePharm.rejected, setError);
  },
});

export default userSlice.reducer;
