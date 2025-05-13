import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube, type LucideIcon } from "lucide-react";

export type Social = {
    platform: string;
    url: string;
    icon: LucideIcon;
};

export const socials: Social[] = [
    { platform: "GitHub", url: "https://github.com", icon: Github },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
    { platform: "Twitter", url: "https://twitter.com", icon: Twitter },
    { platform: "Instagram", url: "https://instagram.com", icon: Instagram },
    { platform: "Facebook", url: "https://facebook.com", icon: Facebook },
    { platform: "YouTube", url: "https://youtube.com", icon: Youtube },
];