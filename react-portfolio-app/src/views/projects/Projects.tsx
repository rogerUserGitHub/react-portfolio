import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useRef } from 'react';
import cryptoImage from 'C:/Users/RDIRKX87/source/repos/react-portfolio/react-portfolio-app/src/images/dailycrypto.jpg';
import weatherImage from 'C:/Users/RDIRKX87/source/repos/react-portfolio/react-portfolio-app/src/images/weatherapp.jpg';

const componentShadowSX = {
  '&:hover': {
    color: 'green',
    border: '1px solid',
    boxShadow: '5px 10px red',
  },
};

export default function Projects() {
  const Style = {
    height: 400,
  };

  const titleRef = useRef();

  return (
    <>
      <div className='bg-projects'>
        <Container className='projects-container'>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <div className='name-header-projects'>Projects</div>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Card sx={{ maxWidth: 600, height: 550, componentShadowSX }}>
                <CardActionArea href={`https://dailycrypto-react.netlify.app/`}>
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
                    <Typography variant='body2' color='text.secondary'>
                      Application built in React.tsc, providing up-to-date crypto rates
                      and news using third-party API's.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Card sx={{ maxWidth: 600, height: 550, componentShadowSX }}>
                <CardActionArea href={`https://dailyweather-react.netlify.app/`}>
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
                    <Typography variant='body2' color='text.secondary'>
                      React app that displays real-time weather data based on user-input
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={6} md={12} lg={12}>
            <div className='projects-page-github'>Check out more on</div>
            <div className='image-project-page'>
              <a href='https://github.com/rogerUserGitHub'>
                <img src='/github.png'></img>
              </a>
            </div>
          </Grid>
          <Grid container textAlign={'center'}>
            <Grid item xs={12} md={12} lg={12}>
              <div>
                <a>
                  <br></br> <br></br> <br></br> <br></br>
                  <img src='/arrow.png'></img>
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
