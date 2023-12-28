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

export function Home() {
  return (
    <>
      <Header visible />
      <Container>
        <HomeTable>
          <thead>
            <tr>
              {/* array por chave/key */}
              {Object.keys(arrCandidatos[0]).map(
                (key) => key != "id" && <th key={key}>{key}</th>
              )}
              <th>teste-TH</th>
            </tr>
          </thead>
          <tbody>
            {arrCandidatos.map((cand) => (
              <tr key={cand.id}>
                {Object.values(cand).map(
                  // value.length, acaba excluindo a coluna "id" pois a mesma é number e o .length conta caracteres na string
                  (value) => value.length > 3 && <td key={value}>{value}</td>
                )}
                <td>teste-TD</td>
              </tr>
            ))}
            <tr>
              <td>teste-TD2</td>
            </tr>
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
