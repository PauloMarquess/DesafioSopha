const weekNames = ['DOM.', 'SEG.', 'TER.', 'QUA.', 'QUI.', 'SEX.', 'SAB.']
const date = new Date()
const day = date.getDay()
const year = date.getFullYear().toString()
const month = String(date.getMonth())
const week = weekNames[day]
const first = date.getDate() - date.getDay()
export const dayOne = date.getDate()
export const weekDays = getWeeks()
export const numbersWeek = getNumber()
const firstDay = numbersWeek[0]
const lastDay = numbersWeek[6]
export const dayOfTheWeek = week

function getWeeks() {
  const arrayWeeks = []
  for (let i = 0; i < 7; i++) {
    let next = new Date(date.getTime())
    next.setDate(first + i)
    const nameWeek = weekNames[next.getDay()]
    arrayWeeks.push(nameWeek)
  }
  return arrayWeeks
}
function getNumber() {
  const numbersWeek = []
  for (let i = 0; i < 7; i++) {
    let next = new Date(date.getTime())
    next.setDate(first + i)
    const numberWeek = next.getDate()
    numbersWeek.push(numberWeek)
  }
  return numbersWeek
}

export const datesCalendar = () => {
  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ]

  return `${firstDay} - ${lastDay} - ${months[month]} - ${year} `
}
