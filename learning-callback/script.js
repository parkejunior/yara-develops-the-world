function sendToLoginApi(username, password, callback) {
  // send username and password to login api
  console.log(`Enviando login para api: ${username}, ${password}`)

  showLoginConfirmation()
  callback()
}

function showLoginConfirmation() {
  console.log('Logado com sucesso')
}