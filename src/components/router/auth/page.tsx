import { Link } from 'react-router-dom';
import React from 'react';
import { UserAuthForm } from './auth-form';
import { me } from '../../../lib/data';

export default function Auth() {
    return (
        <div className="container relative h-full flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <Link to="/" className="font-bold text-2xl">
                        {me.default}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
                            {me.colored}
                        </span>
                    </Link>
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;Где бы ты ни был, кем бы ты не стал, помни,
                            где ты был и кем ты стал.&rdquo;
                        </p>
                        <footer className="text-sm">Giancarlo Succi</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Login
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your login and password below
                        </p>
                    </div>
                    <UserAuthForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree that you are from team
                        &quot;Cats&quot; on EPJA Course at Innopolis University
                    </p>
                </div>
            </div>
        </div>
    );
}
