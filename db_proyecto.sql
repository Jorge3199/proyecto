-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-03-2020 a las 16:52:31
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
(1, 'jorge', 'hidalgo', 'M', '2020-03-12', 'La Vega', '8295562856', 'nose', 'supergato3199@gmail.com', '$2a$10$sgD4YWJzGyYyl4vFg2eioe.IXwOO4NAo56zZH5rlXdMBIxLseF13S', 'fb7f5edc-8f69-4cf7-892f-c054f5652495.jpg', 0.44888609791216316);

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
  `id_administrador` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `nombre`, `apellido`, `sexo`, `nacimiento`, `direccion`, `telefono`, `cedula`, `correo`, `contrasena`, `imagen`, `aleatorio`, `id_administrador`) VALUES
(1, 'jose', 'reyes', 'M', '2020-03-07', 'La Vega', '8295562856', 'nose', 'motocrossdominicano@gmail.com', '$2a$10$qMxWsiIwKQX6qogHhwINeO/XJkIWa6YP1hNVUwTxPxysxWOLwBn8G', '4ed1f0be-f7ec-4757-a6c8-cff6d63d1b38.jpg', 0.6173399965914237, 1);

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
(3, 'carburador 28mm', '4d3d9f96-9dc7-4d11-81db-79928225761b.jpg', 350, 1, '20', 'A', 1, '2020-03-18 15:04:30'),
(4, 'carburador', '983061be-d78c-4b0a-b1f2-b80da6771e0d.jpg', 300, 3, '25', 'A', 1, '2020-03-18 15:06:27'),
(5, 'muffer racing', '6d72a69c-bfd8-492f-8012-74e2703683bd.jpg', 1200, 1, '17', 'A', 1, '2020-03-18 15:07:29'),
(6, 'piston racing', 'ee1d01a4-f3fa-4bac-84b4-4edd99f12560.jpg', 250, 4, '70', 'A', 1, '2020-03-18 15:09:04'),
(7, 'biela', 'a2139258-ff80-4db4-9766-f3a731b9e266.jpg', 110, 5, '100', 'A', 1, '2020-03-18 15:11:50'),
(8, 'centro clutch', '0e35c663-f6ec-4bbb-bb5a-86016eaa4d20.jpg', 225, 6, '80', 'A', 1, '2020-03-18 15:13:29'),
(9, 'manecilla', 'a6abf86b-4f5e-409e-887c-12385f721daa.jpg', 110, 3, '125', 'A', 1, '2020-03-18 15:14:31'),
(10, 'rayos cg 150/200 ref', '1321be15-307d-4cc4-aa07-479994e7bb1c.jpg', 100, 1, '200', 'A', 1, '2020-03-18 15:16:26'),
(11, 'aros racing', 'bcb7e1ac-feaa-410e-b10d-d933ecb8b291.jpg', 750, 7, '15', 'A', 1, '2020-03-18 15:18:48'),
(12, 'asiento delantero', '2b57c917-170a-46de-98ce-e5fdff4c1542.jpg', 250, 2, '25', 'A', 1, '2020-03-18 15:20:17'),
(13, 'farol stop', 'f2e9bb90-a9a0-45ed-b039-656ed6f290a1.jpg', 30, 2, '100', 'A', 1, '2020-03-18 15:21:17'),
(14, 'canasto de pasola', '398acb33-6be8-4490-9d23-98c67681eacb.jpg', 150, 8, '50', 'A', 1, '2020-03-18 15:22:25');

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
('8-vh0NjjwzcloA7YSJz9VjikpnHHVR2v', 1584631641, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":1}}'),
('FB-IVmAVWNVt2pC4N1eP2ZwuaOWL1tp0', 1584555645, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{}}'),
('W1w0Tm9GTeHZOGgrjn_uhDSbY0In0HOE', 1584629706, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}');

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
  ADD UNIQUE KEY `id_producto` (`id_producto`),
  ADD KEY `id_cliente` (`id_cliente`) USING BTREE;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalle`
--
ALTER TABLE `detalle`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `favorito`
--
ALTER TABLE `favorito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
