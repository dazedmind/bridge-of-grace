import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center p-8 relative px-12 pb-10">
      <h1 onClick={() => navigate('/')} className="text-2xl font-bold text-foreground cursor-pointer">Bridge of Grace</h1>

      <nav className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-6">
          <span>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              Who We Are
            </a>
          </span>
     
          <span>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              What We Do
            </a>
          </span>
          <span>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              Get Involved
            </a>
          </span>
          <button onClick={() => navigate('/donate')} className="px-4 py-2 bg-teal text-primary-foreground rounded-lg cursor-pointer">
            Donate
          </button>
        </div>
   
      </nav>
      <div className="bg-teal h-4 w-full absolute bottom-0 left-0"></div>
      <div className="bg-purple h-4 w-full absolute -bottom-4 left-0"></div>

    </div>
  );
};