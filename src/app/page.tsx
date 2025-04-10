import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Homepage from "@/app/pages/homepage/page";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div>
          <Homepage />
        </div>
      </div>
    </>
  );
}
