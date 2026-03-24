/*
 * About Page - Entry Point / Homepage
*/

const About = () => {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-20">
      <div className="space-y-6">
        <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
          About Me
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          I'm a software developer passionate about building clean, functional
          web applications. I enjoy working with modern JavaScript frameworks
          and turning ideas into real products.
        </p>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          Currently focused on full-stack development with React, TypeScript, and
          Node.js. I believe in writing code that is simple, readable, and
          well-tested.
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors duration-100"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors duration-100"
          >
            LinkedIn
          </a>
          <a
            href="mailto:you@email.com"
            className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors duration-100"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;