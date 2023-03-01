import { Container, Grid } from '@mui/material';
import Footer from '../../common/components/Footer';
import { styled } from '@mui/material/styles';

export default function About() {
  const ProfilePic = styled('img')({
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.01)',
    },
    background: 'white',
  });

  const TextAboutMe = styled('div')({
    fontSize: '1.1rem',
    lineHeight: '1.5',
    textAlign: 'justify',
    padding: '1rem',
    borderRadius: '4%',
    transition: 'all 0.3s ease',
    fontFamily: 'Helvetica, Arial, sans-serif',
    color: 'black',
    textShadow: '1px 1px 1px rgba(0,0,0,0.2)',
    '&:hover': {
      boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.7)',
    },
    background: 'rgba(255, 255, 255, 0.6)',
  });

  const ImagesContact = styled(Grid)({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02) translateY(-5%)',
    },
  });

  const ImagesContactIcon = styled('img')({
    height: '5rem',
    width: '5rem',
    marginRight: '1rem',
    transition: 'opacity 0.1s ease',
    '&:hover': {
      opacity: 0.5,
    },
  });

  const SkillsContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const SkillBadge = styled('div')({
    backgroundColor: '#006600',
    color: '#fff',
    borderRadius: '1rem',
    padding: '0.5rem 1rem',
    marginRight: '1rem',
    marginBottom: '1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 4px 8px rgba(0,0,0,0.5)',
    },
  });

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
                <a href='#'>
                  <ProfilePic src='/profile_pic.png' alt='Profile picture' />
                </a>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <TextAboutMe>
                  I am a <b>full stack developer</b> based in Geneva, Switzerland. I
                  embarked on my developer journey in February 2022, when I started an
                  intensive course at the University of Amsterdam in Software
                  Engineering. I have mainly been programming with front- and backend
                  frameworks and libraries such as React, Typescript, and .NET/C#, and
                  setting up cloud infrastucture using AWS.
                  <SkillsContainer>
                    <SkillBadge>.NET</SkillBadge>
                    <SkillBadge>C#</SkillBadge>
                    <SkillBadge>Java</SkillBadge>
                    <SkillBadge>JavaScript</SkillBadge>
                    <SkillBadge>Typescript</SkillBadge>
                    <SkillBadge>AWS</SkillBadge>
                    <SkillBadge>React</SkillBadge>
                    <SkillBadge>Spring Boot</SkillBadge>
                    <SkillBadge>HTML</SkillBadge>
                    <SkillBadge>CSS</SkillBadge>
                    <SkillBadge>SQL</SkillBadge>
                    <SkillBadge>GIT & CI/CD</SkillBadge>
                    <SkillBadge>GIT</SkillBadge>
                    <SkillBadge>Unit testing</SkillBadge>
                    <SkillBadge>Agile Scrum</SkillBadge>
                    <SkillBadge>Jira</SkillBadge>
                  </SkillsContainer>
                </TextAboutMe>
                <Grid container paddingTop={7}>
                  <ImagesContact item xs={6} md={6} lg={6}>
                    <div>
                      <a
                        href='https://www.linkedin.com/in/rogerdirkx/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ImagesContactIcon src='/linkedin.png' alt='LinkedIn icon' />
                      </a>
                    </div>
                  </ImagesContact>
                  <ImagesContact item xs={6} md={6} lg={6}>
                    <div>
                      <a
                        href='https://github.com/rogerUserGitHub'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ImagesContactIcon src='/github.png' alt='Github icon' />
                      </a>
                    </div>
                  </ImagesContact>
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
