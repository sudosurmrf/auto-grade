import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:5000';
const graderApi = createApi({
  reducerPath: 'graderApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    gradeRepo: builder.mutation({
      query: ({repoUrl, moduleNumber}) => ({
        url: '/api/grade',
        method: 'POST',
        body: { repoUrl, moduleNumber },
      }),
    }),
  }),
});

export const { useGradeRepoMutation } = graderApi;

export default graderApi;
