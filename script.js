function omikuji() {
  const results = ["大吉", "中吉", "小吉", "末吉", "凶"];
  const result = results[Math.floor(Math.random() * results.length)];
  document.getElementById("result").innerHTML = result;
}
