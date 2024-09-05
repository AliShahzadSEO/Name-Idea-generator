import SongNameGenerator from "@/components/song-name-generator/Song-Name-Generator"

export const metadata = {
  title: 'Song Name Generator | Random Song Name Generator With Meaning',
  description: "Generate unique and catchy song names with meanings using our Song Name Generator. Ideal for songwriters, musicians, and creative projects looking for inspiration!",
  
  openGraph: {
    title: 'Song Name Generator | Random Song Name Generator With Meaning',
    description: "Generate unique and catchy song names with meanings using our Song Name Generator. Ideal for songwriters, musicians, and creative projects looking for inspiration!",
    url: 'https://www.nameideagenerator.com/song-name-generator',
    images: [
      {
        url: 'pop.jpg',
        width: 800,
        height: 600,
        alt: 'Song Name Generator | Random Song Name Generator With Meaning',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Song Name Generator | Random Song Name Generator With Meaning',
    description: "Generate unique and catchy song names with meanings using our Song Name Generator. Ideal for songwriters, musicians, and creative projects looking for inspiration!",
    images: ['pop.jpg'],
  },

  keywords: ['Song Name Generator', ' random song name generator', 'rap song name generator', 'ai song name generator',
     'song name generator ai', 'song name generator with keywords', 'rock song name generator', 'lofi song name generator', 'metal song name generator'],
  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/song-name-generator"
  },
}

const page = () => {
    return (
      <div>
      <SongNameGenerator />
      </div>
    )
  }
  
  export default page