import React from "react";

function List() {
  return (
    <div className="list-container">
      <h2>Working.. 🔥</h2>
      <div>
        <div className="list-wrap">
          <div className="list-todo">
            <h2>리액트 공부하기</h2>
            <div>리액트 기초를 공부해봅시다.</div>
            <div className="button-set">
              <button className="button-delete">삭제하기</button>
              <button className="button-complete">완료</button>
            </div>
          </div>
        </div>
      </div>
      <h2>Done..! 🎉</h2>
      <div>
        <div className="list-wrap">
          <div className="list-todo">
            <h2>리액트 공부하기</h2>
            <div>리액트 기초를 공부해봅시다.</div>
            <div className="button-set">
              <button className="button-delete">삭제하기</button>
              <button className="button-complete">취소</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
