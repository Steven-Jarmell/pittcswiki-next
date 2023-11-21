export const getNumFromCourseId = (id: any) => {
  const backFour = id.length - 4
  return Number(id.substring(backFour))
}

export const cleanCourseId = (id: any) => {
  if (!id) return ""
  const backFour = id.length - 4
  const dept = id.substring(0, backFour)
  const num = getNumFromCourseId(id) + ""
  return dept + " " + num.padStart(3, "0")
}

export const cleanCourseTitle = (title: any) => {
  return title.replace("INTRODUCTION", "INTRO")
}

export const toProperCourseId = (id: any) => {
  const dept = id.replace(/\d/g, "")
  const num = id.replace(/[a-zA-Z]/g, "").padStart(4, "0")
  return dept + num
}
