import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
    
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "20%",
                  }}
                  image="https://i.postimg.cc/9fqz7TSM/pexels-pixabay-40568-1.jpg"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Clinical Coders
                  </Typography>
                  <Typography>
                    This is an applicaiton designed to streamline the
                    appointment setting of Doctor's offices.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    color="inherit"
                    href="https://github.com/Tim-Zebra/Clinical-Platform-Streamlined"
                  >
                    Github
                  </Link>
                  <Link
                    color="inherit"
                    href="https://clinic-coders-office-solutions.herokuapp.com/"
                  >
                    Deployed Application
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "20%",
                  }}
                  image="https://i.postimg.cc/WzyQgDxN/download.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Note Taker
                  </Typography>
                  <Typography>
                    An application that allows you to enter and delete notes.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    color="inherit"
                    href="https://github.com/skelly2022/Note-Taker"
                  >
                    Github
                  </Link>
                  <Link
                    color="inherit"
                    href="http://stephens-note-taker.herokuapp.com/"
                  >
                    Deployed Application
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "20%",
                  }}
                  image="https://i.postimg.cc/rFJfBRfK/download-1.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Readme Generator
                  </Typography>
                  <Typography>
                    This application allows you to create a Readme for your
                    project by just answering a few simple questions!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    color="inherit"
                    href="https://github.com/skelly2022/Oh-no-my-README.md-"
                  >
                    Github
                  </Link>
                  <Link
                    color="inherit"
                    href="http://stephens-note-taker.herokuapp.com/"
                  >
                    Deployed Application
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10,
                  marginBottom:10
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "20%",
                  }}
                  image="https://i.postimg.cc/FKZFcZph/download.jpg"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Social Media Backend
                  </Typography>
                  <Typography>
                    Back end for a social media applicaiton that allows users to
                    add friends and delete them!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    color="inherit"
                    href="https://github.com/skelly2022/I-have-friends-unless-you-delete-them."
                  >
                    Github
                  </Link>
                  <Link
                    color="inherit"
                    href="http://stephens-note-taker.herokuapp.com/"
                  >
                    Deployed Application
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10,
                  marginBottom:10
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "20%",
                  }}
                  image="https://i.postimg.cc/wjn428WV/download-2.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    ECommerce Backend
                  </Typography>
                  <Typography>
                  This application is used to add/delete/or update inventory in the system!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    color="inherit"
                    href="https://github.com/skelly2022/ORM"
                  >
                    Github
                  </Link>
                  <Link
                    color="inherit"
                    href="http://stephens-note-taker.herokuapp.com/"
                  >
                    Deployed Application
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10,
                  marginBottom:10
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "20%",
                  }}
                  image="https://i.postimg.cc/QMkgTRvV/download-3.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    HTML + CSS Portfolio
                  </Typography>
                  <Typography>
                  Portfolio made with just CSS and HTML. 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    color="inherit"
                    href="https://github.com/skelly2022/Stephen-s-View"
                  >
                    Github
                  </Link>
                  <Link
                    color="inherit"
                    href=" https://skelly2022.github.io/Stephen-s-View/"
                  >
                    Deployed Application
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}