-- CreateTable
CREATE TABLE "learning" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "hour" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "learning_pkey" PRIMARY KEY ("id")
);
