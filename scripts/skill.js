const skillElements = {
    js: document.getElementById('js'),
    react: document.getElementById('react'),
    node: document.getElementById('node'),
    html: document.getElementById('html'),
    java: document.getElementById('java'),
    python: document.getElementById('python'),
    cSharp: document.getElementById('c-sharp'),
    git: document.getElementById('git')
}

const skillText = document.getElementById('skill-text')

fetch('../db/skills.json')
    .then(response => response.json())
    .then(data => {
        skillsData = data.skills

        Object.values(skillElements).forEach(skillElement => {
            skillElement.addEventListener('click', () => {
                const skillName = skillElement.id
                const selectedSkill = skillsData.find(skill => skill.name === skillName)
        
                Object.values(skillElements).forEach(element => {
                    element.style.color = 'white'
                    element.style.fontSize = '1em'
                    skillText.style.display = 'none'
                })

                skillText.innerHTML = ''

                if (selectedSkill) {
                    skillText.innerHTML += selectedSkill.text
                    skillText.style.display = 'block'
                    skillElement.style.color = 'pink'
                    skillElement.style.fontSize = '1.5em'
                    
                } 
            })
        })
    })
    .catch(error => console.error('Error fetching skills.json: ', error))

