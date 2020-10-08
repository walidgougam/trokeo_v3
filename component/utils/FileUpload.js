// import React, { useState, useEffect } from "react";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import PhotoCamera from "@material-ui/icons/PhotoCamera";
// import { makeStyles } from "@material-ui/core/styles";
// import axios from "axios";

// function FileUpload(picture) {
//   // const [file, setFile] = useState();

//   const onFormSubmit = () => {
//     const formData = new FormData();
//     formData.append("myImage", picture);
//     const config = {
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//     };
//     axios
//       .post("http://localhost:5000/signup", formData, config)
//       .then((response) => {
//         alert("The file is successfully uploaded");
//       })
//       .catch((error) => {});
//   };
//   // const onChange = (e) => {
//   //   setFile(e.target.files[0]);
//   // };

//   return (
//     <div>
//       <input type="file" name="myImage" onChange={onChange} />
//       <button onClick={onFormSubmit}>submit</button>
//     </div>
//   );
// }

// export default FileUpload;
