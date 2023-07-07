import {
  Flex,
  Box,
  Text,
  VStack,
  Hide,
  Card,
  Stack,
  Image,
  Button,
  CardBody,
  Heading,
  CardFooter,
} from "@chakra-ui/react";
import blog1 from "../../assets/Blog/blog1.png";
import blog2 from "../../assets/Blog/blog2.png";
import blog3 from "../../assets/Blog/blog3.png";

const BlogCard = ({ image, heading, text }) => {
  return (
    <Card
      bg="#087c5c"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="unstyled"
      _hover={{ cursor: "pointer" }}
    >
      <Image
        objectFit="cover"
        w={{
          base: "15rem",
          sm: "12.5rem",
          md: "12.5rem",
          lg: "15rem",
          xl: "15rem",
        }}
        h={"9rem"}
        src={image}
        alt="Blog Image"
      />

      <Stack
        paddingLeft={{
          base: null,
          sm: "2rem",
          md: "2rem",
          lg: "2rem",
          xl: "2rem",
        }}
      >
        <CardBody>
          <Heading color={"#c6f598"} size="md">
            {heading}
          </Heading>

          <Text
            color="white"
            w={{
              base: "18rem",
              sm: "20.5rem",
              md: "20.5rem",
              lg: "20.5rem",
              xl: "20.5rem",
            }}
            py="2"
          >
            {text}
          </Text>
        </CardBody>

        <CardFooter color="white">
          <Button variant="link" colorScheme="black">
            Read more
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

const Blogs = () => {
  return (
    <Flex
      direction={{ base: "column", sm: "row" }}
      w={{ base: "33rem", sm: "60.5rem", md: "70rem", lg: "80rem", xl: "100%" }}
      h={{
        base: "72.625rem",
        sm: "46.625rem",
        md: "46.625rem",
        lg: "46.625rem",
        xl: "46.625rem",
      }}
      bg={"#087c5c"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Hide below="480px">
        <Box
          color="white"
          w={{ base: null, sm: "40%", md: "45%", lg: "50%", xl: "50%" }}
          textAlign={"center"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Text
            paddingTop={"6rem"}
            fontSize={{
              base: null,
              sm: "3rem",
              md: "4rem",
              lg: "4rem",
              xl: "5rem",
            }}
          >
            In the Know
          </Text>
        </Box>
        <Box
          paddingTop={"6rem"}
          w={{ base: null, sm: "60%", md: "55%", lg: "50%", xl: "50%" }}
        >
          <VStack gap={"4rem"}>
            <BlogCard
              image={blog1}
              heading={"SD Showcase Gives Back"}
              text={
                "News write-ups offer a great way to let clients know about new products and services, events, awards, and more!"
              }
            />
            <BlogCard
              image={blog2}
              heading={"5k Attendees for SDS 2025"}
              text={
                "News write-ups offer a great way to let clients know about new products and services, events, awards, and more!"
              }
            />
            <BlogCard
              image={blog3}
              heading={"Hiro Wilson Ready for SDS"}
              text={
                "News write-ups offer a great way to let clients know about new products and services, events, awards, and more!"
              }
            />
          </VStack>
        </Box>
      </Hide>
      <Hide above="479px">
        <Box
          color="white"
          textAlign={"center"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Text
            fontSize={{ base: "3rem", sm: null, md: null, lg: null, xl: null }}
          >
            In the Know
          </Text>
        </Box>

        <VStack
          paddingTop={{ base: "2rem", sm: null }}
          justifyContent={"center"}
          gap={"4rem"}
        >
          <BlogCard
            image={blog1}
            heading={"SD Showcase Gives Back"}
            text={
              "News write-ups offer a great way to let clients know about new products and services, events, awards, and more!"
            }
          />
          <BlogCard
            image={blog2}
            heading={"5k Attendees for SDS 2025"}
            text={
              "News write-ups offer a great way to let clients know about new products and services, events, awards, and more!"
            }
          />
          <BlogCard
            image={blog3}
            heading={"Hiro Wilson Ready for SDS"}
            text={
              "News write-ups offer a great way to let clients know about new products and services, events, awards, and more!"
            }
          />
        </VStack>
      </Hide>
    </Flex>
  );
};

export default Blogs;
