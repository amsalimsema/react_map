import React from "react";
import IMAGES from "./Image";

function Pic() {
  return (
    <div className="pic_inner">
      {IMAGES &&
        IMAGES.map((item) => (
          <div key={item.id} className="pic">
            <div>
              <h3> {item.title}</h3>
              <img src={item.url} alt="" />
            </div>
            <div className="pic_overlay">
              <div className="pic_desc">{item.desc}</div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Pic;
