import React from 'react';
import { Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4 text-[14px] text-gray-300">
              <li>902 757 051 / 911 117 452</li>
              <li><a href="mailto:blog@q8negociospro.com" className="hover:text-white transition">blog@q8negociospro.com</a></li>
              <li><a href="mailto:clientes@q8negociospro.com" className="hover:text-white transition">clientes@q8negociospro.com</a></li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center hover:opacity-80 transition"><Twitter size={16} fill="currentColor" /></a>
              <a href="#" className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:opacity-80 transition"><Facebook size={16} fill="currentColor" /></a>
            </div>
          </div>

          {/* Espacio Vacío/Separador Central (imitando captura) */}
          <div className="hidden md:block"></div>

          {/* Aviso Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6">Aviso Legal</h3>
            <ul className="space-y-4 text-[14px] text-gray-300">
              <li><a href="#" className="hover:text-white transition">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-white transition">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-white transition">Política de cookies</a></li>
            </ul>
          </div>
        </div>
        
        {/* Marca Final */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-gray-100">
            Q8 Negocios Pro &copy; {new Date().getFullYear()} - Grupo Q8 Editorial
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;