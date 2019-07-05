import React from 'react';

const CenteredText = ({children}) => {
  return (
    <div className="col justify center-flex-absolute a100">
      <div className="row justify center-flex">
        <section className="text-section">
          {children}
        </section>
      </div>
    </div>
  )
}

export default CenteredText;