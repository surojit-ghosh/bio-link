import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
                            <Card className="grid grid-cols-2 gap-4 p-4 ">
                                <div className="space-y-2">
                                    <Image
                                        src={product.iconSrc}
                                        alt={"Icon"}
                                        width={35}
                                        height={35}
                                        className="rounded-md"
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
                                    className="bg-muted"
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
                        href="https://yourportfolio.com"
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
