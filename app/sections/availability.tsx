import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/global";
import { FileText, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Availability = () => {
    return (
        <Card>
            <CardContent className="space-y-3">
                <div className="flex justify-between w-full content-between flex-row items-center">
                    <Badge
                        variant="default"
                        className="bg-green-200 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full"
                    >
                        <span className="w-2 h-2 mr-1 rounded-full bg-green-500 animate-pulse"></span>
                        Available
                    </Badge>

                    <div className="flex gap-3 self-end sm:self-auto">
                        <Button
                            asChild
                            variant="outline"
                            className="h-8 px-2 rounded-lg"
                        >
                            <Link
                                href={siteConfig.resume_url}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="flex items-center gap-1"
                            >
                                <FileText className="h-3.5 w-3.5" />
                                <span className="text-xs">Resume</span>
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="h-8 px-2 rounded-lg"
                        >
                            <Link
                                href={"mailto:" + siteConfig.email}
                                className="flex items-center gap-1"
                            >
                                <Mail className="h-3.5 w-3.5" />
                                <span className="text-xs">Contact</span>
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="border-t pt-3 border-muted-foreground/25">
                    <p className="text-foreground">
                        {siteConfig.availability_message}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default Availability;
