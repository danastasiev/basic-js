'use strict';
import fetch from 'isomorphic-fetch';

const uriSource = [
    'https://newsapi.org1/v2/top-headlines?language=de',
    'https://newsapi.org/v2/top-headlines?apiKey=886faf57284140dd830bf5d6ddadd32f&language=de',
    'https://newsapi.org/v2/top-headlines?apiKey=886faf57284140dd830bf5d6ddadd32f&language=ar',
    'https://newsapi.orgWRONG/v2/top-headlines?apiKey=886faf57284140dd830bf5d6ddadd32f&language=ar',
    'https://newsapi.org/v2/top-headlines?apiKey=886faf57284140dd830bf5d6ddadd32f&language=ru',
    'https://google.com',
];

const fetchAll = async(iterableUriSource) => {
    let promises = iterableUriSource.map(async url => {
            const acc = [];
            try {
                const resp = await fetch(url);
                const {articles} = await resp.json();
                articles.forEach(({author, title}) => {
                    acc.push({author, title})
                });
            } catch (e) {
                console.log(`error upon fetching url ${url}`);
            }
            return acc;
    });
    return (await Promise.all(promises)).filter(arr => arr.length > 0);
};
(async () => {
    let data = await fetchAll(uriSource);
    console.log(data);
})();

