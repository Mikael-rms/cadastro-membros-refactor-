function LoginPage() {
  return (
    <div className="bg-slate-900 h-screen w-screen flex flex-col justify-center items-center p-4">
      
      <h1 className="text-white text-4xl font-bold mb-16">
        Entrar ou Cadastrar
      </h1>

      <form className="flex flex-col space-y-4 w-full max-w-sm">
        
        <input 
          type="text" placeholder="nome" className="bg-slate-100 border border-slate-300 w-full px-4 py-2 rounded-md" />
        <input 
          type="email" placeholder="seu.email@exemplo.com" className="bg-slate-100 border border-slate-300 w-full px-4 py-2 rounded-md" />        
        <input 
          type="password" placeholder="password" className="bg-slate-100 border border-slate-300 w-full px-4 py-2 rounded-md" />
        <button 
          type="submit" className="mt-4 bg-blue-900 w-full p-2 rounded-xl text-white transition-all duration-300 ease-in-out hover:bg-blue-800" >
          Entrar
        </button>
        
      </form>

      <a 
        href="/recuperar-senha" className="mt-4 text-sm italic text-gray-400 hover:text-gray-300 transition duration-150" >
        Não consigo fazer login
      </a>

    </div>
  );
}
export default LoginPage;