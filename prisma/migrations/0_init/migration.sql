-- CreateTable
CREATE TABLE "endereco" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idCliente" INTEGER NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "tipoMoradia" INTEGER,
    CONSTRAINT "endereco_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "paciente" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "nMatricola" INTEGER NOT NULL,
    "telefone" TEXT,
    "curs" TEXT,
    "turma" TEXT,
    "planoSaude" TEXT,
    "nomeResponsavel" TEXT,
    "telefoneResponsavel" TEXT,
    "peso" DECIMAL,
    "altura" DECIMAL,
    "tipoSanguineo" TEXT,
    "sexo" TEXT,
    "nSus" INTEGER NOT NULL
);

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_paciente_1" ON "paciente"("cpf");
Pragma writable_schema=0;

