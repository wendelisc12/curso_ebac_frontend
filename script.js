const xhttp = new XMLHttpRequest()

const baseURL = "https://api.github.com/users"

xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        try {
            const data = JSON.parse(this.responseText);
            document.getElementById("nome").innerHTML=data.name
            document.getElementById("username").innerHTML = "@" + data.login
            document.getElementById("seguindo").innerHTML = data.following
            document.getElementById("seguidores").innerHTML = data.followers
            document.getElementById("repositorios").innerHTML = data.public_repos
            document.getElementById("avatar").src = data.avatar_url
        } catch (error) {
            console.log(error);
        }
    }
};

xhttp.open("GET", baseURL+"/wendelisc12")

xhttp.send()