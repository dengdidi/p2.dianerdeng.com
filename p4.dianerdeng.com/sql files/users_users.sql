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
-- Table structure for table `users_users`
--

CREATE TABLE IF NOT EXISTS `users_users` (
  `user_user_id` int(11) NOT NULL AUTO_INCREMENT,
  `created` int(11) NOT NULL,
  `user_id` int(11) NOT NULL COMMENT 'FK. Follower.',
  `user_id_followed` int(11) NOT NULL COMMENT 'Followed.',
  PRIMARY KEY (`user_user_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=23 ;

--
-- Dumping data for table `users_users`
--

INSERT INTO `users_users` (`user_user_id`, `created`, `user_id`, `user_id_followed`) VALUES
(1, 1387254543, 2, 1),
(2, 1387254545, 2, 2),
(3, 1387671197, 3, 3),
(4, 1387671197, 3, 2),
(5, 1387671198, 3, 1),
(6, 1387681938, 2, 3),
(7, 1387745568, 4, 1),
(8, 1387745570, 4, 2),
(9, 1387745571, 4, 3),
(10, 1387745572, 4, 4),
(11, 1387751183, 5, 1),
(12, 1387751184, 5, 2),
(13, 1387751185, 5, 3),
(14, 1387751186, 5, 4),
(16, 1387753578, 5, 5),
(17, 1387765126, 6, 1),
(18, 1387765127, 6, 2),
(19, 1387765128, 6, 3),
(20, 1387765130, 6, 4),
(21, 1387765132, 6, 6),
(22, 1387765135, 6, 16);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
