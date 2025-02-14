import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ProfileCard from "./ProfileCard";
import LinkCard from "./LinkCard";

const DisplayContent = () => {
  return (
    <Box py={10} height="100vh">
      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={{
          base: 2,
          md: 1,
        }}
        height="100%"
        alignItems="flex-start"
        justifyContent="center"
      >
        {/* PROFILE CARD SECTION (Sticky) */}
        <GridItem
          colSpan={{
            base: 12,
            md: 8,
          }}
        >
          <ProfileCard />
        </GridItem>
        {/* LINK CARD SECTION (Scrollable) */}
        <GridItem
          colSpan={{
            base: 12,
            md: 4,
          }}
        >
          <LinkCard />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DisplayContent;
