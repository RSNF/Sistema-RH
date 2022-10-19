-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "vagas_id" TEXT,
    "created_at" DATETIME,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "Vagas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "objetivos" TEXT NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "usuariosId" TEXT NOT NULL,
    CONSTRAINT "Vagas_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Candidatos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "vagas_id" TEXT,
    "created_at" DATETIME,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "_CandidatosToVagas" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CandidatosToVagas_A_fkey" FOREIGN KEY ("A") REFERENCES "Candidatos" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CandidatosToVagas_B_fkey" FOREIGN KEY ("B") REFERENCES "Vagas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_slug_key" ON "Usuarios"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- CreateIndex
CREATE INDEX "Usuarios_slug_idx" ON "Usuarios"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Vagas_slug_key" ON "Vagas"("slug");

-- CreateIndex
CREATE INDEX "Vagas_slug_idx" ON "Vagas"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Candidatos_slug_key" ON "Candidatos"("slug");

-- CreateIndex
CREATE INDEX "Candidatos_slug_idx" ON "Candidatos"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_CandidatosToVagas_AB_unique" ON "_CandidatosToVagas"("A", "B");

-- CreateIndex
CREATE INDEX "_CandidatosToVagas_B_index" ON "_CandidatosToVagas"("B");
