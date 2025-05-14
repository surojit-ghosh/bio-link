"use client";

import { useEffect, useState } from "react";
import { Star, GitFork } from "lucide-react";
import Link from "next/link";

const GITHUB_REPO = "surojit-ghosh/link-in-bio";

const Footer: React.FC = () => {
    const [stars, setStars] = useState<number | null>(null);
    const [forks, setForks] = useState<number | null>(null);

    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/repos/${GITHUB_REPO}`
                );
                const data = await response.json();
                setStars(data.stargazers_count);
                setForks(data.forks_count);
            } catch (error) {
                console.error("Failed to fetch GitHub data:", error);
            }
        };

        fetchGitHubStats();
    }, []);

    return (
        <Link
            href={`https://github.com/${GITHUB_REPO}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <footer className="text-center text-sm text-muted-foreground py-6 hover:text-accent-foreground transition-colors duration-300 space-y-3">
                <p>Designed & Built by Surojit Ghosh</p>
                <div className="flex justify-center items-center gap-3">
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>
                            {stars !== null ? stars.toLocaleString() : "—"}
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>
                            {forks !== null ? forks.toLocaleString() : "—"}
                        </span>
                    </div>
                </div>
            </footer>
        </Link>
    );
};

export default Footer;
