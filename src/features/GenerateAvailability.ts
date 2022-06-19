const AvailableHours = (hoursRange: String[], interval: number): String[] => {
  let hr = hoursRange[0];
  let st1 = hr[0].split(":");
  let st2 = hr[1].split(":");
  let newValue = hr[0],
    inc = +st1[1],
    options = [newValue];
  while (+newValue.split(":")[0] < +st2[0]) {
    inc += interval;
    if (inc > 59) {
      newValue = `${+newValue.split(":")[0] + 1}:${String(inc - 60).padStart(
        2,
        "0"
      )}`;
      inc = 0;
    } else {
      newValue = `${newValue.split(":")[0]}:${String(inc).padStart(2, "0")}`;
    }
    options.push(newValue);
  }

  options.pop();
  return options;
};

export default AvailableHours;
