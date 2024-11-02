'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Info } from '@mui/icons-material';
import { Box, Stack, Typography, Link, useTheme } from '@mui/material';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';

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

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const isDark = localStorage.getItem('darkmode') === 'true';

  const BootstrapDialog = styled(Dialog)(() => ({
    '& .MuiDialogTitle-root': {
      backgroundColor:
        isDark && !fullScreen
          ? 'rgb(18, 18, 18)'
          : isDark && fullScreen
            ? 'black'
            : 'white',
      color: isDark ? 'white' : 'black',
    },
    '& .MuiDialogContent-root': {
      backgroundColor:
        isDark && !fullScreen
          ? 'rgb(18, 18, 18)'
          : isDark && fullScreen
            ? 'black'
            : 'white',
      color: isDark ? 'white' : 'rgb(18, 18, 18)',
      borderColor: isDark ? '#343434' : 'rgba(0, 0, 0, 0.12)',
    },
    '& .MuiDialogActions-root': {
      backgroundColor:
        isDark && !fullScreen
          ? 'rgb(18, 18, 18)'
          : isDark && fullScreen
            ? 'black'
            : 'white',
      color: isDark ? 'white' : 'rgb(18, 18, 18)',
    },
    '& .MuiPaper-root': {
      backgroundColor:
        isDark && !fullScreen
          ? 'rgb(18, 18, 18)'
          : isDark && fullScreen
            ? 'black'
            : 'white',
      color: isDark ? 'white' : 'rgb(18, 18, 18)',
    },
  }));

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
        }}
      >
        <Box display="inline-flex" mr={0.5}>
          <Info />
        </Box>
        About
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={fullScreen}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent dividers>
          <Stack>
            <Stack
              textAlign="right"
              sx={{ position: 'absolute', right: '7px', top: '8px' }}
            >
              <Link
                href="https://www.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logos/netlify-dark.svg"
                  alt="Deploys by Netlify"
                  width="114"
                  height="50"
                />
              </Link>
            </Stack>

            <Typography fontWeight="bold" mb={2}>
              License for DailyReadings.Today app:
            </Typography>
            <Typography>MIT License</Typography>
            <Typography>Copyright (c) 2024 Jereme Hancock</Typography>
            <Link
              href="https://jeremehancock.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              JeremeHancock.com
            </Link>
            <Typography mb={2} mt={2}>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the &quot;Software&quot;), to deal in the Software without
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
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF
              ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
              AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </Typography>
            <Typography fontWeight="bold" mb={2}>
              License for the readings:
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
