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
            <div className='item2'>Software Developer</div>
            <div className='item3'>
              I am a <b>fullstack developer</b> based in the Netherlands with a passion
              for building user-friendly and visually-appealing applications. My most
              recent projects are built in React.tsc, a library I have been working with
              since 2022.
            </div>
          </Grid>
          <Grid container paddingBottom={7}>
            <Grid item xs={4} md={4} lg={4}>
              <div className='image'>
                <a href='https://www.linkedin.com/in/rogerdirkx/'>
                  <img src='/linkedin.png'></img>
                </a>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <div className='image'>
                <a href='https://github.com/rogerUserGitHub'>
                  <img src='/github.png'></img>
                </a>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <div className='image'>
                <a href='https://reactjs.org/'>
                  <img src='/react.png'></img>
                </a>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4} lg={4}>
              <Stack
                direction='row'
                // divider={<Divider orientation='vertical' flexItem />}
                spacing={4}
                alignItems='center'
                justifyContent={'center'}
                paddingBottom={3}
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
                paddingBottom={3}
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
                paddingBottom={3}
              >
                <Item elevation={5}>Java</Item>
                <Item elevation={5}>C#</Item>
                <Item elevation={5}>GIT</Item>
              </Stack>
            </Grid>
          </Grid>
          <Grid container textAlign={'center'}>
            <Grid item xs={12} md={12} lg={12}>
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
