"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Archibald", detail: "Archibald, a name that resonates with ancient nobility, known for its strength and dignified presence.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Percival", detail: "Percival, a name tied to chivalry and honor, representing a soul of great courage and virtue.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Edmund", detail: "Edmund, a name that symbolizes wisdom and moral strength, carried by those destined for greatness.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Albert", detail: "Albert, a name with a legacy of royal elegance and intellectual prowess, often associated with leaders and visionaries.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Horatio", detail: "Horatio, a name imbued with a sense of adventure and intellect, often associated with those who seek truth.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Cedric", detail: "Cedric, a name full of nobility and strength, representing a legacy of leadership and protection.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Reginald", detail: "Reginald, a name that denotes power and authority, often borne by those with a regal presence.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Leopold", detail: "Leopold, a name that conveys wisdom and royal dignity, symbolizing a ruler's grace and strength.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Thaddeus", detail: "Thaddeus, a name that resonates with dignity and honor, associated with great intellect and leadership.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Bertram", detail: "Bertram, a name filled with timeless elegance, often associated with courage and tradition.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Clarence", detail: "Clarence, a name representing nobility and leadership, with an aura of grace and wisdom.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Eustace", detail: "Eustace, a name that signifies valor and strength, often held by those who stand firm in their convictions.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Godfrey", detail: "Godfrey, a name that symbolizes divine strength and wisdom, carried by those with a noble heart.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Ignatius", detail: "Ignatius, a name that carries the fire of passion and knowledge, often associated with intellectual and spiritual pursuits.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Rupert", detail: "Rupert, a name that signifies honor and perseverance, borne by those destined for greatness.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Basil", detail: "Basil, a name that symbolizes strength and wisdom, often carried by leaders and intellectuals.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Alaric", detail: "Alaric, a name that invokes power and legacy, often borne by kings and warriors who shape history.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Lionel", detail: "Lionel, a name that carries a sense of nobility and courage, often associated with knights and heroes.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Victor", detail: "Victor, a name symbolizing victory and success, often borne by those who rise above adversity.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Oswald", detail: "Oswald, a name filled with ancient strength and wisdom, associated with those who bring peace and leadership.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Arthur", detail: "Arthur, a name steeped in legend and royalty, symbolizing a noble and just ruler.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Frederick", detail: "Frederick, a name that signifies royal power and grace, associated with those who bring about change and progress.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Augustus", detail: "Augustus, a name imbued with grandeur and strength, often borne by those destined for greatness.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Mortimer", detail: "Mortimer, a name that carries with it a sense of solemn grace and authority, often associated with leaders of wisdom.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Algernon", detail: "Algernon, a name that evokes elegance and intellect, often carried by scholars and gentlemen.", status: false, gender: "Male", type: "Ancient Victorian" },
    { name: "Ethel", detail: "Ethel, a name symbolizing elegance and grace, often carried by women of noble heart.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Agatha", detail: "Agatha, a name with roots in strength and virtue, representing a woman of moral character and wisdom.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Beatrice", detail: "Beatrice, a name associated with happiness and blessings, often carried by those who bring light into the lives of others.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Dorothea", detail: "Dorothea, a name meaning 'gift of God', symbolizing a woman who is both wise and caring.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Gwendolyn", detail: "Gwendolyn, a name of Welsh origin meaning 'blessed ring', associated with beauty, grace, and a noble spirit.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Matilda", detail: "Matilda, a name symbolizing strength and battle, carried by those who overcome great obstacles.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Henrietta", detail: "Henrietta, a name associated with royalty and nobility, carried by women of grace and leadership.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Adelaide", detail: "Adelaide, a name that signifies nobility and elegance, representing a woman of great strength and intellect.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Winifred", detail: "Winifred, a name that carries a sense of peace and joy, often borne by those who bring happiness to others.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Mildred", detail: "Mildred, a name symbolizing gentleness and kindness, associated with women who bring comfort and care.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Florence", detail: "Florence, a name that evokes the beauty of nature, symbolizing grace, prosperity, and peace.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Clementine", detail: "Clementine, a name that signifies mercy and gentleness, often carried by women of compassion and warmth.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Lavinia", detail: "Lavinia, a name of noble origin, often associated with beauty, wisdom, and timeless grace.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Marguerite", detail: "Marguerite, a name that represents purity and elegance, carried by those who embody kindness and charm.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Genevieve", detail: "Genevieve, a name that signifies gentleness and strength, often carried by those who inspire and lead with grace.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Octavia", detail: "Octavia, a name that symbolizes nobility and ambition, often carried by women destined for greatness.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Isadora", detail: "Isadora, a name that symbolizes beauty and elegance, often associated with grace and artistic talent.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Edith", detail: "Edith, a name symbolizing prosperity and happiness, carried by women known for their strength and kindness.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Maud", detail: "Maud, a name that signifies power and strength, often borne by women who rise to leadership and influence.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Eleanor", detail: "Eleanor, a name that symbolizes light and wisdom, often associated with those who bring knowledge and justice.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Rosamund", detail: "Rosamund, a name that signifies beauty and strength, often carried by those who embody grace and resilience.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Penelope", detail: "Penelope, a name that carries the weight of wisdom and endurance, often associated with those who remain steadfast and true.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Sybil", detail: "Sybil, a name that evokes wisdom and foresight, often carried by women known for their intellect and vision.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Cordelia", detail: "Cordelia, a name symbolizing grace and warmth, often carried by women who inspire loyalty and love.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Augusta", detail: "Augusta, a name that signifies dignity and nobility, associated with women of high status and royal lineage.", status: false, gender: "Female", type: "Ancient Victorian" },
  { name: "Henry", detail: "Henry, a classic name symbolizing leadership and strength, often carried by men of noble birth.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Oliver", detail: "Oliver, a name symbolizing peace and prosperity, associated with those who bring joy and kindness.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "James", detail: "James, a timeless name that conveys strength and dignity, often borne by those who lead with courage.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Alexander", detail: "Alexander, a name that signifies power and leadership, carried by men destined for greatness.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Theodore", detail: "Theodore, a name that conveys wisdom and honor, often associated with men of intelligence and virtue.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "William", detail: "William, a name symbolizing strength and protection, often carried by those who lead with integrity.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Edward", detail: "Edward, a name that signifies wealth and nobility, often associated with men of noble descent and refined manners.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Samuel", detail: "Samuel, a name symbolizing wisdom and devotion, often borne by those known for their loyalty and insight.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Benjamin", detail: "Benjamin, a name signifying strength and wisdom, often carried by those who are steady and reliable.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Nathaniel", detail: "Nathaniel, a name that conveys grace and spirituality, often borne by those who seek truth and knowledge.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Lucas", detail: "Lucas, a name symbolizing light and clarity, carried by men who bring knowledge and understanding.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Charles", detail: "Charles, a name that signifies nobility and leadership, often borne by those destined for greatness.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Thomas", detail: "Thomas, a classic name representing stability and faith, often carried by men known for their dependability.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Julian", detail: "Julian, a name signifying youth and vitality, often associated with men who are both charming and intelligent.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Vincent", detail: "Vincent, a name symbolizing victory and triumph, often carried by those who overcome obstacles with grace.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Daniel", detail: "Daniel, a name that conveys strength and righteousness, often borne by men known for their faith and wisdom.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Matthew", detail: "Matthew, a name symbolizing divine gift and wisdom, often carried by those who inspire others.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Noah", detail: "Noah, a name representing hope and renewal, often borne by those known for their compassion and resilience.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Sebastian", detail: "Sebastian, a name that signifies strength and elegance, often carried by those with a noble and dignified spirit.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Elijah", detail: "Elijah, a name symbolizing spiritual power and guidance, often carried by men of deep wisdom and faith.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Ethan", detail: "Ethan, a name that conveys strength and resilience, often borne by those who overcome challenges with courage.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Caleb", detail: "Caleb, a name symbolizing faithfulness and loyalty, carried by men who are steadfast in their beliefs.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Isaac", detail: "Isaac, a name signifying joy and laughter, often borne by those with a lighthearted and joyful spirit.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Andrew", detail: "Andrew, a name symbolizing strength and bravery, often carried by men who inspire others with their courage.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Zachary", detail: "Zachary, a name that conveys wisdom and faith, often borne by those who lead with compassion and insight.", status: false, gender: "Male", type: "Modern Victorian" },
  { name: "Charlotte", detail: "Charlotte, a name symbolizing strength and grace, often borne by women of noble birth and high standing.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Amelia", detail: "Amelia, a name representing elegance and wisdom, carried by women known for their intelligence and kindness.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Sophia", detail: "Sophia, a name that signifies wisdom and grace, often borne by women who inspire with their intellect and charm.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Isabella", detail: "Isabella, a name that symbolizes beauty and royalty, often carried by women with strong and noble character.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Emma", detail: "Emma, a name symbolizing universal strength and kindness, often borne by women who are both charming and determined.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Evelyn", detail: "Evelyn, a name representing elegance and charm, carried by women with grace and warmth.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Scarlett", detail: "Scarlett, a name signifying passion and resilience, often borne by women known for their fiery spirit and determination.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Grace", detail: "Grace, a name symbolizing elegance and kindness, carried by women who embody poise and compassion.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Lily", detail: "Lily, a name that signifies purity and beauty, often borne by women who bring peace and light to those around them.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Aurora", detail: "Aurora, a name symbolizing dawn and new beginnings, often carried by women who inspire change and growth.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Eleanor", detail: "Eleanor, a name representing strength and leadership, often borne by women who are both intelligent and kind-hearted.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Harper", detail: "Harper, a name symbolizing creativity and harmony, carried by women known for their artistic nature and grace.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Victoria", detail: "Victoria, a name signifying victory and triumph, often borne by women who are both strong and dignified.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Abigail", detail: "Abigail, a name representing wisdom and strength, often carried by women who are both nurturing and powerful.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Clara", detail: "Clara, a name symbolizing clarity and brightness, carried by women who inspire with their purity of heart and mind.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Madeline", detail: "Madeline, a name that signifies grace and charm, often borne by women with a gentle and loving spirit.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Alice", detail: "Alice, a name symbolizing wisdom and curiosity, often carried by women known for their intellect and adventurous spirit.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Violet", detail: "Violet, a name representing beauty and grace, carried by women who are elegant and full of life.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Anna", detail: "Anna, a name symbolizing grace and favor, often borne by women known for their kindness and purity.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Lucy", detail: "Lucy, a name representing light and clarity, carried by women who are known for their warmth and radiance.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Stella", detail: "Stella, a name symbolizing stars and wonder, often borne by women who shine brightly in all they do.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Natalie", detail: "Natalie, a name representing rebirth and new beginnings, carried by women who bring joy and vitality wherever they go.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Ruby", detail: "Ruby, a name symbolizing passion and strength, often borne by women who are bold and full of energy.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Hazel", detail: "Hazel, a name representing wisdom and connection to nature, carried by women with a nurturing and caring spirit.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Penelope", detail: "Penelope, a name symbolizing patience and loyalty, often borne by women who are steadfast and loving.", status: false, gender: "Female", type: "Modern Victorian" },
  { name: "Charles", detail: "Charles, a name associated with greatness, after Charles Dickens, who captured the essence of Victorian England.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Oscar", detail: "Oscar, a name embodying wit and charm, after Oscar Wilde, whose plays and writings define the Victorian era.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Alfred", detail: "Alfred, a name representing poetic depth, after Alfred Tennyson, the Victorian poet laureate.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Arthur", detail: "Arthur, a name linked to mystery and adventure, after Arthur Conan Doyle, creator of Sherlock Holmes.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Lewis", detail: "Lewis, a name representing creativity and wonder, after Lewis Carroll, author of 'Alice's Adventures in Wonderland'.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Thomas", detail: "Thomas, a name of enduring literary legacy, after Thomas Hardy, the novelist who portrayed rural life in Victorian England.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "John", detail: "John, a name of intellectual depth, after John Stuart Mill, philosopher and political economist of the Victorian era.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Matthew", detail: "Matthew, a name associated with literary excellence, after Matthew Arnold, the Victorian poet and cultural critic.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Edward", detail: "Edward, a name representing artistic legacy, after Edward Burne-Jones, the Pre-Raphaelite artist.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "William", detail: "William, a name that symbolizes artistic and social reform, after William Morris, the designer and poet of the Arts and Crafts movement.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Henry", detail: "Henry, a name of literary achievement, after Henry James, the American-born British author of psychological realism.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Walter", detail: "Walter, a name that denotes philosophical depth, after Walter Pater, the Victorian essayist and critic.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "George", detail: "George, a name representing literary influence, after George Eliot, the pen name of novelist Mary Ann Evans.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Robert", detail: "Robert, a name that reflects poetic passion, after Robert Browning, the Victorian poet known for his dramatic monologues.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "David", detail: "David, a name symbolizing exploration, after David Livingstone, the Victorian explorer and missionary.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Benjamin", detail: "Benjamin, a name denoting political insight, after Benjamin Disraeli, the British prime minister and literary figure.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Richard", detail: "Richard, a name that embodies exploration and courage, after Richard Burton, the Victorian explorer and translator.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Anthony", detail: "Anthony, a name signifying literary merit, after Anthony Trollope, the Victorian novelist and postmaster.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Samuel", detail: "Samuel, a name representing ambition and wisdom, after Samuel Smiles, the Scottish author and social reformer.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Frederick", detail: "Frederick, a name linked to artistic brilliance, after Frederick Leighton, the renowned Victorian artist and president of the Royal Academy.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "James", detail: "James, a name that signifies artistic mastery, after James Whistler, the famous Victorian artist known for his paintings.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Francis", detail: "Francis, a name representing scientific intellect, after Francis Galton, the Victorian polymath and eugenicist.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Charles", detail: "Charles, a name symbolizing intellectual curiosity, after Charles Darwin, the naturalist who developed the theory of evolution.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Augustus", detail: "Augustus, a name representing architectural genius, after Augustus Pugin, the architect of the Houses of Parliament.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "William", detail: "William, a name that stands for social reform, after William Booth, the founder of the Salvation Army.", status: false, gender: "Male", type: "Famous Victorian" },
  { name: "Victoria", detail: "Victoria, a name synonymous with royalty and dignity, after Queen Victoria, whose reign defined the era.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Florence", detail: "Florence, a name representing compassion and healthcare, after Florence Nightingale, the founder of modern nursing.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Ada", detail: "Ada, a name linked to intellect and innovation, after Ada Lovelace, the mathematician who pioneered computer programming.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Emily", detail: "Emily, a name that reflects literary genius, after Emily Brontë, the author of the haunting novel 'Wuthering Heights'.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Charlotte", detail: "Charlotte, a name of resilience and creativity, after Charlotte Brontë, the novelist behind 'Jane Eyre'.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Mary", detail: "Mary, a name representing literary and scientific achievement, after Mary Shelley, author of 'Frankenstein'.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Anne", detail: "Anne, a name signifying quiet strength and literary merit, after Anne Brontë, the author of 'The Tenant of Wildfell Hall'.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Elizabeth", detail: "Elizabeth, a name associated with social change, after Elizabeth Gaskell, the author of 'North and South'.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Jane", detail: "Jane, a name representing elegance and moral integrity, after Jane Austen, the celebrated novelist of 'Pride and Prejudice'.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Harriet", detail: "Harriet, a name linked to social justice and courage, after Harriet Martineau, the sociologist and author.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Eleanor", detail: "Eleanor, a name representing strength and advocacy, after Eleanor Marx, the socialist and political activist.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Sarah", detail: "Sarah, a name linked to theater and performance, after Sarah Bernhardt, the famous French actress of the Victorian stage.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Isabella", detail: "Isabella, a name that signifies exploration and adventure, after Isabella Bird, the Victorian traveler and writer.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Frances", detail: "Frances, a name reflecting social reform, after Frances Power Cobbe, the Irish writer and animal rights activist.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Emmeline", detail: "Emmeline, a name linked to political activism and women's rights, after Emmeline Pankhurst, the leader of the suffragette movement.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Beatrix", detail: "Beatrix, a name associated with childhood joy and nature, after Beatrix Potter, the beloved author of 'Peter Rabbit'.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Clara", detail: "Clara, a name of musical talent and grace, after Clara Schumann, the German pianist and composer.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Rosa", detail: "Rosa, a name signifying artistic talent, after Rosa Bonheur, the French artist famous for her animal paintings.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Margaret", detail: "Margaret, a name associated with literary and philosophical achievement, after Margaret Fuller, the American writer and feminist.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Ellen", detail: "Ellen, a name of grace and performance, after Ellen Terry, the famous English actress of the Victorian stage.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Louisa", detail: "Louisa, a name of literary excellence, after Louisa May Alcott, the author of 'Little Women'.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Julia", detail: "Julia, a name associated with photography and art, after Julia Margaret Cameron, the pioneering photographer.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Josephine", detail: "Josephine, a name linked to social reform and activism, after Josephine Butler, the British feminist and social reformer.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Edith", detail: "Edith, a name signifying literary achievement, after Edith Wharton, the American novelist known for 'The Age of Innocence'.", status: false, gender: "Female", type: "Famous Victorian" },
  { name: "Sophia", detail: "Sophia, a name linked to medicine and education, after Sophia Jex-Blake, a pioneering female physician.", status: false, gender: "Female", type: "Famous Victorian" }
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
      name: "Tiefling Name Generator",
      pic: "/female.jpg",
      link: "https://www.nameideagenerator.com/tiefling-name-generator",
  },
  {
      name: "Dragonborn Name Generator",
      pic: "/bg-dragonborn.webp",
      link: "https://www.nameideagenerator.com/dragonborn-name-generator",
  },
  {
      name: "Wizard Name Generator",
      pic: "/wizards-wizard-name-ideas.webp",
      link: "https://www.nameideagenerator.com/wizard-name-generator",
  },
  {
      name: "Victorian Name Generator",
      pic: "/victorian-name-generator.jpg",
      link: "https://www.nameideagenerator.com/victorian-name-generator",
  },
  ];
  
  const EgyptianNameGenerator = () => {
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
  
const bgImage = "/egyptian-name-generator.jpg"
const context = "Egyptian Name Generator with Meaning Tool"
const Q1 = "What is the Egyptian Name Generator?"
const A1 = "The Egyptian Name Generator is a tool for creating authentic Egyptian names. It is inspired by ancient and modern Egyptian culture and generates names quickly, providing meaningful options for various creative purposes."

const Q2 = "How accurate are the names generated by this tool?"
const A2 = "The names are based on real Egyptian naming traditions, ensuring authenticity. The tool draws inspiration from ancient Egyptian history, mythology, and modern Egyptian names, making them suitable for storytelling, gaming, and creative projects. "

const Q3 = "Can I choose between male, female, and neutral names?"
const A3 = "Yes, the generator allows you to select from male, female, and neutral options. This gives you flexibility depending on the gender or theme of your project."

const Q4 = "Are the names suitable for fantasy and fiction writing?"
const A4 = "Absolutely! The Egyptian Name Generator is perfect for fantasy, fiction writing, or character development in games. The names carry cultural depth, offering a realistic and powerful touch to your creative work."

const Q5 = "How can I use the generated names?"
const A5 = "You can use the names in various ways, including for characters in novels, games, role-playing, or even personal projects. Each name has a unique meaning and cultural significance, adding authenticity to your creations."
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
          <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
  <ol className="list-none p-0 inline-flex flex-wrap">
    <li className="flex items-center">
      <a href="/" className="hover:underline text-[#343a40] text-xs sm:text-sm md:text-base">Home</a>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M10 19l7-7-7-7"></path>
      </svg>
    </li>
    <li className="flex items-center">
      <a href="/categories/cultural-and-historical" className="hover:underline text-[#343a40] text-xs sm:text-sm md:text-base">Cultural and Historical Names</a>
    </li>
    <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10 19l7-7-7-7"></path>
    </svg>
    <li className="flex items-center">
      <a href="/egyptian-name-generator" className="hover:underline text-[#343a40] text-xs sm:text-sm md:text-base">Egyptian Name Generator</a>
    </li>
  </ol>
</nav>
            <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
            Egyptian Name Generator with Meaning Tool
            </h2>
          </div>
          <div className="pt-[20px] pb-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Egyptian Gender</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <option value="">Random</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p className="text-center text-[#343a40]">Type of Egyptian Names</p>
            <select
              className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
              id="type"
              value={selectedType}
              onChange={handleDemonTypeChange}
            >
              <option value="">Random</option>
              <option value="Ancient Victorian">Ancient</option>
              <option value="Modern Victorian">Modern</option>
              <option value="Famous">Famous</option>
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
          <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
          What is the Egyptian Name Generator?
          </h2>
          <hr />
            <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
            Egyptian Name Generator creates names inspired by Egyptian traditions, blending ancient and modern influences. 
            Whether you need a name for a character, a project, or personal curiosity, this tool delivers unique and meaningful options in seconds.
            Each name reflects the depth of Egyptian culture, from its historical roots to its symbolic meanings. 
            Names are drawn from ancient legends, royal dynasties, and modern interpretations, giving you a rich selection.
            </p>
            <p className="text-center py-[10px] text-[#343a40]">
            This Egyptian Name Tool isn’t just for fun. It’s a powerful tool for storytellers, worldbuilders, and creatives. 
            Explore names that carry history, culture, and individuality in every syllable. 
            Whether for novels, games, or role-playing, this tool simplifies the process and adds authenticity to your work.
            </p>
            <h2 className="text-center text-[36px] font-medium text-[#343a40] py-[30px]">
            Why Use the Egyptian Name Generator?
            </h2>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
              Save Time and Effort
              </h3>
              <p>
              You must be wondering why this tool is worth your time. The answer is simple: it makes the process quick and hassle-free. 
              Instead of spending hours scrolling through endless lists, generate the perfect name with just one click.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
              Sparks Creativity
              </h3>
              <p>
              Tailored names inspire creativity and bring your ideas to life. 
              Whether you’re crafting characters for a story, naming a game avatar, or exploring cultural roots, this tool provides options that fit seamlessly.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
              Perfect for Any Purpose
              </h3>
              <p>
              These names aren’t just random suggestions—they’re designed for versatility. 
              From games to novels or even personal projects, the names align with any purpose, adding authenticity and meaning to your work.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
              Authentic and Meaningful Names
              </h3>
              <p>
              Each name generated reflects the rich heritage of Egyptian culture. 
              The tool ensures every name has a unique personality and deep cultural significance, making your choice stand out.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
              Customizable Options
              </h3>
              <p>
              You can tailor the name generation to your specific needs. 
              Choose from male, female, or neutral names, and select ancient, modern, or famous styles that perfectly suit your project.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[#343a40] text-[16px] font-semibold">
              Instant Results, Anytime
              </h3>
              <p>
              With this Egyptian Name Generator Tool, you don’t have to wait. Names are generated instantly, allowing you to focus on your creative process without delays. 
              It’s simple, fast, and highly effective.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[28px] text-center">
          How to Use the Egyptian Name Generator Tool?
          </h2>
          <p className="sm:text-[16px] text-[16px] text-center">
          Using the Egyptian Name Generator is quick and straightforward. In just a few steps, you can create the perfect name for your celestial character. Here's how:
          </p>
        </div>
        <hr />
        <div className="py-[20px] flex sm:flex-row flex-col gap-4">
          <div className="sm:w-[50%]">
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Choose Egyptian <b>Gender</b> (Male, Female)
              </h3>
              <p  className="text-left text-[#343a40]">
              Start by selecting the gender you need. The tool offers options for male, or female names, ensuring you find the right fit for your project or character.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 2: Pick a Egyptian <b>Type</b> (Ancient, Modern, Famous)
              </h3>
              <p>
              Next, decide on the type that best suits your vision. Choose from: <br /><br />
              <ul>
                <li><b>Ancient:</b> Names steeped in history and tradition.</li>
                <li><b>Modern:</b> Names with a fresh and contemporary appeal.</li>
                <li><b>Famous:</b> Names inspired by legendary Egyptian figures, gods, and rulers.</li>
            </ul>
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-4">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 3: Click <b>Generate</b> Names
              </h3>
              <p>
              Press the <b>Generate</b> button to create a list of unique names instantly. Each name is thoughtfully crafted to reflect the essence of Egyptian culture.
              </p>
            </div>
            <div className="py-[10px] flex flex-col gap-2">
              <h3 className="sm:text-[20px] text-[16px] font-semibold">
              Step 4: Review the Names and Their Meanings
              </h3>
              <p>
              Browse through the generated names and their meanings. Take your time to find the one that resonates most with your needs.
              </p>
              <p>
              It’s that simple. No confusion, no wasted time—just great results tailored to your preferences every time.
              </p>
            </div>
          </div>
          <div className="sm:w-[47%] relative ">
            <img
              src="male-egyptian-name-generator.jpg"
              alt="Egyptian Name Generator"
              className="w-[300px] my-[20px] h-[360px] sm:absolute sm:top-0 sm:left-0 rounded-[16px]"
            />
            <img
              src="famle-egyptian-name-generator.webp"
              alt="Egyptian Name Generator"
              className="w-[300px] h-[360px] my-[20px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className="py-[100px]"
        style={{
          backgroundImage: 'url("/magical-pyramidjpg.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
          Related to Egyptian Name Generator
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

      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[36px] text-[22px] text-center sm:font-normal font-semibold">
          <b>Features of the Egyptian Name Generator Tool</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-bold">
           <b>Authentic Name Suggestions</b>
            </h3>
            <p className="text-[#343a40]">
            Every name is inspired by Egyptian history and culture. The tool ensures authenticity by reflecting traditional naming conventions and symbolic meanings.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
          <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-bold">
           <b>Customizable Options</b>
            </h3>
            <p className="text-[#343a40]">
            You can customize your results to suit your specific needs. 
            For a personalized experience, you can choose from gender options (male, female) and name types (ancient, modern, or famous).
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
          <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-bold">
           <b>Fast and Reliable Results</b>
            </h3>
            <p className="text-[#343a40]">
            With just one click, you can get instant name suggestions. The tool is designed to provide accurate and meaningful options without any delays.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
           <b>Names with Deep Meaning</b>
            </h3>
            <p className="text-[#343a40]">
            Each name comes with a backstory, offering insight into its historical or cultural significance. This adds depth and context to every choice.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
            <b>User-Friendly Interface</b>
            </h3>
            <p className="text-[#343a40]">
            The tool is easy to navigate, making the process seamless for everyone. Clear steps and a simple design ensure a hassle-free experience.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <h3 className="sm:text-[22px] text-[16px] sm:font-normal font-semibold ">
            <b>Perfect for Diverse Uses</b>
            </h3>
            <p className="text-[#343a40]">
            This tool offers names for any purpose, whether you’re naming a character, a project, or a creative work. It’s ideal for writers, gamers, and anyone seeking inspiration.
            </p>
          </div>
          
        </div>
      </div>
      <div
        className="w-[100%] bg-white"
        // style={{ backgroundColor: "rgb(23 ,162 ,184, 0.6)" }}
      >
        <div className="w-[80%] mx-auto pb-[20px]">
          <div className="py-[50px]">
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Egyptian Name Ideas for Different Uses
            </h2>           
            <br />
            <h3 className="text-left text-[22px] font-medium text-[#343a40] pb-[]">
            By Gender: Male, Female Names
            </h3>
            <hr />
            <p className="text-left mt-[30px] text-[#343a40]">
            Gender-specific names make it easier to find the right fit. Strong male names convey power and legacy, while elegant female names exude beauty and grace. 
            Neutral names offer versatility, making them ideal for diverse characters or projects.
            </p>
            <p className="text-left mt-[10px] text-[#343a40]">
            This tool ensures precision by tailoring names to your chosen gender. 
            Whether you’re designing a heroic figure or a mysterious character, you’ll find names that match your vision perfectly.
            </p>
            <br />
            <h3 className="text-left text-[22px] font-medium text-[#343a40] pb-[]">
            By Era: Ancient vs. Modern Names
            </h3>
            <br />  
            <hr />
            <p className="text-left mt-[10px] text-[#343a40]">
            Ancient Egyptian names bring history and tradition to life. They echo the grandeur of pharaohs and the wisdom of priests, making them timeless choices.
         
            Modern Egyptian names combine cultural roots with contemporary flair. These names are perfect for creative projects that need a fresh yet meaningful touch.
            </p>
            <br />
            <h3 className="text-left text-[22px] font-medium text-[#343a40] pb-[]">
            By Inspiration: Famous and Mythological Names
            </h3>
            <br />  
            <hr />
            <p className="text-left mt-[10px] mb-[30px] text-[#343a40]">
            Famous Egyptian names, like Cleopatra or Ramses, add a legendary quality to your work. They connect to historical icons and create an immediate sense of importance.
            Mythological names draw from Egypt’s rich pantheon of gods and legends. Names like Isis or Anubis carry charisma and depth, enhancing any story or concept.
            </p>
            <br />
            <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
            Egyptian Names: History, Meaning, and Inspiration
            </h2>           
            <br />
            <hr />
            <p className="text-left mt-[10px] text-[#343a40]">
            It’s fascinating how Egyptian names tell stories. Every name holds meaning and is often linked to gods, nature, or virtues. 
            This makes them rich in character and depth.
            Understanding naming conventions adds authenticity to your choices. 
            Names often reflect social roles, beliefs, or family heritage. 
            Discover the beauty behind each name’s purpose.
            </p>
            <p className="text-left mt-[10px] text-[#343a40]">
            These names also offer inspiration for creative projects. Whether you’re crafting a character for a story or exploring ancient cultures, 
            Egyptian names bring historical significance and timeless beauty. Their connection to mythology and traditions makes them unforgettable.
            </p>
          </div>
          <div className="py-[50px]">
  <h2 className="text-center text-[36px] font-medium text-[#343a40] pb-[]">
    List of Victorian Names By Genders and Types
  </h2>           
  <br />
  <div className="overflow-x-auto">
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">Gender</th>
          <th className="border border-gray-300 px-4 py-2">Type</th>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Meaning</th>
        </tr>
      </thead>
      <tbody>
        {/* Male - Ancient */}
        <tr>
          <td className="border border-gray-300 px-4 py-2">Male</td>
          <td className="border border-gray-300 px-4 py-2">Ancient</td>
          <td className="border border-gray-300 px-4 py-2">Albert</td>
          <td className="border border-gray-300 px-4 py-2">Noble and bright</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Male</td>
          <td className="border border-gray-300 px-4 py-2">Ancient</td>
          <td className="border border-gray-300 px-4 py-2">Frederick</td>
          <td className="border border-gray-300 px-4 py-2">Peaceful ruler</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Male</td>
          <td className="border border-gray-300 px-4 py-2">Ancient</td>
          <td className="border border-gray-300 px-4 py-2">Henry</td>
          <td className="border border-gray-300 px-4 py-2">Ruler of the home</td>
        </tr>
        {/* Male - Modern */}
        <tr>
          <td className="border border-gray-300 px-4 py-2">Male</td>
          <td className="border border-gray-300 px-4 py-2">Modern</td>
          <td className="border border-gray-300 px-4 py-2">Leo</td>
          <td className="border border-gray-300 px-4 py-2">Lion</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Male</td>
          <td className="border border-gray-300 px-4 py-2">Modern</td>
          <td className="border border-gray-300 px-4 py-2">Oliver</td>
          <td className="border border-gray-300 px-4 py-2">Olive tree or peace</td>
        </tr>
        {/* Add more male rows here */}

        {/* Female - Ancient */}
        <tr>
          <td className="border border-gray-300 px-4 py-2">Female</td>
          <td className="border border-gray-300 px-4 py-2">Ancient</td>
          <td className="border border-gray-300 px-4 py-2">Victoria</td>
          <td className="border border-gray-300 px-4 py-2">Victory</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Female</td>
          <td className="border border-gray-300 px-4 py-2">Ancient</td>
          <td className="border border-gray-300 px-4 py-2">Eleanor</td>
          <td className="border border-gray-300 px-4 py-2">Bright, shining one</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Female</td>
          <td className="border border-gray-300 px-4 py-2">Ancient</td>
          <td className="border border-gray-300 px-4 py-2">Margaret</td>
          <td className="border border-gray-300 px-4 py-2">Pearl</td>
        </tr>
        {/* Female - Modern */}
        <tr>
          <td className="border border-gray-300 px-4 py-2">Female</td>
          <td className="border border-gray-300 px-4 py-2">Modern</td>
          <td className="border border-gray-300 px-4 py-2">Amelia</td>
          <td className="border border-gray-300 px-4 py-2">Work or industrious</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Female</td>
          <td className="border border-gray-300 px-4 py-2">Modern</td>
          <td className="border border-gray-300 px-4 py-2">Lily</td>
          <td className="border border-gray-300 px-4 py-2">Symbol of purity and beauty</td>
        </tr>
        {/* Add more female rows here */}
      </tbody>
    </table>
  </div>
</div>

        </div>
      </div>
      <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
        <div>
          <h2 className="sm:text-[32px] text-[22px] text-center sm:font-normal font-semibold">
          <b>Why Egyptian Names Matter</b>
          </h2>
        </div>
        <hr />
        <div className="py-[20px]">
          <div className="py-[10px] flex flex-col gap-2">
            <p>
            Egyptian names are more than just words—they carry deep symbolism and meaning, often linked to identity, heritage, and culture. 
            They reflect a connection to a rich history and offer insight into the values of the time.
            </p>
          </div>
          <div className="py-[10px] flex flex-col gap-2">
            <p>
            A meaningful name does more than define a character or project—it creates a lasting impression. 
            It adds depth, authenticity, and relevance, ensuring that your character or idea resonates with your audience. 
            By using an Egyptian name, you honor history and bring cultural significance into the present, making your work truly stand out.
            </p>
          </div>
          
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
          className="flex items-center flex-col gap-6 px-4"
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
          <a href="https://www.nameideagenerator.com/contact-us">
  <button className="bg-white text-black text-[20px] px-[20px] py-[16px] rounded-[10px] font-semibold">
    Request
  </button>
</a>
          </div>
        </motion.div>
      </div>
      <FAQSection Q1={Q1} A1={A1} Q2={Q2} A2={A2} Q3={Q3} A3={A3} Q4={Q4} A4={A4} Q5={Q5} A5={A5}/>
      <Footer />
    </motion.div>
  );
};

export default EgyptianNameGenerator;
