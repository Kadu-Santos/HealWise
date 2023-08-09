import axios, { AxiosResponse } from 'axios';
import { dataForm } from '../../../@types/dataForm';

export function createPatient(data: dataForm): Promise<AxiosResponse> {
  const postData = {
    dataPatient: data
  };

  return axios.post('http://localhost:4003/patient/', postData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
