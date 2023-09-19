alert('What is your name') 
const username = prompt('Whats your name')
alert('Hello ' + username)
alert('wellcome to the gaem today ' + username + ' we are going to the moon')

let exited = prompt('are you exited to play Y or N')
alert('ok so you said ' + exited)

exited = exited.toUpperCase()

let Y = 1 
let N = 3 

if (exited === 'Y') alert('that is awsome')
if (exited === 'N') alert('that is sad')

alert('Its time to padk to the moom')
let numSuitcase = prompt("how many suit case do you have")

if (numSuitcase > 2) alert('that is to many')
if (numSuitcase <= 2) alert('we are good to go')

let copanioinType = prompt('you can bring one pet')

alert('you are bringing your ' + copanioinType)

let copanioinName = prompt('what your animel aname')

let firstletter = copanioinName[0]; console.log(copanioinName)

firstletter = firstletter.toUpperCase(); console.log(firstletter)

let otherletters = copanioinName.slice(1) 
console.log(otherletters)

otherletters = otherletters.toLocaleLowerCase()
console.log(otherletters)

copanioinName = firstletter + otherletters; console.log(copanioinName)

alert(' so you are bringing ' + copanioinName)


alert('nasa has a interior design team offering to outfit your space ship')

alert('you have these options A a sleek suit B retro Cvtictoren era')

let decor = prompt('what do you want')

if (decor === 'A') alert('you chose Sleek')
if (decor === 'b') alert('you chose Retro')
if (decor === 'c') alert('you chose Cvtictrones')


alert(`${username} and ${copanioinName}, serfing the celestrial abyss, in a ${decor} spaceship.`);

let timer = 5
while (timer > 0){
    alert(`${timer} `)
    timer -= 1 }


alert ('liftoff')

