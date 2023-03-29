//se inyecta la dependencia express.
let express = require('express');
// instalacion del router que se asociara a todas las rutas.
let router = express.Router();

router.get('/person', (req, res) => {
    res.send('has solicitado el listado de personas');
});

module.exports = router;