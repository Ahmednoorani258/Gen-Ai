export default function Contact() {
    return (
        <>
            <section id="contact" class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6086.92885726262!2d67.04878066442903!3d24.88742064476658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjail!5e0!3m2!1sen!2s!4v1741025939986!5m2!1sen!2s" ></iframe>
                        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div class="lg:w-1/2 px-6">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p class="mt-1">Near Central JAil,Karachi, Pakistan</p>
                            </div>
                            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a class="text-indigo-700 leading-relaxed">ahmednoorani258@gmail.com</a>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p class="leading-relaxed">0335-3791610</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg p-8 shadow-md">
                        <h2 class="text-gray-100 text-xl text-lg mb-4 font-semibold">Get in Touch</h2>
                        <p class="leading-relaxed mb-5 text-gray-600 dark:text-gray-400">
                            Have a question or want to work together? Fill out the form below and I'll get back to you soon!
                        </p>
                        <form action="https://formsubmit.co/ahmednoorani258@gmail.com" method="POST">
                            <div class="relative mb-4">
                                <label for="name" class="leading-7 text-sm text-gray-600 dark:text-gray-400">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    class="w-full bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 text-xl py-2 px-4 leading-8 transition-all duration-200 ease-in-out"
                                />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600 dark:text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    class="w-full bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 text-xl py-2 px-4 leading-8 transition-all duration-200 ease-in-out"
                                />
                            </div>
                            <div class="relative mb-4">
                                <label for="message" class="leading-7 text-sm text-gray-600 dark:text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    class="w-full bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 text-xl py-2 px-4 h-32 resize-none leading-6 transition-all duration-200 ease-in-out"
                                ></textarea>
                            </div>
                            <button type="submit" class="w-full text-white bg-indigo-600 hover:bg-indigo-500 font-semibold py-2 px-6 rounded-lg transition-all duration-200 ease-in-out">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}