-- MySQL dump 10.13  Distrib 8.0.33, for macos13.3 (arm64)
--
-- Host: localhost    Database: invoices
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `link` varchar(150) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoices`
--

LOCK TABLES `invoices` WRITE;
/*!40000 ALTER TABLE `invoices` DISABLE KEYS */;
INSERT INTO `invoices` VALUES (2,'gmail.com','test@db.dk'),(3,'hotmail.com','test@db.dk'),(4,'https://rr-pdf-bucket.s3.amazonaws.com/66d6981b-e380-444d-aa85-91ab6f399c0b.pdf','test@example.com'),(5,'https://rr-pdf-bucket.s3.amazonaws.com/4d8637aa-9ed5-44b1-982a-f677cdfded5f.pdf','admin@pdfinvoice.dk'),(8,'https://rr-pdf-bucket.s3.amazonaws.com/a5dd3efe-d29f-4ca8-ab2f-9e398017a950','admin@pdfinvoice.dk'),(9,'https://rr-pdf-bucket.s3.amazonaws.com/7adbfc16-b456-4041-ad99-11b0d4345293.pdf','admin@pdfinvoice.dk'),(10,'https://rr-pdf-bucket.s3.amazonaws.com/eb8a0e44-66eb-4ef7-963e-2902013a8962.pdf','customer@pdfinvoice.dk'),(11,'https://rr-pdf-bucket.s3.amazonaws.com/7883f1af-8421-4ab1-971a-574664e799c9.pdf','customer@pdfinvoice.dk'),(12,'https://rr-pdf-bucket.s3.amazonaws.com/349aa865-7431-4787-a5e1-176f1db318fe.pdf','customer@pdfinvoice.dk'),(13,'https://rr-pdf-bucket.s3.amazonaws.com/2dddc07e-e932-4a88-967c-ac4ade8f60f1.pdf','customer@pdfinvoice.dk'),(14,'https://rr-pdf-bucket.s3.amazonaws.com/91d5fd70-07e1-4811-b6b4-3d763a2e452d.pdf','null');
/*!40000 ALTER TABLE `invoices` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-28 17:12:48
