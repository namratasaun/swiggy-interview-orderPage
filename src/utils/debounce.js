let timer;
const debounce = (callback, delay) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    callback();
  }, delay);
};

export default debounce;
