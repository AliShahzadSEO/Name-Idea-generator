"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
  {
    name: "Azaroth",
    detail: "The keeper of the lost flames.",
    status: false,
    gender: "male",
    type: "Inferno"
  },
  {
    name: "Belzakar",
    detail: "The whisperer of forgotten secrets.",
    status: false,
    gender: "male",
    type: "Inferno"
  },
  {
    name: "Cthuloris",
    detail: "The guardian of the abyssal echoes.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Eldrikor",
    detail: "The lord of the enchanted abyss.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Furyon",
    detail: "The avenger of broken oaths.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Gorgath",
    detail: "The terror of the night skies.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Helzara",
    detail: "The mistress of cursed dreams.",
    status: false,
    gender: "female",
    type: "Shadow"
  },
  {
    name: "Ignarok",
    detail: "The flame that consumes the living.",
    status: false,
    gender: "male",
    type: "Inferno"
  },
  {
    name: "Jaburath",
    detail: "The weaver of tormenting illusions.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Khargron",
    detail: "The butcher of hopeless souls.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Letharis",
    detail: "The shadow that haunts the light.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Morvash",
    detail: "The specter of eternal sorrow.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Nefarix",
    detail: "The betrayer of sacred trusts.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Ophirion",
    detail: "The deceiver of mortal minds.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Pyrionis",
    detail: "The blaze that blinds the righteous.",
    status: false,
    gender: "male",
    type: "Inferno"
  },
  {
    name: "Quarath",
    detail: "The silent hunter of the night.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Ragnorak",
    detail: "The end-bringer of all realms.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Sathariel",
    detail: "The phantom of forgotten pain.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Tyranak",
    detail: "The destroyer of celestial harmony.",
    status: false,
    gender: "male",
    type: "Celestial"
  },
  {
    name: "Umbrios",
    detail: "The warden of shadowy prisons.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Varkoris",
    detail: "The scourge of broken dreams.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Wraithor",
    detail: "The ghost of silent screams.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Xenathor",
    detail: "The harbinger of twisted fate.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Yggorath",
    detail: "The serpent of eternal dusk.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Zarothis",
    detail: "The whisper in the dark void.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Abaddonis",
    detail: "The destroyer of desolate realms.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Baalgrim",
    detail: "The conqueror of doomed fortresses.",
    status: false,
    gender: "male",
    type: "Inferno"
  },
  {
    name: "Chthonis",
    detail: "The lurker beneath the earth.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Daemonox",
    detail: "The shadow that consumes the soul.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Eldritchion",
    detail: "The embodiment of ancient horrors.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Fenrithor",
    detail: "The beast of the darkened woods.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Gorgonoth",
    detail: "The petrifier of the brave.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Hadeskar",
    detail: "The ruler of the underworld.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Infernak",
    detail: "The fire that never dies.",
    status: false,
    gender: "male",
    type: "Inferno"
  },
  {
    name: "Jezebor",
    detail: "The tempter of the weak-hearted.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Krakenor",
    detail: "The terror of the deep seas.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Lilithor",
    detail: "The seductress of forbidden desires.",
    status: false,
    gender: "female",
    type: "Fiend"
  },
  {
    name: "Molochor",
    detail: "The devourer of sacrificial souls.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Nefarion",
    detail: "The prince of the damned.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Oblivionis",
    detail: "The void that swallows all.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Pandorath",
    detail: "The opener of cursed boxes.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Quorathis",
    detail: "The silent storm of night.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Ravenor",
    detail: "The harbinger of dark omens.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Sanguinor",
    detail: "The drinker of bloodied chalices.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Thanatos",
    detail: "The angel of death's embrace.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Umbriath",
    detail: "The wraith of eternal night.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Vampyros",
    detail: "The lord of crimson night.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Wendigor",
    detail: "The devourer of lost souls.",
    status: false,
    gender: "male",
    type: "Fiend"
  },
  {
    name: "Xathrion",
    detail: "The shadow of despair.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Ymirak",
    detail: "The giant of eternal frost.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
  {
    name: "Zarathor",
    detail: "The reaper of twisted fates.",
    status: false,
    gender: "male",
    type: "Shadow"
  },
  {
    name: "Abyssion",
    detail: "The abyss incarnate.",
    status: false,
    gender: "male",
    type: "Abyss"
  },
];

function getRandomDemon(gender, type, demonNames) {
  const filteredDemons = demonNames.filter((demon) => {
    if (gender && demon.gender !== gender) return false;
    if (type && demon.type !== type) return false;
    return true;
  });

  if (filteredDemons.length === 0) {
    const randomIndex = Math.floor(Math.random() * demonNames.length);
    return demonNames[randomIndex];
  }

  const randomIndex = Math.floor(Math.random() * filteredDemons.length);
  return filteredDemons[randomIndex];
}
const Category1 = [
  {
    name: "Tabaxi Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "Tiefling Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "Goblin Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
  {
    name: "ORC Name Generator",
    pic: "/demonpic.jpg",
    link: "",
  },
];

const TieflingNameGenerator = () => {
  const [lockedDemonList, setLockedDemonList] = useState([
    null,
    null,
    null,
    null,
  ]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [generatedDemonList, setGeneratedDemonList] = useState([]);
  const [Description, setDescription] = useState("");
  const [ShowDescription, setShowDescription] = useState(false);

  useEffect(() => {
    generateDemonList();
  }, []);

  const generateDemonList = () => {
    const newDemonList = [];

    for (let i = 0; i < 4; i++) {
      if (lockedDemonList[i]) {
        newDemonList.push(lockedDemonList[i]);
      } else {
        let randomDemon;
        do {
          randomDemon = getRandomDemon(
            selectedGender,
            selectedType,
            demonNames
          );
        } while (newDemonList.includes(randomDemon));
        newDemonList.push(randomDemon);
      }
    }

    setGeneratedDemonList(newDemonList);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleDemonTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleLockChange = (index, demon, isChecked) => {
    const newLockedList = [...lockedDemonList];
    newLockedList[index] = isChecked ? demon : null;
    setLockedDemonList(newLockedList);
  };
  
const bgImage = "/female.jpg"
const context = "Tiefling Name Generator"
const Q1 = "What is the Tiefling Name Generator?"
const A1 = "The Tiefling Name Generator creates unique names for Tiefling characters. Use it for storytelling, writing, or to spark creative ideas."
const Q2 = "How does the Tiefling Name Generator work?"
const A2 = "Input your preferences such as name length and themes. Click 'Generate' to receive a name based on your selections."
const Q3 = "Is the Tiefling Name Generator free to use?"
const A3 = "Yes, our Tiefling Name Generator is completely free to use. Enjoy unlimited access and generate as many names as you need."
const Q4 = "Can I use the generated names for commercial purposes?"
const A4 = "Yes, the names generated by our tool are suitable for both personal and commercial uses, including games and creative projects."
const Q5 = "Is an account required to use the Tiefling Name Generator?"
const A5 = "No account is required to use the tool. Registering unlocks additional features, such as saving your generated names."
  return (
    <motion.div
      initial={{ opacity: 0, x: 1200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-[#f8f9fa] "
    >
      <HeroSection bgImage={bgImage} context={context}/>
      <div className="w-[90%] my-[50px] bg-white mx-auto rounded-[10px] border border-solid shadow-lg">
        <div className="w-[95%] mx-auto py-[50px]">
          <div>
            <p className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
             Random Tiefling Name Generator
            </p>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Gender</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Types of Tiefling</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Inferno">Inferno</option>
              <option value="Abyss">Abyss</option>
              <option value="Fiend">Fiend</option>
              <option value="Celestial">Celestial</option>
              <option value="Shadow">Shadow</option>
            </select>
          </div>
          <div className="flex justify-center items-center py-[30px]">
            <button
              className="text-white p-[10px] bg-[#17A2B8] transition-colors duration-300 hover:bg-[#56baca] rounded-[5px] text-[22px]"
              onClick={generateDemonList}
            >
              Generate Names
            </button>
          </div>
          <div className="flex justify-between sm:flex-row flex-col gap-4">
            {generatedDemonList.map((demon, index) => (
              <div
                key={index}
                className="border border-solid shadow-lg hover:text-white transition-colors duration-300 hover:bg-[#17A2B8] py-[20px] gap-2 sm:w-[25%] w-[50%] mx-auto rounded-[5px] flex justify-center items-center "
                onMouseEnter={() => {
                  setShowDescription(true);
                  setDescription(demon.detail);
                }}
                onMouseLeave={() => {
                  setShowDescription(false);
                  setDescription("");
                }}
                set
              >
                <input
                  type="checkbox"
                  checked={!!lockedDemonList[index]}
                  onChange={(e) =>
                    handleLockChange(index, demon, e.target.checked)
                  }
                />
                <p className="font-medium">{demon.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[80%] text-center mx-auto py-[20px] mb-[16px] mt-[30px] border border-solid shadow-lg text-[20px] font-semibold">
        {Description}
      </div>
      <div
        className="w-[100%] bg-white"
        // style={{ backgroundColor: "rgb(23 ,162 ,184, 0.6)" }}
      >
        <div className="w-[80%] mx-auto pb-[20px]">
          <div className="py-[50px]">
            <p className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
              About Us
            </p>
            <hr />
            <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
            We have developed our Tiefling Name Generator to offer a highly intuitive and precise naming solution. 
            This tool generates unique Tiefling names with accuracy and avoids biases or errors. 
            It provides a seamless experience for those seeking to create distinctive names for characters or projects.
            </p>
            <p className="text-center py-[10px] text-[#343a40]">
            Our tool excels due to its robust security features. 
            We have integrated advanced encryption technology to ensure that all user data, 
            including preferences and generated names, remains secure and confidential. 
            This commitment to data protection sets our generator apart as a reliable choice for users. 
            </p>
            <p className="text-center py-[10px] text-[#343a40]">
            Ideal for writers, game developers, and hobbyists, our Tiefling Name Generator serves a wide range of needs. 
            It simplifies character creation and enhances creative projects by providing unique and fitting names. 
            Experience the efficiency and reliability of our tool to elevate your creative work.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] my-[20px] text-center">
            How to Use the Tiefling Name Generator?
          </h2>
          <p className="sm:text-[20px] text-[20px] my-[10px] text-center">
          Follow these simple steps to use our Tiefling Name Generator and find the perfect name for your project:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <p className="sm:text-[28px] text-[20px] font-semibold">
              Step 1: Open the Tool
              </p>
              <p>
              Access the Tiefling Name Generator tool on our website. 
              This is where you will start the process of generating your unique name.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <p className="sm:text-[28px] text-[20px] font-semibold">
              Step 2: Enter Your Preferences
              </p>
              <p>
              Specify the traits like the gender you want for your Tiefling name. 
              Use the input fields to provide the details that will shape the generated names.
               </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <p className="sm:text-[28px] text-[20px] font-semibold ">
              Step 3 - Choose Your Name
              </p>
              <p>
              Press the <b> “Generate” </b> button to receive a list of names. 
              Select the one that best fits your character or project from the options provided.
              </p>
            </div>
          </div>
          <div className="sm:w-[40%] relative ">
            <img
              src="tiffling.webp"
              alt=""
              className="w-[250px] my-[10px] h-[250px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="tiffing.webp"
              alt=""
              className="w-[250px] h-[250px] my-[-10px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/generatorbg.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Tiefling Name Generator
        </p>
        <div className="w-[80%] mx-auto grid sm:grid-cols-4 grid-cols-1 gap-2">
          {Category1.map((item, index) => (
            <Link key={index} href={item.link}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.25 }}
                className="border rounded-lg shadow-lg overflow-hidden cursor-pointer bg-white"
              >
                <img
                  src={item.pic}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      <div class="w-[80%] mx-auto text-[#343a40] my-[30px]">
        <div class="text-center mb-[10px]">
            <h2 class="sm:text-[36px] text-[22px] font-semibold mb-4">
                Why Use Our Tiefling Name Generator?
            </h2>
            <p class="sm:text-[16px] text-[22px] font-semibold">
            Our Tiefling Name Generator is the best choice due to its unique features. 
            Try it now to take advantage of its exclusive advantages. 
            Let us tell you what advanced benefits are present in our tool:
            </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
            <div >
                <hr class="my-4" />
                <div class="py-[10px]">
                    <div class="py-[5px] flex flex-col gap-2">
                        <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold">
                            Save Time 
                        </h3>
                        <p>
                        We designed our Tiefling Name Generator to quickly produce names without the hassle of manual selection. 
                        Our tool streamlines the naming process, allowing you to generate names efficiently. 
                        This saves you valuable time and lets you focus on other aspects of your creative project. 
                        Experience a faster and more convenient way to find the perfect name.                        
                        </p>
                    </div>
                    <div class="py-[5px] flex flex-col gap-2">
                        <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                            Unbiased Results 
                        </h3>
                        <p>
                        Our tool ensures that the names are generated randomly, eliminating any favoritism or bias. 
                        We programmed it to provide a fair and diverse selection of names. 
                        This approach guarantees that every generated name has an equal chance of being chosen. 
                        Trust our generator to offer unbiased and varied name options.                        
                        </p>
                    </div>
                    <div class="py-[10px] flex flex-col gap-2">
                        <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                        Flexible Settings
                        </h3>
                        <p>
                        Our Tiefling Name Generator offers flexible settings to customize your names easily. 
                        Adjust basic attributes to match your character's traits and preferences. 
                        Tailor the name output to fit specific creative requirements with ease. 
                        We designed this feature to ensure a simple and adaptable naming process.
                        </p>
                    </div>
                    <div class="py-[10px] flex flex-col gap-2">
                        <p class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                            Secure and Private 
                        </p>
                        <p>
                        Our tool prioritizes your privacy and data security. 
                        We use advanced encryption technology to protect all user information, including preferences and generated names. 
                        You can use our generator with confidence, knowing that your data remains confidential and secure. 
                        We ensure robust protection for your personal details.
                        </p>
                    </div>
                    <div class="py-[10px] flex flex-col gap-2">
                        <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                            Creative and Fun  
                        </h3>
                        <p>
                        Explore endless creative possibilities with our Tiefling Name Generator. 
                        Our tool offers a variety of name combinations to inspire and delight you. 
                        Enjoy the process of discovering unique names that perfectly suit your Tiefling character. 
                        Experience the fun and creativity our tool brings to your project.
                        </p>
                    </div>
                    <div class="py-[10px] flex flex-col gap-2">
                        <h3 class="sm:text-[28px] text-[20px] sm:font-normal font-semibold ">
                        Enhanced Character Depth 
                        </h3>
                        <p>
                        Our Tiefling Name Generator adds depth and intrigue to your characters. 
                        We designed it to help you create names that enhance your stories, novels, and scripts. 
                        Generate evocative names that capture the essence of your characters, making your creative work stand out. 
                        Elevate your characters with our tool’s unique name options.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <div>
            <div className=" py-[30px]  mx-auto"> 
            <section class="w-[80%] mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Is it Safe to Use the Tiefling Name Generator?</h2>
        <p class="text-gray-600 mb-4">
            Yes, it is safe to use the Tiefling Name Generator. Our tool operates without any privacy or safety concerns since it is user-friendly and highly functional. Whether you are entering preferences or generating names, our tool will keep your data safe and secure.
        </p>
        <p class="text-gray-600 mb-4">
            The names our tool generates are completely random and unbiased. You can use it whenever you need a unique Tiefling name. It simplifies the process, providing a random name from the provided options.
        </p>
    </section>
            </div>

          </div>
      <div
        className="w-[100%] flex justify-center items-center bg-overlay py-[250px]"
        style={{
          backgroundImage: 'url("/generatorbg.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay:  0.25 }}
          className="flex items-center flex-col gap-6"
        >
          <div>
            <p className="text-[36px] font-semibold text-white">
              Do you have a request
            </p>
          </div>
          <div>
            <p className="text-white">
              Commissions are available! Visit my contact page and send an
              inquiry with the details of your request.
            </p>
          </div>
          <div>
            <button className="bg-white text-black text-[20px] px-[20px] py-[16px] rounded-[10px] font-semibold">
              Request
            </button>
          </div>
        </motion.div>
      </div>
      <FAQSection Q1={Q1} A1={A1} Q2={Q2} A2={A2} Q3={Q3} A3={A3} Q4={Q4} A4={A4} Q5={Q5} A5={A5}/>
      <Footer />
    </motion.div>
  );
};

export default TieflingNameGenerator;
