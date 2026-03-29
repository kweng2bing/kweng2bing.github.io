/**
 * Projects Page — The Portfolio
 * 
 * This page showcases your work. It maps through an array of project data
 * and renders each one as a simple card with a title, description, tech tags,
 * and a link to the source or live demo.
 * 
 * In the routing setup (App.tsx), this is mounted at "/projects".
 * 
 * How it works:
 * - The `projects` array below acts as your "database" of work.
 * - To add a new project, just add a new object to the array.
 * - Each project card is rendered using `.map()`, so the layout
 *   scales automatically as you add more items.
 * 
 * What to customize:
 * - Replace the sample projects with your real work.
 * - Add or remove fields (e.g., add an image, a "Live Demo" link, etc.).
 */

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "GitHub Portfolio",
    description:
      "A brief description of what this project does and what problem it solves. Keep it to 1–2 sentences.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/yourusername/project-one",
  },
  {
    title: "Author Style LLM Fine Tuning Project",
    description:
      "Fine-tuned a large language model on a single author's works, building data processing pipelines, adapting tokenizers, and applying parameter-efficient training methods while avoiding overfitting and preserving broad prompt-response generality.",
    tags: [ "PyTorch", "HuggingFace", "Transformers"],
    link: "https://github.com/bu-cs480e-2025-3f/assignment-3-kweng2bing",
  },
  {
    title: "Search and Rescue Drone Simulator",
    description:
      "Engineered a modular drone simulation framework in Microsoft AirSim that captures real-time spatial data with LiDAR sensors, while enabling scalable sensor fusion pipelines and high-fidelity spatial awareness for search-and-rescue scenarios.",
    tags: ["AirSim", " Flask", "Unreal Engine"],
    link: "https://github.com/ezhengofficial/uav-map",
  },
];

const Projects = () => {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-20">
      <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
        Portfolio
      </p>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
        Projects
      </h1>

      <p className="mt-3 text-base text-muted-foreground">
        A selection of things I've built. Each card links to the source code.
      </p>

      <div className="mt-10 space-y-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border p-6 transition-colors duration-100 hover:border-primary/40 hover:bg-secondary/50"
          >
            <h2 className="text-lg font-semibold text-foreground">
              {project.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
