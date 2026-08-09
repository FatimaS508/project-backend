const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const authController = require('../controllers/auth.controller')
const domainController = require('../controllers/domain.controller')

router.get('/',verifyToken, domainController.getAllDomains)
router.post('/',verifyToken, domainController.createDomain)
router.get('/:id', verifyToken, domainController.getDomainById)




module.exports = router;