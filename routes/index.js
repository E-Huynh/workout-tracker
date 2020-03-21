const path = require("path"),
    router = require("express").Router(),
    apiRoutes = require("./api");

router.use("/api", apiRoutes);

module.exports = router;