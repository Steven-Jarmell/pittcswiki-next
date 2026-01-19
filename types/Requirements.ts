export type RequirementID = string

export interface RequirementObject {
  or?: (RequirementID | RequirementObject)[]
  and?: (RequirementID | RequirementObject)[]
  comment?: string
}

export type Requirement = RequirementID | RequirementObject

export type RequirementsData = Requirement[] | RequirementObject
