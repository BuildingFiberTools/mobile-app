import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Card, CardHeader, ListItem} from "@material-tailwind/react";

export function SortableItem(props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <Card className="w-[125px] h-[125px] overflow-hidden" ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none h-full"
            >
                { props?.id }
            </CardHeader>
        </Card>
    );
}
