const { getAll, save, getPosition } = require("../utils/functions");
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
    const dataGuests = event.guests.map(async (guest) => await getUserById(guest.id))
    event.guests = await Promise.all(dataGuests)
    event.owner = await getUserById(event.owner.id)
    return Promise.resolve(event)
}

const getEventByIdOwner = async (idOwner) => {
    const events = await getEvents()
    const eventsOfOwner = events.filter(event => event.owner.id === idOwner)
    const eventsWithDataUsers = eventsOfOwner.map( async (event) => {
        return getEventById(event.id)
    })
    return Promise.all(eventsWithDataUsers)
}

const createOrUpdateEvent = async (eventData, id = null) => {
    const events = await getEvents()
    let newDataEvents = []
    if (id) {
        newDataEvents = events.map(event => {
            return event.id === id ? { ...event, ...eventData } : event
        })
    } else {
        newDataEvents = [...events, { id: events.length + 1, ...eventData }]
    }
    save(newDataEvents, 'events')
}
const deleteCompanyById = async (id) => {
    const companies = await getCompanies()
    const position = getPosition(companies, id)
    if (position > -1) {
        companies.splice(position, 1)
        save(companies, 'companies')
    } else {
        throw new Error('It is not possible to delete this company.')
    }
}


module.exports = {
    getEvents,
    getEventById,
    getEventByIdOwner,
    createOrUpdateEvent,
    deleteCompanyById
}
