-- CreateTable
CREATE TABLE "Vagas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "objetivos" TEXT NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "vagas_id" TEXT,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    CONSTRAINT "Users_vagas_id_fkey" FOREIGN KEY ("vagas_id") REFERENCES "Vagas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Vagas_slug_key" ON "Vagas"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Users_slug_key" ON "Users"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE INDEX "Users_email_idx" ON "Users"("email");
