import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://c537-185-211-159-223.ngrok-free.app/api",
  }),
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => ({
        url: `get_user_info/${id}`,
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": true,
          "Content-Type": "application/json",
        },
      }),
      providesTags: (id) => [{ type: "User", id }],
    }),
    getUserFriends: build.query({
      query: (id) => ({
        url: `friends/${id}`,
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": true,
          "Content-Type": "application/json",
        },
      }),
    }),
    getTransactions: build.query({
      query: (id) => ({
        url: `get_transactions/${id}`,
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": true,
          "Content-Type": "application/json",
        },
      }),
    }),
    getTask: build.query({
      query: ({ type }) => ({
        url: `tasks/${type}`,
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": true,
          "Content-Type": "application/json",
        },
      }),
    }),
    getCheckTaskComplete: build.query({
      query: ({ id, id_task }) => ({
        url: `check_task_complete/${id}/${id_task}`,
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": true,
          "Content-Type": "application/json",
        },
      }),
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: `create_user`,
        method: "POST",
        body,
      }),
    }),
    changeUserCount: build.mutation({
      query: ({ id, body }) => ({
        url: `change_coins/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ({ id }) => [{ type: "User", id }],
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useGetUserQuery,
  useGetUserFriendsQuery,
  useGetTaskQuery,
  useLazyGetCheckTaskCompleteQuery,
  useLazyGetUserQuery,
  useChangeUserCountMutation,
  useCreateUserMutation,
} = userApi;
