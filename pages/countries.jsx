import Header from "../components/header";
import Background from "../components/background";
import CountriesIntro from "../components/countries-intro";
import AnimateIn from "../components/animate-in";
import Link from "next/link";

const API_NAME = "https://api.teleport.org/api/countries/";

export default function Countries({ data })
{
  // Console logging for debugging
  // console.log(data);

  return(
    <div id="wrapper">
      <AnimateIn />
      <Background />
      <Header />
      <CountriesIntro />
      <section id="country-names">
        <ul>
          {/* Using each country name to create a custom [slug] link */}
          {data.map(d =>
            <div key={d.name}>
              <Link href={`/countries/${d.href.substr(50,52)}`}>
                <li><p>{d.name}</p></li>
              </Link>
            </div>
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
