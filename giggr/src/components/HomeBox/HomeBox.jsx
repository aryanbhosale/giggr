import { Card, Text, Avatar, CardBody } from "@chakra-ui/react";
import card from "../../assets/Home/card.png";

const HomeBox = ({ text }) => {
  return (
    <Card
      h={{ base: "6rem", sm: "7rem", md: "7rem", lg: "7rem", xl: "7rem" }}
      alignItems={"center"}
      maxW="sm"
      variant={"filled"}
      bg={"gray.300"}
      _hover={{ cursor: "pointer", boxShadow: " 0 0 0 0.5rem #CBD5E0" }}
      transitionDuration="100ms"
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

export default HomeBox;
