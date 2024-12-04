export interface IStagedata {
  id?: number;
  companyName: string;
  applyDate: Date;
  endDate: Date | null;
  status: string;
  comment: string[] | null;
  location: string;
}

export interface IDetails {
  email: string;
  number: string;
  linkedin: string;
  portfolio: string;
  github: string;
}
