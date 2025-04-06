import { Link } from '@/types/link'
import { environment } from '@/types/environment'
import { FileCheck, Github, Linkedin, Mouse } from 'lucide-react'

export const links: Link[] = [
  {
    content: 'Acesse meu linkedIn',
    reference: 'Linkedin',
    icon: Linkedin,
    url: environment.linkedin_url
  },
  {
    content: "Acesse meu GitHub",
    reference: 'Github',
    icon: Github,
    url: environment.github_url
  },
  {
    content: "Veja meu curriculum",
    reference: 'Curriculum',
    icon: FileCheck,
    url: environment.curriculum_url
  }
]