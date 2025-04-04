// src/components/Badge.js
import React from 'react';

const Badge = ({ text, color }) => {
  return (
    <span className={` absolute top-0   inline-flex items-center px-2 py-0.5 rounded-full text-xs   ${color}`}>
      {text}
    </span>
  );
};

export default Badge;
