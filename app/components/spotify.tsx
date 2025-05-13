import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Music } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Spotify = () => {
    return (
        <Card>
            <CardContent className="space-y-4 ">
                <h2 className="text-lg font-semibold">My Playlists</h2>
                <div className="grid grid-cols-1 gap-2">
                    <Link
                        href="https://open.spotify.com/playlist/example1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Card className="p-4 flex flex-row items-center gap-4 hover:bg-accent dark:hover:bg-input/50 transition-colors">
                            <Image
                                src="/Spotify_Primary_Logo_RGB_Green.png"
                                alt="Spotify Logo"
                                height={50}
                                width={50}
                            />
                            <div className="">
                                <h3 className="text-sm text-foreground">
                                    My Coding Playlist
                                </h3>
                                <h4 className="text-xs text-muted-foreground">
                                    My go-to tracks for productive coding
                                    sessions
                                </h4>
                            </div>
                        </Card>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default Spotify;
