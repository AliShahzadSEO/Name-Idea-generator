"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
const demonNames = [
    { name: "Zeus", detail: "King of the gods.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Apollo", detail: "God of the sun and music.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Ares", detail: "God of war.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Hermes", detail: "Messenger of the gods.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Poseidon", detail: "God of the sea.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Hades", detail: "God of the underworld.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Hephaestus", detail: "God of fire and blacksmiths.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Dionysus", detail: "God of wine and revelry.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Pan", detail: "God of the wild and shepherds.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Orpheus", detail: "Legendary musician and poet.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Atlas", detail: "Titan condemned to hold up the sky.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Prometheus", detail: "Titan who stole fire for humanity.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Eros", detail: "God of love.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Theseus", detail: "Hero known for slaying the Minotaur.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Achilles", detail: "Hero of the Trojan War.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Perseus", detail: "Slayer of Medusa.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Ajax", detail: "Hero known for his role in the Trojan War.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Heracles", detail: "Hero famous for his Twelve Labors.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Aeneas", detail: "Trojan hero and ancestor of the Romans.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Cadmus", detail: "Founder of Thebes.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Orestes", detail: "Avenger of his father's murder.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Tantalus", detail: "King punished in the underworld.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Menelaus", detail: "King of Sparta, husband of Helen.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Phaethon", detail: "Son of the sun god Helios.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Adonis", detail: "God of beauty and desire.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Zephyr", detail: "God of the west wind.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Ganymede", detail: "Cupbearer to the gods.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Hermod", detail: "Messenger of the gods in Norse mythology.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Argonaut", detail: "Member of Jason's expedition for the Golden Fleece.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Chiron", detail: "Wise centaur and healer.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Sisyphus", detail: "King punished to roll a boulder up a hill for eternity.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Phobos", detail: "Personification of fear and terror.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Deimos", detail: "Personification of dread and panic.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Aeolus", detail: "God of the winds.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Panthera", detail: "Panther-like mythical creature.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Triton", detail: "Messenger of the sea.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Lycurgus", detail: "King of the Edoni, punished by Dionysus.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Alcides", detail: "Another name for Heracles.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Thyestes", detail: "Tragic king known for his cannibalistic feast.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Asclepius", detail: "God of medicine and healing.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Pylades", detail: "Friend of Orestes, known for his loyalty.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Nereus", detail: "Old man of the sea, father of the Nereids.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Bacchus", detail: "Roman equivalent of Dionysus, god of wine.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Hercules", detail: "Roman equivalent of Heracles, known for his strength.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Euryalus", detail: "One of the Greek warriors in the Trojan War.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Epimetheus", detail: "Titan who accepted Pandora.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Polyphemus", detail: "Cyclops encountered by Odysseus.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Cassandra", detail: "Prophetess cursed to never be believed.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Eteocles", detail: "Son of Oedipus and king of Thebes.", status: false, gender: "male", type: "mythical_greek_name" },
    { name: "Aphrodite", detail: "Goddess of love and beauty.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Athena", detail: "Goddess of wisdom and war.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Hera", detail: "Queen of the gods and goddess of marriage.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Artemis", detail: "Goddess of the hunt and the moon.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Demeter", detail: "Goddess of the harvest and agriculture.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Hestia", detail: "Goddess of the hearth and home.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Persephone", detail: "Goddess of spring and queen of the underworld.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Medusa", detail: "Gorgon with snakes for hair and a gaze that turns people to stone.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Eurydice", detail: "Wife of Orpheus, who tried to rescue her from the underworld.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Andromeda", detail: "Princess saved by Perseus from a sea monster.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Cassiopeia", detail: "Queen of Ethiopia, mother of Andromeda.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Hecate", detail: "Goddess of magic and witchcraft.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Iris", detail: "Goddess of the rainbow and messenger of the gods.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Eos", detail: "Goddess of the dawn.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Theia", detail: "Titaness of sight and the shining light of the heavens.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Calliope", detail: "Muse of epic poetry.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Melpomene", detail: "Muse of tragedy.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Clio", detail: "Muse of history.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Thalia", detail: "Muse of comedy and pastoral poetry.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Terpsichore", detail: "Muse of dance and choral song.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Nyx", detail: "Goddess of the night.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Leto", detail: "Mother of Apollo and Artemis.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Clytemnestra", detail: "Wife of Agamemnon, known for avenging her daughter.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Psyche", detail: "Mortal woman who became the goddess of the soul.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Eris", detail: "Goddess of discord and strife.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Hebe", detail: "Goddess of youth.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Nemesis", detail: "Goddess of retribution.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Atalanta", detail: "Heroine known for her hunting skills and speed.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Hesiod", detail: "Ancient Greek poet and author of 'Theogony.'", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Eurynome", detail: "Titaness and goddess of the sea.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Charis", detail: "One of the Graces, goddess of charm and beauty.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Rhea", detail: "Titaness, mother of the Olympian gods.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Ariadne", detail: "Princess who helped Theseus escape the Labyrinth.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Antigone", detail: "Daughter of Oedipus, known for her defiance.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Hesperides", detail: "Nymphs of the evening and the golden apples.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Echidna", detail: "Monster and mother of many mythical creatures.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Themis", detail: "Titaness of divine law and order.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Alecto", detail: "One of the Furies, goddesses of vengeance.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Tisiphone", detail: "One of the Furies, avenger of murder.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Megaera", detail: "One of the Furies, goddess of jealousy and envy.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Eudora", detail: "One of the Oceanids, daughter of Oceanus.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Cleo", detail: "Short form of Cleopatra, meaning 'glory of the father.'", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Eudocia", detail: "Meaning 'good will,' used by various historical figures.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Dione", detail: "Titaness and mother of Aphrodite by Zeus.", status: false, gender: "female", type: "mythical_greek_name" },
      { name: "Alexios", detail: "Defender of the people.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Leonidas", detail: "Famous Spartan king and hero of Thermopylae.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Perseus", detail: "Hero known for slaying Medusa.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Nikos", detail: "Victory, derived from Nike.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Dimitrios", detail: "Follower of Demeter.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Theodore", detail: "Gift of God.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Thanos", detail: "Immortal.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Aristotle", detail: "Philosopher and teacher of Alexander the Great.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Phaedrus", detail: "Ancient Greek orator and philosopher.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Kostas", detail: "Short form of Konstantinos, meaning 'steadfast.'", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Achilles", detail: "Hero of the Trojan War, known for his heel.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Aegeus", detail: "King of Athens and father of Theseus.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Hercules", detail: "Roman equivalent of Heracles, known for his strength.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Elias", detail: "Greek form of Elijah, meaning 'Yahweh is my God.'", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Jason", detail: "Leader of the Argonauts.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Odysseus", detail: "Hero of Homer's 'Odyssey.'", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Ilias", detail: "Greek form of Elijah, similar to Elias.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Socrates", detail: "Philosopher known for his Socratic method.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Plato", detail: "Philosopher and student of Socrates.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Cyrus", detail: "Ancient Persian name, also used in Greece.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Zephyr", detail: "God of the west wind.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Orion", detail: "Giant huntsman placed among the stars.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Dorian", detail: "Ancient Greek ethnic group or musical mode.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Agamemnon", detail: "King of Mycenae and leader in the Trojan War.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Eros", detail: "God of love.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Hades", detail: "God of the underworld.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Demetrius", detail: "Follower of Demeter.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Homer", detail: "Epic poet attributed with 'The Iliad' and 'The Odyssey.'", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Sophocles", detail: "Playwright known for tragedies such as 'Oedipus Rex.'", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Themistocles", detail: "Athenian politician and general.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Hippocrates", detail: "Father of medicine.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Archimedes", detail: "Mathematician and inventor.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Aristides", detail: "Famous Athenian statesman and general.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Polycarp", detail: "Early Christian martyr and bishop.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Pallas", detail: "Titan associated with wisdom or a name for Athena.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Ajax", detail: "Hero known for his role in the Trojan War.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Ares", detail: "God of war.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Hermes", detail: "Messenger of the gods and god of commerce.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Hector", detail: "Prince of Troy and hero in the Trojan War.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Gorgias", detail: "Sophist and rhetorician.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Sisyphus", detail: "King punished to roll a boulder up a hill for eternity.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Pericles", detail: "Prominent and influential Athenian statesman.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Eudorus", detail: "Friend of Achilles in the Trojan War.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Eudoxus", detail: "Ancient Greek astronomer and mathematician.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Philoxenos", detail: "Ancient Greek poet and dramatist.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Nereus", detail: "Old man of the sea and father of the Nereids.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Aeneas", detail: "Trojan hero and ancestor of the Romans.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Acanthus", detail: "Plant associated with ancient Greek architecture.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Arion", detail: "Famous musician and poet.", status: false, gender: "male", type: "classical_greek_name" },
      { name: "Ariadne", detail: "Princess of Crete, known for her role in the Minotaur legend.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Calliope", detail: "Muse of epic poetry.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Daphne", detail: "Nymph transformed into a laurel tree.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Elena", detail: "The name of Helen of Troy, renowned for her beauty.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Eurydice", detail: "Wife of Orpheus, who tried to rescue her from the underworld.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Penelope", detail: "Wife of Odysseus, known for her fidelity.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Thalia", detail: "Muse of comedy and pastoral poetry.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Clio", detail: "Muse of history.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Cassandra", detail: "Prophetess cursed never to be believed.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Andromeda", detail: "Princess saved by Perseus from a sea monster.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Phaedra", detail: "Wife of Theseus, known for her tragic story.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Helen", detail: "The face that launched a thousand ships.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Medea", detail: "Sorceress and wife of Jason, known for her vengeance.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Antigone", detail: "Daughter of Oedipus, known for her defiance.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Persephone", detail: "Goddess of spring and queen of the underworld.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Aphrodite", detail: "Goddess of love and beauty.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Atalanta", detail: "Heroine known for her hunting skills and speed.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Eirene", detail: "Goddess of peace.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Themis", detail: "Titaness of divine law and order.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Eudocia", detail: "Meaning 'good will,' used by various historical figures.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Hecuba", detail: "Queen of Troy and wife of Priam.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Selene", detail: "Goddess of the moon.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Chloe", detail: "Goddess of fertility and growth.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Io", detail: "Priestess of Hera transformed into a cow.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Hera", detail: "Queen of the gods and goddess of marriage.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Lydia", detail: "Name of a region and associated with a high status.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Phoebe", detail: "Titaness associated with the moon and intellect.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Rhea", detail: "Titaness, mother of the Olympian gods.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Nike", detail: "Goddess of victory.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Cybele", detail: "Mother goddess of nature and fertility.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Aspasia", detail: "Companion of Pericles and a prominent figure in Athens.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Hestia", detail: "Goddess of the hearth and home.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Erosia", detail: "Variation of Eros, goddess of love.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Antheia", detail: "Goddess of flowers and flowery wreaths.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Calypso", detail: "Nymph who detained Odysseus.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Melania", detail: "Meaning 'dark,' used in Greek mythology.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Artemis", detail: "Goddess of the hunt and the moon.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Nymphe", detail: "Nymph or goddess of nature.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Dione", detail: "Titaness and mother of Aphrodite by Zeus.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Iris", detail: "Goddess of the rainbow and messenger of the gods.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Theodora", detail: "Meaning 'gift of God,' used in various historical contexts.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Amphitrite", detail: "Goddess of the sea and wife of Poseidon.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Galatea", detail: "Nymph loved by Polyphemus, the Cyclops.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Cleo", detail: "Short form of Cleopatra, meaning 'glory of the father.'", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Arete", detail: "Virtue or excellence, often used in classical literature.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Chrysanthe", detail: "Meaning 'golden flower,' used in Greek mythology.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Cyra", detail: "Meaning 'sun' or 'throne,' used in various Greek contexts.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Helena", detail: "Another form of Helen, renowned for her beauty.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Elpis", detail: "Goddess of hope.", status: false, gender: "female", type: "classical_greek_name" },
      { name: "Andreas", detail: "Meaning 'manly' or 'brave.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Stavros", detail: "Meaning 'cross.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Christos", detail: "Meaning 'anointed one,' related to Christ.", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Vasilis", detail: "Meaning 'kingly' or 'royal.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Georgios", detail: "Meaning 'farmer' or 'earth worker.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Manolis", detail: "Diminutive of Emmanouil, meaning 'God is with us.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Kyriakos", detail: "Meaning 'of the Lord.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Alexandros", detail: "Meaning 'defender of the people.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Panos", detail: "Short form of Panagiotis, meaning 'all-holy.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Theodoros", detail: "Meaning 'gift of God.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Spiros", detail: "Short form of Spyros, meaning 'spirit.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Dimitris", detail: "Meaning 'follower of Demeter.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Antonis", detail: "Short form of Antonios, meaning 'priceless.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Nikolas", detail: "Meaning 'victory of the people.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Kostas", detail: "Short form of Konstantinos, meaning 'steadfast.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Leonidas", detail: "Famous Spartan king and hero of Thermopylae.", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Sotiris", detail: "Meaning 'savior.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Emmanuel", detail: "Meaning 'God is with us.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Haralambos", detail: "Meaning 'to shine with joy.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Lambros", detail: "Meaning 'bright' or 'radiant.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Giorgos", detail: "Another form of Georgios, meaning 'farmer.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Nikos", detail: "Short form of Nikolaos, meaning 'victory of the people.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Dionisis", detail: "Another form of Dionysios, meaning 'follower of Dionysus.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Filippos", detail: "Meaning 'friend of horses.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Achilles", detail: "Hero of the Trojan War, known for his heel.", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Ilias", detail: "Greek form of Elijah, meaning 'Yahweh is my God.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Kleon", detail: "Meaning 'glory' or 'fame.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Pavlos", detail: "Meaning 'small' or 'humble,' variant of Paulos.", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Theofilos", detail: "Meaning 'friend of God.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Argyrios", detail: "Meaning 'silver,' indicating wealth.", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Miltiadis", detail: "Famous for his role in the Battle of Marathon.", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Kiriakos", detail: "Meaning 'of the Lord.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Anastasios", detail: "Meaning 'resurrection.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Vasilios", detail: "Meaning 'kingly' or 'royal,' another form of Vasilis.", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Orestis", detail: "Meaning 'of the mountain,' associated with the mythology of Orestes.", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Simos", detail: "Meaning 'flat-nosed,' a rare name.", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Dionysios", detail: "Meaning 'follower of Dionysus.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Marios", detail: "Meaning 'male,' a variation of Mario.", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Themis", detail: "Titaness of divine law and order.", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Periklis", detail: "Meaning 'surrounded by glory.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Alexis", detail: "Meaning 'helper' or 'defender.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Vangelis", detail: "Meaning 'bringer of good news,' related to Evangelos.", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Haris", detail: "Meaning 'grace' or 'charm.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Mihalis", detail: "Meaning 'who is like God,' variation of Michael.", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Stelios", detail: "Short form of Stylianos, meaning 'pillar.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Aristeidis", detail: "Meaning 'the best.'", status: false, gender: "male", type: "modern_greek_name" },
      { name: "Elena", detail: "Meaning 'bright, shining light,' a variant of Helen.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Maria", detail: "Meaning 'sea of bitterness,' a widely used name.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Katerina", detail: "Meaning 'pure,' variant of Catherine.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Despina", detail: "Meaning 'lady' or 'mistress.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Sofia", detail: "Meaning 'wisdom,' a popular name.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Eleni", detail: "Meaning 'bright,' a variant of Helen.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Stavroula", detail: "Meaning 'of the cross,' derived from Stavros.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Anna", detail: "Meaning 'grace' or 'favor,' a classic name.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Niki", detail: "Meaning 'victory,' short form of Nikola.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Irene", detail: "Meaning 'peace.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Vasiliki", detail: "Meaning 'royal' or 'queenly,' related to Vasilis.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Kalliopi", detail: "Meaning 'beautiful voice.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Athina", detail: "Greek form of Athena, goddess of wisdom and war.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Margarita", detail: "Meaning 'pearl.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Zoe", detail: "Meaning 'life,' a popular name.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Paraskevi", detail: "Meaning 'preparation,' often used for girls born on Friday.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Calliope", detail: "Meaning 'beautiful voice,' associated with the muse of epic poetry.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Georgia", detail: "Meaning 'farmer' or 'earth worker,' feminine form of Georgios.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Dimitra", detail: "Meaning 'follower of Demeter,' the goddess of the harvest.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Efstathia", detail: "Meaning 'steadfast' or 'stable.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Vana", detail: "Short form of Evangelia, meaning 'bringer of good news.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Foteini", detail: "Meaning 'light,' derived from the Greek word 'phos.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Anastasia", detail: "Meaning 'resurrection.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Marianna", detail: "Combination of Maria and Anna, meaning 'sea of bitterness' and 'grace.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Irini", detail: "Another form of Irene, meaning 'peace.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Chrysa", detail: "Meaning 'golden' or 'golden-haired.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Penelope", detail: "Meaning 'weaver,' known from the Odyssey.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Ariadne", detail: "Meaning 'most holy,' associated with the Cretan mythology.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Amalia", detail: "Meaning 'hardworking' or 'industrious.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Theodora", detail: "Meaning 'gift of God.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Aspasia", detail: "Meaning 'welcome,' associated with Pericles' companion.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Hara", detail: "Meaning 'joy' or 'delight,' often used as a short form of Charalambos.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Elina", detail: "Meaning 'shining light,' variation of Elena.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Nikoleta", detail: "Meaning 'victory of the people,' feminine form of Nikolaos.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Agathi", detail: "Meaning 'good' or 'kind.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Dionysia", detail: "Meaning 'follower of Dionysus,' goddess of wine and revelry.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Lena", detail: "Short form of Eleonora, meaning 'light' or 'torch.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Vicky", detail: "Short form of Victoria, meaning 'victory.'", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Alexandra", detail: "Meaning 'defender of mankind,' feminine form of Alexander.", status: false, gender: "female", type: "modern_greek_name" },
      { name: "Pericles", detail: "Prominent Athenian statesman and general.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Solon", detail: "Athenian lawgiver and poet known for his reforms.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Pythagoras", detail: "Mathematician known for the Pythagorean theorem.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Socrates", detail: "Philosopher known for his contributions to ethics and epistemology.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Plato", detail: "Philosopher and student of Socrates, founder of the Academy in Athens.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Aristotle", detail: "Philosopher and student of Plato, known for his works in many fields including logic, metaphysics, and ethics.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Themistocles", detail: "Athenian general and statesman known for his role in the Persian Wars.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Archimedes", detail: "Mathematician and inventor known for his work in geometry, calculus, and mechanics.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Demosthenes", detail: "Orator and statesman known for his speeches against Macedonian expansion.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Thucydides", detail: "Historian known for his work 'History of the Peloponnesian War.'", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Sophocles", detail: "Playwright known for tragedies such as 'Oedipus Rex' and 'Antigone.'", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Eratosthenes", detail: "Mathematician and astronomer known for calculating the Earth's circumference.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Herodotus", detail: "Historian known as the 'Father of History' for his work 'Histories.'", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Hippocrates", detail: "Physician known as the 'Father of Medicine,' attributed with the Hippocratic Oath.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Anaxagoras", detail: "Philosopher known for his theory of nous (mind) and its role in the cosmos.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Pausanias", detail: "Geographer and traveler known for his work 'Description of Greece.'", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Eudoxus", detail: "Mathematician and astronomer known for his work on the theory of proportions.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Zeno", detail: "Philosopher known for his paradoxes and contributions to Stoicism.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Diogenes", detail: "Philosopher and ascetic known for his teachings of Cynicism.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Antisthenes", detail: "Philosopher and student of Socrates, known as one of the founders of Cynicism.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Aeschylus", detail: "Playwright known for his tragedies, including 'Oresteia.'", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Lysander", detail: "Spartan general known for his role in the Peloponnesian War.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Xenophon", detail: "Historian and soldier known for 'Anabasis' and 'Hellenica.'", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Plutarch", detail: "Biographer and essayist known for 'Parallel Lives.'", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Euclid", detail: "Mathematician known for his work 'Elements,' a fundamental textbook in geometry.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Hipparchus", detail: "Astronomer and mathematician known for his work on the precession of the equinoxes.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Apollonius", detail: "Mathematician known for his work on conic sections.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Theon", detail: "Mathematician and commentator on Euclid's 'Elements.'", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Aristarchus", detail: "Astronomer known for his heliocentric model of the solar system.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Callimachus", detail: "Poet and scholar known for his work at the Library of Alexandria.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Dionysius", detail: "Philosopher and historian known for his work on ancient Greece.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Strabo", detail: "Geographer known for his work 'Geography,' a major source of information about the ancient world.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Galen", detail: "Physician known for his influential works on medicine and anatomy.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Appian", detail: "Historian known for his 'Roman History,' covering the history of Rome and its provinces.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Diodorus", detail: "Historian known for his work 'Bibliotheca Historica,' a universal history.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Ptolemy", detail: "Astronomer and geographer known for his work 'Almagest' and 'Geographia.'", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Lycus", detail: "Geographer known for his work on the regions of ancient Greece.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Arrian", detail: "Historian known for his 'Anabasis of Alexander,' a key source on Alexander the Great.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Heraclitus", detail: "Philosopher known for his doctrine of change and the concept of the unity of opposites.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Sulla", detail: "Roman general and dictator, influential in late Republican Rome.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Philostratus", detail: "Author known for his works on Greek culture and biography.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Aretas", detail: "Known for his work in the field of philosophy and science.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Alexius", detail: "Philosopher known for his contributions to Neoplatonism.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Sergius", detail: "Historian and scholar known for his works on ancient Greece.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Palladius", detail: "Historian and scholar known for his historical works.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Nicias", detail: "Athenian general known for his role in the Peloponnesian War.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Timoleon", detail: "Statesman and general known for his role in the liberation of Sicily.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Theophilus", detail: "Philosopher and theologian known for his works on early Christian thought.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Democritus", detail: "Philosopher known for his atomic theory of the universe.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Antiochus", detail: "Philosopher known for his work in the field of ancient philosophy.", status: false, gender: "male", type: "historical_greek_name" },
      { name: "Aspasia", detail: "Companion of Pericles known for her intelligence and influence.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Harmonia", detail: "Goddess of harmony and concord.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Phryne", detail: "Famous courtesan known for her beauty and the trial where she was defended by Hypereides.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Phaedra", detail: "Character in Greek mythology known for her tragic love story.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Cleopatra", detail: "Queen of Egypt known for her political acumen and relationships with Julius Caesar and Mark Antony.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Thargelia", detail: "Famous courtesan and influential figure in ancient Greece.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Damaris", detail: "A prominent figure mentioned in the New Testament.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Euphrosyne", detail: "One of the Charites (Graces) in Greek mythology, symbolizing joy and mirth.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Melania", detail: "A name associated with a Christian saint known for her asceticism.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Kalliope", detail: "Muse of epic poetry in Greek mythology.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Hypatia", detail: "Philosopher and mathematician known for her work in Alexandria.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Zenobia", detail: "Queen of Palmyra known for her resistance against Rome.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Aelia", detail: "A common Roman name used during the classical period.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Agrippina", detail: "Roman empress known for her political influence in the Julio-Claudian dynasty.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Paulina", detail: "Roman name often associated with several historical figures.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Vesta", detail: "Goddess of the hearth, home, and family in Roman mythology.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Helena", detail: "Historical figure known as the mother of Constantine the Great.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Clytemenestra", detail: "Tragic figure in Greek mythology, wife of Agamemnon.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Eurydice", detail: "Mythological figure and wife of Orpheus, known for her tragic story.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Callista", detail: "Meaning 'most beautiful,' associated with a nymph transformed into a bear.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Hesiod", detail: "Famous poet known for his works 'Theogony' and 'Works and Days.'", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Nyssa", detail: "Historical figure and region known for its association with early Christianity.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Irene", detail: "Historical figure known for her role as Byzantine empress.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Aemilia", detail: "Roman name with historical significance in several prominent families.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Dione", detail: "Titaness associated with the oracle of Dodona in Greek mythology.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Myrina", detail: "Historical queen and figure in ancient Greek history.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Olympias", detail: "Mother of Alexander the Great, known for her influence in Macedonian politics.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Eudora", detail: "Historical figure associated with various figures in ancient Greece.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Lydia", detail: "Historical region and name associated with the Lydian kingdom in ancient Asia Minor.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Chryseis", detail: "Mythological figure associated with the Trojan War.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Eirene", detail: "Meaning 'peace,' associated with several historical figures in ancient Greece.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Agathe", detail: "Meaning 'good,' known for its association with various historical figures.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Sophronia", detail: "Historical name associated with virtue and wisdom.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Delphine", detail: "Meaning 'dolphin,' associated with the ancient Greek city of Delphi.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Artemisia", detail: "Queen and military leader known for her role in the Persian Wars.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Leontine", detail: "Meaning 'lioness,' associated with various historical figures.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Demetria", detail: "Name associated with the goddess Demeter and various historical figures.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Berenice", detail: "Historical name associated with several queens and princesses in ancient Greece.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Phyllis", detail: "Mythological figure known for her tragic love story.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Tullia", detail: "Roman name with historical significance in several prominent families.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Claudia", detail: "Roman name with historical significance, often associated with the Claudian family.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Athenais", detail: "Name associated with Athena, the goddess of wisdom and warfare.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Valeria", detail: "Roman name with historical significance, often associated with various prominent families.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Marcella", detail: "Roman name often associated with various historical figures and saints.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Juliana", detail: "Roman name associated with various historical figures and saints.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Sabrina", detail: "Name associated with mythological and historical figures.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Cassandra", detail: "Mythological figure known for her gift of prophecy and tragic story.", status: false, gender: "female", type: "historical_greek_name" },
      { name: "Livia", detail: "Roman name associated with various prominent figures in Roman history.", status: false, gender: "female", type: "historical_greek_name" },
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
const Category2 = [
    {
        name: "Viking Name Generator",
        pic: "/vikings.jpg",
        link: "https://www.nameideagenerator.com/viking-name-generator",
    },
    {
        name: "Russian Name Generator",
        pic: "/Russian.webp",
        link: "https://www.nameideagenerator.com/russian-name-generator",
    },
    {
        name: "Norse Name Generator",
        pic: "/Norse.jpg",
        link: "https://www.nameideagenerator.com/norse-name-generator",
    },
    {
        name: "Greek Name Generator",
        pic: "greek.webp",
        link: "https://www.nameideagenerator.com/greek-name-generator",
    },
    ];

const GreekNameGenerator = () => {
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

    const bgImage = "/greek.webp"
    const context = " Greek Name Generator"

    const Q1 = "What is a Greek Name Generator?"

    const A1 = 'AIt is an online tool that creates names based on ancient Greek culture, mythology, and history. You can use it for stories, games, or even as a unique online username.'
    
    const Q2 = "Can I Choose Between Male and Female Greek Names?"
    
    const A2 = 'Yes, the tool lets you generate both. You can filter based on gender and mythology type. It works well for fantasy games and role-playing characters.'
    
    const Q3 = "Are the Names Based on Real Mythology?"
    
    const A3 = "Many of the generated names are inspired by real gods, warriors, and historical figures. Others are constructed using Greek suffixes and prefixes to maintain authenticity."
    
    const Q4 = "Will I Get Unique Greek Names?"
    
    const A4 = "You should expect fresh names every time. Each list is algorithmically crafted, offering distinct results with every click. No repeats, no filler."
    
    const Q5 = "Can I Use These Names for My Baby or Business?"
    
    const A5 = "Absolutely! While many users apply these names in games or stories, they can also be used for babies, pets, or even brands—especially if you're aiming for something meaningful with a classical touch. "

    return (
        <motion.div
            initial={{ opacity: 0, x: 1200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-[#f8f9fa] "
        >
            <HeroSection bgImage={bgImage} context={context} />
            <div className="w-[90%] my-[50px] bg-white mx-auto rounded-[10px] border border-solid shadow-lg">
                <div className="w-[95%] mx-auto py-[50px]">
                    <div>
                    <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
    <ol className="list-none p-0 inline-flex">
      <li className="flex items-center">
        <a href="/" className="hover:underline text-[#343a40]">Home</a>
        <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      </li>
      <li className="flex items-center">
        <a href="/categories/cultural-and-historical" className="hover:underline text-[#343a40]">Cultural and Historical Names</a>
      </li>
      <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 19l7-7-7-7"></path>
        </svg>
      <li className="flex items-center">
        <a href="/greek-name-generator" className="hover:underline text-[#343a40]">Greek Name Generator</a>
      </li>
    </ol>
  </nav>
                        <h2 className="sm:text-[48px] text-[24px] text-center text-[#343a40]">
                            Random Greek Name Generator With Meaning
                        </h2>
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
                        <p className="text-center text-[#343a40]">Types of Greek Names</p>
                        <select
                            className="w-[100%] border border-solid text-[#343a40] rounded-[5px] py-[10px] sm:px-[5px] px-[10px]"
                            id="type"
                            value={selectedType}
                            onChange={handleDemonTypeChange}
                        >
                            <option value="">Random</option>
                            <option value="mythical_greek_name">Mythical</option>
                            <option value="classical_greek_name">Classical </option>
                            <option value="modern_greek_name">Modern</option>
                            <option value="historical_greek_name">Historical</option>

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
                          Generate Authentic Greek Name Ideas That Resonate with Power
                        </h2>
                        <hr />
                        <p className="text-center mt-[30px] py-[10px] text-[#343a40]">
                        You’ve landed in the right place if you need ancient Greek names that strike with history and power. 
                        Our Greek Name Generator is built to help you find the perfect name rooted in mythology, culture, and timeless storytelling.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                         Whether you're crafting a hero for your novel or hunting for a fantasy role-playing name, 
                         this generator brings authentic Greek name ideas straight to your screen. It gives you a list of names tailored to your style, tone, or vibe—all in seconds.
                        </p>
                        <p className="text-center py-[10px] text-[#343a40]">
                          You don’t need to scroll endless name lists anymore. Let’s get you a name worthy of Mount Olympus.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto text-[#343a40] my-[50px]">
                <div>
                    <h2 className="sm:text-[36px] text-[28px] text-center">
                     How to Use the Greek Name Generator?
                    </h2>
                    <p className="sm:text-[16px] text-[16px] text-center">
                    It is important to know how the Greek Name Generator tool works before you dive in. You’ll get your unique Greek names in three quick steps.
                    </p>
                </div>
                <hr />
                <div className="py-[20px] flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-[60%]">
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold">
                            Step 1: Launch the Tool
                            </h3>
                            <p>
                             Head to the Greek Name Generator section on our website. The tool opens instantly.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-2">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold">
                            Step 2: Choose Preferences
                            </h3>
                            <p>
                             You can select name style, gender, and theme. Choose male Greek names or go for female options with mythological flair.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold ">
                            Step 3: Generate Names
                            </h3>
                            <p>
                             Click “Generate” and explore your list. Scroll through until a name catches your eye. Use it as is—or let it spark your own version.
                            </p>
                        </div>
                        <div className="py-[10px] flex flex-col gap-4">
                            <h3 className="sm:text-[24px] text-[18px] font-semibold ">
                            Step 4: Review Names and Their Meanings
                            </h3>
                            <p>
                            The generated names will appear on your screen. You can hover over each name to see detailed information, including its meaning and any cultural or historical significance.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[40%] relative ">
                        <img
                            src="greek1.avif"
                            alt="Greek Name Generator | Random Greek Name Generator With Meaning"
                            className="w-[280px] my-[10px] h-[340px] sm:absolute sm:top-0 sm:left-20 rounded-[16px]"
                        />
                        <img
                            src="greek2.avif"
                            alt="Greek Name Generator | Random Greek Name Generator With Meaning"
                            className="w-[280px] h-[340px] my-[-40px] sm:absolute sm:bottom-0 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="py-[100px]"
                style={{
                    backgroundImage: 'url("/greek name generator bg.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <p className="text-[28px] font-semibold py-[16px] w-[80%] mx-auto text-white">
                    Related to Greek Name Generator
                </p>
                <div className="w-[80%] mx-auto grid sm:grid-cols-4 grid-cols-1 gap-2">
                    {Category2.map((item, index) => (
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
                      Why Should You Use the Greek Name Generator?
                    </h2>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                     Greek names carry centuries of legacy. Our tool helps you harness that strength for your creative projects. Here’s what makes it essential:
                    </p>
                    <p class="sm:text-[16px] text-[22px] font-semibold">
                    Here’s what makes it essential:
                    </p>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-[60%]">
                        <hr class="my-4" />
                        <div class="py-[10px]">
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold">
                                Built for Storytelling
                                </h3>
                                <p>
                               Writers and gamers need names with weight. The <strong>Greek Name Generator</strong> gives you that edge. 
                               Whether it's Greek mythology names for divine warriors or gentle names for historical fiction, you’ll find the right match.
                               <br />
                               A recent study in character-driven storytelling showed that readers remember names 23% more when those names reflect cultural authenticity. 
                               Why not use that to your advantage?
                                </p>
                            </div>
                            <div class="py-[5px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                Simple, Fast, and Free
                                </h3>
                                <p>
                                You should never waste time on complicated tools. This generator is smooth, quick, and absolutely free. Just enter your preferences and get your list. 
                                <br />
                                You don’t need an account. You don’t need to pay. It’s just you and the ancient world—reborn in seconds.

                                </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                               Customization Options
                                </h3>
                                <p>
                                It is useful to control your name list. Our Greek character name generator gives you options like:
                                <ul>
                                    <br />
                                  <strong>  <li><em>Gender</em></li>
                                    <li><em>Mythological tone</em></li>
                                    <li><em>Style intensity</em></li>
                                    <li><em>Unique vs. traditional choices</em></li></strong>  
                                </ul>       
                                That makes it easy to craft Greek fantasy names that align with your project or game setting.
                                 </p>
                            </div>
                            <div class="py-[10px] flex flex-col gap-2">
                                <h3 class="sm:text-[24px] text-[18px] sm:font-normal font-semibold ">
                                Inspired by Myth and History
                                </h3>
                                <p>
                                Names like “Athena,” “Zephyros,” and “Dion” don't appear randomly. 
                                Our Greek Name Generator pulls from classic patterns and real historical roots. Each name mirrors ancient rhythm and tone.
                                <br />
                                Just like our Elf Name Generator, this tool focuses on detail and creativity.                          
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div class="sm:w-[40%] relative">
                        <img
                            src="greek2.jpg"
                            alt="Greek Name Generator | Random Greek Name Generator With Meaning"
                            class="w-[300px] my-[30px] h-[350px] sm:absolute sm:top-30 sm:left-0 rounded-[16px]"
                        />
                        <img
                            src="Hera.jpg"
                            alt="Greek Name Generator | Random Greek Name Generator With Meaning"
                            class="w-[300px] h-[350px] sm:absolute sm:bottom-20 sm:right-0 rounded-[16px]"
                        />
                    </div>
                </div>
            </div>
<section class="px-4 py-8 bg-gray-50">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Types of Greek Names You Can Generate</h2>
        <p class="text-sm text-gray-700 mb-2 px-[20%] text-center pb-5">Our Greek Name Generator offers a wide variety of name types, inspired by different aspects of ancient Greek culture, 
        mythology, and fantasy storytelling. Here’s what you can explore:</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-2xl shadow p-5">
        <h3 class="text-lg font-semibold mb-2">Mythological Greek Names</h3>
        <p class="text-sm text-gray-700 mb-2">Inspired by gods, goddesses, titans, and mythic creatures. Perfect for fantasy games and divine characters.</p>
        <p class="text-sm text-gray-500 italic">Examples: Aetherion, Nyxara, Zephyros, Thalassia</p>
      </div>

      <div class="bg-white rounded-2xl shadow p-5">
        <h3 class="text-lg font-semibold mb-2">Historical Greek Names</h3>
        <p class="text-sm text-gray-700 mb-2">Rooted in real ancient Greek figures—warriors, philosophers, kings, and queens. Great for fiction or educational stories.</p>
        <p class="text-sm text-gray-500 italic">Examples: Leonidas, Callista, Demetrios, Xanthe</p>
      </div>

      <div class="bg-white rounded-2xl shadow p-5">
        <h3 class="text-lg font-semibold mb-2">Fantasy Greek Names</h3>
        <p class="text-sm text-gray-700 mb-2">Invented names using Greek-style syllables for a mystical vibe. Ideal for RPGs, novels, or world-building.</p>
        <p class="text-sm text-gray-500 italic">Examples: Solonix, Orystheia, Kratosian, Elyseidon</p>
      </div>

      <div class="bg-white rounded-2xl shadow p-5">
        <h3 class="text-lg font-semibold mb-2">Warrior-Inspired Names</h3>
        <p class="text-sm text-gray-700 mb-2">Channel strength, courage, and battle readiness—great for heroic characters and avatars.</p>
        <p class="text-sm text-gray-500 italic">Examples: Theron, Alectra, Damaris, Pyrrhos</p>
      </div>

      <div class="bg-white rounded-2xl shadow p-5">
        <h3 class="text-lg font-semibold mb-2">Elegant & Noble Names</h3>
        <p class="text-sm text-gray-700 mb-2">Graceful and poetic names suitable for goddesses, royalty, or magical beings.</p>
        <p class="text-sm text-gray-500 italic">Examples: Eirene, Lysandra, Theon, Meliora</p>
      </div>
    </div>
  </div>
</section>

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
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="flex items-center flex-col gap-6">
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
          <a href="https://www.nameideagenerator.com/contact-us" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-black text-[20px] px-[40px] py-[8px] rounded-[10px] font-semibold">
                Request
            </button>
           </a>
        </div>
                </motion.div>
            </div>

            <FAQSection Q1={Q1} A1={A1} Q2={Q2} A2={A2} Q3={Q3} A3={A3} Q4={Q4} A4={A4} Q5={Q5} A5={A5}/>
            <Footer  />
        </motion.div>
    );
};

export default GreekNameGenerator;
