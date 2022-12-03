import Stack from '@mui/material/Stack';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Chip,
  Grid,
  Paper,
  styled,
  Typography,
} from '@mui/material';
import { useEffect, useRef } from 'react';
import About from '../about/About';
import cryptoImage from 'C:/Users/RDIRKX87/source/repos/react-portfolio/react-portfolio-app/src/images/dailycrypto.jpg';
import weatherImage from 'C:/Users/RDIRKX87/source/repos/react-portfolio/react-portfolio-app/src/images/weatherapp.jpg';
import { motion, useScroll } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();
  const headerRefProjects = useRef<null | HTMLDivElement>(null);
  const headerRefAbout = useRef<null | HTMLDivElement>(null);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  }));

  const Style = {
    height: 300,
  };

  const componentShadowSX = {
    // '&:hover': {
    //   // color: 'blue',
    //   // border: '1px solid',
    //   // boxShadow: '5px 10px red',
    // },
  };

  const FadeInWhenVisible = ({ children }: any) => {
    return (
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {children}
      </motion.div>
    );
  };

  /*
   * handlers
   */
  const handleClick = () => {
    headerRefProjects?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick2 = () => {
    headerRefAbout?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChipClick = (name: string) => {
    let url = '';
    switch (name) {
      case 'react':
        url = 'https://reactjs.org/';
        break;
      case 'typescript':
        url = 'https://www.typescriptlang.org/';
        break;
      case 'mui':
        url = 'https://mui.com/';
        break;
      case 'i18n':
        url = 'https://www.i18next.com/';
        break;
      case 'coingecko':
        url = 'https://www.coingecko.com/en/api';
        break;
      case 'react':
        url = 'https://reactjs.org/';
        break;
      case 'rapidapi':
        url = 'https://rapidapi.com/hub';
        break;
    }
    openInNewTab(url);
  };

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  /*
   * useEffect
   */
  useEffect(() => {
    return scrollY.onChange(latest => {
      console.log('Page scroll: ', latest);
    });
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='h-2 origin-left fixed right-0 top-0
        left-0 bg-gradient-to-r from-sky-500 to-blue-700 z-50'
      />
      <div className='bg-homepage'>
        <Container>
          <Grid item xs={12} md={12} lg={12}>
            <div className='hello-header'>Hello, I'm</div>
            <div className='name-header'>Roger Dirkx</div>
            <div className='home-title'>Software Developer</div>
            <div className='home-intro'>
              <b>fullstack</b> | based in the Netherlands <br></br>
              passion for building user-friendly and visually-appealing applications
              <br></br>
              coding since 2021
            </div>
          </Grid>
          <Grid container className='home-container'>
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
              <div onClick={handleClick}>
                <a>
                  <img src='/arrow.png'></img>
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div ref={headerRefProjects}>
        <div className='bg-projects'>
          <Container className='projects-container'>
            <Grid container>
              <Grid item xs={12} md={12} lg={12}>
                <div className='name-header-projects'>Projects</div>
              </Grid>
              <Grid
                container
                direction='column-reverse'
                justifyContent='space-around'
                alignItems='flex-end'
              >
                <Grid item xs={12} md={12} lg={12}>
                  <Card
                    sx={{
                      maxWidth: 600,
                      height: 480,
                      componentShadowSX,
                      textAlign: 'right',
                      alignItems: 'flex-end',
                      backgroundColor: 'rgba(25, 26, 30, 255)',
                      color: 'rgba(116, 162, 41, 0.74);',
                    }}
                  >
                    <FadeInWhenVisible>
                      <CardActionArea
                        href={`https://dailycrypto-react.netlify.app/`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <CardMedia
                          component='img'
                          src={cryptoImage}
                          alt='dailycrypto'
                          style={Style}
                        />
                        <CardContent>
                          <Typography gutterBottom variant='h5' component='div'>
                            DailyCrypto
                          </Typography>
                          <Typography variant='body2' color='white' paddingBottom={1}>
                            Application built in React.tsc, providing up-to-date crypto
                            rates and news using third-party API's.
                          </Typography>
                          <Chip
                            label='React'
                            color='warning'
                            variant='outlined'
                            onClick={() => handleChipClick('react')}
                          ></Chip>
                          <Chip
                            label='Typescript'
                            color='warning'
                            variant='outlined'
                            onClick={() => handleChipClick('typescript')}
                          ></Chip>
                          <Chip
                            label='Third-party APIs'
                            color='warning'
                            variant='outlined'
                            onClick={() => handleChipClick('coingecko')}
                          ></Chip>
                          <Chip
                            label='MUI library'
                            color='warning'
                            variant='outlined'
                            onClick={() => handleChipClick('mui')}
                          ></Chip>
                          <Chip
                            label='i18n translation'
                            color='warning'
                            variant='outlined'
                            onClick={() => handleChipClick('i18n')}
                          ></Chip>
                        </CardContent>
                      </CardActionArea>
                    </FadeInWhenVisible>
                  </Card>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12} lg={12} paddingBottom={4}>
                <Card
                  sx={{
                    maxWidth: 600,
                    height: 480,
                    componentShadowSX,
                    backgroundColor: 'rgba(25, 26, 30, 255)',
                    color: 'rgba(116, 162, 41, 0.74);',
                  }}
                >
                  <FadeInWhenVisible>
                    <CardActionArea
                      href={`https://dailyweather-react.netlify.app/`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <CardMedia
                        component='img'
                        src={weatherImage}
                        alt='weatherimage'
                        style={Style}
                      />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                          Weather App
                        </Typography>
                        <Typography variant='body2' color='white' paddingBottom={1}>
                          React app that displays real-time weather data based on
                          user-input. Background changes depending on weather type.
                        </Typography>
                        <Chip
                          label='React'
                          color='warning'
                          variant='outlined'
                          onClick={() => handleChipClick('react')}
                        ></Chip>
                        <Chip
                          label='Typescript'
                          color='warning'
                          variant='outlined'
                          onClick={() => handleChipClick('typescript')}
                        ></Chip>
                        <Chip
                          label='Third-party APIs'
                          color='warning'
                          variant='outlined'
                          onClick={() => handleChipClick('rapidapi')}
                        ></Chip>
                      </CardContent>
                    </CardActionArea>
                  </FadeInWhenVisible>
                </Card>
              </Grid>
            </Grid>

            <Grid
              container
              direction='column-reverse'
              justifyContent='space-around'
              alignItems='flex-end'
            >
              <Grid item xs={12} md={12} lg={12}>
                <Card
                  sx={{
                    maxWidth: 600,
                    height: 480,
                    componentShadowSX,
                    textAlign: 'right',
                    alignItems: 'flex-end',
                    backgroundColor: 'rgba(25, 26, 30, 255)',
                    color: 'rgba(116, 162, 41, 0.74);',
                  }}
                >
                  <FadeInWhenVisible>
                    <CardActionArea
                      href={`https://dailycrypto-react.netlify.app/`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <CardMedia
                        component='img'
                        src={cryptoImage}
                        alt='dailycrypto'
                        style={Style}
                      />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                          FoodApp (under construction)
                        </Typography>
                        <Typography variant='body2' color='white' paddingBottom={1}>
                          This react application will allow a user to enter ingredients,
                          which will return suitable recipes.
                        </Typography>
                        <Chip
                          label='React'
                          color='warning'
                          variant='outlined'
                          onClick={() => handleChipClick('react')}
                        ></Chip>
                        <Chip
                          label='Typescript'
                          color='warning'
                          variant='outlined'
                          onClick={() => handleChipClick('typescript')}
                        ></Chip>
                        <Chip
                          label='Third-party APIs'
                          color='warning'
                          variant='outlined'
                          onClick={() => handleChipClick('coingecko')}
                        ></Chip>
                        <Chip
                          label='MUI library'
                          color='warning'
                          variant='outlined'
                          onClick={() => handleChipClick('mui')}
                        ></Chip>
                        <Chip
                          label='Darkmode'
                          color='warning'
                          variant='outlined'
                          // onClick={() => handleChipClick('i18n')}
                        ></Chip>
                      </CardContent>
                    </CardActionArea>
                  </FadeInWhenVisible>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={6} md={12} lg={12}>
              <div className='projects-page-github'>Check out more on</div>
              <div className='image-project-page'>
                <a
                  href='https://github.com/rogerUserGitHub'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img className='images-contact' src='/github.png'></img>
                </a>
              </div>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={12} lg={12} className='arrow-projects'>
                <div onClick={handleClick2}>
                  <a>
                    <img src='/arrow.png'></img>
                  </a>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <div ref={headerRefAbout}>
        <About />
      </div>
    </>
  );
}
