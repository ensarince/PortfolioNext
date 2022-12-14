import Link from 'next/link'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from "../components/Contact"
import Head from 'next/head'


import { GetStaticProps, GetServerSideProps } from 'next'
import {PageInfo, Experience, Skill, Project, Social} from "../typings"
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo[];
  experiences: Experience[];
  skills: Skill[];
  projects: Project[]
  socials: Social[];
}
const Home = ({ pageInfo, experiences, skills, socials, projects }: Props) => {
  console.log(pageInfo)
  return (
    <div className="bg-yt-gray text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0
      overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cursorColor">
      <Head>
        <title>{(pageInfo as any)?.name} - Portfolio</title> 
      </Head>
      
      <Header socials={socials} />

       <section className="snap-start" id="hero"> 
        <Hero pageInfo={pageInfo}/>
       </section>

       <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
       </section>

       <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}  />
       </section>
 
       <section id='skills' className='snap-center'>
        <Skills skills={skills} />
       </section>

       <section id='projects' className='snap-center'>
        <Projects projects={projects} />
       </section>

       <section id='contact' className='snap-center'>
        <Contact /> 
       </section>

       <Link href="#hero">
          <footer className='sticky bottom-10 sm:bottom-14 w-full cursor-pointer'>
            <div className='flex items-center justify-center'>
              <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src="https://illustoon.com/photo/thum/4519.png" alt="" />
            </div>
          </footer>
        </Link>
    </div>
  )
}

export default Home;

export const getServerSideProps : GetServerSideProps<Props> =  async () => {
  const pageInfo: PageInfo[] = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return{
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    //nextjs will attempt to re-validate the page every request and 10 seconds
  }
}
