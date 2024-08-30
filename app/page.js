import HomeMain from "@/components/Home/Home";
import { GoogleAnalytics } from '@next/third-parties/google'
 
export default function Page() {
  return <GoogleAnalytics gaId="G-XYZ" />
}

export default function Home() {
  return (
    <>
    <HomeMain />
    </>
  );
}
