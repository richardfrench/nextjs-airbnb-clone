import { useQuery, QueriesResults } from "@tanstack/react-query";

import urlNasaSearch from "../services/nasa";
import { NasaResponse } from "../types";

export const useNasaQuery = <InputTypes>(params: InputTypes) => {
  const urlNasaSearchUrl = urlNasaSearch<InputTypes>(params);

  return useQuery<NasaResponse>(["nasaSearch"], () =>
    fetch(urlNasaSearchUrl).then((res) => res.json())
  );
};

export default useNasaQuery;
