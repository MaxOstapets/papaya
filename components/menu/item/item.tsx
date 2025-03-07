import { ListItem, ListItemButton, ListItemText, Divider } from "@mui/material"

interface IItem {
    src: string,
    primary: string
}

export const Item: React.FC<IItem> = ({ src, primary }) => {
    return (
        <ListItem disablePadding>
            <ListItemButton sx={{ color: "hsla(240, 33%, 94%, 0.6)", gap: "20px" }}>
                <img src={src} alt="icon" />
                <ListItemText primary={primary} />
            </ListItemButton>
            <Divider />
        </ListItem>
    )
}