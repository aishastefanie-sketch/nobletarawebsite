import React, { ImgHTMLAttributes, useState, useEffect } from 'react';
import { imageMapping } from '../utils/imageMapper';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  filename: string;
}

export function AppImage({ filename, ...props }: any) {
  // Always start by trying to load the local uploaded image
  // We use a small cache buster initially just in case it was uploaded after page load, 
  // but a simpler approach is just referencing the path directly.
  const [src, setSrc] = useState(`/${filename}`);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setSrc(`/${filename}?t=${Date.now()}`); // force refresh the image when component mounts just in case
    setHasError(false);
  }, [filename]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Fallback to the Unsplash URL if local file is missing
      setSrc(imageMapping[filename] || `/${filename}`);
    }
  };

  return <img src={src} onError={handleError} {...props} />;
}
