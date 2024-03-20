import { baseApi } from "../../api/baseApi";


export const donarApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getComments: builder.query({
            query: () =>({
              url: `/comments`,
              method: "GET"
            }),
            providesTags: ["comments"],
          }),
        addComment: builder.mutation({
          query: (data) =>({
            url: `/comments`,
            method: "POST",
            body:data,
          }),
          invalidatesTags: ['comments']
        }),
      }),
})
export const { useAddCommentMutation, useGetCommentsQuery } = donarApi;
