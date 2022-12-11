import React from "react";

function Addform() {
  return (
    <form className="add-form">
      <div className="input-group">
        제목 <input type="text" name="title"></input>
        내용 <input type="text" name="body"></input>
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Addform;
