import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material"
import main from "./assets/main.jpeg"
import Header from "./Header"
import { LinkItem } from "./LinkItem"

const links = [
  { color: "#EEA302", to: "/link",title:"Haqqımda" },
  { color: "#FF3B25", to: "/link",title:"Çəkilişlərim"  },
  { color: "#80D8DA", to: "/link",title:"Əlaqə" }
]

const App = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Box>
      <Header />

      <Box >
        <Container maxWidth="lg" style={{ display: "flex", gap:isMobile ? "20px" : "0px", flexDirection:isMobile ? "column-reverse" : "row", alignItems:"center", marginTop: "50px", flex: "2", padding: "0 100px 100px 100px " }}>
          <Box style={{ flex: "1" }}>
            <img style={{ width: "350px", height: "350px", borderRadius: "50%", objectFit: "cover" }} src={main} alt="main" />
          </Box>
          <Box style={{ display: "flex", flex: "1", flexDirection: "column" }}>
            <Typography fontSize="80px" fontWeight={600} letterSpacing="-0.02em">Salam</Typography>
            <Box>
              <Typography fontSize="22px" fontWeight={600} letterSpacing="-0.02em">Biraz Haqqımda</Typography>
              <Box width="350px">
                <Typography fontSize="16px" letterSpacing="-0.02em">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</Typography>
              </Box>
              <Box display="flex" gap="5px" mt={2}>
                {links.map((link) => <Box><LinkItem color={link.color} title={link.title} /></Box>)}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

    </Box>
  )
}

export default App