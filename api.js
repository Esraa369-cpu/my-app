window.fetchAPI = function (date) {
  // example implementation
  const result = [];
  const times = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  for (let i = 0; i < times.length; i++) {
    if (Math.random() > 0.5) {
      result.push(times[i]);
    }
  }
  return result;
};

window.submitAPI = function (formData) {
  return true; // always succeeds
};
