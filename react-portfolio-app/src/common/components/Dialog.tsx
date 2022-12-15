import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { handleText } from '../utils/HelperMethods';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

/*
  Interface
*/
interface IProps {
  infoItem: string;
  onOpen: () => void;
  onClose: () => void;
  open: boolean;
}

const CustomizedDialogs: FC<IProps> = (props: IProps) => {
  const { infoItem, onOpen, onClose, open } = props;

  return (
    <div>
      <Button variant='outlined' onClick={onOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle id='customized-dialog-title' onClose={onClose}>
          {infoItem}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{handleText(infoItem)}</Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default CustomizedDialogs;
