import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

export default function BasicChips() {
  return (
    <Stack direction='row' spacing={1}>
      <Chip
        label='Chip Filled'
        variant='outlined'
        color='warning'
        avatar={<Avatar src='/static/images/avatar/1.jpg' />}
      />
    </Stack>
  );
}
