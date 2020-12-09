import * as actionTypes from "./actionTypes";

export const getConsole = () => ({
  type: actionTypes.CLEAR_ACCOUNT_IMAGE,
});
export const clearAccountImage = () => ({
  type: actionTypes.GET_CONSOLE,
});
export const getAccountImage = (url) => async (dispatch) => {
  try {
    const res = await fetch(url, {
      method: "GET",
    });
    const address = await res.json();
    dispatch({ type: actionTypes.GET_ACCOUNT_IMAGE, address });
  } catch (err) {
    console.log("error");
  }
};
