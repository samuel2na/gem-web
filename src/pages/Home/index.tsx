import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, HomeTable } from "./styles";

const dateCurrent = new Date();
const monthCurrent = (dateCurrent.getMonth() + 1).toString();
const yearCurrent = dateCurrent.getFullYear().toString();

export function Home() {
  const [slcMes, setSlcMes] = useState("0");
  const [candidate, setCandidates] = useState<any>([]);


  useEffect(() => {
    if (slcMes != "0") return; //alert(`mês escolhido: ${slcMes} -  mês atual: ${monthCurrent}`);
    setSlcMes(monthCurrent);
    getPresences(yearCurrent, monthCurrent);
  }, [slcMes]);

  async function hundleAddPresence(e: any) {
    const candidate_id = e.target.value;
    const year = yearCurrent;
    const month = monthCurrent;
    const day = e.target.id;
    const wasPresent = (e.target.checked === true) ? 1 : 0;

    //console.log(candidate_id, year, month, day, wasPresent);
    //return;
    const bodyData = { candidate_id, year, month, day, wasPresent };

    //console.log(bodyData);
    //return

    //chamar o metodo patch - passando no body: candidate_id, year, month, day, wasPresent 
    const url = "http://localhost:3333/presence";
    const res = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    });
    const data = await res; //json();
    //console.log(data);
  }

  async function getPresences(year: string, month: string) {
    const url = new URL("http://localhost:3333/presence");
    url.searchParams.append("year", year);
    url.searchParams.append("month", month);

    const res = await fetch(url);
    const data = await res.json();

    setCandidates(data);
  }

  return (
    <>
      <Header visible />
      <Container>
        <div>
          <span>Selecione o mês de presença dos candidatos: </span>
          {/* <input type="text" size={3} placeholder="Ano" /> */}
          <select value={slcMes} onChange={(e) => setSlcMes(e.target.value)}>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="8">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
          <button onClick={() => getPresences(yearCurrent, slcMes)}>Buscar candidatos</button>
        </div>

        <HomeTable>
          <thead>
            <tr>
              {/* array por chave/key */}
              {/* { Object.keys(candidate).map(
                (
                  key //key != "candidate_id" &&
                ) => (
                  <th key={key}>{key}</th>
                )
              )} */}
            </tr>
          </thead>
          <tbody>
            {candidate.map((cand) => {
              return (
                <tr key={cand.candidate_id}>
                  <td>{cand.name}</td>
                  <td>{cand.instrument}</td>
                  <td>ig: {cand.startDateGEM}</td>
                  <td>
                    {" "}
                    d{cand.d1.replace(/true|false/g, "")}{" "}
                    <input
                      type="checkbox"
                      value={cand.candidate_id}
                      id={cand.d1.replace(/true|false/g, "")}
                      defaultChecked={cand.d1.replace(/[0-9]/g, "") === "true"}
                      onChange={hundleAddPresence}
                    ></input>
                  </td>
                  <td>
                    {" "}
                    d{cand.d2.replace(/true|false/g, "")}{" "}
                    <input
                      type="checkbox"
                      value={cand.candidate_id}
                      id={cand.d2.replace(/true|false/g, "")}
                      defaultChecked={cand.d2.replace(/[0-9]/g, "") === "true"}
                      onChange={hundleAddPresence}
                    ></input>
                  </td>
                  <td>
                    d{cand.d3.replace(/true|false/g, "")}{" "}
                    <input
                      type="checkbox"
                      value={cand.candidate_id}
                      id={cand.d3.replace(/true|false/g, "")}
                      defaultChecked={cand.d3.replace(/[0-9]/g, "") === "true"}
                      onChange={hundleAddPresence}
                    ></input>
                  </td>
                  <td>
                    d{cand.d4.replace(/true|false/g, "")}{" "}
                    <input
                      type="checkbox"
                      value={cand.candidate_id}
                      id={cand.d4.replace(/true|false/g, "")}
                      defaultChecked={cand.d4.replace(/[0-9]/g, "") === "true"}
                      onChange={hundleAddPresence}
                    ></input>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </HomeTable>
      </Container>
    </>
  );
}
