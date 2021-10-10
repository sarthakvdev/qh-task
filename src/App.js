import "./App.css";
import { Box, } from '@chakra-ui/react';
import Navigation from "./Components/Navigation";

const Homepage = () => {
  return(
    <Box>
      <Navigation />
    </Box>
  );
};

const App = () => {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
};

export default App;
