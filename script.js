setInterval(시간설정, 1000);

const 시침 = document.querySelector("[data-hour-hand]");
const 분침 = document.querySelector("[data-minute-hand]");
const 초침 = document.querySelector("[data-second-hand]");

function 시간설정() {
  const 현재날짜 = new Date();
  const 초비율 = 현재날짜.getSeconds() / 60;
  const 분비율 = (초비율 + 현재날짜.getMinutes()) / 60;
  const 시비율 = (분비율 + 현재날짜.getHours()) / 12;

  console.log(초비율);
  console.log(초비율 * 360);

  회전설정(시침, 시비율);
  회전설정(분침, 분비율);
  회전설정(초침, 초비율);
}

function 회전설정(요소, 회전비율) {
  요소.style.setProperty("--rotation", 회전비율 * 360);
}

시간설정();
