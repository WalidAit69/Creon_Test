
// import { useEffect, useState } from "react";

// const FontLoader = ({ children }) => {
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   useEffect(() => {
//     const checkFontsLoaded = () => {
//       if (document.fonts) {
//         Promise.all(Array.from(document.fonts).map((font) => font.loaded))
//           .then(() => setFontsLoaded(true))
//           .catch((error) => console.error("Error loading fonts:", error));
//       }
//     };

//     checkFontsLoaded();

//     // Cleanup function
//     return () => {
//       // Add cleanup logic if necessary
//     };
//   }, []);

//   return fontsLoaded ? children : <Loader />;
// };

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
//       <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-white"></div>
//     </div>
//   );
// };

// export default FontLoader;
