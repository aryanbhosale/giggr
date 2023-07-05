import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  Center,
  HStack,
} from "@chakra-ui/react";
import HomeBox from "../../components/HomeBox/HomeBox";
import homePattern from "../../assets/Home/pattern.png";

const Home = () => {
  return (
    <Flex
      direction={"column"}
      w={{ base: "33rem", sm: "60rem", md: "70rem", lg: "80rem", xl: "100%" }}
      h={{
        base: "30.625rem",
        sm: "30.625rem",
        md: "35.625rem",
        lg: "40.625rem",
        xl: "44.625rem",
      }}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Center>
        <Box zIndex={-1}>
          <Image src={homePattern} alt="Home Pattern" />
        </Box>
        <Box position={"absolute"}>
          <Text
            fontWeight={"700"}
            fontSize={{
              base: "3rem",
              sm: "3.72rem",
              md: "3.782rem",
              lg: "4.86rem",
              xl: "5.3125rem",
            }}
            textAlign={"center"}
          >
            Accelerating the
            <br />
            Pursuit of Excellence
          </Text>
          <Box paddingTop={"5rem"}>
            <HStack
              justifyContent={"center"}
              spacing={{
                base: "2rem",
                sm: "4.475rem",
                md: "4.75rem",
                lg: "10rem",
                xl: "10rem",
              }}
            >
              <HomeBox text={"Digital Compass"} />
              <Button
                bg="black"
                color={"white"}
                borderRadius={"0"}
                _hover={{ bg: "#2D3748" }}
              >
                LEARN MORE
              </Button>
              <HomeBox text={"Personal Scorecard"} />
            </HStack>
          </Box>
        </Box>
      </Center>
    </Flex>
  );
};

export default Home;
