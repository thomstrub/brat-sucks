import React from 'react';

const BratHeader = () => {
  return (
    <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontWeight: '800', fontSize: '18px', lineHeight: '42px' }}>Homepage 4 Brat</h1>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a 
          href="https://wearebrat.bandcamp.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ fontSize: '16px', fontWeight: '600', color: '#000', textDecoration: 'none' }}
        >
          Bratcamp
        </a>
        <a 
          href="https://open.spotify.com/artist/78Ntd9x59yazBDby1au5tK?si=J8yDdVOHT3yQ_Jrar3W9Xw" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ fontSize: '16px', fontWeight: '600', color: '#000', textDecoration: 'none' }}
        >
          Brattify
        </a>
        <a 
          href="https://www.instagram.com/we_are_brat/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ fontSize: '16px', fontWeight: '600', color: '#000', textDecoration: 'none' }}
        >
          Bratstagram
        </a>
      </div>
    </div>
  );
};

export default BratHeader;