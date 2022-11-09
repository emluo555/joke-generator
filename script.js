const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    console.log("hello");
    getJoke();
  });

async function getJoke() {
    const options = { 
        method: 'GET', // specify this is a GET request, not a PUT or POST
        headers: {
          "Accept" : "application/json" // request the response in JSON format
        }
      }
      // the final fetch request
      
    try {
        let joke;
        let jokeJSON;
        joke = await fetch("https://icanhazdadjoke.com/", options);
        jokeJSON = await joke.json();
        console.log(jokeJSON);

        document.getElementById("joke").innerText = jokeJSON.joke;
        //document.getElementById("joke-image").src = `https://icanhazdadjoke.com/j/${jokeJSON.id}.png`;


    } catch {

    }

}
