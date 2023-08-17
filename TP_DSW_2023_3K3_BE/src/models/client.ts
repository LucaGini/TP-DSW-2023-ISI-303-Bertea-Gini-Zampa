export class Client{
  dni: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  password: string;
  street: string;
  number: number;

  constructor(dni: string, name: string, surname: string, phone: string, email: string, password: string, street: string, number: number){
    this.dni = dni;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.email = email;
    this.password=password;
    this.street=street;
    this.number=number;
  }
}