import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

export default function Home() {
  return (
    <div className='flex-container'>
      <div className='homepage-header'>
        <h3>Hello, I'm</h3>
        <h1>Roger Dirkx</h1>
        <div className='grid-container'>
          <div className='item2'>Software Developer</div>
          <div className='item3'>
            I am a fullstack developer based in the Netherlands with a passion for
            building user-friendly and visually-appealing applications. My most recent
            projects are built in React.tsc, a library I have been working with since
            2022.
          </div>
          <div className='item-pic1'>
            <img src='/linkedin.png' alt='linkedin' />
          </div>
          <div className='item-pic2'>
            <img src='/github.png' alt='github' />
          </div>
          <div className='item-pic3'>
            <img src='/react.png' alt='react' />
          </div>
          <div className='item3'>
            <Stack direction='row' spacing={1}>
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
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
