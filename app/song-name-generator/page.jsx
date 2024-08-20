import SongNameGenerator from "@/components/song-name-generator/Song-Name-Generator"

export const metadata = {
  title: 'Song Name Generator | Random Song Name Generator With Meaning | Name Idea Generator',
  description: "Find the perfect title for your next hit with our Song Name Generator! Generate random song names with meanings that capture the essence of your music. Discover creative and unique name ideas for your songs in no time.",
  
  openGraph: {
    title: 'Song Name Generator | Random Song Name Generator With Meaning | Name Idea Generator',
    description: "Find the perfect title for your next hit with our Song Name Generator! Generate random song names with meanings that capture the essence of your music. Discover creative and unique name ideas for your songs in no time.",
    url: 'https://www.nameideagenerator.com/song-name-generator',
    images: [
      {
        url: 'pop.jpg',
        width: 800,
        height: 600,
        alt: 'Song Name Generator | Random Song Name Generator With Meaning | Name Idea Generator',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Song Name Generator | Random Song Name Generator With Meaning | Name Idea Generator',
    description: "Find the perfect title for your next hit with our Song Name Generator! Generate random song names with meanings that capture the essence of your music. Discover creative and unique name ideas for your songs in no time.",
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