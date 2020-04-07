-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-04-2020 a las 17:55:18
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
  `nacimiento` varchar(10) DEFAULT NULL,
  `direccion` varchar(20) DEFAULT NULL,
  `telefono` varchar(14) DEFAULT NULL,
  `cedula` varchar(13) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `contrasena` varchar(100) NOT NULL,
  `imagen` varchar(50) DEFAULT NULL,
  `fecha_hora` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `aleatorio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id`, `nombre`, `apellido`, `sexo`, `nacimiento`, `direccion`, `telefono`, `cedula`, `correo`, `contrasena`, `imagen`, `fecha_hora`, `aleatorio`) VALUES
(1, 'jorge', 'hidalgo', 'M', '2020-03-08', 'La Vega', '(829) 556-2856', '402-4566765-5', 'supergato3199@gmail.com', '$2a$10$L5GIrFAob/i72UWZJliYYusguaLNRNZq7QWZ56c6LFNkpw0eOL7Ay', 'b0281bf8-70d6-4b3a-952d-55416c2b0eea.jpg', '2020-04-05 21:19:23', 0.5599567701051424);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `id_administrador` int(50) NOT NULL,
  `modelo` varchar(50) DEFAULT NULL,
  `fecha_hora` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `id_administrador`, `modelo`, `fecha_hora`) VALUES
(1, 1, 'CG', '2020-04-05 21:16:33'),
(2, 1, 'C70', '2020-04-05 21:16:33'),
(3, 1, 'RX115', '2020-04-05 21:16:33'),
(4, 1, 'JOG 50', '2020-04-05 21:16:33'),
(5, 1, 'enduro 125', '2020-04-05 21:16:33'),
(6, 1, '110', '2020-04-05 21:16:33'),
(7, 1, 'axis 90', '2020-04-05 21:16:33'),
(8, 1, 'pasola', '2020-04-05 21:16:33'),
(9, 1, 'AX', '2020-04-05 21:16:33'),
(10, 1, 'CG200', '2020-04-05 21:16:33'),
(11, 1, 'protector', '2020-04-05 21:16:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `sexo` varchar(1) DEFAULT NULL,
  `nacimiento` varchar(10) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `telefono` varchar(14) NOT NULL,
  `cedula` varchar(13) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `contrasena` varchar(60) NOT NULL,
  `imagen` varchar(50) DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `aleatorio` double NOT NULL,
  `estado1` varchar(1) DEFAULT NULL,
  `id_administrador` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `nombre`, `apellido`, `sexo`, `nacimiento`, `direccion`, `telefono`, `cedula`, `correo`, `contrasena`, `imagen`, `fecha`, `aleatorio`, `estado1`, `id_administrador`) VALUES
(1, 'jose', 'reyes', 'M', '2020-03-14', 'La Vega', '(829) 745-3426', '402-3807340-5', 'motocrossdominicano@gmail.com', '$2a$10$qMxWsiIwKQX6qogHhwINeO/XJkIWa6YP1hNVUwTxPxysxWOLwBn8G', '4ed1f0be-f7ec-4757-a6c8-cff6d63d1b38.jpg', '2020-04-05 21:18:13', 0.2670476528067196, 'A', 1),
(2, 'ana maria', 'hidalgo', 'F', '2020-03-12', 'La Vega', '(829) 526-2856', '403-4545753-2', 'jorgehidalgo3199@hotmail.com', '$2a$10$dCa2sPHq836UTGuqrAz/7O/TE3wwFiWNqRp/DjrplDbBsyv9cOmWW', 'e893dde9-d48a-4ba7-94c8-3b73a3fc19b0.jpg', '2020-04-05 21:18:13', 0.2897566953085724, 'A', 1),
(3, 'ana', 'restituyo', 'M', '2020-03-11', 'La Vega', '(829) 556-2856', '402-5684658-5', 'supergato3199@gmail.com', '$2a$10$.FskbIv0OWD8icy8Gx3f4euzPDXnBeLcXkBqs1EL5sFP9oW0b6o/y', '36a7a409-528c-4793-aa01-0f9ed0e40e88.jpg', '2020-04-05 21:18:13', 0.7411070463248057, 'A', 1),
(4, 'yamile', 'basora', 'F', '2020-03-07', 'La Vega', '(849) 732-8745', '403-4545457-5', 'yamilebasora@hotmail.com', '$2a$10$35U1LPyiZLWlKSaqdgB26ONR/snHB.po0s2ypyQt5fAUJbZroP9Qq', '8615ee82-dd37-4e2d-85dc-163eff377d0d.jpg', '2020-04-05 21:18:13', 0.7048001067932705, 'A', 1),
(5, 'rudy', 'hidalgo', 'M', '2020-03-10', 'La Vega', '(829) 584-2495', '403-4655457-5', 'rudyhidalgo@gmail.com', '$2a$10$vSc5exjPl3f8PuwcEXY9KuBeRxPfFbwiVBDeBHN/SsGvIYyFDl7Zu', 'perfil.jpg', '2020-04-05 21:18:13', 0.4889670504028736, 'I', 1),
(6, 'jorge', 'hidalgo', 'M', '2020-04-01', 'La Vega', '(829) 556-2876', '403-4545495-7', 'jorgehidalgo31099@hotmail.com', '$2a$10$dq9ONWmz/jj7VRZt1MH3k.Ejy3mNNXu8mvn1GaAYJMAR2PfMH/K1u', '377d6eaa-da50-4072-9407-ab19c66e2d6d.jpg', '2020-04-05 21:18:13', 0.6489941905172476, 'A', 1),
(7, 'juana', 'perez', 'F', '2020-04-01', 'La Vega', '(829) 556-2851', '403-4544575-2', 'juanaperez@gmail.com', '$2a$10$2rfYVUxtR/p5GTXDX2D7o.xEWgsK9b4Sk6he5wOXUlDqHh2XY44i2', 'ebce4085-c94f-46b1-bd21-32d969156b02.jpg', '2020-04-05 21:18:13', 0.9370401604166367, 'I', 1),
(8, 'jorge', 'hidalgo', 'M', '2020-04-01', 'Bahoruco', '(829) 556-2852', '403-4524534-5', 'motocrossdominicano32@gmail.com', '$2a$10$laBa9QNMknHWZ9UzLuHaNem29ZzgYZTE0erB2BEJy41NxWT/L97ru', '678e3739-8c0d-4bc6-abc4-5f6213737236.jpg', '2020-04-05 21:18:13', 0.24093012643259248, 'A', 1),
(9, 'joel', 'perez', 'M', '2020-04-01', 'La Vega', '(829) 512-3434', '403-4522334-4', 'supergato39@gmail.com', '$2a$10$d.7f2gL7eANl/.FyoSN2YeTrYSDmBUYW2eEFSjpSgxpfXYb/BDYNy', 'perfil.jpg', '2020-04-05 21:18:13', 0.808066928151058, 'I', 1),
(10, 'jose', 'perez', 'M', '2020-04-01', 'La Vega', '(829) 562-8586', '403-4545445-7', 'rudyhidalgo24@gmail.com', '$2a$10$GZHbevhbNoiwfI5qUVK40edm1x3Z2kdB7gyLAiUz7JHiziXPEo4r6', 'perfil.jpg', '2020-04-05 21:18:13', 0.9979023648243597, 'A', 1);

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
(1, 3, 2100, '7-4-2020 11:52:15', 'P'),
(2, 3, 171, '7-4-2020 11:53:5', 'P');

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
(1, 3, 18, 2, 950, 1900, '7-4-2020 11:52:15'),
(2, 3, 17, 1, 200, 200, '7-4-2020 11:52:15'),
(3, 3, 15, 1, 150, 150, '7-4-2020 11:53:5'),
(4, 3, 14, 1, 21, 21, '7-4-2020 11:53:5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favorito`
--

CREATE TABLE `favorito` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `fecha_hora` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
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
(1, 'cubo para campana', 'cf01ce75-f647-4f23-be7c-b083534c11d1.jpg', 100, 1, '40', 'I', 1, '2020-03-18 15:02:18'),
(2, 'tornillo del tiempo', '971c731c-abfd-4231-b591-e55408fc1aa9.jpg', 15, 2, '51', 'A', 1, '2020-03-18 15:03:22'),
(3, 'carburador 28mm', '4d3d9f96-9dc7-4d11-81db-79928225761b.jpg', 350, 1, '18', 'A', 1, '2020-03-18 15:04:30'),
(4, 'carburador', '983061be-d78c-4b0a-b1f2-b80da6771e0d.jpg', 300, 3, '25', 'A', 1, '2020-03-18 15:06:27'),
(5, 'muffer racing', '6d72a69c-bfd8-492f-8012-74e2703683bd.jpg', 1200, 1, '17', 'A', 1, '2020-03-18 15:07:29'),
(6, 'piston racing', 'ee1d01a4-f3fa-4bac-84b4-4edd99f12560.jpg', 250, 4, '71', 'I', 1, '2020-03-18 15:09:04'),
(7, 'biela', 'a2139258-ff80-4db4-9766-f3a731b9e266.jpg', 110, 5, '98', 'A', 1, '2020-03-18 15:11:50'),
(8, 'centro clutch', '0e35c663-f6ec-4bbb-bb5a-86016eaa4d20.jpg', 225, 6, '79', 'A', 1, '2020-03-18 15:13:29'),
(9, 'manecilla', 'a6abf86b-4f5e-409e-887c-12385f721daa.jpg', 110, 3, '120', 'I', 1, '2020-03-18 15:14:31'),
(10, 'rayos cg 150/200 ref', '1321be15-307d-4cc4-aa07-479994e7bb1c.jpg', 100, 1, '195', 'A', 1, '2020-03-18 15:16:26'),
(11, 'aros racing', 'bcb7e1ac-feaa-410e-b10d-d933ecb8b291.jpg', 750, 7, '0', 'N', 1, '2020-03-18 15:18:48'),
(12, 'asiento delantero', '2b57c917-170a-46de-98ce-e5fdff4c1542.jpg', 250, 2, '20', 'A', 1, '2020-03-18 15:20:17'),
(13, 'farol stop', 'cea5fe82-38fa-4f79-895d-8f5a36c6a992.jpg', 30, 4, '92', 'A', 1, '2020-03-18 15:21:17'),
(14, 'canasto de pasola', 'b7e88321-85ee-4a49-b439-2b456164dd00.jpg', 21, 8, '33', 'A', 1, '2020-03-18 15:22:25'),
(15, 'farol delantero', 'ed903cf8-04fa-45b5-aa25-91e2f6f2905f.jpg', 150, 9, '29', 'A', 1, '2020-04-05 20:43:10'),
(16, 'farol delantero led', '5685b1bf-9c23-43f9-b1db-99dcb716a3dd.jpg', 350, 10, '25', 'A', 1, '2020-04-05 20:45:28'),
(17, 'radiador', '3bb7f5f2-09ed-4817-8615-0a67cf1ca3fb.jpg', 200, 2, '99', 'A', 1, '2020-04-05 20:48:58'),
(18, 'cilindro completo', 'ce541c81-9c0e-48e6-93ba-cda78b5cbb1e.jpg', 950, 2, '38', 'A', 1, '2020-04-05 20:51:35'),
(19, 'casco protector', '68541747-998c-46ca-a11c-bdd321d797c6.jpg', 1000, 11, '50', 'I', 1, '2020-04-05 20:55:56');

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
('t-HnQx98pF4qpi8Olp377L02Nhvc2fSP', 1586361294, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":1}}');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `detalle`
--
ALTER TABLE `detalle`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `favorito`
--
ALTER TABLE `favorito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

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
