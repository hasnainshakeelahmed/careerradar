CREATE TABLE `donations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`donorName` varchar(255) NOT NULL,
	`donorEmail` varchar(320),
	`amount` decimal(10,2) NOT NULL,
	`currency` varchar(10) NOT NULL DEFAULT 'USD',
	`paymentMethod` enum('easypaisa','nayapay','raast','binance','payoneer','other') NOT NULL,
	`transactionId` varchar(255),
	`status` enum('pending','completed','failed','refunded') NOT NULL DEFAULT 'pending',
	`message` text,
	`isAnonymous` boolean DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `donations_id` PRIMARY KEY(`id`),
	CONSTRAINT `donations_transactionId_unique` UNIQUE(`transactionId`)
);
