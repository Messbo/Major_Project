import { InitialScreen } from "@/components/component/initial-screen";
import { SignPage } from "@/components/component/sign-page";
import {Weather} from "@/components/component/api-weather"

export default function Home() {
  return(
   <>
    {/*<InitialScreen/>*/}
    <Weather/>
    {/* <SignPage/> */}
  </>
  );
}
