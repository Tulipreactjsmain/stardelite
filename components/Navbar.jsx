import Image from "next/image";
import { NavBarLogo } from ".";

export default function Navbar() {
  return (
    <div className="d-flex justify-content-between align-items-center position-fixed z-3 px-5 pt-4">
      <div>
        <Image
          src="https://res.cloudinary.com/techbro/image/upload/v1700607786/pngfilewhite_rkaopf.svg"
          width={185}
          height={57}
          alt="Stardelite logo"
          priority={false} 
        />
        {/* <NavBarLogo className="bg-success p-0 m-0" style={{width:"300px", height:"300px"}}/> */}
      </div>
    </div>
  );
}
