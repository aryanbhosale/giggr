import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  VStack,
  Hide,
  Card,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import figure from "../../assets/Contact/figure.png";
import facebook from "../../assets/Contact/facebook.png";
import twitter from "../../assets/Contact/twitter.png";
import instagram from "../../assets/Contact/instagram.png";

const ContactCard = ({ header, text, icons }) => {
  return (
    <Card
      h={{ base: "7rem", sm: "8rem", md: "8rem", lg: "8rem", xl: "8rem" }}
      w={{ base: "15rem", sm: "16rem", md: "18rem", lg: "18rem", xl: "18rem" }}
      maxW="sm"
      variant={"filled"}
      bg={"#9c8cfc"}
      _hover={{ cursor: "pointer" }}
    >
      <CardHeader>
        <Text
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
        {icons ? (
          <HStack justifyContent={"right"}>
            <Image src={facebook} alt="facebook" />
            <Image src={twitter} alt="twitter" />
            <Image src={instagram} alt="instagram" />
          </HStack>
        ) : null}
      </CardBody>
    </Card>
  );
};

const Contact = () => {
  return (
    <Flex
      direction={"column"}
      w={{ base: "33rem", sm: "61rem", md: "70rem", lg: "80rem", xl: "100%" }}
      h={{
        base: "50.625rem",
        sm: "40.625rem",
        md: "40.625rem",
        lg: "40.625rem",
        xl: "48.625rem",
      }}
      justifyContent={"space-around"}
      bg="#08042c"
    >
      <Flex color="white" justifyContent={"space-between"}>
        <Box padding={"4rem"}>
          <Text
            fontSize={{
              base: "2rem",
              sm: "3rem",
              md: "3rem",
              lg: "4rem",
              xl: "4rem",
            }}
            padding={{
              base: "1rem",
              sm: "1rem",
              md: "1rem",
              lg: "1rem",
              xl: "1rem",
            }}
          >
            Ready to work with us?
          </Text>
          <Text
            fontSize={{
              base: "1rem",
              sm: "1.3rem",
              md: "1.3rem",
              lg: "1.8rem",
              xl: "1.8rem",
            }}
            padding={{
              base: "1rem",
              sm: "1rem",
              md: "1rem",
              lg: "1rem",
              xl: "1rem",
            }}
          >
            Send us a message and let{"'"}s talk about it.
          </Text>
        </Box>
        <Box w={"30%"}>
          <Image paddingTop={"8rem"} src={figure} alt="figure" />
        </Box>
      </Flex>
      <Box>
        <Hide below="480px">
          <HStack
            justifyContent={"space-around"}
            padding={{
              base: "4rem",
              sm: "2rem",
              md: "3rem",
              lg: "3rem",
              xl: "3rem",
            }}
          >
            <Text textAlign={"center"} color={"white"}>
              CONTACT US ☺
            </Text>
            <ContactCard
              header={"PHONE"}
              text={"(123) 456-7890"}
              icons={false}
            />
            <ContactCard
              header={"EMAIL"}
              text={"hello@reallygreatsite.com"}
              icons={false}
            />
            <ContactCard header={"Social"} text={""} icons={true} />
          </HStack>
        </Hide>
        <Hide above="479px">
          <VStack
            justifyContent={"space-around"}
            padding={{
              base: "4rem",
              sm: "2rem",
              md: "3rem",
              lg: "3rem",
              xl: "3rem",
            }}
          >
            <Text textAlign={"center"} color={"white"}>
              CONTACT US ☺
            </Text>
            <ContactCard
              header={"PHONE"}
              text={"(123) 456-7890"}
              icons={false}
            />
            <ContactCard
              header={"EMAIL"}
              text={"hello@reallygreatsite.com"}
              icons={false}
            />
            <ContactCard header={"Social"} text={""} icons={true} />
          </VStack>
        </Hide>
      </Box>
    </Flex>
  );
};

export default Contact;
