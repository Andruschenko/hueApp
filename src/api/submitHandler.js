import CONFIG from './config';

export default function (image) {
  return fetch(`${CONFIG.url}/submit`, {
    method: 'POST',
    body: JSON.stringify({
      image,
    }),
  })
    .then(response => { console.log('response', response); response.json()})
    .then(images => images)
    .catch(err => err);
}
