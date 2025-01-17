import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://aidurgency-server.vercel.app/api/v1" }),
  tagTypes: ["donations", 'comments', 'review','volunteers'],
endpoints: ()=>({})
});

