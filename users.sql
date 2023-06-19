-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 28, 2022 at 11:11 AM
-- Server version: 5.7.39-cll-lve
-- PHP Version: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zhaacademy`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `user_type` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `user_type`, `password`, `status`) VALUES
(0, 'Test User 2', '1234@gmail.com', 'user', '827ccb0eea8a706c4c34a16891f84e7b', 'v'),
(0, 'Test Editor 1', '12@gmail.com', 'editor', '827ccb0eea8a706c4c34a16891f84e7b', 'u'),
(0, 'Test Editor 2', '1@gmail.com', 'editor', '827ccb0eea8a706c4c34a16891f84e7b', 'v'),
(0, 'PJ', 'pareshpre808@gmail.com', 'user', '827ccb0eea8a706c4c34a16891f84e7b', ''),
(0, 'Preetraj', 'preetrajhaldar2002@gmail.com', 'admin', '827ccb0eea8a706c4c34a16891f84e7b', ''),
(0, 'Test User 1', 'qwe@gmail.com', 'user', '827ccb0eea8a706c4c34a16891f84e7b', 'u');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
