import Image from 'next/image'
import AboutImg from '/../public/heroImg.png'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center' id='#about'>
      <div className='max-w-[80%] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 text-center md:text-left'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-2 text-3xl font-bold'>Who I Am</h2>
          <p className='py-2 text-md text-gray-600'>some dummy text here</p>
          <p className='py-2 text-md text-gray-600'>An enthusiastic Information Technology professional with 3+ years of experience and data analyst with a Bachelors degree in IT. My experience includes configuring and implementing IT initiatives to produce measurable business value, providing technical support, analyzing existing systems and databases, collaborating closely with fintech departments, network management, configuration, and monitoring, data collection, cleaning, and analysis, IT asset management and network documentation, VOIP management, monitoring, and configuration.</p>
          <p className='py-2 text-gray-600'>I am skilled in hardware and software troubleshooting, network infrastructure support, data communications, Microsoft Office, data visualization, computer programming, information security, data exploration, and data cleaning. I have certifications in Cyber Security, Network Security, Business Intelligence, Responsive Web Design, Python, Networking Foundations, and IT and Cloud Fundamentals. I am a team player with excellent organizational skills, always eager to learn new things and keep up-to-date with the latest trends.</p>
          <p className='py-2 text-gray-600 underline cursor-pointer mb-10'>Check out some on my Projects</p>
        </div>
        <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:sca'>
          <Image width={450} height={100} src={AboutImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About