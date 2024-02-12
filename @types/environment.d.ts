declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_LINKEDIN_URL: string
      NEXT_PUBLIC_GITHUB_URL: string
      NEXT_PUBLIC_CURRICULUM_URL: string
    }
  }
}

export {}
