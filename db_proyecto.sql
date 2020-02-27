-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-02-2020 a las 15:54:00
-- Versión del servidor: 10.1.40-MariaDB
-- Versión de PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id` int(11) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) DEFAULT NULL,
  `sexo` varchar(1) DEFAULT NULL,
  `nacimiento` date DEFAULT NULL,
  `direccion` varchar(20) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `aleatorio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id`, `usuario`, `contrasena`, `nombre`, `apellido`, `sexo`, `nacimiento`, `direccion`, `telefono`, `correo`, `aleatorio`) VALUES
(18, 'jorge', '$2a$10$rSAf622EGMUKgHgx0OsIWOUJhKT6fD.lcRxGN591nulpRb1Bl9GnC', 'jorge', 'hidalgo', 'M', '1999-01-31', 'La Vega', '8295562856', 'supergato3199@gmail.com', 0.967122649420584),
(19, 'yamile', '$2a$10$umz9K7Mj8ogGJ5DuP7kWj.iUTipbkcVkO5X2fkx7IFaVzcuAZ1Oz.', 'yamile', 'basora', 'F', '1999-01-31', 'La Vega', '8295562856', 'jorgehidalgo399@hotmail.com', 0.6911525590911856);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `id_administrador` int(50) NOT NULL,
  `modelo` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `id_administrador`, `modelo`) VALUES
(1, 18, 'Motor 125cc'),
(2, 18, 'pasola');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `usuario` varchar(16) NOT NULL,
  `contrasena` varchar(60) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `sexo` varchar(1) DEFAULT NULL,
  `nacimiento` date NOT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `telefono` varchar(10) NOT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `favorito` varchar(1000) NOT NULL,
  `aleatorio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `usuario`, `contrasena`, `nombre`, `apellido`, `sexo`, `nacimiento`, `direccion`, `telefono`, `correo`, `favorito`, `aleatorio`) VALUES
(6, 'jorge23', '$2a$10$knV4mJatmUgozoXcJgW7x.aNsk/8E2/1AXE/./tKWxLdcbgVfpk6i', 'jorge', 'hidalgo', 'M', '2020-01-10', 'La Vega', '8295562856', 'jorgehidalgo3199@hotmail.com', '', 0.3142707462126526);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favorito`
--

CREATE TABLE `favorito` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `favorito`
--

INSERT INTO `favorito` (`id`, `id_cliente`, `id_producto`) VALUES
(2, 6, 4),
(3, 6, 1),
(4, 6, 2),
(5, 6, 12),
(6, 6, 1),
(7, 6, 3),
(8, 6, 3),
(9, 6, 1),
(10, 6, 4),
(11, 6, 8),
(12, 6, 1),
(13, 6, 15),
(14, 6, 17),
(15, 6, 14),
(16, 6, 2),
(17, 6, 1),
(18, 6, 1),
(19, 6, 12),
(20, 6, 17),
(21, 6, 15),
(22, 6, 1),
(23, 6, 2),
(24, 6, 1),
(25, 6, 2),
(26, 6, 1),
(27, 6, 15),
(28, 6, 17),
(29, 6, 14),
(30, 6, 2),
(31, 6, 12),
(32, 6, 12),
(33, 6, 17),
(34, 6, 3),
(35, 6, 1),
(36, 6, 4),
(37, 6, 12),
(38, 6, 12),
(39, 6, 4),
(40, 6, 12),
(41, 6, 17),
(42, 6, 2),
(43, 6, 1),
(44, 6, 4),
(45, 6, 4),
(46, 6, 1),
(47, 6, 4),
(48, 6, 12),
(49, 6, 12),
(50, 6, 12),
(51, 6, 1),
(52, 6, 4),
(53, 6, 3),
(54, 6, 17),
(55, 6, 10),
(56, 6, 9),
(57, 6, 8),
(59, 6, 8),
(60, 6, 11),
(61, 6, 4),
(62, 6, 10),
(63, 6, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `precio` varchar(20) DEFAULT NULL,
  `modelo` varchar(50) NOT NULL,
  `cantidad` varchar(20) NOT NULL,
  `estado` varchar(1) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `imagen`, `precio`, `modelo`, `cantidad`, `estado`, `user_id`, `created_at`) VALUES
(1, 'aceite motul', '0db720af-f509-419e-816d-db1900b9f3c4.jpg', '350', 'Motor 125cc', '30', 'A', NULL, '2019-10-27 23:24:34'),
(2, 'motor', '86615b77-822e-41ba-9e10-585e9ecd2029.jpg', '500', 'Motor 125cc', '16', 'A', NULL, '2019-10-29 14:22:01'),
(3, 'puño', '20a9c501-2a8b-4519-8442-b296fb224ee0.png', '100', 'Motor 125cc', '12', 'A', NULL, '2019-10-29 14:22:38'),
(4, 'mofler gato', 'fa57cd66-75d2-43e9-8bbd-5e5bea5bbf05.jpg', '1500', 'Motor 125cc', '14', 'A', NULL, '2019-10-29 21:08:15'),
(5, 'culata 90cc', 'b275417f-7124-43b1-97f7-c87f5ad599d4.jpg', '1500', 'Motor 125cc', '40', 'A', NULL, '2019-10-29 21:55:21'),
(6, 'culata 90cc', '92b8161a-b19b-42d3-8fdb-f90beb98ccbc.png', '1500', 'Motor 125cc', '21', 'A', NULL, '2019-11-03 13:34:07'),
(7, 'culata', '92b8161a-b19b-42d3-8fdb-f90beb98ccbc.png', '400', 'Motor 125cc', '6', 'A', NULL, '2019-11-03 13:34:07'),
(8, 'culata 90cc', '28ebefe0-97ab-4c56-a090-428cd37d0337.png', '1500', 'Motor 125cc', '14', 'A', NULL, '2019-11-03 13:35:37'),
(9, 'culata', '92b8161a-b19b-42d3-8fdb-f90beb98ccbc.png', '300', 'Motor 125cc', '17', 'A', NULL, '2019-11-03 13:35:37'),
(10, 'culata 90cc', '92b8161a-b19b-42d3-8fdb-f90beb98ccbc.png', '1500', 'Motor 125cc', '11', 'A', NULL, '2019-11-03 13:36:45'),
(11, 'culata 90cc', 'a80692b0-cdc0-4a68-9f05-dd6777344f5f.jpg', '500', 'Motor 125cc', '7', 'A', NULL, '2019-11-03 13:36:45'),
(12, 'motor 350', '4c92f712-cdc2-4db0-8b0a-560110851162.jpg', '6000', 'Motor 125cc', '25', 'A', NULL, '2019-11-03 13:39:31'),
(13, 'jh', '', '100', 'Motor 125cc', '2', 'I', NULL, '2019-11-07 18:12:05'),
(14, 'motor', '0cf9b3f7-5e98-4b48-9fdb-b0cba971be51.jpg', '150', 'Motor 125cc', '13', 'A', NULL, '2019-11-09 15:05:53'),
(15, 'jorge', '2066196a-d642-4b79-8802-d387e9a802b8.jpg', '200', 'Motor 125cc', '5', 'A', NULL, '2019-11-13 22:39:46'),
(16, 'guardalogo gris osc.', '3025fc67-520c-436b-bd6e-913936f23457.jpg', '800', 'Motor 125cc', '5', 'I', NULL, '2020-01-20 14:31:53'),
(17, 'GUARDALODOS', '9ebcca88-e5d4-4956-a33b-cabd9895062b.jpg', '3000', 'Motor 125cc', '2', 'A', NULL, '2020-02-05 22:25:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('1bunkzR9GVdZAKoRvwlhgej8cCqrE4lD', 1582127660, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{}}'),
('7mO8FlWg1NLkvQMV9fxi-ySfR7_mdACH', 1582209893, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{\"error\":[\"¡ Flash está de vuelta! \",\"¡ Flash está de vuelta! \",\"¡ Flash está de vuelta! \"]},\"passport\":{}}'),
('FhqVNPVPfjBYYMHosNdjLJOMAmgU-nqf', 1582199837, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('NtU4gXDdI1waX6ajjlHDSYgw2eWVZ2zb', 1582207405, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{}}'),
('ftHEvgUW8NE5sLlDmjdRi9jGhU2wSyiC', 1582144729, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":18}}');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `favorito`
--
ALTER TABLE `favorito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cliente` (`id_cliente`),
  ADD KEY `fk_producto` (`id_producto`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user` (`user_id`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `favorito`
--
ALTER TABLE `favorito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `favorito`
--
ALTER TABLE `favorito`
  ADD CONSTRAINT `fk_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`),
  ADD CONSTRAINT `fk_producto` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `administrador` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
