let container = document.querySelector('.container')

const getData = async () =>{
    let response = await fetch('https://dummyjson.com/users');
    let data = await response.json();

    data.users.map((user) => {
        container.innerHTML += `
        <div class="card">
        <h2>${user.firstName} ${user.lastname} </h2>
        <p>${user.age} </p>
        <p>${user.email} </p>
        <p>${user.password} </p>
      <img src="${user.image} " alt="broken">
    </div>
        `;
    })
};

getData();