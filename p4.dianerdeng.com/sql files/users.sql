-- phpMyAdmin SQL Dump
-- version 3.5.8.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 22, 2013 at 09:59 PM
-- Server version: 5.1.68-cll
-- PHP Version: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dianerde_p4_dianerdeng_com`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `created` int(11) NOT NULL,
  `modified` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `last_login` int(11) NOT NULL,
  `timezone` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=29 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `created`, `modified`, `token`, `password`, `last_login`, `timezone`, `first_name`, `last_name`, `email`) VALUES
(1, 1387069441, 1387069441, '3b1246044731af649b47ae2932712102425a6bb5', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', 0, '', 'Jody', 'Jones', 'couponingmom@yahoo.com'),
(2, 1387342052, 1387342052, 'a417a7989f5567d7b2c682194bcad775eeddf52d', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', 0, '', 'Sally', 'Saver', 'ss123@gmail.com'),
(3, 1387671045, 1387671045, '518e05b48096d4615f86ce59eb3d3eae65a98ccf', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', 0, '', 'Edy', 'Iceecream', 'Yummy@test.com'),
(4, 1387745542, 1387745542, 'b08684f7dc5acc720ecf92b00921065916498bfc', '5ddc2ae17d5b13b4e5b3215177685116565f5058', 0, '', 'Debbie', 'Cakes', 'cake@cake.com'),
(6, 1387757568, 1387757568, '65e9fd711d4cf4d559de833a67988a35a72398e8', 'f72de4661ed81f2724a4e7ff99bb9c7c21337286', 0, '', 'Taylor', 'Swift', 'swift@coupon.com'),
(16, 1387763171, 1387763171, 'd54f58c89cf4ed37dfd4f6e756d105c8d48f1616', '137b76741daa4cda3f9fec645c8a2ee39fbdda84', 0, '', 'Samuel', 'Savealots', 'save@save.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
