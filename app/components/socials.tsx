import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { socials, Social } from "@/data/socials";
import Link from "next/link";

const SocialsSection = () => {
    return (
        <Card>
            <CardContent className="space-y-4">
                <h2 className="text-lg font-semibold">Connect With Me</h2>
                <div className="grid grid-cols-2 gap-3">
                    {socials.map((social: Social) => (
                        <Button
                            key={social.platform}
                            asChild
                            variant="outline"
                            className="justify-start h-auto py-3"
                        >
                            <Link
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <social.icon className="mr-2 h-5 w-5" />
                                <span>{social.platform}</span>
                            </Link>
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default SocialsSection;
