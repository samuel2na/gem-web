import { Header } from "../../components/Header";
import { Container, HomeTable } from "./styles";

export function Home() {

  return (
    <>
      <Header visible />
      
      {<Container>
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
              <td><button>Cad.</button></td>
              <td><input type="checkbox" id="dia-08" name="dia-08" value="Bike" /></td>
              <td><input type="checkbox" id="dia-08" name="dia-08" value="Bike" /></td>
              <td><input type="checkbox" id="dia-08" name="dia-08" value="Bike" /></td>
              <td><input type="checkbox" id="dia-08" name="dia-08" value="Bike" /></td>
              <td><input type="checkbox" id="dia-08" name="dia-08" value="Bike" /></td>
            </tr>
            <tr>
              <td>Samuel de Sousa Almeida</td>
              <td>Eufônio</td>
              <td>26/12/2023</td>
              <td><button>Cad.</button></td>
              <td><input type="checkbox" id="dia-08" name="dia-08" value="Bike" /></td>
              <td><input type="checkbox" id="dia-08" name="dia-08" value="Bike" /></td>
              <td><input type="checkbox" id="dia-08" name="dia-08" value="Bike" /></td>
              <td><input type="checkbox" id="dia-08" name="dia-08" value="Bike" /></td>
              <td><input type="checkbox" id="dia-08" name="dia-08" value="Bike" /></td>
            </tr>
          </tbody>
        </HomeTable>
      </Container> }
    </>
  );
}
