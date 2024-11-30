export interface IStagedata {
  companyName: string;
  applyDate: Date;
  endDate: Date | null;
  stage: string | null;
  comment: string[] | null;
}
