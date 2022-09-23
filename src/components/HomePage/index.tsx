import { Heading, Text, Box } from "@cruk/cruk-react-components";
import properties from '../../ldn-limited.json';
export const HomePage = () => {

  return (
    <Box marginTop="s" paddingTop="s">
      <Heading h1>React Exercise</Heading>
      {properties.map((item) => (
      ))}
    </Box>
  );
};

export default HomePage;
