import { Container, Grid } from '@mui/material';
import Footer from '../../common/components/Footer';

export default function About() {
  return (
    <>
      <div className='bg-about'>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <div className='name-header-about'>About</div>
            </Grid>
          </Grid>
        </Container>
        <div className='bg-about-2'>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <div>
                  <a>
                    <img src='/profile_pic.png' className='profile-pic'></img>
                  </a>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <div className='text-about-me'>
                  I am a <b>fullstack developer</b> based in the Netherlands. I embarked
                  on my developer journey in February 2022, when I started an intensive
                  course at the University of Amsterdam to become a software engineer.
                  Currently, I am working for a software company in Amsterdam, where I
                  have been working with front- and backend frameworks and libraries
                  such as React and .NET/C#.
                </div>
                <Grid container paddingTop={7}>
                  <Grid item xs={6} md={6} lg={6} className='images-contact'>
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
                  <Grid item xs={6} md={6} lg={6} className='images-contact'>
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
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
