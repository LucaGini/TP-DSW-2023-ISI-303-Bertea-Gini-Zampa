import { Repository } from "../shared/repository.js";
import { Designer } from "./designer.entity.js";

const designers = [
  new Designer("20-12345678-9", "Juan", "Perez", "12345678", "juanperez@gmail.com")
];

export class DesignerRepository implements Repository<Designer>{
  public findAll(): Designer[] | undefined {
    return designers;
  }

  public findOne(item: {id: string}): Designer | undefined {
    return designers.find(designer => designer.cuil === item.id);
  }

  public add(item: Designer): Designer | undefined {
    designers.push(item);
    return item;
  }

  public update(item: Designer): Designer | undefined {
    const index = designers.findIndex(designer => designer.cuil === item.cuil);
    if (index !== -1){
      designers[index] = {...designers[index], ...item};
    }
    return designers[index];
  }

  public delete(item: {id: string}): Designer | undefined {
    const index = designers.findIndex(designer => designer.cuil === item.id);
    if (index !== -1){
      const deletedDesigners = designers[index];
      designers.splice(index, 1);
      return deletedDesigners; 
    }
  }
}