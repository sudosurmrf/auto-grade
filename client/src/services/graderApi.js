import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:5000';
const graderApi = createApi({
  reducerPath: 'graderApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    gradeRepo: builder.mutation({
      query: ({repoUrl, nestedFolder, moduleNumber}) => ({
        url: '/api/grade',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { repoUrl, nestedFolder, moduleNumber },
      }),
    }),
    getFileStructure: builder.query({
      query: (repoUrl, nestedFolder) => ({
        url: '/api/file-structure',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { repoUrl, nestedFolder },
      }),
      keepUnusedDataFor: 0,
    }),
    addNested: builder.mutation({
      query: ({nestedFolder}) => ({
        url: '/api/nested',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { nestedFolder },
      }),
    }),
  }),
});

export const { useGradeRepoMutation, useGetFileStructureQuery, useLazyGetFileStructureQuery, useAddNestedMutation } = graderApi;

export default graderApi;
