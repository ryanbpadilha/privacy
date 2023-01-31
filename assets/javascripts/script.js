fetch('https://mockend.com/ryanbpadilha/Privacy/posts')
  .then(response => response.json())
  .then(json => console.log(json));