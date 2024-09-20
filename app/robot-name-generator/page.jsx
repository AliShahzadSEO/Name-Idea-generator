import RobotNameGenerator from "@/components/robot-name-generator/Robot-Name-Generator"

export const metadata = {
  title: 'Robot Name Generator | Random Robot Name Generator With Meaning | Name Idea Generator ',
  description: "Create futuristic names with our Robot Name Generator! Generate random robot names with meanings that highlight innovation and technology. Find the perfect name idea for your robot character in no time.",
  
  openGraph: {
    title: 'Robot Name Generator | Random Robot Name Generator With Meaning | Name Idea Generator',
    description: "Create futuristic names with our Robot Name Generator! Generate random robot names with meanings that highlight innovation and technology. Find the perfect name idea for your robot character in no time.",
    url: 'https://www.nameideagenerator.com/robot-name-generator',
    images: [
      {
        url: 'robot.jpg',
        width: 800,
        height: 600,
        alt: 'Robot Name Generator | Random Robot Name Generator With Meaning | Name Idea Generator',
        type: 'image/jpg'  // Added twitter:image:type
      },
    ],
    locale: 'en_US',  // Added og:locale
    type: 'website',  // Added og:type
    site_name: 'Name Idea Generator',  // Added og:site_name
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Robot Name Generator | Random Robot Name Generator With Meaning | Name Idea Generator',
    description: "Create futuristic names with our Robot Name Generator! Generate random robot names with meanings that highlight innovation and technology. Find the perfect name idea for your robot character in no time.",
    images: ['robot.jpg'],
    type: 'image/jpg'  // Added twitter:image:type
  },

  keywords: ['robot Name Generator', 'random robot name generator ', 'robot name generator acronym', 'female robot name generator',
     'cool robot name generator', 'evil robot name generator', 'japanese robot name generator', 'sci fi robot name generator', 'robot name generator with numbers'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/robot-name-generator"
  },
}

const page = () => {
    return (
      <div>
      <RobotNameGenerator/>
      </div>
    )
  }
  
  export default page