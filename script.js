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
    git.addEventListener('input', (e) => {
        let found = fil.filter(item => !item["login"].indexOf(e.target.value))
        let name = found[0].login;
        document.getElementById("proPic").src = found[0].avatar_url
        document.getElementById("userName").innerHTML = name
     
        localStorage.setItem("key", JSON.stringify(found[0].login));
// followers
        fetch(`https://api.github.com/users/${name}`)
        .then(resp => resp.json())
        .then(res => {
        document.getElementById("gitFollowers").textContent=res.followers
        document.getElementById("gitFollowing").textContent=res.following
        document.getElementById("gitRepos").textContent=res.public_repos
        
        })
    })

}
