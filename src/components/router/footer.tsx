import { Link } from 'react-router-dom';
import React from 'react';
import { Separator } from '../ui/separator';
import { me } from '../../lib/data';

export default function Footer() {
    return (
        <footer className="mt-6">
            <Separator className="text-gray-400" />
            <div className="py-4 flex justify-between items-center">
                <Link to="/">{me.default + me.colored}</Link>
            </div>
        </footer>
    );
}
