import { Container, Grid } from '@mui/material';
import Footer from '../../common/components/Footer';
import DownloadButton from '../../common/components/Download';
import { styled } from '@mui/material/styles';
import {
  ImagesContact,
  ImagesContactIcon,
  ProfilePic,
  SkillBadge,
  SkillsContainer,
  TextAboutMe,
} from './About.Styles';

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
              <Grid item xs={12} md={3} lg={3}>
                <a href='#'>
                  <ProfilePic src='/profile_pic.png' alt='Profile picture' />
                </a>
                <div className='download-button'>
                  <DownloadButton />
                </div>
              </Grid>
              <Grid item xs={12} md={9} lg={9}>
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
                  <SkillsContainer>
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
                  </SkillsContainer>
                </TextAboutMe>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
