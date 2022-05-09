import React from 'react';

import Badge from '@material-ui/core/Badge';

import { withStyles } from '@material-ui/core/styles';

const CustomBadge = withStyles(() => ({
  anchorOriginTopRightRectangle: {
    transform: 'unset'
  }
}))(Badge);

export default function LinearWithValueLabel(props) {
  return (
    <CustomBadge {...props} />
  );
}