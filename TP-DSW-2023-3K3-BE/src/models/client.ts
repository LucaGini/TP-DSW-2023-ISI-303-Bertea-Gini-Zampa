import { City } from './city';  // Importamos el modelo City para poder usarlo en la clase Client

export class Client{
  dni: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  password: string;
  street: string;
  number: number;
  city: City;

  constructor(dni: string, name: string, surname: string, phone: string, email: string, password: string, street: string, number: number, city: City){
    this.dni = dni;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.email = email;
    this.password=password;
    this.street=street;
    this.number=number;
    this.city = city;
  }
}