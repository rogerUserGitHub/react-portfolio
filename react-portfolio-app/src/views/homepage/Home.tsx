import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { Container, Grid, Paper, styled } from '@mui/material';
import { flexbox } from '@mui/system';

export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    paddingTop: 40,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Container>
        {/* <Grid container> */}
        <Grid item xs={12} md={12} lg={12}>
          <div className='hello-header'>Hello, I'm</div>
          <div className='name-header'>Roger Dirkx</div>
          <div className='item2'>Software Developer</div>
          <div className='item3'>
            I am a fullstack developer based in the Netherlands with a passion for
            building user-friendly and visually-appealing applications. My most recent
            projects are built in React.tsc, a library I have been working with since
            2022.
          </div>
        </Grid>
        {/* </Grid> */}
        <Grid container paddingBottom={10}>
          <Grid item xs={12} md={4} lg={4}>
            <Item>
              <img src='/linkedin.png' alt='linkedin' />
            </Item>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Item>
              <img src='/github.png' alt='github' />
            </Item>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Item>
              <img src='/react.png' alt='react' />
            </Item>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} lg={4}>
            <Stack direction='row' spacing={7}>
              <Chip
                label='React'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
              <Chip
                label='Typescript'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
              <Chip
                label='.NET'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Stack direction='row' spacing={7}>
              <Chip
                label='C#'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
              <Chip
                label='AWS'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
              <Chip
                label='Java'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Stack direction='row' spacing={7}>
              <Chip
                label='CI/CD'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
              <Chip
                label='GIT'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
              <Chip
                label='MySQL'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
            </Stack>
          </Grid>
          {/* <Grid item xs={12} md={4} lg={4}>
            <Stack direction='row' spacing={7}>
              <Chip
                label='React'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
              <Chip
                label='Typescript'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
              <Chip
                label='.NET'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
              <Chip
                label='C#'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
              <Chip
                label='AWS'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
              <Chip
                label='Java'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
              <Chip
                label='CI/CD'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
              <Chip
                label='GIT'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
              <Chip
                label='MySQL'
                size='medium'
                variant='filled'
                color='primary'
                avatar={<Avatar src='/static/images/avatar/1.jpg' />}
              />
            </Stack>
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
