export type CategoriesDataType = {
  name: string
  courses: string[]
  description?: {
    __html: string
  }
  display?: string
}

export const CategoriesData: CategoriesDataType[] = [
  {
    name: "Hidden",
    display: "hidden",
    description: {
      __html:
        "These classes are either not shown to be offered on Pitt's website, or are not apart of the CS major so we hide them by default.",
    },
    courses: ["CS1538", "CS1635", "CS1651", "CS1655", "CS1640"],
  },
  {
    name: "Core",
    courses: ["CMP0401", "CS0401", "CS0441", "CS0445", "CS0447", "CS0449"],
  },
  {
    name: "Upper Core",
    courses: ["CS1501", "CS1502", "CS1550"],
  },
  {
    name: "Electives",
    courses: ["CS0590", "CS1509 - 1700"],
  },
  {
    name: "Capstone",
    description: {
      __html:
        "These involve applying your skills. <a href='/academics/registration/capstone/'>Read our guide on the capstone classes here!</a>",
    },
    courses: ["CS1900", "CS1902", "CS1906", "CS1950", "CS1980"],
  },
  {
    name: "Masters",
    courses: ["CS1999 - 3000"],
    description: {
      __html:
        "It is possible to take masters classes as an undergrad! There is also the BS/MS, which <a href='/academics/bsms'>we have a guide on you can read here</a>. Read our guide on <a href='/academics/applying-to-graduate-school/'>grad school here!</a>",
    },
  },
  {
    name: "PhD",
    courses: ["CS2999 - 4000"],
  },
  {
    name: "Intro",
    courses: ["CS0008", "CS0007", "CS0010", "CS0011", "CS0012"],
    description: {
      __html:
        "If you are curious about CS, these intro classes are good places to start!",
    },
  },
]
