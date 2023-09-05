import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
    reducerPath: 'cars',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6404b94b3bdc59fa8f4014f3.mockapi.io/api/' }),
    tagTypes: ['cars'],
    endpoints: (builder) => ({
        getCars: builder.query({
            query: () => `cars`,
            providesTags: (result,error,page) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'cars', id })),
                    { type: 'cars', id: 'LIST' },
                ]
                : [{ type: 'cars', id: 'LIST' }],
        }),
    }),
});

export const { useGetCarsQuery } = carsApi;
