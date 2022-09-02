// api url
const api_url = "https://api.github.com/users";

var git = document.getElementById("searchUser")
// Defining async function
async function getapi(e) {
    // Storing response
    const response = await fetch(api_url)

    // Storing data in form of JSON
    var data = await response.json();

    return data
}
var a = getapi()
a.then((val) => {
    getdata(val)
})
async function getdata(fil) {
    var git = document.getElementById("searchUser")

    git.addEventListener('keyup', (e) => {
        let found = fil.filter(item => !item["login"].indexOf(e.target.value))
        document.getElementById("proPic").src = found[0].avatar_url
        document.getElementById("userName").innerHTML = found[0].login
        console.log(found[0].followers_url);
        localStorage.setItem("key", JSON.stringify(found[0].login));

    })
}