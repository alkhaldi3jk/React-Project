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
      console.log(res.data);
      this.jam3yat = res.data;
    } catch (error) {
      console.error("Jam3yatStore -> fetchjam3yat -> error", error);
    }
  };
  // joinJam3ya = async (jam3ya, jam3yaId) => {
  //   try {
  //      await api.post(`/jam3ya/join/${jam3yaId}`, jam3ya);
   
  //     this.jam3yat= this.jam3yat.push((user) =>{ jam3ya.limit !==jam3yaId
     
  //   }
  //     );
  //   } catch (error) {
  //     console.log(" join", error);
  //   }
  // };
  deleteJam3ya = async (jam3yaId) => {
    try {
      await api.delete(`/jam3ya/${jam3yaId}`);

      this.jam3yat = this.jam3yat.filter((jam3ya) => jam3ya._id !== jam3yaId);
    } catch (error) {
      console.log(error);
    }
  };

  updateJam3ya = async (jam3yaId,updatedjam3ya) => {
    try {
      const response = await api.put(`/jam3ya/${jam3yaId}`, updatedjam3ya);
      this.jam3yat.map((jam3ya) =>
        jam3ya._id === updatedjam3ya.id ? response.data : jam3ya
      );
    } catch (error) {
      console.log(error);
    }
  };
}

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
