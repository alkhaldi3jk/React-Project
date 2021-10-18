import { makeAutoObservable } from "mobx";
import api from "./api";

class Jam3yaStore {
  jam3yas = [];

  constructor() {
    makeAutoObservable(this, {});
  }

  createjam3ya = async (jam3ya) => {
    try {
      const res = await api.post("/jam3yas", jam3ya);
      this.jam3yas.push(res.data);
    } catch (error) {
      console.log("jam3yasStore -> createjam3ya -> error", error);
    }
  };

  fetchjam3yat = async () => {
    try {
      const response = await api.get("/jam3ya");
      this.jam3yas = response.data;
    } catch (error) {
      console.error("jam3yasStore -> fetchjam3ya -> error", error);
    }
  };
}
const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchjam3yat();
export default jam3yaStore;
