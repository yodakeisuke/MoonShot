export type ActionId = number;
export type ActionPlan = string;
export type IsAdopted = boolean;
export type ActionCost = number;
export type ActionPerformance = number;

export type Action = {
  id: ActionId;
  plan: ActionPlan;
  cost: ActionCost;
  performance: ActionPerformance;
  isAdopted: IsAdopted;
};
