import { CoursesDataType } from "@/types/CoursesDataType"

export type CourseInfoDataType = {
  metadata: {
    generated: string
  }
  courses: CoursesDataType[]
}

export const CourseInfoData: CourseInfoDataType = {
  metadata: {
    generated: "2020-05-09T04:21:39.454Z",
  },
  courses: [
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0004",
      title: "INTRODUCTION TO COMPUTER PROGRAMMING-BASIC",
      id: "CS0004",
      credits: 3,
      description:
        "This is a first course in computer science.  It is designed to be of special interest to students majoring in one of the social sciences or humanities.  Objectives of this course include use of the computer in an interactive environment; problem analysis and the development of algorithms; learning the basic language; designing; coding; and documenting programs using techniques of good programming style.",
      requirements:
        " DSAS Algebra General Ed. Requirement, DSAS Quant.-Formal Reason General Ed. Requirement\n",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0007",
      title: "INTRODUCTION TO COMPUTER PROGRAMMING",
      id: "CS0007",
      credits: 3,
      description:
        "This is a first course in computer science programming.  It is recommended for those students intending to major in computer science who do not have the required background for cs 0401.  It may also be of interest to students majoring in one of the social sciences or humanities.  The focus of the course is on problem analysis and the development of algorithms and computer programs in a modern high-level language.",
      requirements:
        " DSAS Algebra General Ed. Requirement, DSAS Quant.-Formal Reason General Ed. Requirement\n",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0008",
      title: "INTRODUCTION TO COMPUTER PROGRAMMING WITH PYTHON",
      id: "CS0008",
      credits: 3,
      description:
        "This is course is designed as a first course in computer science programming.  It is recommended for those students majoring in one of the natural sciences, social sciences, or humanities who wish to learn the fundamentals of programming.  It is also useful to students intending to major in computer science who do not have the required background for CS 0401.  The focus of this course is on problem analysis, the development of algorithms and computer programs in python. Instruction will be provided to students interested in taking CS 401 in converting python programs to Java.",
      requirements: " DSAS Quant.-Formal Reason General Ed. Requirement\n",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0010",
      title: "INTRODUCTION TO COMPUTING FOR SYSTEMS ENGINEERS",
      id: "CS0010",
      credits: 4,
      description:
        "All of the CS 001X courses will introduce students to the concepts of computing and computer programming. Students in these courses will learn how a computer works and how to write programs in order to use the computer as a problem solving tool. A major focus of the class will be on developing problem-solving skills (e.g., how to decompose a problem into more manageable parts and how to combine those parts into an overall solution).  CS 0010 in particular will focus on problems related to IoT and engineering. Students will be required to purchase a Raspberry Pi and sensors in order to complete the projects and labs assigned throughout the course.",
      requirements: "Future Sections",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0011",
      title: "INTRODUCTION TO COMPUTING FOR SCIENTISTS",
      id: "CS0011",
      credits: 4,
      description:
        "All of the CS 001X courses will introduce students to the concepts of computing and computer programming. Students in these courses will learn how a computer works and how to write programs in order to use the computer as a problem solving tool. A major focus of the class will be on developing problem-solving skills (e.g., how to decompose a problem into more manageable parts and how to combine those parts into an overall solution). CS 0011 in particular will focus on problems related to the natural sciences with an emphasis on computational biology. Domain-specific projects and labs will be assigned throughout the course to encourage students in the natural sciences to apply computing to their field of study.",
      requirements: "Current Sections",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0012",
      title: "INTRODUCTION TO COMPUTING FOR THE HUMANITIES",
      id: "CS0012",
      credits: 4,
      description:
        "All of the CS 001X courses will introduce students to the concepts of computing and computer programming. Students in these courses will learn how a computer works and how to write programs in order to use the computer as a problem solving tool. A major focus of the class will be on developing problem-solving skills (e.g., how to decompose a problem into more manageable parts and how to combine those parts into an overall solution). CS 0012 in particular will focus on problems related to the humanities and allied social sciences. Domain-specific projects and labs will be assigned throughout the course to encourage students in these fields to apply computing to their studies.",
      requirements: "Future Sections",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0090",
      title: "SUSTAINABILITY AND COMPUTING",
      id: "CS0090",
      credits: 3,
      description:
        "What is the environmental impact of websites such as Facebook or Amazon?  How is society affected by throwing away old computers?  The purpose of this course is to introduce the intersection of computers and society.  Sustainability will be used as a concept to bridge the tradeoffs between technological and ecological forces.  Topics include but are not limited to: energy production, e-books, telecommuting and e-waste.  No computer programming or math background required.",
      requirements: "",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0134",
      title: "WEB SITE DESIGN AND DEVELOPMENT",
      id: "CS0134",
      credits: 3,
      description:
        "This course will provide a basic understanding of the methods and techniques of developing a simple to moderately complex web site.  Using the current standard web page language, students will be instructed on creating and maintaining a simple web site.  After the foundation language has been established, the aid of an internet editor will be introduced.  A second web-based language will be included to further enhance the web sites.",
      requirements: "Current Sections",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0155",
      title: "DATA WITCHCRAFT",
      id: "CS0155",
      credits: 3,
      description:
        "This course is an introduction to data science, designed as a first course in computer science, for non-CS majors and CS minors within the honors college, aiming to introduce students to basic data management technologies and data analytics skills. The course will consist of about 1/3 of introduction to computer programming, 1/3 of introduction to data management technologies, and 1/3 of introduction to data analytics. The course will adopt the point of view of a user of data (e.g. who is just combining data and analyzing it using tools) and not a provider of data (e.g. who would be implementing a database-driven web site), as is typically the case for related courses for CS majors.",
      requirements:
        " DSAS Quant.-Formal Reason General Ed. Requirement\n            ",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0334",
      title: "INTERMEDIATE WEB SITE DESIGN AND DEVELOPMENT",
      id: "CS0334",
      credits: 3,
      description:
        "The course will consist of advanced implementations of both markup as well as scripting languages. In addition, students will be introduced to a graphical interface application that will allow them to explore concepts of server side web development. A reflective programming language and database application will be used to introduce the server side web development concepts.",
      requirements:
        " PREQ: CS 0007 or 0134 or 0401 or INFSCI 0017 (Min Grade 'C' or Transfer)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0401",
      title: "INTERMEDIATE PROGRAMMING",
      id: "CMP0401",
      credits: 4,
      description:
        "This course is a rigorous introduction to the fundamental concepts and techniques of computer programming using the java programming language.  This is a first course for students who intend to major in computer science.",
      requirements: " DSAS Quant.-Formal Reason General Ed. Requirement\n",
      replaces: "CS0401",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0441",
      title: "DISCRETE STRUCTURES FOR CS",
      id: "CS0441",
      credits: 3,
      description:
        "The purpose of this course is to understand and use (abstract) discrete structures that are backbones of computer science.  In particular, this class is meant to introduce logic, proofs, sets, relations, functions, counting, and probability, with an emphasis on applications in computer science.",
      requirements:
        " CREQ: MATH 0220 or 0230 or 0235 or 0140 (Min Grade 'C' or Transfer) or (Plan: CS-MN or CSCI-MN and MATH 0120)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0445",
      title: "DATA STRUCTURES",
      id: "CS0445",
      credits: 3,
      description:
        "This course emphasizes the study of the basic data structures of computer science (stacks, queues, trees, lists) and their implementations using the java language included in this study are programming techniques which use recursion, reference variables, and dynamic memory allocation.  Students in this course are also introduced to various searching and sorting methods and also expected to develop an intuitive understanding of the complexity of these algorithms.",
      requirements:
        " PREQ: CS 0401 or COE 0401 or 0422 or CIST 0150 (MIN GRADE 'C' or Transfer)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0447",
      title: "COMPUTER ORGANIZATION AND ASSEMBLY LANGUAGE",
      id: "CS0447",
      credits: 3,
      description:
        "The purpose of this course is to study the components of computing systems common to most computer architectures.  In particular, this class is meant to introduce data representation, types of processors, memory types and hierarchy, and device drivers.  The students will learn MIPS assembly language, the design of arithmetic and logic units, and basic designs for RISC processors.",
      requirements:
        " CREQ: CS 0445 or COE 0445 or 0458 (Min Grade 'C' or Transfer)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0449",
      title: "INTRODUCTION TO SYSTEMS SOFTWARE",
      id: "CS0449",
      credits: 3,
      description:
        "This course covers topics related to the interface of hardware and software.  It covers device interfaces and hardware synchronization at the lowest level of the operating system, the linkage of operating system services to application software, and the fundamental mechanisms for computer communications.",
      requirements:
        " PREQ: CS 0445 or CS 0455 (Min Grade 'C' or Transfer); CREQ: CS 0447 or CS 0456 or COE 0447 or COE 0147",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0590",
      title: "SOCIAL IMPLICATIONS OF COMPUTING TECHNOLOGY",
      id: "CS0590",
      credits: 3,
      description: "Academic Career:",
      requirements: "Course Attributes:",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-0699",
      title: "SPECIAL TOPICS IN COMPUTER SCIENCE",
      id: "CS0699",
      credits: 3,
      description:
        "This course is designed to introduce the student to computer security terminology, techniques and controls with a data centric approach to securing information. It is meant to be an introductory course and will focus on breadth instead of depth with respect to topics such as risk and security controls for network, host, web, database, software security, CANbus, SCADA, cloud. Introduction to malware analysis, forensics, cryptography, and threat intelligence in the enterprise is also covered. Students will also perform basic security assessments using various network and host security tools.",
      requirements:
        " PREQ: CS 0401 or COE 0401 or CS 0004 or 0007 or 0008 (Min Grade 'C' or Transfer for All Listed Courses)",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1501",
      title: "ALGORITHM IMPLEMENTATION",
      id: "CS1501",
      credits: 3,
      description:
        "The course covers a broad range of the most commonly used algorithms:  some examples include algorithms for sorting, searching, encryption, compression, and local search.  The students will implement and test several algorithms.  The course is programming intensive.",
      requirements:
        " PREQ: (CS 0441 or CS 0406) and (CS 0445 or CS 0455 or COE 0445) ; (MIN GRADE 'C'  or Transfer FOR ALL COURSES LISTED)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1502",
      title: "FORMAL METHODS IN COMPUTER SCIENCE",
      id: "CS1502",
      credits: 3,
      description:
        "The course is an introduction to the theory of information and computation as a physical phenomenon. The course covers standard formalizations of computational concepts and proofs of noteworthy implications of these formalizations. Typical topics include: finite automata, computability, reducibility, and complexity.",
      requirements:
        " PREQ: (CS 0441 or CS 0406) and (CS 0445 or CS 0455 or COE 0445) ; (MIN GRADE C'  or Transfer FOR ALL COURSES LISTED)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1510",
      title: "ALGORITHM DESIGN",
      id: "CS1510",
      credits: 3,
      description:
        "This course will cover methods and strategies that are useful for the design of nonnumeric algorithms.  Students are expected to design their own algorithms.",
      requirements:
        " PREQ: [(CS 1501 or COE 1501) and CS 1502] or (CS 0458 and CS 1710); MIN GRADE 'C' or Transfer FOR ALL COURSES LISTED",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1511",
      title: "THEORY OF COMPUTATION",
      id: "CS1511",
      credits: 3,
      description:
        "Understanding the theory of computation provides deeper insights into various topics in computer science.  This is an introductory level theory course.  The aim of this course is to study the power (or lack of it) of various models of computation.  Topics to be covered include automata, formal languages, computability, and computational complexity.",
      requirements:
        " PREQ: CS 1502 (MIN GRADE 'C' or Transfer FOR ALL COURSES LISTED)",
      terms_offered: {
        SPRING: true,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1520",
      title: "PROGRAMMING LANGUAGE FOR WEB APPLICATIONS",
      id: "CS1520",
      credits: 3,
      description:
        "Various programming paradigms will be studied using java and scripting languages.  The use of java in programming web based applications, network applications, and the use of the extensive java libraries will be studied.  The programming paradigm of building software by gluing components will be explored through the use of scripting languages such as perl and JavaScript.  Applications include developing guis and internet programming.",
      requirements: " PREQ: CS 0445 or COE 0445; (MIN GRADE 'C' or Transfer)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1530",
      title: "SOFTWARE ENGINEERING",
      id: "CS1530",
      credits: 3,
      description:
        "The purpose of this course is to provide a general survey of software engineering.  Some of the topics covered include: project planning and management, design techniques, verification and validation, and software maintenance.  Particular emphasis is on a group project in which a group of students implement a system from its specification.",
      requirements: " PREQ: CS 0445 or COE 0445; (MIN GRADE 'C' or Transfer)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1538",
      title: "INTRODUCTION TO SIMULATION",
      id: "CS1538",
      credits: 3,
      description:
        "The course introduces students to the concepts, definitions, techniques applicable to the simulation of systems.  Both continuous and discrete modeling are covered, with emphasis on the latter.  The objective of this course is to familiarize the students with several modern discrete simulation languages, and their use in modeling.  Topics include:  systems characterization, classification, and modeling; pertinence of probability and statistics theory for stochastic processes and model measurement; discrete systems simulation viewpoints; software modeling techniques.",
      requirements:
        " PREQ: CS 0447 and (STAT 1000 or 1100 or 1151 or MATH 1153) (Min Grade 'C' or Transfer for All Listed Courses)",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1541",
      title: "INTRODUCTION TO COMPUTER ARCHITECTURE",
      id: "CS1541",
      credits: 3,
      description:
        "Examination of computer architecture and hardware system organization.  Topics include:  CPU organization, sequential and microprogrammed control, instruction set implementation, memory organizations, input/output structure, peripherals and computer communications.",
      requirements:
        " PREQ: (CS 0447 or COE 0447) and (CS 0449 or COE 0449) ; (MIN GRADE 'C' or Transfer)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1550",
      title: "INTRODUCTION TO OPERATING SYSTEMS",
      id: "CS1550",
      credits: 3,
      description:
        "An introduction to basic concepts of operating systems, common to most computer systems, which interfaces the machine with upper-level programs.  This course will introduce processes as processing unit, process management, concurrency, communication, memory management and protection, and file systems.",
      requirements:
        " PREQ: (CS 0447 or COE 0447 or COE 0147) and (CS 0449 or COE 0449) or (0456 and 1750); MIN GRADE 'C'  or TRANSFER FOR ALL COURSES LISTED",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1555",
      title: "DATABASE MANAGEMENT SYSTEMS",
      id: "CS1555",
      credits: 3,
      description:
        "The objective of this course is to provide an in-depth knowledge of database systems design. Thus, the emphasis is on how to model ones own data and how to use available database management systems effectively. Towards this end, the relational and the object-relational models are discussed in great detail and object-oriented and other data models are also presented. Commercial database management systems are examined and students get practical experience through the use of such systems.",
      requirements: " PREQ: CS 1501 (Min Grade 'C')",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1566",
      title: "INTRODUCTION COMPUTER GRAPHICS",
      id: "CS1566",
      credits: 3,
      description:
        "This course offers an in-depth exploration of fundamental concepts in 2d and 3d computer graphics. The bulk of the course is devoted to 3d modeling, geometric transformations, and 3d viewing and rendering.",
      requirements:
        " PREQ: (CS 0447 or 0456 or COE 0447 or COE 0147); (MIN GRADE 'C'  or TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1567",
      title: "PROGRAMMING SYSTEM DESIGN ON A MOBILE ROBOT PLATFORM",
      id: "CS1567",
      credits: 3,
      description:
        "Students will be introduced to a variety of programming techniques and paradigms, for implementing medium- to large scale software systems.  System integration is done on a mobile robot platform rather than a traditional desktop system.  However, this is not a course in robotics.  It is a course about building systems in a real-world environment.",
      requirements:
        " PREQ: CS (0441 and (0445 or COE 0445)) or (0406 and 0455) (MIN GRADE 'C' or Transfer), MIN GPA: 3.25",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1571",
      title: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE",
      id: "CS1571",
      credits: 3,
      description:
        "This course will provide an introduction to the fundamental concepts and techniques underlying the construction of intelligent computer systems.  Topics covered in the course include:  problem solving and search, logic and knowledge representation, planning, reasoning and decision-making in the presence of uncertainty, and machine learning.",
      requirements:
        " PREQ: (CS 1501 or COE 1501) and CS 1502 (Min Grade 'C' or Transfer for All Listed Courses)",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1621",
      title: "STRUCTURE PROGRAMMING LANGUAGES",
      id: "CS1621",
      credits: 3,
      description:
        "An analytical examination of modern high-level programming language structures; including design specification and implementation.  Advanced forms of data types, expressions, and control primitives.  Relationship of storage management techniques and language design.",
      requirements:
        " PREQ: CS (0441 and 0445) or (0406 and 0455); (MIN GRADE 'C' or TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1622",
      title: "INTRODUCTION TO COMPILER DESIGN",
      id: "CS1622",
      credits: 3,
      description:
        "This course will introduce the basic concepts of compiler design and implementation.  Topics include lexical analysis, various types of parsers, intermediate and object code generation and code optimization.  The material will be presented from an implementation point of view rather than a formal approach.  The impact of language design on compilers will also be examined.",
      requirements:
        " PREQ: CS 0441 and ((CS or COE 0447) or (CS 0406 and 0456)); (MIN GRADE 'C'  OR TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1631",
      title: "SOFTWARE DESIGN METHODOLOGY",
      id: "CS1631",
      credits: 3,
      description:
        "Construction of large computerized systems proceeds through the stages of requirements analysis, specification, and implementation.  This course deals with requirements analysis and specification, in particular, methodologies for improving the reliability of specifications (executable specifications and system phototypes).",
      requirements:
        " PREQ: (CS 0441 and (CS or COE 0445)) or (CS 0406 and 0455); (MIN GRADE 'C' OR TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        SPRING: true,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1632",
      title: "SOFTWARE QUALITY ASSURANCE",
      id: "CS1632",
      credits: 3,
      description:
        "This course provides students with a broad understanding of modern software testing and quality assurance. Although it will cover testing theory, the emphasis is on providing practical skills in software testing currently used in industry. To that end, it will cover: manual and automated tests, test-driven and behavior-driven development, performance testing, and understanding and developing a testing process.",
      requirements:
        " PREQ: (CS 0445 or COE 0445 or CS 0455) or (PLAN COE and (CS 0445 or COE 0445) (Min Grade 'C'  or Transfer for All Listed Courses)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1635",
      title: "INTERFACE DESIGN METHODOLOGY",
      id: "CS1635",
      credits: 3,
      description: "Academic Career:",
      requirements: "\n            ",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1637",
      title: "INTRODUCTION TO HUMAN-COMPUTER INTERACTION",
      id: "CS1637",
      credits: 3,
      description:
        "The focus of the course is on the design of human-centered systems that people find usable, desirable, and useful. The course will introduce students to user-centered practices in Human Computer Interaction. The course will cover the theory and practical application of Human-Computer Interaction concepts and ideas. Students will gain knowledge on diverse methods and tools to understand, improve, and create technology that harmonizes with and improves human capabilities, goals, and social environments.",
      requirements: " CS 1501.",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1640",
      title: "BIOINFORMATICS SOFTWARE DESIGN",
      id: "CS1640",
      credits: 3,
      description:
        "This course will develop software for bioinformatic applications.",
      requirements:
        " PREQ: CS 1501 or COE 1501 or BIOSC 1540 (Min Grade 'C' or Transfer); PLAN: Bioinformatics or Computational Biology",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1645",
      title: "INTRODUCTION TO HIGH PERFORMANCE COMPUTING SYSTEMS",
      id: "CS1645",
      credits: 3,
      description:
        "This course is an introduction to the architecture of and software techniques for parallel and high performance computing systems.  The content includes fundamental aspects of vector processing, shared-memory, and distributed-memory systems.  Specific applications in parallel processing paradigms will be covered.",
      requirements:
        " PREQ: CS 0447 and 0449 and 1501; (MIN GRADE 'C' OR TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1651",
      title: "ADVANCED SYSTEMS SOFTWARE",
      id: "CS1651",
      credits: 3,
      description:
        "To discuss in depth some advanced features of fundamental importance in the design of operating systems.  The subjects discussed include interprocess communication, real-time scheduling, advanced file systems, security and protection mechanisms.  The objective of the course is to provide an understanding of these advanced issues, as well as to bring awareness of the known solutions to these problems and to the limitations of these solutions.",
      requirements:
        " PREQ: CS 1550 or 1312 or 1792; (MIN GRADE 'C' OR TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1652",
      title: "DATA COMMUNICATION AND COMPUTER NETWORKS",
      id: "CS1652",
      credits: 3,
      description:
        "This course will include basic principles and topics of computer communications.  An overview of interfaces that interconnect hardware and software components, describing the procedures and rules involved in the communication process and the software which controls computers communication. Discussion on network architectures, design principles, basic protocol suites, and the concept of internetworking.",
      requirements:
        " PREQ: (CS 0447 or COE 0447) and (CS 0449 or COE 0449); (MIN GRADE 'C'  OR TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1653",
      title: "APPLIED CRYPTOGRAPHY AND NETWORK SECURITY",
      id: "CS1653",
      credits: 3,
      description:
        "This course will provide the necessary conceptual background and hands-on experience to understand the most common cryptographic algorithms and protocols and how to use them to secure computers networks and distributed applications.  Topics include: cryptographic algorithms for data confidentiality, authentication, and integrity, user authentication methods (secure tokens and biometrics), internet security protocols, security in local area networks, firewalls, and intrusion detection systems.",
      requirements:
        " PREQ: (CS 0449 or COE 0449) and (CS 1501 or COE 1501) or (CS 0458 or CS 1750); (MIN GRADE 'C'  OR TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1655",
      title: "SECURE DATA MANAGEMENT AND WEB APPLICATIONS",
      id: "CS1655",
      credits: 3,
      description:
        "The main objectives for this course are:  (1) to study in more depth query optimization and security, (2) to study advanced topics; data mining, information retrieval, and web data management, and (3) to expose students to advanced data and information management technologies, while gaining hands-on experience.  These include mobile data management, continuous queries and their applications in areas such as biomedical informatics and e-commerce.",
      requirements:
        " PREQ: CS 0441 and (CS 0445 or COE 0445); (MIN GRADE 'C' OR TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1656",
      title: "INTRODUCTION TO DATA SCIENCE",
      id: "CS1656",
      credits: 3,
      description:
        "This course aims to expose students to different data management, data manipulation, and data analysis techniques. The class will cover all the major data management paradigms (relational/SQL, XML/Xquery, RDF/SPARQL) including NOSQL and data stream processing approaches. Going beyond traditional data management techniques, the class will expose students to information retrieval, data mining, data warehousing, network analysis, and other data analysis topics. Time permitting, the class will include big data processing techniques, such as the map/reduce framework.",
      requirements:
        " PREQ: CS 1501 or COE 1501 (MIN GRADE 'C' or Transfer For All Listed Coures)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1660",
      title: "INTRODUCTION TO CLOUD COMPUTING",
      id: "CS1660",
      credits: 3,
      description:
        "Cloud computing has emerged as a new paradigm for efficient and highly elastic delivery of computing services over the Internet to achieve economies of scale. The course will explore the concept of Cloud Computing, considering both its benefits and challenges. The course will also cover the basic design principles and architectures of Cloud Computing, including its usability and utility to deliver efficiently and flexibly infrastructure, platform and software as a service. Topics include types of public, private and hybrid cloud computing services, data centers architecture and deployment, cloud computing programming models, virtualization and virtual networking and storage, and large-scale distributed processing framework to manage, process and store big data applications running in clustered systems.  The course will also include hands-on projects focused on developing applications on a MapReduce and Hadoop cluster. Upon successfully completing the course of the course, students will gain understating of the goals, benefits and models of cloud computing, and how storage, processing and services are designed and managed in a virtualized environment. Through hands-on projects, students will demonstrate proficiency in deploying and evaluating cloud computing applications and services. They will be able to design and deploy data-centered applications and services, and efficiently use frameworks and tools for data analytics.",
      requirements:
        " CS 1550: Intro to Operating Systems; MIN GRADE: C or Transfer",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1666",
      title: "PRINCIPLES OF COMPUTER GAME DESIGN AND IMPLEMENTATION",
      id: "CS1666",
      credits: 3,
      description:
        "The purpose of this course is to give an introduction and insight into designing and implementing video games.  This course questions the nature, intent, and motivation of games and how to construct a compelling experience for users. It is a project-based course, with a final project being to make a game with a small team.",
      requirements: " PREQ: CS 1501 or COE 1501; (MIN GRADE 'C' or Transfer)",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1671",
      title: "HUMAN LANGUAGE TECHNOLOGIES",
      id: "CS1671",
      credits: 3,
      description:
        "This course provides an introduction to the field of natural language processing (NLP) - the creation of computer programs that can understand, generate, and learn languages used by humans.  It will expose students to real-world applications such as speech recognition, information retrieval, dialogue agents, question answering systems, and machine translations by means of computational techniques including search algorithms, dynamic programming, hidden Markov models, probabilistic context free grammars, and related machine learning algorithms.",
      requirements: " PREQ: CS 1501; (MIN GRADE 'C'  OR TRANSFER)",
      terms_offered: {
        SPRING: true,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1674",
      title: "INTRODUCTION TO COMPUTER VISION",
      id: "CS1674",
      credits: 3,
      description:
        "In this class, students will learn the basics of modern computer vision. The course will cover topics such as image filtering, edge detection, feature extraction, description and matching, grouping and clustering, object detection, activity recognition, and recognition with a human in the loop.",
      requirements: " PREQ: CS 1501 or COE 1501 (MIN GRADE 'C' OR TRANSFER)",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1675",
      title: "INTRODUCTION TO MACHINE LEARNING",
      id: "CS1675",
      credits: 3,
      description:
        "This introductory machine learning course will give an overview of many models and algorithms used in modern machine learning, including linear models, multi-layer neural networks, support vector machines, density estimation methods, bayesian belief networks, clustering, ensemble methods, and reinforcement learning. The course will give the student the basic ideas and intuition behind these methods, as well as, a more formal understanding of how and why they work. Through homework assignments students will have an opportunity to experiment with many machine learning techniques and apply them to various real-world datasets.",
      requirements:
        " PREQ: CS 1501 or COE 1501 and (STAT 1000 or 1100 or 1151 or ENGR 0020) (Min Grade 'C' or Transfer for All Listed Courses)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1699",
      title: "SPECIAL TOPICS IN COMPUTER SCIENCE",
      id: "CS1699",
      credits: 3,
      description:
        "This is a special topics course that allows the computer science department to test run a course before deciding whether to permanently add it to our curriculum.",
      requirements: "Current Sections",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1900",
      title: "INTERNSHIP",
      id: "CS1900",
      credits: 6,
      description:
        'This course places the student in an "on-the-job" setting in which he/she receives practical experience in a supervised training environment.',
      requirements: " Capstone Course\n",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1902",
      title: "DIRECTED STUDY",
      id: "CS1902",
      credits: 3,
      description:
        "This course is designed to give students the opportunity to design a plan of study to be agreed upon by the student and a supervising faculty member.  This course does not satisfy the computer science capstone requirement.",
      requirements: "Current Sections",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1906",
      title: "COMPUTER SCIENCE COOPERATIVE PROGRAM",
      id: "CS1906",
      credits: 1,
      description: "Co-op",
      requirements:
        " Summer 2020Class No.DaysTimesRoomInstructor(s)TA(s)TypeSessionWritingClass No.: 19510 (1010)Days: ByApptTimes: 12:00 am - 12:00 amRoom: TBA Instructor(s): TA(s): Type: INDSession: 12WWriting: ",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1950",
      title: "DIRECTED RESEARCH",
      id: "CS1950",
      credits: 3,
      description:
        "This course is designed to give students the opportunity to design a plan of study to be agreed upon by the student and a supervising faculty member.",
      requirements: " Capstone Course\n",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-1980",
      title: "TEAM PROJECT DESIGN AND IMPLEMENTATION",
      id: "CS1980",
      credits: 3,
      description:
        "Students will choose a project from proposals provided by our faculty and industry partners.  Teams will consist of 3 or 4 students and they will be supervised by a project mentor.  This course satisfies the capstone requirement.",
      requirements:
        "CS 1550; PLAN: Computer Science (CS-BS, CSCI-BS); (MIN GRADE 'C' OR TRANSFER  FOR ALL COURSES LISTED)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2000",
      title: "MS THESIS RESEARCH",
      id: "CS2000",
      credits: 6,
      description: "Master's thesis research.",
      requirements: "Current Sections",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2001",
      title: "RESEARCH TOPICS/COMPUTER SCIENCE",
      id: "CS2001",
      credits: 3,
      description:
        "This course introduces the students to the research being conducted in the computer science department.  Active, state-of-the-art research topics will be covered.",
      requirements: "Future Sections",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2002",
      title: "RESEARCH EXPERIENCE/COMPUTER SCI",
      id: "CS2002",
      credits: 3,
      description:
        "In this course, each student will perform exploratory research topics covered in CS 2001.  The research will be supervised and directed by faculty members working in the area of the topic chosen by the student.",
      requirements: " PREQ: CS 2001",
      terms_offered: {
        SPRING: true,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2003",
      title: "COMPUTER SCIENCE COLLOQUIUM",
      id: "CS2003",
      credits: 1,
      description:
        "The computer science colloquium is offered as a one unit graduate class, with a satisfactory/no credit (S/NC) grading option. The aim of this weekly meeting is to discuss the most recent advances in computer science.",
      requirements:
        " PREQ: CS 2001 and 2002; PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2012",
      title: "ALGORITHM DESIGN",
      id: "CS2012",
      credits: 3,
      description:
        "This course will cover methods and strategies that are useful for the design of nonnumeric algorithms.  Students are expected to design their own algorithms.",
      requirements:
        " PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2045",
      title: "INTRODUCTION TO HIGH PERFORMANCE COMPUTING SYSTEMS",
      id: "CS2045",
      credits: 3,
      description:
        "This course is an introduction to the architecture of and software techniques for parallel and high performance computing systems.  The content includes fundamental aspects of vector processing, shared-memory and distributed-memory systems.  Students will be expected to complete a number of projects demonstrating specific applications in parallel processing paradigms.",
      requirements: "Future Sections",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2053",
      title: "APPLIED CRYPTOGRAPHY AND NETWORK SECURITY",
      id: "CS2053",
      credits: 3,
      description:
        "This course will provide the necessary conceptual background and hands-on experience to understand the most common cryptographic algorithms and protocols and how to use them to secure computers networks and distributed applications.  Topics include: cryptographic algorithms for data confidentiality, authentication, and integrity, user authentication methods (secure tokens and biometrics), internet security protocols, security in local area networks, firewalls, and intrusion detection systems.",
      requirements:
        " PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2055",
      title: "DATABASE MANAGEMENT SYSTEMS",
      id: "CS2055",
      credits: 3,
      description:
        "The objective of this course is to provide an in-depth knowledge of database systems design. Thus, the emphasis is on how to model one's own data and how to use available database management systems effectively. Towards this end, the relational and the object-relational models are discussed in great detail and object-oriented and other data models are also presented. Commercial database management systems are examined and students get practical experience through the use of such systems.",
      requirements:
        " PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2056",
      title: "INTRODUCTION TO DATA SCIENCE",
      id: "CS2056",
      credits: 3,
      description: "Academic Career:",
      requirements: "    \n",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2110",
      title: "THEORY OF COMPUTATION",
      id: "CS2110",
      credits: 3,
      description:
        "This course deals with computability theory, automata theory and formal languages.  Various models of computation will be examined, their relations to each other and their properties will be studied.  Topics include models for computable functions and church's thesis, models for recognizers and their relation to formal grammars, algorithmically solvable and unsolvable problems, and the complexity of computations.",
      requirements:
        " PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        SPRING: true,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2150",
      title: "DESIGN & ANALYSIS OF ALGORITHMS",
      id: "CS2150",
      credits: 3,
      description:
        "This course deals with the analysis of algorithms and the relevance of such analysis to the design of efficient algorithms.  The derivation of results that are primarily of theoretical significance shares importance with the practical task of designing efficient algorithms.  Topics covered: searching and sorting, graph algorithms, arithmetic, np-completeness, and lower bound techniques.",
      requirements:
        " PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        SPRING: true,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2210",
      title: "COMPILER DESIGN",
      id: "CS2210",
      credits: 3,
      description:
        "The design and implementation of current high level languages.  Emphasis is placed on the structure of compilers. Lexical, syntax and semantic analysis as well as target code generation and register allocation.  Storage management techniques for recursive and retentive control structures. Formal specification techniques.",
      requirements:
        " PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2310",
      title: "SOFTWARE ENGINEERING",
      id: "CS2310",
      credits: 3,
      description:
        "This course will examine the software engineering process in general, the considerations for large software projects in particular, and then will focus on the conversion of software specifications into production code.  Topics will include modern design methods, safety-critical software, verification and validation, testing theory and methods, reengineering of legacy software.",
      requirements:
        " PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        SPRING: true,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2410",
      title: "COMPUTER ARCHITECTURE",
      id: "CS2410",
      credits: 3,
      description:
        "A study of the hardware structure of computer systems and subsystems.  Topics include:  processor architecture, parallelism and pipelining, cache and main memory organization, i/o controllers and i/o processors, and interconnection structures.",
      requirements:
        " PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2510",
      title: "COMPUTER OPERATING SYSTEMS",
      id: "CS2510",
      credits: 3,
      description:
        "An in-depth study of the control abstractions in modern operating systems and the issues involved in efficient implementation of those abstractions.  Topics will include concurrency and its control, memory management, resource management, and structure of distributed and parallel operating systems.  These topics will be developed through the lectures, assigned readings from the literature, and an examination of actual operating systems.",
      requirements:
        " PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2520",
      title: "WIDE AREA NETWORKS",
      id: "CS2520",
      credits: 3,
      description:
        "The course provides an understanding of the basic principles of broadband networks.  It will introduce protocols suitable for broadband networks, with emphasis on atm.  Other technologies, such as frame relay and smds, will be discussed. The course will also address important design issues for high speed networks including characterizations of (a) network traffic and its implications on network design, and (b) application performance objectives, traffic policing, and congestion control algorithms that can meet those diverse objectives.",
      requirements:
        " PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        SPRING: true,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2530",
      title: "COMPUTER AND NETWORK SECURITY",
      id: "CS2530",
      credits: 3,
      description:
        "The goal of the proposed course is to provide our graduate students the necessary background and hands on experience to do well in systems research or advanced development with an emphasis on security.  The instructor will lecture on cryptographic algorithms for data confidentiality, authentication, and integrity, security protocols for the internet and local area networks, firewalls, intrusion detection systems, defense against denial of service attacks, user authentication methods, cryptographic file systems, secure email stenography and usable security.",
      requirements: "",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2550",
      title: "PRINCIPLES OF DATABASE SYSTEMS",
      id: "CS2550",
      credits: 3,
      description:
        "The main objective of this course is to provide an in-depth knowledge of database management systems design.  Topics covered at length are concurrency control including concurrency on structured data, recovery and query optimization. Some important aspects of distributed databases are discussed, including distributed concurrency control and fault tolerance.",
      requirements:
        " PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        SPRING: true,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2620",
      title: "INTERDISCIPLINARY MODELING AND VISUALIZATION",
      id: "CS2620",
      credits: 3,
      description:
        "This course discusses computer graphics, modeling and visualization techniques used to solve scientific problems. Focus falls on identifying scientific problems, proposing solutions involving graphical modeling and visualization, and designing, implementing, and evaluating the solutions. Examples include interactive software systems, quantitative analysis tools, or new applications of existing visualizations methods.",
      requirements:
        " PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2710",
      title: "FOUNDTNS OF ARTIFICIAL INTELLGNC",
      id: "CS2710",
      credits: 3,
      description:
        "This course covers the foundational techniques in artificial intelligence, including:  problem definition and analysis, heuristic search, adversarial search, knowledge representation, planning and constraint satisfaction, and methods for reasoning under uncertainty.  Attention will be given to the roles of these techniques in the design of intelligent agents.",
      requirements:
        " PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2731",
      title: "INTRO NATURAL LANGUAGE PROCSSNG",
      id: "CS2731",
      credits: 3,
      description:
        "This course provides an introduction to the field of Natural Language Processing (NLP) - the creation of computer programs that can understand, generate, and learn natural language. Natural language understanding will be used as a vehicle to introduce the three major subfields of NLP: syntax, semantics, and pragmatics. The course will introduce both knowledge-based and statistical methods for NLP, and will illustrate the use of such methods in a variety of application areas.",
      requirements:
        " PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2770",
      title: "COMPUTER VISION",
      id: "CS2770",
      credits: 3,
      description: "Academic Career:",
      requirements: "    \n",
      terms_offered: {
        SPRING: true,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2900",
      title: "GRADUATE INTERNSHIP",
      id: "CS2900",
      credits: 1,
      description:
        "A professional internship may be taken at any time during the course of graduate study.  Ph.D. students may take this course up to two times for credit, MS students may take it at most once.",
      requirements: "Current Sections",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2905",
      title: "COMPUTER SCIENCE COOPERATIVE PROGRAM",
      id: "CS2905",
      credits: 1,
      description: "Academic Career:",
      requirements:
        " Fall 2020Class No.DaysTimesRoomInstructor(s)TA(s)TypeSessionWritingClass No.: 31402 (1010)Days: ByApptTimes: 12:00 am - 12:00 amRoom: TBA Instructor(s): TA(s): Type: INDSession: ATWriting: ",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2910",
      title: "MS PROJECT",
      id: "CS2910",
      credits: 3,
      description:
        "A project under the supervision of a faculty member or a group of faculty members.",
      requirements: "Current Sections",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-2990",
      title: "INDEPENDENT STUDY",
      id: "CS2990",
      credits: 9,
      description:
        "This course involves study which is approved by the faculty adviser but carried out independently by student.",
      requirements: "Current Sections",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3000",
      title: "RESEARCH AND DISSERTATION PHD",
      id: "CS3000",
      credits: 9,
      description:
        "Any adjunct or full member of the graduate faculty of the department may direct doctoral dissertations.",
      requirements: "Current Sections",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3150",
      title: "ADV TOPCS DSGN & ANALYS ALGORTHM",
      id: "CS3150",
      credits: 3,
      description:
        "This course covers recent results in the design and analysis of algorithms.  The contents change from term to term.",
      requirements: " PREQ: CS 2150",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3210",
      title: "ADV TOPICS PROGRAMMING LANGUAGES",
      id: "CS3210",
      credits: 3,
      description:
        "Advanced program representations & program analysis techniques for compilers, optimizers, software tools & parallel systems.  Analysis techniques include advanced register allocation algorithms, data flow frameworks & techniques, optimizing algorithms & slicing techniques.  Program representations include various types of dependence graphs & static single assignment.  Analyses & code improving transformations for various types of parallel architectures including VLIW, superscalar, shared memory & distributed memory machines.  Current research topics in prog languages.",
      requirements: " PREQ: CS 2210",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3220",
      title: "COMPILING TECHNQS/PARALLEL SYMS",
      id: "CS3220",
      credits: 3,
      description:
        "This course will study techniques used in the design of parallelizing compilers.  Techniques for computing dependencies and program representations suitable for parallelizing software will be presented.  Topics will include detection of fine and coarse parallelism, program transformations and scheduling techniques to exploit parallelism, on shared and distributed memory architectures, and techniques for debugging parallel software.",
      requirements: " PREQ: CS 2210",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3410",
      title: "ADV TOPICS COMPUTER ARCHITECTURE",
      id: "CS3410",
      credits: 3,
      description:
        "This course will survey current topics in computer architecture.",
      requirements: " PREQ:  CS 2410",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3510",
      title: "ADV TOPICS IN OPERATING SYSTEMS",
      id: "CS3510",
      credits: 3,
      description:
        "An in-depth study of specific topics of modern operative systems, the theory behind them, and their implementation. Topics may include advanced concepts in distributed systems, multimedia systems, file systems, resource management, distributed shared memory, among others.",
      requirements: " PREQ: CS 2510",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3525",
      title: "ADVANCED TOPICS IN SUCURITY AND PRIVACY",
      id: "CS3525",
      credits: 3,
      description:
        "This course covers current research topics in computer security and privacy.  The topics covered will change from term to term.",
      requirements: "",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3530",
      title: "ADV TOPCS DISTBD & REAL-TIME SYS",
      id: "CS3530",
      credits: 3,
      description:
        "This course will introduce the students to the foundations of real-time systems.  The emphasis is on understanding predictability and resource management, at the level of the processor, network, memory, disks, i/o devices, etc.  Fault tolerance is another main emphasis of the course, since it is a requirement for real-time behavior.  Specific real-time fault-tolerant schemes will be discussed.",
      requirements: "",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3550",
      title: "ADV TOPICS IN MANAGEMENT OF DATA",
      id: "CS3550",
      credits: 3,
      description:
        "The course is devoted to a reevaluation of traditional database techniques and the examination of emerging approaches for the reliable and efficient data management in large distributed systems.  Examples of such systems include multi databases, mobile and multimedia databases, and advanced OS and AI.  Topics include object management, workflows and extended transactions, semantics-based concurrency control and recovery, active and real-time database techniques.  The concepts will be examined within the context of a state-of the-art system.",
      requirements: "",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3551",
      title: "ADV TOPICS IN DISTBD INFOR SYS",
      id: "CS3551",
      credits: 3,
      description:
        "This course focuses on emerging technologies for large scale, distributed information systems.  Topics to be examined include data and information modeling, heterogeneous data integration, data distribution, caching and replication, web databases, distributed query processing and searching, multimodal access, quality of data, content networks, and pervasive data management.",
      requirements: " PREQ: CS 2510 and 2550",
      terms_offered: {
        SPRING: true,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3570",
      title: "ADVANCED TOPICS IN USER INTERFACE",
      id: "CS3570",
      credits: 3,
      description: "Academic Career:",
      requirements:
        " Fall 2019Class No.DaysTimesRoomInstructor(s)TA(s)TypeSessionWritingClass No.: 29738 (1010)Days: TuThTimes: 11:00 am - 12:15 pmRoom: SENSQ 5313Instructor(s): J. BiehlTA(s): Type: SEMSession: ATWriting: ",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3580",
      title: "SEM: ADV TOPC PARALLEL COMPUTING",
      id: "CS3580",
      credits: 3,
      description:
        "Different topics related to parallel and systolic computations will be covered at various levels of details. Example of such topics are:  architectures of parallel processors and VISI computational networks, languages and programming environments for parallel systems, the design and analysis of parallel and systolic algorithms, reconfigurable and data driven processor arrays, complexity measures of VISI computations, and the application of parallel processors to supercomputing.",
      requirements: "",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3650",
      title: "VISUAL LANGUAGES AND PROGRAMMING",
      id: "CS3650",
      credits: 3,
      description:
        "This course covers the fundamentals of visual language theory, iconic and symbolic representations, parsing techniques, semantics and pragmatics of visual languages, visual programming systems, visual querying systems, visual information systems and knowledge-based visualization.",
      requirements: "",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3710",
      title: "ADV TOPICS ARTIFICIAL INTELLGNC",
      id: "CS3710",
      credits: 3,
      description:
        "This course will survey current topics in artificial intelligence.",
      requirements: " PREQ: CS 2710",
      terms_offered: {
        SPRING: true,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3720",
      title: "ADVANCED TOPICS IN INTERNET OF THINGS",
      id: "CS3720",
      credits: 3,
      description:
        "A practical course in expert systems involving discussions of fundamentals of building expert systems, discussion of open problems, and designing and building a protype expert system.",
      requirements: "Past Sections",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3730",
      title: "ADV TOPCS NATURAL LANG PROCSSNG",
      id: "CS3730",
      credits: 3,
      description:
        "Natural language processing (NLP) is primarily concerned with creating computer programs that interact with human languages.  The objective of this course is to continue the studies of natural language processing (NLP), to explore selected topics among syntax, semantics, and pragmatics more deeply, and to discuss recent advances in (NLP).",
      requirements: " PREQ: CS 2731",
      terms_offered: {
        SPRING: false,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3750",
      title: "ADV TOPICS IN MACHINE LEARNING",
      id: "CS3750",
      credits: 3,
      description:
        "This course will survey advanced topics in machine learning, for example, inductive learning, reinforcement learning, and neural network learning.",
      requirements: " PREQ: CS 2750",
      terms_offered: {
        SPRING: true,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3790",
      title: "ADV TOPICS IN ED TECH: PERSONALIZED LEARNING ENVIRONMENTS",
      id: "CS3790",
      credits: 3,
      description:
        'The 2010 National Educational Technology Plan outlined how "The challenge for our education system is to leverage the learning sciences and modern technology to create engaging, relevant, and personalized learning experiences for all learners." While instruction has traditionally been one-size-fits-all, the rise of web-based and mobile technologies provide an opportunity to automatically detect what learners need and adapt instruction to their unique prior knowledge, motivation, and preferences. In this seminar course, we survey different types of personalization in educational technologies (e.g., cognitive, metacognitive, social, motivational), computational modeling techniques for representing learners and their needs, and best practices in designing personalized supports for learners. Students will lead one or more class discussions, participate in the other discussions, and complete a group course project. \n\n',
      requirements: "",
      terms_offered: {
        SPRING: true,
        FALL: false,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3800",
      title: "ADVANCED TOPICS IN COMPUTING",
      id: "CS3800",
      credits: 0,
      description: "",
      requirements: "",
      terms_offered: {
        SPRING: false,
        FALL: true,
        SUMMER: false,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/CS-3900",
      title: "PHD DIRECTED STUDY",
      id: "CS3900",
      credits: 9,
      description:
        "The course may involve a project under the supervision of a faculty member.",
      requirements: "Current Sections",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
    {
      sci_href: "http://courses.sci.pitt.edu/courses/view/FTDJ-0000",
      title: "FULL-TIME DISSERTATION STUDY",
      id: "FTDJ0000",
      credits: 0,
      description:
        "Please click the headings below to view the hidden sections.",
      requirements: "",
      terms_offered: {
        SPRING: true,
        FALL: true,
        SUMMER: true,
      },
    },
  ],
}
