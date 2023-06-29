import React from 'react'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import abstract from './abstract.svg';
import appimg from './app.png'
// import { FitScreen } from '@mui/icons-material';

const AboutPage = () => {
  const pages = ['Product','Pricing','Our customers','Resources'];
  const mainColor = "#1999E3"
  const secondaryColor = '#101010';
  return (
    <>
        <AppBar position='static' style={{background: secondaryColor}}>
        <Container>
          <Toolbar sx={{padding:'1rem 0',display:'flex',justifyContent:{md:'center',sm:'center',xs:'center'}}}>
            <AutoAwesomeIcon/>
            <Typography variant="h6" paddingLeft={2}>
              WEBUI
            </Typography>
            {pages.map((page)=>(
              <Typography textAlign={"center"} variant='body1' paddingLeft={4} sx={{display:{xs:'none',sm:"flex"}}}>{page}</Typography>
            ))}
            <Box flexGrow={1}  gap={2} sx={{display:{xs:'none',lg:'flex'},justifyContent:'flex-end'}}>
              <Button variant='text' style={{color: '#ffffff'}}>Login</Button>
              <Button variant='text' color='inherit' style={{color:"#ffffff"}}>SignUp</Button>
              <Button variant='contained' style={{backgroundColor:"#ffffff",color:secondaryColor}} disableElevation>Book a Demo</Button>
            </Box> 
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{backgroundColor:secondaryColor}} height={"80%"} color={'white'} paddingTop={10} paddingBottom={12} display={'flex'}  alignItems={'center'} flexDirection={'column'}>
        <Container sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center"}}>
                <Typography color={'#cfd8dc'} fontWeight={500} fontSize={'1.9rem'}>About Us</Typography>
                <Typography fontSize={'3.1rem'} fontWeight={900}>We empower great teams to grow together.</Typography>
                <Box gap={2} display={'flex'}  marginTop={"2.7rem"}>
                    <Button variant='outlined' size='medium' color='inherit' style={{color:"#ffffff"}}>Get a demo</Button>
                    <Button variant='contained' size='medium' style={{backgroundColor:"#ffffff",color:secondaryColor}} disableElevation>Start a free trial</Button>
                </Box> 
            </Box>
            <Box sx={{display:{xs:'none',sm:'none',md:'none',lg:'flex'}}}>
                <img src={abstract} alt="" />
            </Box>
        </Container>
      </Box>
      <Box backgroundColor={secondaryColor} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eeeeee" fill-opacity="1" d="M0,0L120,21.3C240,43,480,85,720,85.3C960,85,1200,43,1320,21.3L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>      
      </Box>
     

      <Box>
        <Box display={'flex'} color={secondaryColor} backgroundColor={'#EEEEEE'} justifyContent={'space-evenly'} height={"80%"} mt={-1} width={'FitScreen'} sx={{paddingBottom:'12rem',marginTop:{sm:'-1rem',lg:'-8rem'},flexDirection:{sm:'row-reverse',lg:'row'},justifyContent:{sm:'center',lg:'space-evenly'},flexWrap:'wrap-reverse',gap:{sm:'3rem',lg:'0'}}}>
          <Box >
            <img src={appimg} width={'500rem'} />
          </Box>
          <Box sx={{width:{xs:'80%',lg:'40%'}}} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={2}>
              <Typography fontSize={25} fontWeight={600}>Easy-to-use Recruitment Software</Typography>
              <Typography>No steep learning curves or bloated interfaces. Manatal platform is simple yet powerful; accessible and relevant to all recruiters.</Typography>
              <Typography>Customizable pipeline: Customize your recruitment pipeline based on your process with a slick drag-and-drop interface.</Typography>
              <Typography>Kanban board: Get an overview of your recruitment progresses in one single-board view.</Typography>
          </Box>
        </Box>
      </Box>

      <Box backgroundColor={secondaryColor} color={'white'} mt={-1} display={'flex'} height={'80%'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx={{paddingY:'8rem'}}>
            <Typography sx={{width:{xs:'80%',lg:'40%'}}} textAlign={'center'}>Recruitee is built for bringing teams together. That’s why we design
              tools that allow you to structure and customize your recruitment into a
              collaborative process. More than 5,000 companies use our collaborative
              hiring software to share the work, speed up daily processes, and grow
              their teams together.</Typography>
              <Box display={'flex'} alignItems={'center'} sx={{gap:{xs:1,sm:5,md:8,lg:12},padding:{xs:4,lg:0}}} margin={'8rem 0 '}> 
                <Box display={'flex'} flexDirection={'column'}>
                  <Typography sx={{fontSize:{xs:'1.5rem',lg:'2.5rem'}}} fontWeight={'500'}>5,000+</Typography>
                  <Typography fontSize={'1rem'}>Companies in 90+ countries</Typography>
                </Box>
                <Box borderLeft={1} height={'4rem'}></Box>
                <Box display={'flex'} flexDirection={'column'}>
                  <Typography sx={{fontSize:{xs:'1.5rem',lg:'2.5rem'}}} fontWeight={'500'}>181,000+</Typography>
                  <Typography fontSize={'1rem'}>Users</Typography>
                </Box>
                <Box borderLeft={1} height={'4rem'}></Box>
                <Box display={'flex'} flexDirection={'column'}>
                  <Typography sx={{fontSize:{xs:'1.5rem',lg:'2.5rem'}}} fontWeight={'500'}>200+</Typography>
                  <Typography fontSize={'1rem'}>Employees</Typography>
                </Box>
                <Box borderLeft={1} height={'4rem'}></Box>
                <Box display={'flex'} flexDirection={'column'}>
                  <Typography sx={{fontSize:{xs:'1.5rem',lg:'2.5rem'}}} fontWeight={'500'}>4</Typography>
                  <Typography fontSize={'1rem'}>Location on 2 continents</Typography>
                </Box>
              </Box>
              <Button variant='contained' style={{backgroundColor:mainColor,borderRadius:'50px'}} >Find out why our customers choose us</Button>
      </Box>
      <Box>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={secondaryColor} fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,80C672,85,768,107,864,101.3C960,96,1056,64,1152,85.3C1248,107,1344,181,1392,218.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </Box>

      <Box display={'felx'} justifyContent={'center'} flexDirection={'column'} height={'80%'} padding={'0rem 6rem 10rem 6rem'} sx={{mt:{xs:'0',lg:'-6rem'}}}>
              <Box display={'flex'} justifyContent={'center'}>
                <Typography fontSize={'2.3rem'} fontWeight={400}>Our Vision</Typography>
              </Box>
              <Box display={'flex'} sx={{flexDirection:{xs:'column',lg:'row'}}} gap={5} mt={'3rem'}>
                <Typography>At Ceipal, our goal is to guide organizations on their paths to finding, engaging, and coordinating talent using an unprecedented perspective. Ceipal is a unique company in a field of sameness. We intentionally created a technology that breaks the traditional and outdated rules of our industry to unify disparate sources and processes and deliver better results to everyone in the talent field.</Typography>
                <Typography>Each business has its own specific requirements, and its talent technology should reflect that, which is why Ceipal works to customize our solutions to fit your needs. We want to change the way people see the talent landscape and the tools that support it, dramatically improving recruitment efficiency, and offering a human touch along with automation and data insights.</Typography>
              </Box>
      </Box>

      <Box sx={{backgroundColor:secondaryColor}}>
        <Container>
          <Box borderTop={1} paddingTop={5} paddingBottom={2} color={"#dddddd"} display={'flex'} flexDirection={'column'}>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Typography color={'mainColor'} variant='subtitle1' fontWeight={800}>WEBUI</Typography>
                <Typography variant='body1' fontWeight={500}>About</Typography>
                <Typography variant='body1' fontWeight={500}>Contact Us</Typography>
                <Typography variant='body1' fontWeight={500}>Terms</Typography>
                <Typography variant='body1' fontWeight={500}>Privacy Policy</Typography>
            </Box>
                <Typography display={"flex"} alignSelf={'center'} mt={4}>&#169; 2023 Copyright. <span style={{color:mainColor}}>WEBUI</span></Typography>
          </Box>
        </Container>
      </Box>

    </>
  )
}

export default AboutPage
