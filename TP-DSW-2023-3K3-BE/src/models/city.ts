export class City{
  postCode: string;
  name: string;
  provinceId: number;

  constructor(postCode: string, name: string, provinceId:number){
    this.postCode = postCode;
    this.name = name;
    this.provinceId=provinceId;
  }
}