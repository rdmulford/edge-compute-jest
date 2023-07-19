/// <reference types="@fastly/js-compute" />
import { SecretStore } from 'fastly:secret-store';
import { env } from 'fastly:env'

export const getSecret = () => {
    // UNCOMMENT TO TEST fastly:secret-store
    // const secrets = new SecretStore('test-store');

    // UNCOMMENT TO TEST fastly:env
    // const test = env('test')

    return 'test-secret'
}
