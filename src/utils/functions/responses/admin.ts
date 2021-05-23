
export const loginResponses = (code: number): string => {
  switch (code) {
    case 400:
      return 'Login invalido, tente novamente'

    case 401:
      return 'Senha incorreta'

    case 403:
      return 'Sua solicitação ainda não foi avaliada'

    case 404:
      return 'Email não encontrado'

    default:
      return 'Erro inesperado! por favor, tente novamente mais tarde'
  }
}

export const registerResponses = (code: number): string => {
  switch (code) {
    case 400:
      return 'Já existe um administrador cadastrado ou solicitado com este email'

    case 409:
      return 'Já existe um usuário com este email'

    case 422:
      return 'Erros nos dados fornecidos'

    default:
      return 'Erro inesperado! por favor, tente novamente mais tarde'
  }
}
