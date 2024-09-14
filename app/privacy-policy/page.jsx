import PrivacyPolicy from "@/components/privacy-policy/Privacy-Policy"

export const metadata = {

  robots:{index:true, follow: true},
  alternates:{
    canonical:"https://www.nameideagenerator.com/privacy-policy"
  },
}


const page = () => {
    return (
      <div>
      <PrivacyPolicy />
      </div>
    )
  }
  
  export default page