import { Province } from "../province/province.entity.js";

export class City{
  postCode: string;
  name: string;
  province: Province;

  constructor(postCode: string, name: string, province:Province){
    this.postCode = postCode;
    this.name = name;
    this.province=province;
  }
}