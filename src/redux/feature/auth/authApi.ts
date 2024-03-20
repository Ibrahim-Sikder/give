import { baseApi } from "../../api/baseApi"

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        setRegister: builder.mutation({
            query: (userInfo) => ({
                url: '/register',
                method: "POST",
                body: userInfo,
            })
        }),
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/login',
                method: "POST",
                body: userInfo,
            })
        }),
        getUser: builder.query({
            query: () => ({
                url: `/login`,
                method: "GET",
            })
        })
    })
})


export const { useSetRegisterMutation, useLoginMutation, useGetUserQuery} = authApi