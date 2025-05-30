document.addEventListener('DOMContentLoaded', ()=>{
    const quoteElement = document.getElementById('quote');
    const button = document.getElementById('new-quote');

    const quotes = [
        "Acredite em você e tudo será possível.",
        "Não espere por oportunidades, crie-as.",
        "Grandes coisas nunca vêm da zona de conforto.",
        "Você é mais forte do que imagina.",
        "O sucesso é a soma de pequenos esforços diários.",
        "Cada dia é uma nova chance de recomeçar."
    ]

    function generateQuote(){
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }

    button.addEventListener('click', generateQuote);
})