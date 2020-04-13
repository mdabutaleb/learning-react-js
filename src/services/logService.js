import * as Sentry from '@sentry/browser';

function init() {
    Sentry.init({dsn: 'https://d10c1c97e8724cbaa1e587df3b43dc0c@o376953.ingest.sentry.io/5198355'});
}

function log(erorr) {
    Sentry.captureException(erorr);
}

export default {
    init,
    log,
}
