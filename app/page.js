"use client";
import { useRouter } from "next/navigation"
import Header from "./components/Header";
import Footer from "./components/Footer"
import Image from "next/image"
// import im from "../public/homepageLogo.png"
export default function Home() {
  const router = useRouter();

  function Loginpage() {
    router.push("/Login")
  }
  function Registerpage() {
    router.push("/Register")
  }
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div style={{ position: "relative", width: "100%", height: "500px" }}>
            <Image src="/main_building_2025-2-24-12-53-30.jpg" alt="NITW" fill style={{ objectFit: "cover",paddingTop:"40" }}/>
          </div>
        </div>
        <button className="btn btn-primary m-2" onClick={Loginpage}>Login</button>
      </div>
      <Footer />
    </div>
  );
}
