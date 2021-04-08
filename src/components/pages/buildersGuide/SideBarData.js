import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [
    
    {
        title: 'Overview',
        path: '/buildersGuide',
    },
    {
        title: 'Suggested Builds',
        path: '/suggestedBuilds',
    },
    {
        title: 'Part Selection',
        path: null,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'CPU',
                path: '/cpu_buildersGuide',
            },
            {
                title: 'CPU Cooler',
                path: '/cpuCooler_buildersGuide',
            },
            {
                title: 'Motherboard',
                path: '/motherboard_buildersGuide',
            },
            {
                title: 'Memory',
                path: '/memory_buildersGuide',
            },
            {
                title: 'Storage',
                path: '/storage_buildersGuide',
            },
            {
                title: 'Video Card',
                path: '/videoCard_buildersGuide',
            },
            {
                title: 'Case',
                path: '/case_buildersGuide',
            },
            {
                title: 'Power Supply',
                path: '/powerSupply_buildersGuide',
            },
            {
                title: 'Operating System',
                path: '/operatingSystem_buildersGuide',
            },
            {
                title: 'Optical Drive',
                path: '/opticalDrive_buildersGuide',
            },
        ]
        
    }
]
