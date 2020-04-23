import './style.scss';
import React from 'react';
import withLayout from 'app/shared/layout/with-layout';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  return (
    <div className="under-construction-container">
      <img className="under-construction-image" src="../../../content/images/under-construction.png" />
      <p>
        <Link to="/underConstruction">underconstruction</Link> <br />
        <Link to="/underConstruction2">underconstruction2</Link> <br />
        <Link to="/bank-account">bank account</Link> <br />
      </p>
    </div>
  );
};

export default UnderConstruction;
