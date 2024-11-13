import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/**
 * Nous allons créer notre propre API
 */
import countryActions from "./modules/country/countryActions";

// ENDPOINTS
router.get("/api/countries", countryActions.browse);
router.get("/api/countries/:id", countryActions.read);

/* ************************************************************************* */

export default router;
