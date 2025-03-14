interface IData {
    cover: string,
    title: string,
    time: string,
    author: string,
    views: number,
    date: number,
    avatar: string
}

export const data: IData[] = [
    {
        cover: "/images/videoCover1.jpg",
        title: "Design and Prototype an App with Play - Full 3-hour Course",
        time: "4:30",
        author: "DESIGNCODE",
        views: Math.floor(Math.random() * 1100000),
        date: Math.floor(Math.random() * 12),
        avatar: "/images/authorAvatar1.png"
    },
    {
        cover: "/images/videoCover2.jpg",
        title: "Create 3D Site with Spline and React - Full Course",
        time: "12:30",
        author: "DESIGNCODE",
        views: Math.floor(Math.random() * 1100000),
        date: Math.floor(Math.random() * 12),
        avatar: "/images/authorAvatar2.png"
    },
    {
        cover: "/images/videoCover3.jpg",
        title: "How to Use AI Art Generator on Midjourney",
        time: "16:20",
        author: "DESIGNCODE",
        views: Math.floor(Math.random() * 1100000),
        date: Math.floor(Math.random() * 12),
        avatar: "/images/authorAvatar3.png"
    },
    {
        cover: "/images/videoCover4.jpg",
        title: "Desktop App UI Design in Figma - Full Course",
        time: "40:36",
        author: "DESIGNCODE",
        views: Math.floor(Math.random() * 1100000),
        date: Math.floor(Math.random() * 12),
        avatar: "/images/authorAvatar4.png"
    },
    {
        cover: "/images/videoCover5.jpg",
        title: "Design and Prototype an App with Play - Full 2-hour Course",
        time: "5:50",
        author: "DESIGNCODE",
        views: Math.floor(Math.random() * 1100000),
        date: Math.floor(Math.random() * 12),
        avatar: "/images/authorAvatar5.png"
    },
    {
        cover: "/images/videoCover6.jpg",
        title: "Build a 3D Site Without Code with Framer - Crash Course",
        time: "54:30",
        author: "DESIGNCODE",
        views: Math.floor(Math.random() * 1100000),
        date: Math.floor(Math.random() * 12),
        avatar: "/images/authorAvatar6.png"
    },
]