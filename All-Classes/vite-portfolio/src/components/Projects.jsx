export default function Projects() {
    return (
        <>
            <section id="projects" class="text-gray-300 body-font bg-gray-900 py-24">
                <div class="container px-5 mx-auto">
                    <h1 class="sm:text-4xl text-3xl font-bold title-font mb-10 text-white text-center">Projects</h1>
                    <div class="flex flex-wrap -m-4 justify-center">

                        {/* <!-- Furniro App --> */}
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                                <img class="lg:h-56 md:h-44 w-full object-cover object-center" src="./assets/project1.png" alt="Furniro App"></img>
                                    <div class="p-6">
                                        <h2 class="text-xl font-semibold text-indigo-400 mb-2">Furniro App</h2>
                                        <p class="leading-relaxed text-gray-400 mb-4">A platform to buy modern furniture for home and office.</p>
                                        <a href="https://market-ready-ecommerce-app.vercel.app/" class="text-indigo-500 inline-flex items-center hover:underline">
                                            Live Demo &rarr;
                                        </a>
                                    </div>
                            </div>
                        </div>

                        {/* <!-- Resume Builder --> */}
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                                <img class="lg:h-56 md:h-44 w-full object-cover object-center" src="assets/project2.png" alt="Resume Builder"></img>
                                    <div class="p-6">
                                        <h2 class="text-xl font-semibold text-indigo-400 mb-2">Resume Builder</h2>
                                        <p class="leading-relaxed text-gray-400 mb-4">A tool to generate professional resumes in under 5 minutes.</p>
                                        <a href="https://updated-hackathon.vercel.app/" class="text-indigo-500 inline-flex items-center hover:underline">
                                            Live Demo &rarr;
                                        </a>
                                    </div>
                            </div>
                        </div>

                        {/* <!-- Music Academy --> */}
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                                <img class="lg:h-56 md:h-44 w-full object-cover object-center" src="./assets/project3.png" alt="Music Academy"></img>
                                    <div class="p-6">
                                        <h2 class="text-xl font-semibold text-indigo-400 mb-2">Music Academy</h2>
                                        <p class="leading-relaxed text-gray-400 mb-4">A platform to learn music and musical instruments.</p>
                                        <a href="https://nextjs-project-music-academy.vercel.app/" class="text-indigo-500 inline-flex items-center hover:underline">
                                            Live Demo &rarr;
                                        </a>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}