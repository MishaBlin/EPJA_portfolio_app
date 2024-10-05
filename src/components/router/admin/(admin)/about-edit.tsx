import React from 'react';

import Connect from '../../root/(about)/connect';
import Stars from '../../root/(about)/stars';
import Location from '../../root/(about)/location';
import TechStack from '../../root/(about)/tech-stack';

import EditCity from './edit-city';
import EditNavLinks from './edit-nav-links';
import EditGitHub from './edit-github';
import EditTechStack from './edit-tech-stack';

export default function AboutEdit() {
    return (
        <div id="about">
            <h1 className="text-4xl font-bold mb-4">Admin panel</h1>
            <div className="w-full flex gap-x-4 items-stretch">
                {/*Левый блок*/}
                <div className="w-1/2 flex flex-col gap-y-4">
                    {/*Связь со мной*/}
                    <Connect editButton={<EditNavLinks />} />

                    {/*Звёзды*/}
                    <Stars editButton={<EditGitHub />} />
                </div>

                {/*Правый блок*/}
                <div className="w-1/2 flex flex-col gap-y-4">
                    <div className="flex gap-x-4">
                        {/*Локация*/}
                        <Location editButton={<EditCity />} />
                    </div>

                    {/*Стек*/}
                    <TechStack editButton={<EditTechStack />} />
                </div>
            </div>
        </div>
    );
}
