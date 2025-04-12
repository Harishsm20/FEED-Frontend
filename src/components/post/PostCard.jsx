import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";


const PostCard = ({ headImg, title, description, onClick }) => {
  const trimmedDescription = description?.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt={title} height="140" image={headImg} />
        <CardContent>
          <Typography gutterBottom variant="h5">{title}</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {trimmedDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};


export default PostCard;
