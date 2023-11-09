/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConfession = /* GraphQL */ `
  mutation CreateConfession(
    $input: CreateConfessionInput!
    $condition: ModelConfessionConditionInput
  ) {
    createConfession(input: $input, condition: $condition) {
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
export const updateConfession = /* GraphQL */ `
  mutation UpdateConfession(
    $input: UpdateConfessionInput!
    $condition: ModelConfessionConditionInput
  ) {
    updateConfession(input: $input, condition: $condition) {
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
export const deleteConfession = /* GraphQL */ `
  mutation DeleteConfession(
    $input: DeleteConfessionInput!
    $condition: ModelConfessionConditionInput
  ) {
    deleteConfession(input: $input, condition: $condition) {
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
