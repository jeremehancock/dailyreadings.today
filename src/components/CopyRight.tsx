'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Copyright } from '@mui/icons-material';
import { Box, Stack, Typography, Link } from '@mui/material';
import styles from '@/components/styles/ResponseStyles.module.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface CustomizedDialogsProps extends DialogProps {
  title: string; // Add the title prop to the props interface
  children: React.ReactNode; // Keep the children prop for custom content
}

const CustomizedDialogs: React.FC<CustomizedDialogsProps> = ({
  title,
  children,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="text"
        disableRipple
        onClick={handleClickOpen}
        sx={{
          bgcolor: 'transparent',
          '&:hover': {
            bgcolor: 'transparent',
          },
          position: 'fixed',
          left: '10px',
          bottom: '10px',
        }}
      >
        <Copyright />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title} {/* Display the title prop here */}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Stack>
            <Typography fontWeight="bold" mb={2}>
              License for dailyreadings.today app:
            </Typography>
            <Typography>MIT License</Typography>
            <Typography>Copyright (c) 2024 Jereme Hancock</Typography>
            <Link
              href="https://jeremehancock.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.copyrightColor}
            >
              JeremeHancock.com
            </Link>
            <Typography mb={2} mt={2}>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </Typography>
            <Typography mb={2}>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </Typography>
            <Typography mb={2}>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </Typography>
            <Typography fontWeight="bold" mb={2}>
              License for the readings text:
            </Typography>
            <Box>{children}</Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default CustomizedDialogs;
