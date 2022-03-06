import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { ActionId, ActionPlan, IsAdopted, Action, ActionCost, ActionPerformance } from "./ActionType";

/* values */

export const stateActionIds = atom<ActionId[]>({
  key: "ActionIds",
  default: [1],
});

export const stateActionPlan = atomFamily<ActionPlan, ActionId>({
  key: "ActionPlan",
  default: "",
});

export const stateActionIsAdopted = atomFamily<IsAdopted, ActionId>({
  key: "ActionIsAdopted",
  default: false,
});

export const stateActionCost = atomFamily<ActionCost, ActionId>({
  key: "ActionCost",
  default: 50,
});

export const stateActionPerformance = atomFamily<ActionPerformance, ActionId>({
  key: "ActionPerformance",
  default: 50,
});

/* model */

export const selectAction = selectorFamily<Action, ActionId>({
  key: "getAction",
  get: (actionId) => ({ get }) => {
    return {
      id: actionId,
      plan: get(stateActionPlan(actionId)),
      isAdopted: get(stateActionIsAdopted(actionId)),
      cost: get(stateActionCost(actionId)),
      performance: get(stateActionPerformance(actionId)),
    };
  }
});

/* selectors */

export const selectBottomActionId = selector<ActionId>({
  key: "getBottomActionId",
  get: ({ get }) => {
    const Ids: ActionId[] = get(stateActionIds);
    const aryMax = function (a: ActionId, b: ActionId) {return Math.max(a, b);}
    return Ids.length ? Ids.reduce(aryMax) : 0;
  },
});

export const selectAllActions = selector({
  key: "getAllActions",
  get: ({ get }) => {
    const ActionIds = get(stateActionIds);
    return ActionIds.map((id) => get(selectAction(id)));
  },
});

export const selectBestAction = selector<Action | undefined>({
  key: "getBestAction",
  get: ({ get }) => {
    const allActions: Action[] = get(selectAllActions);
    if (!allActions.length) return;
    return allActions.reduce(
      (acc: Action, cur: Action): Action => {
        return acc.cost + acc.performance > cur.cost + cur.performance ? acc : cur;
      }
    );
  },
});
