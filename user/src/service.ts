import { Router } from 'express';
import routes from './routes/route';

const router = Router();
router.get('/', (req, res) => {
    return res.send('user - works');
});

router.use(routes);

export default router;
