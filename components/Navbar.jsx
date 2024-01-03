import Image from "next/image";
import { IoChevronDownSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="d-flex justify-content-between align-items-center w-100 position-fixed z-3 px-2 px-md-5 px-lg-5 pt-2 pt-md-4 pt-lg-4">
      <div className="fade-right-animation delay-1">
        <Link href={`/`} style={{ cursor: "pointer" }}>
          <Image
            src="/logo-white.svg"
            width={185}
            height={57}
            className="logo"
            alt="Stardelite logo"
            placeholder="blur"
            blurDataURL={"/logo-white.svg"}
          />
        </Link>
      </div>
      <div
        className="text-white d-none d-md-flex d-lg-flex gap-4 justify-content-center align-items-center cursor-pointer"
        style={{ cursor: "pointer" }}
      >
        <span>
          Services <IoChevronDownSharp color="#ffcc00" />
        </span>
        <span>
          Technologies <IoChevronDownSharp color="#ffcc00" />
        </span>
        <span>
          About <IoChevronDownSharp color="#ffcc00" />
        </span>
        <div className="navBtnBorder">
          <Button type="button" className="btn navBtn  text-black">
            Contact us
          </Button>
        </div>
      </div>
      <AiOutlineMenu className="text-white fs-1 d-md-none d-lg-none" />
    </div>
  );
}
