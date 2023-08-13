import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaCliente';

export class GetAllPatientController {
    async handle(request: Request, response: Response) {
        try {
            const patients = await prismaClient.patient.findMany(); // Busca todos os pacientes

            return response.json(patients);
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao buscar pacientes' });
        }
    }
}
