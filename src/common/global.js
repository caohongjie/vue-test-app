//本地存
export const setStore = (name, value) => {
  if (!name) return;
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(name, value);
};

//本地取
export const getStore = (name) => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

//本地删
export const removeStore = (name) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};
