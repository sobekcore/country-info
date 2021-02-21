import Header from "../components/header";
import Background from "../components/background";
import AnimateIn from "../components/animate-in";
import AboutText from "../components/about";

export default function About()
{
  return(
    <div id="wrapper">
      <AnimateIn />
      <Background />
      <Header />
      <AboutText />
    </div>
  );
}
