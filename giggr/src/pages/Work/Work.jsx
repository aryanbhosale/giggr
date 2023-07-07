import {
  Flex,
  Text,
  Button,
  HStack,
  VStack,
  Hide,Card, CardHeader, CardBody, Avatar
} from "@chakra-ui/react";
import gradient1 from "../../assets/Work/gradient1.png";
import gradient2 from "../../assets/Work/gradient2.png";
import gradient3 from "../../assets/Work/gradient3.png";
import image from "../../assets/Work/gradient4.png";
import add from "../../assets/Work/add.png";

const WorkCardButton = ({ text }) => {
  return (
    <Card
      h={{ base: "8rem", sm: "10rem", md: "10rem", lg: "10rem", xl: "10rem" }}
      w={{ base: "15rem", sm: "18rem", md: "18rem", lg: "18rem", xl: "18rem" }}
      alignItems={"center"}
      maxW="sm"
      variant={"outline"}
      backgroundImage={image}
      _hover={{ cursor: "pointer" }}
    >
      <Avatar
        width={"2rem"}
        height={"2rem"}
        marginRight={{
          base: "-13rem",
          sm: "-11rem",
          md: "-15rem",
          lg: "-15rem",
          xl: "-15rem",
        }}
        position={"absolute"}
        name={"Plus"}
        src={add}
      />
      <CardBody>
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
          paddingTop={"2.15em"}
        >
          {text}
        </Text>
      </CardBody>
    </Card>
  );
};

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

const Work = () => {
  return (
    <Flex
    marginTop={{ base: null, sm: null, md: null, lg: "8rem", xl: "8rem" }}
      direction={"column"}
      w={{ base: "33rem", sm: "60rem", md: "70rem", lg: "80rem", xl: "100%" }}
      h={{
        base: "100%",
        sm: "100%",
        md: "44.625rem",
        lg: "44.625rem",
        xl: "44.625rem",
      }}
    >
      <Text
        fontWeight={"600"}
        fontSize={{
          base: "2.8rem",
          sm: "3.5rem",
          md: "3.5rem",
          lg: "3.75rem",
          xl: "4rem",
        }}
        textAlign={"left"}
      >
        Organizing for a New Era
      </Text>
      <Hide below="480px">
        <HStack
          paddingTop={"3rem"}
          paddingRight={{
            base: "33rem",
            sm: "1rem",
            md: "3rem",
            lg: "3rem",
            xl: "3rem",
          }}
          justifyContent={"right"}
          spacing={{
            base: "2rem",
            sm: "1rem",
            md: "1rem",
            lg: "1rem",
            xl: "1rem",
          }}
        >
          <WorkCard
            color={"#FFEAF9"}
            image={gradient1}
            heading={"Workforces"}
            text={
              "Transforming Capabilities with Design Learning delivering a New breed of Entrepreneurs, Intrapreneurs and Solopreneurs."
            }
          />
          <WorkCard
            color={"#C0DFFE"}
            image={gradient2}
            heading={"Workplaces"}
            text={
              "An Intelligent Infrastructure  as Service (IIAS) that helps Communities Share, Collaborate and Create Glocally."
            }
          />
          <WorkCard
            color={"#DBA8EA"}
            image={gradient3}
            heading={"Work Outcomes"}
            text={
              "Operations & Innovation focused on delivering New Value mutually inclusively."
            }
          />
        </HStack>
        <HStack padding={"3rem"} justifyContent={"space-around"}>
          <WorkCardButton text={"Digital Transformation"} />
          <Button
            marginRight={"10rem"}
            marginLeft={"10rem"}
            bg="black"
            color={"white"}
            borderRadius={"0"}
            _hover={{ bg: "#2D3748" }}
          >
            LEARN MORE
          </Button>
          <WorkCardButton text={"C 2 C Continuum"} />
        </HStack>
      </Hide>
      <Hide above="479px">
        <VStack
          paddingTop={"3rem"}
          paddingRight={{
            base: "3rem",
            sm: "3rem",
            md: "3rem",
            lg: "3rem",
            xl: "3rem",
          }}
          justifyContent={"right"}
          spacing={{
            base: "2rem",
            sm: "1rem",
            md: "1rem",
            lg: "1rem",
            xl: "1rem",
          }}
        >
          <WorkCard
            image={gradient1}
            heading={"Workforces"}
            text={
              "Transforming Capabilities with Design Learning delivering a New breed of Entrepreneurs, Intrapreneurs and Solopreneurs."
            }
          />
          <WorkCard
            image={gradient2}
            heading={"Workplaces"}
            text={
              "An Intelligent Infrastructure  as Service (IIAS) that helps Communities Share, Collaborate and Create Glocally."
            }
          />
          <WorkCard
            image={gradient3}
            heading={"Work Outcomes"}
            text={
              "Operations & Innovation focused on delivering New Value mutually inclusively."
            }
          />
          <Button
            marginRight={"10rem"}
            marginLeft={"10rem"}
            bg="black"
            color={"white"}
            borderRadius={"0"}
            _hover={{ bg: "#2D3748" }}
          >
            LEARN MORE
          </Button>
          <WorkCardButton text={"Digital Transformation"} />
          <WorkCardButton text={"C 2 C Continuum"} />
        
        </VStack>
      </Hide>
    </Flex>
  );
};

export default Work;
