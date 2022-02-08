import axios from "axios";
import IActivityType from "../interfaces/IActivityType";
import IResponse from "../interfaces/IResponse";

const DownloadTypes = async (): Promise<Array<IActivityType>> => {
  const response = await axios.get<IResponse>("http://localhost:3000/types");
  return response.data.types;
};

const AddType = async (props: IActivityType): Promise<void> => {
  const response = await axios.post("http://localhost:3000/types", props);
};

const RemoveType = async (props: IActivityType): Promise<void> => {
  const response = await axios.delete(
    `http://localhost:3000/types/${props._id}`
  );
};
export { DownloadTypes, AddType, RemoveType };
