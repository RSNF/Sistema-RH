import "./style.css";

export const Tabela = ({ data }) => {

  return (
    <div className="table-main-div">
      <table className="tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Status do Questionário</th>
            <th>Afinidade com a vaga</th>
            <th>Nota do Questionário</th>
            <th>Entrevistar</th>
            <th>Visualizar</th>
          </tr>
        </thead>

        <tbody>
          
          { data.map(register => <TableRow  register={register}/>) }

        </tbody>
      </table>
    </div>
  );
};

export const TableRow = ({ register }) => {
  return (
    <tr key={register.email} >
      <td id="nome">
        <span>
          <input type="radio" name="nome-radio" id={register.email} />{" "}
          <label htmlFor={register.email} >{register.nome} </label>
        </span>
      </td>
      <td>{register.email} </td>
      <td>
        <span id="status">{register.status} </span>
      </td>
      <td>{register.afinidade} </td>
      <td>{register.nota} </td>
      <td>
        <button id="btn-entrevista">Sim</button>
      </td>
      <td>
        <button id="btn-visualizar">Visualizar</button>
      </td>
    </tr>
  );
};
