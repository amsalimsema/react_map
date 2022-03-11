import React from "react";
import Reports from "./report.json";

function New() {
  return (
    <div>
      {Reports &&
        Reports.map((report) => {
          return (
            <div key={report.id} className="new_main">
              {report.isVisible ? (
                <div>
                  {/* {report.caption}
                    {report.color} */}
                  <img src={report.icon} alt="" />
                </div>
              ) : null}
            </div>
          );
        })}
    </div>
  );
}

export default New;
