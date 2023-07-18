/// <reference types="@fastly/js-compute" />
import { Router } from '@fastly/expressly';
import { RequestHandlerCallback } from '@fastly/expressly/dist/lib/routing/request-handler';
import { SecretStore } from 'fastly:secret-store';

const router = new Router();


const middleware: RequestHandlerCallback = async (_req, res) => {
    res.set('x-powered-by', 'expressly');
};
// Use middleware to set a header
router.use(middleware);

// GET 200 response
router.get('/', async (req, res) => {
    res.sendStatus(200); // "OK"
});

// 404/405 response for everything else

router.listen();

export const getSecret = () => {
    const secrets = new SecretStore('test-store');
    // not actually getting secrets for demo purpose
    return 'test-secret'
}
