const texts = {
    gameText: document.getElementById('game-text'),
    hockeyText: document.getElementById('hockey-text'),
    mobileText: document.getElementById('mobile-text')
}

const projects = {
    gameProject: document.getElementById('game-project'),
    hockeyProject: document.getElementById('hockey-project'),
    mobileProject: document.getElementById('mobile-project')
}

Object.keys(projects).forEach(projectKey => {
    const project = projects[projectKey]

    project.addEventListener('click', () => {
        Object.values(texts).forEach(text => {
            text.style.display = 'none'
        })

        Object.values(projects).forEach(element => {
            element.style.color = 'white'
        })


        if (project === projects.gameProject) {
            texts.gameText.style.display = 'block'
            project.style.color = 'pink'
        }

        if (project === projects.hockeyProject) {
            texts.hockeyText.style.display = 'block'
            project.style.color = 'pink'
        }

        if (project === projects.mobileProject) {
            texts.mobileText.style.display = 'block'
            project.style.color = 'pink'
        }
    })
})