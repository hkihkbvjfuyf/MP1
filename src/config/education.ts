
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: '南京航空航天大学',
      major: '机械工程',
      logo: 'college',
      start: '2021',
      end: 'Present'
    },
  ]