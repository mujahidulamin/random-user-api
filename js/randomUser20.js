const loadRandomUser = () => {
    fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then(data => displayRandomUser(data.results))
}

const displayRandomUser = (users) =>{
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = ``;
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('card');
        console.log(user);
        userDiv.innerHTML = `
        <img src="${user.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"><span class="fw-bold">Name:</span> ${user.name.title} ${user.name.first} ${user.name.last}</h5>
            <p class="card-text mb-0"><span class="fw-bold"><span class="text-danger">Street:</span> ${user.location.street.name} , ${user.location.street.number}</span> </p>
            <p class="card-text mb-0"><span class="fw-bold"><span class="text-danger">City:</span> ${user.location.city}</span> </p>
            <p class="card-text mb-0"><span class="fw-bold"><span class="text-danger">Coordinates:</span> latitude: ${user.location.coordinates.latitude}, longitude: ${user.location.coordinates.longitude}</span> </p>
            <p class="card-text"><span class="fw-bold"><span class=text-danger>Timezone:</span> ${user.location.timezone.offset}, ${user.location.timezone.description}</span> </p>
        </div>
        `
        userContainer.appendChild(userDiv);
    })
}


