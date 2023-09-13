import { Repository } from "../shared/repository.js";
import { Category } from "./category.entity.js";

const categories = [
  new Category(1, "Star Wars"),
]

export class CategoryRepository implements Repository<Category>{
  public findAll(): Category[] | undefined {
    return categories;
  }

  public findOne(item: {id: string}): Category | undefined {  
    return categories.find(category => category.categoryId === parseInt(item.id));
  }

  public add(item: Category): Category | undefined {
    categories.push(item);
    return item;
  }

  public update(item: Category): Category | undefined {
    const index = categories.findIndex(category => category.categoryId === item.categoryId);
    if (index !== -1){
      categories[index] = {...categories[index], ...item};
    }
    return categories[index];
  }

  public delete(item: {id: string}): Category | undefined {
    const index = categories.findIndex(category => category.categoryId === parseInt(item.id));
    if (index !== -1){
      const deletedCategories = categories[index];
      categories.splice(index, 1);
      return deletedCategories; 
    }
  }
}