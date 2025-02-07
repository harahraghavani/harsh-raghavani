import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import ProfileImage from "../../../public/assets/images/Harsh_Profile.jpg";
import { ABOUT_ME } from "@/constant/constant";

const ProfileCard = () => {
  return (
    <Box>
      <Flex flexDirection="column" gap={3} align="center">
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
        >
          {ABOUT_ME.description}
        </Text>
      </Flex>
    </Box>
  );
};

export default ProfileCard;
