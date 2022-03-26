/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAchievement = /* GraphQL */ `
  query GetAchievement($id: ID!) {
    getAchievement(id: $id) {
      id
      user
      theme
      asIs
      toBe
      gap
      cause
      action
      createdAt
      updatedAt
    }
  }
`;
export const listAchievements = /* GraphQL */ `
  query ListAchievements(
    $filter: ModelAchievementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAchievements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        theme
        asIs
        toBe
        gap
        cause
        action
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
