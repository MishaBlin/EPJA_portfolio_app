import React from 'react';
import { Button } from '../../ui/button';

export default function Root() {
    return (
        <div>
            <h1 className="text-blue-500">
                Hello world для проекта - portfolio_app
            </h1>

            <Button className="rounded" onClick={() => console.log('asdfas')}>
                А это кнопка
            </Button>
        </div>
    );
}
