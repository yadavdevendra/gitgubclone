const username = JSON.parse(localStorage.getItem("key"));
console.log("login", username.login);
const url = `https://api.github.com/users/${username}`;


async function getapi() {
    const response = await fetch(url)
    var data = await response.json();
    return data
}
var a = getapi()
a.then((val) => {
    getdata(val)
})
function getdata(data) {
    const repoUrl = data.repos_url;
    // console.log("repo", repoUrl);
    response = fetch(repoUrl)
        // Storing data in form of JSON
        .then((response) => response.json())
        .then((data1) => {
            console.log("data1", data1)
            data1.map((item) => {
                console.log(item.name)
                document.getElementById("repositories").innerHTML += `<div style="color:red;">${item.name}</div><br/>`;
            })
        })

    document.getElementById("gitproPic").src = data.avatar_url;
    document.getElementById("userName").innerHTML = data.login;
    document.getElementById("gitName").innerHTML = data.name;
    document.getElementById("following").innerHTML = "<b>" + data.following + "</b>" + " Following";
    document.getElementById('reposValue').innerHTML = data.public_repos
    document.getElementById("followers").innerHTML = "<b>" + data.followers + "</b>" + " Followers";
    document.getElementById('company').innerHTML = data.company;
    document.getElementById('location').innerHTML = data.location;
    document.getElementById('mail').innerHTML = data.email + "@gmail.com";
    document.getElementById('profileWebsite').innerHTML = "<a href=" + data.id + ">" + data.blog + "</a>";
    document.getElementById('socialMedia').innerHTML = "<a href='https://twitter.com/" + data.id + "'>@ " + data.twitter_username + "</a>";
    

}
