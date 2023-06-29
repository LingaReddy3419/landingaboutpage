import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import React from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent } from '@mui/lab';
import './LandingPage.scss'
import img from "./image.png"
import frame from './Frame.svg'
import partner from './partner.svg'
import tech from './tech.svg'
import graph from './graph.svg'
import dashboard from './dashboard.svg'
import work from './work.svg'

const LandingPage = () => {
  const pages = ['Product','Pricing','Our customers','Resources'];
  const mainColor = "#1d4e89"
  return (
    <> 
      <AppBar position='static' style={{backgroundColor:mainColor}}>
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
              <Button variant='contained' style={{backgroundColor:"#ffffff",color:mainColor}} disableElevation>Book a Demo</Button>
            </Box> 
          </Toolbar>
        </Container>
      </AppBar>
      <Box style={{backgroundColor:mainColor}} height={"80%"} display={'flex'}  alignItems={'center'} flexDirection={'column'}>
        <Container sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <Box display={'flex'} flexDirection={"column"} marginTop={"-70px"} alignItems={"center"} justifyContent={'center'} sx={{padding:{xs:'5rem 0',md:'10rem 0'}}}>
            <Typography fontSize={"3rem"} fontWeight={'bolder'} style={{color:"#ffffff"}} width={'90%'}  textAlign={'center'}>
              Transform Your Business with  Recruitment app and Recruitment Software.
            </Typography>
            <Box  marginTop={"3rem"}>
              <Typography variant='body1' style={{color:"#ffffff"}}>Find and hire the right person for every job.</Typography>
            </Box>
            <Box gap={2} display={'flex'}  marginTop={"2.7rem"}>
              <Button variant='outlined' size='medium' color='inherit' style={{color:"#ffffff"}}>Get a demo</Button>
              <Button variant='contained' size='medium' style={{backgroundColor:"#ffffff",color:mainColor}} disableElevation>Start a free trial</Button>
            </Box> 
          </Box>
        </Container>
      </Box>


      <Box id='second'>
        <Container>
          <Box display={'flex'} height={'auto'} sx={{padding:{xs:'2rem 0',sm:'2rem 0',md:'3rem 0',lg:'5rem 0'}}} justifyContent={'center'}>
              <Typography variant='body1' fontSize={"2.5rem"} textAlign={'center'} sx={{width:{md:'85%',lg:'70%'}}} fontWeight={"500"} >Why Recruiting and Staffing Firms Trust Wisestep</Typography>
          </Box>
          <Box  sx={{justifyContent:{sm:'center',md:'space-between'},display:{sm:'block',md:"flex"}}}>
            <Box sx={{marginTop:{md:'0',lg:'2rem'}}}>
            <Timeline >
              <TimelineItem>
                <TimelineSeparator>
                  <Typography marginY={'0.4rem'} width={'25px'} borderRadius={'60%'} textAlign={'center'} sx={{background:'#D9D9D9'}}>1</Typography>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body1" sx={{ width: '100%'}} padding={'0px'}>
                    Advanced Features at an Unbeatable price
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                <Typography marginY={'0.4rem'} width={'25px'} borderRadius={'60%'} textAlign={'center'} sx={{background:'#D9D9D9'}}>2</Typography>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body1" sx={{ width: '100%' }}>
                    Fast to Setup. Easy to Use
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                <Typography marginY={'0.4rem'} width={'25px'} borderRadius={'60%'} textAlign={'center'} sx={{background:'#D9D9D9'}}>3</Typography>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body1" sx={{ width: '100%' }}>
                    Accelerates your Business growth
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <Typography marginY={'0.4rem'} width={'25px'} borderRadius={'60%'} textAlign={'center'} sx={{background:'#D9D9D9'}}>4</Typography>
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body1" sx={{ width: '100%' }}>
                    Friendly and Responsive Support
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            </Box>

            <Box sx={{width:'50%',display:{xs:'none',sm:'none',md:'flex'},paddingTop:"30px"}}>
                <img src={dashboard} alt="" height={'50%'}/>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{marginTop:{md:'1rem',lg:'-6rem'}}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill={mainColor} fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,208C640,181,800,107,960,80C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </Box>

      <Box sx={{background:mainColor,padding:{xs:'5rem 2rem',sm:'5rem 2rem',md:'5rem 2rem',lg:'5rem 15rem'}}} marginTop={'-0.8rem'} display={'flex'} justifyContent={'center'}>
        <Box>
          <Container>
            <Typography variant='body1' fontSize={"2.5rem"} textAlign={'center'} width={'100%'} fontWeight={"500"} color={'#ffffff'}>
            Empowering Relationships and Advancing the Staffing Industry with Cutting-Edge Technology
            </Typography>
          </Container>

          <Box marginTop={'5rem'} color={'#ffffff'}>
            <Timeline position="alternate">
              <TimelineItem>
                <Box marginY={'2rem'} sx={{width:{md:'60%',lg:'50%'}}} gap={'2rem'} display={'flex'}>
                  <img src={tech} alt="tech" />
                  <Box>
                    <Typography variant='h6'>Cutting-Edge Technology</Typography>
                    <Typography sx={{opacity:0.7}}>Our job is to make sure you’re miles ahead, not steps. Better tech means your team is freed up to do what they do best, build relationships.</Typography>
                  </Box>
                </Box>
              </TimelineItem>

              <TimelineItem>
                <Box marginY={'2rem'} sx={{width:{md:'60%',lg:'50%'}}} gap={'2rem'} display={'flex'}>
                  <img src={partner} alt="partner" />
                <Box>
                  <Typography variant='h6'>Partner First, Supplier Second</Typography>
                  <Typography sx={{opacity:0.7}}>With over 400 staff focused on support, customer success, and strategic
                    consulting, we’re dedicated to helping you get the most out of Bullhorn
                    and put the world to work.
                  </Typography>
                </Box>
                </Box>
              </TimelineItem>

              <TimelineItem>
                <Box marginY={'2rem'} sx={{width:{md:'60%',lg:'60%'}}} gap={'2rem'} display={'flex'}>
                  <img src={frame} alt="frame" />
                  <Box>
                    <Typography variant='h6'>Deep Staffing Expertise</Typography>
                    <Typography sx={{opacity:0.7}} >The recruitment community is a tight-knit one. We’ve been serving the
                        staffing market for over 20 years and we strive to bring customers,
                        Marketplace partners, and association partners together as often as
                        possible. Join the Bullhorn Community to tap into the expertise of
                        thousands and help us all move the industry forward.
                    </Typography>
                  </Box>
                </Box>              
              </TimelineItem>

            </Timeline>
          </Box>

        </Box>
      </Box>

      <Box  sx={{padding:{xs:'4rem 0',lg:'10rem 0 5rem 0'},gap:{xs:"5rem"}}} width={'100%'} display={'flex'} flexDirection={'column'} gap={15} >
          <Box sx={{padding:{xs:'0 2rem',lg:'0 2rem'}}} display='flex' flexDirection={'row'} justifyContent={'center'} gap={5} alignItems={'center'}>
              <Box sx={{width:'30%',display:{xs:'none',sm:'none',md:'none',lg:'flex'}}}>
                <img src={dashboard} alt="" width={'100%'} />
              </Box>
              <Box display={'flex'} flexDirection={'column'} sx={{width:{md:'80%',lg:'40%'}}}>
                <Typography fontSize={'2rem'} fontWeight={400}>Everything you need in one place</Typography>
                <p>Let’s face it – the recruiting lifecycle is complex. Modern
                    day staffing firms need to make sure they can source,
                    search, interview, place, onboard, bill, pay, repeat – and all
                    out of one system, one source of truth. In today’s world,
                    that system of record needs to be in the cloud, secured,
                    and accessible wherever you are – in an office, at home, or
                    on the move. Bullhorn is that homebase for your team.
                    Not only does it help you manage your entire recruitment
                    process end-to-end, but it also acts as a central hub for the
                    rest of your stack.</p>
              </Box>
          </Box>

          <Box sx={{padding:{xs:'0 2rem',lg:'0 2rem'}}} display='flex' flexDirection={'row'} justifyContent={'center'} gap={8} alignItems={'center'}>
              <Box display={'flex'} flexDirection={'column'} sx={{width:{md:'80%',lg:'40%'}}}>
                <Typography fontSize={'2.5rem'} fontWeight={400} lineHeight={1}>Customize reports to meet your organization’s needs</Typography>
                <p>Build custom dashboards and reports to see how your recruitment process can be optimized and improved.</p>
              </Box>
              <Box sx={{width:'30%',display:{xs:'none',sm:'none',md:'none',lg:'flex'}}}>
                <img src={graph} alt="" width={'60%'}/>
              </Box>
          </Box>
      </Box>

      <Box sx={{paddingY:{xs:'2rem',lg:'5rem'}}}>
        <Container>
          <Box sx={{background:mainColor}} paddingY={'5rem'} borderRadius={3} color={"white"} display={'flex'} gap={5}>
              <img src={work} alt="" width={'40%'}/>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} sx={{padding:{xs:'0 0.2rem 0 0',lg:'0 6rem 0 0'}}} gap={3}>
                <Typography fontSize={'1.8rem'} fontWeight={400} lineHeight={1.2}>Get Matched The Most 
                  Valuable Jobs, Just Drop
                  Your CV at Staffing Solutions
                </Typography>
                <Typography>
                  In the subject line of email, write your name, the description of the position you want to apply
                </Typography>

              </Box>
          </Box>
        </Container>
      </Box>

      <Box paddingTop={3}>
        <Container>
          <Box borderTop={1} paddingTop={5} paddingBottom={2} color={"#585858"} display={'flex'} flexDirection={'column'}>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Typography color={mainColor} variant='subtitle1' fontWeight={800}>WEBUI</Typography>
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

export default LandingPage
