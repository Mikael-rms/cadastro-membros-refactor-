function LoginPage() {
  return (
    <div className="bg-slate-900 h-screen w-screen flex justify-center">
        <div>
          <h1 className="text-white text-4xl mt-40 font-bold">Login de Usuário</h1>
        </div>
        <div>
          <form className="flex flex-col mt-10">
            <input type="text" />
          </form>
        </div>
    </div>
  );
}   
export default LoginPage;