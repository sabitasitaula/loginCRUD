import { Router } from 'express';
import {userCreate,userAll,userDetails,userUpdate,userDelete, userLogin} from '../controller/userController.js';
import { authenticateToken } from '../middleware/authenticateToken.js';

const useRouter = Router();

useRouter.post('/', userCreate);
useRouter.get('/',authenticateToken, userAll);
useRouter.get('/:id',authenticateToken, userDetails);
useRouter.patch('/:id',authenticateToken, userUpdate);
useRouter.delete('/:id',authenticateToken, userDelete);
useRouter.post('/login', userLogin);


// useRouter.route("/").post(userCreate).get(userAll);

// useRouter.route("/:id").get(userDetails).patch(userUpdate).delete(userDelete);

// useRouter.post("/login", userLogin);

export default useRouter;