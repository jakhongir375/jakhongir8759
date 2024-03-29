const wrap = document.querySelector('.wrap');

const func = async () => {
  const response = await fetch('https://dummyjson.com/users');

  const details = await response.json();
  console.log(details.users);
  details.users.map((el) => {
    wrap.innerHTML += `
        <div class="card">
            <img src=${el.image} alt="">
            <h2>${el.firstName} ${el.lastName} </h2>
            <h3>${el.phone} </h3>
            <p>${el.age} </p>
            <b>${el.birthDate} </b>
            <h4></h4>
        </div>
        
        `
  })
};

func();
