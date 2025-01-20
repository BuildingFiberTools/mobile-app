import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography, Button,
} from "@material-tailwind/react";
import {Link} from "react-router-dom";

export function EmergencyTab() {
    return (
        <Card className="w-full h-full overflow-scroll">
            <List className={"mb-10"}>
                <ListItem className="p-0">
                    <Link to="/building/123" className="w-full flex p-2">
                        <ListItemPrefix>
                            <Avatar variant="circular" alt="candice" src="/building.png" />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                05.0.13.000 # 05.0.13.014
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                SIP:
                            </Typography>
                        </div>
                    </Link>
                </ListItem>
                <ListItem className="p-0">
                    <Link to="/building/123" className="w-full flex p-2">
                        <ListItemPrefix>
                            <Avatar variant="circular" alt="candice" src="/building.png" />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                05.0.13.000 # 05.0.13.014
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                SIP:
                            </Typography>
                        </div>
                    </Link>
                </ListItem>
                <ListItem className="p-0">
                    <Link to="/building/123" className="w-full flex p-2">
                        <ListItemPrefix>
                            <Avatar variant="circular" alt="candice" src="/building.png" />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                05.0.13.000 # 05.0.13.014
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                SIP:
                            </Typography>
                        </div>
                    </Link>
                </ListItem>
                <ListItem className="p-0">
                    <Link to="/building/123" className="w-full flex p-2">
                        <ListItemPrefix>
                            <Avatar variant="circular" alt="candice" src="/building.png" />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                05.0.13.000 # 05.0.13.014
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                SIP:
                            </Typography>
                        </div>
                    </Link>
                </ListItem>
                <ListItem className="p-0">
                    <Link to="/building/123" className="w-full flex p-2">
                        <ListItemPrefix>
                            <Avatar variant="circular" alt="candice" src="/building.png" />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                05.0.13.000 # 05.0.13.014
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                SIP:
                            </Typography>
                        </div>
                    </Link>
                </ListItem>
            </List>
        </Card>
    );
}
