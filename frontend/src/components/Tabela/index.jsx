import "./style.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Input } from "../Input";

export const Tabela = ({ data, checkBox, formRegister }) => {
  const itemsPerPage = 10;

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <div className={checkBox ? "simple-table-main-div" : "table-main-div"}>
      <table className="tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            {!checkBox ? (
              <>
                <th>Status do<br/>Questionário</th>
                <th>Afinidade<br/>com a vaga</th>
                <th>Nota do<br/>Questionário</th>
                <th>Entrevistar</th>
                <th>Visualizar</th>
              </>
            ) : null}
          </tr>
        </thead>

        <tbody>
          {currentItems.map((register) => (
            <TableRow
              id="row"
              register={register}
              checkBox={checkBox}
              key={register.id}
              formRegister={formRegister}
            />
          ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Próximo >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={null}
        pageCount={pageCount}
        previousLabel="< Anterior"
        renderOnZeroPageCount={null}
        containerClassName="paginate"
        pageClassName="page"
        nextClassName="page"
        previousClassName="page"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="link-active"
        activeClassName="page-active"
      />
    </div>
  );
};

export const TableRow = ({ register, checkBox, formRegister }) => {
  const [toggleButton, setToggleButton] = useState(false);

  return (
    <tr key={register.email} className={checkBox ? "simple-table" : null}>
      <td id="nome">
        <span>
          {checkBox ? (
            <Input type="checkbox" name={register.id} register={formRegister(register.id)} />
          ) : (
            <input type="radio" name="nome-radio" id={register.id} />
          )}{" "}
          <label htmlFor={register.id} id="radio-label">
            {register.nome}{" "}
          </label>
        </span>
      </td>
      <td>{register.email} </td>
      {!checkBox ? (
        <>
          <td>
            <span id={register.perfil ? "Feito" : "Pendente"}>
              {register.perfil ? "Feito" : "Pendente"}
            </span>
          </td>
          <td>{register.perfil ? register.afinidade : "-"} </td>
          <td>{register.perfil ? register.nota : "-"} </td>
          <td>
            <button
              disabled={register.status === "Pendente" ? true : false}
              id={
                toggleButton && register.status !== "Pendente" ? "btn-nao" : ""
              }
              onClick={() => {
                if (register.status !== "Pendente") {
                  setToggleButton(toggleButton ? false : true);
                }
              }}
            >
              {register.status === "Pendente" || toggleButton ? "Não" : "Sim"}
            </button>
          </td>
          <td>
            <button
              disabled={register.status === "Pendente" ? true : false}
              id="btn-visualizar"
            >
              Visualizar
            </button>
          </td>
        </>
      ) : null}
    </tr>
  );
};
