import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PostCard = ({ headImg, title, description }) => {
  // Show only first 2 lines
  const trimmedDescription = description?.split(' ').slice(0, 20).join(' ') + '...';
  console.log("Card img: " ,headImg);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        className="transition-transform duration-300 hover:translate-y-1 hover:border-r-8 border-r-8"
        component="img"
        alt={title}
        height="140"
        image={headImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {trimmedDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
