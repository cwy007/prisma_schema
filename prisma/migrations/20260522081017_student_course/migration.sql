/*
  Warnings:

  - You are about to drop the `_CourseToStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_CourseToStudent` DROP FOREIGN KEY `_CourseToStudent_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CourseToStudent` DROP FOREIGN KEY `_CourseToStudent_B_fkey`;

-- DropTable
DROP TABLE `_CourseToStudent`;
