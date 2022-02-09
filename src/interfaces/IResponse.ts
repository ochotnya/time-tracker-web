import IActivityType from "./IActivityType";

export default interface ITypeResponse {
  status: number;
  types: IActivityType[];
}
