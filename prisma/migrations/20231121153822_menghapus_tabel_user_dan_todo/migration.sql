/*
  Warnings:

  - You are about to drop the `todo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `todo` DROP FOREIGN KEY `todo_userId_fkey`;

-- DropTable
DROP TABLE `todo`;

-- DropTable
DROP TABLE `users`;
