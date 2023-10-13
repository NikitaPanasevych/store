import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
	endpoints: (builder) => ({}),
});
