import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import {Box, Button, Image, Container,Text} from '@chakra-ui/react'
import Styles from "./Home.module.css"
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <Navbar/>
            <Container maxW="100%">
            <div className={Styles.main}>
                    <div>
                        <img src="https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg" alt="image" />
                    </div>
                    <div>
                        <h1>Eat smarter.</h1>
                        <h1>Live better.</h1>
                        <p>Track your calories, exercise, biometrics and health data.</p>
                        <Link to="./signup"><Button _hover="none">Sign up-It's Free!</Button></Link>
                        <p>Already have an account?<Link to="/login" fontWeight="500">Log in</Link></p>
                    </div>
                    
                </div>

                <Box fontSize="24px" fontWeight="500" mt="20px">As Seen On</Box>

                <div className={Styles.thrImg}>
                    <div>
                        <img src="https://cdn1.cronometer.com/2021/landing/media-mention-2.svg"/>
                    </div>
                    <div>
                        <img src="https://cdn1.cronometer.com/2021/landing/media-mention-1.svg"/>
                    </div>
                    <div>
                        <img src="https://cdn1.cronometer.com/2021/landing/media-mention-3.svg"/>
                    </div>

                </div>

                    <Box fontSize="25px" mt="35px" mb="27px" >Available on Web, iOS and Android</Box>

                    <div className={Styles.socialImg}>
                        <div>
                            <img src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"/>
                        </div>
                        <div>
                            <img src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"/>
                        </div>  
                    </div>

                    <div className={Styles.Discover}>
                        <h1>Discover your nutrition</h1>
                        <h5>Cronometer encourages you to not just count your calories but to focus on your nutrition as a whole.</h5>
                        <div className={Styles.nutritionData}>
                            <div >
                                <img src="https://cdn1.cronometer.com/2021/landing/community-icon.svg" alt="img" />
                                <h2>Over 5 million users</h2>
                                <p>Join the community to get tips and inspiration from other users on our forums and Facebook group.</p>
                            </div>
                            <div>
                                <img src="https://cdn1.cronometer.com/2021/landing/nutrition-icon.svg" alt="img" />
                                <h2>Accurate nutrition data</h2>
                                <p>Be confident that the food you log has the correct nutrition data. We verify every food submission for accuracy.</p>
                            </div>
                            <div>
                                <img src="https://cdn1.cronometer.com/2021/landing/security-icon.svg" alt="img" />
                                <h2>Data privacy & security</h2>
                                <p>We take the security of our users' accounts seriously - we will never sell your account data to third parties.</p>
                            </div>
                        </div>
                    </div>

                    <div className={Styles.Develop}>
                        <h1>Develop healthy habits</h1>
                        <p>Count your calories, ensure you're meeting nutrient targets, and see your progress over time.</p>
                    </div>

                    <div className={Styles.Track}>
                        <div>
                            <img src="https://cdn1.cronometer.com/2021/landing/micronutrients-icon.svg" alt="" />
                            <h1>Track up to 82 micronutrients</h1>
                            <h5>Log your meals and track all your macro and micronutrients.</h5>
                        </div>
                        <div>
                            <img src="https://cdn1.cronometer.com/2021/landing/diary-icon.svg" alt="" />
                            <h1>Log meals, exercise and biometrics</h1>
                            <h5>Plus, you can create custom foods, recipes, exercises and biometrics!</h5>
                        </div>
                        <div>
                            <img src="https://cdn1.cronometer.com/2021/landing/reports-icon.svg" alt="" />
                            <h1>Valuable reports and charts</h1>
                            <h5>Learn how nutrients and biometrics correlate over time.</h5>
                        </div>
                        <div>
                            <img src="https://cdn1.cronometer.com/2021/landing/scale-icon.svg" alt="" />
                            <h1>Custom diet settings</h1>
                            <h5>Set weight, macro & nutrient targets to meet your goals.</h5>
                        </div>
                        <div>
                            <img src="https://cdn1.cronometer.com/2021/landing/fasting-icon.svg" alt="" />
                            <h1>Fasting timer</h1>
                            <h5>Track your intermittent fasts and see their effect over time.</h5>
                        </div>
                        <div>
                            <img src="https://cdn1.cronometer.com/2021/landing/food-icon.svg" alt="" />
                            <h1>Diet support</h1>
                            <h5>Whether you’re Keto, Vegan, or on one recommended by your doctor.</h5>
                        </div>
                    </div>

                <div className={Styles.find}>
                    <h1>Find out if you're getting the vitamins and minerals you need with our food diary app.</h1>
                    <Button _hover="none" color="#fff" bg="#ff763f" p="2% 6%" boxShadow="0 2px 10px 0 rgb(0 0 0 / 15%)" fontSize="1.25em" borderRadius="5px" >Sign Up-It's Free!</Button>
                </div>

                <div className={Styles.sync} >
                    <h1>Sync with Apps and Devices</h1>
                    <p>Sync Cronometer with these activity trackers, Apple Health, Google Fit and Samsung Health.</p>
                </div>

                <div className={Styles.nineImg}>
                    <div>
                        <img src="https://cdn1.cronometer.com/2021/landing/devices-p-1080.png" alt="" />
                    </div>
                </div>

                <Box w="85%" m="auto" mt="70px" mb="50px" borderTop="1px solid #b6b6b6">
            </Box>

                <div className={Styles.reviewTxt}>
                    <h1>Cronometer Reviews</h1>
                    <p>Check us out in your app store.</p>
                </div>

                <Box w="90%" m="auto" bw="1px" borderRadius="8px" borderColor="#ebebeb" bg="#fff" display="flex" p="40px" textAlign="left" mt="50px" gap="20"boxShadow="0 3px 8px 0 rgb(0 0 0 / 10%)">
                    <Box className={Styles.bgImg} ml="50px" w="450px" color="#ff763f" mt="40px" fontSize="1.76em" fontWeight="600" lineHeight="line-height: 1.5em">
                        I wasn't the only one concerned about the unreliability of the macros in both MyFitnessPal and Carb Manager.
                        <Image w="160px" ml="70px" mt="20px" src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"/>
                    </Box>
                    <Box  w="450px" >
                        <Box color="#404040" fontSize="1.125em" lineHeight="1.5em">
                            I started Keto in July. MyFitnessPal seemed pretty cool. Spent hours setting it up and entering recipes only to discover the macros were not reliable due to all the contributions by the community. I was so frustrated. Then I found a review of several apps (on the Keto Mojo website) and discovered I wasn't the only one concerned about unreliability of the macros on both MFP and CarbManager (tried that too). Behold Cronometer! I love this app. It draws from nutrition databases with minimal community contributions so much, much more reliability. There are many more free features. The user interface is easy to navigate. I'm very happy with Cronometer.
                        </Box>
                        <Box mt="4%" color="#5c5c5c" fontSize="1em" fontWeight="600" >
                            <Text>iOS Review</Text>
                            <Text>September 23, 2019</Text>
                        </Box> 
                    </Box>
                </Box>

                <Box w="90%" m="auto" bw="1px" borderRadius="8px" borderColor="#ebebeb" bg="#fff" display="flex" p="40px" textAlign="left" mt="50px" gap="20"boxShadow="0 3px 8px 0 rgb(0 0 0 / 10%)">
                    <Box  w="480px" >
                        <Box color="#404040" fontSize="1.125em" lineHeight="1.5em">
                        This app is my dream! I've been on the hunt for something that can track my daily nutritional needs and the majority of apps seem to think that only means macros. This tracks EVERYTHING! Getting my daily vitamins through food is so important to me and this has taken a HUGE load off of my plate. I bought gold within minutes. This is set up great, easy to use, links with my FitBit. I could go on and on.
                        </Box>
                        <Box mt="4%" color="#5c5c5c" fontSize="1em" fontWeight="600" >
                            <Text>Android Review</Text>
                            <Text>November 23, 2020</Text>
                        </Box> 
                    </Box>
                    <Box className={Styles.bgImg} ml="50px" w="430px" color="#ff763f" mt="40px" fontSize="1.76em" fontWeight="600" lineHeight="line-height: 1.5em">
                    Cronometer tracks EVERYTHING! ... It's easy to use and links with my FitBit.
                        <Image w="160px" ml="70px" mt="20px" src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"/>
                    </Box>
                </Box>

                <div className={Styles.learn}>
                    <div>
                        <Image ml="80px" w="350px" src="https://cdn1.cronometer.com/2021/landing/crono-pro-graphic.svg"/>
                    </div>
                    <div>
                        <Image w="200px" src="https://cdn1.cronometer.com/2021/landing/cronometer-pro-logo.svg"  />
                        <h1>Are you a healthcare professional?</h1>
                        <p>Check out our software designed for nutritionists, dietitians, research teams, schools, and hospitals.</p>
                        <Button color="#ff763f" p="5% 9%" border="1px solid #35934b" bg="#fff" boxShadow="1px 1px 10px 0 rgb(0 0 0 / 15%)">Learn About Pro</Button>
                    </div>
                </div>

                <div className={Styles.canadian} >
                    <h1>We are Canadian</h1>
                    <p>Independently owned and operated by people who care about their users' nutrition.</p>
                </div>

                <Image w="70%" m="auto" mt="60px" src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-2-p-1080.jpeg"/>

                <div className={Styles.headquarters} >
                    <p>Our headquarters are based in the idyllic mountain town of Revelstoke, BC, Canada. We are a team of over 25 professionals brought together by a love of nutrition, skiing, biking and the great outdoors.</p>
                    <Button color="#ff763f" mt="50px" p="2% 6%" bg="#fff" boxShadow="1px 1px 10px 0 rgb(0 0 0 / 15%)" border="1px solid #ff763f" >About Us</Button>
                </div>

                <Box w="85%" m="auto" mt="70px" mb="50px" borderTop="1px solid #b6b6b6">
            </Box>

                <div className={Styles.help} >
                    <p>
                    Help us spread the good word about nutrition and become an affiliate.
                    </p>

                    <Button mt="50px" mb="40px" color="#ff763f" p="2% 6%" bg="#fff" boxShadow="1px 1px 10px 0 rgb(0 0 0 / 15%)" border="1px solid #ff763f">Become an Affiliate</Button>
                </div>

            </Container>
            
            <Footer/>
        </div>
    )

}

export default Home;