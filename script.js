const jokeBtn = document.getElementById('joke-btn')
const jokeUrl = 'https://v2.jokeapi.dev/joke/Any'
const audioElement = document.getElementById('audio')

// let joke = {}

const fetchJoke = async()=>{
	const response = await fetch(jokeUrl)
	const joke = await response.json()
	const ttsKey = 'c9aa6cb985f84623bd2d73eddc804a1f'
	const tts =  `https://api.voicerss.org/?key=${ttsKey}&hl=en-us&c=MP3&src=${joke.setup}.... ${joke.delivery}	`
	
	console.log(joke.setup + joke.delivery)
	// window.location.href = tts;
	audioElement.src = tts

	audioElement.onplay = ()=>{
		jokeBtn.disabled = true
	}
	audioElement.onended = ()=>{
		jokeBtn.disabled = false
	}
	audioElement.onplaying
	// jokeBtn.disabled = true
}

// console.log(joke)
audioElement.hidden = true

jokeBtn.addEventListener('click',fetchJoke)