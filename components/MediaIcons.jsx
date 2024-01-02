import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function MediaIcons() {
  return (
    <div className="d-flex gap-3 text-white position-absolute bottom-0 start-0 px-2 px-md-5 px-lg-5 mb-3 media-icons">
      <Link
        className="text-white icon-hover"
        href={`https://instagram.com/stardelitesolutions`}
        style={{ cursor: "pointer" }}
      >
        <FaInstagram className="Ig" fontSize={30} />
      </Link>
      <Link
        className="text-white icon-hover"
        href={`https://www.linkedin.com/company/stardelite/`}
        style={{ cursor: "pointer" }}
      >
        <FaLinkedin className="Li" fontSize={30} />
      </Link>
      <Link
        className="text-white icon-hover"
        href={`https://twitter.com/stardeliteLtd`}
        style={{ cursor: "pointer" }}
      >
        <FaTwitter className="Tw" fontSize={30} />
      </Link>
    </div>
  );
}
