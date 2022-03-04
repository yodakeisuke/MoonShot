import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { WhyId, WhyCause, Why } from "./WhyType";

export const stateWhyIds = atom<WhyId[]>({
  key: "whyIds",
  default: [],
});

export const selectBottomWhyId = selector<WhyId>({
  key: "BottomWhyId",
  get: ({ get }) => {
    const Ids: WhyId[] = get(stateWhyIds);
    const aryMax = function (a: WhyId, b: WhyId) {return Math.max(a, b);}
    return Ids.length ? Ids.reduce(aryMax) : 0;
  },
});

export const stateWhyCause = atomFamily<WhyCause, WhyId>({
  key: "whyCause",
  default: "",
});

export const selectWhy = selectorFamily<Why, WhyId>({
  key: "Why",
  get: (whyId) => ({ get }) => {
    return {
      id: whyId,
      cause: get(stateWhyCause(whyId)),
    };
  }
});

export const selectAllWhys = selector({
  key: "getAllWhys",
  get: ({ get }) => {
    const whyIds = get(stateWhyIds);
    return whyIds.map((id) => get(selectWhy(id)));
  },
});
