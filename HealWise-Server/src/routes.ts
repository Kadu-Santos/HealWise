import { Router } from "express";
import { CreatPatientController } from "./controllers/CreatPatientController";

const  router = Router();
const CreatPatient = new CreatPatientController();

router.post('/patient', CreatPatient.handle);

export { router };
