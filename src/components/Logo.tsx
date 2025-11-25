import { Link } from "react-router-dom";
import clarasLogoBlack from "@/assets/claras ai logo black transparent.png";
import clarasLogoWhite from "@/assets/claras ai logo white transparent.png";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

const Logo = ({ className = "", variant = "dark" }: LogoProps) => {
  const logo = variant === "light" ? clarasLogoWhite : clarasLogoBlack;
  
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img src={logo} alt="Claras AI" className="h-10 w-auto" />
    </Link>
  );
};

export default Logo;