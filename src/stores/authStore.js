
import { makeObservable, observable, action } from "mobx";
import api from "./api";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeObservable(this, {
      user: observable,
      signin:action,
      signup:action,
      logout:action
    });
  }

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  
  signup = async (userData) => {
      try {
        const response = await api.post(`/signup`, userData);
        this.setUser(response.data.token);
      } catch (error) {
        console.log(error);
      }
    };

    signin = async (userData) => {
      try {
        const response = await api.post(`/signin`, userData);
        this.setUser(response.data.token);
      } catch (error) {
        console.log(error);
      }
    };
    
  // logging = async (userData, path) => {
  //   try {
  //     const response = await api.post(`/${path}`, userData);
  //     this.setUser(response.data.token);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  logout = () => {
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };

  checkForToken = () => {
    // this.user = null
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now(); // give us the current time
      let tempUser = decode(token);
      if (tempUser.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;