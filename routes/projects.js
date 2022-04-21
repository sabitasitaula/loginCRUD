import { Router } from 'express';
import {projectCreate,projectAll, projectList} from '../controller/projectController.js';

const useRouter = Router();

useRouter.get('/',projectCreate);
useRouter.get('/', projectAll);
useRouter.get('/:size', projectList);


export default useRouter;