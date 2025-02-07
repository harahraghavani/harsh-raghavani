import { SOCIAL_LINKS } from "@/constant/constant";
import { Box, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

const LinkCard = () => {
  return (
    <Box textAlign="center" p={5}>
      <Flex
        flexDirection="column"
        alignItems="center" // Centers horizontally
        justifyContent="center" // Centers vertically
        height="100%"
        width="100%"
        gap={5} // Uniform spacing between buttons
      >
        {SOCIAL_LINKS.map((link) => (
          <Box width="100%">
            <Link key={link.name} href={link.url} passHref target="_blank">
              <Button
                width="full"
                variant="surface"
                height="60px"
                fontSize="md"
                borderRadius="lg"
                transition="all 0.3s ease"
                willChange="transform, box-shadow"
                aria-label={`Open ${link.name}`}
              >
                <link.icon />
                {link.name}
              </Button>
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default LinkCard;
