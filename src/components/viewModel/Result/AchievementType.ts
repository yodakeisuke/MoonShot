import { AsIs, ToBe, Gap } from "../Analysis/AnalysisType";
import { Why } from "../Why/WhyType";
import { Action  } from "../Action/ActionType";

export type AchivementId = string;

export type Achievement = {
  id: AchivementId;
  user: string;
  asIs: AsIs;
  toBe: ToBe;
  gap: Gap;
  cause: Why;
  action: Action;
};
