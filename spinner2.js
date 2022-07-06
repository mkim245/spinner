
let mark = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
let time = 100;

for (let i = 0; i < mark.length; i++) {
  setTimeout(() => {
    process.stdout.write(mark[i]);
  }, time);
  time += 200;
}
