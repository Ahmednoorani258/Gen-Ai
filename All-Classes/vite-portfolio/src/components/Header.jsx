export default function Header() {
    return (
        <>
            <header class="bg-gray-800 shadow-lg sticky top-0 z-50">
                <div class="container mx-auto flex flex-wrap p-5 items-center justify-between">
                    {/* -- Logo --> */}
                    <a href="#" class="flex items-center text-white font-bold text-2xl">
                        <img src=".././assets/portfoliologo.jpeg" alt="Logo" className="h-10 w-10 rounded-full border-2 border-gray-500"></img>
                            <span class="ml-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">My Portfolio</span>
                    </a>

                    {/* -- Mobile Menu Button --> */}
                    <button class="md:hidden flex items-center text-white focus:outline-none" id="menu-toggle">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>

                    {/* -- Navigation Links --> */}
                    <nav class="hidden md:flex space-x-6 text-white text-lg">
                        <a href="#about" class="hover:text-indigo-400 transition duration-300">About</a>
                        <a href="#projects" class="hover:text-indigo-400 transition duration-300">Projects</a>
                        <a href="#skills" class="hover:text-indigo-400 transition duration-300">Skills</a>
                        <a href="#contact" class="hover:text-indigo-400 transition duration-300">Contact</a>
                    </nav>
                </div>

                {/* -- Mobile Menu --> */}
                <div class="hidden md:hidden bg-gray-700 p-5 w-full text-center transition-all duration-300 ease-in-out" id="mobile-menu">
                    <a href="#about" class="block py-2 text-white hover:text-indigo-400">About</a>
                    <a href="#projects" class="block py-2 text-white hover:text-indigo-400">Projects</a>
                    <a href="#skills" class="block py-2 text-white hover:text-indigo-400">Skills</a>
                    <a href="#contact" class="block py-2 text-white hover:text-indigo-400">Contact</a>
                </div>
            </header>
        </>
    )
}