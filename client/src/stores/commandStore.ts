import type {
  commandState,
  commandT,
  dataRowT,
  dataRowsT,
  newCommandT,
  updateCommandT,
} from "@/types";
import axios from "axios";
import { defineStore } from "pinia";

const api: string = "http://localhost:3111/command/";

export const useCommandStore = defineStore("CommandStore", {
  state: (): commandState => {
    return {
      commands: [],
      command: null,
    };
  },
  actions: {
    getAllCommands: async function () {
      const res: dataRowsT<commandT> = await axios.get(api);
      this.commands = res.data.rows;
    },
    createOneCommand: async function (Command: newCommandT) {
      const res: dataRowT<commandT> = await axios.post(api, {
        data: {
          Command,
        },
      });
      if (res.data.row) {
        this.getAllCommands();
      }
    },
    updateOneCommand: async function (id: number, Command: updateCommandT) {
      const res: dataRowT<commandT> = await axios.put(api + id, {
        data: {
          Command,
        },
      });
      this.commands.map((pro) => {
        if (pro.id === res.data.row.id) pro = res.data.row;
      });
    },
    deleteOneCommand: async function (id: number) {
      const res: dataRowT<number> = await axios.delete(api + id);
      if (res.data.row) {
        this.commands.splice(
          this.commands.findIndex((pr) => pr.id === id),
          1
        );
      }
    },
    deleteOneCommandItem: async function (id: number) {
      const res: dataRowT<number> = await axios.delete(api + "item/" + id);
      if (res.data.row) {
        // const commandIndex = this.commands.findIndex(
        //   (pr) => pr.id === commandId
        // );
        // const commandItemIndex = this.commands[
        //   commandIndex
        // ].commandItems?.findIndex((ct) => ct.id == id);
        // this.commands[commandIndex].commandItems?.splice(commandItemIndex, 1);
      }
    },
  },
});
