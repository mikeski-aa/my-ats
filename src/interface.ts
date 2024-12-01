export interface IStagedata {
  id?: number;
  companyName: string;
  applyDate: Date;
  endDate: Date | null;
  stage: string | null;
  comment: string[] | null;
  location: string;
}
