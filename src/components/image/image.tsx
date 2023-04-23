import React from "react";

interface IIMage {
  src?: string;
  alt?: string;
}

export const Image: React.FC<IIMage> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};
