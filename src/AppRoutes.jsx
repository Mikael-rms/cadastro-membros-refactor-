import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './view/loginPage/homePage/homePage';
import LoginPage from './view/loginPage/loginPage';
import AddMember from './view/AddMember/AddMember';
import ListMembers from './view/ListMembers/ListMembers';
import EditMember from './view/EditMember/EditMember';
import DeleteMember from './view/DeleteMember/DeleteMember';

const AddMember = () => <div className="p-10 text-white bg-slate-800 h-screen"><h1>Adicionar Membro</h1></div>
const ListMembers = () => <div className="p-10 text-white bg-slate-800 h-screen"><h1>Listar Membros</h1></div>;
const HelpPage = () => <div className="p-10 text-white bg-slate-800 h-screen"><h1>Página de Ajuda</h1></div>;