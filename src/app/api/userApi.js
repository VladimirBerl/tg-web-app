import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tgbuyer.ru/api",
  }),
  tagTypes: ["Task", "User", "Transactions"],
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
      providesTags: ["User"],
    }),
    getUserFriends: build.query({
      query: (id) => ({
        url: `friends/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getTransactions: build.query({
      query: (id) => ({
        url: `get_transactions/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Transactions"],
    }),
    getTask: build.query({
      query: (id) => ({
        url: `tasks/${id}/`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Task"],
    }),
    getCheckTaskComplete: build.query({
      query: ({ id, id_task }) => ({
        url: `check_task_complete/${id}/${id_task}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Task", "User"],
    }),
    getCountPostsByType: build.query({
      query: () => ({
        url: `count_posts_by_type`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getPullInfo: build.query({
      query: () => ({
        url: `pulls_info`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getCountMembers: build.query({
      query: () => ({
        url: `count_members`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getRanksList: build.query({
      query: () => ({
        url: `ranks_list`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getRanksInfo: build.query({
      query: (id) => ({
        url: `get_rank_info/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getPlanInfo: build.query({
      query: () => ({
        url: `plan_info`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    changeUserCount: build.mutation({
      query: ({ id, body }) => ({
        url: `change_coins/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User", "Transactions", "Task"],
    }),
    changeSpinners: build.mutation({
      query: ({ id, body }) => ({
        url: `change_spinners/${id}`,
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const {
  useGetPlanInfoQuery,
  useChangeSpinnersMutation,
  useGetRanksInfoQuery,
  useGetRanksListQuery,
  useGetPullInfoQuery,
  useGetCountMembersQuery,
  useGetCountPostsByTypeQuery,
  useGetTransactionsQuery,
  useGetUserQuery,
  useGetUserFriendsQuery,
  useGetTaskQuery,
  useLazyGetCheckTaskCompleteQuery,
  useLazyGetUserQuery,
  useChangeUserCountMutation,
} = userApi;
