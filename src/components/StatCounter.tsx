import Script from 'next/script';
import { memo } from 'react';
import Image from 'next/image';
import { Link } from '@mui/material';

const StatCounter = () => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }
  return (
    <>
      <Script id="statcounter-vars" strategy="lazyOnload">
        {`
          var sc_project=13054675; 
          var sc_invisible=1; 
          var sc_security="f6b976e6";
        `}
      </Script>
      <Script
        src="https://www.statcounter.com/counter/counter.js"
        strategy="lazyOnload"
        id="statcounter-script"
      />
      <noscript>
        <div className="statcounter">
          <Link
            title="Web Analytics Made Easy - Statcounter"
            href="https://statcounter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="statcounter"
              src="https://c.statcounter.com/13054675/0/f6b976e6/1/"
              alt="Web Analytics Made Easy - Statcounter"
              referrerPolicy="no-referrer-when-downgrade"
              width="0"
            />
          </Link>
        </div>
      </noscript>
    </>
  );
};

export default memo(StatCounter);
