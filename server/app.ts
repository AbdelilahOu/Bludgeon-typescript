import { Application } from "express";
import * as express from "express";
import * as cors from "cors";
import { clientRoute } from "./api/client-route";
import { commandRoute } from "./api/command-route";
import { stockRoute } from "./api/stock-route";
import { productRoute } from "./api/product-route";

export default class expressServer {
  public app: Application;
  public server: any;

  constructor(app: Application) {
    this.app = app;
  }

  run() {
    this.app.use(cors({ origin: "*" }));
    this.app.use(express.json());
    this.app.use("/product", productRoute);
    this.app.use("/command", commandRoute);
    this.app.use("/client", clientRoute);
    this.app.use("/stock", stockRoute);
    this.server = this.app.listen(3111 || process.env.PORT, () => {
      console.log(`server is running on port ${3111}`);
    });
  }

  close() {
    this.server.close((err: any) => {
      if (err) console.log(err);
    });
  }
}

const sth = new expressServer(express());

sth.run();
