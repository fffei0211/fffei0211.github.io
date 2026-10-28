import portraitPlaceholder from "../assets/images/portrait-placeholder.svg";
import projectPlaceholder01 from "../assets/images/project-placeholder-01.svg";
import projectPlaceholder02 from "../assets/images/project-placeholder-02.svg";
import projectPlaceholder03 from "../assets/images/project-placeholder-03.svg";
import projectPlaceholder04 from "../assets/images/project-placeholder-04.svg";
import educationPlaceholder01 from "../assets/images/education-placeholder-01.svg";
import educationPlaceholder02 from "../assets/images/education-placeholder-02.svg";

/**
 * Portfolio content model.
 *
 * Every item below is intentionally marked as placeholder content. Replace it
 * with verified personal information before publishing; do not present these
 * labels as real experience, education, skills, or contact details.
 */
export const profile = {
  site: {
    badge: "PORTFOLIO",
    title: "个人作品集（内容待补充）",
    description: "用于搭建个人作品集的占位数据，所有个人资料均待补充。",
    isPlaceholder: true,
  },

  identity: {
    name: "李怡霏",
    englishName: "Joy",
    initials: "ME",
    role: "[职业定位]",
    statement:
      "个人介绍待补充：请用 2–3 句话说明你关注的问题、擅长的方向，以及希望通过作品集传达什么。",
    location: "浙江杭州",
    status: "[当前状态]",
    tags: ["[能力标签 01]", "[能力标签 02]", "[能力标签 03]"],
    portrait: portraitPlaceholder,
    portraitAlt: "人物照片占位图，请替换为本人授权的透明背景照片",
    isPlaceholder: true,
  },

  navigation: [
    { id: "about", label: "关于我", href: "#about" },
    { id: "education", label: "教育背景", href: "#experience" },
    { id: "projects", label: "项目经历", href: "#projects" },
    { id: "experience", label: "成果展示", href: "#skills" },
    { id: "skills", label: "技能与爱好", href: "#education" },
    { id: "contact", label: "联系我", href: "#contact" },
  ],

  hero: {
    eyebrow: "HELLO / 你好",
    primaryAction: { label: "查看项目", href: "#projects" },
    secondaryAction: { label: "联系我", href: "#contact" },
    resumeAction: { label: "查看简历" },
    isPlaceholder: true,
  },

  sectionCopy: {
    experience: {
      index: "02 / THE PRACTITIONER",
      title: "我在真实现场做过什么",
      description: "这里用于放置真实经历、职责与可验证成果。当前内容均为待补充占位。",
    },
    projects: {
      index: "03 / THE CREATOR",
      title: "没有排期，也想把它做出来",
      description: "用真实案例讲清问题、过程与判断。请替换占位项目，不要只展示漂亮封面。",
    },
    skills: {
      index: "04 / SKILLS & LIFE",
      title: "随机抽取一张我的档案卡",
      description: "不使用虚假的百分比进度条，而是用场景、工具和案例说明能力。",
    },
    education: {
      index: "05 / LEARNING PATH",
      title: "我的学习坐标",
      description: "学校、专业、时间与学习内容均待补充。",
    },
    contact: {
      index: "06 / LET'S TALK",
      title: "下一段经历，\n也许可以一起创建。",
      description: "请补充希望收到的合作、岗位或交流类型。",
    },
  },

  experiences: [
    {
      id: "experience-01",
      period: "起止时间待补充",
      organization: "经历单位 01（待补充）",
      role: "职位或角色待补充",
      type: "工作 / 实习 / 项目（待选择）",
      summary: "概述背景、职责范围和所解决的问题；请勿填入无法核实的成果。",
      outcomes: ["关键行动待补充", "协作对象待补充", "结果或复盘待补充"],
      tags: ["经历类别待补充", "能力关键词待补充"],
      image: projectPlaceholder01,
      isPlaceholder: true,
    },
    {
      id: "experience-02",
      period: "起止时间待补充",
      organization: "经历单位 02（待补充）",
      role: "职位或角色待补充",
      type: "工作 / 实习 / 项目（待选择）",
      summary: "概述背景、职责范围和所解决的问题；请勿填入无法核实的成果。",
      outcomes: ["关键行动待补充", "协作对象待补充", "结果或复盘待补充"],
      tags: ["经历类别待补充", "能力关键词待补充"],
      image: projectPlaceholder02,
      isPlaceholder: true,
    },
    {
      id: "experience-03",
      period: "起止时间待补充",
      organization: "经历单位 03（待补充）",
      role: "职位或角色待补充",
      type: "工作 / 实习 / 项目（待选择）",
      summary: "概述背景、职责范围和所解决的问题；请勿填入无法核实的成果。",
      outcomes: ["关键行动待补充", "协作对象待补充", "结果或复盘待补充"],
      tags: ["经历类别待补充", "能力关键词待补充"],
      image: projectPlaceholder03,
      isPlaceholder: true,
    },
  ],

  projects: [
    {
      id: "project-01",
      index: "01",
      category: "项目类别 01（待补充）",
      title: "项目名称 01（待补充）",
      period: "项目时间待补充",
      role: "本人角色待补充",
      summary: "项目 01 的一句话摘要待补充。",
      problem: "项目 01 的真实问题、目标用户与约束待补充。",
      process: "项目 01 的调研、判断、方案与协作过程待补充。",
      contribution: "本人贡献与关键决策待补充",
      result: "项目 01 的可核实结果待补充；请勿填写虚构数据。",
      reflection: "项目 01 的复盘与下一步待补充。",
      tags: ["关键词待补充", "关键词待补充"],
      cover: projectPlaceholder01,
      coverAlt: "项目 01 封面待补充；当前为抽象占位图",
      url: null,
      isPlaceholder: true,
    },
    {
      id: "project-02",
      index: "02",
      category: "项目类别 02（待补充）",
      title: "项目名称 02（待补充）",
      period: "项目时间待补充",
      role: "本人角色待补充",
      summary: "项目 02 的一句话摘要待补充。",
      problem: "项目 02 的真实问题、目标用户与约束待补充。",
      process: "项目 02 的调研、判断、方案与协作过程待补充。",
      contribution: "本人贡献与关键决策待补充",
      result: "项目 02 的可核实结果待补充；请勿填写虚构数据。",
      reflection: "项目 02 的复盘与下一步待补充。",
      tags: ["关键词待补充", "关键词待补充"],
      cover: projectPlaceholder02,
      coverAlt: "项目 02 封面待补充；当前为抽象占位图",
      url: null,
      isPlaceholder: true,
    },
    {
      id: "project-03",
      index: "03",
      category: "项目类别 03（待补充）",
      title: "项目名称 03（待补充）",
      period: "项目时间待补充",
      role: "本人角色待补充",
      summary: "项目 03 的一句话摘要待补充。",
      problem: "项目 03 的真实问题、目标用户与约束待补充。",
      process: "项目 03 的调研、判断、方案与协作过程待补充。",
      contribution: "本人贡献与关键决策待补充",
      result: "项目 03 的可核实结果待补充；请勿填写虚构数据。",
      reflection: "项目 03 的复盘与下一步待补充。",
      tags: ["关键词待补充", "关键词待补充"],
      cover: projectPlaceholder03,
      coverAlt: "项目 03 封面待补充；当前为抽象占位图",
      url: null,
      isPlaceholder: true,
    },
    {
      id: "project-04",
      index: "04",
      category: "项目类别 04（待补充）",
      title: "项目名称 04（待补充）",
      period: "项目时间待补充",
      role: "本人角色待补充",
      summary: "项目 04 的一句话摘要待补充。",
      problem: "项目 04 的真实问题、目标用户与约束待补充。",
      process: "项目 04 的调研、判断、方案与协作过程待补充。",
      contribution: "本人贡献与关键决策待补充",
      result: "项目 04 的可核实结果待补充；请勿填写虚构数据。",
      reflection: "项目 04 的复盘与下一步待补充。",
      tags: ["关键词待补充", "关键词待补充"],
      cover: projectPlaceholder04,
      coverAlt: "项目 04 封面待补充；当前为抽象占位图",
      url: null,
      isPlaceholder: true,
    },
  ],

  skills: [
    {
      id: "skill-01",
      category: "技能类别待补充",
      title: "技能名称 01 待补充",
      scene: "技能 01 的适用场景待补充",
      tools: ["相关工具待补充"],
      relatedProject: "相关项目待补充",
      accent: "#7659d8",
      evidence: "用于证明这项技能的项目或成果待补充",
      isPlaceholder: true,
    },
    {
      id: "skill-02",
      category: "技能类别待补充",
      title: "技能名称 02 待补充",
      scene: "技能 02 的适用场景待补充",
      tools: ["相关工具待补充"],
      relatedProject: "相关项目待补充",
      accent: "#73dcc0",
      evidence: "用于证明这项技能的项目或成果待补充",
      isPlaceholder: true,
    },
    {
      id: "skill-03",
      category: "技能类别待补充",
      title: "技能名称 03 待补充",
      scene: "技能 03 的适用场景待补充",
      tools: ["相关工具待补充"],
      relatedProject: "相关项目待补充",
      accent: "#e3a045",
      evidence: "用于证明这项技能的项目或成果待补充",
      isPlaceholder: true,
    },
    {
      id: "skill-04",
      category: "技能类别待补充",
      title: "技能名称 04 待补充",
      scene: "技能 04 的适用场景待补充",
      tools: ["相关工具待补充"],
      relatedProject: "相关项目待补充",
      accent: "#d884ad",
      evidence: "用于证明这项技能的项目或成果待补充",
      isPlaceholder: true,
    },
    {
      id: "skill-05",
      category: "技能类别待补充",
      title: "技能名称 05 待补充",
      scene: "技能 05 的适用场景待补充",
      tools: ["相关工具待补充"],
      relatedProject: "相关项目待补充",
      accent: "#67aeb8",
      evidence: "用于证明这项技能的项目或成果待补充",
      isPlaceholder: true,
    },
  ],

  education: [
    {
      id: "education-01",
      period: "2026.09-至今",
      school: "浙江大学",
      program: "硕士",
      degree: "动力工程",
      summary: "教育经历 01 的课程、研究或校园经历待补充。",
      image: educationPlaceholder01,
      imageAlt: "教育经历 01 图片占位图",
      isPlaceholder: true,
    },
    {
      id: "education-02",
      period: "2022.09-2026.06",
      school: "学校名称 02（待补充）",
      program: "电气工程及其自动化",
      degree: "本科",
      summary: "教育经历 02 的课程、研究或校园经历待补充。",
      image: educationPlaceholder02,
      imageAlt: "教育经历 02 图片占位图",
      isPlaceholder: true,
    },
  ],

  contact: {
    email: "22660769@zju.edu.cn",
    emailLabel: "写邮件给我",
    contactValue: "15171926998",
    resumeUrl: null,
    note: "并说明所在地、远程协作偏好与可联系时间。",
    socials: [
      { label: "社交主页待补充", value: "账号待补充", url: null },
      { label: "代码或作品平台待补充", value: "账号待补充", url: null },
    ],
    updatedAt: "资料更新日期待补充",
    isPlaceholder: true,
  },
};

export const portfolioData = profile;
export default profile;
