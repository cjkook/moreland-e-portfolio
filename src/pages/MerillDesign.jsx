// Task-centered approach: The problem-centered approach emphasizes
//  designing instruction around authentic, real-world problems that
//  learners are likely to encounter.
// This principle encourages learners to actively engage in
// problem-solving activities, fostering their critical thinking
// and problem-solving skills.

// Activation: The activation principle focuses on engaging
// learners' prior knowledge and experiences to create a
// foundation for new learning. It involves stimulating
// learners' curiosity, presenting real-world examples,
// and connecting new information to their existing knowledge.

// Demonstration: The demonstration principle emphasizes providing
//  clear models or examples that illustrate the desired learning
// outcomes. Demonstrations can be in the form of expert
// performances, simulations, or case studies. Learners observe
// these demonstrations to develop an understanding of how to
// perform the desired tasks.

// Application: The application principle emphasizes providing
// opportunities for learners to practice and apply their knowledge
// and skills in authentic contexts. It involves designing
// activities that require learners to actively apply what they
// have learned, solve problems, make decisions, and engage in
// realistic tasks.

// Integration: The integration principle focuses on promoting the
// transfer of knowledge and skills to new situations. It involves
// providing opportunities for learners to connect their learning
// to real-world contexts and apply it in meaningful ways.
// Integration can be achieved by presenting complex and authentic
// problems or scenarios that require learners to apply their
// learning in novel ways.
import { useState } from "react";
import cardsData from "../data/merill.json";
import SlideCard from "../components/SlideCard";

import arrayImage1 from "../assets/array.png";

export default function MerillDesign() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigate = (newIndex) => {
    if (newIndex >= 0 && newIndex < cardsData.cards.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div>
      <h1>Merrill's Five Principles of Instructional Design</h1>
      <SlideCard
        cardData={cardsData.cards[currentIndex]}
        currentIndex={currentIndex}
        totalCards={cardsData.cards.length}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
