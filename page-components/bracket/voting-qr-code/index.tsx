"use client";

import QRCode from "react-qr-code";

export const VotingQRCode = () => {
  console.log();
  return (
    <div className="absolute right-8 top-8">
      <p>Link do głosowania:</p>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={`${window.location.origin}/voting`}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};
