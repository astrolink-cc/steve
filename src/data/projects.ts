export interface Project {
  name: string
  description: string
  href: string
}

export const projects: Project[] = [
  {
    name: "deepseek-harness",
    description: "A lightweight harness for the DeepSeek API as a base for systems that use it.",
    href: "https://github.com/HologramSteve/deepseek-harness",
  },
  {
    name: "deepseek-harness.js",
    description: "A JavaScript port of the DeepSeek harness.",
    href: "https://github.com/HologramSteve/deepseek-harness.js",
  },
  {
    name: "nyx",
    description: "A system to launch fully autonomous AI agents that live in Discord for different tasks.",
    href: "https://github.com/HologramSteve/nyx",
  },
  {
    name: "wrts-forum-api",
    description: "A wrapper for the studygo.com forum API.",
    href: "https://github.com/HologramSteve/wrts-forum-api",
  },
]
