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
                    enrollmentNumber: dataPatient.enrollmentNumber,
                    phone: dataPatient.phone,
                    courses: dataPatient.courses,
                    classe: dataPatient.classe,
                    healthPlan: dataPatient.healthPlan,
                    guardianName: dataPatient.guardianName,
                    guardianPhone: dataPatient.guardianPhone,
                    weight: dataPatient.weight,
                    height: dataPatient.height,
                    bloodType: dataPatient.bloodType,
                    gender: dataPatient.gender,
                    susCardNumber: dataPatient.susCardNumber,
                    addresses: {
                        create: [
                            {
                                street: dataPatient.street,
                                number: dataPatient.number,
                                district: dataPatient.district,
                                city: dataPatient.city,
                                state: dataPatient.state,
                                dwellingType: dataPatient.dwellingType,
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
