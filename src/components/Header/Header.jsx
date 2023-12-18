import React from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import "./Header.css";

export default function Header() {
  return (
    <div className="video-header">
      <ArrowBackIcon />
      <h3>Reel</h3>
      <CameraAltIcon />
    </div>
  );
}
