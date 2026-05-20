CREATE TABLE `content_posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`summary` text NOT NULL,
	`content` text NOT NULL,
	`category` enum('ai_tools','internships','opportunities','earning_methods','trending_skills','resources') NOT NULL,
	`imageUrl` varchar(500),
	`imageKey` varchar(500),
	`sourceUrl` varchar(500),
	`tags` text,
	`status` enum('draft','scheduled','published','archived') NOT NULL DEFAULT 'draft',
	`publishedAt` timestamp,
	`scheduledFor` timestamp,
	`createdBy` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `content_posts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `content_schedules` (
	`id` int AUTO_INCREMENT NOT NULL,
	`weekNumber` int NOT NULL,
	`year` int NOT NULL,
	`scheduledDate` timestamp NOT NULL,
	`status` enum('pending','researching','generating','ready','published','failed') NOT NULL DEFAULT 'pending',
	`researchTopics` text,
	`postsGenerated` int DEFAULT 0,
	`errorLog` text,
	`completedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `content_schedules_id` PRIMARY KEY(`id`)
);
