import { Box } from "@mui/material";
import "./linkItem.css"

type LinkItemProps = {
    color: string;
    to?: string;
    title:string
}

export const LinkItem: React.FC<LinkItemProps> = ({ color,title }) => {
    return (
        <Box
            width="120px"
            height="120px"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            style={{ backgroundColor: color,fontWeight:600,fontFamily:"sans-serif" }}
            className="linkItem"
            justifyContent="center"
            > {title}</Box>
    )
}