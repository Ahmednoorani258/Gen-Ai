export default function About() {
    return (
        <>
            <section id="about" class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-col">
                    <div class="lg:w-4/6 mx-auto">
                        <div class="relative rounded-lg h-64 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full brightness-75" src="./assets/about.jpeg"></img>
                                <h1 class="absolute text-5xl font-bold text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg">
                                    About Me
                                </h1>
                        </div>
                        <div class="flex flex-col sm:flex-row mt-10">
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img src="./assets/heroimg.jpg" alt=""></img>
                                </div>
                                <div class="flex flex-col items-center text-center justify-center">
                                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
                                    <div class="w-12 h-1 bg-indigo-700 rounded mt-2 mb-4"></div>
                                    <p class="text-base text-gray-100 font-bold text-lg">Front-End Developer</p>
                                </div>
                            </div>
                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p class="leading-relaxed text-gray-300 text-lg mb-4">I'm Muhammad Ahmed Noorani, a passionate frontend web developer and graphic designer dedicated to crafting modern, user-friendly digital experiences. With expertise in <span class="text-indigo-700">Tailwind CSS, Aceternity UI, and ShadCN UI</span>, I specialize in building sleek, high-performance web applications. My work focuses on creating seamless UI/UX, ensuring every project is both visually appealing and functionally robust.</p>
                                <a class="text-purple-900 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}