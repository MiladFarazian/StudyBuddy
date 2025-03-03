/*
  Warnings:

  - You are about to drop the column `transcriptURL` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "transcriptURL",
ADD COLUMN     "transcriptUrl" TEXT;
