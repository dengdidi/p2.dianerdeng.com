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
-- Table structure for table `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `created` int(11) NOT NULL,
  `modified` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`post_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `created`, `modified`, `user_id`, `content`) VALUES
(1, 1387245548, 1387245548, 1, 'how you like them coupons?'),
(2, 1387246627, 1387246627, 1, 'Any good deals @ CVS with ECB this week in the 12/15 SS?'),
(3, 1387247554, 1387247554, 1, '<3 Coupons! '),
(4, 1387252805, 1387252805, 2, 'Children''s Advil $3.99 @ CVS but CVS exclusive coupon for $3 off, OOP = 99cents!'),
(5, 1387255431, 1387255431, 3, 'Sale on Blue Bunny @ PetSmart BOGO @ 12.99$/bag'),
(6, 1387671180, 1387671180, 3, 'Can''t wait for SS tmrw!!'),
(7, 1387765121, 1387765121, 6, 'BOGO @ SHAWS on Bertoli Pasta, Use 11/2 SS coupon for $.50 off plus double');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
