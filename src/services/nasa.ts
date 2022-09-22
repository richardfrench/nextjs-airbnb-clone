import { ObjectToJsonSnakeCaseKeys } from "../utils/format";

export const NASA_API_URL = "https://images-api.nasa.gov/search";

export const urlNasaSearch = <InputType>(queryData: InputType): string => {
  const paramsObjectWithSnakeCaseKeys =
    ObjectToJsonSnakeCaseKeys<InputType>(queryData);
  const paramsString = new URLSearchParams(
    paramsObjectWithSnakeCaseKeys
  ).toString();
  return `${NASA_API_URL}?${paramsString.toString() || ""}`;
};

export default urlNasaSearch;
