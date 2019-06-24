import React from 'react';

export default function IEfallback() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
        Browser not supported. Please use modern browser.
      </span>
    </div>
  );
}
