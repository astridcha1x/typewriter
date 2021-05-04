const sentence = "スーパーウルトライージーモード\n";
let delayTime = 100;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delayTime)
  delayTime += 75;
}