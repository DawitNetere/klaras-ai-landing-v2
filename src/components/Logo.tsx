import klarasLogo from "@/assets/Klaras ai final logo.png";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={klarasLogo} alt="Klaras AI" className="h-10 w-auto" />
      <span className="font-display font-bold text-2xl text-text-primary">Klaras AI</span>
    </div>
  );
};

export default Logo;