import type { RequestHandler } from "express";

import dataAPI from "../../dataAPI/index.json";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const countrie = dataAPI;

    // Respond with the items in JSON format
    res.json(countrie);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const countryId = Number(req.params.id);

    // Find the item in the database
    const country = dataAPI.find(
      (country: { id: number }) => country.id === countryId,
    );

    // If the country is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the country in JSON format
    if (country == null) {
      res.sendStatus(404);
    } else {
      res.json(country);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read };
