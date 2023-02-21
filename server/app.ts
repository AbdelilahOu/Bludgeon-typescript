import { commandRoute } from "./routes/commandRoute";
import { invoiceRoute } from "./routes/invoiceRoute";
import { productRoute } from "./routes/productRoute";
import { clientRoute } from "./routes/clientRoute";
import { sellerRoute } from "./routes/sellerRoute";
import { stockRoute } from "./routes/stockRoute";
import { crediRoute } from "./routes/crediRoute";
import { Application } from "express";
import * as express from "express";
import * as cors from "cors";

export class expressServer {
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
    this.app.use("/invoice", invoiceRoute);
    this.app.use("/client", clientRoute);
    this.app.use("/vendor", sellerRoute);
    this.app.use("/stock", stockRoute);
    this.app.use("/credi", crediRoute);
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
