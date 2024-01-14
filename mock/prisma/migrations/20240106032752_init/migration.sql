-- CreateTable
CREATE TABLE `Api` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `endpoint` VARCHAR(191) NOT NULL,
    `value` JSON NOT NULL,
    `settings` JSON NOT NULL,

    UNIQUE INDEX `Api_endpoint_key`(`endpoint`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
