import { Repository } from "../shared/repository.js";
import { Discount } from "./discount.entity.js";  

const discounts = [
  new Discount(new Date(2021, 1, 1), 1000, 10),
];

export class DiscountRepository implements Repository<Discount>{
  public findAll(): Discount[] | undefined {
    return discounts;
  }

  public findOne(item: {id: string}): Discount | undefined {
    return discounts.find(discount => discount.dateSince === new Date(item.id));
  }

  public add(item: Discount): Discount | undefined {
    discounts.push(item);
    return item;
  }

  public update(item: Discount): Discount | undefined {
    const index = discounts.findIndex(discount => discount.dateSince === item.dateSince);
    if (index !== -1){
      discounts[index] = {...discounts[index], ...item};
    }
    return discounts[index];
  }

  public delete(item: {id: string}): Discount | undefined {
    const index = discounts.findIndex(discount => discount.dateSince === new Date(item.id));
    if (index !== -1){
      const deletedDiscounts = discounts[index];
      discounts.splice(index, 1);
      return deletedDiscounts; 
    }
  }
}