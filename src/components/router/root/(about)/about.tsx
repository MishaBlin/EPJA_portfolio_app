import React from 'react';
import Connect from './connect';
import Stars from './stars';
import Available from './available';
import Location from './location';
import TechStack from './tech-stack';

export default function About() {
    return (
        <div id="about">
            <h1 className="text-4xl font-bold mb-4">About me</h1>
            <div className="w-full flex gap-x-4 items-stretch">
                {/*Левый блок*/}
                <div className="w-1/2 flex flex-col gap-y-4">
                    {/*Связь со мной*/}
                    <Connect />

                    {/*Звёзды*/}
                    <Stars />
                </div>

                {/*Правый блок*/}
                <div className="w-1/2 flex flex-col gap-y-4">
                    <div className="flex gap-x-4">
                        {/*Доступен*/}
                        <Available />

                        {/*Локация*/}
                        <Location />
                    </div>

                    {/*Стек*/}
                    <TechStack />
                </div>
            </div>
        </div>
    );
}
