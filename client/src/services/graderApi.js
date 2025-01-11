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
    getFileStructure: builder.query({
      query: (repoUrl) => ({
        url: '/api/file-structure',
        method: 'POST',
        body: { repoUrl },
      }),
    }),
  }),
});

export const { useGradeRepoMutation, useGetFileStructureQuery, useLazyGetFileStructureQuery } = graderApi;

export default graderApi;
