fetch("http://ergast.com/api/f1/2023.json")
  .then((response) => response.json())
  .then((data) => console.log(data));