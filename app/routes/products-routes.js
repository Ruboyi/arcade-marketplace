"use strict";

const express = require("express");

const createProduct = require("../controllers/products/create-product-controller");
const getAllProducts = require("../controllers/products/get-all-products-controller");
const getProductsByUserId = require("../controllers/products/get-products-by-user-id-controller");
const validateAuth = require("../middlewares/validate-auth");
const router = express.Router();

// require a los controllers, por ejemplo:
// const nombreFuncion = require('../')

// URL's PÚBLICAS, por ejemplo:
router.route("/").get(getAllProducts);

// URL's PRIVADAS (aquellas que tienen la función validateAuth por delante), por ejemplo:
// router.route('/').all(validateAuth).delete(nombreFuncion)
router.route("/").all(validateAuth).post(createProduct);
router.route("/myProducts").all(validateAuth).get(getProductsByUserId); // HACE FALTA EL 'myProducts' ??????????????????

module.exports = router;
