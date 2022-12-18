import Stack from '@mui/material/Stack';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';
import About from '../about/About';
import cryptoImage from 'C:/Users/RDIRKX87/source/repos/react-portfolio/react-portfolio-app/src/images/dailycrypto.jpg';
import weatherImage from 'C:/Users/RDIRKX87/source/repos/react-portfolio/react-portfolio-app/src/images/weatherapp.jpg';
import constructionimage from 'C:/Users/RDIRKX87/source/repos/react-portfolio/react-portfolio-app/src/construction.jpg';
import { motion, useScroll } from 'framer-motion';
import Dialog from '../../common/components/Dialog';
import { handleChipClick } from '../../common/utils/HelperMethods';
import { Item } from '../../common/components/Item';
import { Style } from './Home.Styles';

export default function Home() {
  /*
   * State
   */
  const { scrollYProgress } = useScroll();
  const headerRefProjects = useRef<null | HTMLDivElement>(null);
  const headerRefAbout = useRef<null | HTMLDivElement>(null);
  const [infoItem, setInfoItem] = useState('');
  const [infoOpen, setInfoOpen] = useState(false);

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
  const handleItemClick = (evt: any) => {
    setInfoItem(evt.target.id);
    setInfoOpen(true);
  };

  const handleArrowClick = () => {
    headerRefProjects?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleArrowClick2 = () => {
    headerRefAbout?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpen = () => {
    setInfoOpen(true);
  };

  const handleClose = () => {
    setInfoOpen(false);
  };

  const openInNewTab = (name: string): any => {
    const url = handleChipClick(name);

    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  /*
   * render
   */
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
              <b>fullstack </b> since 2021
              <br></br>based in the Netherlands <br></br>
              passion for building user-friendly and visually-appealing applications
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
                <Item elevation={5} id={'React'} onClick={handleItemClick}>
                  React
                </Item>
                <Item elevation={5} id={'Typescript'} onClick={handleItemClick}>
                  Typescript
                </Item>
                <Item elevation={5} id={'Javascript'} onClick={handleItemClick}>
                  Javascript
                </Item>
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
                <Item elevation={5} id={'.NET'} onClick={handleItemClick}>
                  .NET
                </Item>
                <Item elevation={5} id={'CI/CD'} onClick={handleItemClick}>
                  CI/CD
                </Item>
                <Item elevation={5} id={'AWS'} onClick={handleItemClick}>
                  AWS
                </Item>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Stack
                direction='row'
                spacing={4}
                alignItems='center'
                justifyContent={'center'}
              >
                <Item elevation={5} id={'Java'} onClick={handleItemClick}>
                  Java
                </Item>
                <Item elevation={5} id={'C#'} onClick={handleItemClick}>
                  C#
                </Item>
                <Item elevation={5} id={'GIT'} onClick={handleItemClick}>
                  GIT
                </Item>
              </Stack>
            </Grid>
            <Grid item xs={12} md={12} lg={12} className='arrow'>
              <div onClick={handleArrowClick}>
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
                <Grid item xs={12} md={12} lg={12} paddingBottom={4}>
                  <Card
                    sx={{
                      maxWidth: 600,
                      height: 480,

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
                            color='success'
                            variant='filled'
                            onClick={() => openInNewTab('react')}
                          ></Chip>
                          <Chip
                            label='Typescript'
                            color='success'
                            variant='filled'
                            onClick={() => openInNewTab('typescript')}
                          ></Chip>
                          <Chip
                            label='Third-party APIs'
                            color='success'
                            variant='filled'
                            onClick={() => openInNewTab('coingecko')}
                          ></Chip>
                          <Chip
                            label='MUI library'
                            color='success'
                            variant='filled'
                            onClick={() => openInNewTab('mui')}
                          ></Chip>
                          <Chip
                            label='i18n translation'
                            color='success'
                            variant='filled'
                            onClick={() => openInNewTab('i18n')}
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
                          color='success'
                          variant='filled'
                          onClick={() => openInNewTab('react')}
                        ></Chip>
                        <Chip
                          label='Typescript'
                          color='success'
                          variant='filled'
                          onClick={() => openInNewTab('typescript')}
                        ></Chip>
                        <Chip
                          label='Third-party APIs'
                          color='success'
                          variant='filled'
                          onClick={() => openInNewTab('rapidapi')}
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
                        src={constructionimage}
                        alt='dailycrypto'
                        style={Style}
                      />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                          RecipeApp
                        </Typography>
                        <Typography variant='body2' color='white' paddingBottom={1}>
                          This react application will allow a user to enter ingredients,
                          which will return suitable recipes.
                        </Typography>
                        <Chip
                          label='React'
                          color='success'
                          variant='filled'
                          onClick={() => openInNewTab('react')}
                        ></Chip>
                        <Chip
                          label='Typescript'
                          color='success'
                          variant='filled'
                          onClick={() => openInNewTab('typescript')}
                        ></Chip>
                        <Chip
                          label='Third-party APIs'
                          color='success'
                          variant='filled'
                          onClick={() => openInNewTab('coingecko')}
                        ></Chip>
                        <Chip
                          label='MUI library'
                          color='success'
                          variant='filled'
                          onClick={() => openInNewTab('mui')}
                        ></Chip>
                        <Chip label='Darkmode' color='success' variant='filled'></Chip>
                      </CardContent>
                    </CardActionArea>
                  </FadeInWhenVisible>
                </Card>
              </Grid>
            </Grid>
            {/* <FadeInWhenVisible>
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
            </FadeInWhenVisible> */}
            <Grid container>
              <Grid item xs={12} md={12} lg={12} className='arrow-projects'>
                <div onClick={handleArrowClick2}>
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
      <Dialog
        infoItem={infoItem}
        onOpen={handleOpen}
        onClose={handleClose}
        open={infoOpen}
      />
    </>
  );
}
