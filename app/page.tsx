import Navbar from "./navbar/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Welcome</h1>
        <Image
          src="/images/scenery.jpg"
          alt="A beautiful scenery"
          width={500}
          height={300}
        />
        <p>This is the homepage of your Next.js application.</p>
      </div>
    </>
  );
}
