const path = require("path"),
    router = require("express").Router(),
    apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

module.exports = router;