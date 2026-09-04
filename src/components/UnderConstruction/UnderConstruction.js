import React from 'react';

// If you have the GIF file in your project directory, you can import it like this:
// import underConstructionGif from './path/to/your/under-construction.gif';

const UnderConstruction = () => {
  return (
    <div style={{ marginTop: '40px', textAlign: 'center' }}>
      <h1 style={{ fontWeight: '800', fontSize: '24px', lineHeight: '42px' }}>Page Under Construction</h1>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>We are working hard to construct this page!</p>
      <img 
        src="https://i0.wp.com/www.bapl.org/wp-content/uploads/2019/02/old-under-construction-gif.gif?ssl=1" 
        alt="Under Construction" 
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default UnderConstruction;