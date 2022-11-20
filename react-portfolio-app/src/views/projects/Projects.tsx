import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import cryptoImage from 'C:/Users/RDIRKX87/source/repos/react-portfolio/react-portfolio-app/src/images/dailycrypto.jpg';
import weatherImage from 'C:/Users/RDIRKX87/source/repos/react-portfolio/react-portfolio-app/src/images/weatherapp.jpg';

export default function Projects() {
  const Style = {
    height: 400,
  };

  return (
    <>
      <Container>
        <Grid container spacing={4} color={'yellow'}>
          <Grid item xs={12} md={12} lg={12}>
            <div className='name-header-projects'>Projects</div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Card sx={{ maxWidth: 600, height: 500 }}>
              <CardMedia
                component='img'
                // height={2000}
                src={cryptoImage}
                alt='dailycrypto'
                style={Style}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  DailyCrypto
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' href={`https://dailycrypto-react.netlify.app/`}>
                  Check out project
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={6} spacing={3}>
            <Card sx={{ maxWidth: 600, height: 500 }}>
              <CardMedia
                component='img'
                // height={2000}
                src={weatherImage}
                alt='weatherimage'
                style={Style}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Weather App
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' href={`https://dailyweather-react.netlify.app/`}>
                  Check out project
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={6} spacing={3}>
            <Card sx={{ maxWidth: 500, height: 350 }}>
              <CardMedia
                component='img'
                // height={2000}
                src={weatherImage}
                alt='dailycrypto'
                style={Style}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' href={`https://www.coinbase.com/`}>
                  Check out project
                </Button>
              </CardActions>
            </Card>
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
