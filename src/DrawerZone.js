import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip, Accordion, AccordionHeader, AccordionBody,
} from "@material-tailwind/react";
import {ChevronDownIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import {
    Cog6ToothIcon,
    InboxIcon, PowerIcon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon
} from "@heroicons/react/24/solid";

export function DrawerZone({open, setOpen}) {

    const [step, setStep] = React.useState(1);

    const changeStep = (value) => {
        setStep(open === value ? 0 : value);
    };
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <React.Fragment>
            <Drawer className={"h-full flex flex-col"} open={open} onClose={closeDrawer}>
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography variant="h5" color="blue-gray">
                        Building Plaque
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>

                <List className="h-full overflow-y-scroll">
                    <Accordion
                        open={step === 1}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${step === 1 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={step === 1}>
                            <AccordionHeader onClick={() => changeStep(1)} className="border-b-0 p-3">
                                <Typography color="blue-gray" className="mr-auto font-normal">
                                    Ain Atig
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem>
                                    <ListItemPrefix  children={null}/>
                                    Menzeh Nasr E1
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix  children={null}/>
                                    Hamd B1
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>


                    <Accordion
                        open={step === 2}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${step === 2 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={step === 2}>
                            <AccordionHeader onClick={() => changeStep(2)} className="border-b-0 p-3">
                                <Typography color="blue-gray" className="mr-auto font-normal">
                                    Temara
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem>
                                    <ListItemPrefix  children={null}/>
                                    Oulad Mtaa B1
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix  children={null}/>
                                    Oulad Mtaa C1
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix  children={null}/>
                                    Oulad Mtaa D1
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>



                    <Accordion
                        open={step === 3}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${step === 3 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={step === 3}>
                            <AccordionHeader onClick={() => changeStep(3)} className="border-b-0 p-3">
                                <Typography color="blue-gray" className="mr-auto font-normal">
                                    Casa
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem>
                                    <ListItemPrefix  children={null}/>
                                    Moulay Rchid E1
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix  children={null}/>
                                    Moulay Rchid H1
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix  children={null}/>
                                    Ain Diab Periph E3
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix  children={null}/>
                                    Arrahma B1
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix  children={null}/>
                                    Arrahma C1
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                </List>
            </Drawer>
        </React.Fragment>
    );
}
