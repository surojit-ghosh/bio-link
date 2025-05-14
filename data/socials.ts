import { Code, Github, Globe, Instagram, Linkedin, Twitter, type LucideIcon } from "lucide-react";

export type ISocial = {
    platform: string;
    url: string;
    icon: LucideIcon;
};

export type Ilink = {
    platform: string;
    url: string;
    icon: LucideIcon | string;
}

export const socials: ISocial[] = [
    { platform: "GitHub", url: "https://github.com/surojit-ghosh", icon: Github },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/ghoshsurojit/", icon: Linkedin },
    { platform: "Twitter", url: "https://x.com/surojitghosh_", icon: Twitter },
    { platform: "Instagram", url: "https://instagram.com/surojit_in", icon: Instagram }
];

export const links: Ilink[] = [
    { platform: "Leetcode", url: "https://leetcode.com/u/surojitghosh/", icon: Code },
    { platform: "Portfolio", url: "https://surojit.in", icon: Globe }
];