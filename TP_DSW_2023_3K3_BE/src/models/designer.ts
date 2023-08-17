export class Designer{
  cuil: string;
  name: string;
  surname: string;
  phone: string;
  email: string;

  constructor(cuil: string, name: string, surname: string, phone: string, email: string){
    this.cuil = cuil;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.email = email;
  }
}