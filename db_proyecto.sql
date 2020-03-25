-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-03-2020 a las 16:11:11
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
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) DEFAULT NULL,
  `sexo` varchar(1) DEFAULT NULL,
  `nacimiento` date DEFAULT NULL,
  `direccion` varchar(20) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `cedula` varchar(15) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `contrasena` varchar(100) NOT NULL,
  `imagen` varchar(50) DEFAULT NULL,
  `aleatorio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id`, `nombre`, `apellido`, `sexo`, `nacimiento`, `direccion`, `telefono`, `cedula`, `correo`, `contrasena`, `imagen`, `aleatorio`) VALUES
(1, 'jorge', 'hidalgo', 'M', '2020-03-12', 'La Vega', '8295562856', 'nose', 'supergato3199@gmail.com', '$2a$10$sgD4YWJzGyYyl4vFg2eioe.IXwOO4NAo56zZH5rlXdMBIxLseF13S', 'fb7f5edc-8f69-4cf7-892f-c054f5652495.jpg', 0.5599567701051424);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `id_administrador` int(50) NOT NULL,
  `modelo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `id_administrador`, `modelo`) VALUES
(1, 1, 'CG'),
(2, 1, 'C70'),
(3, 1, 'RX115'),
(4, 1, 'JOG 50'),
(5, 1, 'enduro 125'),
(6, 1, '110'),
(7, 1, 'axis 90'),
(8, 1, 'pasola');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `sexo` varchar(1) DEFAULT NULL,
  `nacimiento` date NOT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `telefono` varchar(10) NOT NULL,
  `cedula` varchar(16) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `contrasena` varchar(60) NOT NULL,
  `imagen` varchar(50) DEFAULT NULL,
  `aleatorio` double NOT NULL,
  `estado1` varchar(1) DEFAULT NULL,
  `id_administrador` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `nombre`, `apellido`, `sexo`, `nacimiento`, `direccion`, `telefono`, `cedula`, `correo`, `contrasena`, `imagen`, `aleatorio`, `estado1`, `id_administrador`) VALUES
(1, 'jose', 'reyes', 'M', '2020-03-07', 'La Vega', '8295562856', '402-3807340-5', 'motocrossdominicano@gmail.com', '$2a$10$qMxWsiIwKQX6qogHhwINeO/XJkIWa6YP1hNVUwTxPxysxWOLwBn8G', '4ed1f0be-f7ec-4757-a6c8-cff6d63d1b38.jpg', 0.2670476528067196, 'I', 1),
(2, 'ana maria', 'hidalgo', 'F', '2020-03-13', 'La Vega', '8295562856', 'nose', 'jorgehidalgo3199@hotmail.com', '$2a$10$BcZ5lQ0YJucpVhP2E4qym.1GktBkqzfsoHTSBiY.C0rx0EJcfKYBC', 'e893dde9-d48a-4ba7-94c8-3b73a3fc19b0.jpg', 0.2897566953085724, 'A', 1),
(3, 'ana', 'restituyo', 'M', '2020-03-13', 'La Vega', '8295562856', 'nose', 'supergato3199@gmail.com', '$2a$10$x18DwgEm/K7HrW15YAzpVuksRyl6qaZRl9RULyS4NUp/Ql0qYOwUG', '35410492-c418-4ca8-bab7-8d4b21e80e9e.jpg', 0.16277945696878882, 'A', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `id` int(10) NOT NULL,
  `id_cliente` int(10) DEFAULT NULL,
  `total` int(10) DEFAULT NULL,
  `fecha_hora` varchar(50) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`id`, `id_cliente`, `total`, `fecha_hora`, `estado`) VALUES
(1, 1, 460, '18-3-2020 14:49:59', 'D'),
(2, 1, 460, '18-3-2020 15:2:40', 'P'),
(3, 1, 430, '18-3-2020 15:3:39', 'D'),
(4, 1, 335, '18-3-2020 15:6:56', 'P'),
(5, 1, 750, '18-3-2020 15:9:0', 'P'),
(6, 2, 350, '20-3-2020 14:55:58', 'P'),
(7, 3, 150, '20-3-2020 15:0:36', 'P'),
(8, 3, 100, '20-3-2020 18:26:59', 'P'),
(9, 3, 100, '21-3-2020 8:56:41', 'P'),
(10, 3, 700, '21-3-2020 9:7:7', 'D'),
(11, 3, 400, '25-3-2020 9:36:33', 'P');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle`
--

CREATE TABLE `detalle` (
  `id` int(10) NOT NULL,
  `id_cliente` int(10) DEFAULT NULL,
  `id_producto` int(10) DEFAULT NULL,
  `unidad` int(50) DEFAULT NULL,
  `precio` int(50) DEFAULT NULL,
  `importe` int(50) DEFAULT NULL,
  `fecha_hora` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `detalle`
--

INSERT INTO `detalle` (`id`, `id_cliente`, `id_producto`, `unidad`, `precio`, `importe`, `fecha_hora`) VALUES
(1, 1, 14, 1, 150, 150, '18-3-2020 14:49:59'),
(2, 1, 13, 2, 30, 60, '18-3-2020 14:49:59'),
(3, 1, 12, 1, 250, 250, '18-3-2020 14:49:59'),
(5, 1, 14, 1, 150, 150, '18-3-2020 15:2:40'),
(6, 1, 13, 2, 30, 60, '18-3-2020 15:2:40'),
(7, 1, 12, 1, 250, 250, '18-3-2020 15:2:40'),
(8, 1, 7, 1, 110, 110, '18-3-2020 15:3:39'),
(9, 1, 10, 1, 100, 100, '18-3-2020 15:3:39'),
(10, 1, 9, 2, 110, 220, '18-3-2020 15:3:39'),
(11, 1, 7, 1, 110, 110, '18-3-2020 15:6:56'),
(12, 1, 8, 1, 225, 225, '18-3-2020 15:6:56'),
(13, 1, 11, 1, 750, 750, '18-3-2020 15:9:0'),
(14, 2, 10, 2, 100, 200, '20-3-2020 14:55:58'),
(15, 2, 14, 1, 150, 150, '20-3-2020 14:55:58'),
(16, 3, 14, 1, 150, 150, '20-3-2020 15:0:36'),
(17, 3, 10, 1, 100, 100, '20-3-2020 18:26:59'),
(18, 3, 10, 1, 100, 100, '21-3-2020 8:56:41'),
(19, 3, 3, 2, 350, 700, '21-3-2020 9:7:7'),
(20, 3, 10, 1, 100, 100, '25-3-2020 9:36:33'),
(21, 3, 14, 2, 150, 300, '25-3-2020 9:36:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favorito`
--

CREATE TABLE `favorito` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `favorito`
--

INSERT INTO `favorito` (`id`, `id_cliente`, `id_producto`, `estado`) VALUES
(1, 1, 14, 'A'),
(2, 1, 13, 'A'),
(3, 3, 5, 'A'),
(4, 3, 6, 'A'),
(5, 3, 10, 'A'),
(6, 3, 14, 'A'),
(7, 3, 9, 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `precio` int(20) DEFAULT NULL,
  `id_modelo` int(10) DEFAULT NULL,
  `cantidad` varchar(20) NOT NULL,
  `estado` varchar(1) NOT NULL,
  `id_administrador` int(10) DEFAULT NULL,
  `fecha_hora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `imagen`, `precio`, `id_modelo`, `cantidad`, `estado`, `id_administrador`, `fecha_hora`) VALUES
(1, 'cubo para campana', 'cf01ce75-f647-4f23-be7c-b083534c11d1.jpg', 100, 1, '40', 'A', 1, '2020-03-18 15:02:18'),
(2, 'tornillo del tiempo', '971c731c-abfd-4231-b591-e55408fc1aa9.jpg', 15, 2, '50', 'A', 1, '2020-03-18 15:03:22'),
(3, 'carburador 28mm', '4d3d9f96-9dc7-4d11-81db-79928225761b.jpg', 350, 1, '18', 'A', 1, '2020-03-18 15:04:30'),
(4, 'carburador', '983061be-d78c-4b0a-b1f2-b80da6771e0d.jpg', 300, 3, '25', 'A', 1, '2020-03-18 15:06:27'),
(5, 'muffer racing', '6d72a69c-bfd8-492f-8012-74e2703683bd.jpg', 1200, 1, '17', 'A', 1, '2020-03-18 15:07:29'),
(6, 'piston racing', 'ee1d01a4-f3fa-4bac-84b4-4edd99f12560.jpg', 250, 4, '70', 'A', 1, '2020-03-18 15:09:04'),
(7, 'biela', 'a2139258-ff80-4db4-9766-f3a731b9e266.jpg', 110, 5, '98', 'A', 1, '2020-03-18 15:11:50'),
(8, 'centro clutch', '0e35c663-f6ec-4bbb-bb5a-86016eaa4d20.jpg', 225, 6, '79', 'A', 1, '2020-03-18 15:13:29'),
(9, 'manecilla', 'a6abf86b-4f5e-409e-887c-12385f721daa.jpg', 110, 3, '123', 'A', 1, '2020-03-18 15:14:31'),
(10, 'rayos cg 150/200 ref', '1321be15-307d-4cc4-aa07-479994e7bb1c.jpg', 100, 1, '194', 'A', 1, '2020-03-18 15:16:26'),
(11, 'aros racing', 'bcb7e1ac-feaa-410e-b10d-d933ecb8b291.jpg', 750, 7, '14', 'I', 1, '2020-03-18 15:18:48'),
(12, 'asiento delantero', '2b57c917-170a-46de-98ce-e5fdff4c1542.jpg', 250, 2, '23', 'I', 1, '2020-03-18 15:20:17'),
(13, 'farol stop', 'f2e9bb90-a9a0-45ed-b039-656ed6f290a1.jpg', 30, 2, '96', 'I', 1, '2020-03-18 15:21:17'),
(14, 'canasto de pasola', '398acb33-6be8-4490-9d23-98c67681eacb.jpg', 150, 8, '43', 'A', 1, '2020-03-18 15:22:25');

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
('YKBFqbJQK-J4ZusD2C4PhE0Chq2W8rw9', 1585169380, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":3}}'),
('hA_lCDiWVFcmlfUn6fn7dfhpzMSOFPmA', 1585234496, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":3}}');

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_administrador` (`id_administrador`) USING BTREE;

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_administrador` (`id_administrador`) USING BTREE;

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cliente` (`id_cliente`) USING BTREE;

--
-- Indices de la tabla `detalle`
--
ALTER TABLE `detalle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cliente` (`id_cliente`) USING BTREE,
  ADD KEY `id_producto` (`id_producto`) USING BTREE;

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
  ADD KEY `id_modelo` (`id_modelo`),
  ADD KEY `fk_administrador` (`id_administrador`) USING BTREE;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `detalle`
--
ALTER TABLE `detalle`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `favorito`
--
ALTER TABLE `favorito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD CONSTRAINT `categoria_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `administrador` (`id`);

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `administrador` (`id`);

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`);

--
-- Filtros para la tabla `detalle`
--
ALTER TABLE `detalle`
  ADD CONSTRAINT `detalle_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`),
  ADD CONSTRAINT `detalle_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

--
-- Filtros para la tabla `favorito`
--
ALTER TABLE `favorito`
  ADD CONSTRAINT `favorito_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`),
  ADD CONSTRAINT `favorito_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `administrador` (`id`),
  ADD CONSTRAINT `producto_ibfk_2` FOREIGN KEY (`id_modelo`) REFERENCES `categoria` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
