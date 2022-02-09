import axios from "axios";
import IActivity from "../interfaces/IActivity";
import IActivityType from "../interfaces/IActivityType";
import ITypeResponse from "../interfaces/IResponse";
import IActivitiesResponse from "../interfaces/IActivitiesResponse";

const DownloadTypes = async (): Promise<Array<IActivityType>> => {
  const response = await axios.get<ITypeResponse>(
    "http://localhost:3000/types"
  );
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

const AddActivity = async (props: IActivity): Promise<void> => {
  const response = await axios.post("http://localhost:3000/activities", props);
};

const DownloadActivities = async (): Promise<Array<IActivity>> => {
  const response = await axios.get<IActivitiesResponse>(
    "http://localhost:3000/activities"
  );
  return response.data.activities;
};
export { DownloadTypes, AddType, RemoveType, AddActivity, DownloadActivities };
