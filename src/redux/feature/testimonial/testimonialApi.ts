import { baseApi } from "../../api/baseApi";


export const testimonialApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
   
        getTestimonial: builder.query({
          query: () =>({
            url: `/review`,
            method: "GET"
          }),
          providesTags: ["review"],
        }),
       
        createTestimonial: builder.mutation({
          query: (data) => ({
            url: "/review",
            method: "POST",
            body: data,
          }),
          invalidatesTags: ["review"],
        }),
        deleteDonations: builder.mutation({
          query: (id) => ({
            url: `/donations/${id}`,
            method: "DELETE"
          }),
          invalidatesTags: ["donations"],
        }),
        
        
      }),
})
export const { useGetTestimonialQuery, useCreateTestimonialMutation } =
testimonialApi;
