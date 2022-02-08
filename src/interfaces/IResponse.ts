import IActivityType from "./IActivityType";

export default interface IResponse {
  status: number;
  types: IActivityType[];
}
