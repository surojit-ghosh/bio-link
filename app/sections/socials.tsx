import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { socials, ISocial, links, Ilink } from "@/data/socials";
import Link from "next/link";

const SocialsSection = () => {
    return (
        <Card>
            <CardContent className="space-y-4">
                <div className="flex justify-center gap-3">
                    {socials.map((social: ISocial, index: number) => (
                        <TooltipProvider key={index}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full h-10 w-10"
                                    >
                                        <Link
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <social.icon className="h-5 w-5" />
                                            <span className="sr-only">
                                                {social.platform}
                                            </span>
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                    <p>{social.platform}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {links.map((link: Ilink, index: number) => (
                        <Button
                            key={index}
                            asChild
                            variant="outline"
                            className="justify-start h-auto py-3"
                        >
                            <Link
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <link.icon className="mr-2 h-5 w-5" />
                                <span>{link.platform}</span>
                            </Link>
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default SocialsSection;
