function calculateTime(deliveries) {
  let sumatoria = [0, 0, 0];
  let result = "";
  let [hr, mn, sc] = [0, 0, 0];
  for (let del of deliveries) {
    let [hours, minutes, seconds] = del.split(":");
    sumatoria[0] += parseInt(hours);
    sumatoria[1] += parseInt(minutes);
    sumatoria[2] += parseInt(seconds);
  }
  let [h, m, s] = sumatoria;

  //Seconds
  if(s === 0) sc = 0 
  else if(s > 0 && s < 60) sc = 60-s
  else {
    m++
    sc = 60-s
  }
  //Minutes
  if(m === 0) mn = 0
  else if(m >= 60) {
    h += 2
    mn = 60 - m
  }
  else {
    h++
    mn = 60-m
  } 
  //Hours
  if(h <= 7) {
    hr = 7 - h
  }else {
    hr = 8 - h
  }

  console.log(sumatoria, [hr, mn, sc]);

  result = hr >= 0 && mn<0 && h < 7 ? "-0" + Math.abs(hr) + ":" : "0" + Math.abs(hr) + ":";
  result += Math.abs(mn) < 10 ? "0" + Math.abs(mn) + ":" : Math.abs(mn) + ":";
  result += Math.abs(sc) < 10 ? "0" + Math.abs(sc) : Math.abs(sc);

  return result;
}

console.log(calculateTime(['01:00:00', '05:00:00', '00:30:00']));
