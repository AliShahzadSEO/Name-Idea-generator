import HomeMain from "@/components/Home/Home";
import { ClientRootLayout } from '../layout';

export default function Home() {
  return (
    <ClientRootLayout>
      <HomeMain />
    </ClientRootLayout>
  );
}