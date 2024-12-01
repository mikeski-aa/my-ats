import { IStagedata } from "../interface";

const applications: IStagedata[] = [
  {
    companyName: "Comapny One",
    applyDate: new Date("2024-11-01"),
    endDate: new Date("2024-10-05"),
    stage: "Applied",
    comment: null,
  },
  {
    companyName: "Comapny Two",
    applyDate: new Date("2024-02-06"),
    endDate: null,
    stage: "Rejcted",
    comment: null,
  },
  {
    companyName: "Comapny Three",
    applyDate: new Date("2024-02-06"),
    endDate: null,
    stage: "Interview",
    comment: null,
  },
];

export { applications };
