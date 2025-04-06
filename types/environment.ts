export type Environment = {
  linkedin_url: string
  github_url: string
  curriculum_url: string
}

export const environment: Environment = {
  linkedin_url: process.env.NEXT_PUBLIC_LINKEDIN_URL!,
  github_url: process.env.NEXT_PUBLIC_GITHUB_URL!,
  curriculum_url: process.env.NEXT_PUBLIC_CURRICULUM_URL!
}