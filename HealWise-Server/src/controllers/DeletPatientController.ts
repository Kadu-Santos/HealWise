import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaCliente';

export class DeletePatientController {
    async handle(request: Request, response: Response) {
        const { id } = request.body;
        try {
            
            await prismaClient.patient.delete({
                where: {
                    id: id
                }
            });

            return response.json('Sucesso ao excluir!');
        } catch (error) {
            console.log(error)
            console.log(id)
            return response.status(500).json({ error: 'Falha ao excluir' });
        }
    }
}

