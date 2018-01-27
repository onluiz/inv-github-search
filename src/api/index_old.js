/* eslint-disable no-new */
const axios = require('axios')
const octokit = require('@octokit/rest')({
  debug: true
})

//https://api.github.com/users/octocat/orgs

/** 
 * Procurar usuário
 * https://api.github.com/users/onluiz
 * 
 * Procurar repositórios do usuário
 * https://api.github.com/users/onluiz/repos
*/

// axios.get('https://api.github.com/users/onluiz')
//   .then((res) => {
//     console.log('res', res.data)
//   })
//   .catch((err) => {
//     console.log('err', err)
//   })


octokit.users.getForUser({ username: 'podviaznikov' })
.then(({data}) => {
  console.log(data)
})
.catch((err) => {
  console.log(err)
})