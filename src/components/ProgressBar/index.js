import React from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const FatLinearProgress = withStyles(() => ({
  root: {
    height: 15,
    borderRadius: 15,
  },
  colorPrimary: {
    backgroundColor: 'lightgray',
  },
  bar: {
    borderRadius: 15,
    backgroundSize: '30%',
    backgroundImage: `url(${"https://png.pngtree.com/background/20211217/original/pngtree-honeycomb-hexagon-honey-watercolor-abstract-yellow-background-picture-image_1589835.jpg"})`
  },
}))(LinearProgress);

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <FatLinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel({ progress }) {
  return (
    <LinearProgressWithLabel value={progress} />
  );
}