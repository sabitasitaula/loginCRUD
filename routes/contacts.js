import { Router } from 'express';
import {contactCreate,contactAll,contactDetails,contactUpdate,contactDelete} from '../controller/contactController.js';

const useRouter = Router();

useRouter.post('/',contactCreate);
useRouter.get('/',contactAll);
useRouter.get('/:contactId', contactDetails);
useRouter.patch('/:contactId', contactUpdate);
useRouter.delete('/:contactId', contactDelete);

export default useRouter;