import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import ProfileImage from "../../../public/assets/images/Harsh_Profile.jpg";
import { ABOUT_ME } from "@/constant/constant";

const ProfileCard = () => {
  return (
    <Box height="100%">
      <Flex
        flexDirection="column"
        gap={3}
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        {/* Image Wrapper */}
        <Box
          position="relative"
          width="200px"
          height="200px"
          borderRadius="full"
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mx="auto"
        >
          <Image
            src={ProfileImage}
            alt={ABOUT_ME.name}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 150px, 200px"
            priority
            quality={90}
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* Name & Description */}
        <Heading
          as="h2"
          size="md"
          mt={2}
          textAlign="center"
          letterSpacing={0.5}
        >
          {ABOUT_ME.name}
        </Heading>
        <Text
          fontSize="sm"
          textAlign="center"
          style={{
            opacity: 0.6,
          }}
          letterSpacing={0.7}
          maxWidth={{
            base: "80%",
            md: "100%",
          }}
          whiteSpace="pre-line"
        >
          {ABOUT_ME.description}
        </Text>
        {/* About Me Section (SEO Optimized) */}
        <Box as="section" aria-label="About Me" maxW="80%" textAlign="justify">
          <Text
            fontSize="sm"
            mt={2}
            opacity={0.7}
            whiteSpace="pre-line"
            letterSpacing={0.4}
            lineHeight={1.7}
          >
            {ABOUT_ME.about}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfileCard;
