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
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          gap={6}
          maxW="90%"
        >
          {/* Image Section - Left */}
          <Box
            position="relative"
            width="150px"
            height="150px"
            borderRadius="full"
            overflow="hidden"
            flexShrink={0}
          >
            <Image
              src={ProfileImage}
              alt={ABOUT_ME.name}
              placeholder="blur"
              fill
              sizes="(max-width: 768px) 120px, 150px"
              priority
              quality={90}
              style={{ objectFit: "cover" }}
            />
          </Box>

          {/* Name & Description - Right */}
          <Box textAlign={{ base: "center", md: "left" }}>
            <Heading as="h2" size="md" letterSpacing={0.5} mb={2}>
              {ABOUT_ME.name}
            </Heading>
            <Text
              fontSize="sm"
              opacity={0.7}
              letterSpacing={0.5}
              lineHeight={1.5}
              maxW={{
                base: "100%",
                md: "70%",
              }}
            >
              {ABOUT_ME.description}
            </Text>
          </Box>
        </Flex>

        {/* About Me Section (SEO Optimized) */}
        <Box as="section" aria-label="About Me" maxW="90%" textAlign="justify">
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
