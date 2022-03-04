import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { ActionId, ActionPlan, IsAdopted, Action } from "./ActionType";

export const stateActionIds = atom<ActionId[]>({
  key: "ActionIds",
  default: [],
});

export const selectBottomActionId = selector<ActionId>({
  key: "BottomActionId",
  get: ({ get }) => {
    const Ids: ActionId[] = get(stateActionIds);
    const aryMax = function (a: ActionId, b: ActionId) {return Math.max(a, b);}
    return Ids.length ? Ids.reduce(aryMax) : 0;
  },
});

export const stateActionPlan = atomFamily<ActionPlan, ActionId>({
  key: "ActionPlan",
  default: "",
});

export const stateActionIsAdopted = atomFamily<IsAdopted, ActionId>({
  key: "ActionIsAdopted",
  default: false,
});

export const selectAction = selectorFamily<Action, ActionId>({
  key: "Action",
  get: (actionId) => ({ get }) => {
    return {
      id: actionId,
      plan: get(stateActionPlan(actionId)),
      isAdopted: get(stateActionIsAdopted(actionId)),
    };
  }
});

export const selectAllActions = selector({
  key: "getAllActions",
  get: ({ get }) => {
    const ActionIds = get(stateActionIds);
    return ActionIds.map((id) => get(selectAction(id)));
  },
});
