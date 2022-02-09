import IActivity from "./IActivity";

export default interface IActivitiesResponse {
  status: number;
  activities: IActivity[];
}
