import './style.scss';
import React from 'react';
import withLayout from 'app/shared/layout/with-layout';

const UnderConstruction = () => {
  return (
    <div className="under-construction-container">
      <img className="under-construction-image" src="../../../content/images/under-construction.png" />
    </div>
  );
};

export default UnderConstruction;
