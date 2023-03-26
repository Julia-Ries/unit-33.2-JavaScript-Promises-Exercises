// PART 1: NUMBER FACTS


let baseURL = 'http://numbersapi.com';
let favNumber = 27;


//1. 
$.getJSON(`${baseURL}/${favNumber}?json`).then(res => {
    console.log(res);
});


//2. 
let favNumbers = [27,3,5]
$.getJSON(`${baseURL}/${favNumbes}?json`).then(res => {
    console.log(res);
});

//3. 
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
      })
    ).then(facts => {
      facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
    });
