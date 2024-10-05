import { Card, CardContent } from '../../../ui/card';
import React from 'react';

export default function Available() {
    return (
        <Card className="w-1/2 rounded-md">
            <CardContent className="text-muted-foreground pt-6 h-full flex flex-col gap-y-2 justify-center items-center">
                <div className="flex justify-center">
                    <span className="relative flex h-4 w-4">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-4 w-4 rounded-full bg-green-400"></span>
                    </span>
                </div>
                <h3 className="text-xl font-semibold leading-none tracking-tight text-center">
                    Available for work!
                </h3>
            </CardContent>
        </Card>
    );
}
