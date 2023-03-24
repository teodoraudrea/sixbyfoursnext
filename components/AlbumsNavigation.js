import { Grid, Typography, Card, CardMedia, CardContent, CardActionArea } from "@mui/material";

export default function AlbumsNavigation() {
  return (
    <div className="LandingPage">
     <Grid container>
      <Grid item xs={1}/>
      <Grid item xs={10}>
        <Grid container>
          <Grid item xs={6}>
            {/* <Card sx={{ maxWidth: 345 }}> */}
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image="https://i.imgur.com/m55Y9oK.jpg"
                  alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Colour Landscape Album
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  An album of 35mm 6/4 landscape photographs  
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            {/* <Card sx={{ maxWidth: 345 }}> */}
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image="https://i.imgur.com/NNRVtTL.jpg"
                  alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Colour Portrait Album
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  An album of 35mm 6/4 portrait photographs  
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            {/* <Card sx={{ maxWidth: 345 }}> */}
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image="https://i.imgur.com/Cd5Q7yg.jpg"
                  alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Black and White Landscape Album
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  An album of 35mm 6/4 landscape photographs  
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            {/* <Card sx={{ maxWidth: 345 }}> */}
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  image="https://i.imgur.com/0MUVoG3.jpg"
                  alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Black and White Portrait Album
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  An album of 35mm 6/4 portrait photographs  
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1}/>
     </Grid>
    </div>
  );
}
