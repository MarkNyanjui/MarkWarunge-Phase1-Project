
// All fetch functions are enclosed into a single function to avoid repetition
const fetchFunctions = [
    { func: fetchBit, buttonId: "btn1", elementId: "bit" },
    { func: fetchEth, buttonId: "btn2", elementId: "eth" },
    { func: fetchUsdt, buttonId: "btn3", elementId: "usdt" },
    { func: fetchBnb, buttonId: "btn4", elementId: "bnb" },
    { func: fetchSlc, buttonId: "btn5", elementId: "slc" },
    { func: fetchUsdc, buttonId: "btn6", elementId: "usdc" },
    { func: fetchDoge, buttonId: "btn7", elementId: "doge" },
    { func: fetchXrp, buttonId: "btn8", elementId: "xrp" },
    { func: fetchAda, buttonId: "btn9", elementId: "ada" },
    { func: fetchAvax, buttonId: "btn10", elementId: "avax" }
]

// Execution of the fetching process using the array.forEach method
fetchFunctions.forEach(({ func, buttonId }) => {
    document.getElementById(buttonId).addEventListener("click", func)
});
//This is the output of the fetching process
function handleResponse(elementId) {
    return function (data) {
        document.getElementById(elementId).innerText = JSON.stringify(data)

    }
}

function fetchBit() {
    return fetch("http://localhost:3000/0")
        .then(resp => resp.json())
        .then(handleResponse("bit"))
        .catch(error => {
            console.error("Failed to fetch Bitcoin data", error);
        })
}



function fetchEth() {
    return fetch("http://localhost:3000/1")
        .then(resp => resp.json())
        .then(handleResponse("eth"))
        .catch(error => {
            console.error("Failed to fetch Ethereum data", error);
        })
}

function fetchUsdt() {
    return fetch("http://localhost:3000/2")
        .then(resp => resp.json())
        .then(handleResponse("usdt"))
        .catch(error => {
            console.error("Failed to fetch USDT data", error);
        })
}

function fetchBnb() {
    return fetch("http://localhost:3000/3")
        .then(resp => resp.json())
        .then(handleResponse("bnb"))
        .catch(error => {
            console.error("Failed to fetch BNB data", error);
        })
}

function fetchSlc() {
    return fetch("http://localhost:3000/4")
        .then(resp => resp.json())
        .then(handleResponse("slc"))
        .catch(error => {
            console.error("Failed to fetch SLC data", error);
        })
}

function fetchUsdc() {
    return fetch("http://localhost:3000/5")
        .then(resp => resp.json())
        .then(handleResponse("usdc"))
        .catch(error => {
            console.error("Failed to fetch USDC data", error);
        })
}

function fetchDoge() {
    return fetch("http://localhost:3000/6")
        .then(resp => resp.json())
        .then(handleResponse("doge"))
        .catch(error => {
            console.error("Failed to fetch Doge data", error);
        })
}

function fetchXrp() {
    return fetch("http://localhost:3000/7")
        .then(resp => resp.json())
        .then(handleResponse("xrp"))
        .catch(error => {
            console.error("Failed to fetch XRP data", error);
        })
}

function fetchAda() {
    return fetch("http://localhost:3000/8")
        .then(resp => resp.json())
        .then(handleResponse("ada"))
        .catch(error => {
            console.error("Failed to fetch ADA data", error);
        })
}

function fetchAvax() {
    return fetch("http://localhost:3000/9")
        .then(resp => resp.json())
        .then(handleResponse("avax"))
        .catch(error => {
            console.error("Failed to fetch AVAX data", error);
        })
}

