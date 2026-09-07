import React from 'react';

export default function Jumbotron({ image }) {
  return (
    <div className="jumbotron">
      <img src={image} className="mx-auto mb-4 rounded-full" />
    </div>
  );
}