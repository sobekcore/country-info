import Header from "../../components/header";
import Background from "../../components/background";

export default function Country({ data1, data2, data3 })
{
  // Console logging for debugging
  console.log("Data1:", data1);
  console.log("Data2:\n", data2);

  return(
    <div id="wrapper">
      <Background />
      <Header />
        <article id="country-info">
          <div id="title">
            <h1>{data1.name}</h1>
            <h3><a href={`https://en.wikipedia.org/wiki/${data1.name}`} target="_blank">Wikipedia</a></h3>
          </div>
          <ul>
            <hr /><li>Continent: {data1._links["country:continent"].name}</li>
            <hr /><li>Population: {data1.population}</li>
            <hr /><li>Currency: {data1.currency_code}</li>
            <hr />
            <li>
              Administrative Division:
              <ul id="admin-div">
                {data2.map(d =>
                  <li key={d.name}>
                    {d.name}
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </article>
    </div>
  );
}

// Fetching data from API
Country.getInitialProps = async({ query }) =>
{
  const { slug } = query;

  // First part of API
  const API_NAME1 = "https://api.teleport.org/api/countries/iso_alpha2:" + slug + "/";
  const fetching1 = await fetch(`${API_NAME1}`);
  const json1 = await fetching1.json();

  // Second part of API
  const API_NAME2 = "https://api.teleport.org/api/countries/iso_alpha2:" + slug + "/admin1_divisions/";
  const fetching2 = await fetch(`${API_NAME2}`);
  const json2 = await fetching2.json();

  return {
    data1: json1,
    data2: json2._links["a1:items"],
  }
}
