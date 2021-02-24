import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

// 내가 했던것과 비교하기.
//useReducer
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
// useContext
const countStore = createStore(countModifier);

//context.getState()
const onChange = () => {
  number.innerText = countStore.getState();
};
//이건 그냥 필요할때 부른듯? 아닌가?
countStore.subscribe(onChange);

// dispatch는 useReducer랑 동일 . 인풋값은 오브젝트로.
// 문제는 얘는 type을 바꿀수가 없네...;
//
const handlePlus = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};
plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
