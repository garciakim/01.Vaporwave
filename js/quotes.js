function getQuotes(){
	var quotes = [
		"Meet me in the pale moonlight.",
		"Maybe It's time to forget everything and move on.",
		"I would spend 9 lives with you.",
		"I fall in love with personalities & vibes. Not looks and money.",
		"I hope the ride never ends.",
		"I'm only your everything when you feel alone.",
		"Please have a lot to say about lives they've never lived.",
		"Try Again?",
		"Outlook not so good.",
		"Quiet people have the loudest minds.",
		"It's my fault.",
		"The sun watches what I do, but the moon knows all my secrets.",
		"Reality isn't that easy.",
		"No one stays the same.",
		"Was it all just a dream?",
		"I'm still here.",
		"No amount of sleep in the world could cure the tiredness I feel.",
		"Who were you before they broke you?",
		"Everything is shattering and it's my mistake.",
		"What will your next dream be?",
		"Better days are coming.",
		"VIBE CHECK.<br/>VIBE CHECK.<br/>VIBE CHECK.",
		"Let's go someplace far far away.",
		"Until I get there I won't give up.",
		"My heart hurts.",
		"I don't care.",
		"I was lost in though but sadly I found my way back.",
		"DARLING...",
		"I don't feel sad.<br/>I don't feel anything",
		"Don't make me sad.<br/> Don't make me cry.",
		"Tell me I am real.",
		"I feel sad and lonely.",
		"You create for yourself.<br/>The audience are just eavesdropping.",
		"I guess in the end, there really is no end. Just new beginnings.",
		"Homesick for a place I'm not even sure exists.",
		"I am not the someone I used to be.<br/>I've lost some pieces along the way.",
		"I wanna live inside your mind, next to your favorite songs.",
		"We've all got both light and dark inside of us.",
		"I fell for you and I can't stop it.",
		"You're boring and uninteresting.<br/>That's why you don't have any friends.",
		"People can't understand others completely.",
		"It's too late now...",
		"No one ever wants me.",
		"I'm not good with people.",
		"Life wasn't meant for me.",
		"I feel so full of life when I look at the night sky.",
		"Pretending to be okay is... exhausting.",
		"I'm so tired of these fake people with fake feelings.",
		"Yesterday? Was that even real?",
		"I don't belong here.",
		"I want to sleep in these waves forever.",
		"..and truth to be told, I never was yours.",
		"You had a good life.",
		"Can you teach me how to feel real?",
		"Great times are coming.",
		"If you don't get if off your chest, you'll be never be able to breathe.",
		"You save everyone but who saves you?",
		"It's all in your head.",
		"Somehow, I feel like nothing matter anymore",
		"I feel sadness but tears won't come.",
		"Life is too short to wait.",
		"The person that you're looking for no longer exists.",
		"Human after all.",
		"EXISTENTIAL DREAD.<br/>EXISTENTIAL DREAD.<br/>EXISTENTIAL DREAD.",
		"Broken dreams and silent hearts.",
		"I tried and I'm tired.",
		"Don't even know who I am.",
		"There's no love anymore.",
		"You're almost down the rabbit hole.",
		"Did I mean anything to you at all?",
		"Don't worry.<br/> It is all part of the past now.",
		"One of the worst feelings is when you know you have to give up on someone but you don't want to.",
		"We try to hide our feelings, but we forget that our eyes speak.",
		"Reality kills dreams.",
		"You.<br/>I've spent my life waiting for you.",
		"NO SLEEP.",
		"...so lost in this stupid world.",
		"I'm ashamed of my life because it's empty.",
		"Master of thoughts.<br/>Slave of emotions.",
		"Not all who wander are lost.",
		"happier alone...",
		"I don't really feel like existing today.",
		"BETTER DAYS ARE COMING.<br/>BETTER DAYS ARE COMING.<br/>BETTER DAYS ARE COMING.<br/>BETTER DAYS ARE COMING.<br/>BETTER DAYS ARE COMING.",
		"I'm living in a fucking nightmare.",
		"I wonder why someone like me was born into this world.",
		"The reason why I keep my feelings to myself because I can't explain them.",
		"I don't know what way to go anymore.",
		"Go after dreams.<br/> Not people.",
		"A TV is replaceable.",
		"Buy me pizza.",
		"I feel like I am losing myself.",
		"Being honest only brings pain and misery.",
		"Just living is the most painful thing.",
		"I dont have a single clue about my future.",
		"I was falling and you looked the other way.",
		"Why do some people stay longer in my head than my life?",
		"I have to fix this daydreaming habit of mine.",
		"Why does unrequited love feel so empty?",
		"What is reality?",
		"What's wrong with running away from reality if it sucks?",
		"Uwaaa~ Hello there!<br/> Just want to let you know that I put 100 quotes here...cool huh!.<br/><br/> Anyway, If you see this, I hope you're doing okay.",
	]
	var getQuotes = quotes[Math.floor(Math.random() * quotes.length)];
	const qPlacer = document.querySelector('.quotes p')
	qPlacer.innerHTML = getQuotes;
}
getQuotes();