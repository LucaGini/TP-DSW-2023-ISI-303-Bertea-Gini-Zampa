import { Repository } from "../shared/repository.js";
import { Province } from "./province.entity.js";

const provinces = [
  new Province(1, "Buenos Aires"),
]

export class ProvinceRepository implements Repository<Province>{
  public findAll(): Province[] | undefined {
    return provinces;
  }

  public findOne(item: {id: string}): Province | undefined {
    return provinces.find(province => province.provinceId === parseInt(item.id));
  }

  public add(item: Province): Province | undefined {
    provinces.push(item);
    return item;
  }

  public update(item: Province): Province | undefined {
    const index = provinces.findIndex(province => province.provinceId === item.provinceId);
    if (index !== -1){
      provinces[index] = {...provinces[index], ...item};
    }
    return provinces[index];
  }

  public delete(item: {id: string}): Province | undefined {
    const index = provinces.findIndex(province => province.provinceId === parseInt(item.id));
    if (index !== -1){
      const deletedProvinces = provinces[index];
      provinces.splice(index, 1);
      return deletedProvinces; 
    }
  }
}