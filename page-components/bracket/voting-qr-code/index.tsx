"use client";

import { useCallback } from "react";
import QRCode from "react-qr-code";

export const VotingQRCode = () => {
  const generateUrl = useCallback(() => {
    try {
      return `${window.location.origin}/voting`;
    } catch {
      return "No url";
    }
  }, []);

  return (
    <div className="absolute right-8 top-8">
      <p>Link do głosowania:</p>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={generateUrl()}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};
