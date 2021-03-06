// https://github.com/hapijs/hapi/blob/master/API.md#-servercacheoptions
import {Server, ServerOptionsCache} from "hapi";
import * as catbox from "catbox";

const server = new Server({
    port: 8000,
});

const catboxOptions:ServerOptionsCache = {
    segment: 'countries',
    expiresIn: 60 * 60 * 1000
}
const cache:catbox.Policy = server.cache(catboxOptions);
cache.set('norway', 'oslo', 10 * 1000, null);

const value = cache.get('norway', null);
console.log("Value: " + value);

server.start();

server.events.on('start', () => {
    console.log('Server started at: ' + server.info.uri);
});
