const {Router} = require("express");


const employeesController = require("../controllers/employees.controller")
const router = Router();

router.get("/:id", employeesController.getEmployee);
router.get("/", employeesController.getEmployees);
router.post("/", employeesController.create);
router.delete("/:id", employeesController.delete);
router.put("/:id", employeesController.update);


module.exports = router;

