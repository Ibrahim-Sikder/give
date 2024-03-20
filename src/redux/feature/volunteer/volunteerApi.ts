import { baseApi } from "../../api/baseApi";


export const volunteerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getVolunteers: builder.query({
            query: () =>({
              url: `/volunteers`,
              method: "GET"
            }),
            providesTags: ["volunteers"],
          }),
        addVolunteers: builder.mutation({
          query: (data) =>({
            url: `/volunteers`,
            method: "POST",
            body:data,
          }),
          invalidatesTags: ['volunteers']
        }),
      }),
})
export const { useGetVolunteersQuery, useAddVolunteersMutation } = volunteerApi;
