const { createOrUpdateEvent, deleteCompanyById, getEvents, getEventById, getEventByIdOwner } = require('../services/eventsService')
const { isEmpty } = require('../utils/functions')

const index = async (req, res) => {
    const events = await getEvents()
    return res.status(200).json({ message: "sucesso", data: events })
}
const show = async (req, res) => {
    const { id } = req.params
    console.log(id)
    const event = await getEventById(parseInt(id))
    try {
        if (!event) {
            throw new Error("Event not found.")
        }
        return res.status(200).json({ message: "sucesso", data: event })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}
const showByOwner = async (req, res ) => {
    const { idOwner } = req.params
    console.log(idOwner)
    const event = await getEventByIdOwner(parseInt(idOwner))
    try {
        if (!event) {
            throw new Error("Event not found.")
        }
        return res.status(200).json({ message: "sucesso", data: event })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}
const createEvent = async (req, res) => {
    const data = req.body
    try {
        if (isEmpty(data)) {
            throw new Error('No data to save.')
        }
        createOrUpdateEvent(data)
        return res.status(200).json({ message: "Sucesso: Evento criado." })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}
const updateEvent = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        if (isEmpty(data)) throw new Error('No data to update.')
        createOrUpdateEvent(data, parseInt(id))
        return res.status(200).json({ message: "Sucesso: Evento atualizado." })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}
const deleteCompany = async (req, res) => {
    const { id } = req.params
    try {
        if(!id) {
            throw new Error('It is not possible to delete this company.')
        }
        deleteCompanyById(parseInt(id))
        return res.status(200).json({ message: "Sucesso: empresa deletada." })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}

module.exports = {
    index,
    show,
    showByOwner,
    createEvent,
    updateEvent,
    deleteCompany
}