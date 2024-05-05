const router = require('express').Router();

const apiiRoutes = require('./api');

router.use('/api', apiiRoutes);

router.use((req, res) => res.send('Bad Route'));   

module.exports = router;