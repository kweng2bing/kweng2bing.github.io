/**
 * Resume Page — The Professional Proof
 * 
 * This page presents your professional experience, education, and skills
 * in a clean, scannable format. It can also include a "Download PDF" button
 * so recruiters can grab a copy of your full resume.
 * 
 * In the routing setup (App.tsx), this is mounted at "/resume".
 * 
 * How to use:
 * - Replace the placeholder data with your real experience.
 * - To add a downloadable PDF, place your resume file in the `public/` folder
 *   (e.g., public/resume.pdf) and update the download link.
 * - Add or remove sections as needed (certifications, publications, etc.).
 */



interface Professional_Experience{
  company_name: string;
  position: string;
  date: string;
  achievements: string[];
}

const professional_experiences: Professional_Experience[] = [
  {
    company_name: "Horizon Media",
    position: "Search Engine Marketing Intern",
    date: "June 2024 - August 2024",
    achievements: [
      "Conducted daily optimization of Google Ads and Bing Ads campaigns, leveraging KPI-driven insights to uphold budget discipline, enhance conversion performance, and proactively mitigate fluctuations in campaign efficiency",
      "Examined over 1,000 search keywords daily from Google Ads and Bing Ads to identify high-value search terms and negative search terms, optimizing paid search campaigns for superior targeting and increasing click-through rates",
      "Pinpointed emerging trends in anime-related advertisements and delivered a company-wide presentation to over 2000 people, detailing strategic advantages and actionable steps for Horizon Media to capitalize on anime-related marketing strategies", ]
  },
  {
    company_name: "Horizon Media",
    position: "Search Engine Marketing Intern",
    date: "June 2024 - August 2024",
    achievements: [ 
      "Conducted daily optimization of Google Ads and Bing Ads campaigns, leveraging KPI-driven insights to uphold budget discipline, enhance conversion performance, and proactively mitigate fluctuations in campaign efficiency",
      "Examined over 1,000 search keywords daily from Google Ads and Bing Ads to identify high-value search terms and negative search terms, optimizing paid search campaigns for superior targeting and increasing click-through rates",
      "Pinpointed emerging trends in anime-related advertisements and delivered a company-wide presentation to over 2000 people, detailing strategic advantages and actionable steps for Horizon Media to capitalize on anime-related marketing strategies",]
  },
  {
    company_name: "Google",
    position: "Computer Science Summer Institute Intern",
    date: "July 2022 - August 2022",
    achievements: [
      "Developed fully functional web applications using HTML, CSS, and JavaScript, applying core software engineering and programming concepts such as variables, data types, functions,and product management across three interactive projects",
      "Coordinated with team members to develop a collaborative final project that included a live demonstration of its features and benefits to Google employees and community leaders",]
  },
  {
    company_name: "NYC Department of Citywide Administrative Services",
    position: "Customer Support & Monitor",
    date: "July 2023 - January 2024",
    achievements: [
      "Managed the administration of over 300 computer-based exams daily by coordinating candidate intake and swiftly resolving technical issues to minimize disruptions and ensure a seamless testing experience addressing technical issues promptly",
      "Directed an average of 100 customer walk-ins per week in navigating the civil service examination and resolved complex customer issues by collaborating with cross-functional teams to ensure a smooth and efficient process",

    ] 

  }
]
const Resume = () => {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
            Curriculum Vitae
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Resume
          </h1>
        </div>
        <a
          href="assets/resume.pdf"
          download
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors duration-100 hover:bg-primary/90"
        >
          Download PDF
        </a>
      </div>

      {/* Experience */}
      <section className="mt-12">
        <h2 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
          Experience
        </h2>
        <div className="mt-6 space-y-8">
          {professional_experiences.map((experience) => (
            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-semibold text-foreground">
                  {experience.position}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {experience.date}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                  {experience.company_name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  {experience.achievements.map((bullets) => (
                    <li> {bullets} </li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
          </div>
      </section>



      {/* Education */}
      <section className="mt-12">
        <h2 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
          Education
        </h2>
        <div className="mt-6">
          <div className="flex items-baseline justify-between">
            <h3 className="text-base font-semibold text-foreground">
              B.S. Computer Science and Mathematical Science Minor
            </h3>
            <span className="text-sm text-muted-foreground">2022 — 2025</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Binghamton University, SUNY
          </p>
        </div>
      </section>

      {/* Languages */}
      <section className="mt-12">
        <h2 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
          Languages
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "Git",
            "Docker",
            "Tailwind CSS",
            "REST APIs",
            "Python", 
            "C++", 
            "C", 
            "Java", 
            "LaTeX", 
            "SQL"
          ].sort().map((language) => (
            <span
              key={language}
              className="rounded-md border px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {language}
            </span>
          ))}
        </div>
      </section>
      {/* Tools and Frameworks */}
      <section className="mt-12">
        <h2 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
          Tools and Frameworks
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Git",
            "GitHub",
            "Vim",
            "VS Code",
            "Eclipse",
            "Git",
            "Docker",
            "Jupyter Notebook",
            "Google Analytics",
            "JUnit"
          ].sort().map((toolsAndFrameworks) => (
            <span
              key={toolsAndFrameworks}
              className="rounded-md border px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {toolsAndFrameworks}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Resume;
