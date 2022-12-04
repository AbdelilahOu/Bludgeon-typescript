-- CreateTable
CREATE TABLE "accounts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "c_name" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "command" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_client" INTEGER NOT NULL,
    "command_date" DATETIME NOT NULL,
    "command_delivery" DATETIME NOT NULL,
    CONSTRAINT "command_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "client" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "commandLine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_command" INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,
    "product_quantity" INTEGER NOT NULL,
    CONSTRAINT "commandLine_id_command_fkey" FOREIGN KEY ("id_command") REFERENCES "command" ("id") ON DELETE CASCADE ON UPDATE NO ACTION,
    CONSTRAINT "commandLine_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "product" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "commandLineCredi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_credi" INTEGER NOT NULL,
    "product_quantity" INTEGER NOT NULL,
    "p_name" TEXT NOT NULL,
    "unite" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    CONSTRAINT "commandLineCredi_id_credi_fkey" FOREIGN KEY ("id_credi") REFERENCES "credi" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "credi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_client" INTEGER NOT NULL,
    "c_name" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "id_command" INTEGER NOT NULL,
    "command_date" DATETIME NOT NULL,
    "command_delivery" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "unpaid" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "p_name" TEXT NOT NULL,
    "unite" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "stock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_product" INTEGER NOT NULL,
    "initiale_quantity" INTEGER NOT NULL,
    "sold_quantity" INTEGER NOT NULL,
    "min_quantity" INTEGER NOT NULL,
    CONSTRAINT "stock_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "product" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_product_1" ON "product"("p_name");
Pragma writable_schema=0;

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_stock_1" ON "stock"("id_product");
Pragma writable_schema=0;
