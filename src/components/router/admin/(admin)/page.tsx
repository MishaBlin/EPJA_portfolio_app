import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Connect from '../../root/(about)/connect';
import Stars from '../../root/(about)/stars';
import Location from '../../root/(about)/location';
import TechStack from '../../root/(about)/tech-stack';
import Nickname from './nickname-card';
import Projects from '../../root/(projects)/projects';

type OutletContextType = {
    nickname: { name: string; colored: string } | null;
    setNickname: React.Dispatch<
        React.SetStateAction<{ name: string; colored: string } | null>
    >;
};

export default function AdminPage() {
    const { setNickname } = useOutletContext<OutletContextType>();

    return (
        <div className="py-10">
            <div id="about">
                <h1 className="text-4xl font-bold mb-4">Admin panel</h1>
                <div className="w-full flex gap-x-4 items-stretch">
                    <div className="w-1/2 flex flex-col gap-y-4">
                        <Connect editButton={true} />
                        <Stars editButton={true} />
                    </div>

                    <div className="w-1/2 flex flex-col gap-y-4">
                        <div className="flex gap-x-4">
                            <Nickname
                                updateHeaderNickname={setNickname}
                                editButton={true}
                            />
                            <Location editButton={true} />
                        </div>
                        <TechStack editButton={true} />
                    </div>
                </div>
            </div>

            <Projects editButton={true} />
        </div>
    );
}
