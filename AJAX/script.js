const xhr = new XMLHttpRequest()
const url = "https://api.github.com/users"
xhr.open('GET', url)
xhr.onreadystatechange=()=>{
    if(xhr.readyState ==4 && xhr.status ==200){
        // console.log(xhr.responseText)
        const response = xhr.responseText
        const responseObject = JSON.parse(response)
        
        // image
        for(i=0;i<30;i++){
            const image = document.createElement('img')
        image.setAttribute ('src' , responseObject[i].avatar_url)
        console.log(image)

        // username
        const username = document.createElement('h3')
        username.textContent = responseObject[i].login
        console.log(username)

        // id number

        const idnumber = document.createElement('number')
        idnumber.textContent = responseObject[i].id
        console.log(idnumber)

        // rule
        const rule = document.createElement('hr')

        // append image and username
        const container= document.getElementById('main')
        container.appendChild(image)
        container.appendChild(username)
        container.appendChild(idnumber)
        container.appendChild(rule)

        
        }

        // const image = document.createElement('img')
        // image.setAttribute ('src' , responseObject[0].avatar_url)
        // console.log(image)

        // // username
        // const username = document.createElement('h3')
        // username.textContent = responseObject[0].login
        // console.log(username)

        // // append image and username
        // const conatiner = document.getElementById('main')
        // conatiner.appendChild(image)
        // conatiner.appendChild(username)

        console.log(responseObject)
    }
}
xhr.send()