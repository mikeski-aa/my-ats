export interface IStagedata {
  id?: number;
  companyName: string;
  applyDate: Date;
  endDate: Date | null;
  status: string;
  comment: string[] | null;
  location: string;
}
