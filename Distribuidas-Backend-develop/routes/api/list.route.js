var express = require('express')
var router = express.Router()
var ListController = require('../../controllers/list.controller');
var Authorization = require('../../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/test', function (req, res, next) {
  res.send('Llegaste a api/list.routes');
});

router.post('/addList', ListController.addList)
/*   
router.post('/registration', UserController.createUser)
router.post('/login/', UserController.loginUser)
router.get('/', Authorization, UserController.getUsers)
router.put('/', Authorization, UserController.updateUser)
router.delete('/:id', Authorization, UserController.removeUser)
 */
// Export the Router
module.exports = router;



//api/users
//api/users/registration
//api/users/login