import { Router } from 'express';
import {userCreate,userAll,userDetails,userUpdate,userDelete, userLogin} from '../controller/userController.js';

const useRouter = Router();

useRouter.post('/', userCreate);
useRouter.get('/', userAll);
useRouter.get('/:id', userDetails);
useRouter.patch('/:id', userUpdate);
useRouter.delete('/:id', userDelete);
useRouter.get('/login', userLogin);


export default useRouter;