import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    IconButton,
    Typography,
    Select, Option, Input,
} from "@material-tailwind/react";

export function MaterialDialog({open, setOpen}) {

    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <Dialog size="xs" open={open} handler={handleOpen}>
                <DialogHeader className="justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Technical material  building
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
                    <div className="mb-3">
                        <Input type="number" size="lg" label="Splitter" />
                    </div>
                    <div className="mb-3">
                        <Select size="lg" label="Splitter Type">
                            <Option>1x2</Option>
                            <Option>1x4</Option>
                            <Option>1x8</Option>
                            <Option>1x16</Option>
                            <Option>1x32</Option>
                        </Select>
                    </div>
                    <div className="mb-3">
                        <Input type="number" size="lg" label="12H" />
                    </div>
                    <div className="flex justify-between gap-2 mb-3">
                        <Input containerProps={{ className: "min-w-[10px]" }} type="number" className="w-full" size="lg" label="12V" />
                        <Input containerProps={{ className: "min-w-[10px]" }} type="number" className="w-full" size="lg" label="24V" />
                        <Input containerProps={{ className: "min-w-[10px]" }} type="number" className="w-full" size="lg" label="48V" />
                    </div>
                </DialogBody>
                <DialogFooter className="justify-between gap-2 border-t border-blue-gray-50">
                    <Button onClick={handleOpen} color="amber" size="sm">
                        Cancel
                    </Button>
                    <Button onClick={handleOpen} size="sm">
                        Update
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
