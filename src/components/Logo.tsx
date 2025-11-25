import { Link } from "react-router-dom";
import clarasLogo from "@/assets/Claras ai logo .png";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img src={clarasLogo} alt="Claras AI" className="h-10 w-auto" />
    </Link>
  );
};

export default Logo;