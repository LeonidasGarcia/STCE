const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4 sticky top-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <a href="/">STCE</a>
                </div>
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#1" className="text-gray-300 hover:text-white">Bienvenida</a></li>
                    <li><a href="#2" className="text-gray-300 hover:text-white">CAS</a></li>
                    <li><a href="#2" className="text-gray-300 hover:text-white">Licitaciones</a></li>
                    <li><a href="#3" className="text-gray-300 hover:text-white">Acerca de</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;