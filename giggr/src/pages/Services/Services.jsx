import {
  Box,
  Flex,
  Text,
  Card,
  CardBody,
  Button,
  HStack,
  VStack,
  Hide,
  Avatar,
  Center,
} from "@chakra-ui/react";
import card from "../../assets/Home/card.png";
import add from "../../assets/Work/add.png";
import arrow from "../../assets/Services/arrow.png";
import servicesImg from "../../assets/Services/services1.png";

const services = [
  {
    id: 0,
    text: "Identity & Access Management",
    avatar: card,
    color: "#e2e2e2",
    image: null,
    arrow: null,
    plus: null,
    center: true,
    bold: true,
    black: true,
    h: { base: "rem", sm: "12rem", md: "12rem", lg: "12rem", xl: "12rem" },
  },
  {
    id: 1,
    text: "MACHINE LEARNING / GENERATIVE EXPERIENCE",
    avatar: null,
    color: "#ff0444",
    image: null,
    arrow: arrow,
    plus: null,
    center: false,
    bold: false,
    black: false,
    h: { base: "rem", sm: "26rem", md: "26rem", lg: "26rem", xl: "26rem" },
  },
  {
    id: 2,
    text: "On-Demand enabled by Microservices",
    avatar: null,
    color: "#fa5300",
    image: null,
    arrow: null,
    plus: add,
    center: false,
    bold: false,
    black: false,
    h: { base: "rem", sm: "20rem", md: "20rem", lg: "20rem", xl: "20rem" },
  },
  {
    id: 3,
    text: "Human Capital Management",
    avatar: null,
    color: "#e8e4e4",
    image: null,
    arrow: null,
    plus: add,
    center: false,
    bold: false,
    black: true,
    h: { base: "rem", sm: "20rem", md: "20rem", lg: "20rem", xl: "20rem" },
  },
  {
    id: 4,
    text: "Events Calendar",
    avatar: null,
    color: "#e8e4e4",
    image: null,
    arrow: null,
    plus: add,
    center: false,
    bold: false,
    black: true,
    h: { base: "rem", sm: "20rem", md: "20rem", lg: "20rem", xl: "20rem" },
  },
  {
    id: 5,
    text: "Learning & Development Community",
    avatar: null,
    color: "#b004fc",
    image: null,
    arrow: null,
    plus: add,
    center: false,
    bold: false,
    black: false,
    h: { base: "rem", sm: "20rem", md: "20rem", lg: "20rem", xl: "20rem" },
  },
  {
    id: 6,
    text: "Global News",
    avatar: null,
    color: "#ff0444",
    image: null,
    arrow: arrow,
    plus: null,
    center: false,
    bold: false,
    black: false,
    h: { base: "rem", sm: "12rem", md: "12rem", lg: "12rem", xl: "12rem" },
  },
  {
    id: 7,
    text: "People Directory",
    avatar: null,
    color: "black",
    image: servicesImg,
    arrow: null,
    plus: null,
    center: false,
    bold: false,
    black: false,
    h: { base: "rem", sm: "26rem", md: "26rem", lg: "26rem", xl: "26rem" },
  },
];

const Services = () => {
  return (
    <Flex
      direction={"column"}
      w={{ base: "33rem", sm: "60rem", md: "70rem", lg: "80rem", xl: "100%" }}
      h={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
      }}
      alignContent={"center"}
      justifyContent={"space-between"}
    >
      <Center>
        <Box
          padding={"4rem"}
          w="100%"
          mx="auto"
          sx={{ columnCount: [1, 4] }}
        >
          {services.map((service) => (
            <Card
              key={service?.id}
              color={service?.black ? "black" : "white"}
              maxW="sm"
              variant={"filled"}
              bg={service?.color}
              backgroundImage={service?.image}
              _hover={{ cursor: "pointer" }}
              h={service?.h}
              my="1rem"
              justifyContent={"center"}
              alignItems={"center"}
            >
              {service?.avatar !== null ? (
                <Avatar
                  bg={"gray.400"}
                  w={"3.5rem"}
                  h={"3.5rem"}
                  marginTop={{ base: "-11rem", sm: "-12rem", md: "-12rem", lg: "-12rem", xl: "-12rem" }}
                  position={"absolute"}
                  name={"Symbol"}
                  src={card}
                />
              ) : null}
              {service?.plus !== null ? (
                <Avatar
                  width={"2rem"}
                  height={"2rem"}
                  marginTop={{ base: "rem", sm: "-17rem", md: "-17rem", lg: "-17rem", xl: "-17rem" }}
                  marginRight={{
                    base: "-19rem",
                    sm: "-10rem",
                    md: "-12rem",
                    lg: "-15rem",
                    xl: "-17rem",
                  }}
                  position={"absolute"}
                  name={"Plus"}
                  src={add}
                />
              ) : null}
              {service?.arrow !== null ? (
                <Avatar
                  width={{ base: "2rem", sm: "3rem", md: "3rem", lg: "3rem", xl: "3rem" }}
                  height={{ base: "2rem", sm: "3rem", md: "3rem", lg: "3rem", xl: "3rem" }}
                  marginTop={{ base: "0rem", sm: "8rem", md: "8rem", lg: "8rem", xl: "8rem" }}
                  marginRight={{ base: "-19rem", sm: "0", md: "0", lg: "0", xl: "0" }}
                  position={"absolute"}
                  name={"Arrow"}
                  src={arrow}
                />
              ) : null}
              <CardBody>
                <Center>
                  <Text
                    paddingTop={{ base: "0rem", sm: "1rem", md: "1rem", lg: "1rem", xl: "1rem" }}
                    textAlign={service?.center ? "center" : "left"}
                    fontWeight={service?.bold ? 700 : 100}
                    w={"11rem"}
                    fontSize={{
                      base: "1.75625rem",
                      sm: "1.75625rem",
                      md: "1.75625rem",
                      lg: "1.75625rem",
                      xl: "1.75625rem",
                    }}
                  >
                    {service?.text}
                  </Text>
                </Center>
              </CardBody>
            </Card>
          ))}
        </Box>
      </Center>
    </Flex>
  );
};

export default Services;
