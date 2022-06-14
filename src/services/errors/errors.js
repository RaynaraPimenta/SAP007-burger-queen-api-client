function msgError (response) {
  console.log(response)
  switch (response.status) {
    case 400:
      alert('preencha todos os campos ou dados incorretos')
      break
    case 401:
      alert('Usuário não cadastrado')
      break
    case 403:
      alert('Email já cadastrado')
      break
    default:
      alert('Não foi possivel se comunicar com o banco de dados')
  }
}
export default msgError
