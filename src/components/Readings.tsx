'use client';

import React, { useEffect, useState } from 'react';
import { fetchReadings } from '@/lib/fetchReadings';
import { Box, Stack, Typography } from '@mui/material';
import styles from '@/components/styles/ResponseStyles.module.css';
import CopyRight from '@/components/CopyRight';

interface ReadingData {
  date: string;
  day: string;
  Mass_R1: { source: string; text: string };
  Mass_Ps: { source: string; text: string };
  Mass_R2?: { source: string; text: string };
  Mass_GA: { source: string; text: string };
  Mass_G: { source: string; text: string };
  copyright: { text: string };
}

const Readings = () => {
  const [data, setData] = useState<ReadingData | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchReadings()
        .then((json) => setData(json as ReadingData))
        .catch((error) => console.error('Error fetching Readings:', error));
    }
  }, []);

  const formatText = (string: string) => {
    string = string;
    // .replace(/&#160;/g, '')
    // .replace(/(style="[^"]*)\btext-indent\s*:\s*[^;]+;?\s*/gi, '$1')
    // .replace(/style="\s*"/gi, 'style=""')
    // .replace(/\s*style=""/gi, '')
    // .replace(/(style="[^"]*)\bmargin-left\s*:\s*[^;]+;?\s*/gi, '$1')
    // .replace(/style="\s*"/gi, 'style=""')
    // .replace(/\s*style=""/gi, '')
    // .replace(/(style="[^"]*)\bfont-size\s*:\s*[^;]+;?\s*/gi, '$1')
    // .replace(/style="\s*"/gi, 'style=""')
    // .replace(/(style="[^"]*)\btext-align\s*:\s*[^;]+;?\s*/gi, '$1')
    // .replace(/style="\s*"/gi, 'style=""')
    // .replace(/\s*style=""/gi, '')
    // .replace(/(style="[^"]*)\bcolor\s*:\s*[^;]+;?\s*/gi, '$1')
    // .replace(/style="\s*"/gi, 'style=""')
    // .replace(/\s*style=""/gi, '');
    return (
      <Box component="span" dangerouslySetInnerHTML={{ __html: string }} />
    );
  };

  const formatResponse = (string: string) => {
    // return string.replace(
    //   /<i>/g,
    //   `<div class="${styles.responseStyle} response-dark-mode"><i>`,
    // );
    return string;
  };

  const formatAlleluia = (string: string) => {
    return string;
    // .replace(
    //   /Alleluia, alleluia!/g,
    //   `<div class="${styles.responseStyle} response-dark-mode" style="margin-bottom:0.8em;">Alleluia, alleluia!`,
    // )
    // .replace(
    //   /Alleluia!/g,
    //   `<div class="${styles.responseStyle} response-dark-mode" style="margin-top:0.8em;">Alleluia!`,
    // );
    return string;
  };

  const formatCopyright = (string: string) => {
    return string.replace(
      /www.universalis.com/g,
      `<a href="https://www.universalis.com/mass.html" target="_blank" rel="noopener noreferrer" class="${styles.copyrightColor}">www.universalis.com</a>`,
    );
  };

  return data ? (
    <>
      <Stack>
        <Typography mb={5} sx={{ typography: { xs: 'h3', md: 'h1' } }}>
          {formatText(data.date)}
        </Typography>
        <Typography mb={5} sx={{ typography: { xs: 'h6', md: 'h5' } }}>
          {formatText(data.day)}
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'left', md: 'center' }}
        >
          <Typography variant="h4" mb={5}>
            First Reading
          </Typography>
          <Typography variant="h5" mb={3}>
            {formatText(data.Mass_R1.source)}
          </Typography>
        </Stack>
        <Typography variant="h6" mb={5}>
          {formatText(data.Mass_R1.text)}
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'left', md: 'center' }}
        >
          <Typography variant="h4" mb={5}>
            Responsorial Psalm
          </Typography>
          <Typography variant="h5" mb={3}>
            {formatText(data.Mass_Ps.source)}
          </Typography>
        </Stack>
        <Typography variant="h6" mb={5}>
          {formatText(formatResponse(data.Mass_Ps.text))}
        </Typography>
        {data.Mass_R2 && (
          <Box>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'left', md: 'center' }}
            >
              <Typography variant="h4" mb={5}>
                Second Reading
              </Typography>
              <Typography variant="h5" mb={3}>
                {formatText(data.Mass_R2.source)}
              </Typography>
            </Stack>
            <Typography variant="h6" mb={5}>
              {formatText(data.Mass_R2.text)}
            </Typography>
          </Box>
        )}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'left', md: 'center' }}
        >
          <Typography variant="h4" mb={5}>
            Alleluia
          </Typography>
          <Typography variant="h5" mb={3}>
            {formatText(data.Mass_GA.source)}
          </Typography>
        </Stack>
        <Typography variant="h6" mb={5}>
          {formatText(formatAlleluia(data.Mass_GA.text))}
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'left', md: 'center' }}
        >
          <Typography variant="h4" mb={5}>
            Gospel
          </Typography>
          <Typography variant="h5" mb={3}>
            {formatText(data.Mass_G.source)}
          </Typography>
        </Stack>
        <Typography variant="h6" mb={5}>
          {formatText(data.Mass_G.text)}
        </Typography>
      </Stack>
      <CopyRight open={false} title="About">
        <Typography mb={2}>
          {formatText(formatCopyright(data.copyright.text))}
        </Typography>
      </CopyRight>
    </>
  ) : null;
};

export default Readings;
