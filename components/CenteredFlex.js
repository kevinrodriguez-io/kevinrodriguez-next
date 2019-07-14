import React from 'react';

const CenteredFlex = ({
  children,
  absolute = false,
  centerContent = false,
  w60 = false,
}) => {
  const sectionClasses = ['text-section'];
  if (centerContent) sectionClasses.push('center-block');
  if (w60) sectionClasses.push('max-width-60');
  const mainDivClasses = ['col justify a100'];
  if (absolute) mainDivClasses.push('center-flex-absolute');
  return (
    <div className={mainDivClasses.join(' ')}>
      <div className="row justify center-flex">
        <section className={sectionClasses.join(' ')}>{children}</section>
      </div>
    </div>
  );
};

export default CenteredFlex;
