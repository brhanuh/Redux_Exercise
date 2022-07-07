export const add = (obj) => {
  return {
    type: "ADD",
    payload: obj,
  };
};

export const update = (obj) => {
  return {
    type: "UPDATE",
    payload: obj,
  };
};

export const remove = (obj) => {
  return {
    type: "DELETE",
    payload: obj,
  };
};
