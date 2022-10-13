import React, { useState } from "react";
import classes from "../EditServices/EditServices.module.css";
import { useDropzone } from "react-dropzone";
import icon from "../../../images/ImgIcon.png";

function EditServices() {
  // const [Image, setImage] = useState([]);
  // const { getRootProps, getInputProps, isDragactive } = useDropzone({
  //   accept: "image/*",
  //   onDrop: (acceptedFiles) => {
  //     setImage(
  //       acceptedFiles.map((upFile) =>
  //         Object.assign(upFile, {
  //           preview: URL.createObjectURL(upFile),
  //         })
  //       )
  //     );
  //   },
  // });
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h2>Add/Edit Service</h2>
        <button>View Services</button>
      </div>
      <div>
        <p>Save Information</p>
      </div>
      <div className={classes.cardContainer}>
        <form>
          <div>
            <p>Add Categary*</p>
            <select name="" id="">
              <option value="">New York</option>
            </select>
          </div>
          <div>
            <p>Service Categary*</p>
            <select name="" id="">
              <option value="">New York</option>
            </select>
          </div>
        </form>
      </div>
      <div className={classes.title}>
        <p>Add Service title*</p>
        <input type="text" name="Add title" id="" placeholder="Add title" />
      </div>
      <div className={classes.description}>
        <p>Add Service title*</p>
        <textarea
          name="Type Description"
          id=""
          cols="30"
          rows="10"
          placeholder="Type Description"
        ></textarea>
      </div>
      <div className={classes.uploadImg}>
        <p>Upload Your Banner*</p>
        <textarea
          name="text"
          id=""
          cols="30"
          rows="10"
          placeholder="Upload your Image"
        ></textarea>
        {/* <div {...getRootProps()}>
          <file {...getInputProps()} />
          {isDragactive ? (
            <p>Drp the image here</p>
          ) : (
            <p>Drag & drop the image here</p>
          )}
        </div>
        <div>
          {Image.map((upFile) => {
            return (
              <div>
                <img
                  src={upFile.preview}
                  style={{
                    width: "200px",
                    height: "100px",
                    border: "1px solid black",
                  }}
                />
              </div>
            );
          })}
        </div> */}
      </div>
      <button>Continue & Next</button>
    </div>
  );
}

export default EditServices;
