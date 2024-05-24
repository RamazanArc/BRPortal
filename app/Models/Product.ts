import { API } from "../Api/service";

export default class Product {
  getProducts() {
    return API.get("/products");
  }
}
