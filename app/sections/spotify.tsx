import { Card, CardContent } from "@/components/ui/card";
import { Spotify as SpotifyType, spotify } from "@/data/spotify";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Spotify = () => {
    return (
        <Card>
            <CardContent className="space-y-4 ">
                <h2 className="text-lg font-semibold">My Playlists</h2>
                <div className="grid grid-cols-1 gap-3">
                    {spotify.map((item: SpotifyType, index: number) => (
                        <Link
                            key={index}
                            href={item.url}
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
                                <div className="space-y-2">
                                    <h3 className="text-sm text-foreground">
                                        {item.titile}
                                    </h3>
                                    <h4 className="text-xs text-muted-foreground">
                                        {item.description}
                                    </h4>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default Spotify;
