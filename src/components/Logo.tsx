import { Link } from "react-router-dom";
import klarasLogo from "@/assets/klaras-ai-logo.jpg";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

const Logo = ({ className = "", variant = "dark" }: LogoProps) => {
  if (variant === "light") {
    return (
      <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
        <div className="w-9 h-9 bg-[#4285F4] rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl leading-none">K</span>
        </div>
        <span className="text-white font-bold text-xl tracking-tight">Klaras AI</span>
      </Link>
    );
  }

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img
        src={klarasLogo}
        alt="Klaras AI"
        className="h-10 w-auto"
      />
    </Link>
  );
};

export default Logo;