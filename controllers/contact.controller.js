const models = require("../models")

exports.create = async (req, res) => {
    try {
        const contact = {
            name: req.body.name,
            number: req.body.number,
        }
        const saved = await models.Contact.create(contact)
        return res.status(201).json(saved);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

exports.findAll = async (req, res) => {
    try {
        const contacts = await models.Contact.findAll({});
        return res.status(200).json(contacts);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

exports.findOne = async (req, res) => {
    await models.Contact.findByPk(req.params.contactId)
        .then((data) => {
            if (!data) {
                return res.status(404)
                    .send({message: "Contact not found with id " + req.params.contactId})
            }
            res.send(data)
        })
        .catch(err => res.status(500).send({message: err.message || "Some error occurred...",}))
}

exports.update = async (req, res) => {
    try {
        const contact = {
            name: req.body.name,
            number: req.body.number,
        }
        const saved = await models.Contact.update(contact, {
            where: {id: req.params.contactId}
        })
        return res.status(200).json(saved);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

exports.delete = async (req, res) => {
    models.Contact.destroy({
        where: {id: req.params.contactId}
    })
        .then((data) => {
            if (!data) {
                return res.status(404)
                    .send({message: "Contact not found with id " + req.params.contactId})
            }
            res.send({message: "Message deleted successfully!"})
        })
        .catch(err => res.status(500).send({message: err.message || "Some error occurred...",}))
}