import { defineStore } from "pinia";
import { store } from "./index";

export const NAMELIST = [
    ["Aaberg", "repeat", "I'm the Repeat Man."],
    ["Beyen", "reverse", "I'm the Reverse Man."],
    ["Deven"],
    ["Elya"],
    ["Fania"]
]

interface MockState {
  data: {
    username: string;
    sessionId: string;
    lastUpdateAt: string;
  }[];
}

export const useMockStore = defineStore({
  id: "mock",
  state: (): MockState => ({
    data: [],
  }),
  getters: {},
  actions: {
    fetchData() {
      this.data = new Array(NAMELIST.length).fill(0).map((_, i) => ({
        username: NAMELIST[i][0],
        sessionId: `SK28NP${i + 1}`,
        lastUpdateAt: new Date(
          new Date().getTime() - Math.floor(Math.random() * 360000 + 360000 * i)
        ).toLocaleString(),
      }));
      return [...this.data]
    },
    findUserById(id?: string) {
      if (this.data.length < 0 || !id) return null;
      else return this.data.find((e) => e.sessionId === id);
    }
  },
});

export const useMockStoreWithOut = () => {
  return useMockStore(store);
};
