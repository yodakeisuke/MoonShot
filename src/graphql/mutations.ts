/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAchievement = /* GraphQL */ `
  mutation CreateAchievement(
    $input: CreateAchievementInput!
    $condition: ModelAchievementConditionInput
  ) {
    createAchievement(input: $input, condition: $condition) {
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
export const updateAchievement = /* GraphQL */ `
  mutation UpdateAchievement(
    $input: UpdateAchievementInput!
    $condition: ModelAchievementConditionInput
  ) {
    updateAchievement(input: $input, condition: $condition) {
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
export const deleteAchievement = /* GraphQL */ `
  mutation DeleteAchievement(
    $input: DeleteAchievementInput!
    $condition: ModelAchievementConditionInput
  ) {
    deleteAchievement(input: $input, condition: $condition) {
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
