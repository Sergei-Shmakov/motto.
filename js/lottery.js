const regularPrizes = [
	'1000 ₽ на услуги',
	'−15% на чек',
	'−20% на чек',
	'Сеанс в детокс-капсуле Iayshi Dome (30 мин.)',
	'Маникюр без покрытия',
	'Экспресс-уход для лица',
	'Экспресс-уход для волос',
	'Прессотерапия Arosha',
]

const grandPrize = 'Процедура BBL Forever Young'

const grandPrizeWindowStart = new Date('2026-08-24')

const grandPrizeChance = 0.02

const form = document.getElementById('lotteryForm')
const overlay = document.getElementById('overlay')
const prizeTitle = document.getElementById('prizeTitle')

form.addEventListener('submit', function (e) {
	e.preventDefault()

	let prize

	const now = new Date()

	if (now >= grandPrizeWindowStart && Math.random() < grandPrizeChance) {
		prize = grandPrize
	} else {
		prize = regularPrizes[Math.floor(Math.random() * regularPrizes.length)]
	}

	prizeTitle.textContent = prize

	overlay.classList.add('is-active')
})
