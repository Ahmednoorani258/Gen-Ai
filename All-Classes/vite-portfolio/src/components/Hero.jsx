export default function Hero() {
    return (
        <>
            <section id="hero" class="text-gray-300 body-font lg:px-24 bg-gray-900">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-white leading-tight drop-shadow-lg">
                            Welcome to My <span class="bg-gradient-to-r from-indigo-700 to-purple-900 text-transparent bg-clip-text">Portfolio</span>
                            <br class="hidden lg:inline-block"></br>
                            <br class="hidden lg:inline-block"></br>
                            <p class="text-2xl text-gray-200">Showcasing My Work</p>
                        </h1>
                        <p class="mb-8 leading-relaxed text-lg text-gray-400">Passionate about crafting modern, responsive, and visually appealing web designs. Explore my projects and get in touch!</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-gradient-to-r from-indigo-700 to-purple-900 border-0 py-3 px-8 focus:outline-none hover:opacity-90 rounded-lg text-lg shadow-lg transition-all duration-300">
                                View Projects
                            </button>
                            <button class="ml-4 inline-flex text-white bg-gradient-to-r from-indigo-700 to-purple-900 border-0 py-3 px-8 focus:outline-none hover:opacity-90 rounded-lg text-lg shadow-lg transition-all duration-300">
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded-lg shadow-xl border-4 border-white" alt="hero" src=".././assets/heroimg.jpg"></img>
                    </div>
                </div>
            </section>

        </>
    )
}