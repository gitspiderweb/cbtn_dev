export default function About() {
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    About
                </h2>
            </div>
            <div>
                <p className="mb-4">
                    I'm a <span className="font-medium text-slate-200">developer and designer</span> passionate about building seamless
                    digital experiences that unite thoughtful design with technical
                    excellence. My work thrives at the crossroads of clean,
                    <span className="font-medium text-slate-200">accessible web development</span> and visually engaging <span className="font-medium text-slate-200">graphic design</span>,
                    where every detail matters for both performance and aesthetics.
                </p>
                <p className="mb-4">
                    Currently, I'm a Software Developer at <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://acret-ph.com/" target="_blank" rel="noreferrer noopener">Acret-Philippines Inc.</a>
                    , where I focus on transforming design documents into dynamic,
                    client-focused websites. I specialize in <span className="font-medium text-slate-200">Drupal CMS</span>—managing
                    data, implementing new features, handling robust site traffic,
                    and extending site functionality with <span className="font-medium text-slate-200">custom PHP modules</span> to meet
                    unique project requirements.
                </p>
                <p className="mb-4">
                    My background spans a range of creative and technical roles, from
                    designing print-ready templates and <span className="font-medium text-slate-200">e-commerce solutions</span> for
                    stationery products to developing <span className="font-medium text-slate-200">enterprise web applications</span>.
                    Previously, as a Product Setup Engineer at <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://nltd.com/" target="_blank" rel="noreferrer noopener">Northern Lights
                        Technology Development</a>, I leveraged my expertise in <span className="font-medium text-slate-200">Adobe
                    InDesign</span>, <span className="font-medium text-slate-200">Illustrator</span>, and <span className="font-medium text-slate-200">Photoshop</span> to create high-quality
                    business collateral.
                </p>
                <p className="mb-4">
                    I actively leverage AI-assisted development tools like <span className="font-medium text-slate-200">GitHub Copilot</span> and <span className="font-medium text-slate-200">Claude</span> to enhance productivity and code quality. I embrace <span className="font-medium text-slate-200">spec-driven development</span> methodologies, ensuring clear requirements and systematic implementation that lead to maintainable, scalable solutions.
                </p>
                <p>
                    Outside of work, I'm a fan of a healthy lifestyle and enjoy
                    running, going to the gym, and biking.
                </p>
            </div>
        </section>
    );
}

