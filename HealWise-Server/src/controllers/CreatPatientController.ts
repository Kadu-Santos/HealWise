import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaCliente';

export class CreatPatientController {
    async handle(request: Request, response: Response) {
        try {
            const { dataPatient } = request.body;
            const patient = await prismaClient.patient.create({
                data: {
                    cpf: dataPatient.cpf,
                    name: dataPatient.name,
                    birthDate: `${dataPatient.birthYear}/${dataPatient.birthMonth}/${dataPatient.birthDay}`,
                    enrollmentNumber: dataPatient.studentNumber,
                    phone: dataPatient.phone,
                    courses: dataPatient.course,
                    classe: dataPatient.class,
                    healthPlan: dataPatient.planhealth,
                    guardianName: dataPatient.responsavelName,
                    guardianPhone: dataPatient.responsavelTelefone,
                    weight: dataPatient.weight,
                    height: dataPatient.value,
                    bloodType: dataPatient.bloodType,
                    gender: dataPatient.gender,
                    susCardNumber: dataPatient.susCardNumber,
                    addresses: {
                        create: [
                            {
                                street: dataPatient.road,
                                number: dataPatient.number,
                                district: dataPatient.neighborhood,
                                city: dataPatient.city,
                                state: dataPatient.state,
                                dwellingType: dataPatient.moradia,
                            }
                        ]
                    }
                }
            });

            return response.json(patient);
        } catch (error) {
            return response.status(500).json({ error: "Ocorreu um erro ao criar o paciente." });
        }
    }
}
