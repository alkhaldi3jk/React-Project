import { makeAutoObservable } from "mobx";
import api from "./api";

class Jam3yaStore {
  jam3yat = [];

  constructor() {
    makeAutoObservable(this);
  }

  createjam3ya = async (jam3ya) => {
    try {
      const res = await api.post("/jam3ya", jam3ya);
      this.jam3yat.push(res.data);
    } catch (error) {
      console.log("Jam3yatStore -> createjam3ya -> error", error);
    }
  };

  fetchJam3yat = async () => {
    try {
      const res = await api.get("/jam3ya");
      console.log(res.data)
      this.jam3yat = res.data;
    } catch (error) {
      console.error("Jam3yatStore -> fetchjam3yat -> error", error);
    }
  };
}

// updatejam3ya = async (updatedjam3ya) => {
//   try {
//     const response = await axios.put(
//       `https://coded-miniproject-jam3ya-be.herokuapp.com/jam3ya/${updatedjam3ya.jam3yaId}`,
//       updatedjam3ya
//     );
//     this.Jam3yat = this.Jam3yat.map((jam3ya) =>
//       jam3ya.id === updatedjam3ya.id ? response.data : jam3ya
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// deletejam3ya = async (id) => {
//   try {
//     await axios.delete(
//       `https://coded-miniproject-jam3ya-be.herokuapp.com/jam3ya/${jam3yaId}`
//     );
//     this.Jam3yat = this.Jam3yat.filter((jam3ya) => jam3ya.id !== id);
//   } catch (error) {
//     console.log(error);
//   }
// };

// availablejam3ya = async () => {
//   try {
//     const response = await axios.get(
//       "https://coded-miniproject-jam3ya-be.herokuapp.com/jam3ya"
//     );
//     this.jam3ya = response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3yat();
export default jam3yaStore;
