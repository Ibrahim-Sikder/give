import { baseApi } from "../../api/baseApi";


export const donationsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
   
        getDonations: builder.query({
          query: () =>({
            url: `/donations`,
            method: "GET"
          }),
          providesTags: ["donations"],
        }),
       
        addDonations: builder.mutation({
          query: (data) => ({
            url: "/donations",
            method: "POST",
            body: data,
          }),
          invalidatesTags: ["donations"],
        }),
        deleteDonations: builder.mutation({
          query: (id) => ({
            url: `/donations/${id}`,
            method: "DELETE"
          }),
          invalidatesTags: ["donations"],
        }),
        getSingleDonation: builder.query({
          query: (id) => `/products/${id}`,
        }),
        updateDonations: builder.mutation({
          query: ({ id, body }) => ({
            url: `/products/${id}`,
            method: "PUT",
            body,
          }),
          invalidatesTags: ["donations"],
        }),
        
      }),
})
export const { useGetDonationsQuery,useAddDonationsMutation, useDeleteDonationsMutation, useGetSingleDonationQuery, useUpdateDonationsMutation  } =
donationsApi;
