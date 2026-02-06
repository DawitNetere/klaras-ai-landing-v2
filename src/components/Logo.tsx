import { Link } from "react-router-dom";
import klarasLogo from "@/assets/klaras-ai-logo.jpg";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

const Logo = ({ className = "", variant = "dark" }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img
        src={klarasLogo}
        alt="Klaras AI"
        className={`h-10 w-auto ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
};

export default Logo;