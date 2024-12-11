const basUrl = "https://dummyjson.com";
const path = "/quotes/";
const query = "/random/";

const getTextById = (id, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${basUrl}${path}${query}`, true); 
    
    xhr.send();
    
    xhr.addEventListener('load', function() {
        if (xhr.status === 200) {
            const text = JSON.parse(xhr.responseText);
            console.log(text);
            callback(text);
        } else {
            console.error("Failed to load quote data:", xhr.statusText);
        }
    });
};
const id = Math.floor(Math.random() * 100);
const getQuote = document.getElementById("get-quote");
getQuote.addEventListener('click', () => {
    getTextById(id, (text) => {
        document.getElementById("quote-text-disply").textContent = text.quote;
        document.getElementById("quote-author-disply").textContent ="Outhor: " + text.author;
        document.querySelector(".quote-content").classList.add('active');
        document.querySelector(".quote-heading-disply").classList.add('active');
    });
});
