import { Heading, Text, Box } from "@cruk/cruk-react-components";
// import useNasaQuery from "../../hooks/useNasaQuery";

export const HomePage = () => {
  const searchParams = { keywords: "moon" };

  // validation and form code here

  // Data fetching code here

  // type InputTypes = typeof searchParams;
  // const { data, error, isLoading } = useNasaQuery<InputTypes>(searchParams);

  return (
    <Box marginTop="s" paddingTop="s">
      <Heading h1>React Exercise</Heading>
      <Text>
        Get started by editing <code>src/components/HomePage/index.tsx</code>
      </Text>

      {/* form here */}

      {/* results here */}
    </Box>
  );
};

export default HomePage;
