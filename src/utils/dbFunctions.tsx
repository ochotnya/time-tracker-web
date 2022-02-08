import axios from "axios";
import IActivityType from "../interfaces/IActivityType";
import IResponse from "../interfaces/IResponse";

const DownloadTypes = async (): Promise<Array<IActivityType>> => {
  const response = await axios.get<IResponse>("http://localhost:3000/types");
  return response.data.types;
};

export { DownloadTypes };
