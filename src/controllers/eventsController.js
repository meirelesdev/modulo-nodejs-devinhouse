const {
    createOrUpdateEvent,
    deleteEventById,
    getEvents,
    getEventById,
    getEventByIdOwner,
    getEventsByDate,
    validateFieldToEvent
} = require('../services/eventsService')

const { isEmpty, formatDate } = require('../utils/functions')

const index = async (req, res) => {
    const eventsData = await getEvents()
    const events = eventsData.map(item => {
        return { ...item, date: formatDate(item.date) }
    })
    return res.status(200).json({ message: "sucesso", data: events })
}
const show = async (req, res) => {
    const { id } = req.params
    try {
        const event = await getEventById(parseInt(id))
        return res.status(200).json({ message: "sucesso", data: { ...event, date: formatDate(event.date) } })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}
const showByOwner = async (req, res) => {
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
        validateFieldToEvent(data)
        // await createOrUpdateEvent(data)
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
        /**
         * implementar tratamento de convidados, não esta funcionando como deveria.
         */
        await createOrUpdateEvent(data, parseInt(id))
        return res.status(200).json({ message: "Sucesso: Evento atualizado." })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}
const deleteEvent = async (req, res) => {
    const { id } = req.params
    try{
        await deleteEventById(parseInt(id))
        return res.status(200).json({ message: "Sucesso: Evento deletado." })
    }catch(e){        
        return res.status(400).json({ message: e.message })
    }
}
const searchEventByDate = async (req, res) => {
    const { dia, mes, ano } = req.query
    try {
        const query = {
            ano: Number(ano) || null,
            mes: Number(mes) || null,
            dia: Number(dia) || null,
        }
        const events = await getEventsByDate(query)
        return res.status(200).json({ message: "Sucesso.", data: events })
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
    deleteEvent,
    searchEventByDate
}