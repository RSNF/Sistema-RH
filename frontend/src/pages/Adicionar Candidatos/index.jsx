import { Input } from "../../components/Input";

export const AdicionarCandidatos = () => {

  return (
    <div className="main-div-add-cand">
      <h2 id=""> Adicionar candiatos </h2>

      <p> Enviar formulário para  os candidatos para a vaga de Designer </p>

      <button> Criar um link </button>
      <button> Criar email </button>

      <label for="emails"> Digite os emails separados por vírgula </label>
      <Input name="emails"> </Input>

      <table>
        <thead>
          <tr>
            <th> Selecionar </th>
            <th> Nome </th>
            <th> email </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> <input type="radio"/> </td>
            <td> Fulano da Silva </td>
            <td> fulano@email.com </td>
          </tr>
        </tbody>
      </table>

      <button> Cancelar </button>
      <button> Finalizar </button>
    </div>
  );
}