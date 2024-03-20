import { baseApi } from "../../api/baseApi";


export const donarApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
   
        addDonar: builder.mutation({
          query: (data) =>({
            url: `/donars`,
            method: "POST",
            body:data,
          }),

        }),
      }),
})
export const { useAddDonarMutation } = donarApi;
