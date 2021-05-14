let logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
  console.log(`path ${i + 1} is ${logo[i].getTotalLength()}`);
}