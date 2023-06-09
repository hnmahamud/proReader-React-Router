import React from 'react';

// Loading page
const LoadingSpinner = () => {
  // Loading animation
  return (
    <div className="flex justify-center items-center h-[calc(100vh-68px)]">
      <p className="text-4xl font-thin">L</p>
      <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin mt-3 border-blue-400" />
      <p className="text-4xl font-thin">ading....</p>
    </div>
  );
};

export default LoadingSpinner;
