// import React from "react";
// import "./Background.css";

// const Background = () => {
//   return (
//     <div className="background">
//       <div className="binary-overlay">
//         {Array.from({ length: 100 }).map((_, index) => (
//           <span key={index} className="binary-text">
//             1010101011100110
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Background;













import React from "react";
import "./Background.css";

const Background = () => {
  return (
    <div className="background">
      <div className="binary-overlay">
        {Array.from({ length: 50 }).map((_, index) => (
          <span
            key={index}
            className={`binary-text ${index % 2 === 0 ? "left-to-right" : "right-to-left"}`}
            style={{ top: `${Math.random() * 100}vh`, animationDuration: `${Math.random() * 5 + 3}s` }}
          >
            1010101011100110
          </span>
        ))}
      </div>
      <div className="shine"></div>
    </div>
  );
};

export default Background;

