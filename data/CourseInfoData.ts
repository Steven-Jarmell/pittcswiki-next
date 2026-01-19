import { CoursesDataType } from "@/types/CoursesDataType"

export type CourseInfoDataType = {
  metadata: {
    generated: string
  }
  courses: CoursesDataType[]
}

export const CourseInfoData: CourseInfoDataType = {
  metadata: {
    generated: "2025-12-14T00:26:13.691Z",
  },
  courses: [
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0001",
      title: "SCI FIRST-YEAR SEMINAR",
      id: "CMPINF0001",
      credits: 1,
      description:
        "The first-year seminar will provide students with an introduction to SCI and the University of Pittsburgh. The format of this course will be mixed between large group informational sessions, and small group discussions and activities. The small group sections will be led by members of our advising staff, undergraduate peer mentors, and/or faculty. The course will be split approximately evenly between large-group informational sessions and small-group discussions.",
      requirements: "PROG: School of Computing and Information",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [
        "Amy Vaught",
        "Anna Hermann",
        "Emily Bennett",
        "Emily Park",
        "Jen Gentzel",
        "Jennifer Welton",
        "John Faulkner",
        "Kailyn Lukaszewski",
        "Kristine Pugliese",
        "Lynnsey Doane",
        "Rachel Parkes",
      ],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0002",
      title: "SCI TRANSFER STUDENT SEMINAR",
      id: "CMPINF0002",
      credits: 1,
      description:
        "Transfer Seminar is taught by SCI's undergraduate academic advisors and peer advisors and is designed to help internal and external transfer students make a smooth transition into the School of Computing and Information, identify programs of study that fit their interests, make use of school-and campus-wide resources, and prepare for the transition from college to career.  Discussions will address a range of topics including academic mechanics (e.g., advising, registration, university policies), academic support services and opportunities (e.g., academic program options, tutoring centers, study abroad, internships and co-ops, undergraduate research), student support services (e.g., career services, counseling center, student health services), career exploration, and other student opportunities.",
      requirements:
        "PROG:School Computing and Information or School of Information Science",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Rachel Parkes"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0010",
      title: "BIG IDEAS IN COMPUTING AND INFORMATION",
      id: "CMPINF0010",
      credits: 4,
      description:
        "Computing and information systems underlie nearly every facet of life in today's highly-networked societies. Accordingly, there are many paths through the degree programs offered by the School of Computing and Information, each focusing on different aspects of the theories, practices, and applications of computing and information. This course will introduce students to a variety of core principles and important themes that cross-cut this array of computing- and information-oriented disciplines, as well as explore the types of work that individuals educated in these disciplines engage in.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Joseph Graham", "William Garrison"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0011",
      title: "BIG IDEAS IN COMPUTING AND INFORMATION FOR TRANSFER STUDENTS",
      id: "CMPINF0011",
      credits: 3,
      description:
        "Computing and information systems underlie nearly every facet of life in today's highly-networked societies. Accordingly, there are many paths through the degree programs offered by the School of Computing and Information, each focusing on different aspects of the theories, practices, and applications of computing and information. This course will introduce students to a variety of core principles and important themes that cross-cut this array of computing- and information-oriented disciplines, as well as explore the types of work that individuals educated in these disciplines engage in.",
      requirements: "CREQ: CMPINF 0002",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Joseph Graham", "William Garrison"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0020",
      title: "Sab Exchange: Communication",
      id: "CMPINF0020",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Expression: Communication",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0021",
      title: "Sab Exchange: Diversity",
      id: "CMPINF0021",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Diversity",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0022",
      title: "Sab Exchange: Ethical/pol",
      id: "CMPINF0022",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Ethical/Pol",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0023",
      title: "Sab Exchange: Free Elective",
      id: "CMPINF0023",
      credits: 1,
      description: "",
      requirements: "Department Consent Required",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0024",
      title: "Sab Exchange: Global & Cr. Cul",
      id: "CMPINF0024",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Global&Cr. Cult",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0025",
      title: "Sab Exchange: Humanistic",
      id: "CMPINF0025",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Humanistic",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0026",
      title: "Sab Exchange: Math",
      id: "CMPINF0026",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Quantitative: Mathematics",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0027",
      title: "Sab Exchange: Project-based",
      id: "CMPINF0027",
      credits: 1,
      description: "",
      requirements: "Department Consent Required",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0028",
      title: "Sab Exchange: Research",
      id: "CMPINF0028",
      credits: 1,
      description: "",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0029",
      title: "Sab Exchange: Science Nonseq.",
      id: "CMPINF0029",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Science Nonseq.",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0030",
      title: "Sab Exchange: Science Seq",
      id: "CMPINF0030",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Science Seq",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0031",
      title: "Sab Exchange: Service Learning",
      id: "CMPINF0031",
      credits: 1,
      description: "",
      requirements: "Department Consent Required",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0032",
      title: "Sab Exchange: Soc/behav",
      id: "CMPINF0032",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Soc/Behav",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0033",
      title: "Sab Exchange: Stats",
      id: "CMPINF0033",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Quantitative: Statistics",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0034",
      title: "Sab Exchange: Tech/bus/res Wri",
      id: "CMPINF0034",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Expression: Tech/Bus/Res writ",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0035",
      title: "SAB EXCHANGE: MAJOR EQUIVALENT",
      id: "CMPINF0035",
      credits: 1,
      description:
        "Students participating in an exchange program where in-major equivalents have been determined by their undergraduate director will be enrolled in this course.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0036",
      title: "INTERNATIONAL EXCHANGE PROGRAM",
      id: "CMPINF0036",
      credits: 0,
      description:
        "Used to adjust tuition and fees for Study Abroad Exchange programs",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0040",
      title: "Sab Prp: Communication",
      id: "CMPINF0040",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Expression: Communication",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0041",
      title: "Sab Prp: Diversity",
      id: "CMPINF0041",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Diversity",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0042",
      title: "Sab Prp: Ethical/pol",
      id: "CMPINF0042",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Ethical/Pol",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0043",
      title: "Sab Prp: Free Elective",
      id: "CMPINF0043",
      credits: 1,
      description: "",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0044",
      title: "Sab Prp: Global & Cr. Cult",
      id: "CMPINF0044",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Global&Cr. Cult",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0045",
      title: "Sab Prp: Humanistic",
      id: "CMPINF0045",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Humanistic",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0046",
      title: "Sab Prp: Math",
      id: "CMPINF0046",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Quantitative: Mathematics",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0047",
      title: "Sab Prp: Project-based",
      id: "CMPINF0047",
      credits: 1,
      description: "",
      requirements: "Department Consent Required",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0048",
      title: "Sab Prp: Research",
      id: "CMPINF0048",
      credits: 1,
      description: "",
      requirements: "Department Consent Required",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0049",
      title: "Sab Prp: Science Nonseq.",
      id: "CMPINF0049",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Science Nonseq.",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0050",
      title: "Sab Prp: Science Seq",
      id: "CMPINF0050",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Science Seq",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0051",
      title: "Sab Prp: Service Learning",
      id: "CMPINF0051",
      credits: 1,
      description: "",
      requirements: "Department Consent Required",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0052",
      title: "Sab Prp: Soc/behav",
      id: "CMPINF0052",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Soc/Behav",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0053",
      title: "Sab Prp: Stats",
      id: "CMPINF0053",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Quantitative: Statistics",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0054",
      title: "Sab Prp: Tech/bus/res Writ",
      id: "CMPINF0054",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Expression: Tech/Bus/Res writ",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0055",
      title: "SAB PRP: ADMINISTRATIVE FEES",
      id: "CMPINF0055",
      credits: 0,
      description:
        "This is a study abroad course used for the sole purpose of attaching the study abroad admin fee.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0056",
      title: "Sab Prp: Major Equivalent",
      id: "CMPINF0056",
      credits: 1,
      description: "Minimum Credits: 1\n    Maximum Credits: 5",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0060",
      title: "Study Abroad: Communication",
      id: "CMPINF0060",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Expression: Communication",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0061",
      title: "Study Abroad: Diversity",
      id: "CMPINF0061",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Diversity",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0062",
      title: "Study Abroad: Ethical/pol",
      id: "CMPINF0062",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Ethical/Pol",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0063",
      title: "Study Abroad: Free Elective",
      id: "CMPINF0063",
      credits: 1,
      description: "",
      requirements: "Department Consent Required",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0064",
      title: "Study Abroad: Global & Cr. Cul",
      id: "CMPINF0064",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Global&Cr. Cult",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0065",
      title: "Study Abroad: Humanistic",
      id: "CMPINF0065",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Humanistic",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0066",
      title: "Study Abroad: Math",
      id: "CMPINF0066",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Quantitative: Mathematics",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0067",
      title: "Study Abroad: Project-based",
      id: "CMPINF0067",
      credits: 1,
      description: "",
      requirements: "Department Consent Required",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0068",
      title: "Study Abroad: Research",
      id: "CMPINF0068",
      credits: 1,
      description: "",
      requirements: "Department Consent Required",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0069",
      title: "Study Abroad: Science Nonseq.",
      id: "CMPINF0069",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Science Nonseq.",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0070",
      title: "STUDY ABROAD: SCIENCE SEQ",
      id: "CMPINF0070",
      credits: 1,
      description: "",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0071",
      title: "Study Abroad: Service Learning",
      id: "CMPINF0071",
      credits: 1,
      description: "",
      requirements: "Department Consent Required",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0072",
      title: "Study Abroad: Soc/behav",
      id: "CMPINF0072",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Soc/Behav",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0073",
      title: "Study Abroad: Stats",
      id: "CMPINF0073",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Quantitative: Statistics",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0074",
      title: "Study Abroad: Tech/bus/res Wri",
      id: "CMPINF0074",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Expression: Tech/Bus/Res writ",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0080",
      title: "Intl Cybersecurity And Privacy",
      id: "CMPINF0080",
      credits: 1,
      description: "",
      requirements:
        "Department Consent Required\n            Course Attributes: GER Pmathic Ctext: Ethical/Pol",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["TBD"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0401",
      title:
        "INTERMEDIATE PROGRAMMING (replacing INFSCI 0017 and CS 0401, effective April 30, 2021)",
      id: "CMPINF0401",
      credits: 4,
      description:
        "This is an intermediate programming course that focuses on programming via an object-oriented paradigm. Students entering CMPINF 0401 are expected to have some previous concepts and then focus on object-oriented programming, including classes, encapsulation and abstraction, inheritance, polymorphism and interfaces. Some introductory data structures and algorithms will also be covered in this course.This class is a programming-intensive course, and students will be expected to complete several non-trivial programming projects throughout the term.",
      requirements:
        "Enrollment not permitted if currently or previously completed CS 0401 or INFSCI 0017\n            Course Attributes: DSAS Quant.-Formal Reason General Ed. Requirement",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [
        "John Ramirez",
        "Nadine v. F. u. Ludwigsdorff",
        "Timothy Hoffman",
      ],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-0999",
      title: "SPECIAL TOPICS IN COMPUTING AND INFORMATION",
      id: "CMPINF0999",
      credits: 3,
      description:
        "Various topics in computing and information will be covered.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-1061",
      title: "FOUNDATIONS OF DATA SCIENCE",
      id: "CMPINF1061",
      credits: 4,
      description:
        "This course is designed to provide a general introduction to the rapidly growing field of data science. Topics will include data summarization and visualization, data distributions, the scientific and statistical inference process, confidence intervals, hypothesis testing, sampling, regression, and classification. The course will be very hands-on with students actively carrying out the techniques and procedures being taught on real datasets in order to foster the ability to reason with data. As part of this process, students will be taught the basics of programming (coding) in R and these skills will be reinforced through weekly lab sessions. In developing the core concepts, students will also be exposed to ancillary topics such as data ethics, simulation basics, and best practices in programming. No previous programming experience nor any background in statistics will be assumed.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-1201",
      title: "DIGITAL NARRATIVE AND INTERACTIVE DESIGN",
      id: "CMPINF1201",
      credits: 3,
      description:
        "How are computational artifacts currently designed, and how can they be designed differently? What stories can be told by collaborating with computers? What stories can't be told? This project-based course will enable students to engage with and create computational narratives and interactive projects with data, hardware and algorithms. Each collaboratively taught iteration of the course will include 3-4 of these units, such as: fabrication, interactive hardware, computational narrative, interactive data, and prototyping. Students will consider what it means to compose with computers for human audiences, and with humans for computer audiences. Designed for Digital Narrative and Interactive Design (DNID) majors to take midway through the major, it will help students consolidate the interdisciplinary knowledge they have obtained in their prerequisite courses, introduce them to examples of interdisciplinary work that will inform their later capstone projects, and give them practice in working on collaborative projects that span the humanities and information/computing fields.",
      requirements:
        "PREQ: (ENGCMP 0425, OR HAA 0425, OR ENGLIT 0512) AND (CS 0010, OR CS 0011, OR CS 0012, OR CS 0007, OR CS 0008, OR INFSCI 0419)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Christopher MaverickDmitriy Babichenko"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-1205",
      title: "COMPARATIVE DIGITAL PRIVACIES",
      id: "CMPINF1205",
      credits: 3,
      description:
        "This course will offer a broad survey of significant issues relating to privacy in the digital age. It investigates privacy in the digital world from cultural, social, communication, and policy perspectives. Taking a comparative approach, privacy related to digital communication is compared across several global regions in an attempt to understand the distinctiveness of privacy in those regions. The course will first introduce students to the concepts of privacy, the digital age, and the relation between privacy protections and the state. Students will understand the significance of the issue of digital privacies and why we need to employ a comparative approach to examine it.  The course will then look at selected case studies of digital privacy in several global regions, including the United States, Canada, Europe, China, and South East Asia. Issues related to digital privacies such as Internet laws and policies, media regulations and public interest, data protection, state control, and commercial interests in the digital age, surveillance, copyright, and privacy advocates will also be included.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Song Shi"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-1207",
      title: "WRITING MACHINES",
      id: "CMPINF1207",
      credits: 3,
      description:
        "Large Language Models (LLMs) like ChatGPT promise--or threaten--to upend everything we know about writing. Can machines really write? What do writing machines do to or for human writers? This class approaches the contemporary buzz about ChatGPT and Natural Language Generation (NLG) through a sociotechnical and historical lens, exploring automated writing through historical and contemporary writing machines: 18th century automatons, Ouija boards, combinatorial poetics, procedural algorithms, recurrent neural networks, and the transformer technology that drives cutting-edge LLMs like ChatGPT. The course is organized into units focusing on different methods of automating writing: mechanical; spiritual; procedural; statistical; simulative. Each unit teaches students historical and technical contexts of its associated automation through texts and hands-on projects. Students who take this class will learn to generate text using computational processes and critically examine the text they produce. In so doing, students will engage with the political and ethical implications of large-scale data usage to train machine learning algorithms, including issues of underrepresented languages, bias, hate speech, further marginalizing communities, automating labor, environmental impacts, dirty data, and privacy violations. As we trace the development and commercialization of NLG, we'll consider whose writing is being automated, and for what purposes.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Matthew Burton"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-1981",
      title: "PROJECT STUDIO",
      id: "CMPINF1981",
      credits: 3,
      description:
        "This course is designed as a practicum for the joint degree programs offered by the School of Computing and Information in conjunction with other units on campus. Students will apply skills learned during their studies in SCI to problems existing at the confluence of computing, information, and other disciplinary studies. This course is meant to help satisfy the Capstone requirement for joint programs allowing team-based project Capstone options.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-1999",
      title: "ADVANCED SPECIAL TOPICS IN COMPUTING AND INFORMATION",
      id: "CMPINF1999",
      credits: 3,
      description:
        "Various advanced topics in computing and information will be covered.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-2100",
      title: "DATA-CENTRIC COMPUTING",
      id: "CMPINF2100",
      credits: 3,
      description:
        "This course will provide an introduction to programming, data processing, and data mining, and applied machine learning using Python for highly motivated students with little or no prior experience in programming. The course will focus on learning the basics of Python programming language in the context of working with data, planning and organizing programs, commonly-used algorithms, data management, data cleaning, basic machine learning, data mining, and fundamentals of computational modeling.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Alawya Alawami", "Michael Yoder"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-2105",
      title: "MATHEMATICAL AND STATISTICAL FOUNDATIONS FOR DATA SCIENCE",
      id: "CMPINF2105",
      credits: 3,
      description:
        'This course will create the foundational mathematical, statistical, and analytical skills needed for subsequent in-depth courses in data science. Students will be introduced to important calculus, matrix, statistics and probability fundamentals important in data science. These topics are taught in a hands-on manner to focus on the practical application rather than a purely theoretical treatment of the material. No programming experience is required as all concepts are demonstrated with Excel. "Pen and paper" exercises are completed in Jupyter notebooks to familiarize students with Jupyter and to introduce LaTeX.',
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Morgan Frank"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-2110",
      title: "MANAGING, QUERYING, AND PRESERVING DATA",
      id: "CMPINF2110",
      credits: 3,
      description:
        "This course introduces students to the practical methodologies of data management, storage, and querying in the context of relational, document, and graph database management systems. This course covers fundamental concepts of data organization and retrieval, including the relational model, structured query language (SQL), graph/network concepts, and Cypher.   In addition to building skills and understandings for managing data in a database system, this course will examine strategies and important concepts for continued access and preservation of data.  This course considers the technical infrastructure for storing, publishing, discovering and preserving research data. It will address the importance of data documentation in data science, disciplinary metadata standards, file formats that support long-term preservation of data, and strategies for sharing data.",
      requirements: "PREQ: CMPINF 2100 Introduction to Data-Centric Computing",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Sean Huff"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-2120",
      title: "APPLIED PREDICTIVE MODELING",
      id: "CMPINF2120",
      credits: 3,
      description:
        "The ability to collect, store and process large amounts of detailed data in a variety of fields has led to a surge in the use of data in various decision making tasks, ranging from governmental policy making to drafting players in sports. Data literacy is thus important and in this first introductory course we will focus on shifting the traditional mode of deterministic (yes/no) thinking to probabilistic thinking. In this course, we will review concepts from applied probability and statistics and explore how they can be used in building a data-driven infrastructure with applications ranging from understanding a variety of everyday phenomena (e.g., descriptive modeling) to making decisions based on data (e.g., predictive modeling). In particular, we will focus on the principles and best practices in dealing with data, including understanding (a) the bias-variance tradeoff, (b) how to avoid overfitting, (c) how to choose the most appropriate model for your data and (d) how to evaluate your model's performance.   While the main focus of the course is on supervised learning, we will also introduce unsupervised learning and in particular the problem of clustering. We will also explore the concept of Monte Carlo simulations and resampling, and how they can be used to make predictions for systems that are too complicated to be solved in closed form. We will also provide an overview of analytical methods for specialized form of data including time series and relational data.",
      requirements: "PREQ: CMPINF 2100 Introduction to Data Centric Computing",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Alexandros Labrinidis"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-2130",
      title: "THE ART OF DATA VISUALIZATION",
      id: "CMPINF2130",
      credits: 3,
      description:
        "Visualization is a language of art to discover, understand, and communicate meanings. This course introduces how to speak in the visual style in the era of big data by programming on the elements of arts: lines, forms, and colors. This course is designed to break the boundaries between art, science, and engineering and teach creative coding to students of all kinds of backgrounds.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-2140",
      title: "RESPONSIBLE DATA SCIENCE",
      id: "CMPINF2140",
      credits: 3,
      description:
        '"Data are a form of power" and the ways that data scientists use data have an impact on individuals and communities. In this course, we will interrogate the work of data scientists through a social justice lens and develop a personal statement that articulates responsible data science. Responsible data practices cut across the lifecycle of a dataset, and a responsible data scientist will ask questions about the decisions and people behind the data collection, people represented or ignored in the dataset, and the people impacted by tools and algorithms that use the data. In this course, we will engage with social justice, policy, and people-oriented dimensions of data work. Each module will introduce a case study or vignette that illustrates these dimensions across different aspects of data work. Through these modules, we will develop cognitive approaches for examining data, our positionality, and the implications of data collection, analysis, and algorithms on communities.',
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Marcela Gomez"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-2211",
      title: "FOUNDATIONS OF CLOUD COMPUTING FOR DATA SCIENCE PROFESSIONALS",
      id: "CMPINF2211",
      credits: 3,
      description:
        "This course will introduce students to some of the core concepts of cloud computing. Students will gain both the foundational knowledge and hands-on practical experience required for understanding cloud computing from historical, software engineering, and business perspectives. The course will cover the essential characteristics of cloud computing, including its history, business uses, and technology use cases enabled by the proliferation of cloud platforms. Students will learn about the different cloud computing service models, as well as some of the key components of a cloud information technology infrastructure.",
      requirements: "PREQ: CMPINF 2110 (MIN GRADE 'B')",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-2221",
      title: "APPLIED BAYESIAN ANALYSIS",
      id: "CMPINF2221",
      credits: 3,
      description:
        'In this course students will learn the foundational assumptions, concepts, and popular tools for applying Bayesian techniques to solve challenging data related problems. This course is hands-on and demonstrates the key concepts and skills through numerous programming examples in lectures, homework assignments, and projects. The course begins by reviewing probability distributions with a special emphasis on how distributions communicate uncertainty. The Bayesian "mindset" is introduced by showing how probability distributions allow subjective information to be used in modeling tasks via Prior distributions. Students will be shown the connection between Bayesian Priors and Non-Bayesian regularization/penalization methods which they have been introduced to in previous courses. From there, students are taught how to properly train, validate, and communicate the Bayesian modeling results for linear, generalized linear models, and multi-level (hierarchical) models using popular open-source libraries. Special emphasis is made to diagnose the Bayesian inference procedure to ensure the models are adequate and trustworthy.',
      requirements: "PREQ: CMPINF 2105 and 2120 and 2130 (MIN GRADE 'B')",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Konstantinos Pelechrinis"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-2222",
      title: "APPLIED DEEP LEARNING",
      id: "CMPINF2222",
      credits: 3,
      description:
        "In this course students will learn the foundational assumptions, concepts, and popular tools for applying deep learners to a wide variety of supervised and unsupervised learning problems. The course is hands-on and demonstrates the key concepts and skills through numerous programming examples in lectures, homework assignments, and projects. The course begins by introducing various optimization strategies which underlie how deep learners are trained, before moving to the proper training, validating, and tuning of deep learning methods for supervised learning problems. This portion of the course stresses how the fundamental optimization concepts impact model training. Students will also learn how deep learners relate to and are extensions of generalized linear models in order to reinforce essential supervised learning concepts. The course concludes by focusing on applying deep learning techniques to unsupervised learning problems via variational autoencoders. Multiple autoencoder architecture strategies and training approaches are demonstrated.",
      requirements: "PREQ: CMPINF 2105 and 2120 and 2130 (Min Grade 'B')",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-2223",
      title: "TEXT AS DATA",
      id: "CMPINF2223",
      credits: 3,
      description:
        "From social media posts to open government materials, texts are pervasive in current human society. These texts, viewed as unstructured data, provide unprecedented insights into the development status and existing problems in many science, social, and business-related areas. This course offers an introduction of computational text analysis to store, process and utilize text as data.  Students will learn fundamental concepts around discovering and representing textual data, building and training computational models from textual data, and applying and measuring the models in resolving real world problems. Students will engage in discussions on social and ethical issues associated with using text as data.",
      requirements: "PREQ: CMPINF 2105 and 2120 (Min Grade 'B')",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Prasad Chalasani"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-2910",
      title: "CASE STUDIES IN DATA SCIENCE",
      id: "CMPINF2910",
      credits: 3,
      description:
        "This course is a project-based capstone for the Master of Data Science degree.  A case study approach is taken to structuring analysis of data, communicating findings, and informing decision-making processes.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Matthew Burton"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CMPINF-2999",
      title: "SPECIAL TOPICS",
      id: "CMPINF2999",
      credits: 3,
      description:
        "Various advanced topics in computing and information will be covered.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0004",
      title: "INTRODUCTION TO COMPUTER PROGRAMMING-BASIC",
      id: "CS0004",
      credits: 3,
      description:
        "This is a first course in computer science.  It is designed to be of special interest to students majoring in one of the social sciences or humanities.  Objectives of this course include use of the computer in an interactive environment; problem analysis and the development of algorithms; learning the basic language; designing; coding; and documenting programs using techniques of good programming style.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0007",
      title: "INTRODUCTION TO COMPUTER PROGRAMMING",
      id: "CS0007",
      credits: 3,
      description:
        "This is a first course in computer science programming.  It is recommended for those students intending to major in computer science who do not have the required background for the School of Computing and Information's intermediate programming class.  It may also be of interest to students majoring in one of the social sciences or humanities.  The focus of the course is on problem analysis and the development of algorithms and computer programs in a modern high-level language.",
      requirements:
        "Enrollment blocked if currently or previously enrolled in CS 0401 or CMPINF 0401 or CS 0422 or CS 0417 or CS 0457 or CS 0445 or CS 0455\n            Course Attributes: DSAS Algebra General Ed. Requirement, DSAS Quant.-Formal Reason General Ed. Requirement",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Andrew Xu", "Michael Devine", "Timothy Hoffman"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0008",
      title: "INTRODUCTION TO COMPUTER PROGRAMMING WITH PYTHON",
      id: "CS0008",
      credits: 3,
      description:
        "This is course is designed as a first course in computer science programming.  It is recommended for those students majoring in one of the natural sciences, social sciences, or humanities who wish to learn the fundamentals of programming.  It is also useful to students intending to major in computer science who do not have the required background for CS 0401.  The focus of this course is on problem analysis, the development of algorithms and computer programs in python. Instruction will be provided to students interested in taking CS 401 in converting python programs to Java.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0010",
      title: "INTRODUCTION TO COMPUTING FOR SYSTEMS ENGINEERS",
      id: "CS0010",
      credits: 4,
      description:
        "All of the CS 001X courses will introduce students to the concepts of computing and computer programming. Students in these courses will learn how a computer works and how to write programs in order to use the computer as a problem solving tool. A major focus of the class will be on developing problem-solving skills (e.g., how to decompose a problem into more manageable parts and how to combine those parts into an overall solution).  CS 0010 in particular will focus on problems related to IoT and engineering. Students will be required to purchase a Raspberry Pi and sensors in order to complete the projects and labs assigned throughout the course.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0011",
      title: "INTRODUCTION TO COMPUTING FOR SCIENTISTS",
      id: "CS0011",
      credits: 4,
      description:
        "All of the CS 001X courses will introduce students to the concepts of computing and computer programming. Students in these courses will learn how a computer works and how to write programs in order to use the computer as a problem solving tool. A major focus of the class will be on developing problem-solving skills (e.g., how to decompose a problem into more manageable parts and how to combine those parts into an overall solution). CS 0011 in particular will focus on problems related to the natural sciences with an emphasis on computational biology. Domain-specific projects and labs will be assigned throughout the course to encourage students in the natural sciences to apply computing to their field of study.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Matt de Lima Barbosa", "Michael Devine", "Peter DeNardis"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0012",
      title: "INTRODUCTION TO COMPUTING FOR THE HUMANITIES",
      id: "CS0012",
      credits: 4,
      description:
        "All of the CS 001X courses will introduce students to the concepts of computing and computer programming. Students in these courses will learn how a computer works and how to write programs in order to use the computer as a problem solving tool. A major focus of the class will be on developing problem-solving skills (e.g., how to decompose a problem into more manageable parts and how to combine those parts into an overall solution). CS 0012 in particular will focus on problems related to the humanities and allied social sciences. Domain-specific projects and labs will be assigned throughout the course to encourage students in these fields to apply computing to their studies.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Matt de Lima Barbosa", "Peter DeNardis"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0090",
      title: "SUSTAINABILITY AND COMPUTING",
      id: "CS0090",
      credits: 3,
      description:
        "What is the environmental impact of websites such as Facebook or Amazon?  How is society affected by throwing away old computers?  The purpose of this course is to introduce the intersection of computers and society.  Sustainability will be used as a concept to bridge the tradeoffs between technological and ecological forces.  Topics include but are not limited to: energy production, e-books, telecommuting and e-waste.  No computer programming or math background required.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0134",
      title: "WEB SITE DESIGN AND DEVELOPMENT",
      id: "CS0134",
      credits: 3,
      description:
        "This course will provide a basic understanding of the methods and techniques of developing a simple to moderately complex web site.  Using the current standard web page language, students will be instructed on creating and maintaining a simple web site.  After the foundation language has been established, the aid of an internet editor will be introduced.  A second web-based language will be included to further enhance the web sites.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Peter DeNardis"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0155",
      title: "DATA WITCHCRAFT",
      id: "CS0155",
      credits: 3,
      description:
        "This course is an Introduction to Data Science for Beginners, designed as a second course in computer science for students who already have some programming background. The course aims to introduce students to basic data management technologies and data analytics skills while building their programming expertise with specific data-related skills and hands-on experience. We will use real-life examples/data to the extent possible and utilize the Python programming language for all projects",
      requirements:
        "PREQ: CS 0007 or 0010 or 0011 or 0012 or CMPINF 0401 or CS 0401 or CS 0417 or CS 0457 or CS 0422; Enrollment blocked if currently or previously enrolled in CS 0445 or 0455 or INFSCI 0510\n            Course Attributes: DSAS Quant.-Formal Reason General Ed. Requirement",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0207",
      title: "JAVA FOR INTERMEDIATE PROGRAMMERS",
      id: "CS0207",
      credits: 1,
      description:
        "This course is designed to transition students who can program at an intermediate level into the Java programming language.  It focuses on the Java object model and object-oriented programming with Java.",
      requirements:
        "PREQ: INFSCI 0201 or ECE 0301; Enrollment blocked if currently or previously enrolled in CS 0401 or CMPINF 0401 or CS 0422 or CS 0417 or CS 0457 or CS 0445 or CS 0455",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0334",
      title: "INTERMEDIATE WEB SITE DESIGN AND DEVELOPMENT",
      id: "CS0334",
      credits: 3,
      description:
        "The course will consist of advanced implementations of both markup as well as scripting languages. In addition, students will be introduced to a graphical interface application that will allow them to explore concepts of server side web development. A reflective programming language and database application will be used to introduce the server side web development concepts.",
      requirements:
        "PREQ: CS 0007 or 0134 or 0401 or INFSCI 0017 (Min Grade 'C' or Transfer)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0441",
      title: "DISCRETE STRUCTURES FOR CS",
      id: "CS0441",
      credits: 3,
      description:
        "The purpose of this course is to understand and use (abstract) discrete structures that are backbones of computer science.  In particular, this class is meant to introduce logic, proofs, sets, relations, functions, counting, and probability, with an emphasis on applications in computer science.",
      requirements:
        "CREQ: MATH 0220 or 0230 or 0235 or 0140 or 0221 or 0231 (Min Grade 'C' or Transfer) or (Plan: CSCI-MN and MATH 0120)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Donald Bonidie", "Nils Murrugarra LLerena"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0445",
      title: "ALGORITHMS AND DATA STRUCTURES 1",
      id: "CS0445",
      credits: 3,
      description:
        "This course emphasizes the study of the basic data structures of computer science (stacks, queues, trees, lists) and their implementations using the java language. Included in this study are programming techniques that use recursion, reference variables, and dynamic memory allocation. Students in this course are also introduced to various searching and sorting methods and also expected to develop an intuitive understanding of the complexity of these algorithms.",
      requirements:
        "PREQ: CMPINF 0401 or CS 0401 or COE 0401 or 0422 or CIST 0150 or CS 0207 (MIN GRADE 'C' or Transfer); Enrollment blocked if enrolled or previously enrolled in CS 0245",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [
        "Marina Barsky",
        "Sherif Khattab",
        "Stephen Ellis",
        "Timothy James",
      ],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0447",
      title: "COMPUTER ORGANIZATION AND ASSEMBLY LANGUAGE",
      id: "CS0447",
      credits: 3,
      description:
        "The purpose of this course is to study the components of computing systems common to most computer architectures.  In particular, this class is meant to introduce data representation, types of processors, memory types and hierarchy, and device drivers.  The students will learn MIPS assembly language, the design of arithmetic and logic units, and basic designs for RISC processors.",
      requirements:
        "CREQ: CS 0445 or COE 0445 or 0458 (Min Grade 'C' or Transfer)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Jarrett Billingsley", "Luis F. N. Q. d. Oliveira"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0449",
      title: "INTRODUCTION TO SYSTEMS SOFTWARE",
      id: "CS0449",
      credits: 3,
      description:
        "This course covers topics related to the interface of hardware and software.  It covers device interfaces and hardware synchronization at the lowest level of the operating system, the linkage of operating system services to application software, and the fundamental mechanisms for computer communications.",
      requirements:
        "PREQ: CS 0445 or CS 0455 (Min Grade 'C' or Transfer); CREQ: CS 0447 or CS 0456 or COE 0447 or COE 0147",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Jarrett Billingsley", "Luis F. N. Q. d. Oliveira"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0590",
      title: "SOCIAL IMPLICATIONS OF COMPUTING TECHNOLOGY",
      id: "CS0590",
      credits: 3,
      description: "",
      requirements:
        "PREQ: CS 0004 or 0007 or 0008 or 0010 or 0011 or 0012 or 0015 or 0101 or 0401 or CMPINF 0401\n(Min Grade 'C' or Transfer for All Listed Courses)\n            Course Attributes: SCI Polymathic Contexts: Ethical/Policy GE. Req., Writing Intensive Course (WRIT)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Patricia Quirin"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-0699",
      title: "SPECIAL TOPICS IN COMPUTER SCIENCE",
      id: "CS0699",
      credits: 3,
      description:
        "Various topics in Computer Science will be introduced and discussed. This course in not part of the Computer Science major.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1501",
      title: "ALGORITHMS AND DATA STRUCTURES 2",
      id: "CS1501",
      credits: 3,
      description:
        "As the second in a two-course sequence on algorithms and data structures, this course covers a broad range of the most commonly used algorithms. Some examples include algorithms for searching, encryption, compression, graphs, and dynamic programming. The students will implement and test several algorithms. The course is programming intensive.",
      requirements:
        "PREQ: (CS 0441 or CS 0406) and ((CS 0445 or CS 0455 or COE 0445) or (CS 0245 and CS 0207)); (MIN GRADE 'C'  or Transfer FOR ALL COURSES LISTED)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Nicholas Farnan", "Sherif Khattab"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1502",
      title: "FORMAL METHODS IN COMPUTER SCIENCE",
      id: "CS1502",
      credits: 3,
      description:
        "The course is an introduction to the theory of information and computation as a physical phenomenon. The course covers standard formalizations of computational concepts and proofs of noteworthy implications of these formalizations. Typical topics include: finite automata, computability, reducibility, and complexity.",
      requirements:
        "PREQ: (CS 0441 or CS 0406) and (CS 0445 or CS 0455 or COE 0445) ; (MIN GRADE C'  or Transfer FOR ALL COURSES LISTED)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Thumrongsak Kosiyatrakul"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1503",
      title: "MATHEMATICAL FOUNDATIONS OF MACHINE LEARNING",
      id: "CS1503",
      credits: 4,
      description:
        "This introductory course will cover the essential foundational ideas in probability and statistics. We will then discuss the standard applications of these foundational ideas to understand and analyze data, using computational methods, that all computer scientists should know.",
      requirements:
        "PREQ: (CS 0441 or CS 0406) and (MATH 0280 or MATH 1180 or MATH 1185); (MIN GRADE 'C' or Transfer FOR ALL COURSES LISTED)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Marina Barsky", "Patrick Skeba"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1510",
      title: "ALGORITHM DESIGN",
      id: "CS1510",
      credits: 3,
      description:
        "This course will cover methods and strategies that are useful for the design of nonnumeric algorithms.  Students are expected to design their own algorithms.",
      requirements:
        "PREQ: [(CS 1501 or COE 1501) and CS 1502] or (CS 0458 and CS 1710); MIN GRADE 'C' or Transfer FOR ALL COURSES LISTED\n            Course Attributes: Writing Intensive Course (WRIT)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1511",
      title: "THEORY OF COMPUTATION",
      id: "CS1511",
      credits: 3,
      description:
        "Understanding the theory of computation provides deeper insights into various topics in computer science.  This is an introductory level theory course.  The aim of this course is to study the power (or lack of it) of various models of computation.  Topics to be covered include automata, formal languages, computability, and computational complexity.",
      requirements:
        "PREQ: CS 1502; (MIN GRADE 'C' or Transfer FOR ALL COURSES LISTED)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1520",
      title: "PROGRAMMING LANGUAGE FOR WEB APPLICATIONS",
      id: "CS1520",
      credits: 3,
      description:
        "Various programming paradigms will be studied using java and scripting languages.  The use of java in programming web based applications, network applications, and the use of the extensive java libraries will be studied.  The programming paradigm of building software by gluing components will be explored through the use of scripting languages such as perl and JavaScript.  Applications include developing guis and internet programming.",
      requirements: "PREQ: CS 0445 or COE 0445; (MIN GRADE 'C' or Transfer)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Paulo Ferreira"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1521",
      title: "FUNCTIONAL PROGRAMMING: THEORY AND PRACTICE",
      id: "CS1521",
      credits: 3,
      description:
        "This course introduces a programming paradigm called functional programming. Students will learn basic principles of functional programming using the Haskell language. Verification in functional programming is possible due to functions are written as specifications. Students will also learn how to use structural and mathematical inductions to prove (verify) properties of functions. The Lambda calculus, which is a precursor of functional programming languages will be introduced as well. An introduction to Category theory will be covered to help understand properties related to Monad. Various applications of functional programming will be discussed such as parsing, data processing, and components of web application. Students will also learn how to turn a Haskell program into a standalone application as well as a library that can be used by other programming language such as C.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1530",
      title: "SOFTWARE ENGINEERING",
      id: "CS1530",
      credits: 3,
      description:
        "The purpose of this course is to provide a general survey of software engineering.  Some of the topics covered include: project planning and management, design techniques, verification and validation, and software maintenance.  Particular emphasis is on a group project in which a group of students implement a system from its specification.",
      requirements: "PREQ: CS 0445 or COE 0445; (MIN GRADE 'C' or Transfer)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Nadine v. F. u. Ludwigsdorff"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1538",
      title: "INTRODUCTION TO SIMULATION",
      id: "CS1538",
      credits: 3,
      description:
        "The course introduces students to the concepts, definitions, techniques applicable to the simulation of systems.  Both continuous and discrete modeling are covered, with emphasis on the latter.  The objective of this course is to familiarize the students with several modern discrete simulation languages, and their use in modeling.  Topics include:  systems characterization, classification, and modeling; pertinence of probability and statistics theory for stochastic processes and model measurement; discrete systems simulation viewpoints; software modeling techniques.",
      requirements:
        "PREQ: CS 0447 and (STAT 1000 or 1100 or 1151 or MATH 1153) (Min Grade 'C' or Transfer for All Listed Courses)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1541",
      title: "INTRODUCTION TO COMPUTER ARCHITECTURE",
      id: "CS1541",
      credits: 3,
      description:
        "Examination of computer architecture and hardware system organization.  Topics include:  CPU organization, sequential and microprogrammed control, instruction set implementation, memory organizations, input/output structure, peripherals and computer communications.",
      requirements:
        "PREQ: (CS 0447 or COE 0447) and (CS 0449 or COE 0449) ; (MIN GRADE 'C' or Transfer)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1550",
      title: "INTRODUCTION TO OPERATING SYSTEMS",
      id: "CS1550",
      credits: 3,
      description:
        "An introduction to basic concepts of operating systems, common to most computer systems, which interfaces the machine with upper-level programs.  This course will introduce processes as processing unit, process management, concurrency, communication, memory management and protection, and file systems.",
      requirements:
        "PREQ: (CS 0447 or COE 0447 or COE 0147) and (CS 0449 or COE 0449) or (0456 and 1750); MIN GRADE 'C'  or TRANSFER FOR ALL COURSES LISTED",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Stephen Lee"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1555",
      title: "DATABASE MANAGEMENT SYSTEMS",
      id: "CS1555",
      credits: 3,
      description:
        "The objective of this course is to provide an in-depth knowledge of database systems design. Thus, the emphasis is on how to model ones own data and how to use available database management systems effectively. Towards this end, the relational and the object-relational models are discussed in great detail and object-oriented and other data models are also presented. Commercial database management systems are examined and students get practical experience through the use of such systems.",
      requirements: "PREQ: CS 1501 (Min Grade 'C')",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Nicholas Farnan"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1566",
      title: "INTRODUCTION COMPUTER GRAPHICS",
      id: "CS1566",
      credits: 3,
      description:
        "This course offers an in-depth exploration of fundamental concepts in 2d and 3d computer graphics. The bulk of the course is devoted to 3d modeling, geometric transformations, and 3d viewing and rendering.",
      requirements:
        "PREQ: (CS 0449); (MIN GRADE 'C' or TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Thumrongsak Kosiyatrakul"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1567",
      title: "PROGRAMMING SYSTEM DESIGN ON A MOBILE ROBOT PLATFORM",
      id: "CS1567",
      credits: 3,
      description:
        "Students will be introduced to a variety of programming techniques and paradigms, for implementing medium- to large scale software systems.  System integration is done on a mobile robot platform rather than a traditional desktop system.  However, this is not a course in robotics.  It is a course about building systems in a real-world environment.",
      requirements:
        "PREQ: CS (0441 and (0445 or COE 0445)) or (0406 and 0455) (MIN GRADE 'C' or Transfer), MIN GPA: 3.25\n            Course Attributes: University Honors Course",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1571",
      title: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE",
      id: "CS1571",
      credits: 3,
      description:
        "This course will provide an introduction to the fundamental concepts and techniques underlying the construction of intelligent computer systems.  Topics covered in the course include:  problem solving and search, logic and knowledge representation, planning, reasoning and decision-making in the presence of uncertainty, and machine learning.",
      requirements:
        "PREQ: (CS 1501 or COE 1501) and CS 1502 (Min Grade 'C' or Transfer for All Listed Courses)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1613",
      title: "QUANTUM COMPUTATION",
      id: "CS1613",
      credits: 3,
      description:
        "This is a one-semester (gentle) introductory course on quantum computation. The course will explore the implications of using quantum mechanics, instead of classical mechanics, to model information and computing. Quantum computing is not about changing the physical substrate on which computation is done from classical to quantum, but rather changing the notion of computation itself. The change starts at the most basic level: the fundamental unit of computation is no longer the bit, but rather the quantum bit, or qubit. Placing computation on a quantum mechanical foundation led to the discovery of faster algorithms, novel cryptographic mechanisms, and improved communication protocols.  The course will start with the basic building blocks of quantum information processing: quantum bits and quantum gates. The course will cover common elements of quantum computation and include discussion of concepts of computational complexity. We will also discuss known bounds on the power of classical, randomized, and quantum computation. Finally, the course will explore entanglement and robust quantum computation. We will extensively cover the elegant and important topic of quantum error correction, and techniques to achieve fault tolerance.",
      requirements: "PREQ: CS 1501 and CS 1502",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1621",
      title: "STRUCTURE PROGRAMMING LANGUAGES",
      id: "CS1621",
      credits: 3,
      description:
        "An analytical examination of modern high-level programming language structures; including design specification and implementation.  Advanced forms of data types, expressions, and control primitives.  Relationship of storage management techniques and language design.",
      requirements:
        "PREQ: CS (0441 and 0445) or (0406 and 0455); (MIN GRADE 'C' or TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1622",
      title: "INTRODUCTION TO COMPILER DESIGN",
      id: "CS1622",
      credits: 3,
      description:
        "This course will introduce the basic concepts of compiler design and implementation.  Topics include lexical analysis, various types of parsers, intermediate and object code generation and code optimization.  The material will be presented from an implementation point of view rather than a formal approach.  The impact of language design on compilers will also be examined.",
      requirements:
        "PREQ: CS 0441 and ((CS or COE 0447 or COE 0147) or (CS 0406 and 0456)); (MIN GRADE 'C'  OR TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Wonsun Ahn"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1631",
      title: "SOFTWARE DESIGN METHODOLOGY",
      id: "CS1631",
      credits: 3,
      description:
        "Construction of large computerized systems proceeds through the stages of requirements analysis, specification, and implementation.  This course deals with requirements analysis and specification, in particular, methodologies for improving the reliability of specifications (executable specifications and system phototypes).",
      requirements:
        "PREQ: (CS 0441 and (CS or COE 0445)) or (CS 0406 and 0455); (MIN GRADE 'C' OR TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1632",
      title: "SOFTWARE QUALITY ASSURANCE",
      id: "CS1632",
      credits: 3,
      description:
        "This course provides students with a broad understanding of modern software testing and quality assurance. Although it will cover testing theory, the emphasis is on providing practical skills in software testing currently used in industry. To that end, it will cover: manual and automated tests, test-driven and behavior-driven development, performance testing, and understanding and developing a testing process.",
      requirements:
        "Pre-requisites: (CS 0445 or COE 0445 or CS 0455) and (CS 0449 or COE 0449)\n(Min Grade 'C' or Transfer for All Listed Courses)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Wonsun Ahn"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1635",
      title: "INTERFACE DESIGN METHODOLOGY",
      id: "CS1635",
      credits: 3,
      description:
        "This course will introduce concepts and common practices for building software for user interfaces. Concepts will connect across input, visual layout techniques, and software patterns for responsive user interaction with a focus on mobile platforms (web and native). Emergent interface concepts, such as voice, AR/VR, and IoT will also be explored while building upon the course's software foundation. This course is targeted for students who desire skills in front-end development, interface design and prototyping, and user experience engineering.",
      requirements: "PREQ: CS 0445 (MIN GRADE 'C' or Transfer)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Jacob Biehl"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1637",
      title: "INTRODUCTION TO HUMAN-COMPUTER INTERACTION",
      id: "CS1637",
      credits: 3,
      description:
        "The focus of the course is on the design of human-centered systems that people find usable, desirable, and useful. The course will introduce students to user-centered practices in Human Computer Interaction. The course will cover the theory and practical application of Human-Computer Interaction concepts and ideas. Students will gain knowledge on diverse methods and tools to understand, improve, and create technology that harmonizes with and improves human capabilities, goals, and social environments.",
      requirements:
        "CS 1501: Algorithm Implementation; MIN GRADE: C or Transfer\n            Course Attributes: Learning Sciences",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1640",
      title: "BIOINFORMATICS SOFTWARE DESIGN",
      id: "CS1640",
      credits: 3,
      description:
        "This course will develop software for bioinformatic applications.",
      requirements:
        "PREQ: CS 1501 and BIOSC 1540 (Min Grade 'C' or Transfer); PLAN: Bioinformatics or Computational Biology\n            Course Attributes: Capstone Course",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Scott Jordan"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1645",
      title: "INTRODUCTION TO HIGH PERFORMANCE COMPUTING SYSTEMS",
      id: "CS1645",
      credits: 3,
      description:
        "This course is an introduction to the architecture of and software techniques for parallel and high performance computing systems.  The content includes fundamental aspects of vector processing, shared-memory, and distributed-memory systems.  Specific applications in parallel processing paradigms will be covered.",
      requirements:
        "PREQ: CS 0447 and 0449 and 1501; (MIN GRADE 'C' OR TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1651",
      title: "ADVANCED SYSTEMS SOFTWARE",
      id: "CS1651",
      credits: 3,
      description:
        "To discuss in depth some advanced features of fundamental importance in the design of operating systems.  The subjects discussed include interprocess communication, real-time scheduling, advanced file systems, security and protection mechanisms.  The objective of the course is to provide an understanding of these advanced issues, as well as to bring awareness of the known solutions to these problems and to the limitations of these solutions.",
      requirements:
        "PREQ: CS 1550 or 1312 or 1792; (MIN GRADE 'C' OR TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Luis F. N. Q. d. Oliveira"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1652",
      title: "DATA COMMUNICATION AND COMPUTER NETWORKS",
      id: "CS1652",
      credits: 3,
      description:
        "This course will include basic principles and topics of computer communications. An overview of interfaces that interconnect hardware and software components, describing the procedures and rules involved in the communication process and the software which controls computers communication. Discussion on network architectures, design principles, basic protocol suites, and the concept of internetworking. Proficiency in this course requires a foundation in intermediate Java programming, basic C programming, elementary data structures, as well as knowledge in multithreading and mutexes.",
      requirements:
        "PREQ: (CS 0447 or COE 0447 or COE 0147) and (CS 0449 or COE 0449); (MIN GRADE 'C'  OR TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Longfei Shangguan"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1653",
      title: "APPLIED CRYPTOGRAPHY AND NETWORK SECURITY",
      id: "CS1653",
      credits: 3,
      description:
        "This course will provide the necessary conceptual background and hands-on experience to understand the most common cryptographic algorithms and protocols and how to use them to secure computers networks and distributed applications.  Topics include: cryptographic algorithms for data confidentiality, authentication, and integrity, user authentication methods (secure tokens and biometrics), internet security protocols, security in local area networks, firewalls, and intrusion detection systems.",
      requirements:
        "PREQ: (CS 0449 or COE 0449) and (CS 1501 or COE 1501) or (CS 0458 or CS 1750); (MIN GRADE 'C'  OR TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1655",
      title: "SECURE DATA MANAGEMENT AND WEB APPLICATIONS",
      id: "CS1655",
      credits: 3,
      description:
        "The main objectives for this course are:  (1) to study in more depth query optimization and security, (2) to study advanced topics; data mining, information retrieval, and web data management, and (3) to expose students to advanced data and information management technologies, while gaining hands-on experience.  These include mobile data management, continuous queries and their applications in areas such as biomedical informatics and e-commerce.",
      requirements:
        "PREQ: CS 0441 and (CS 0445 or COE 0445); (MIN GRADE 'C' OR TRANSFER FOR ALL COURSES LISTED)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1656",
      title: "INTRODUCTION TO DATA SCIENCE",
      id: "CS1656",
      credits: 3,
      description:
        "This course aims to expose students to different data management, data manipulation, and data analysis techniques. The class will cover all the major data management paradigms (relational/SQL, XML/Xquery, RDF/SPARQL) including NOSQL and data stream processing approaches. Going beyond traditional data management techniques, the class will expose students to information retrieval, data mining, data warehousing, network analysis, and other data analysis topics. Time permitting, the class will include big data processing techniques, such as the map/reduce framework.",
      requirements:
        "PREQ: CS 1501 or COE 1501 (MIN GRADE 'C' or Transfer For All Listed Coures)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Alexandros Labrinidis", "Xiaowei Jia"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1657",
      title: "PRIVACY IN THE ELECTRONIC SOCIETY",
      id: "CS1657",
      credits: 3,
      description:
        "Privacy is an increasingly significant concern in our modern, connected society. We all share personal information on a daily basis with a wide range of organizations. Although at times such sharing can be intentional and beneficial for the user, other times information is shared against the user's will, used for purposes that the user did not expect, revealed to entities other than those approved by the user, or used to infer additional information that the user did not intend to reveal. In this course, students will learn to reason about what information is revealed through the use of computer systems. They will study several different scenarios in which information sharing is either unavoidable or to some extent desirable, and discuss the balance between the benefits and costs of sharing. Finally, students will learn about several privacy-enhancing technologies (PETs), and how these can be put to use by software developers to defend the privacy of their users.",
      requirements:
        "PREQ: CS 0441 and CS 1501 with a minimum grade of C or TRANSFER",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["William Garrison"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1660",
      title: "INTRODUCTION TO CLOUD COMPUTING",
      id: "CS1660",
      credits: 3,
      description:
        "Cloud computing has emerged as a new paradigm for efficient and highly elastic delivery of computing services over the Internet to achieve economies of scale. The course will explore the concept of Cloud Computing, considering both its benefits and challenges. The course will also cover the basic design principles and architectures of Cloud Computing, including its usability and utility to deliver efficiently and flexibly infrastructure, platform, and software as a service. Topics include types of public, private and hybrid cloud computing services, data centers architecture and deployment, cloud computing programming models, virtualization and virtual networking and storage, and large-scale distributed processing framework to manage, process and store big data applications running in clustered systems.  The course will also include hands-on projects focused on developing applications on a MapReduce and Hadoop cluster. Upon successfully completing the course of the course, students will gain an understanding of the goals, benefits, and models of cloud computing, and how storage, processing, and services are designed and managed in a virtualized environment. Through hands-on projects, students will demonstrate proficiency in deploying and evaluating cloud computing applications and services. They will be able to design and deploy data-centered applications and services, and efficiently use frameworks and tools for data analytics.",
      requirements: "PREQ: CS 1550; MIN GRADE: C or Transfer",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Dan Mahoney"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1666",
      title: "PRINCIPLES OF COMPUTER GAME DESIGN AND IMPLEMENTATION",
      id: "CS1666",
      credits: 3,
      description:
        "The purpose of this course is to give an introduction and insight into designing and implementing video games.  This course questions the nature, intent, and motivation of games and how to construct a compelling experience for users. It is a project-based course, with a final project being to make a game with a small team.",
      requirements: "PREQ: CS 1501 or COE 1501; (MIN GRADE 'C' or Transfer)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Nicholas Farnan"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1671",
      title: "HUMAN LANGUAGE TECHNOLOGIES",
      id: "CS1671",
      credits: 3,
      description:
        "This course provides an introduction to the field of natural language processing (NLP) - the creation of computer programs that can understand, generate, and learn languages used by humans.  It will expose students to real-world applications such as speech recognition, information retrieval, dialogue agents, question answering systems, and machine translations by means of computational techniques including search algorithms, dynamic programming, hidden Markov models, probabilistic context free grammars, and related machine learning algorithms.",
      requirements:
        "PREQ: CS 1501; (MIN GRADE 'C'  OR TRANSFER)\n            Course Attributes: Learning Sciences",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1674",
      title: "INTRODUCTION TO COMPUTER VISION",
      id: "CS1674",
      credits: 3,
      description:
        "In this class, students will learn the basics of modern computer vision. The course will cover topics such as image filtering, edge detection, feature extraction, description and matching, grouping and clustering, object detection, activity recognition, and recognition with a human in the loop.",
      requirements: "PREQ: CS 1501 or COE 1501 (MIN GRADE 'C' OR TRANSFER)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Nils Murrugarra LLerena"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1675",
      title: "INTRODUCTION TO MACHINE LEARNING",
      id: "CS1675",
      credits: 3,
      description:
        "This introductory machine learning course will give an overview of many models and algorithms used in modern machine learning, including linear models, multi-layer neural networks, support vector machines, density estimation methods, bayesian belief networks, clustering, ensemble methods, and reinforcement learning. The course will give the student the basic ideas and intuition behind these methods, as well as, a more formal understanding of how and why they work. Through homework assignments students will have an opportunity to experiment with many machine learning techniques and apply them to various real-world datasets.",
      requirements:
        "PREQ: CS 1501 or COE 1501 and (STAT 1000 or 1100 or 1151 or ENGR 0020) (Min Grade 'C' or Transfer for All Listed Courses)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Patrick Skeba"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1678",
      title: "INTRODUCTION TO DEEP LEARNING",
      id: "CS1678",
      credits: 3,
      description:
        "This undergraduate course will cover the basics of modern deep neural networks. The first part of the course will introduce neural network architectures, activation functions, and operations. It will present different loss functions and describe how training is performed via backpropagation. In the second part, the course will describe specific types of neural networks, e.g. convolutional, recurrent, and graph networks, as well as their applications in computer vision and natural language processing. The course will also briefly discuss reinforcement learning and unsupervised learning, in the context of neural networks. In addition to attending lectures and completing bi-weekly homework assignments, students will also carry out and present a project.",
      requirements:
        "Pre-requisites: MATH 0220 and (MATH 0280 or MATH 1180) and CS 1501 with a minimum grade of C or TRANSFER.",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Scott Jordan"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1684",
      title: "BIAS AND ETHICAL IMPLICATIONS IN ARTIFICIAL INTELLIGENCE",
      id: "CS1684",
      credits: 3,
      description:
        'Artificial intelligence holds tremendous promise to benefit nearly all aspects of society, including healthcare, food production, economy, education, security, the law, and even our personal activities. The development of AI is creating new opportunities to improve the lives of people around the world. At the same time, these intelligent models may incorporate existing biases or create new biases that can seriously harm society. At its worst, AI can exacerbate misguided old practices and aggravate past social harms with its unprecedented processing powers and the veneer of seemingly objectivity, as humans in various social factions are disparately impacted by the AI-aided decisions.  Facing the ethical implications of AI, students need to be prepared with the critical intellectual capacities that allow them to understand and deal with these ethical challenges. These capacities comprise multi-disciplinary concepts ranging from statistical learning theories, model design, and ethical foundation, to psychological and cultural frameworks that are necessary for successfully navigating and evaluating responsible AI practices. Further, "ethical competence" will involve understanding various challenges surrounding AI, such as ethical regulation, fairness assessment, and interpretability of models. Note that this is a technical class. Our focus will be on designing, evaluating, and mitigating bias in machine learning models. You will have three programming assignments in Python.',
      requirements:
        "PRE: CS1501 and (MATH 1180 OR MATH 0206 OR MATH 0280 OR MATH 1080 OR MATH 1181 OR MATH 1185)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Lorraine Li"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1699",
      title: "SPECIAL TOPICS IN COMPUTER SCIENCE",
      id: "CS1699",
      credits: 3,
      description:
        "This is a special topics course that allows the computer science department to test run a course before deciding whether to permanently add it to our curriculum.\n\n\nSpring 2026 topics: \n\nCS 1699 (32717): Intro to Reinforcement Learning\n\nInstructor: Emma Jordan\n\nDescription: Reinforcement learning is a branch of machine learning that focuses on learning to make decisions through trial and error. The course covers Markov decision processes, the mathematical formulation of sequential decision-making problems, and foundational reinforcement learning algorithms for making optimal decisions. Specifically, the course will cover value-based and policy gradient methods, such as Q-learning and actor-critic, which underpin modern successes, including playing Atari 2600 games, playing Go, and training large language models. The course will provide you with both the basic mathematical principles underlying these methods and programming experience by creating your own reinforcement learning agents. In addition to having programming skills of an upper-level undergraduate, you should also be familiar with differentiation, basic probability, and linear algebra concepts. \n \n\nCS 1699 (29203): Design Thinking to Improve Work Practice - HONORS\n\nInstructor: Jacob Biehl\n\nDescription: This is an interdisciplinary course intended for a broad range of students and/or backgrounds. The course seeks participation from technical, health, social science, business, and design-focused majors. The course targets students who want to experience early product exploration and prototyping processes while learning how to work successfully on a multidisciplinary team. The course will cover a range of design methodologies use to envision socio-technical solutions to improve workflow challenges. Each offering of the course will focus on a particular work domain.  Spring 2026 semester will focus on home healthcare and clinical care processes.  The course will investigate these domains using a variety of methods, which include ethnomethodological observations, contextual inquiry, structure interviews, cognitive walkthroughs, market discovery and more.  Prototyping techniques include low-fidelity paper-based prototyping to use of modern design tools such as Figma and Adobe XD. Students will be expected to contribute significant time to reading, writing, and interaction with clinical partners.\n \n\nCS 1699 (32711): Mobile Computing - HONORS\n\nInstructor: Longfei Shangguan\n\nDescription: This course explores Mobile Computing, where continuous and seamless interaction is enabled by everyday mobile devices such as smart phones, watches, earphones, and smart glasses. We will provide the technical foundations for this paradigm by focusing on three key areas: principles of Sensing for gathering environmental context, efficient Computing techniques for low-power and continuous operation, and the deployment of intelligent On-Device AI models for context-aware decision-making. Through hands-on practical projects, you will learn how to design, build, and deploy innovative mobile systems that solve contemporary real-world problems.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1900",
      title: "INTERNSHIP",
      id: "CS1900",
      credits: 1,
      description:
        'This course places the student in an "on-the-job" setting in which he/she receives practical experience in a supervised training environment.',
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Wonsun Ahn"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1901",
      title: "INTERNSHIP",
      id: "CS1901",
      credits: 1,
      description:
        'This course places the student in an "on-the-job" setting in which they receive practical experience in a supervised training environment. This course does not satisfy the Computer Science capstone requirement.',
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["John Ramirez"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1906",
      title:
        "COMPUTER SCIENCE COOPERATIVE PROGRAM (replacing ENGR 1093, effective January 1, 2020)",
      id: "CS1906",
      credits: 1,
      description: "",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["John RamirezEmily Bennett"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1950",
      title: "DIRECTED RESEARCH: CAPSTONE",
      id: "CS1950",
      credits: 3,
      description:
        "This course is designed to give students the opportunity to design a plan of study to be agreed upon by the student and a supervising faculty member. Before seeking consent to enroll in this course, Computer Science majors must have completed an introduction to systems software and advanced algorithm data structures.  This course satisfies the Computer Science capstone requirement.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Wonsun Ahn"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1951",
      title: "DIRECTED RESEARCH",
      id: "CS1951",
      credits: 1,
      description:
        "This course is designed to give students the opportunity to design a plan of study to be agreed upon by the student and a supervising faculty member. This course does not satisfy the computer science capstone requirement.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["John Ramirez"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-1980",
      title: "TEAM PROJECT DESIGN AND IMPLEMENTATION",
      id: "CS1980",
      credits: 3,
      description:
        "Students will choose a project from proposals provided by our faculty and industry partners.  Teams will consist of 3 or 4 students and they will be supervised by a project mentor.  This course satisfies the capstone requirement.",
      requirements:
        "PLAN = CSCI-BS; PREQ: CS 0449 and CS 1501 (min grade 'C' or transfer for all courses listed)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Scott Jordan"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2000",
      title: "MS THESIS RESEARCH",
      id: "CS2000",
      credits: 1,
      description: "Master's thesis research.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [
        "Adam Lee",
        "Adriana Kovashka",
        "Alexandros Labrinidis",
        "Bruce Childers",
        "Daniel Mosse",
        "Diane Litman",
        "Erin Walker",
        "Jacob Biehl",
        "John Lange",
        "Kirk Pruhs",
        "Longfei Shangguan",
        "Lorraine Li",
        "Milos Hauskrecht",
        "Panos Chrysanthis",
        "Stephen Lee",
        "Wonsun Ahn",
        "Xiaowei Jia",
        "Youtao Zhang",
      ],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2001",
      title: "RESEARCH TOPICS/COMPUTER SCIENCE",
      id: "CS2001",
      credits: 3,
      description:
        "This course introduces the students to the research being conducted in the computer science department.  Active, state-of-the-art research topics will be covered.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Adriana Kovashka"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2002",
      title: "RESEARCH EXPERIENCE/COMPUTER SCI",
      id: "CS2002",
      credits: 3,
      description:
        "In this course, each student will perform exploratory research topics covered in CS 2001.  The research will be supervised and directed by faculty members working in the area of the topic chosen by the student.",
      requirements: "PREQ: CS 2001",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2003",
      title: "COMPUTER SCIENCE COLLOQUIUM",
      id: "CS2003",
      credits: 1,
      description:
        "The computer science colloquium is offered as a one unit graduate class, with a satisfactory/no credit (S/NC) grading option. The aim of this weekly meeting is to discuss the most recent advances in computer science.",
      requirements:
        "PREQ: CS 2001 and 2002; PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Jacob Biehl"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2012",
      title: "ALGORITHM DESIGN",
      id: "CS2012",
      credits: 3,
      description:
        "This course will cover methods and strategies that are useful for the design of nonnumeric algorithms.  Students are expected to design their own algorithms.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2015",
      title: "ALGORITHMS AND DATA STRUCTURES 2",
      id: "CS2015",
      credits: 3,
      description:
        "As the second in a two-course sequence on algorithms and data structures, this course covers a broad range of the most commonly used algorithms. Some examples include algorithms for searching, encryption, compression, graphs, and dynamic programming. The students will implement and test several algorithms. The course is programming intensive.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2021",
      title: "STRUCTURED PROGRAMMING LANGUAGES",
      id: "CS2021",
      credits: 3,
      description:
        "An analytical examination of modern high-level programming language structures; including design specification and implementation. Advanced forms of data types, expressions, and control primitives. Relationship of storage management techniques and language design.",
      requirements: "PLAN: Computer Science (CSCI-MS)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2030",
      title: "SOFTWARE ENGINEERING",
      id: "CS2030",
      credits: 3,
      description:
        "The purpose of this course is to provide a general survey of software engineering. Some of the topics covered include: software project planning and management, requirements engineering, model-based engineering, design patterns, and testing. Particular emphasis is on a team project in which small teams of students design and implement a software system.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2035",
      title: "INTERFACE DESIGN METHODOLOGY",
      id: "CS2035",
      credits: 3,
      description:
        "This course will introduce concepts and common practices for building software for user interfaces. Concepts will connect across input, visual layout techniques, and software patterns for responsive user interaction with a focus on mobile platforms (web and native). Emergent interface concepts, such as voice, AR/VR, and IoT will also be explored while building upon the course's software foundation. This course is targeted for students who desire skills in front-end development, interface design and prototyping, and user experience engineering.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Jacob Biehl"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2037",
      title: "INTRODUCTION TO HUMAN-COMPUTER INTERACTION",
      id: "CS2037",
      credits: 3,
      description:
        "The focus of the course is on the design of human-centered systems that people find usable, desirable, and useful. The course will introduce students to user-centered practices in Human-Computer Interaction. The course will cover the theory and practical application of Human-Computer Interaction concepts and ideas. Students will gain knowledge on diverse methods and tools to understand, improve, and create technology that harmonizes with and improves human capabilities, goals, and social environments.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2041",
      title: "INTRODUCTION TO COMPUTER ARCHITECTURE",
      id: "CS2041",
      credits: 3,
      description:
        "Examination of computer architecture and hardware system organization. Topics include: CPU organization, sequential and microprogrammed control, instruction set implementation, memory organizations, input/output structure, peripherals and computer communications.",
      requirements: "PREQ: (CS 0447 AND CS 0449) or CSCI-MS",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2045",
      title: "INTRODUCTION TO HIGH PERFORMANCE COMPUTING SYSTEMS",
      id: "CS2045",
      credits: 3,
      description:
        "This course is an introduction to the architecture of and software techniques for parallel and high performance computing systems.  The content includes fundamental aspects of vector processing, shared-memory and distributed-memory systems.  Students will be expected to complete a number of projects demonstrating specific applications in parallel processing paradigms.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2051",
      title: "ADVANCED SYSTEMS SOFTWARE",
      id: "CS2051",
      credits: 3,
      description:
        "To discuss in depth some advanced features of fundamental importance in the design of operating systems.  The subjects discussed include interprocess communication, real-time scheduling, advanced file systems, security and protection mechanisms.  The objective of the course is to provide an understanding of these advanced issues, as well as to bring awareness of the known solutions to these problems and to the limitations of these solutions.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Luis F. N. Q. d. Oliveira"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2053",
      title: "APPLIED CRYPTOGRAPHY AND NETWORK SECURITY",
      id: "CS2053",
      credits: 3,
      description:
        "This course will provide the necessary conceptual background and hands-on experience to understand the most common cryptographic algorithms and protocols and how to use them to secure computers networks and distributed applications.  Topics include: cryptographic algorithms for data confidentiality, authentication, and integrity, user authentication methods (secure tokens and biometrics), internet security protocols, security in local area networks, firewalls, and intrusion detection systems.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2055",
      title: "DATABASE MANAGEMENT SYSTEMS",
      id: "CS2055",
      credits: 3,
      description:
        "The objective of this course is to provide an in-depth knowledge of database systems design. Thus, the emphasis is on how to model one's own data and how to use available database management systems effectively. Towards this end, the relational and the object-relational models are discussed in great detail and object-oriented and other data models are also presented. Commercial database management systems are examined and students get practical experience through the use of such systems.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Nicholas Farnan"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2056",
      title: "INTRODUCTION TO DATA SCIENCE",
      id: "CS2056",
      credits: 3,
      description: "",
      requirements: "PLAN: Computer Science or Computer Engineering",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Xiaowei Jia"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2057",
      title: "PRIVACY IN THE ELECTRONIC SOCIETY",
      id: "CS2057",
      credits: 3,
      description:
        "Privacy is an increasingly significant concern in our modern, connected society. We all share personal information on a daily basis with a wide range of organizations. Although at times such sharing can be intentional and beneficial for the user, other times information is shared against the user's will, used for purposes that the user did not expect, revealed to entities other than those approved by the user, or used to infer additional information that the user did not intend to reveal. In this course, students will learn to reason about what information is revealed through the use of computer systems. They will study several different scenarios in which information sharing is either unavoidable or to some extent desirable, and discuss the balance between the benefits and costs of sharing. Finally, students will learn about several privacy-enhancing technologies (PETs), and how these can be put to use by software developers to defend the privacy of their users.",
      requirements: "PREQ: PLAN: CSCI-PHD and CSCI-MS.",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["William Garrison"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2060",
      title: "INTRODUCTION TO CLOUD COMPUTING",
      id: "CS2060",
      credits: 3,
      description:
        "Cloud computing has emerged as a new paradigm for efficient and highly elastic delivery of computing services over the Internet to achieve economies of scale. The course will explore the concept of Cloud Computing, considering both its benefits and challenges. The course will also cover the basic design principles and architectures of Cloud Computing, including its usability and utility to deliver efficiently and flexibly infrastructure, platform and software as a service. Topics include types of public, private and hybrid cloud computing services, data centers architecture and deployment, cloud computing programming models, virtualization and virtual networking and storage, and large-scale distributed processing framework to manage, process and store big data applications running in clustered systems.  The course will also include hands-on projects focused on developing applications on a MapReduce and Hadoop cluster. Upon successfully completing the course of the course, students will gain an understanding of the goals, benefits, and models of cloud computing, and how storage, processing, and services are designed and managed in a virtualized environment. Through hands-on projects, students will demonstrate proficiency in deploying and evaluating cloud computing applications and services. They will be able to design and deploy data-centered applications and services, and efficiently use frameworks and tools for data analytics.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Dan Mahoney"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2071",
      title: "HUMAN LANGUAGE TECHNOLOGIES",
      id: "CS2071",
      credits: 3,
      description:
        "This course provides an introduction to the field of natural language processing (NLP) - the creation of programs that can understand, generate, and learn languages used by humans. It will expose students to applications by means of computational techniques including dynamic programming, hidden markov models, grammars, and machine learning algorithms.",
      requirements:
        "PREQ: CS 1501; (MIN GRADE 'C'  or TRANSFER) and MATH 0280 or 1180; PLAN: CSCI-MS or CSCI-PHD",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2074",
      title: "INTRODUCTION TO COMPUTER VISION",
      id: "CS2074",
      credits: 3,
      description:
        "In this class, students will learn the basics of modern computer vision. The course will cover topics such as image filtering, edge detection, feature extraction, description and matching, grouping and clustering, object detection, activity recognition, and recognition with a human in the loop.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Nils Murrugarra LLerena"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2075",
      title: "INTRODUCTION TO MACHINE LEARNING",
      id: "CS2075",
      credits: 3,
      description:
        "This introductory machine learning course will give an overview of many models and algorithms used in modern machine learning, including linear models, multi-layer neural networks, support vector machines, density estimation methods, Bayesian belief networks, clustering, ensemble methods, and reinforcement learning. The course will give the student the basic ideas and intuition behind these methods, as well as a more formal understanding of how and why they work. Through homework assignments, students will have an opportunity to experiment with many machine learning techniques and apply them to various real-world datasets.",
      requirements: "Instructor consent.",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Patrick Skeba"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2078",
      title: "INTRODUCTION TO DEEP LEARNING",
      id: "CS2078",
      credits: 3,
      description:
        "This course will cover the basics of modern deep neural networks. The first part of the course will introduce neural network architectures, activation functions, and operations. It will present different loss functions and describe how training is performed via backpropagation. In the second part, the course will describe specific types of neural networks, e.g. convolutional, recurrent, and graph networks, as well as their applications in computer vision and natural language processing. The course will also briefly discuss reinforcement learning and unsupervised learning, in the context of neural networks. In addition to attending lectures and completing bi-weekly homework assignments, students will also carry out and present a project.",
      requirements:
        "PREQ: MATH 0230 and (MATH 0280 or MATH 1180) and CS 1501 with a minimum grade of C or TRANSFER.",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Scott Jordan"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2084",
      title: "BIAS AND ETHICAL IMPLICATIONS IN ARTIFICIAL INTELLIGENCE",
      id: "CS2084",
      credits: 3,
      description:
        'Artificial intelligence holds tremendous promise to benefit nearly all aspects of society, including healthcare, food production, economy, education, security, the law, and even our personal activities. The development of AI is creating new opportunities to improve the lives of people around the world. At the same time, these intelligent models may incorporate existing biases or create new biases that can seriously harm society. At its worst, AI can exacerbate misguided old practices and aggravate past social harms with its unprecedented processing powers and the veneer of seemingly objectivity, as humans in various social factions are disparately impacted by the AI-aided decisions.  Facing the ethical implications of AI, students need to be prepared with the critical intellectual capacities that allow them to understand and deal with these ethical challenges. These capacities comprise multi-disciplinary concepts ranging from statistical learning theories, model design, and ethical foundation, to psychological and cultural frameworks that are necessary for successfully navigating and evaluating responsible AI practices. Further, "ethical competence" will involve understanding various challenges surrounding AI, such as ethical regulation, fairness assessment, and interpretability of models. Note that this is a technical class. Our focus will be on designing, evaluating, and mitigating bias in machine learning models. You will have three programming assignments in Python.',
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Lorraine Li"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2099",
      title: "SPECIAL TOPICS IN COMPUTER SCIENCE",
      id: "CS2099",
      credits: 3,
      description:
        "This is a special topics course that allows the computer science department to test run a course before deciding whether to permanently add it to our curriculum.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2110",
      title: "THEORY OF COMPUTATION",
      id: "CS2110",
      credits: 3,
      description:
        "This course deals with computability theory, automata theory and formal languages.  Various models of computation will be examined, their relations to each other and their properties will be studied.  Topics include models for computable functions and church's thesis, models for recognizers and their relation to formal grammars, algorithmically solvable and unsolvable problems, and the complexity of computations.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2150",
      title: "DESIGN & ANALYSIS OF ALGORITHMS",
      id: "CS2150",
      credits: 3,
      description:
        "This course deals with the analysis of algorithms and the relevance of such analysis to the design of efficient algorithms.  The derivation of results that are primarily of theoretical significance shares importance with the practical task of designing efficient algorithms.  Topics covered: searching and sorting, graph algorithms, arithmetic, np-completeness, and lower bound techniques.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Thumrongsak Kosiyatrakul"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2210",
      title: "COMPILER DESIGN",
      id: "CS2210",
      credits: 3,
      description:
        "The design and implementation of current high level languages.  Emphasis is placed on the structure of compilers. Lexical, syntax and semantic analysis as well as target code generation and register allocation.  Storage management techniques for recursive and retentive control structures. Formal specification techniques.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Youtao Zhang"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2310",
      title: "SOFTWARE ENGINEERING",
      id: "CS2310",
      credits: 3,
      description:
        "This course will examine the software engineering process in general, the considerations for large software projects in particular, and then will focus on the conversion of software specifications into production code.  Topics will include modern design methods, safety-critical software, verification and validation, testing theory and methods, reengineering of legacy software.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2410",
      title: "COMPUTER ARCHITECTURE",
      id: "CS2410",
      credits: 3,
      description:
        "A study of the hardware structure of computer systems and subsystems.  Topics include:  processor architecture, parallelism and pipelining, cache and main memory organization, i/o controllers and i/o processors, and interconnection structures.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2510",
      title: "COMPUTER OPERATING SYSTEMS",
      id: "CS2510",
      credits: 3,
      description:
        "An in-depth study of the control abstractions in modern operating systems and the issues involved in efficient implementation of those abstractions.  Topics will include concurrency and its control, memory management, resource management, and structure of distributed and parallel operating systems.  These topics will be developed through the lectures, assigned readings from the literature, and an examination of actual operating systems.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2520",
      title: "WIDE AREA NETWORKS",
      id: "CS2520",
      credits: 3,
      description:
        "The course provides an understanding of the basic principles of broadband networks.  It will introduce protocols suitable for broadband networks, with emphasis on atm.  Other technologies, such as frame relay and smds, will be discussed. The course will also address important design issues for high speed networks including characterizations of (a) network traffic and its implications on network design, and (b) application performance objectives, traffic policing, and congestion control algorithms that can meet those diverse objectives.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Amy Babay"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2530",
      title: "COMPUTER AND NETWORK SECURITY",
      id: "CS2530",
      credits: 3,
      description:
        "The goal of the proposed course is to provide our graduate students the necessary background and hands on experience to do well in systems research or advanced development with an emphasis on security.  The instructor will lecture on cryptographic algorithms for data confidentiality, authentication, and integrity, security protocols for the internet and local area networks, firewalls, intrusion detection systems, defense against denial of service attacks, user authentication methods, cryptographic file systems, secure email stenography and usable security.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2550",
      title: "PRINCIPLES OF DATABASE SYSTEMS",
      id: "CS2550",
      credits: 3,
      description:
        "The main objective of this course is to provide an in-depth knowledge of database management systems design.  Topics covered at length are concurrency control including concurrency on structured data, recovery and query optimization. Some important aspects of distributed databases are discussed, including distributed concurrency control and fault tolerance.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2620",
      title: "INTERDISCIPLINARY MODELING AND VISUALIZATION",
      id: "CS2620",
      credits: 3,
      description:
        "This course discusses computer graphics, modeling and visualization techniques used to solve scientific problems. Focus falls on identifying scientific problems, proposing solutions involving graphical modeling and visualization, and designing, implementing, and evaluating the solutions. Examples include interactive software systems, quantitative analysis tools, or new applications of existing visualizations methods.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2637",
      title: "FOUNDATIONS OF HUMAN-COMPUTER INTERACTION",
      id: "CS2637",
      credits: 3,
      description:
        "Human-Computer Interaction is the science of building technologies for human use and studying how people use existing technologies. This course provides an introduction to user research methods in Human-Computer Interaction, including the generative methods used to design technologies, evaluative methods used to assess technologies, and human and automated data analysis approaches. The course will discuss applications of these topics to both well-established technologies (websites, mobile apps) and emerging technologies (e.g., brain-computer interfaces, AR/VR) as well as applications to emerging research areas in HCI such as crowdsourcing and human-AI interaction. A strong programming background is expected to take this course.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Aakash Gautam"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2710",
      title: "FOUNDTNS OF ARTIFICIAL INTELLGNC",
      id: "CS2710",
      credits: 3,
      description:
        "This course covers the foundational techniques in artificial intelligence, including:  problem definition and analysis, heuristic search, adversarial search, knowledge representation, planning and constraint satisfaction, and methods for reasoning under uncertainty.  Attention will be given to the roles of these techniques in the design of intelligent agents.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Patrick Skeba"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2731",
      title: "INTRO NATURAL LANGUAGE PROCSSNG",
      id: "CS2731",
      credits: 3,
      description:
        "This course provides an introduction to the field of Natural Language Processing (NLP) - the creation of computer programs that can understand, generate, and learn natural language. Natural language understanding will be used as a vehicle to introduce the three major subfields of NLP: syntax, semantics, and pragmatics. The course will introduce both knowledge-based and statistical methods for NLP, and will illustrate the use of such methods in a variety of application areas.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Michael Yoder"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2750",
      title: "MACHINE LEARNING",
      id: "CS2750",
      credits: 3,
      description:
        "This course will give an overview of many techniques and algorithms in machine learning, beginning with topics such as linear and logistic regression, multi-layer neural networks and ending up with more recent topics such as boosting and support vector machines.  The basic ideas and intuition behind modern machine learning methods, as well as, a more formal understanding of how and why they work will be covered.  Students will have an opportunity to experiment with various machine learning techniques or apply them to a selected problem or domain in the context of a term project.",
      requirements:
        "PLAN: Computer Science (CS-PHD; CS-MS; CSMSBS-MS) or Computer Engineering (COEAS-PHD; COEAS-MS; COEENG-PHD; COEENG-MCO)",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Ryan Shi"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2756",
      title: "PRINCIPLES OF DATA MINING",
      id: "CS2756",
      credits: 3,
      description:
        "Data mining is the process of efficient supervised or unsupervised discovery of non-trivial and useful knowledge and patterns from collections of data. This proposed course aims to provide a discussion of multiple common tasks in data mining, including association rules/sequential patterns, classification, anomaly detection, avoiding false discoveries, and clustering. Besides, this course will also introduce the latest advances in data mining and provide extensive hands-on experience via programming projects.  Non-CS students interested in enrolling must suggest project ideas and obtain the instructors written permission to override the enrollment requirements.",
      requirements: "PREQ: CS 1656",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2770",
      title: "COMPUTER VISION",
      id: "CS2770",
      credits: 3,
      description: "",
      requirements: "PLAN: Computer Science or Computer Engineering",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2893",
      title: "MODERN QUANTUM COMPUTING",
      id: "CS2893",
      credits: 3,
      description:
        "This course introduces modern quantum computing theories and experiments for graduate and advanced undergraduate students in Computer Science, SCI, and related fields. It covers essential topics, including 1. basic quantum computing concepts using linear algebra, 2. variational quantum algorithms, 3. quantum optimization and quantum machine learning with coding exercises, 4. practical quantum error correction techniques, and 5. post-quantum cryptography. Students will gain hands-on skills, enabling them to conduct research on real-world quantum applications using emerging quantum technologies.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Junyu Liu"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2900",
      title: "GRADUATE INTERNSHIP",
      id: "CS2900",
      credits: 1,
      description:
        "A professional internship may be taken at any time during the course of graduate study.  Ph.D. students may take this course up to two times for credit, MS students may take it at most once.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [
        "Aakash Gautam",
        "Adam Lee",
        "Adriana Kovashka",
        "Alexandros Labrinidis",
        "Amy Babay",
        "Bruce Childers",
        "Daniel Mosse",
        "Diane Litman",
        "Jacob Biehl",
        "Kirk Pruhs",
        "Longfei Shangguan",
        "Lorraine Li",
        "Milos Hauskrecht",
        "Panos Chrysanthis",
        "Paul Cohen",
        "Ryan Shi",
        "Stephen Lee",
        "Wonsun Ahn",
        "Xiaowei Jia",
        "Xulong Tang",
        "Youtao Zhang",
      ],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2905",
      title: "COMPUTER SCIENCE COOPERATIVE PROGRAM",
      id: "CS2905",
      credits: 1,
      description: "",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Jacob BiehlEmily Bennett"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2910",
      title: "MS PROJECT",
      id: "CS2910",
      credits: 1,
      description:
        "A project under the supervision of a faculty member or a group of faculty members.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [
        "Adam Lee",
        "Adriana Kovashka",
        "Alexandros Labrinidis",
        "Amy Babay",
        "Bruce Childers",
        "Daniel Mosse",
        "Diane Litman",
        "Erin Walker",
        "Jacob Biehl",
        "Kirk Pruhs",
        "Longfei Shangguan",
        "Lorraine Li",
        "Luis F. N. Q. d. Oliveira",
        "Milos Hauskrecht",
        "Nils Murrugarra LLerena",
        "Panos Chrysanthis",
        "Paul Cohen",
        "Stephen Lee",
        "Xiaowei Jia",
        "Xulong Tang",
        "Youtao Zhang",
      ],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-2990",
      title: "INDEPENDENT STUDY",
      id: "CS2990",
      credits: 1,
      description:
        "This course involves study which is approved by the faculty adviser but carried out independently by student.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [
        "Aakash Gautam",
        "Adam Lee",
        "Adriana Kovashka",
        "Alexandros Labrinidis",
        "Amy Babay",
        "Daniel Mosse",
        "Diane Litman",
        "Erin Walker",
        "Jacob Biehl",
        "Junyu Liu",
        "Kirk Pruhs",
        "Longfei Shangguan",
        "Lorraine Li",
        "Luis F. N. Q. d. Oliveira",
        "Milos Hauskrecht",
        "Nils Murrugarra LLerena",
        "Panos Chrysanthis",
        "Paul Cohen",
        "Stephen Lee",
        "Xiaowei Jia",
        "Xulong Tang",
        "Youtao Zhang",
      ],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3000",
      title: "RESEARCH AND DISSERTATION PHD",
      id: "CS3000",
      credits: 1,
      description:
        "Any adjunct or full member of the graduate faculty of the department may direct doctoral dissertations.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [
        "Adam Lee",
        "Adriana Kovashka",
        "Alexandros Labrinidis",
        "Amy Babay",
        "Bruce Childers",
        "Daniel Mosse",
        "Diane Litman",
        "Erin Walker",
        "Jacob Biehl",
        "Junyu Liu",
        "Kirk Pruhs",
        "Longfei Shangguan",
        "Lorraine Li",
        "Luis F. N. Q. d. Oliveira",
        "Milos Hauskrecht",
        "Nils Murrugarra LLerena",
        "Panos Chrysanthis",
        "Paul Cohen",
        "Stephen Lee",
        "Xiaowei Jia",
        "Xulong Tang",
        "Youtao Zhang",
      ],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3150",
      title: "ADV TOPCS DSGN & ANALYS ALGORTHM",
      id: "CS3150",
      credits: 3,
      description:
        "This course covers recent results in the design and analysis of algorithms.  The contents change from term to term.",
      requirements: "PREQ: CS 2150",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3210",
      title: "ADV TOPICS PROGRAMMING LANGUAGES",
      id: "CS3210",
      credits: 3,
      description:
        "Advanced program representations & program analysis techniques for compilers, optimizers, software tools & parallel systems.  Analysis techniques include advanced register allocation algorithms, data flow frameworks & techniques, optimizing algorithms & slicing techniques.  Program representations include various types of dependence graphs & static single assignment.  Analyses & code improving transformations for various types of parallel architectures including VLIW, superscalar, shared memory & distributed memory machines.  Current research topics in prog languages.",
      requirements: "PREQ: CS 2210",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3220",
      title: "COMPILING TECHNQS/PARALLEL SYMS",
      id: "CS3220",
      credits: 3,
      description:
        "This course will study techniques used in the design of parallelizing compilers.  Techniques for computing dependencies and program representations suitable for parallelizing software will be presented.  Topics will include detection of fine and coarse parallelism, program transformations and scheduling techniques to exploit parallelism, on shared and distributed memory architectures, and techniques for debugging parallel software.",
      requirements: "PREQ: CS 2210",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3410",
      title: "ADV TOPICS COMPUTER ARCHITECTURE",
      id: "CS3410",
      credits: 3,
      description:
        "This course will survey current topics in computer architecture.",
      requirements: "PREQ:  CS 2410",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Xulong Tang"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3510",
      title: "ADV TOPICS IN OPERATING SYSTEMS",
      id: "CS3510",
      credits: 3,
      description:
        "An in-depth study of specific topics of modern operative systems, the theory behind them, and their implementation. Topics may include advanced concepts in distributed systems, multimedia systems, file systems, resource management, distributed shared memory, among others.",
      requirements: "PREQ: CS 2510",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3525",
      title: "ADVANCED TOPICS IN SECURITY AND PRIVACY",
      id: "CS3525",
      credits: 3,
      description:
        "This course covers current research topics in computer security and privacy.  The topics covered will change from term to term.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3530",
      title: "ADV TOPCS DISTBD & REAL-TIME SYS",
      id: "CS3530",
      credits: 3,
      description:
        "This course will introduce the students to the foundations of real-time systems.  The emphasis is on understanding predictability and resource management, at the level of the processor, network, memory, disks, i/o devices, etc.  Fault tolerance is another main emphasis of the course, since it is a requirement for real-time behavior.  Specific real-time fault-tolerant schemes will be discussed.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3550",
      title: "ADV TOPICS IN MANAGEMENT OF DATA",
      id: "CS3550",
      credits: 3,
      description:
        "The course is devoted to a reevaluation of traditional database techniques and the examination of emerging approaches for the reliable and efficient data management in large distributed systems.  Examples of such systems include multi databases, mobile and multimedia databases, and advanced OS and AI.  Topics include object management, workflows and extended transactions, semantics-based concurrency control and recovery, active and real-time database techniques.  The concepts will be examined within the context of a state-of the-art system.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3551",
      title: "ADV TOPICS IN DISTBD INFOR SYS",
      id: "CS3551",
      credits: 3,
      description:
        "This course focuses on emerging technologies for large scale, distributed information systems.  Topics to be examined include data and information modeling, heterogeneous data integration, data distribution, caching and replication, web databases, distributed query processing and searching, multimodal access, quality of data, content networks, and pervasive data management.",
      requirements: "PREQ: CS 2510 and 2550",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3570",
      title: "ADVANCED TOPICS IN USER INTERFACE",
      id: "CS3570",
      credits: 3,
      description: "",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3580",
      title: "SEM: ADV TOPC PARALLEL COMPUTING",
      id: "CS3580",
      credits: 3,
      description:
        "Different topics related to parallel and systolic computations will be covered at various levels of details. Example of such topics are:  architectures of parallel processors and VISI computational networks, languages and programming environments for parallel systems, the design and analysis of parallel and systolic algorithms, reconfigurable and data driven processor arrays, complexity measures of VISI computations, and the application of parallel processors to supercomputing.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3650",
      title: "VISUAL LANGUAGES AND PROGRAMMING",
      id: "CS3650",
      credits: 3,
      description:
        "This course covers the fundamentals of visual language theory, iconic and symbolic representations, parsing techniques, semantics and pragmatics of visual languages, visual programming systems, visual querying systems, visual information systems and knowledge-based visualization.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3670",
      title:
        "ADVANCED TOPICS IN THE APPLICATIONS AND TECHNOLOGIES OF VIRTUAL AND AUGMENTED RE",
      id: "CS3670",
      credits: 3,
      description:
        "This PhD seminar surveys research frontiers in augmented, mixed, and virtual reality (collectively referred to as `XR'). Seminar activities will have students read and debate landmark and recent papers while building lightweight prototypes and running small empirical studies. Topics include human perception and comfort in XR; tracking and sensor fusion (VIO/SLAM); displays and optics; rendering and performance (OpenXR/WebXR, foveation, edge/cloud); 3D interaction, haptics, and spatial audio; scene understanding and neural rendering (NeRF/gaussians); multi-user systems and synchronization; evaluation methods and analysis; and privacy, safety, and ethics. A semester-long team project culminates in a paper-style write-up, demo, and public presentation. Suitable for students targeting HCI, vision/graphics, systems, and ML for XR.",
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3710",
      title: "ADV TOPICS ARTIFICIAL INTELLGNC",
      id: "CS3710",
      credits: 3,
      description:
        "This course will survey current topics in artificial intelligence.",
      requirements: "PREQ: CS 2710",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3720",
      title: "ADVANCED TOPICS IN INTERNET OF THINGS",
      id: "CS3720",
      credits: 3,
      description:
        "A practical course in expert systems involving discussions of fundamentals of building expert systems, discussion of open problems, and designing and building a protype expert system.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Daniel Mosse"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3730",
      title: "ADV TOPCS NATURAL LANG PROCSSNG",
      id: "CS3730",
      credits: 3,
      description:
        "Natural language processing (NLP) is primarily concerned with creating computer programs that interact with human languages.  The objective of this course is to continue the studies of natural language processing (NLP), to explore selected topics among syntax, semantics, and pragmatics more deeply, and to discuss recent advances in (NLP).",
      requirements: "PREQ: CS 2731",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3750",
      title:
        "ADV TOPICS IN MACHINE LEARNING (replaced by ISSP 3535, effective January 1, 2018)",
      id: "CS3750",
      credits: 3,
      description:
        "This course will survey advanced topics in machine learning, for example, inductive learning, reinforcement learning, and neural network learning.",
      requirements: "PREQ: CS 2750",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3790",
      title:
        "ADVANCED TOPICS IN EDUCATIONAL TECHNOLOGY: PERSONALIZED LEARNING ENVIRONMENTS",
      id: "CS3790",
      credits: 3,
      description:
        'The 2010 National Educational Technology Plan outlined how "The challenge for our education system is to leverage the learning sciences and modern technology to create engaging, relevant, and personalized learning experiences for all learners." While instruction has traditionally been one-size-fits-all, the rise of web-based and mobile technologies provide an opportunity to automatically detect what learners need and adapt instruction to their unique prior knowledge, motivation, and preferences. In this seminar course, we survey different types of personalization in educational technologies (e.g., cognitive, metacognitive, social, motivational), computational modeling techniques for representing learners and their needs, and best practices in designing personalized supports for learners. Students will lead one or more class discussions, participate in the other discussions, and complete a group course project.   Students must have a foundational knowledge of algorithms and data structures before enrolling in this course.',
      requirements: "",
      terms_offered: {
        FALL: false,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3800",
      title: "ADVANCED TOPICS IN COMPUTING",
      id: "CS3800",
      credits: 3,
      description:
        "This course aims to provide students with an introduction to a range of advanced topics in computing. It will explore the current and future challenges facing the emerging computing paradigms. These will also be used to illustrate the many different influences and trade-offs involved in computing and information systems.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: ["Adriana Kovashka"],
    },
    {
      sci_href: "https://courses.sci.pitt.edu/courses/view/CS-3900",
      title: "PHD DIRECTED STUDY",
      id: "CS3900",
      credits: 1,
      description:
        "The course may involve a project under the supervision of a faculty member.",
      requirements: "",
      terms_offered: {
        FALL: true,
        SPRING: false,
        SUMMER: false,
      },
      instructors: [
        "Adam Lee",
        "Adriana Kovashka",
        "Alexandros Labrinidis",
        "Amy Babay",
        "Bruce Childers",
        "Daniel Mosse",
        "Diane Litman",
        "Erin Walker",
        "Jacob Biehl",
        "John Lange",
        "Kirk Pruhs",
        "Longfei Shangguan",
        "Lorraine Li",
        "Luis F. N. Q. d. Oliveira",
        "Milos Hauskrecht",
        "Panos Chrysanthis",
        "Paul Cohen",
        "Stephen Lee",
        "Xiaowei Jia",
        "Xulong Tang",
        "Youtao Zhang",
      ],
    },
  ],
}
