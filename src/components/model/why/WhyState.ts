import { atom, atomFamily, DefaultValue, selector, selectorFamily } from "recoil";
import {WhyCause, WhyId, Why} from "./WhyType";

export const stateWhyIds = atom<WhyId[]>({
  key: "state-why-ids",
  default: [],
});

export const stateWhyCause = atomFamily<WhyCause, WhyId>({
  key: "state-why-Cause",
  default: "",
});

export const stateWhy = selectorFamily<Why, WhyId>({
  key: "state-why",
  get: (whyId) => ({ get }) => {
    return {
      id: whyId,
      cause: get(stateWhyCause(whyId)),
    };
  },
  set: (whyId) => ({ get, set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {  // reset
      reset(stateWhyCause(whyId));
      return;
    }
    set(stateWhyCause(whyId), newValue.cause);
    if (get(stateWhyIds).find((WhyId) => WhyId === newValue.id)) return;  //add
    set(stateWhyIds, (prev) => [...prev, newValue.id]);
  },
});

export const stateWhys = selector<Why[]>({
  key: "state-Whys",
  get: ({ get }) => {
    const WhyIds = get(stateWhyIds);
    return WhyIds.map((WhyId) => get(stateWhy(WhyId)));
  },
});
