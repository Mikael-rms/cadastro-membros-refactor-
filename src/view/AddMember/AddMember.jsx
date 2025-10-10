function AddMember(){
    return (
        <section className="bg-slate-900 h-screen w-screen p-10">
            <h1 className="text-white text-4xl font-bold flex justify-center items-center mb-6">
                Cadastro de Membro
            </h1>
            <form className="text-xl space-y-6 flex flex-col p-6 rounded-md shadow">
                <input className="bg-slate-100 border border-slate-300 px-4 py-2 rounded-md" type="text" placeholder="Nome"  />
                <input className="bg-slate-100 border border-slate-300 px-4 py-2 rounded-md" type="text" placeholder="Idade"  />
                <input className="bg-slate-100 border border-slate-300 px-4 py-2 rounded-md" type="text" placeholder="Nome"  />
                <input className="bg-slate-100 border border-slate-300 px-4 py-2 rounded-md" type="text" placeholder="Idade"  />
            </form>
        </section>
    )
}

export default AddMember;