export function debounce(fn, delay) {
  let handler;
  return (...args) => {
    if (handler) {
      clearTimeout(handler);
    }
    handler = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
