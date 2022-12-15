import { Paper, styled } from '@mui/material';

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 13,
  '&:hover': {
    cursor: 'pointer',
    boxShadow: '0 1px 6px 1px green',
  },
}));
