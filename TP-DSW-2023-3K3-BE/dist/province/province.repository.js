import { Province } from "./province.entity.js";
const provinces = [
    new Province(1, "Buenos Aires"),
];
export class ProvinceRepository {
    findAll() {
        return provinces;
    }
    findOne(item) {
        return provinces.find(province => province.provinceId === parseInt(item.id));
    }
    add(item) {
        provinces.push(item);
        return item;
    }
    update(item) {
        const index = provinces.findIndex(province => province.provinceId === item.provinceId);
        if (index !== -1) {
            provinces[index] = { ...provinces[index], ...item };
        }
        return provinces[index];
    }
    delete(item) {
        const index = provinces.findIndex(province => province.provinceId === parseInt(item.id));
        if (index !== -1) {
            const deletedProvinces = provinces[index];
            provinces.splice(index, 1);
            return deletedProvinces;
        }
    }
}
//# sourceMappingURL=province.repository.js.map