"use client"
import { Card, Typography, Avatar, Box, Stack, Slider, IconButton, Button } from "@mui/material"
import Image from "next/image"
// import { useState } from "react";

interface IButtons {
    src: string,
    alt: string,
    borderRadius?: string,
    label?: number | string
}

const mainIcons: IButtons[] = [
    { src: "/images/pause.png", alt: "pause" },
    { src: "/images/nextVideo.png", alt: "next video" },
    { src: "/images/volume.png", alt: "volume" },
]

const additionalIcons: IButtons[] = [
    { src: "/images/subtitles.png", alt: "subtitles" },
    { src: "/images/settings.png", alt: "settings" },
    { src: "/images/smallWindow.png", alt: "small window" },
    { src: "/images/theater.png", alt: "theater" },
    { src: "/images/device.png", alt: "device" },
    { src: "/images/fullScreen.png", alt: "full screen" },
]

const buttons: IButtons[] = [
    { src: "/images/like.png", alt: "like", borderRadius: "15px 0 0 15px", label: 899 },
    { src: "/images/dislike.png", alt: "dislike", label: 0 },
    { src: "/images/bell.png", alt: "bell", label: "Share" },
    { src: "/images/more.png", alt: "more", borderRadius: "0 15px 15px 0" },
]

export default function Video() {
    // const duration = 200;
    // const [position, setPosition] = useState(32);
    // const [paused, setPaused] = useState(false);
    // function formatDuration(value: number) {
    //     const minute = Math.floor(value / 60);
    //     const secondLeft = value - minute * 60;
    //     return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    // }

    return (
        <Stack sx={{ margin: "75px 0 0 0", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "start" }}>
            <Stack sx={{ width: "fit-content" }}>
                <Box sx={{ width: "fit-content", position: "relative" }}>
                    <Image src="/images/videoCover1.jpg" alt="video cover" width={1200} height={600} />
                    <Box sx={{ position: "absolute", top: "87%", width: "1200px" }}>
                        <Slider
                            aria-label="time-indicator"
                            sx={{
                                "& .MuiSlider-thumb": { backgroundColor: "purple" },
                                "& .MuiSlider-track": { backgroundColor: "purple", borderColor: "transparent" },
                                "& .MuiSlider-rail": { backgroundColor: "#ddd" },
                            }}
                            size="medium"
                            valueLabelDisplay="auto"
                            value={30}
                            min={0}
                            max={100}
                        />
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "full" }}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px" }}>
                                {mainIcons.map((el) => <IconButton key={el.alt}><Image src={el.src} alt={el.alt} width={30} height={30} /></IconButton>)}
                                <Typography sx={{ color: "gray", fontSize: "16px", fontWeight: "900" }}>19:39 / 30:50</Typography>
                            </Box>
                            <Box>{additionalIcons.map((el) => <IconButton key={el.alt}><Image src={el.src} alt={el.alt} width={30} height={30} /></IconButton>)}</Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: "1200px", borderLeft: "2px solid hsla(238, 100%, 70%, .1)", borderRight: "2px solid hsla(238, 100%, 70%, .1)", padding: "0 20px" }}>
                    <Box sx={{ padding: "15px 0 30px 0", borderBottom: "2px solid hsla(238, 100%, 70%, .3)" }}>
                        <Typography sx={{ fontSize: "30px", fontWeight: "900", color: "white" }}>How to use AI Generator</Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0 0 0" }}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
                                <Avatar src="/images/authorAvatar1.png" alt="avatar" sx={{ width: "52px", height: "52px" }} />
                                <Box>
                                    <Typography sx={{ fontSize: "14px", color: "gray", fontWeight: "600" }}>MIDJOURNEYART</Typography>
                                    <Typography sx={{ fontSize: "17px", color: "gray", fontWeight: "700" }}>197k subscribers</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Button variant="outlined" sx={{ padding: "7px 20px", borderRadius: "15px 0 0 15px", border: "2px solid hsla(238, 100%, 70%, 1)", color: "gray", fontWeight: "600" }}>Join</Button>
                                <Button variant="outlined" sx={{ padding: "7px 20px", borderRadius: "0 15px 15px 0", border: "2px solid hsla(238, 100%, 70%, 1)", color: "white", background: "hsla(238, 100%, 70%, 1)", gap: "10px", fontWeight: "600" }}>
                                    <Image src="/images/showMore.png" alt="bell" width={20} height={20} />
                                    Subscribed
                                    <Image src="/images/bell.png" alt="bell" width={20} height={20} />
                                </Button>
                            </Box>
                            <Box>
                                {buttons.map((el) => (
                                    <Button
                                        sx={{
                                            color: "gray",
                                            fontWeight: "700",
                                            gap: "4px",
                                            padding: "7px 20px",
                                            border: "2px solid hsla(238, 100%, 70%, 1)",
                                            borderRadius: `${el.borderRadius}`
                                        }}
                                        key={el.alt}
                                    >
                                        <Image src={el.src} alt={el.alt} width={25} height={25} />{el.label}</Button>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ padding: "15px 0 20px 0" }}>
                        <Typography sx={{ color: "gray", fontWeight: "600" }}>14k views - 1 month ago</Typography>
                        <Typography sx={{ color: "gray", fontWeight: "600", margin: "3px 0 0 0" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores voluptatum, tempora dolores dignissimos recusandae nihil quaerat numquam illo eligendi? Rem voluptate ipsum ab deserunt libero ducimus recusandae ea suscipit quaerat.</Typography>
                        <Typography sx={{ color: "white", fontWeight: "600" }}>Show more</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                        <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "800" }}>869 coments</Typography>
                        <Button sx={{ color: "white", gap: "10px", fontSize: "15px" }}><Image src="/images/sort.png" alt="sort" width={20} height={20} /> Sort by</Button>
                    </Box>
                </Box>
            </Stack>
            <Stack>
                <Card
                    sx={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "start",
                        gap: "20px",
                        width: "600px",
                        background: "linear-gradient(to right, #704bde, #1e1d35) border-box",
                        border: "2px solid transparent",
                        borderRadius: "25px",
                        //TODO fix border gradient
                        // mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                        // maskComposite: "exclude",
                        "&::before": {
                            padding: "10px",
                            position: "absolute",
                        }
                    }}>
                    <Box sx={{ position: "relative" }}>
                        <Image src="/images/videoCover1.jpg" width={200} height={200} alt="video cover" />
                        <Box sx={{ position: "absolute", bottom: "8px", right: "8px", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "2px 6px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" }}>04:40</Box>
                    </Box>
                    <Box sx={{ padding: "10px" }}>
                        <Typography sx={{ fontSize: "18px", color: "white", fontWeight: "800" }}>Design</Typography>
                        <Typography sx={{ fontSize: "15px", color: "gray", fontWeight: "700", margin: "10px 0 0 0" }}>CHANNEL NAME</Typography>
                        <Typography sx={{ fontSize: "15px", color: "gray", fontWeight: "700" }}>14k views - 1 month ago</Typography>
                    </Box>
                </Card>
            </Stack>
        </Stack>
    )
}