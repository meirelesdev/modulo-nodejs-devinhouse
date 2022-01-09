const { getAll, save, getPosition, formatDate } = require("../utils/functions");
const { getUserById } = require("./userService");

const getEvents = async () => {
    const eventsData = getAll('events')
    const events = eventsData.map(async (event) => {
        const guests = event.guests.map(async (guest) => await getUserById(guest.id))
        const owner = await getUserById(event.owner.id)
        const guestResolved = await Promise.all(guests)
        return { ...event, guests: guestResolved, owner }
    })
    return Promise.all(events)
}
const getEventById = async (id) => {
    const events = await getEvents()
    const event = events.find(event => event.id === id)
    if (!event) {
        throw new Error("Evento não encontrado.")
    }
    const dataGuests = event.guests.map(async (guest) => await getUserById(guest.id))
    event.guests = await Promise.all(dataGuests)
    event.owner = await getUserById(event.owner.id)
    return Promise.resolve(event)
}

const getEventByIdOwner = async (idOwner) => {
    const events = await getEvents()
    const eventsOfOwner = events.filter(event => event.owner.id === idOwner)
    const eventsWithDataUsers = eventsOfOwner.map(async (event) => {
        return getEventById(event.id)
    })
    return Promise.all(eventsWithDataUsers)
}
const getEventByIdGuest = async (idGuest) => {
    const events = await getEvents()
    const eventsOfGuest = events.filter(event => {
        const guestsIds = event.guests.filter(guest => {
            return guest.id === idGuest
        })
        return guestsIds.length > 0
    })
    const eventsWithDataUsers = eventsOfGuest.map(async (event) => {
        return getEventById(event.id)
    })
    return Promise.all(eventsWithDataUsers)
}

const createOrUpdateEvent = async (eventData, id = null) => {
    const events = await getAll('events')
    let newDataEvents = []
    if (id) {
        const position = getPosition(events, id)
        if(position === -1) throw new Error("Não é possivel atualizar o evento informado")
        const eventToUpdate = events[position]
        if(eventData.guests.length > 0){
            eventToUpdate.guests = [...eventToUpdate.guests, ...eventData.guests]
        }
        if(eventData.owner && eventToUpdate.owner.id !== eventData.owner.id){
            eventToUpdate.owner = eventData.owner
        }
        events[position] = eventToUpdate
        newDataEvents = [...events]
    } else {
        newDataEvents = [...events, { id: events.length + 1, ...eventData }]
    }
    save(newDataEvents, 'events')
}
const deleteEventById = async (id) => {
    const events = await getAll('events')
    const position = getPosition(events, id)
    if (position > -1) {
        const now = new Date()
        if (now.getTime() > (new Date(events[position].date)).getTime()) {
            throw new Error("Não é possivel deletar um evento que ja aconteceu.")
        }
        const del = events.splice(position, 1)
        save(events, 'events')
    } else {
        throw new Error("Evento não encontrado")
    }

}
const getEventsByDate = async (queryObj) => {
    const eventsData = await getEvents()
    let dateFilter = ''
    let events = []
    if (queryObj.ano && queryObj.mes && queryObj.dia) {

        dateFilter = new Date()
        dateFilter.setYear(queryObj.ano)
        dateFilter.setMonth(queryObj.mes - 1)
        dateFilter.setDate(queryObj.dia)

        events = eventsData.filter(item => {
            return formatDate(item.date) === formatDate(dateFilter)
        })
        return events.map(item => {
            return { ...item, date: formatDate(item.date) }
        })
    }
    if (queryObj.mes && queryObj.dia) {

        dateFilter = new Date()
        dateFilter.setMonth(queryObj.mes - 1)
        dateFilter.setDate(queryObj.dia)

        events = eventsData.filter(item => {
            const sameDay = (new Date(item.date)).getDate() === dateFilter.getDate()
            const sameMonth = (new Date(item.date)).getMonth() === dateFilter.getMonth()
            return sameDay && sameMonth
        })
        return events.map(item => {
            return { ...item, date: formatDate(item.date) }
        })
    }
    if (queryObj.ano && queryObj.dia) {
        dateFilter = new Date()
        dateFilter.setYear(queryObj.ano)
        dateFilter.setDate(queryObj.dia)
        events = eventsData.filter(item => {
            const sameDay = (new Date(item.date)).getDate() === dateFilter.getDate()
            const sameYear = (new Date(item.date)).getFullYear() === dateFilter.getFullYear()
            return sameDay && sameYear
        })
        return events.map(item => {
            return { ...item, date: formatDate(item.date) }
        })
    }
    if (queryObj.ano && queryObj.mes) {
        dateFilter = new Date()
        dateFilter.setMonth(queryObj.mes - 1)
        dateFilter.setYear(queryObj.ano)

        events = eventsData.filter(item => {
            const sameMonth = (new Date(item.date)).getMonth() === dateFilter.getMonth()
            const sameYear = (new Date(item.date)).getFullYear() === dateFilter.getFullYear()
            return sameMonth && sameYear
        })
        return events.map(item => {
            return { ...item, date: formatDate(item.date) }
        })
    }
    if (queryObj.dia) {

        dateFilter = new Date()
        dateFilter.setDate(queryObj.dia)

        events = eventsData.filter(item => {
            return (new Date(item.date)).getDate() === dateFilter.getDate()
        })
        return events.map(item => {
            return { ...item, date: formatDate(item.date) }
        })
    }
    if (queryObj.mes) {

        dateFilter = new Date()
        dateFilter.setMonth(queryObj.mes - 1)

        events = eventsData.filter(item => {
            return (new Date(item.date)).getMonth() === dateFilter.getMonth()
        })
        return events.map(item => {
            return { ...item, date: formatDate(item.date) }
        })
    }
    if (queryObj.ano) {
        dateFilter = new Date()
        dateFilter.setYear(queryObj.ano)
        events = eventsData.filter(item => {
            return (new Date(item.date)).getFullYear() === dateFilter.getFullYear()
        })
        return events.map(item => {
            return { ...item, date: formatDate(item.date) }
        })
    }
}
const validateFieldToEvent = (data) => {
    const fields = Object.keys(data)
    const modelEvent = ["name", "description", "date", "eventPlace", "guests", "owner"]
    if(modelEvent.length !== fields.length) throw new Error("Formator de dados invalidos.")
    for (let campo in data) {
        if (!data[campo] || campo === 'guests' && data[campo].length === 0) throw new Error(`O campo ${campo} não pode ser vazio`)
    }
}

module.exports = {
    getEvents,
    getEventById,
    getEventByIdOwner,
    getEventByIdGuest,
    createOrUpdateEvent,
    deleteEventById,
    getEventsByDate,
    validateFieldToEvent
}
