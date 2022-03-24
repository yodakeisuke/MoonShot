/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAchievementInput = {
  id?: string | null,
  user: string,
  theme?: string | null,
  asIs?: string | null,
  toBe?: string | null,
  gap?: string | null,
  cause?: string | null,
  action?: string | null,
};

export type ModelAchievementConditionInput = {
  user?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  asIs?: ModelStringInput | null,
  toBe?: ModelStringInput | null,
  gap?: ModelStringInput | null,
  cause?: ModelStringInput | null,
  action?: ModelStringInput | null,
  and?: Array< ModelAchievementConditionInput | null > | null,
  or?: Array< ModelAchievementConditionInput | null > | null,
  not?: ModelAchievementConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Achievement = {
  __typename: "Achievement",
  id: string,
  user: string,
  theme?: string | null,
  asIs?: string | null,
  toBe?: string | null,
  gap?: string | null,
  cause?: string | null,
  action?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAchievementInput = {
  id: string,
  user?: string | null,
  theme?: string | null,
  asIs?: string | null,
  toBe?: string | null,
  gap?: string | null,
  cause?: string | null,
  action?: string | null,
};

export type DeleteAchievementInput = {
  id: string,
};

export type ModelAchievementFilterInput = {
  id?: ModelIDInput | null,
  user?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  asIs?: ModelStringInput | null,
  toBe?: ModelStringInput | null,
  gap?: ModelStringInput | null,
  cause?: ModelStringInput | null,
  action?: ModelStringInput | null,
  and?: Array< ModelAchievementFilterInput | null > | null,
  or?: Array< ModelAchievementFilterInput | null > | null,
  not?: ModelAchievementFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelAchievementConnection = {
  __typename: "ModelAchievementConnection",
  items:  Array<Achievement | null >,
  nextToken?: string | null,
};

export type CreateAchievementMutationVariables = {
  input: CreateAchievementInput,
  condition?: ModelAchievementConditionInput | null,
};

export type CreateAchievementMutation = {
  createAchievement?:  {
    __typename: "Achievement",
    id: string,
    user: string,
    theme?: string | null,
    asIs?: string | null,
    toBe?: string | null,
    gap?: string | null,
    cause?: string | null,
    action?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAchievementMutationVariables = {
  input: UpdateAchievementInput,
  condition?: ModelAchievementConditionInput | null,
};

export type UpdateAchievementMutation = {
  updateAchievement?:  {
    __typename: "Achievement",
    id: string,
    user: string,
    theme?: string | null,
    asIs?: string | null,
    toBe?: string | null,
    gap?: string | null,
    cause?: string | null,
    action?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAchievementMutationVariables = {
  input: DeleteAchievementInput,
  condition?: ModelAchievementConditionInput | null,
};

export type DeleteAchievementMutation = {
  deleteAchievement?:  {
    __typename: "Achievement",
    id: string,
    user: string,
    theme?: string | null,
    asIs?: string | null,
    toBe?: string | null,
    gap?: string | null,
    cause?: string | null,
    action?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAchievementQueryVariables = {
  id: string,
};

export type GetAchievementQuery = {
  getAchievement?:  {
    __typename: "Achievement",
    id: string,
    user: string,
    theme?: string | null,
    asIs?: string | null,
    toBe?: string | null,
    gap?: string | null,
    cause?: string | null,
    action?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAchievementsQueryVariables = {
  filter?: ModelAchievementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAchievementsQuery = {
  listAchievements?:  {
    __typename: "ModelAchievementConnection",
    items:  Array< {
      __typename: "Achievement",
      id: string,
      user: string,
      theme?: string | null,
      asIs?: string | null,
      toBe?: string | null,
      gap?: string | null,
      cause?: string | null,
      action?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAchievementSubscription = {
  onCreateAchievement?:  {
    __typename: "Achievement",
    id: string,
    user: string,
    theme?: string | null,
    asIs?: string | null,
    toBe?: string | null,
    gap?: string | null,
    cause?: string | null,
    action?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAchievementSubscription = {
  onUpdateAchievement?:  {
    __typename: "Achievement",
    id: string,
    user: string,
    theme?: string | null,
    asIs?: string | null,
    toBe?: string | null,
    gap?: string | null,
    cause?: string | null,
    action?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAchievementSubscription = {
  onDeleteAchievement?:  {
    __typename: "Achievement",
    id: string,
    user: string,
    theme?: string | null,
    asIs?: string | null,
    toBe?: string | null,
    gap?: string | null,
    cause?: string | null,
    action?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
