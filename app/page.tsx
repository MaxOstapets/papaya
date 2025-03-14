import { Card, Typography, Avatar, Stack, CardContent, Box } from "@mui/material";
import Image from "next/image";
import { data } from "./data"
export default function Home() {
  return (
    <Stack sx={{ margin: "120px auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", width: "1160px", gap: "30px" }}>
      {data.map((el) => (
        <Card key={el.title} sx={{ width: "376px", borderRadius: "16px", border: "1px solid hsla(234, 32%, 25%, 1)", backgroundColor: "hsla(242, 30%, 25%, 1)", cursor: "pointer" }}>
          <CardContent sx={{ padding: "0" }}>
            <Stack position="relative">
              <Image src={el.cover} alt="video cover" width={376} height={208} />
              <Box sx={{ position: "absolute", bottom: "8px", right: "8px", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "2px 6px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" }}>{el.time}</Box>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ padding: "16px 12px 0 12px" }}>
              <Avatar src={el.avatar} alt="avatar" />
              <Stack>
                <Typography sx={{ color: "white", fontWeight: "bold", padding: "0 0 10px 0" }}>{el.title}</Typography>
                <Typography sx={{ color: "gray", fontSize: "14px" }}>{el.author}</Typography>
                {el.views > 1000000 ? <Typography sx={{ color: "gray", fontSize: "14px" }}>{el.views}m views - {el.date} month ago</Typography> : <Typography sx={{ color: "gray", fontSize: "14px" }}>{el.views}k views - {el.date} month ago</Typography>}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
