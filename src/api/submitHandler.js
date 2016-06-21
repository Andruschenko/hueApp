import {
  localUrl,
  accessKey,
} from './config';

export default function (image) {
  return fetch(`${localUrl}/submit`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // 'Access-Key': accessKey,
    },
    body: JSON.stringify({
      image,
    })
  })
    .then(response =>
      response.json()
    ).then(pieces => {
      console.log('parsed json', pieces)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    });


    // .then(response => { console.log('response', response); return response.json()})
    // .then(images => { console.log('images', images) })
    // .catch(err => err);
}
