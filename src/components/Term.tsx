import React from "react";

interface TermProps {
  label: string;
  definition: string;
}

export default function Term({ label, definition }: TermProps): JSX.Element {
  return (
    <span className="term" title={definition} tabIndex={0}>
      {label}
    </span>
  );
}
