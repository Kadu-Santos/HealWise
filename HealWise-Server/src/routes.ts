import { Router } from "express";
import { CreatPatientController } from "./controllers/CreatPatientController";
import { GetAllPatientController } from "./controllers/GetAllPatientController";
import { DeletePatientController } from "./controllers/DeletPatientController"

const  router = Router();
const CreatPatient = new CreatPatientController();
const GetAllPatient = new GetAllPatientController();
const DeletePatient = new DeletePatientController();

router.post('/patient', CreatPatient.handle);
router.get('/patient', GetAllPatient.handle)
router.post('/dellpatient', DeletePatient.handle);

export { router };