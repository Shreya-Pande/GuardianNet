// import React from "react";
// import "./DialogBox.css";

// const DialogBox = () => {
//   return (
//     <div className="dialog-box">
//       <div className="dialog-header">GuardianNet</div>
//       <div className="dialog-content">
//         {[...Array(4)].map((_, row) => (
//           <div key={row} className="row">
//             <div className="input-box">Id</div>
//             <div className="input-box">Id</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DialogBox;




// import React from "react";
// import "./DialogBox.css";

// const DialogBox = () => {
//   return (
//     <div className="dialog-box">
//       <h2 className="title">GuardianNet</h2>
//       <div className="input-grid">
//         {Array.from({ length: 6 }).map((_, index) => (
//           <input
//             key={index}
//             type="text"
//             placeholder={`Enter ID ${index + 1}`}
//             className="input-field"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DialogBox;






// import React from "react";
// import "./DialogBox.css";

// const DialogBox = () => {
//   return (
//     <div className="dialog-box">
//       <h2 className="dialog-header">GuardianNet</h2>
//       <div className="input-container">
//         <div className="input-row">
//           <input type="text" placeholder="Enter ID 1" className="input-field" />
//           <input type="text" placeholder="Enter ID 2" className="input-field" />
//         </div>
//         <div className="input-row">
//           <input type="text" placeholder="Enter ID 3" className="input-field" />
//           <input type="text" placeholder="Enter ID 4" className="input-field" />
//         </div>
//         <div className="input-row">
//           <input type="text" placeholder="Enter ID 5" className="input-field" />
//           <input type="text" placeholder="Enter ID 6" className="input-field" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DialogBox;












import React from "react";
import "./DialogBox.css";

const DialogBox = () => {
  const handleNext = () => {
    alert("Next button clicked!");
    // You can navigate or trigger your next action here
  };

  return (
    <div className="dialog-box">
      <h2 className="title">GuardianNet</h2>
      <div className="input-container">
        <div className="input-row">
          <input type="text" placeholder="Enter ID 1" className="input-field" />
          <input type="text" placeholder="Enter ID 2" className="input-field" />
        </div>
        <div className="input-row">
          <input type="text" placeholder="Enter ID 3" className="input-field" />
          <input type="text" placeholder="Enter ID 4" className="input-field" />
        </div>
        <div className="input-row">
          <input type="text" placeholder="Enter ID 5" className="input-field" />
          <input type="text" placeholder="Enter ID 6" className="input-field" />
        </div>
      </div>
      <div className="button-container">
        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default DialogBox;
