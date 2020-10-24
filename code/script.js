function floatText() {
  const space = document.querySelector('.frases');

  const randomText = ["i'm waiting...", "i can't wait...", "it's coming!"];
  
  //itens em randomText: 4

  space.innerHTML = randomText[0];

  let i = 1;

  setInterval(() => {
      i++;
      if(i > 2) {
          i = 0;
      }
      space.innerHTML = randomText[i];
  }, 5000)

  
} 
floatText();

function countdown() {
  let daySpace = document.querySelector('.days').querySelector('.big-text')
  let hoursSpace = document.querySelector('.hours').querySelector('.big-text')
  let minuteSpace = document.querySelector('.minutes').querySelector('.big-text')
  let secondSpace = document.querySelector('.seconds').querySelector('.big-text')
  setInterval(() => {
    const target = "25 Dec 2020"
    const targetDate = new Date(target)
    const currentDate = new Date()
    const totalSeconds = (targetDate - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60)% 60
    const seconds = Math.floor(totalSeconds % 60)

    daySpace.innerHTML = days
    hoursSpace.innerHTML = hours
    minuteSpace.innerHTML = minutes
    secondSpace.innerHTML = seconds
  }, 1000)
}
countdown()