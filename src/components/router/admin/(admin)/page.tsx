import React from 'react';
import EditNavLinks from './edit-nav-links';
import EditGitHub from './edit-github';
import EditCity from './edit-city';
import EditTechStack from './edit-tech-stack';
import EditSocials from './edit-socials';

export default function AdminPage() {
    return (
        <div>
            <div>
                <h1>Nickname</h1>
                <EditNavLinks />
            </div>

            <div>
                <h1>GitHub</h1>
                <EditGitHub />
            </div>

            <div>
                <h1>City</h1>
                <EditCity />
            </div>

            <div>
                <h1>TechStack</h1>
                <EditTechStack />
            </div>

            <div>
                <h1>NavLinks</h1>
                <EditNavLinks />
            </div>

            <div>
                <h1>Socials</h1>
                <EditSocials />
            </div>
        </div>
    );
}
