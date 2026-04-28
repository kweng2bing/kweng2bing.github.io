// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

interface courses{
  name: string,
  number: string,
  link: string,
  description: string,
  tags: string[],
}



const cs_classes: courses[] = [
    {
      name: "Introduction to Computer Networks",
      number: "CS428",
      link: "https://github.com/kweng2bing/cs428_computer_networks",
      description: "Communication protocols and layering, hardware-software infrastructures for networking, MAC protocols, data link protocols, switching, inter- and intra-domain routing, the TCP/IP protocol suite, transport protocols, application layer protocols, local and system area networks, wireless and sensor networks, overlay and virtual networks, client-server and peer-to-peer models, network programming with sockets, protocol design and implementation issues, network security.",
      tags: ['TCP/IP', 'UDP'],
    },
    {
      name: "Introduction to Machine Learning",
      number: "CS436",
      link: "https://github.com/kweng2bing/cs428_computer_networks",
      description: "This course provides a broad introduction to machine learning and its applications. Major topics include: supervised learning (generative/discriminative learning, parametric/non-parametric learning, support vector machines); computational learning theory (bias/variance tradeoffs, VC theory, large margins); unsupervised learning; semi-supervised learning; reinforcement learning. The course will give students the basic ideas and intuition behind different techniques as well as a more formal understanding of how and why they work. The course will also discuss recent applications of machine learning, such as to data mining, bioinformatics, and information retrieval.",
      tags: [],
    },
    {
      name: "Adv Topics - Obj Oriented Prog",
      number: "CS440",
      link: "https://github.com/kweng2bing/cs428_computer_networks",
      description: "Object-oriented programming and its concomitant design patterns provide rich abstractions for program development. These programs will eventually execute on real hardware, however. This course will investigate advanced object-oriented techniques and how they interact with hardware and operating system issues. We will ground our topics in C++, but the goal of the course will be to develop understanding that can be applied across languages. We will examine different design techniques for things such as memory management, and explore how and why they differ in performance and robustness. We will also cover idioms such as “”Resource Acquisition Is Initialization”” (RAII) and how they can be used to provide robust resource management for exceptions (exception safety). We will also devote time to covering generic programming and related topics such as expression templates. This is a growing area that seeks to decouple algorithms and data structures through the use of templates and other meta-programming techniques. These techniques exploit the fact that the C++ template mechanism is a language-within-a-language that is executed at compile-time rather than run-time. Additional topics include dynamic linking for techniques such as “”plug-ins”“, template instantiation mechanisms, template specialization, idioms for memory management, thread-safety issues, thread-safety, C++ reflection.",
      tags: [],
    },
    {
      name: "Program Models Emerg Platforms",
      number: "CS476",
      link: "https://github.com/kweng2bing/cs428_computer_networks",
      description: "The landscape of computation platforms has changed dramatically in recent years. Computing devices such as Unmanned Aerial Vehicles (UAVs) are on the horizon. Big data processing becomes an indispensable part of numerous applications. Multi-core CPUs are commonly deployed in computer systems. Programming on these emerging platforms remains a challenging task. This course introduces a number of state-of-the-art programming models on these platforms, and further explores the frontier of next-generation programming language design that may potentially impact the future programming practice for emerging platforms. In particular, the course investigates UAV programming, Big Data programming, and multi-core programming, with additional presentations on other platforms on the rise. Applications of these programming models range from high-performance computing, cyber-physical systems, databases, to energy-conscious systems.",
      tags: [],
    },
    {
      name: "Introduction to Deep Learning",
      number: "CS480E",
      link: "https://github.com/kweng2bing/cs428_computer_networks",
      description: "",
      tags: [],
    },
    {
      name: "Introduction to Natural Language Processing",
      number: "CS480P",
      link: "https://github.com/kweng2bing/cs428_computer_networks",
      description: "",
      tags: [],
    },


]

const math_classes: courses[] = [
    {
      name: "Advanced Linear Algebra",
      number: "MATH404",
      link: "https://github.com/kweng2bing/math461-topology",
      description: "",
      tags: [],
    },
    {
      name: "Probability Theory",
      number: "MATH447",
      link: "https://github.com/kweng2bing/math461-topology",
      description: "",
      tags: [],
    },
    {
      name: "Intro to Statistics",
      number: "MATH448",
      link: "https://github.com/kweng2bing/math461-topology",
      description: "",
      tags: [],
    },
    {
      name: "Topology I",
      number: "MATH461",
      link: "https://github.com/kweng2bing/math461-topology",
      description: "Study of topological spaces. Metric spaces, separation properties, connectivity, compactness. Prerequisites: C or better in each of MATH 304, MATH 323, and MATH 330, or consent of instructor. Fall only.",
      tags: [],
    },

]







const Coursework = () => {


  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Coursework</h1>
        <p className="mb-4 text-xl text-muted-foreground">Welcome to Coursework Page</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );




};

export default Coursework;
