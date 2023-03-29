import { ImageList, ImageListItem, Grid } from "@mui/material";
import { bandwPortraitAlbum } from '../constAlbumData/bandwPortraitAlbum';

export default function VerticalAlbumColour() {
  return (
    <div className="ColourPortraitAlbum">
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <ImageList variant="masonry" cols={3} gap={0}>
            {bandwPortraitAlbum.map((item) => (
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
