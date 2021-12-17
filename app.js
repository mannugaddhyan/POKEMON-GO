const s = document.querySelector('#container')
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for(let i =1;i<151;i++)
{
    const newImg = document.createElement('img')
    newImg.src = `${baseURL}${i}.png`
    s.appendChild(newImg)
}

