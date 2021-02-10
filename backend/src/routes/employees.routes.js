const { Router } = require('express');
const router = Router();
const employeesControllers =  require('../controllers/employees.controller');

router.get('/',employeesControllers.getEmployees);
router.post('/',(employeesControllers.createEmployees));
router.get('/:id',employeesControllers.getEmployee);
router.put('/:id',employeesControllers.editEmployees);
router.delete('/:id',employeesControllers.deleteEmployee);

module.exports = router;
