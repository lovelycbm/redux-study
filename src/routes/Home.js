import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>to do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}
// 맵스테이트와 디스패치 내역을 통해
// 액션 및 상태를 주고 받는거로 이해하는데
// 최대한 context랑 비교해서 이해를 더 할것 조금 안되고 있음

function mapStateToProps(state) {
  //console.log(state, ownProps);
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreator.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
