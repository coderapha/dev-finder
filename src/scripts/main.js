const btn = document.querySelector("#btn")

btn.onclick = function() {
    let username = document.querySelector("#get-username").value
    let url = `https://api.github.com/users/${username}`

    fetch(url).then(res=>res.json()).then(data=> {
        if(data.message) {
            alert(`Não foi encontrado o perfil ${username} no github`)
        } else {
            document.querySelector(".user-box").classList.add("fade-in")
            document.querySelector(".user-box").innerHTML = /*html*/`
                <div class="icon-area">
                    <img src="${data.avatar_url}" alt="${data.name}" class="user-icon">
                </div>

                <div class="user-infos">
                    <div class="user-infos-header">

                        <span class="user-name">
                            ${data.name}
                        </span>
                        
                        <span class="joined">
                            Entrou no GitHub em  ${data.created_at}
                        </span>

                    </div>
                    
                    <p class="user-username">
                        <a href="https://github.com/${data.login}" target="_blank" title="${data.login}"> @${data.login} </a>
                    </p>

                    <p class="user-bio">
                        ${data.bio}
                    </p>

                    <div class="github-infos">
                        <div class="box">
                            <span class="box-title">Repositórios</span>
                            <span class="github-repos">${data.public_repos}</span>
                        </div>

                        <div class="box">
                            <span class="box-title">Seguidores</span>
                            <span class="github-seguidores">${data.followers}</span>
                        </div>

                        <div class="box">
                            <span class="box-title">Seguindo</span>
                            <span class="github-seguindo">${data.following}</span>
                        </div>
                    </div>
                </div>
            `
        }
    })

}