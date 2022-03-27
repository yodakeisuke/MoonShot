import { AsIs, ToBe, Gap } from '../Analysis/AnalysisType';
import { WhyCause } from 'components/viewModel/Why/WhyType';
import { ActionPlan  } from 'components/viewModel/Action/ActionType';

export type AchivementId = String;

export type Achievement = {
  id: AchivementId;
  user: String;
  theme: String;
  asIs: AsIs;
  toBe: ToBe;
  gap: Gap;
  cause: WhyCause;
  action: ActionPlan;
};
