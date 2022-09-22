import { Text } from "@cruk/cruk-react-components";
import { NasaSearchParams } from "../../types";
import useNasaQuery from "../../hooks/useNasaQuery";

type ResultsProps = {
  searchParams: NasaSearchParams;
};

export const Results = ({ searchParams }: ResultsProps) => {
  const { data, error, isLoading } = useNasaQuery(searchParams);

  return <Text>Results goes here</Text>;
};

export default Results;
