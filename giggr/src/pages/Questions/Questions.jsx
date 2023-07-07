import { Box, Flex, Text, CardBody, CardHeader, Card } from "@chakra-ui/react";

const QuestionCard = ({ header, text }) => {
  return (
    <Card
      h={{ base: "7rem", sm: "8rem", md: "8rem", lg: "8rem", xl: "8rem" }}
      w={{ base: "15rem", sm: "16rem", md: "18rem", lg: "18rem", xl: "18rem" }}
      bg="#282424"
      maxW="sm"
      variant={"filled"}
      _hover={{ cursor: "pointer" }}
    >
      <CardHeader>
        <Text
          color={"#cce780"}
          fontWeight={"600"}
          fontSize={{
            base: "1rem",
            sm: "1.25625rem",
            md: "1.25625rem",
            lg: "1.25625rem",
            xl: "1.35625rem",
          }}
        >
          {header}
        </Text>
      </CardHeader>
      <CardBody justifyContent={"space-around"}>
        <Text
          color={"white"}
          fontWeight={"400"}
          fontSize={{
            base: "1rem",
            sm: "1.25625rem",
            md: "1.25625rem",
            lg: "1.25625rem",
            xl: "1.25625rem",
          }}
        >
          {text}
        </Text>
      </CardBody>
    </Card>
  );
};

const Questions = () => {
  return (
    <Flex
      direction={"column"}
      w={{ base: "33rem", sm: "61rem", md: "70rem", lg: "80rem", xl: "100%" }}
      h={{
        base: "64rem",
        sm: "58.625rem",
        md: "58.625rem",
        lg: "58.625rem",
        xl: "58.625rem",
      }}
      justifyContent={"space-around"}
      bg="#282424"
    >
      <Box>
        <Text
          color="white"
          textAlign={"center"}
          fontSize={{
            base: "4rem",
            sm: "5rem",
            md: "5rem",
            lg: "5em",
            xl: "5rem",
          }}
          fontWeight={700}
        >
          Got Questions?
        </Text>
      </Box>
      <Flex direction={"row"} justifyContent={"space-around"}>
        <QuestionCard
          header={"Mailing Address"}
          text={"2055 Limestone Road, STE-200C, Wilmington, Delaware, US 19808"}
        />
        <QuestionCard
          header={"Email Address"}
          text={"hello@reallygreatsite.com"}
        />
        <QuestionCard header={"Phone Number"} text={"(123) 456-7890"} />
      </Flex>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.7256424262987!2d-75.65961412412814!3d39.723348071559556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c701c8925345d3%3A0xb70413dbeb354200!2s2055%20Limestone%20Rd%20%23200c%2C%20Wilmington%2C%20DE%2019808%2C%20USA!5e0!3m2!1sen!2sin!4v1688748006196!5m2!1sen!2sin"
          width="100%"
          height="500rem"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Flex>
  );
};

export default Questions;
