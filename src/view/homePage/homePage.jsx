import { ChevronLeft } from "lucide-react"; 

function HomePage() {
    return (
    <section className="bg-slate-900 h-screen w-screen flex flex-col justify-center items-center p-4">
      
        <h1 className="text-white text-4xl font-bold mb-6">
            Cadastro de Membros IPBC
        </h1>

        <p className="text-2xl text-gray-400 mb-10">
            O que deseja fazer?
        </p>

    <div className="flex flex-col space-y-4 w-full max-w-sm">

        <button 
          type="submit" className="mt-4 bg-blue-900 w-full p-2 rounded-xl text-white transition-all duration-300 ease-in-out hover:bg-blue-800 cursor-pointer" >
          Adicionar Membro
        </button>
        <button 
          type="submit" className="mt-4 bg-blue-900 w-full p-2 rounded-xl text-white transition-all duration-300 ease-in-out hover:bg-blue-800 cursor-pointer" >
          Listar Membros
        </button>
        <button 
          type="submit" className="mt-4 bg-blue-900 w-full p-2 rounded-xl text-white transition-all duration-300 ease-in-out hover:bg-blue-800 cursor-pointer" >
          Editar Membro
        </button>
        <button 
          type="submit" className="mt-4 bg-blue-900 w-full p-2 rounded-xl text-white transition-all duration-300 ease-in-out hover:bg-blue-800 cursor-pointer" >
          Excluir Membro
        </button>
    
    </div>

    <div className="fixed top-0 left-0 p-6"> 
        <button className="inline-flex justify-center items-center text-white text-lg italic py-3 px-6 rounded-full shadow-lg hover:scale-105 hover:bg-slate-800 transition duration-300 cursor-pointer">
            <ChevronLeft className="mr-2" />
            logout
        </button>
    </div>

    <a href="/ajuda" className="mt-10 text-sm italic text-gray-400 hover:underline transition duration-150" >
        Ajuda
    </a>

    </section>
    );
}

export default HomePage;