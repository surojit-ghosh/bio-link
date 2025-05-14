import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/data/global";

const Header = () => {
    return (
        <div className="flex relative flex-col items-center text-center space-y-4">
            <div className="absolute right-0">
                <ModeToggle />
            </div>
            <Avatar className="h-24 w-24 border-2 border-primary">
                <AvatarImage src={siteConfig.logo} alt="Profile" />
                <AvatarFallback>
                    {siteConfig.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()}
                </AvatarFallback>
            </Avatar>
            <div className="space-y-2">
                <h1 className="text-2xl font-bold text-foreground">
                    {siteConfig.name}
                </h1>
                <p className="text-sm text-muted-foreground max-w-lg">
                    {siteConfig.bio}
                </p>
            </div>
        </div>
    );
};

export default Header;
