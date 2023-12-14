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

  if(s===0) {
   sc = 0
  }
  else if(s>=60) {
   sc = 60 - s
   m--
  }

  if(m===0) mn = 0
  else if(m >= 60) {
   mn = 60 - m
   h--
  }
  else if(m < 60) mn = 60 - m

  if(mn < 0){ 
   h--
   hr = (h+7)

  }else if(h === 7){
   hr = 0
  }
  else {
   h++
   hr = 7-h
  }

  console.log(sumatoria, [hr, mn, sc]);

  result = "0" + hr + ":";
  result += Math.abs(mn) < 10 ? "0" + Math.abs(mn) + ":" : Math.abs(mn) + ":";
  result += Math.abs(sc) < 10 ? "0" + Math.abs(sc) : Math.abs(sc);

  return parseInt(result[1]) > 0 && parseInt(result[1]) < 7
    ? "-" + result
    : result;
}

console.log(calculateTime([
   '00:45:00',
   '00:45:00',
   '00:00:30',
   '00:00:30'
 ]));
