
const someAsyncRequest = (url, cb) => setTimeout(() => cb(`I am response from url: ${url}`), 1500);

function * main () {
    let resp = yield request('url1');
    console.log(resp);
    resp = yield request('url2');
    console.log(resp);
}
