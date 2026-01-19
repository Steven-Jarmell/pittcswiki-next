export type CoreCourseData = {
  id: string
  code: string
  title: string
  description: string
  credits: number
  prerequisites: string[]
  corequisites: string[]
  instructors: string[]
  sci_href: string
  terms_offered: {
    fall: boolean
    spring: boolean
    summer: boolean
  }
}

export const CoreCoursesData: Record<string, CoreCourseData> = {
  "401": {
    id: "401",
    code: "CMPINF 0401",
    title: "Intermediate Programming Using Java",
    description:
      "A rigorous introduction to the fundamental concepts and techniques of computer programming using the Java programming language. Targeted at students intending to major in computer science.",
    credits: 4,
    prerequisites: [],
    corequisites: [],
    instructors: [],
    sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0401",
    terms_offered: { fall: true, spring: true, summer: true },
  },
  "441": {
    id: "441",
    code: "CS 0441",
    title: "Discrete Structures for CS",
    description:
      "Understand and use discrete structures that are backbones of computer science. Introduces logic, proofs, sets, relations, functions, counting, and probability.",
    credits: 3,
    prerequisites: ["MATH 0220 or 0230 or 0235 or 0140 or 0221 or 0231"],
    corequisites: [],
    instructors: ["Donald Bonidie", "Nils Murrugarra LLerena"],
    sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0441",
    terms_offered: { fall: true, spring: true, summer: false },
  },
  "445": {
    id: "445",
    code: "CS 0445",
    title: "Algorithms and Data Structures 1",
    description:
      "Emphasizes study of basic data structures (stacks, queues, trees, lists) and their implementations using Java.",
    credits: 3,
    prerequisites: ["CMPINF 0401 or CS 0401 or COE 0401"],
    corequisites: [],
    instructors: [
      "Marina Barsky",
      "Sherif Khattab",
      "Timothy James",
      "Stephen Ellis",
    ],
    sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0445",
    terms_offered: { fall: true, spring: true, summer: true },
  },
  "447": {
    id: "447",
    code: "CS 0447",
    title: "Computer Organization and Assembly Language",
    description:
      "Study the components of computing systems common to most computer architectures. Introduces data representation, types of processors, and memory types.",
    credits: 3,
    prerequisites: ["CS 0445 or COE 0445"],
    corequisites: [],
    instructors: ["Jarrett Billingsley", "Luis F. N. Q. d. Oliveira"],
    sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0447",
    terms_offered: { fall: true, spring: true, summer: false },
  },
  "449": {
    id: "449",
    code: "CS 0449",
    title: "Introduction to Systems Software",
    description:
      "Covers topics related to the interface of hardware and software. It covers device interfaces and hardware synchronization.",
    credits: 3,
    prerequisites: ["CS 0445 or CS 0455"],
    corequisites: ["CS 0447 or CS 0456 or COE 0447"],
    instructors: ["Luis F. N. Q. d. Oliveira", "Jarrett Billingsley"],
    sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0449",
    terms_offered: { fall: true, spring: true, summer: false },
  },
  "1501": {
    id: "1501",
    code: "CS 1501",
    title: "Algorithms and Data Structures 2",
    description:
      "As the second in a two-course sequence on algorithms and data structures, this course covers a broad range of the most commonly used algorithms. Topics include searching algorithms, encryption, compression, graph algorithms, and dynamic programming.",
    credits: 3,
    prerequisites: ["CS 0441 or CS 0406", "CS 0445 or CS 0455 or COE 0445"],
    corequisites: [],
    instructors: [
      "Nicholas Farnan",
      "Sherif Khattab",
      "Marcelo A. R. d'Almeida",
    ],
    sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1501",
    terms_offered: { fall: true, spring: true, summer: true },
  },
  "1502": {
    id: "1502",
    code: "CS 1502",
    title: "Formal Methods in Computer Science",
    description:
      "Introduction to the theory of information and computation as a physical phenomenon. Covers finite automata, computability, reducibility, and complexity.",
    credits: 3,
    prerequisites: ["CS 0441 or CS 0406", "CS 0445 or CS 0455 or COE 0445"],
    corequisites: [],
    instructors: ["Thumrongsak Kosiyatrakul"],
    sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1502",
    terms_offered: { fall: true, spring: true, summer: false },
  },
  "1503": {
    id: "1503",
    code: "CS 1503",
    title: "Mathematical Foundations of Machine Learning",
    description:
      "Introductory course covering essential foundational ideas in probability and statistics for machine learning.",
    credits: 4,
    prerequisites: [
      "CS 0441 or CS 0406",
      "MATH 0280 or MATH 1180 or MATH 1185",
    ],
    corequisites: [],
    instructors: ["Marina Barsky", "Patrick Skeba"],
    sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1503",
    terms_offered: { fall: true, spring: true, summer: false },
  },
  "220": {
    id: "220",
    code: "MATH 0220",
    title: "Calculus I",
    description:
      "Introduction to calculus including limits, continuity, derivatives, applications of derivatives, and basic integration.",
    credits: 4,
    prerequisites: [],
    corequisites: [],
    instructors: [],
    sci_href: "https://courses.sci.pitt.edu/courses/view/MATH-0220",
    terms_offered: { fall: true, spring: true, summer: true },
  },
  "230": {
    id: "230",
    code: "MATH 0230",
    title: "Calculus II",
    description:
      "Continuation of Calculus including techniques of integration, applications of integration, differential equations, sequences, and series.",
    credits: 4,
    prerequisites: ["MATH 0220"],
    corequisites: [],
    instructors: [],
    sci_href: "https://courses.sci.pitt.edu/courses/view/MATH-0230",
    terms_offered: { fall: true, spring: true, summer: true },
  },
  "280": {
    id: "280",
    code: "MATH 0280",
    title: "Linear Algebra",
    description:
      "Study of linear systems, matrices, vector spaces, eigenvalues, eigenvectors, and applications to computer science and other fields.",
    credits: 3,
    prerequisites: [],
    corequisites: [],
    instructors: [],
    sci_href: "https://courses.sci.pitt.edu/courses/view/MATH-0280",
    terms_offered: { fall: true, spring: true, summer: true },
  },
}
