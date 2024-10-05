import * as React from 'react';
import { ny } from '../../../lib/utils';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Icons } from '../../ui/icons';
import { Label } from '@radix-ui/react-label';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../../ui/tooltip';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type AuthProps = React.HTMLAttributes<HTMLDivElement>;

export function UserAuthForm({ className, ...props }: AuthProps) {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = React.useState(false);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(async () => {
            await axios
                .post('/api/cats/auth/login', {
                    email: email,
                    password: password,
                })
                .then((res) => {
                    localStorage.setItem('token', res.data.data);
                })
                .then(() => {
                    navigate('/admin');
                });

            setIsLoading(false);
        }, 3000);
    }

    return (
        <div className={ny('grid gap-6', className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="nickname@supercool.ru"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            id="password"
                            placeholder="supercoolpassword"
                            type="password"
                            autoCapitalize="none"
                            autoCorrect="off"
                            disabled={isLoading}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign In
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" type="button">
                            {isLoading ? (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Icons.gitHub
                                    className="mr-2 h-4 w-4"
                                    color="foreground"
                                />
                            )}{' '}
                            GitHub
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Login through GitHub is not available for now :(</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}
