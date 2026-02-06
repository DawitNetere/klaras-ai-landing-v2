import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

const Logo = ({ className = "", variant = "dark" }: LogoProps) => {
  const textColor = variant === "light" ? "text-white" : "text-gray-900";

  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-9 h-9 bg-[#4285F4] rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl leading-none">K</span>
      </div>
      <span className={`${textColor} font-bold text-xl tracking-tight`}>Klaras AI</span>
    </Link>
  );
};

export default Logo;