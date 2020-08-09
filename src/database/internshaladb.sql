-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2020 at 06:34 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `internshaladb`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `res_id` int(50) NOT NULL,
  `item_id` int(50) NOT NULL,
  `item_name` varchar(50) NOT NULL,
  `item_price` int(8) NOT NULL,
  `item_qty` varchar(20) NOT NULL,
  `item_type` varchar(20) NOT NULL,
  `item_create_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`res_id`, `item_id`, `item_name`, `item_price`, `item_qty`, `item_type`, `item_create_time`) VALUES
(19, 57, 'chawal daal', 200, 'full', 'Veg', '2020-08-04 09:13:41'),
(19, 58, 'chicken tandori', 200, 'half', 'Nonveg', '2020-08-04 09:14:12'),
(19, 59, 'chicken tikka', 300, 'half', 'Nonveg', '2020-08-04 09:14:30'),
(19, 60, 'chicken kabbab', 300, 'half', 'Nonveg', '2020-08-04 09:14:41'),
(19, 61, 'chicken kabbab', 250, '4', 'Nonveg', '2020-08-04 09:14:55'),
(25, 62, 'chawal daal', 250, 'full', 'Nonveg', '2020-08-04 10:24:05'),
(25, 63, 'chicken kadhai', 250, '4 pieces', 'Nonveg', '2020-08-04 10:25:29'),
(25, 64, 'chicken tikka', 250, '4 pieces', 'Nonveg', '2020-08-04 10:25:38'),
(25, 65, 'chicken tandori', 250, '4 pieces', 'Nonveg', '2020-08-04 10:25:49'),
(25, 66, 'Butter chicken ', 250, 'half', 'Nonveg', '2020-08-04 10:26:15'),
(25, 67, 'kali mirch chicken ', 250, 'half', 'Nonveg', '2020-08-04 10:26:34'),
(25, 68, 'handi butter chicken ', 250, 'half', 'Nonveg', '2020-08-04 10:26:48'),
(25, 69, 'Curry chicken ', 250, 'half', 'Nonveg', '2020-08-04 10:26:56'),
(25, 70, 'Shahi paneer', 250, 'half', 'Nonveg', '2020-08-04 10:27:51'),
(25, 71, 'Butter paneer', 250, 'half', 'Nonveg', '2020-08-04 10:28:02'),
(20, 72, 'chawal daal', 300, 'full', 'Veg', '2020-08-04 10:31:04'),
(20, 73, 'shahi paneer', 400, 'full', 'Veg', '2020-08-04 10:31:27'),
(20, 74, 'kadhai paneer', 300, 'full', 'Veg', '2020-08-04 10:31:41'),
(20, 75, 'Matar paneer', 300, 'full', 'Veg', '2020-08-04 10:32:01'),
(20, 76, 'Butter chicken ', 300, '4 pieces', 'Nonveg', '2020-08-04 10:32:31'),
(20, 77, 'Kadhai chicken ', 300, '4 pieces', 'Nonveg', '2020-08-04 10:32:42'),
(20, 78, 'Curry chicken ', 250, '4 pieces', 'Nonveg', '2020-08-04 10:32:58'),
(20, 79, 'Chicken Tikka', 250, '4 pieces', 'Nonveg', '2020-08-04 10:33:26'),
(20, 80, 'Chicken Tandori', 250, '2 pieces', 'Nonveg', '2020-08-04 10:33:40'),
(30, 81, 'chawal daal', 300, 'full', 'Veg', '2020-08-04 10:38:01'),
(30, 82, 'Chicken kabaab', 300, 'full', 'Nonveg', '2020-08-04 10:38:27'),
(30, 83, 'Chicken tikka', 250, 'half', 'Nonveg', '2020-08-04 10:38:54'),
(30, 84, 'Chicken tandori', 250, 'half', 'Nonveg', '2020-08-04 10:39:04'),
(30, 85, 'Butter Chicken', 250, 'half', 'Nonveg', '2020-08-04 10:39:16'),
(30, 86, 'Kadhai Chicken', 250, 'half', 'Nonveg', '2020-08-04 10:39:27'),
(30, 87, 'Kali Mirch Chicken', 250, 'half', 'Nonveg', '2020-08-04 10:39:41'),
(30, 88, 'PaneerTikka', 250, 'half', 'Nonveg', '2020-08-04 10:40:02'),
(30, 89, 'Paneer Mashal', 250, 'half', 'Nonveg', '2020-08-04 10:40:19'),
(30, 90, 'Kadhai Paneer', 250, 'half', 'Nonveg', '2020-08-04 10:40:31'),
(30, 91, 'Shahi Paneer', 250, 'half', 'Nonveg', '2020-08-04 10:40:47'),
(21, 92, 'chawal daal', 200, 'full', 'Veg', '2020-08-04 10:52:16'),
(21, 93, 'Chicken Tikka', 200, '4 pieces', 'Nonveg', '2020-08-04 10:52:59'),
(21, 94, 'Chicken Tandori', 200, '4 pieces', 'Nonveg', '2020-08-04 10:53:11'),
(21, 95, 'Chicken Kabbab', 200, '4 pieces', 'Nonveg', '2020-08-04 10:53:28'),
(21, 96, 'Butter Chicken ', 200, '4 pieces', 'Nonveg', '2020-08-04 10:53:39'),
(21, 97, 'Kadhai Chicken ', 200, '4 pieces', 'Nonveg', '2020-08-04 10:53:55'),
(21, 98, 'Curry Chicken ', 200, '4 pieces', 'Nonveg', '2020-08-04 10:54:13'),
(22, 99, 'chawal daal', 250, 'full', 'Veg', '2020-08-04 10:56:09'),
(22, 100, 'Paneer Tikka', 250, 'full', 'Veg', '2020-08-04 10:56:30'),
(22, 101, 'Shahi paneer', 250, 'half', 'Veg', '2020-08-04 10:56:55'),
(22, 102, 'Kadhai paneer', 250, 'half', 'Veg', '2020-08-04 10:57:05'),
(22, 103, 'Curry chicken', 250, 'half', 'Veg', '2020-08-04 10:57:21'),
(22, 104, 'Curry chicken', 250, 'half', 'Nonveg', '2020-08-04 10:57:25'),
(22, 105, 'Butter chicken', 250, 'half', 'Nonveg', '2020-08-04 10:57:36'),
(22, 106, 'Kadhai chicken', 250, 'half', 'Nonveg', '2020-08-04 10:57:47'),
(22, 107, 'Chicken Tikka', 200, 'half', 'Nonveg', '2020-08-04 10:58:16'),
(22, 108, 'Chicken Tandori', 200, 'half', 'Nonveg', '2020-08-04 10:58:39'),
(23, 109, 'chawal daal', 300, 'full', 'Veg', '2020-08-04 11:02:32'),
(23, 110, 'Kadhai paneer', 300, 'Half', 'Nonveg', '2020-08-04 11:03:02'),
(23, 111, 'Shahi paneer', 300, 'Half', 'Nonveg', '2020-08-04 11:03:16'),
(23, 112, 'Matar paneer', 300, 'Half', 'Nonveg', '2020-08-04 11:03:26'),
(23, 113, 'Butter chicken', 300, 'Half', 'Nonveg', '2020-08-04 11:03:42'),
(23, 114, 'Chicken Tikka', 300, 'Half', 'Nonveg', '2020-08-04 11:04:03'),
(23, 115, 'Chicken Kabbab', 300, 'Half', 'Nonveg', '2020-08-04 11:04:19'),
(23, 116, 'Chicken Tandori', 300, 'Half', 'Nonveg', '2020-08-04 11:04:30'),
(23, 117, 'Sahi Chicken', 300, 'Half', 'Nonveg', '2020-08-04 11:04:41'),
(26, 118, 'chawal daal', 200, 'full', 'Veg', '2020-08-04 11:10:50'),
(26, 119, 'Kadhai Chicken', 200, 'full', 'Veg', '2020-08-04 11:11:05'),
(26, 120, 'Sahi Chicken', 200, 'Full', 'Veg', '2020-08-04 11:11:29'),
(26, 121, 'Sahi Chicken', 200, 'Half', 'Veg', '2020-08-04 11:11:39'),
(26, 122, 'Curry Chicken', 200, 'Half', 'Nonveg', '2020-08-04 11:11:58'),
(26, 123, 'Chicken Tikka', 200, 'Half', 'Nonveg', '2020-08-04 11:12:14'),
(26, 124, 'Chicken Mashal', 200, 'Half', 'Nonveg', '2020-08-04 11:12:28'),
(27, 125, 'chawal daal', 400, 'Full', 'Veg', '2020-08-04 11:14:53'),
(27, 126, 'Kadhai paneer', 400, 'Full', 'Veg', '2020-08-04 11:15:08'),
(27, 127, 'Sahi paneer', 400, 'Full', 'Veg', '2020-08-04 11:15:19'),
(27, 128, ' paneer Tikka', 400, 'Full', 'Veg', '2020-08-04 11:15:33'),
(27, 129, ' paneer Mashal', 400, 'Full', 'Veg', '2020-08-04 11:15:42'),
(27, 130, 'Chola  paneer', 400, 'Full', 'Veg', '2020-08-04 11:15:58'),
(27, 131, 'paneer', 400, 'Full', 'Veg', '2020-08-04 11:16:07'),
(28, 132, 'chawal daal', 300, 'Full', 'Veg', '2020-08-04 11:17:26'),
(28, 133, 'Kadhai Paneer', 300, 'Full', 'Veg', '2020-08-04 11:17:41'),
(28, 134, 'Shahi Paneer', 300, 'Full', 'Veg', '2020-08-04 11:17:56'),
(28, 135, 'Mattar Paneer', 300, 'Full', 'Veg', '2020-08-04 11:18:05'),
(28, 136, 'Chola Paneer', 300, 'Full', 'Veg', '2020-08-04 11:18:11'),
(28, 137, 'Butter Paneer', 300, 'Full', 'Veg', '2020-08-04 11:18:21'),
(28, 138, 'Aalu Paneer', 300, 'Full', 'Veg', '2020-08-04 11:18:33'),
(28, 139, 'Paneer Tikka', 300, 'Full', 'Veg', '2020-08-04 11:18:46'),
(28, 140, 'Chicken Tikka', 300, 'Full', 'Nonveg', '2020-08-04 11:19:09'),
(28, 141, 'Chicken Tandori', 300, 'Full', 'Nonveg', '2020-08-04 11:19:21'),
(28, 142, 'Butter Chicken', 300, 'Full', 'Nonveg', '2020-08-04 11:19:39'),
(28, 143, 'Shai Chicken', 300, 'Full', 'Nonveg', '2020-08-04 11:19:52'),
(28, 144, 'Butter Chicken', 300, 'Full', 'Nonveg', '2020-08-04 11:20:03'),
(28, 145, 'Curry Chicken', 300, 'Full', 'Nonveg', '2020-08-04 11:20:11'),
(29, 146, 'chawal daal', 450, 'Full', 'Veg', '2020-08-04 11:23:25'),
(29, 147, 'Shahi Paneer ', 450, 'Half', 'Veg', '2020-08-04 11:23:43'),
(29, 148, 'Butter Paneer ', 450, 'Half', 'Veg', '2020-08-04 11:23:50'),
(29, 149, 'Kadhai Paneer ', 450, 'Half', 'Veg', '2020-08-04 11:23:58'),
(29, 150, 'Paneer Tikka', 450, 'Half', 'Veg', '2020-08-04 11:24:10'),
(29, 151, 'Paneer Mashala', 450, 'Half', 'Veg', '2020-08-04 11:24:21'),
(29, 152, 'Paneer Mashala', 450, 'Half', 'Veg', '2020-08-04 11:24:21'),
(29, 153, 'Paneer Tikka', 450, 'Half', 'Veg', '2020-08-04 11:25:39'),
(29, 154, 'Chicken Tikka', 450, 'Half', 'Veg', '2020-08-04 11:26:00'),
(29, 155, 'Chicken Tandor', 450, 'Half', 'Veg', '2020-08-04 11:26:04'),
(29, 156, 'Chicken Tandori', 450, 'Half', 'Veg', '2020-08-04 11:26:08'),
(29, 157, 'Butter Chicken ', 450, 'Half', 'Veg', '2020-08-04 11:26:24'),
(29, 158, 'Kadhai Chicken ', 450, 'Half', 'Veg', '2020-08-04 11:26:32'),
(29, 159, 'Curry Chicken ', 450, 'Half', 'Veg', '2020-08-04 11:26:39'),
(29, 160, 'Special Chicken ', 450, 'Half', 'Veg', '2020-08-04 11:26:46'),
(29, 161, 'Special Paneer ', 450, 'Half', 'Veg', '2020-08-04 11:26:53'),
(29, 162, 'Thali Half ', 450, 'Half', 'Veg', '2020-08-04 11:27:11'),
(29, 163, 'Thali  ', 450, 'Full', 'Veg', '2020-08-04 11:27:24'),
(31, 164, 'chawal daal', 500, 'Full', 'Veg', '2020-08-04 11:29:47'),
(31, 165, 'Kadhai Paneer', 500, 'Full', 'Veg', '2020-08-04 11:30:02'),
(31, 166, 'Curry Paneer', 500, 'Full', 'Veg', '2020-08-04 11:30:10'),
(31, 167, 'Sahi Paneer', 500, 'Full', 'Veg', '2020-08-04 11:30:15'),
(31, 168, 'Special Paneer', 500, 'Full', 'Veg', '2020-08-04 11:30:31'),
(31, 169, 'Paneer Butter', 500, 'Full', 'Veg', '2020-08-04 11:30:52'),
(31, 170, 'Paneer Tikka', 500, 'Full', 'Veg', '2020-08-04 11:30:58'),
(33, 171, 'chawal daal', 200, 'Full', 'Veg', '2020-08-07 08:32:39'),
(33, 172, 'chawal daal', 12, 'Full', 'Veg', '2020-08-07 08:52:36'),
(33, 173, 'chawal daal', 12, 'Full', 'Nonveg', '2020-08-07 08:54:41'),
(33, 174, 'chawal daal', 25, '2', 'Veg', '2020-08-07 08:55:41'),
(33, 175, 'chawal daal', 123, 'Full', 'Nonveg', '2020-08-07 10:36:34'),
(33, 176, 'chawal daal', 123, 'Full', 'Veg', '2020-08-07 10:49:28'),
(33, 177, 'chawal daal', 123, 'Full', 'Veg', '2020-08-07 10:51:28'),
(34, 181, 'chawal daal', 300, 'Full', 'Veg', '2020-08-08 19:41:05'),
(34, 182, 'chawal daal', 200, 'Full', 'Veg', '2020-08-08 20:27:33'),
(19, 183, 'kashamiri polaw', 500, 'Full', 'Veg', '2020-08-08 22:26:59'),
(34, 184, 'Sahi paneer', 400, 'Full', 'Veg', '2020-08-09 09:46:11'),
(19, 185, 'kashamiri polaw', 500, 'Full', 'Veg', '2020-08-09 09:48:44');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `register_as_a` varchar(20) NOT NULL,
  `order_id` int(20) NOT NULL,
  `order_no` int(30) NOT NULL,
  `cus_id` int(20) NOT NULL,
  `res_id` int(20) NOT NULL,
  `item_id` int(20) NOT NULL,
  `order_create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`register_as_a`, `order_id`, `order_no`, `cus_id`, `res_id`, `item_id`, `order_create_time`) VALUES
('Customer', 187, 2147483647, 43, 20, 72, '2020-08-04 06:18:28'),
('Customer', 188, 2147483647, 43, 20, 73, '2020-08-04 06:18:36'),
('Customer', 200, 2147483647, 43, 34, 181, '2020-08-08 16:37:15'),
('Customer', 201, 2147483647, 43, 34, 181, '2020-08-08 16:39:17'),
('Customer', 202, 2147483647, 43, 34, 181, '2020-08-08 16:40:09'),
('Customer', 203, 2147483647, 43, 34, 181, '2020-08-08 16:42:05'),
('Customer', 204, 2147483647, 43, 20, 74, '2020-08-08 16:42:59'),
('Customer', 205, 2147483647, 43, 34, 182, '2020-08-08 16:47:24'),
('Customer', 206, 2147483647, 43, 34, 181, '2020-08-08 16:50:13'),
('Customer', 207, 2147483647, 43, 34, 181, '2020-08-08 16:55:07'),
('Customer', 208, 2147483647, 43, 34, 182, '2020-08-09 04:12:16'),
('Customer', 209, 2147483647, 43, 20, 78, '2020-08-09 04:13:04');

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `register_as_a` varchar(20) NOT NULL,
  `res_id` int(20) NOT NULL,
  `res_name` text NOT NULL,
  `res_email` varchar(50) NOT NULL,
  `res_pass` text NOT NULL,
  `res_location` text NOT NULL,
  `res_about` text NOT NULL,
  `res_percost` int(8) NOT NULL,
  `res_mindelivery` int(5) NOT NULL,
  `res_rating` float NOT NULL,
  `res_paymode` varchar(20) NOT NULL,
  `res_dishtype` varchar(20) NOT NULL,
  `res_create_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`register_as_a`, `res_id`, `res_name`, `res_email`, `res_pass`, `res_location`, `res_about`, `res_percost`, `res_mindelivery`, `res_rating`, `res_paymode`, `res_dishtype`, `res_create_time`) VALUES
('Restaurant', 19, 'Zomato', 'zomato@gmail.com', '$2y$10$X94tWRuM9rH0JqzaLZG7Xe4BSxJxc9F.vgZIZ4B9oIUl2cWgjc/7K', 'noida', '(August 2019) Zomato is an Indian restaurant aggregator and food delivery start up founded by Deepinder Goyal and Pankaj Chaddah in 2008. Zomato provides information, menus and user-reviews of restaur', 100, 50, 4.6, 'Cash and Online', 'Veg and Nonveg', '2020-08-04 09:12:08'),
('Restaurant', 20, 'Uber Eats', 'ubereats@gmail.com', '$2y$10$qXdBZcoDZ/NjD/r7diUd3O0vbC1m92aGv1w6tYJp024Q/dV9AnX.e', 'Delhi', 'Uber Eats is an American online food ordering and delivery platform launched by Uber in 2014 and based in San Francisco, California.', 200, 40, 4, 'Cash and Online', 'Veg and Nonveg', '2020-08-04 09:44:34'),
('Restaurant', 21, 'Swiggy', 'swiggy@gmail.com', '$2y$10$6US8B9YhUhxaMEwzo1GvXONcu5kl7jQA85OEEIAdkwvOf8gEe0qTa', 'Noida', 'Swiggy is India\'s largest and most valuable online food ordering and delivery platform. Founded in 2014, Swiggy is based out of Bangalore, India and, as of March 2019, was operating out of 100 Indian cities. In early 2019, Swiggy expanded into general product deliveries, under the brand name Swiggy Stores.', 250, 50, 4, 'Cash and Online', 'Veg and Nonveg', '2020-08-04 09:55:22'),
('Restaurant', 22, 'Fassos', 'fassos@gmail.com', '$2y$10$g/kzvEXe3/Tbhzh5gBzUv.pLK8ECHM4BsVIn6/uhtgOKVHU4gH8RO', 'Delhi', 'Faasos has managed to seamlessly integrate the technology with the physical process of bringing the food to a consumers doorstep Eat Good  Eat Safe', 250, 50, 4, 'Cash and Online', 'Veg and Nonveg', '2020-08-04 10:03:39'),
('Restaurant', 23, 'Bikanervala', 'bikanervala@gmail.com', '$2y$10$dRCgrU3OlmCF9/qCg8ZaPONaULCwztELtEEDoDdPNU9Ujjh/nnPCW', 'Delhi', 'Faasos has managed to seamlessly integrate the technology with the physical process of bringing the food to a consumer doorstep. Eat Good Eat Safe.', 250, 50, 4.2, 'Cash and Online', 'Veg and Nonveg', '2020-08-04 10:09:22'),
('Restaurant', 25, 'Desi Vibes', 'desivibes@gmail.com', '$2y$10$XPnUzaroLyWVRzWg4qeeLeFoYr3kkM3yjuDn0IezHM7cVYZLPuEty', 'Delhi', 'zomato has managed to seamlessly integrate the technology with the physical process of bringing the food to a consumer doorstep. Eat Good Eat Safe.', 250, 50, 4.2, 'Cash and Online', 'Veg and Nonveg', '2020-08-04 10:11:19'),
('Restaurant', 26, 'Bercos Noida', 'bercosnoida@gmail.com', '$2y$10$txXlVAVr87aLXt70xuag6Oz/NxSaEkn/qkinTp2Kg5t9Ve9LpcXdm', 'Noida', 'Bercos Noida has managed to seamlessly integrate the technology with the physical process of bringing the food to a consumer doorstep. Eat Good Eat Safe.', 250, 50, 4.2, 'Cash and Online', 'Veg and Nonveg', '2020-08-04 10:12:39'),
('Restaurant', 27, 'Punjabi By Nature', 'punjabibynature@gmail.com', '$2y$10$hB5y.8Fok8pinYcdjpYANeVR1Rct35zWvEe0zl1KEong3lSJKjRSe', 'Delhi', 'Punjabi By Naturehas managed to seamlessly integrate the technology with the physical process of bringing the food to a consumer doorstep. Eat Good Eat Safe.', 200, 100, 4.2, 'Cash and Online', 'Veg and Nonveg', '2020-08-04 10:14:12'),
('Restaurant', 28, 'Mainland China', 'mainlandchina@gmail.com', '$2y$10$wzpgz.VbuA47jXte/VQaz.wgLp/vFpHEf29eGMWW4dBIG59EdKn3W', 'Delhi', 'Mainland China managed to seamlessly integrate the technology with the physical process of bringing the food to a consumer doorstep. Eat Good Eat Safe.', 200, 100, 4.2, 'Cash and Online', 'Veg and Nonveg', '2020-08-04 10:14:51'),
('Restaurant', 29, 'Pind Balluchi', 'pindballuchi@gmail.com', '$2y$10$TCyYuerpLetzjgDbsaLWrew8cgyQFRQ6rLVvFYy1SPefUGgjwMH0W', 'Delhi', 'Pind Balluchi managed to seamlessly integrate the technology with the physical process of bringing the food to a consumer doorstep. Eat Good Eat Safe.', 200, 100, 4.2, 'Cash and Online', 'Veg and Nonveg', '2020-08-04 10:15:30'),
('Restaurant', 30, 'Tawak', 'tawak@gmail.com', '$2y$10$WubYDoX4Be4wIOSuD4x4hOcxSO/Kh1psfM2WeSzQtNByHdMuGi0gK', 'Delhi', 'Tawak managed to seamlessly integrate the technology with the physical process of bringing the food to a consumer doorstep. Eat Good Eat Safe.', 300, 150, 4.2, 'Cash and Online', 'Veg and Nonveg', '2020-08-04 10:16:07'),
('Restaurant', 31, 'Doosri Mehfil', 'doosrimehfil@gmail.com', '$2y$10$b.Y3NFnCEbFyBKjcYteZne5lLLOPwEo8iNEUkCC.cl9nNC4bQZwlu', 'Noida', 'Doosri Mehfil managed to seamlessly integrate the technology with the physical process of bringing the food to a consumer doorstep. Eat Good Eat Safe.', 350, 150, 4.2, 'Cash and Online', 'Veg and Nonveg', '2020-08-04 10:16:57'),
('Restaurant', 33, 'Hotel Sunrise', 'abcd4@gmail.com', '$2y$10$Lnk7ay1Bjp/XmGH4G28UY.E.r1BsiEjljeW/EaS/jQqYTAI/seBEK', 'noida', 'Faasos has managed to seamlessly integrate the technology with the physical process of bringing the food to a consumers doorstep Eat Good  Eat Safe', 123, 200, 7, 'Cash', 'Nonveg', '2020-08-09 09:54:10'),
('Restaurant', 34, 'Chawala', 'chawala@gmail.com', '$2y$10$AOVAK8/yq8Vbvt6NP8hoy.vcpezhTEcas5F9VzqfazSXjsl5u8CN.', 'Delhi', 'Chawala managed to seamlessly integrate the technology with the physical process of bringing the food to a consumer doorstep. Eat Good Eat Safe.', 500, 100, 4.5, 'Cash and Online', 'Veg and Nonveg', '2020-08-08 16:41:52');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `register_as_a` varchar(20) NOT NULL,
  `cus_id` int(20) NOT NULL,
  `cus_name` varchar(50) NOT NULL,
  `cus_email` varchar(50) NOT NULL,
  `cus_pass` text NOT NULL,
  `cus_dish_type` varchar(50) NOT NULL,
  `cus_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`register_as_a`, `cus_id`, `cus_name`, `cus_email`, `cus_pass`, `cus_dish_type`, `cus_time`) VALUES
('Customer', 43, 'Hello World', 'helloworld@gmail.com', '$2y$10$qyZndnZ3zNH6z9tqqrHgE.Qydi3eaD4NKx.1Hpiw5W6WVoi2dUr2.', 'Veg and Nonveg', '2020-08-04 11:46:24'),
('Customer', 44, 'abcd ', 'abcd@gmail.com', '$2y$10$u2ZlEXhp1Ix3r05hvqiE/eaZQ0Skh1cfSFSFHW0zswuJoxGVCmH8K', 'Veg and Nonveg', '2020-08-05 17:50:40'),
('Customer', 45, 'helllo world', 'abcd11@gmail.com', '$2y$10$m0Lo2PuYzPrhsNsYc63HeOtcqWe4wPSLq3AniiC/svO8.K09jW6qG', 'Nonveg', '2020-08-07 08:21:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`res_id`),
  ADD UNIQUE KEY `res_email` (`res_email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`cus_id`),
  ADD UNIQUE KEY `cus_email` (`cus_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `item_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=186;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=210;

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `res_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `cus_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
