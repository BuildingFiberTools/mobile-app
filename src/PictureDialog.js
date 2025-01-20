import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    IconButton,
    Typography,
    MenuItem, Select, Option,
} from "@material-tailwind/react";

export function PictureDialog({open, setOpen}) {

    const handleOpen = () => setOpen((cur) => !cur);
    const [value, setValue] = React.useState("0");

    return (
        <>
            <Dialog size="xs" open={open} handler={handleOpen}>
                <DialogHeader className="justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Image technical information
                    </Typography>
                    <IconButton
                        color="blue-gray"
                        size="sm"
                        variant="text"
                        onClick={handleOpen}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </DialogHeader>
                <DialogBody className="pr-2">
                    <div className="mb-6">
                        <Select size="lg" label="Verticality">
                            <Option>PORT</Option>
                            <Option>SIGNAL</Option>
                            <Option>PBI</Option>
                            <Option>PBO</Option>
                        </Select>
                    </div>
                    <div>
                        <Select onChange={(value) => {setValue(value); console.log(value);}} size="lg" label="Synoptic diagram" value={value}>
                            <Option value="-1">Under Soul</Option>
                            <Option value="0">RDC</Option>
                            <Option value="1">1er</Option>
                            <Option value="2">2eme</Option>
                            <Option value="3">3eme</Option>
                            <Option value="4">4eme</Option>
                        </Select>
                    </div>
                </DialogBody>
                <DialogFooter className="justify-between gap-2 border-t border-blue-gray-50">
                    <Button onClick={handleOpen} color="red" size="sm">
                        Delete
                    </Button>
                    <Button onClick={handleOpen} size="sm">
                        Update
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
