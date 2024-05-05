import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-white"></div>
    </div>
  );
}

export default Loader;
