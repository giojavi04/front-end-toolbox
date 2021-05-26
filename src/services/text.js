const API = 'http://localhost:3000'

export const getText = text => {
  return fetch(`${API}/iecho?text=${text}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
  // .then(data => console.log(data));
}