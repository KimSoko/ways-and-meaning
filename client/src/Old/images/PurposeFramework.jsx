import React from 'react';
import purposeFramework from '../../dist/media/Purpose_Framework.jpg';

console.log(purposeFramework); // /logo.84287d09.png

function PurposeFramework() {
  // Import result is the URL of your image
  return <img src={purposeFramework} alt="Purpose Framework" />;
}

export default PurposeFramework;