import Foother from "../molecules/foother/foother";
import Header from "../molecules/header/header";

export default function Layout(props: any) {
  return (
    <>
      <Header></Header>
      {props.children}
      <Foother></Foother>
    </>
  );
}
