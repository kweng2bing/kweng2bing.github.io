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
          Hi, I'm <span className="text-primary">Kalvin </span>
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          I'm a developer focused on building practical projects that blend software engineering with applied machine learning. I work with  models to solve real problems like automating workflows, analyzing complex datasets, or experimenting with new ways to make systems smarter and more efficient. I bring a strong foundation in data analytics, using statistical reasoning and structured experimentation to guide decisions and improve performance. My work is driven by clarity, curiosity, and a commitment to shipping things that actually work.
        </p>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          Currently exploring integrating AI models with financial applications.
        </p>

        <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
          Hobbies
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href="https://github.com/kweng2bing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors duration-100"
          >
            <img 
              src="assets/github.svg"
              className= "w-6 h-6"
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kalvin-weng/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors duration-100"
          >
            <img 
              src="/assets/linkedln.svg"
              className= "w-6 h-6"
              alt="GitHub"
            />
          </a>
          {/* <a
            href="mailto:you@email.com"
            className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors duration-100"
          >
            Email
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default About;