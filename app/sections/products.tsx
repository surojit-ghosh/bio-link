import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { siteConfig } from "@/data/global";
import { products, Product } from "@/data/products";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
    return (
        <Card className="">
            <CardContent className="space-y-4 ">
                <h2 className="text-lg font-semibold">
                    Products I&apos;ve Built
                </h2>
                <div className="grid gap-4">
                    {products.map((product: Product, index: number) => (
                        <Link
                            key={index}
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Card className="grid grid-cols-2 max-[400px]:grid-cols-1 gap-4 p-4 hover:bg-accent dark:hover:bg-input/50 transition-colors">
                                <div className="space-y-3 max-[400px]:order-2">
                                    <Image
                                        src={product.iconSrc}
                                        alt={"Icon"}
                                        width={35}
                                        height={35}
                                        className="rounded-md max-[400px]:hidden"
                                    />
                                    <h3 className="text-sm text-foreground">
                                        {product.title}
                                    </h3>
                                    <h4 className="text-xs text-muted-foreground">
                                        {product.domain}
                                    </h4>
                                </div>
                                <AspectRatio
                                    ratio={16 / 9}
                                    className="bg-muted max-[400px]:order-1"
                                >
                                    <Image
                                        src={product.imageSrc}
                                        alt="Thumbnail"
                                        fill
                                        className="h-full w-full rounded-md object-cover"
                                    />
                                </AspectRatio>
                            </Card>
                        </Link>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button asChild variant="outline" className="w-full">
                    <Link
                        href={siteConfig.portfoilio_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View All Projects{" "}
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Products;
