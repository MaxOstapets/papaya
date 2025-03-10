import { Card, Typography, Avatar, Stack, CardContent, Box } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Stack sx={{ margin: "120px 0" }}>
      <Card sx={{ width: "376px", borderRadius: "16px", border: "1px solid hsla(234, 32%, 25%, 1)", backgroundColor: "hsla(242, 30%, 16%, 1)", cursor: "pointer" }}>
        <CardContent sx={{ padding: "0" }}>
          <Stack position="relative">
            <Image src={`/images/videoCover.jpg`} alt="video cover" width={376} height={208} />
            <Box sx={{ position: "absolute", bottom: "8px", right: "8px", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "2px 6px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" }}>4:30</Box>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ padding: "16px 12px 0 12px" }}>
            <Avatar src="./images/authorAvatar.png" alt="avatar" />
            <Stack>
              <Typography sx={{ color: "white", fontWeight: "bold", padding: "0 0 10px 0" }}>Design and Prototype an App with Play - Full 3-hour Course</Typography>
              <Typography sx={{ color: "gray", fontSize: "14px" }}>DESIGNCODE</Typography>
              <Typography sx={{ color: "gray", fontSize: "14px" }}>14k views - 1 month ago</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
