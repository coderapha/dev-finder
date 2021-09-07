const btn = document.querySelector("#btn")

btn.onclick = function() {
    let username = document.querySelector("#get-username").value
    let url = "https://api.github.com/users/"+username

    fetch(url).then(res=>res.json()).then(data=> {
        if(data.message) {
            alert(`Não foi encontrado o perfil ${username} no github`)
        } else {
            document.querySelector(".user-box").classList.add("fade-in")
            document.querySelector(".icon-area").innerHTML = `<img src="${data.avatar_url}" alt="${data.name}" class="user-icon">`
            document.querySelector(".user-name").innerHTML =` ${data.name}`
            document.querySelector(".joined").innerHTML = `Entrou no GitHub em  ${data.created_at}`
            document.querySelector(".user-username").innerHTML = `<a href="https://github.com/${data.login}" target="_blank" title="${data.login}"> @${data.login} </a>`
            document.querySelector(".user-bio").innerHTML = `${data.bio}`
            document.querySelector(".github-repos").innerHTML = `${data.public_repos}`
            document.querySelector(".github-seguidores").innerHTML = `${data.followers}`
            document.querySelector(".github-seguindo").innerHTML = `${data.following}`
        }
    })

}