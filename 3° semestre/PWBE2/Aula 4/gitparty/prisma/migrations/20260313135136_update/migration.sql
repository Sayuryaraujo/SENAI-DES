/*
  Warnings:

  - Made the column `eventosId` on table `inscricoes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `usuarioId` on table `inscricoes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `inscricoes` DROP FOREIGN KEY `Inscricoes_eventosId_fkey`;

-- DropForeignKey
ALTER TABLE `inscricoes` DROP FOREIGN KEY `Inscricoes_usuarioId_fkey`;

-- DropIndex
DROP INDEX `Inscricoes_eventosId_fkey` ON `inscricoes`;

-- DropIndex
DROP INDEX `Inscricoes_usuarioId_fkey` ON `inscricoes`;

-- AlterTable
ALTER TABLE `inscricoes` MODIFY `data_inscricao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `eventosId` INTEGER NOT NULL,
    MODIFY `usuarioId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Inscricoes` ADD CONSTRAINT `Inscricoes_eventosId_fkey` FOREIGN KEY (`eventosId`) REFERENCES `Eventos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscricoes` ADD CONSTRAINT `Inscricoes_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
