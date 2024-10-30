'use client';

import { useEffect, useState } from 'react';
import { fetchReadings } from '@/lib/fetchReadings';
import { Box, Stack, Typography } from '@mui/material';
import styles from '@/components/ResponseColor.module.css';

const Readings = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchReadings()
        .then((json) => setData(json))
        .catch((error) => console.error('Error fetching Readings:', error));
    }
  }, []);

  const formatText = (string) => {
    string = string
      .replace(/&#160;/g, '')
      .replace(/(style="[^"]*)\btext-indent\s*:\s*[^;]+;?\s*/gi, '$1')
      .replace(/style="\s*"/gi, 'style=""')
      .replace(/\s*style=""/gi, '')
      .replace(/(style="[^"]*)\bmargin-left\s*:\s*[^;]+;?\s*/gi, '$1')
      .replace(/style="\s*"/gi, 'style=""')
      .replace(/\s*style=""/gi, '')
      // .replace(/(style="[^"]*)\bmargin-top\s*:\s*[^;]+;?\s*/gi, '$1')
      // .replace(/style="\s*"/gi, 'style=""')
      .replace(/\s*style=""/gi, '')
      .replace(/(style="[^"]*)\bfont-size\s*:\s*[^;]+;?\s*/gi, '$1')
      .replace(/style="\s*"/gi, 'style=""')
      .replace(/\s*style=""/gi, '')
      .replace(/(style="[^"]*)\bcolor\s*:\s*[^;]+;?\s*/gi, '$1')
      .replace(/style="\s*"/gi, 'style=""')
      .replace(/\s*style=""/gi, '');
    return <span dangerouslySetInnerHTML={{ __html: string }} />;
  };

  const formatResponse = (string) => {
    return string.replace(
      /<i>/g,
      `<div class="${styles.responseColor} response-dark-mode"><i>`,
    );
  };

  return data ? (
    <Stack>
      <Typography sx={{ typography: { xs: 'h3', md: 'h1' }, mb: 5 }}>
        {data ? formatText(data.date) : ''}
      </Typography>
      <Typography sx={{ typography: { xs: 'h4', md: 'h2' }, mb: 5 }}>
        {data ? formatText(data.day) : ''}
      </Typography>
      <Typography sx={{ typography: { xs: 'h3', md: 'h2' }, mb: 5 }}>
        First Reading
      </Typography>
      <Typography sx={{ typography: { xs: 'h4', md: 'h4' }, mb: 3 }}>
        {data ? formatText(data.Mass_R1.source) : ''}
      </Typography>
      <Typography sx={{ typography: { xs: 'h5', md: 'h5' }, mb: 5 }}>
        {data ? formatText(data.Mass_R1.text) : ''}
      </Typography>
      <Typography sx={{ typography: { xs: 'h3', md: 'h2' }, mb: 5 }}>
        Responsorial Psalm
      </Typography>
      <Typography sx={{ typography: { xs: 'h4', md: 'h4' }, mb: 3 }}>
        {data ? formatText(data.Mass_Ps.source) : ''}
      </Typography>
      <Typography sx={{ typography: { xs: 'h5', md: 'h5' }, mb: 5 }}>
        {data ? formatText(formatResponse(data.Mass_Ps.text)) : ''}
      </Typography>
      {data.Mass_R2 && (
        <Box>
          <Typography sx={{ typography: { xs: 'h3', md: 'h2' }, mb: 5 }}>
            Second Reading
          </Typography>
          <Typography sx={{ typography: { xs: 'h4', md: 'h4' }, mb: 3 }}>
            {data ? formatText(data.Mass_R2.source) : ''}
          </Typography>
          <Typography sx={{ typography: { xs: 'h5', md: 'h5' }, mb: 3 }}>
            {data ? formatText(data.Mass_R2.text) : ''}
          </Typography>
        </Box>
      )}
      {/* <Typography sx={{ typography: { xs: 'h3', md: 'h2' }, mb: 5 }}>
        Alleluia
      </Typography>
      <Typography sx={{ typography: { xs: 'h4', md: 'h3' }, mb: 3 }}>
        {data ? formatText(data.Mass_GA.source) : ''}
      </Typography>
      <Typography sx={{ mb: 5 }}>
        {data ? formatText(addResponseToAlleluia(data.Mass_GA.text)) : ''}
      </Typography> */}
      <Typography sx={{ typography: { xs: 'h3', md: 'h2' }, mb: 5 }}>
        Gospel
      </Typography>
      <Typography sx={{ typography: { xs: 'h4', md: 'h4' }, mb: 3 }}>
        {data ? formatText(data.Mass_G.source) : ''}
      </Typography>
      <Typography sx={{ typography: { xs: 'h5', md: 'h5' }, mb: 10 }}>
        {data ? formatText(data.Mass_G.text) : ''}
      </Typography>
      <Typography variant="label" fontSize={11}>
        {data ? formatText(data.copyright.text) : ''}
      </Typography>
    </Stack>
  ) : (
    ''
  );
};

export default Readings;
