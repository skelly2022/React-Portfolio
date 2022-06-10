import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";

export default function Footer() {
  return (
    <footer>
        <Box className="footer">
        <Box>
        <Link href="https://github.com/skelly2022" color="inherit">
          Github
        </Link>
      </Box>
      <Box>
        <Link href="https://www.linkedin.com/in/stephen-kelly-701a90ba/" color="inherit">
          LinkedIn
        </Link>
      </Box>
      <Box>
        <Link href="https://twitter.com/" color="inherit">
          Twitter
        </Link>
      </Box>
        </Box>
    
    </footer>
  );
}
