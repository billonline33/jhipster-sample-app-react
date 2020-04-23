import './style.scss';
import React from 'react';
import withLayout from 'app/shared/layout/with-layout';
import DefaultLayout from 'app/shared/layout/default';

const UnderConstruction2 = () => {
  return (
    <div className="under-construction-container">
      <img className="under-construction-image" src="../../../content/images/under-construction.png" />
    </div>
  );
};

export default withLayout(UnderConstruction2, DefaultLayout);
