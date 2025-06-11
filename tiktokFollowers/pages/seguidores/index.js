
const nickname = document.querySelectorAll(".es616eb6")
const account = document.querySelectorAll(".es616eb8")
const links = document.querySelectorAll(".es616eb3")
const imgStyle = document.querySelectorAll(".e1e9er4e0")

nickname.forEach((el) => {
    el.innerHTML = `
    <p class="nick">Usuario:</p>
    - ${el.innerText}
    `
})

account.forEach((el) => {
    el.innerHTML = `
    <p class="user">Cuenta:</p>
    - ${el.innerText}
    `
})

links.forEach((el, index) => {

    const href = el.getAttribute('href');
    const match = href.match(/@[\w.-]+/); //encuentra el user /@etc

    el.href = `https://www.tiktok.com/${match[0]}`;
    el.setAttribute('target', '_blank');

    const divNum = document.createElement("div")
    
    divNum.className = "order"
    divNum.textContent = index + 1
    el.append(divNum)
})

imgStyle.forEach((el) => {
    el.removeAttribute("style")
})