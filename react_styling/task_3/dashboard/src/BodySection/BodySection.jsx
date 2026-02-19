import React from 'react';

class BodySection extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="bodySection p-5">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
      </div>
    );
  }
}

export default BodySection;
