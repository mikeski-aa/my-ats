import { IStagedata } from "../interface";

const applications: IStagedata[] = [
  {
    companyName: "Comapny One",
    applyDate: new Date("2024-11-01"),
    endDate: new Date("2024-10-05"),
    status: "Applied",
    comment: null,
    location: "Berlin",
  },
  {
    companyName: "Comapny Two",
    applyDate: new Date("2024-02-06"),
    endDate: null,
    status: "Rejcted",
    comment: null,
    location: "Berlin",
  },
  {
    companyName: "Comapny Three",
    applyDate: new Date("2024-02-06"),
    endDate: null,
    status: "Interview",
    comment: null,
    location: "Berlin",
  },
];

export { applications };
