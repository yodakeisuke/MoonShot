export type ActionId = number;
export type ActionPlan = string;
export type IsAdopted = boolean;

export type Action = {
  id: ActionId;
  plan: ActionPlan;
  isAdopted: IsAdopted;
};
