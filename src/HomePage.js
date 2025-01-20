// src/App.js
import React from 'react';
import {BuildingTab} from './BuildingTab';
import {EmergencyTab} from './EmergencyTab';
import {NotesTab} from './NotesTab';

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel, IconButton, PopoverHandler, Popover, PopoverContent, Button, Input
} from "@material-tailwind/react";
import {FaBuilding, FaHeart, FaSearch, FaSignOutAlt} from "react-icons/fa";
import {DrawerZone} from "./DrawerZone";


const HomePage = () => {


    const [activeTab, setActiveTab] = React.useState("building");
    const data = [
        {
            label: "Building",
            value: "building",
            desc: (<BuildingTab/>),
        },
        {
            label: "Emergency",
            value: "emergency",
            desc: (<EmergencyTab/>),
        },
        {
            label: "Notes",
            value: "note",
            desc: (<NotesTab/>),
        }
    ];
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);

    return (
        <div className="flex flex-col h-full">

            <DrawerZone open={open} setOpen={setOpen}/>
            <header className="bg-white text-black p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <h1 className="text-4xl font-bold">MAPOF</h1>
                    </div>
                    <div className="flex justify-between w-36">


                        <IconButton onClick={openDrawer}>
                            <FaBuilding/>
                        </IconButton>

                        <Popover  placement="bottom" offset={20}>
                            <PopoverHandler>
                                <IconButton>
                                    <FaSearch/>
                                </IconButton>
                            </PopoverHandler>
                            <PopoverContent className="w-96 z-20">
                                <div className="flex gap-2">
                                    <Input label="Input text"/>
                                    <Button variant="gradient">Search</Button>
                                </div>
                            </PopoverContent>
                        </Popover>



                        <IconButton>
                            <FaSignOutAlt/>
                        </IconButton>
                    </div>
                </div>
            </header>
            <Tabs value={activeTab} className="h-full">
                <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    }}
                >
                    {data.map(({label, value}) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "p-3 text-gray-900" : "p-3 "}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody className={"p-0 h-full"}>
                    {data.map(({value, desc}) => (
                        <TabPanel key={value} value={value} className={"p-0 h-full"}>
                            <div className="w-full h-full relative pb-4">
                                {desc}
                            </div>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
};

export default HomePage;
