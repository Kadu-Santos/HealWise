import axios, { AxiosResponse } from 'axios';

export function getPatients(): Promise<AxiosResponse> {
  return axios.get('http://localhost:4003/patient/');
}

export function dellPatient(idUser: number): Promise<AxiosResponse>{
  const postData = {
    id: idUser
  };

  return axios.post('http://localhost:4003/dellpatient/', postData, {
    headers: {
      'Content-Type': 'application/json'
    }}
    );
}