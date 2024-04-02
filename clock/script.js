setInterval(() => {
  const clock = document.querySelector('#clock');
  const day = document.querySelector('#day');
  const month = document.querySelector('#month');
  const year = document.querySelector('#year');
  const amPm = document.querySelector('#am_pm');

  const date = new Date();

  console.log(date);

  const hours = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();

  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }

  if (second <= 9) {
    second = `0${second}`;
  }

  const cDate = date.getDate();
  const cMonth = date.getMonth() + 1;
  const cYear = date.getFullYear();
  const cDay = date.getDay();

  const daysName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  if (hours < 12) {
    amPm.innerHTML = 'AM';
  } else {
    amPm.innerHTML = 'PM';
  }

  clock.innerHTML = `${hours}:${minutes}:${second}`;

  day.innerHTML = `${daysName[cDay]} | ${cDate}-`;

  month.innerHTML = cMonth;

  year.innerHTML = `-${cYear}`;
}, 1000);
