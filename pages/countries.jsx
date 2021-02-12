import Header from "../components/header";
import Background from "../components/background";
import Link from "next/link";

const API_NAME = "https://api.teleport.org/api/countries/";

export default function Countries({ data })
{
  // Console logging for debugging
  fetch(`${API_NAME}`)
  .then(response => response.json())
  .then(result =>{ console.log(result); }
  );

  console.log(data);

  return(
    <div id="wrapper">
      <Background />
      <Header />
      <section>
        <ul>
          {/* Using each country name to creata a temporary Wikipedia link */}
          {data.map(d =>
            <Link href={`https://en.wikipedia.org/wiki/${d.name}`}>
              <li key={d.name}><p>{d.name}</p></li>
            </Link>
          )}
        </ul>
      </section>
    </div>
  );
}

// Fetching data from API
Countries.getInitialProps = async() =>
{
  const fetching = await fetch(`${API_NAME}`)
  const json = await fetching.json()
  return { data: json._links["country:items"] }
}
