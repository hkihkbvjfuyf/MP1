export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Liu Yaixin'
export const headline = '机械工程专业学生'
export const introduction =
  '你好！我是刘雅心，南京航空航天大学机械工程专业学生。GPA 3.6/5，绩点排名12/58，综测排名6/58。熟练掌握Solidworks、Adams等工程软件，以及C、C++语言和单片机应用。'
export const email = '1429252688@qq.com'
export const githubUsername = ''

// about page
export const aboutMeHeadline = '关于我'
export const aboutParagraphs = [
  '你好！我是刘雅心，南京航空航天大学机械工程专业学生。GPA 3.6/5，绩点排名12/58，综测排名6/58。',
  '核心课程：高等数学（94）、工程图学（91）、大学物理（85）、C++程序设计（90）。获得学业奖学金二等奖、优秀学生奖学金三等奖，以及青协优秀干事荣誉称号。',
  '熟练掌握Solidworks、Adams等工程软件，可熟练设计机械结构，设计项目所需机械载体；掌握C、C++语言，掌握单片机的运用。',
]

// blog
export const blogHeadLine = '我的思考'
export const blogIntro =
  '记录我在机械工程领域的学习和实践经历。'

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: '邮箱',
    icon: 'mail',
    href: 'mailto:1429252688@qq.com',
  },
  {
    name: '电话',
    icon: 'phone',
    href: 'tel:19122646367',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'cplusplus',
  'c',
  'solidworks',
  'autodesk',
  'arduino',
  'python',
  'git',
  'github',
]
