function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(response => response.json())
    .then(user => {
      const p = document.createElement("p");
      p.textContent = user.id;
      document.body.appendChild(p);
    })
    .catch(error => {
      const p = document.createElement("p");
      p.textContent = error.message;
      document.body.appendChild(p);
    });
}

