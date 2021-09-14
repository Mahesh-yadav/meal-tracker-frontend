import React from 'react';

export default function RemoveButton({ onClick, title }) {
  return (
    <div className="trash-container" title={title}>
      <i className="fas fa-trash" onClick={onClick}></i>
    </div>
  );
}
