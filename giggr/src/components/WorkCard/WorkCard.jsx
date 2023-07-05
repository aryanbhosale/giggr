import { Card, Text, CardHeader, CardBody } from "@chakra-ui/react";

const WorkCard = ({ image, heading, text }) => {
  return (
    <Card
      h={{ base: "17rem", sm: "20rem", md: "20rem", lg: "20rem", xl: "20rem" }}
      w={{ base: "15rem", sm: "18rem", md: "18rem", lg: "18rem", xl: "18rem" }}
      alignItems={"center"}
      maxW="sm"
      variant={"filled"}
      backgroundImage={image}
      _hover={{ cursor: "pointer" }} 
    >
      <CardHeader>
        <Text fontWeight={"600"} fontSize={{
            base: "2rem",
            sm: "2.25625rem",
            md: "2.25625rem",
            lg: "2.25625rem",
            xl: "2.25625rem",
          }}>
          {heading}
        </Text>
      </CardHeader>
      <CardBody>
        <Text fontWeight={"400"} fontSize={{
            base: "1rem",
            sm: "1.25625rem",
            md: "1.25625rem",
            lg: "1.25625rem",
            xl: "1.25625rem",
          }}>
          {text}
        </Text>
      </CardBody>
    </Card>
  );
};

export default WorkCard;
