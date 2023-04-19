import React from "react";

export interface SampleComponentProps {
  text: string;
}

export const SampleComponent: React.FC<SampleComponentProps> = ({ text }) => {
  return <h1 className="sample-component">{text}</h1>;
}; 

export default SampleComponent;
