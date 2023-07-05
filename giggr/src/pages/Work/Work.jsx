import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  Center,
  HStack,
  VStack,
  Show,
  Hide,
} from "@chakra-ui/react";
import WorkCard from "../../components/WorkCard/WorkCard";
import gradient1 from "../../assets/Work/gradient1.png";
import gradient2 from "../../assets/Work/gradient2.png";
import gradient3 from "../../assets/Work/gradient3.png";

const Work = () => {
  return (
    <Flex
      direction={"column"}
      w={{ base: "33rem", sm: "60rem", md: "70rem", lg: "80rem", xl: "100%" }}
      h={{
        base: "100%",
        sm: "100%",
        md: "35.625rem",
        lg: "40.625rem",
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
        </VStack>
      </Hide>
    </Flex>
  );
};

export default Work;
