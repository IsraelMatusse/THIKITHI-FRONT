
enum ErrorType {
  ClientSide = 'error_client_side',
  ServerSide = 'error_server_side',
}

export const ErrorHandle = (err: any): string => {
  // primeiro verifica se existe uma resposta, dados e o propro codigo do erro
  if (err.response && err.response.data && err.response.data.status_code) {

    // pega o codigo de erro para a variavel status code
    const statusCode = err.response.data.status_code;

    // faz a verificacao para ver se e um clientside se nao for faz a mesma verificacao no if abaixo
    if (statusCode >= 400 && statusCode <= 499) {
      return ErrorType.ClientSide;

    } else if (statusCode >= 500 && statusCode <= 599) {
      
      return ErrorType.ServerSide;
    }
  }
  // caso nao seja nem um Client e nem um serv error ele vai retornar Erro desconhecido
  return "Erro desconhecido"
};
