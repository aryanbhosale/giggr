import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  Center,
  HStack,
  Card,
  Avatar,
  CardBody,
} from "@chakra-ui/react";
import homePattern from "../../assets/Home/pattern.png";
import card from "../../assets/Home/card.png";

const HomeBox = ({ text }) => {
  return (
    <Card
      h={{ base: "6rem", sm: "7rem", md: "7rem", lg: "7rem", xl: "7rem" }}
      alignItems={"center"}
      maxW="sm"
      variant={"filled"}
      bg={"gray.300"}
      _hover={{ cursor: "pointer", boxShadow: " 0 0 0 0.3rem #CBD5E0" }}
      transitionDuration="50ms"
    >
      <Avatar
        bg={"gray.400"}
        marginTop={"-2rem"}
        position={"absolute"}
        name={text}
        src={card}
      />
      <CardBody>
        <Text
          fontWeight={"700"}
          fontSize={"1.25625rem"}
          w={{ base: "6rem", sm: "7rem", md: "7rem", lg: "7rem", xl: "8.5rem" }}
          textAlign={"center"}
        >
          {text}
        </Text>
      </CardBody>
    </Card>
  );
};

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
          <Image
            w={{ base: null, sm: null, md: null, lg: null, xl: "170rem" }}
            src={homePattern}
            alt="Home Pattern"
          />
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
