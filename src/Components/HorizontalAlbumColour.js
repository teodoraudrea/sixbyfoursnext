import { ImageList, ImageListItem, Grid } from "@mui/material";
import { colourLandscapeAlbum } from '../constAlbumData/colourLandscapeAlbum';

export default function HorizontalAlbumColour() {
  return (
    <div className="LandscapeAlbum">
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <ImageList variant="masonry" cols={2} gap={4}>
            {colourLandscapeAlbum.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};
