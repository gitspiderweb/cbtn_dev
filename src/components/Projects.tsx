import ProjectItem from './ProjectItem';

const Projects = () => {
    const projects = [
        {
            title: "ACRET-PH Employee Portal",
            description: "Drupal 10-based internal management system for employee operations at ACRET Philippines. Features include time tracking, Google SSO authentication, automated daily reporting, custom REST APIs, and workflow management with email notifications. Built with custom Drupal modules and a Bootstrap-based theme to streamline HR processes and employee communications.",
            technologies: ["Drupal 10", "PHP", "Composer", "Symfony", "Bootstrap", "MySQL"],
            link: "https://acret-ph.com/",
            image: "/acret-ph-site.png"
        }
    ];

    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <div>
                <ul className="group/list">
                    {projects.map((project, index) => (
                        <ProjectItem key={index} {...project} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;
