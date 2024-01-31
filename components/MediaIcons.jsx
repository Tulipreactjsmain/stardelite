import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function MediaIcons() {
  return (
    <div className="d-flex gap-3 text-white position-absolute bottom-0 start-0 layout-padding mb-3 media-icons">
      <Link
        className="text-white icon-hover"
        href={`https://instagram.com/stardelitesolutions`}
        rel="noopener"
        target="_blank"
        
        style={{ cursor: "pointer" }}
      >
        <FaInstagram className="Ig" fontSize={30} />
      </Link>
      <Link
        className="text-white icon-hover"
        href={`https://www.linkedin.com/company/stardelite/`}
        rel="noopener"
        target="_blank"
        style={{ cursor: "pointer" }}
      >
        <FaLinkedin className="Li" fontSize={30} />
      </Link>
      <Link
        className="text-white icon-hover"
        href={`https://twitter.com/stardeliteLtd`}
        rel="noopener"
        target="_blank"
        style={{ cursor: "pointer" }}
      >
        <FaTwitter className="Tw" fontSize={30} />
      </Link>
    </div>
  );
}
