import { useState } from 'react';

const useFileUpload = () => {
  const [images, setImages] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      console.log("selectedFiles",selectedFiles)
      setImages(selectedFiles);
    }
  };

  const resetFileUpload = () => {
    setImages([]);
  };

  return {
    images,
    handleFileChange,
    resetFileUpload,
  };
};

export default useFileUpload;