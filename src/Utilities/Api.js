import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://61c7056190318500175472c2.mockapi.io/CardsQuestion",
});

export default class api {
  static getItems = async () => {
    const { data } = await baseUrl.get("/");
    return data;
  };
  static deleteItem = async (id) => {
    return await baseUrl.delete("/" + id);
  };
  static editItem = async (id, item) => {
    await baseUrl.put(`/${id}`, item);
  };
}
