let quotesData
const quoteText = document.getElementById("text")
const authorText = document.getElementById("author")

function getColor(){ 
    return "hsl(" + 360 * Math.random() + ',' +
        (25 + 70 * Math.random()) + '%,' + 
        (85 + 10 * Math.random()) + '%)'
}

// Get quotes from API with catch() to handle errors
async function getQuotes() {
    try {
        const response = await fetch('https://type.fit/api/quotes')
        quotesData = await response.json()
        if (response) hideSpinner()
    } catch (error) {
        console.log(error)
    }
}

const hideSpinner = () => {
    document.getElementById('spinner').classList.add('d-none')
    document.getElementById('buttons').classList.remove('d-none')
    
    const quoteIcons = document.querySelectorAll('.quote-icon')
    quoteIcons.forEach(icon => {
        icon.classList.remove('d-none')
    })
} 

const getRandomQuote = () => {
    let randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)]
    return randomQuote
}

const getQuote = () => {
    let randomQuote = getRandomQuote()

    currentQuote = randomQuote.text
    currentAuthor = randomQuote.author

    if (currentAuthor === null) {
        currentAuthor = 'Unknown'
    }

    // pending to add animation fade in / fade out

    quoteText.innerHTML = currentQuote
    authorText.innerHTML = "- " + currentAuthor

    let tweet = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(currentQuote + ' - ' + currentAuthor) + "&hashtags=DKQuotes"
    document.getElementById("tweet-quote").setAttribute("href", tweet)
}

const getRandomColor = () => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    return randomColor
}

const changeColors = () => {
    let randomColor = getColor()
    document.body.style.backgroundColor = randomColor
    document.getElementById("tweet-quote").style.backgroundColor = randomColor
    document.getElementById("new-quote").style.backgroundColor = randomColor
    
    const quoteIcons = document.querySelectorAll('.quote-icon')
    quoteIcons.forEach(icon => {
        icon.style.color = randomColor
    })
}

// when new quote button is pressed, get a new quote
document.getElementById("new-quote").addEventListener("click", () => {
    getQuote()
    changeColors()
})


// when page is loaded, get a new quote
window.onload = () => {
    getQuotes().then(() => {
        getQuote()
        changeColors()
    })
}