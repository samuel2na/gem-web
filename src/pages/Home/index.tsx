import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, HomeTable } from "./styles";

interface CandidatosProps {
  id: number;
  nome: string;
  instrumento: string;
  inicioGEM: string;
}

const arrCandidatos: CandidatosProps[] = [
  { id: 1, nome: "Samuel", instrumento: "Eufônio", inicioGEM: "01/01/2006" },
  { id: 2, nome: "Izac", instrumento: "Baritono", inicioGEM: "20/05/1995" },
  { id: 3, nome: "Elielson", instrumento: "Fagote", inicioGEM: "20/05/2023" },
];

const dateCurrent = new Date();
//const monthCurrent = dateCurrent.getMonth();
const yearCurrent = dateCurrent.getFullYear();

export function Home() {
  const [slcMes, setSlcMes] = useState("0");

  useEffect(() => {
    if (slcMes != "0") return; //alert(`mês escolhido: ${slcMes} -  mês atual: ${monthCurrent}`);
    // chamar a função para trazer os dados dos candidatos de acordo com o mês escolhido
  }, [slcMes]);

  function getSundayDates(year: number) {
    const sundays = [];
    for (let month = 0; month < 12; month++) {
      const d = new Date(year, month, 1);
      while (d.getDay() !== 0) {
        d.setDate(d.getDate() + 1);
      }
      while (d.getMonth() === month) {
        sundays.push(new Date(d));
        d.setDate(d.getDate() + 7);
      }
    }
    //return sundays.map(date => `${date.getMonth() + 1}-${date.getDate()}`);
    // console.log(sundays);

    return sundays
    .filter((date) => date.getMonth().toString() == slcMes.toString())
    .map((date) => `m${date.getMonth() + 1}-d${date.getDate()}`);
  }

  const sundays = getSundayDates(yearCurrent);

  function hundleAddPresence(e : any){
    alert(e.detail);
    console.log(sundays);
  }

  return (
    <>
      <Header visible />
      <Container>
        <div>
          <span>
            Selecione o mês que deseja ver a presença dos candidatos:{" "}
          </span>
          <select value={slcMes} onChange={(e) => setSlcMes(e.target.value)}>
            <option value="0">Janeiro</option>
            <option value="1">Fevereiro</option>
            <option value="2">Março</option>
            <option value="3">Abril</option>
            <option value="4">Maio</option>
            <option value="5">Junho</option>
            <option value="6">Julho</option>
            <option value="7">Agosto</option>
            <option value="8">Setembro</option>
            <option value="9">Outubro</option>
            <option value="10">Novembro</option>
            <option value="11">Dezembro</option>
          </select>
        </div>

        {/* <label htmlFor=""> mes: {slcMes}</label> */}

        <HomeTable>
          <thead>
            <tr>
              {/* array por chave/key */}
              {Object.keys(arrCandidatos[0]).map(
                (key) => key != "id" && <th key={key}>{key}</th>
              )}
              {sundays.map((d) => (
                <th key={d}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {arrCandidatos.map((cand) => (
              <tr key={cand.id}>
                {Object.values(cand).map(
                  // value.length, acaba excluindo a coluna "id" pois a mesma é number e o .length conta caracteres na string
                  (value) => value.length > 3 && <td key={value}>{value}</td>
                )}
                {sundays.map((d) => (
                  <td key={d}>
                    <input type="checkbox" id={d} name={d} value={d} onClick={hundleAddPresence} />
                  </td>
                ))}
              </tr>
            ))}
            {/* <tr>
              <td>teste-TD2</td>
            </tr> */}
          </tbody>
        </HomeTable>

      </Container>
      {/* {
        <Container>
          <HomeTable>
            <thead>
              <tr>
                <th>Candidato</th>
                <th>Instrumento</th>
                <th>Início GEM</th>
                <th>Perfil</th>
                <th>dia-01</th>
                <th>dia-08</th>
                <th>dia-17</th>
                <th>dia-24</th>
                <th>dia-31</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Izac José da Silva</td>
                <td>Baritono</td>
                <td>01/01/2023</td>
                <td>
                  <button>Cad.</button>
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="dia-08"
                    name="dia-08"
                    value="Bike"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="dia-08"
                    name="dia-08"
                    value="Bike"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="dia-08"
                    name="dia-08"
                    value="Bike"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="dia-08"
                    name="dia-08"
                    value="Bike"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="dia-08"
                    name="dia-08"
                    value="Bike"
                  />
                </td>
              </tr>
              <tr>
                <td>Samuel de Sousa Almeida</td>
                <td>Eufônio</td>
                <td>26/12/2023</td>
                <td>
                  <button>Cad.</button>
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="dia-08"
                    name="dia-08"
                    value="Bike"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="dia-08"
                    name="dia-08"
                    value="Bike"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="dia-08"
                    name="dia-08"
                    value="Bike"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="dia-08"
                    name="dia-08"
                    value="Bike"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="dia-08"
                    name="dia-08"
                    value="Bike"
                  />
                </td>
              </tr>
            </tbody>
          </HomeTable>
        </Container>
      } */}
    </>
  );
}
