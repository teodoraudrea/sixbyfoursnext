import { ImageList, ImageListItem, Grid } from "@mui/material";

export default function HorizontalAlbum() {
    const itemData = [
        {
          img: 'https://i.imgur.com/NKBBqsd.jpeg',
          title: 'Police at Overgate',
        },
        {
          img: 'https://i.imgur.com/Cd5Q7yg.jpg',
          title: 'Books',
        },
        {
          img: 'https://i.imgur.com/GK4WVDV.jpg',
          title: 'Sink',
        },
        {
          img: 'https://i.imgur.com/1KFjH8e.jpg',
          title: 'Kitchen',
        },
        {
          img: 'https://i.imgur.com/m55Y9oK.jpg',
          title: 'Blinds',
        },
        {
          img: 'https://i.imgur.com/RNCsF7u.jpg',
          title: 'Chairs',
        },
        {
          img: 'https://i.imgur.com/lG3qDSB.jpg',
          title: 'Laptop',
        },
        {
          img: 'https://i.imgur.com/YIOlmul.jpg',
          title: 'Doors',
        },
        {
          img: 'https://i.imgur.com/1cv6UEc.jpg',
          title: 'Coffee',
        },
        {
          img: 'https://i.imgur.com/rMjYJGk.jpg',
          title: 'Storage',
        },
        {
          img: 'https://i.imgur.com/97leLrH.jpg',
          title: 'Candle',
        },
        {
          img: 'https://i.imgur.com/NNRVtTL.jpg',
          title: 'Coffee table',
        },
      ];
    return(
        <div className="ColourLandscapeAlbum">
          <Grid container spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
      <ImageList variant="masonry" cols={2} gap={4}>
  {itemData.map((item) => (
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
    )
};