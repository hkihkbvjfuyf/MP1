// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "竞赛与荣誉"
export const awardsIntro = "参与的竞赛和获得的荣誉。"

export const awards: Array<ActivityItemType> = [
  {
    name: '校园头脑奥林匹克大赛',
    description: '一等奖',
    date: '2024',
    location: '南京航空航天大学',
  },
  {
    name: '智能制造赛校赛',
    description: '第四名',
    date: '2024',
    location: '南京航空航天大学',
  },
  {
    name: '南京航空航天大学"舜宇杯"第十届金相技能大赛',
    description: '三等奖',
    date: '2024',
    location: '南京航空航天大学',
  },
  {
    name: '学业奖学金二等奖',
    description: '',
    date: '2024',
    location: '南京航空航天大学',
  },
  {
    name: '优秀学生奖学金三等奖',
    description: '',
    date: '2024',
    location: '南京航空航天大学',
  },
  {
    name: '青协优秀干事',
    description: '',
    date: '2024',
    location: '南京航空航天大学',
  },
]

// Research & Projects
export const projectHeadLine = "项目经历"
export const projectIntro = "参与的科研和工程项目。"

export const projects: Array<ProjectItemType> = [
  {
    name: '舱门驱动系统机电联合仿真研究',
    description: '校企协同育人平台工程实践计划项目，围绕舱门驱动系统的运动学、动力学特性，以及电功率驱动原理，进行深入研究。负责主导驱动模型的设计工作，包括电机选型、传动机构设计以及驱动策略制定等。',
    link: { href: '', label: '' },
    tags: ['机电仿真', 'Solidworks', 'Adams', '机械设计']
  },
  {
    name: '新型采用循环气流的吹吸结合式扫地车结构设计',
    description: '校级大创项目，研发一种新型环保清扫车，以解决传统清扫车在作业中存在的二次污染、水资源浪费以及交叉感染等问题。负责环保清扫车结构设计及三维图绘制。',
    link: { href: '', label: '' },
    tags: ['机械设计', 'Solidworks', '三维建模', '环保设备']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "技能特长"
export const activitiesIntro = "掌握的专业技能和软件工具。"

export const activities: Array<ActivityItemType> = [
  {
    name: '机械设计',
    description: '掌握Solidworks、Adams等工程软件，可熟练设计机械结构，设计项目所需机械载体。',
    date: '',
    location: '',
  },
  {
    name: '编程能力',
    description: '掌握C、C++语言，掌握单片机的运用。',
    date: '',
    location: '',
  },
  {
    name: '工程制图',
    description: '掌握工程图学知识，可熟练绘制工程图纸。',
    date: '',
    location: '',
  },
]
