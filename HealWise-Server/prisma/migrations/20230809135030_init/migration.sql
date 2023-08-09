-- CreateTable
CREATE TABLE "Address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientId" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "dwellingType" TEXT,
    CONSTRAINT "Address_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Patient" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "enrollmentNumber" TEXT NOT NULL,
    "phone" TEXT,
    "courses" TEXT,
    "classe" TEXT,
    "healthPlan" TEXT,
    "guardianName" TEXT,
    "guardianPhone" TEXT,
    "weight" DECIMAL,
    "height" DECIMAL,
    "bloodType" TEXT,
    "gender" TEXT,
    "susCardNumber" TEXT NOT NULL,
    "regime" TEXT
);

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_patient_1" ON "Patient"("cpf");
Pragma writable_schema=0;
