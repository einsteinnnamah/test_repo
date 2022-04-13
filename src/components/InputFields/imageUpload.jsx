import { useState } from "react";
import picard from "../../assets/drawables/picard.svg";
import deleteIcon from "../../assets/drawables/delete.svg";
import reupload from "../../assets/drawables/reload.svg";
import "./style.scss";
const ImageUpload = ({ label, sub_label, form_label }) => {
  const [img, setImg] = useState("");
  console.log(img, label);
  return (
    <div className="upload_file">
      <p className="text_head">{label}</p>
      <div className="cover_file">
        <label htmlFor={form_label} className="label">
          {img ? null : (
            <>
              {" "}
              <div className="picard_container">
                <img src={picard} alt="picard" />
                <p>{sub_label}</p>
              </div>
              <p className="upload">Upload File</p>
            </>
          )}

          {img && <img className="loadedimg" src={img} alt="upload" />}
        </label>
        <input
          onChange={(e) => {
            let url = URL.createObjectURL(e.target.files[0]);
            // setUpload(e.target.files[0].name);
            setImg(url);
          }}
          hidden
          type="file"
          name={form_label}
          id={form_label}
        />
        <div className="actions">
          <label htmlFor={form_label} className="reupload">
            {" "}
            <img src={reupload} alt="delete" /> Reupload{" "}
          </label>
          <button
            type="button"
            onClick={() => {
              setImg("");
            }}
            className="delete"
          >
            {" "}
            <img src={deleteIcon} alt="delete" /> Delete{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
