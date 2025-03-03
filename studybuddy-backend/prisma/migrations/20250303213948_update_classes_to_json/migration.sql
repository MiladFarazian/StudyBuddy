/*
  Warnings:

  - You are about to drop the column `transcript` on the `User` table. All the data in the column will be lost.
  - Changed the type of `classes` on the `Preferences` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Preferences" DROP COLUMN "classes",
ADD COLUMN     "classes" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "transcript",
ADD COLUMN     "transcriptURL" TEXT;
