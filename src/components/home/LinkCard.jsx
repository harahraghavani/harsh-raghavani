import { SOCIAL_LINKS } from "@/constant/constant";
import { Box, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

const LinkCard = () => {
  return (
    <Box textAlign="center" p={5} pb={7}>
      <Flex
        flexDirection="column"
        alignItems="center" // Centers horizontally
        justifyContent="center" // Centers vertically
        height="100%"
        gap={4} // Uniform spacing between buttons
      >
        {SOCIAL_LINKS.map((link) => (
          <Link key={link.name} href={link.url} passHref target="_blank">
            <Button
              as="span"
              variant="unstyled"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={{
                base: 5,
                md: 4,
              }}
              width="260px"
              fontSize="md"
              bg="gray.100"
              color="gray.800"
              borderRadius="md"
              border="1px solid rgba(255, 255, 255, 0.2)"
              boxShadow="8px 8px 16px rgba(0, 0, 0, 0.07), inset -8px -8px 16px rgba(255, 255, 255, 0.07)"
              transition="all 0.3s ease"
              _hover={{
                boxShadow:
                  "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.5)",
                transform: "translateY(-2px)",
              }}
              _active={{
                boxShadow:
                  "inset 4px 4px 8px rgba(0, 0, 0, 0.15), inset -4px -4px 8px rgba(255, 255, 255, 0.8)",
                transform: "translateY(1px)",
              }}
              willChange="transform, box-shadow"
              aria-label={`Open ${link.name}`}
            >
              <link.icon />
              {link.name}
            </Button>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default LinkCard;
