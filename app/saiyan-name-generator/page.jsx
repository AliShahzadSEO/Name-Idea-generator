import SaiyanNameGenerator from "@/components/saiyan-name-generator/Saiyan-Name-Generator"

export const metadata = {
  title: 'Saiyan Name Generator | Dragon Ball Name Generator With Meaning',
  description: "Channel your inner warrior with our Saiyan Name Generator! Generate DBZ Saiyan names with powerful meanings that embody strength and determination. Find the perfect name idea for your Saiyan character in a flash!",
  
  openGraph: {
    title: 'Saiyan Name Generator | Dragon Ball Name Generator With Meaning',
    description: "Channel your inner warrior with our Saiyan Name Generator! Generate DBZ Saiyan names with powerful meanings that embody strength and determination. Find the perfect name idea for your Saiyan character in a flash!",
    url: 'https://www.nameideagenerator.com/saiyan-name-generator',
    images: [
      {
        url: 'saiyan3.jpg',
        width: 800,
        height: 600,
        alt: 'Saiyan Name Generator | Dragon Ball Name Generator With Meaning',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Saiyan Name Generator | Dragon Ball Name Generator With Meaning',
    description: "Channel your inner warrior with our Saiyan Name Generator! Generate DBZ Saiyan names with powerful meanings that embody strength and determination. Find the perfect name idea for your Saiyan character in a flash!",
    images: ['saiyan3.jpg'],
  },

  keywords: ['Saiyan Name Generator', ' female saiyan name generator', 'male saiyan name generator', 'random saiyan name generator',
     'super saiyan name generator', 'saiyan name generator male', 'dragon ball saiyan name generator', 'dbz saiyan name generator', 'saiyan name generator female'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/saiyan-name-generator"
  },
}

const page = () => {
    return (
      <div>
      <SaiyanNameGenerator />
      </div>
    )
  }
  
  export default page