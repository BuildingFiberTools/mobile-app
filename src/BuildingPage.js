// src/App.js
import React from 'react';

import {
    IconButton,
    Button,
    CardHeader,
    Card, Badge
} from "@material-tailwind/react";
import {FaArrowLeft, FaBolt, FaCameraRetro} from "react-icons/fa";
import {Link} from "react-router-dom";
import {PictureDialog} from "./PictureDialog";
import {MaterialDialog} from "./MaterialDialog";
import * as LightEmergency from "./light-emergency.svg"
import {FaHouseCircleCheck} from "react-icons/fa6";


const BuildingPage = () => {

    const [open, setOpen] = React.useState(false);
    const [openMaterial, setOpenMaterial] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const handleMaterialOpen = () => setOpenMaterial((cur) => !cur);

    return (
        <>
            <PictureDialog open={open} setOpen={setOpen}/>
            <MaterialDialog open={openMaterial} setOpen={setOpenMaterial}/>
            <div className="flex flex-col w-full h-full">

                <header className="bg-white text-black p-4 border-b shadow">
                    <div className="container mx-auto flex items-center justify-between">
                        <div className="flex items-center">

                            <Link to="/">
                                <IconButton>
                                    <FaArrowLeft/>
                                </IconButton>
                            </Link>
                            <h1 className="text-2xl ml-3 font-bold">TECHNICAL BUILDING FILE</h1>
                        </div>
                        <div className="flex justify-between w-[125px]">
                            <IconButton color="red">
                                <svg className="w-full text-white" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 448 512">
                                    <path fill="#FFFFFF"  d="M384 192c0-88.35-71.68-160-160-160S64 103.6 64 192v160h320V192zM224 112C179.8 112 144 147.9 144 192c0 8.832-7.039 16-16 16S112 200.8 112 192c0-61.76 50.24-112 112-112c8.961 0 16 7.168 16 16S232.1 112 224 112zM416 384H32c-17.6 0-32 14.34-32 32v32c0 17.66 14.4 32 32 32h384c17.6 0 32-14.34 32-32v-32C448 398.3 433.6 384 416 384z"/>
                                </svg>
                            </IconButton>
                            <IconButton color="green">
                                <FaHouseCircleCheck size={20}/>
                            </IconButton>
                        </div>
                    </div>
                </header>
                <div className="w-full h-full gap-4 flex flex-wrap justify-center overflow-scroll p-4">
                    <Badge placement="top-start" color="amber" content="SINGAL">
                        <Card onClick={handleOpen} className="w-[100px] h-[100px] overflow-hidden">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="m-0 rounded-none h-full"
                            >
                                <img className="h-full"
                                     src="/signal.jpg"
                                     alt="ui/ux review check"
                                />
                            </CardHeader>

                        </Card>
                    </Badge>
                    <Badge placement="top-start" color="amber" content="PBI/S">
                        <Card  onClick={handleOpen} className="w-[100px] h-[100px] overflow-hidden">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="m-0 rounded-none h-full"
                            >
                                <img className="h-full"
                                     src="/pbi.jpg"
                                     alt="ui/ux review check"
                                />
                            </CardHeader>
                        </Card>
                    </Badge>
                    <Badge placement="top-start" color="amber" content="VIDE">
                        <Card  onClick={handleOpen} className="w-[100px] h-[100px] overflow-hidden">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="m-0 rounded-none h-full"
                            >
                                <img className="h-full"
                                     src="/port.jpg"
                                     alt="ui/ux review check"
                                />
                            </CardHeader>
                        </Card>
                    </Badge>
                    <Badge placement="top-start" color="amber" content="PBO/R">
                        <Card  onClick={handleOpen} className="w-[100px] h-[100px] overflow-hidden">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="m-0 rounded-none h-full"
                            >
                                <img className="h-full"
                                     src="/pbo.jpg"
                                     alt="ui/ux review check"
                                />
                            </CardHeader>

                        </Card>
                    </Badge>
                    <Badge placement="top-start" color="amber" content="PORT">
                        <Card  onClick={handleOpen} className="w-[100px] h-[100px] overflow-hidden">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="m-0 rounded-none h-full"
                            >
                                <img className="h-full"
                                     src="/pbo2.jpg"
                                     alt="ui/ux review check"
                                />
                            </CardHeader>
                        </Card>
                    </Badge>
                    <Badge placement="top-start" color="amber" content="PBO/1">
                        <Card  onClick={handleOpen} className="w-[100px] h-[100px] overflow-hidden">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="m-0 rounded-none h-full"
                            >
                                <img className="h-full"
                                     src="/pbo3.jpg"
                                     alt="ui/ux review check"
                                />
                            </CardHeader>
                        </Card>
                    </Badge>


                    <Badge placement="top-start" color="amber" content="PBO/R">
                        <Card  onClick={handleOpen} className="w-[100px] h-[100px] overflow-hidden">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="m-0 rounded-none h-full"
                            >
                                <img className="h-full"
                                     src="/pbo.jpg"
                                     alt="ui/ux review check"
                                />
                            </CardHeader>

                        </Card>
                    </Badge>
                    <Badge placement="top-start" color="amber" content="PORT">
                        <Card  onClick={handleOpen} className="w-[100px] h-[100px] overflow-hidden">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="m-0 rounded-none h-full"
                            >
                                <img className="h-full"
                                     src="/pbo2.jpg"
                                     alt="ui/ux review check"
                                />
                            </CardHeader>
                        </Card>
                    </Badge>
                    <Badge placement="top-start" color="amber" content="PBO/1">
                        <Card  onClick={handleOpen} className="w-[100px] h-[100px] overflow-hidden">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="m-0 rounded-none h-full"
                            >
                                <img className="h-full"
                                     src="/pbo3.jpg"
                                     alt="ui/ux review check"
                                />
                            </CardHeader>
                        </Card>
                    </Badge>
                </div>

                <div className="w-full h-1/3 p-4  border-y justify-between">
                    <div className="flex gap-5 justify-between">
                        <div className="text-left w-full">
                            <p>
                                SPL:
                            </p>
                            <p>
                                12H:
                            </p>
                            <p>
                                12V:
                            </p>
                            <p>
                                24V:
                            </p>
                            <p>
                                48V:
                            </p>
                        </div>
                        <div className="text-left w-full">
                            <p>
                                PBI:
                            </p>
                            <p>
                                PBO:
                            </p>
                            <p>
                                PBO:
                            </p>
                            <p>
                                PBO:
                            </p>

                        </div>
                    </div>
                </div>
                <div className="flex gap-3 p-4 justify-between">
                    <Button className="flex items-center gap-3 w-full">
                        <FaCameraRetro size={24}/>
                        <span className="inline-block text-center w-full">
                    Pictures
                </span>
                    </Button>
                    <Button onClick={handleMaterialOpen} className="flex items-center gap-3 w-full">
                        <FaBolt size={24}/>
                        <span className="inline-block text-center w-full">
                    Materials
                </span>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default BuildingPage;
