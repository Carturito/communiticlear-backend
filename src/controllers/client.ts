import { Request, Response } from 'express'
import Client from '../models/client'

export const getClients = async (req: Request, res: Response) => {
    const listClients = await Client.findAll()
    res.json(listClients)
}

export const getClient = async (req: Request, res: Response) => {
    const { id } = req.params;
    const client = await Client.findByPk(id);
    if(client) {
        res.json(client)
    } else {
        res.status(404).json({
            msg: `No existe un cliente con el id ${id}`
        })
    }
}

export const deleteClient = async (req: Request, res: Response) => {
    const { id } = req.params;
    const client = await Client.findByPk(id);
    if(!client) {
        res.status(404).json({
            msg: `No existe un cliente con el id ${id}`
        })
    } else {
        await client.destroy();
        res.json({
            msg: 'El cliente fue eliminado con éxito!'
        })
    }
}

export const postClient = async(req: Request, res: Response) => {
    const { body } = req;
    try {
        await Client.create(body);
        res.json({
            msg: 'El cliente fue agregado con éxito!'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ups, ocurrió un error, comuniquese con soporte'
        })
    }
}

export const updateClient = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const client = await Client.findByPk(id);
    
        if(client) {
            await client.update(body);
            res.json({
                msg: 'El cliente fue actualizado con éxito!'
            })
        } else {
            res.status(404).json({
                msg: `No existe un cliente con el id ${id}`
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ups, ocurrió un error, comuniquese con soporte'
        })
    }
}

