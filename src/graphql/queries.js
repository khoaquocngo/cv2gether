/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConfession = /* GraphQL */ `
  query GetConfession($id: ID!) {
    getConfession(id: $id) {
      id
      description
      status
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listConfessions = /* GraphQL */ `
  query ListConfessions(
    $filter: ModelConfessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        status
        type
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
