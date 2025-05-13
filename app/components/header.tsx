import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
    return (
        <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="h-24 w-24 border-2 border-primary">
                <AvatarImage src="/logo.jpg" alt="Profile" />
                <AvatarFallback>SG</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
                <h1 className="text-2xl font-bold text-foreground">
                    Surojit Ghosh
                </h1>
                <p className="text-sm text-muted-foreground max-w-lg">
                    CS student passionate about creating intuitive web
                    experiences. Volleyball athlete when away from the keyboard.
                </p>
            </div>
        </div>
    );
};

export default Header;
