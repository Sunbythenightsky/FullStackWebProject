let container = document.getElementById('container')

fetch(`https://api.imdbapi.dev/titles`)
    .then(response => response.json())
    .then(data => {
        data.titles.forEach(element => {
            let boxContainer = document.createElement('div')
            let titleContainer = document.createElement('div') 

            let movieTitle = document.createElement('h2')
            let movieGenres = document.createElement('p')
            let movieImage =  document.createElement('img')
            boxContainer.className = 'box-container'
            titleContainer.className = 'title-container'

            movieImage.src = element.primaryImage.url
            movieImage.style.width = '200px'
            movieImage.style.height = '300px'   
            movieTitle.innerText = element.primaryTitle 
            movieGenres.innerText = `Genres: ${element.genres}`
            

            titleContainer.appendChild(movieTitle)
            titleContainer.appendChild(movieGenres)
            
            
            boxContainer.appendChild(titleContainer)
            boxContainer.appendChild(movieImage)
            container.appendChild(boxContainer)

            
        });
        })
        
