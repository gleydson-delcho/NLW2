const subjects =[
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira ",
    "Sábado",
]

getWeekday = (weekdayNumber) =>{
    const arrayPosition = weekdayNumber
    return weekdays[arrayPosition]
}

getSubject = (subjectNumber) => {
    const arrayPosition = subjectNumber - 1
    return subjects[arrayPosition]
}

convertHoursToMinutes = (time) => {
    const [hour, minutes] = time.split(':')
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes,
    getWeekday
}