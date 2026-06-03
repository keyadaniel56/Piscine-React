let btnGen = document.querySelector("button");
let quoteEl = document.querySelector("#quote");
let authorEl = document.querySelector("#author");

btnGen.addEventListener("click", async () => {
    let { quote, author } = await getQuote();

    quoteEl.innerText = quote;
    authorEl.innerText = `~${author}`;
});



async function getQuote() {
    try{
        const res = await fetch("https://dummyjson.com/quotes/random");
        const data=await res.json();

        return{
            quote: data.quote,
            author: data.author,
        };
    }catch (err){
        return {
            quote:"failed to load quote",
            author:"system",
        };
    }
}