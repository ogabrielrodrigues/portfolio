import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "@/types/link";
import { ComponentProps } from "react";

type SocialLinkProps = ComponentProps<'a'> & {
  link: Link
}

export function SocialLink({ link }: SocialLinkProps) {
  return <Tooltip>
    <TooltipTrigger asChild>
      <a
        href={link.url}
        rel="noreferrer"
        target="_blank"
        className="cursor-pointer rounded-full p-3 transition-colors hover:bg-indigo-950/60"
      >
        <span className="sr-only">{link.reference}</span>
        <link.icon className="h-6 w-6 text-indigo-50 transition-transform 4xl:h-8 4xl:w-8" />
      </a>
    </TooltipTrigger>
    <TooltipContent className="bg-indigo-950/60" side="bottom">
      <p className="text-indigo-50">{link.content}</p>
    </TooltipContent>
  </Tooltip>
}