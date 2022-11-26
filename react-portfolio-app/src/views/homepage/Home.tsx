import Stack from '@mui/material/Stack';
import { Container, Grid, Paper, styled } from '@mui/material';
import Projects from '../projects/Projects';

export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: 13,
  }));

  // const handleClick = () => {
  //   titleRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <>
      <div className='bg-homepage'>
        <Container>
          <Grid item xs={12} md={12} lg={12}>
            <div className='hello-header'>Hello, I'm</div>
            <div className='name-header'>Roger Dirkx</div>
            <div className='home-title'>Software Developer</div>
            <div className='home-intro'>
              I am a <b>fullstack developer</b> | based in the Netherlands <br></br>
              passion for building user-friendly and visually-appealing applications
              <br></br>
              coding since 2021
            </div>
          </Grid>
          <Grid container paddingBottom={7}>
            <Grid item xs={4} md={4} lg={4} className='images-contact'>
              <div>
                <a
                  href='https://www.linkedin.com/in/rogerdirkx/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/linkedin.png'></img>
                </a>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={4} className='images-contact'>
              <div>
                <a
                  href='https://github.com/rogerUserGitHub'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/github.png'></img>
                </a>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={4} className='images-contact'>
              <div>
                <a
                  href='https://reactjs.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/react.png'></img>
                </a>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4} lg={4}>
              <Stack
                direction='row'
                spacing={4}
                alignItems='center'
                justifyContent={'center'}
                paddingBottom={1}
              >
                <Item elevation={5}>React</Item>
                <Item elevation={5}>Typescript</Item>
                <Item elevation={5}>Javascript</Item>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Stack
                direction='row'
                spacing={4}
                alignItems='center'
                justifyContent={'center'}
                paddingBottom={1}
              >
                <Item elevation={5}>.NET</Item>
                <Item elevation={5}>CI/CD</Item>
                <Item elevation={5}>AWS</Item>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Stack
                direction='row'
                spacing={4}
                alignItems='center'
                justifyContent={'center'}
              >
                <Item elevation={5}>Java</Item>
                <Item elevation={5}>C#</Item>
                <Item elevation={5}>GIT</Item>
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={12} lg={12} className='arrow'>
              <div>
                <a>
                  <img src='/arrow.png'></img>
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Projects />
    </>
  );
}
