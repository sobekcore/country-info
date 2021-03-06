import Header from "../components/header";
import Button from "../components/button";
import AnimateIn from "../components/animate-in";

export default function Index()
{
  return(
    <div id="wrapper">
      <div id="static-bg"></div>
      <AnimateIn />
      <Header />
      <Button />
    </div>
  );
}
