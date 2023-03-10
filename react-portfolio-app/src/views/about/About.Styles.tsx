import { styled } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';

export const ProfilePic = styled('img')({
  width: 'auto',
  height: 'auto',
  maxWidth: '100%',
  backgroundSize: 'cover',
  objectFit: 'cover',
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

export const TextAboutMe = styled('div')({
  fontSize: '1.1rem',
  lineHeight: '1.5',
  textAlign: 'justify',
  padding: '1rem',
  borderRadius: '4%',
  transition: 'all 0.3s ease',
  color: 'black',
  '&:hover': {
    boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.4)',
  },
  background: 'white',
});

export const ImagesContact = styled(Grid)({
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

export const ImagesContactIcon = styled('img')({
  height: '5rem',
  width: '5rem',
  marginRight: '1rem',
  transition: 'opacity 0.1s ease',
  '&:hover': {
    opacity: 0.5,
  },
});

export const SkillsContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
});

export const SkillBadge = styled('div')({
  background: 'linear-gradient(180deg, #f5f5f5, #d9d9d9)',
  color: 'darkblue',
  borderRadius: '1rem',
  padding: '0.5rem 1rem',
  marginRight: '1rem',
  marginBottom: '1rem',
  fontSize: '0.8rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.5)',
  },
});
