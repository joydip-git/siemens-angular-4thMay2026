import { Product } from "../../../models/product";

export interface IServiceContract {
    getProducts(): Readonly<Product[]>;
}