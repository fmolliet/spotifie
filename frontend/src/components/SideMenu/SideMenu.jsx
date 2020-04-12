import React from 'react'
import { FiSearch, FiRadio, FiHome, FiDisc } from "react-icons/fi";

import './styles.css'

export default function SideMenu(){
    return (
        <div className="sidemenu">
            <ul>
                <li><a href=""><h2><FiHome /> Início</h2></a></li>
                <li><a href=""><h2><FiDisc /> Navegar</h2></a></li>
                <li><a href=""><h2><FiRadio /> Rádio</h2></a></li>
            </ul>
            
            <tr>Sua Biblioteca</tr>
            
            <ul>
                <li><a href="">Feito Para você</a></li>
                <li><a href="">Tocados recentemente</a></li>
                <li><a href="">Músicas Curtidas</a></li>
                <li><a href="">Albúns</a></li>
                <li><a href="">Artistas</a></li>
                <li><a href="">Podcasts</a></li>
            </ul>
            
            <tr id="title">Playlists</tr>
            <ul>
            <li><a href="">Nenhuma encontrada</a></li>

            </ul>
        </div>
    );
}