import { Container, Grid } from '@mui/material';

const Footer = () => (
  <div className='footer bg-about-footer'>
    <Container>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <footer className='footer-distributed'>
            <div className='footer-left'>
              <p className='footer-links'>
                <a className='link-1' href='#'>
                  Home
                </a>
                <a href='https://github.com/rogerUserGitHub' target='_blank'>
                  Github
                </a>
                <a href='https://www.linkedin.com/in/rogerdirkx/' target='_blank'>
                  LinkedIn
                </a>
              </p>
              <p>Roger Dirkx &copy; 2023</p>
            </div>
          </footer>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default Footer;
