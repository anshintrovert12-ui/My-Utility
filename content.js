
/* =========================================================
   CLASS 10 HUB — CONTENT DATABASE
   PART 1: SUBJECTS, CHAPTERS AND IMAGE REFERENCES
   Free static website — no API, no paid service.
   ========================================================= */

"use strict";

window.CLASS10_CONTENT = {
  meta: {
    name: "Class 10 Hub",
    tagline: "Your Personal Study Space",
    language: "English",
    developer: "Ansh Mishra",
    school: "Rainbow public School",
    role: "Student of Class 10th and a Web Developer",
    academicLevel: "Class 10",
    currency: "INR",
    paidServices: false
  },

  settings: {
    questionsPerChapter: {
      veryShort: 20,
      short: 10,
      long: 5
    },
    minimumFlashcardsPerChapter: 30,
    minimumChapterMCQs: 20,
    subjectMockTestMCQs: 80,
    mockTestTimerOnly: true,
    showAnswersAfterSubmission: true,
    wrongAnswerFeedback: "correct-option-only"
  },

  /*
   * Image paths are prepared here.
   * Add the real image files to these folders later.
   * Filenames must match the paths exactly.
   */
  imageRoot: "images/infographics/",

  subjects: [
    {
      id: "maths",
      name: "Mathematics",
      shortName: "Maths",
      icon: "📐",
      color: "blue",
      description: "Formulas, concepts and mathematical practice.",
      chapters: [
        "Real Numbers",
        "Polynomials",
        "Pair of Linear Equations in Two Variables",
        "Quadratic Equations",
        "Arithmetic Progressions",
        "Triangles",
        "Coordinate Geometry",
        "Introduction to Trigonometry",
        "Some Applications of Trigonometry",
        "Circles",
        "Areas Related to Circles",
        "Surface Areas and Volumes",
        "Statistics",
        "Probability"
      ]
    },

    {
      id: "science",
      name: "Science",
      shortName: "Science",
      icon: "🔬",
      color: "teal",
      description: "Physics, chemistry, biology and experiments.",
      chapters: [
        "Chemical Reactions and Equations",
        "Acids, Bases and Salts",
        "Metals and Non-metals",
        "Carbon and Its Compounds",
        "Life Processes",
        "Control and Coordination",
        "How Do Organisms Reproduce",
        "Heredity",
        "Light: Reflection and Refraction",
        "The Human Eye and the Colourful World",
        "Electricity",
        "Magnetic Effects of Electric Current",
        "Our Environment"
      ]
    },

    {
      id: "social-science",
      name: "Social Science",
      shortName: "Social Science",
      icon: "🌍",
      color: "violet",
      description: "History, geography, political science and economics.",
      sections: [
        {
          id: "history",
          name: "History",
          chapters: [
            "The Rise of Nationalism in Europe",
            "Nationalism in India",
            "The Making of a Global World",
            "The Age of Industrialisation",
            "Print Culture and the Modern World"
          ]
        },
        {
          id: "geography",
          name: "Geography",
          chapters: [
            "Resources and Development",
            "Forest and Wildlife Resources",
            "Water Resources",
            "Agriculture",
            "Minerals and Energy Resources",
            "Manufacturing Industries",
            "Lifelines of National Economy"
          ]
        },
        {
          id: "political-science",
          name: "Political Science",
          chapters: [
            "Power Sharing",
            "Federalism",
            "Gender, Religion and Caste",
            "Political Parties",
            "Outcomes of Democracy"
          ]
        },
        {
          id: "economics",
          name: "Economics",
          chapters: [
            "Development",
            "Sectors of the Indian Economy",
            "Money and Credit",
            "Globalisation and the Indian Economy",
            "Consumer Rights"
          ]
        }
      ],
      chapters: [
        "The Rise of Nationalism in Europe",
        "Nationalism in India",
        "The Making of a Global World",
        "The Age of Industrialisation",
        "Print Culture and the Modern World",
        "Resources and Development",
        "Forest and Wildlife Resources",
        "Water Resources",
        "Agriculture",
        "Minerals and Energy Resources",
        "Manufacturing Industries",
        "Lifelines of National Economy",
        "Power Sharing",
        "Federalism",
        "Gender, Religion and Caste",
        "Political Parties",
        "Outcomes of Democracy",
        "Development",
        "Sectors of the Indian Economy",
        "Money and Credit",
        "Globalisation and the Indian Economy",
        "Consumer Rights"
      ]
    },

    {
      id: "english",
      name: "English",
      shortName: "English",
      icon: "📘",
      color: "blue",
      description: "Literature, reading, grammar and writing skills.",
      sections: [
        {
          id: "first-flight",
          name: "First Flight",
          chapters: [
            "A Letter to God",
            "Nelson Mandela: Long Walk to Freedom",
            "Two Stories about Flying",
            "From the Diary of Anne Frank",
            "Glimpses of India",
            "Mijbil the Otter",
            "Madam Rides the Bus",
            "The Sermon at Benares",
            "The Proposal"
          ],
          poems: [
            "Dust of Snow",
            "Fire and Ice",
            "A Tiger in the Zoo",
            "How to Tell Wild Animals",
            "The Ball Poem",
            "Amanda!",
            "The Trees",
            "Fog",
            "The Tale of Custard the Dragon",
            "For Anne Gregory"
          ]
        },
        {
          id: "footprints-without-feet",
          name: "Footprints Without Feet",
          chapters: [
            "A Triumph of Surgery",
            "The Thief's Story",
            "The Midnight Visitor",
            "A Question of Trust",
            "Footprints Without Feet",
            "The Making of a Scientist",
            "The Necklace",
            "Bholi",
            "The Book That Saved the Earth"
          ]
        }
      ],
      chapters: [
        "A Letter to God",
        "Nelson Mandela: Long Walk to Freedom",
        "Two Stories about Flying",
        "From the Diary of Anne Frank",
        "Glimpses of India",
        "Mijbil the Otter",
        "Madam Rides the Bus",
        "The Sermon at Benares",
        "The Proposal",
        "Dust of Snow",
        "Fire and Ice",
        "A Tiger in the Zoo",
        "How to Tell Wild Animals",
        "The Ball Poem",
        "Amanda!",
        "The Trees",
        "Fog",
        "The Tale of Custard the Dragon",
        "For Anne Gregory",
        "A Triumph of Surgery",
        "The Thief's Story",
        "The Midnight Visitor",
        "A Question of Trust",
        "Footprints Without Feet",
        "The Making of a Scientist",
        "The Necklace",
        "Bholi",
        "The Book That Saved the Earth"
      ]
    },

    {
      id: "hindi",
      name: "Hindi",
      shortName: "Hindi",
      icon: "✍️",
      color: "orange",
      description: "Hindi literature, comprehension and writing practice.",
      courseOptions: [
        "Course A",
        "Course B"
      ],
      note: "The applicable Hindi course and prescribed books must be confirmed against the school's syllabus.",
      sections: [
        {
          id: "hindi-course-a",
          name: "Hindi Course A",
          chapters: [
            "क्षितिज भाग 2 — पाठ्यक्रम के अनुसार",
            "कृतिका भाग 2 — पाठ्यक्रम के अनुसार"
          ]
        },
        {
          id: "hindi-course-b",
          name: "Hindi Course B",
          chapters: [
            "स्पर्श भाग 2 — पाठ्यक्रम के अनुसार",
            "संचयन भाग 2 — पाठ्यक्रम के अनुसार"
          ]
        }
      ],
      chapters: [
        "Hindi Course A — Kshitij and Kritika",
        "Hindi Course B — Sparsh and Sanchayan",
        "Hindi Grammar and Writing"
      ]
    },

    {
      id: "it",
      name: "Information Technology",
      shortName: "IT",
      icon: "💻",
      color: "teal",
      description: "Employability skills and information technology skills.",
      courseCode: "402",
      sections: [
        {
          id: "employability-skills",
          name: "Part A — Employability Skills",
          chapters: [
            "Communication Skills - II",
            "Self-Management Skills - II",
            "ICT Skills - II",
            "Entrepreneurial Skills - II",
            "Green Skills - II"
          ]
        },
        {
          id: "subject-specific-skills",
          name: "Part B — Subject Specific Skills",
          chapters: [
            "Digital Documentation (Advanced)",
            "Electronic Spreadsheet (Advanced)",
            "Database Management System",
            "Maintain Healthy, Safe and Secure Working Environment"
          ]
        }
      ],
      chapters: [
        "Communication Skills - II",
        "Self-Management Skills - II",
        "ICT Skills - II",
        "Entrepreneurial Skills - II",
        "Green Skills - II",
        "Digital Documentation (Advanced)",
        "Electronic Spreadsheet (Advanced)",
        "Database Management System",
        "Maintain Healthy, Safe and Secure Working Environment"
      ]
    }
  ],

  /*
   * Detailed learning content will be added in the next parts.
   * Do not treat an empty entry as a completed chapter.
   */
  chapterContent: {},

  /*
   * Actual infographic image references will be added as
   * image files are created and uploaded to GitHub.
   */
  infographicImages: {},

  /*
   * Used by other parts of the website to locate a subject.
   */
  getSubject(subjectId) {
    return this.subjects.find(subject => subject.id === subjectId) || null;
  },

  getChapters(subjectId) {
    const subject = this.getSubject(subjectId);
    return subject ? subject.chapters : [];
  },

  getChapterContent(subjectId, chapterName) {
    const key = `${subjectId}::${chapterName}`;
    return this.chapterContent[key] || null;
  },

  getInfographic(subjectId, chapterSlug) {
    const key = `${subjectId}::${chapterSlug}`;
    return this.infographicImages[key] || null;
  }
};
         
/* =========================================================
   CLASS 10 HUB — CONTENT DATABASE
   PART 2: SCIENCE CHAPTER CONTENT
   Append this part after Part 1.
   ========================================================= */

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;

  if (!DB) {
    console.error(
      "Class 10 Hub content database is missing. Add Part 1 first."
    );
    return;
  }

  const scienceChapter = {
    subjectId: "science",
    chapterName: "Chemical Reactions and Equations",

    overview:
      "Learn how chemical reactions occur, how to represent them using chemical equations, and how to identify common reaction types.",

    keyPoints: [
      "A chemical reaction produces one or more new substances.",
      "Reactants are the starting substances in a reaction.",
      "Products are the substances formed in a reaction.",
      "A chemical equation represents a chemical reaction using symbols and formulae.",
      "A balanced chemical equation has the same number of atoms of each element on both sides.",
      "Balancing equations follows the law of conservation of mass.",
      "Common reaction types include combination, decomposition, displacement and double displacement.",
      "Oxidation involves the addition of oxygen or removal of hydrogen in common school-level examples.",
      "Reduction involves the removal of oxygen or addition of hydrogen in common school-level examples.",
      "Corrosion and rancidity are examples of oxidation-related processes."
    ],

    questions: {
      veryShort: [
        {
          q: "What is a chemical reaction?",
          a: "A chemical reaction is a process in which one or more substances change into new substances with different properties."
        },
        {
          q: "What are reactants?",
          a: "Reactants are the substances that take part in a chemical reaction."
        },
        {
          q: "What are products?",
          a: "Products are the new substances formed during a chemical reaction."
        },
        {
          q: "What is a chemical equation?",
          a: "A chemical equation represents a chemical reaction using chemical symbols and formulae."
        },
        {
          q: "What is a balanced chemical equation?",
          a: "A balanced chemical equation has an equal number of atoms of each element on both sides."
        },
        {
          q: "Which law is followed while balancing a chemical equation?",
          a: "The law of conservation of mass."
        },
        {
          q: "What is a combination reaction?",
          a: "A combination reaction is a reaction in which two or more substances combine to form a single product."
        },
        {
          q: "What is a decomposition reaction?",
          a: "A decomposition reaction is a reaction in which one compound breaks down into two or more simpler substances."
        },
        {
          q: "What is a displacement reaction?",
          a: "A displacement reaction is a reaction in which a more reactive element displaces a less reactive element from its compound."
        },
        {
          q: "What is a double displacement reaction?",
          a: "It is a reaction in which two compounds exchange ions to form new compounds."
        },
        {
          q: "What is oxidation?",
          a: "In common school-level examples, oxidation involves the addition of oxygen or removal of hydrogen."
        },
        {
          q: "What is reduction?",
          a: "In common school-level examples, reduction involves the removal of oxygen or addition of hydrogen."
        },
        {
          q: "What is corrosion?",
          a: "Corrosion is the gradual damage of a metal due to reactions with substances in its environment."
        },
        {
          q: "What is rusting?",
          a: "Rusting is the corrosion of iron in the presence of oxygen and moisture."
        },
        {
          q: "What is rancidity?",
          a: "Rancidity is the development of an unpleasant smell and taste in fats and oils due to oxidation."
        },
        {
          q: "What is a precipitate?",
          a: "A precipitate is an insoluble solid formed during a reaction in a solution."
        },
        {
          q: "What is an exothermic reaction?",
          a: "An exothermic reaction releases energy, usually in the form of heat."
        },
        {
          q: "What is an endothermic reaction?",
          a: "An endothermic reaction absorbs energy from its surroundings."
        },
        {
          q: "What does the symbol (s) mean in an equation?",
          a: "The symbol (s) indicates that a substance is in the solid state."
        },
        {
          q: "What does the symbol (aq) mean in a chemical equation?",
          a: "The symbol (aq) indicates that a substance is dissolved in water as an aqueous solution."
        }
      ],

      short: [
        {
          q: "Why should a chemical equation be balanced?",
          a: "A chemical equation must be balanced to satisfy the law of conservation of mass. Matter is neither created nor destroyed during a chemical reaction, so the number of atoms of each element must be equal on both sides."
        },
        {
          q: "Write the balanced equation for the reaction of magnesium with oxygen.",
          a: "The balanced equation is: 2Mg + O₂ → 2MgO. Magnesium reacts with oxygen to form magnesium oxide."
        },
        {
          q: "Explain a combination reaction with an example.",
          a: "In a combination reaction, two or more reactants combine to form a single product. For example: CaO + H₂O → Ca(OH)₂. Calcium oxide reacts with water to form calcium hydroxide."
        },
        {
          q: "Explain a decomposition reaction with an example.",
          a: "In a decomposition reaction, one compound breaks down into simpler substances. For example, on heating calcium carbonate: CaCO₃ → CaO + CO₂."
        },
        {
          q: "What is the difference between displacement and double displacement reactions?",
          a: "In a displacement reaction, one element replaces another element in a compound. In a double displacement reaction, two compounds exchange ions to form new compounds."
        },
        {
          q: "What is the difference between oxidation and reduction?",
          a: "Oxidation commonly involves the addition of oxygen or removal of hydrogen, whereas reduction commonly involves the removal of oxygen or addition of hydrogen. These processes can occur together in a redox reaction."
        },
        {
          q: "Why does iron rust?",
          a: "Iron rusts when it reacts with oxygen in the presence of moisture. Rusting can be reduced by painting, oiling, galvanising or other protective methods."
        },
        {
          q: "How can rancidity be prevented?",
          a: "Rancidity can be reduced by storing food in airtight containers, refrigeration, adding suitable antioxidants and packing some foods in nitrogen."
        },
        {
          q: "What are the signs that a chemical reaction has occurred?",
          a: "Possible signs include a change in colour, evolution of gas, formation of a precipitate, change in temperature or production of light. These signs should be interpreted in context."
        },
        {
          q: "What is a redox reaction?",
          a: "A redox reaction is a chemical reaction in which oxidation and reduction occur simultaneously. One substance loses electrons while another gains electrons."
        }
      ],

      long: [
        {
          q: "Explain the main types of chemical reactions with suitable examples.",
          a: "Chemical reactions can be classified into several types. In a combination reaction, two or more substances form a single product, such as CaO + H₂O → Ca(OH)₂. In a decomposition reaction, one compound breaks down into simpler substances, such as CaCO₃ → CaO + CO₂ on heating. In a displacement reaction, a more reactive element displaces a less reactive element from its compound, such as Zn + CuSO₄ → ZnSO₄ + Cu. In a double displacement reaction, two compounds exchange ions, as in Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl. In redox reactions, oxidation and reduction take place simultaneously."
        },
        {
          q: "Describe how a chemical equation is balanced and explain why balancing is necessary.",
          a: "First, write the correct chemical formulae of all reactants and products. Count the atoms of every element on both sides. Then adjust coefficients in front of the formulae until the atom counts are equal. Do not change the subscripts within a chemical formula, because doing so changes the identity of the substance. Finally, check the atom count again and use the smallest whole-number coefficients where possible. Balancing is necessary because it follows the law of conservation of mass: atoms are rearranged during a chemical reaction, not created or destroyed."
        },
        {
          q: "Explain oxidation, reduction and redox reactions with examples.",
          a: "Oxidation and reduction are complementary processes. At this level, oxidation can be understood as the addition of oxygen or removal of hydrogen, while reduction can be understood as the removal of oxygen or addition of hydrogen. For example, CuO + H₂ → Cu + H₂O. Copper oxide loses oxygen and is reduced to copper, while hydrogen gains oxygen and is oxidised to water. Since oxidation and reduction occur together, the reaction is a redox reaction."
        },
        {
          q: "What are corrosion and rancidity? Explain their effects and prevention.",
          a: "Corrosion is the gradual deterioration of metals due to reactions with their surroundings. Rusting of iron is a common example and requires oxygen and moisture. Corrosion can weaken metal objects and cause economic loss. It can be prevented or reduced through painting, oiling, galvanising or suitable protective coatings. Rancidity occurs when fats and oils undergo oxidation, producing unpleasant smells and tastes. It reduces food quality. Rancidity can be reduced by airtight storage, refrigeration, suitable antioxidants and nitrogen packaging where appropriate."
        },
        {
          q: "Differentiate between exothermic and endothermic reactions with examples.",
          a: "An exothermic reaction releases energy to its surroundings, often as heat. Combustion is a common example. An endothermic reaction absorbs energy from its surroundings. Thermal decomposition of calcium carbonate requires heat: CaCO₃ → CaO + CO₂. The main difference is the direction of energy transfer. In an exothermic reaction, energy is released; in an endothermic reaction, energy is absorbed. Energy changes are important for understanding how chemical reactions occur and how they affect their surroundings."
        }
      ]
    },

    flashcards: [
      {
        q: "What are reactants?",
        a: "Substances that take part in a chemical reaction."
      },
      {
        q: "What are products?",
        a: "Substances formed in a chemical reaction."
      },
      {
        q: "What does a balanced equation show?",
        a: "Equal numbers of atoms of each element on both sides."
      },
      {
        q: "Which law explains balancing equations?",
        a: "The law of conservation of mass."
      },
      {
        q: "Define combination reaction.",
        a: "Two or more substances form a single product."
      },
      {
        q: "Define decomposition reaction.",
        a: "One compound breaks down into simpler substances."
      },
      {
        q: "Define displacement reaction.",
        a: "A more reactive element displaces a less reactive element."
      },
      {
        q: "Define double displacement reaction.",
        a: "Two compounds exchange ions to form new compounds."
      },
      {
        q: "What is oxidation?",
        a: "Commonly, addition of oxygen or removal of hydrogen."
      },
      {
        q: "What is reduction?",
        a: "Commonly, removal of oxygen or addition of hydrogen."
      },
      {
        q: "What is a redox reaction?",
        a: "A reaction involving oxidation and reduction together."
      },
      {
        q: "What is corrosion?",
        a: "Gradual deterioration of a metal due to its environment."
      },
      {
        q: "What is rusting?",
        a: "Corrosion of iron in the presence of oxygen and moisture."
      },
      {
        q: "What is rancidity?",
        a: "Oxidation of fats and oils that causes unpleasant smell and taste."
      },
      {
        q: "What is a precipitate?",
        a: "An insoluble solid formed in a solution."
      },
      {
        q: "What does (s) mean in an equation?",
        a: "Solid state."
      },
      {
        q: "What does (l) mean in an equation?",
        a: "Liquid state."
      },
      {
        q: "What does (g) mean in an equation?",
        a: "Gaseous state."
      },
      {
        q: "What does (aq) mean in an equation?",
        a: "Aqueous solution, meaning dissolved in water."
      },
      {
        q: "What does an upward arrow commonly indicate?",
        a: "A gas being evolved in a reaction."
      },
      {
        q: "What does a downward arrow commonly indicate?",
        a: "Formation of a precipitate."
      },
      {
        q: "Give the formula of magnesium oxide.",
        a: "MgO."
      },
      {
        q: "Give the formula of calcium carbonate.",
        a: "CaCO₃."
      },
      {
        q: "What is an exothermic reaction?",
        a: "A reaction that releases energy."
      },
      {
        q: "What is an endothermic reaction?",
        a: "A reaction that absorbs energy."
      },
      {
        q: "Name one method to prevent rusting.",
        a: "Painting, oiling or galvanising."
      },
      {
        q: "Why is nitrogen used in some food packets?",
        a: "It helps reduce oxidation of fats and oils."
      },
      {
        q: "What is a chemical formula?",
        a: "A symbolic representation showing the elements and their proportions in a substance."
      },
      {
        q: "Can a chemical equation be balanced by changing subscripts?",
        a: "No. Balance it by changing coefficients."
      },
      {
        q: "What happens to atoms in a chemical reaction?",
        a: "They are rearranged to form new substances."
      }
    ],

    mcqs: [
      {
        q: "Which law is followed while balancing chemical equations?",
        options: [
          "Law of conservation of mass",
          "Law of gravitation",
          "Ohm's law",
          "Law of reflection"
        ],
        answer: 0
      },
      {
        q: "Which of the following is a combination reaction?",
        options: [
          "CaO + H₂O → Ca(OH)₂",
          "CaCO₃ → CaO + CO₂",
          "Zn + CuSO₄ → ZnSO₄ + Cu",
          "AgNO₃ + NaCl → AgCl + NaNO₃"
        ],
        answer: 0
      },
      {
        q: "Which reaction involves the breakdown of one compound?",
        options: [
          "Combination",
          "Decomposition",
          "Displacement",
          "Neutralisation only"
        ],
        answer: 1
      },
      {
        q: "What is the correct formula of magnesium oxide?",
        options: [
          "MgO",
          "Mg₂O",
          "MgO₂",
          "Mg₂O₃"
        ],
        answer: 0
      },
      {
        q: "Which process causes iron to rust?",
        options: [
          "Corrosion",
          "Distillation",
          "Filtration",
          "Crystallisation"
        ],
        answer: 0
      },
      {
        q: "Which is a common method of preventing rusting?",
        options: [
          "Painting",
          "Adding water",
          "Removing all coatings",
          "Keeping iron wet"
        ],
        answer: 0
      },
      {
        q: "Which symbol indicates an aqueous solution?",
        options: [
          "(s)",
          "(l)",
          "(g)",
          "(aq)"
        ],
        answer: 3
      },
      {
        q: "A reaction that releases energy is called:",
        options: [
          "Endothermic",
          "Exothermic",
          "Decomposition only",
          "Precipitation only"
        ],
        answer: 1
      },
      {
        q: "Rancidity is mainly associated with the oxidation of:",
        options: [
          "Fats and oils",
          "Pure water",
          "Sand",
          "Sodium chloride only"
        ],
        answer: 0
      },
      {
        q: "In a displacement reaction, a more reactive element:",
        options: [
          "Displaces a less reactive element",
          "Always becomes a gas",
          "Cannot react",
          "Changes into a compound without reacting"
        ],
        answer: 0
      },
      {
        q: "What is formed when calcium oxide reacts with water?",
        options: [
          "Calcium hydroxide",
          "Calcium chloride",
          "Calcium carbonate",
          "Calcium metal"
        ],
        answer: 0
      },
      {
        q: "Which is the correct balanced equation for magnesium burning in oxygen?",
        options: [
          "Mg + O₂ → MgO",
          "2Mg + O₂ → 2MgO",
          "Mg + 2O₂ → MgO",
          "2Mg + 2O₂ → MgO"
        ],
        answer: 1
      },
      {
        q: "A precipitate is usually:",
        options: [
          "An insoluble solid",
          "A dissolved gas only",
          "Always a liquid",
          "A type of energy"
        ],
        answer: 0
      },
      {
        q: "Oxidation and reduction occurring together form a:",
        options: [
          "Redox reaction",
          "Filtration process",
          "Physical change only",
          "Sublimation process"
        ],
        answer: 0
      },
      {
        q: "Which change may indicate a chemical reaction?",
        options: [
          "Gas evolution",
          "A change in colour",
          "Formation of a precipitate",
          "All of these may be indicators"
        ],
        answer: 3
      },
      {
        q: "What should be changed to balance a chemical equation?",
        options: [
          "Coefficients",
          "Subscripts in formulae",
          "Element symbols",
          "Names of the compounds"
        ],
        answer: 0
      },
      {
        q: "Which gas is released when calcium carbonate thermally decomposes?",
        options: [
          "Oxygen",
          "Carbon dioxide",
          "Hydrogen",
          "Nitrogen"
        ],
        answer: 1
      },
      {
        q: "Which reaction exchanges ions between two compounds?",
        options: [
          "Double displacement",
          "Combination only",
          "Combustion only",
          "Simple melting"
        ],
        answer: 0
      },
      {
        q: "Why is food sometimes packed in nitrogen?",
        options: [
          "To reduce oxidation",
          "To add water",
          "To cause rusting",
          "To balance chemical equations"
        ],
        answer: 0
      },
      {
        q: "What happens to atoms during an ordinary chemical reaction?",
        options: [
          "They are rearranged",
          "They are all destroyed",
          "They disappear permanently",
          "They always become new elements"
        ],
        answer: 0
      }
    ],

    infographic: {
      title: "Chemical Reactions and Equations",
      image: "images/infographics/science/chemical-reactions.jpg",
      alt: "Class 10 science infographic showing chemical reactions, balanced equations and reaction types",
      status: "awaiting-image"
    }
  };

  const key =
    scienceChapter.subjectId + "::" + scienceChapter.chapterName;

  DB.chapterContent[key] = scienceChapter;

  DB.infographicImages[key] = {
    src: scienceChapter.infographic.image,
         alt: scienceChapter.infographic.alt,
    status: scienceChapter.infographic.status
  };

  console.log(
    "Class 10 Hub: Science chapter content loaded:",
    scienceChapter.chapterName
  );
})();
/* =========================================================
   CLASS 10 HUB — CONTENT DATABASE
   PART 3: SCIENCE — ACIDS, BASES AND SALTS
   Append after Part 2.
   ========================================================= */

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  if (!DB) {
    console.error("Load content.js Part 1 first.");
    return;
  }

  const data = {
    subjectId: "science",
    chapterName: "Acids, Bases and Salts",

    overview:
      "Study the properties of acids and bases, indicators, pH, neutralisation, common salts and important compounds used in everyday life.",

    keyPoints: [
      "Acids produce H+ ions in aqueous solution.",
      "Bases produce OH- ions in aqueous solution.",
      "Alkalis are bases that dissolve in water.",
      "Litmus, phenolphthalein and methyl orange are acid-base indicators.",
      "Acids react with some metals to release hydrogen gas.",
      "Acids react with metal carbonates to produce salt, water and carbon dioxide.",
      "Neutralisation is the reaction of an acid with a base.",
      "The pH scale commonly ranges from 0 to 14.",
      "A pH below 7 is acidic; pH 7 is neutral; above 7 is basic at 25°C.",
      "Common salt is sodium chloride, NaCl.",
      "Baking soda is sodium hydrogen carbonate, NaHCO3.",
      "Washing soda is sodium carbonate decahydrate, Na2CO3·10H2O.",
      "Bleaching powder is commonly represented as CaOCl2 at this level.",
      "Plaster of Paris is calcium sulphate hemihydrate, CaSO4·1/2H2O.",
      "Water of crystallisation is water present in a fixed proportion in some crystals."
    ],

    questions: {
      veryShort: [
        {
          q: "What is an acid?",
          a: "An acid is a substance that produces hydrogen ions, H+, in aqueous solution."
        },
        {
          q: "What is a base?",
          a: "A base is a substance that neutralises an acid. Soluble bases produce hydroxide ions, OH-, in aqueous solution."
        },
        {
          q: "What is an alkali?",
          a: "An alkali is a base that dissolves in water."
        },
        {
          q: "Name one natural indicator.",
          a: "Litmus is a natural indicator."
        },
        {
          q: "What colour does blue litmus turn in an acid?",
          a: "Blue litmus turns red in an acidic solution."
        },
        {
          q: "What colour does red litmus turn in a base?",
          a: "Red litmus turns blue in a basic solution."
        },
        {
          q: "What is the pH of a neutral solution at 25°C?",
          a: "The pH of a neutral solution is 7 at 25°C."
        },
        {
          q: "What does a pH below 7 indicate?",
          a: "It indicates an acidic solution at 25°C."
        },
        {
          q: "What does a pH above 7 indicate?",
          a: "It indicates a basic solution at 25°C."
        },
        {
          q: "What is neutralisation?",
          a: "Neutralisation is a reaction between an acid and a base that produces salt and water."
        },
        {
          q: "What is the chemical formula of common salt?",
          a: "NaCl."
        },
        {
          q: "What is the chemical formula of baking soda?",
          a: "NaHCO3."
        },
        {
          q: "What is the chemical formula of washing soda crystals?",
          a: "Na2CO3·10H2O."
        },
        {
          q: "What is the formula commonly used for bleaching powder?",
          a: "CaOCl2."
        },
        {
          q: "What is the chemical formula of Plaster of Paris?",
          a: "CaSO4·1/2H2O."
        },
        {
          q: "Which gas is released when an acid reacts with a metal carbonate?",
          a: "Carbon dioxide gas is released."
        },
        {
          q: "Which gas is commonly released when a dilute acid reacts with a suitable metal?",
          a: "Hydrogen gas is released."
        },
        {
          q: "What is water of crystallisation?",
          a: "It is water present in a fixed proportion within the crystal structure of certain salts."
        },
        {
          q: "Name the acid present in the stomach.",
          a: "Hydrochloric acid."
        },
        {
          q: "Which acid is present in lemon juice?",
          a: "Citric acid."
        }
      ],

      short: [
        {
          q: "Why do acids show acidic behaviour in water?",
          a: "Acids ionise in water to produce hydrogen ions, H+. These ions are responsible for their acidic properties. For example, hydrochloric acid forms hydrogen ions and chloride ions in aqueous solution."
        },
        {
          q: "Differentiate between a base and an alkali.",
          a: "A base neutralises an acid. An alkali is a base that dissolves in water. Therefore, all alkalis are bases, but not all bases are soluble in water."
        },
        {
          q: "What happens when an acid reacts with a metal carbonate?",
          a: "An acid reacts with a metal carbonate to form a salt, water and carbon dioxide. For example: 2HCl + Na2CO3 → 2NaCl + H2O + CO2."
        },
        {
          q: "What is the importance of the pH scale?",
          a: "The pH scale indicates how acidic or basic a solution is. A pH below 7 is acidic, 7 is neutral and above 7 is basic at 25°C. It is useful in studying soil, digestion and environmental conditions."
        },
        {
          q: "Why is baking soda used in baking?",
          a: "Baking soda releases carbon dioxide when it reacts with an acid or decomposes on heating. The gas forms bubbles in the dough, making baked food softer and spongier."
        },
        {
          q: "Write two uses of washing soda.",
          a: "Washing soda is used as a cleaning agent and to remove permanent hardness of water. It is also used in some industrial processes."
        },
        {
          q: "How is Plaster of Paris prepared?",
          a: "Plaster of Paris is prepared by heating gypsum at about 373 K under controlled conditions. Gypsum partially loses water to form calcium sulphate hemihydrate, CaSO4·1/2H2O."
        },
        {
          q: "Why should acid always be added to water during dilution?",
          a: "Dilution of concentrated acids releases considerable heat. Adding acid slowly to water while stirring helps the heat disperse and reduces the risk of sudden heating and splashing. Water should never be poured into concentrated acid."
        },
        {
          q: "What is water of crystallisation? Give one example.",
          a: "Water of crystallisation is the fixed amount of water present in the crystal structure of some salts. Blue copper sulphate crystals contain water of crystallisation and have the formula CuSO4·5H2O."
        },
        {
          q: "Why is tooth decay associated with a fall in mouth pH?",
          a: "Bacteria in the mouth produce acids from sugars. If the pH falls below about 5.5, tooth enamel can begin to dissolve. Basic toothpaste helps neutralise acids and supports oral hygiene."
        }
      ],

      long: [
        {
          q: "Explain the chemical properties of acids with suitable equations.",
          a: "Acids show several important chemical properties. First, acids react with certain metals to produce a salt and hydrogen gas; for example, Zn + 2HCl → ZnCl2 + H2. Second, acids react with metal carbonates to form salt, water and carbon dioxide; for example, 2HCl + Na2CO3 → 2NaCl + H2O + CO2. Third, acids react with metal hydrogen carbonates to form salt, water and carbon dioxide; for example, HCl + NaHCO3 → NaCl + H2O + CO2. Fourth, acids neutralise bases to form salt and water; for example, HCl + NaOH → NaCl + H2O. Acids also change the colours of suitable indicators, such as turning blue litmus red."
        },
        {
          q: "Describe the pH scale and explain its importance in everyday life.",
          a: "The pH scale is used to express how acidic or basic an aqueous solution is. At 25°C, a pH below 7 is acidic, pH 7 is neutral and a pH above 7 is basic. The pH scale is important in digestion because the stomach contains hydrochloric acid, while excess acidity may be treated with suitable antacids under appropriate guidance. Tooth enamel can be damaged when mouth pH falls below about 5.5. Plants grow best within suitable soil-pH ranges, so farmers may treat overly acidic soil with appropriate bases. Aquatic organisms also require suitable pH conditions for survival."
        },
        {
          q: "Explain the preparation and uses of baking soda and washing soda.",
          a: "Baking soda is sodium hydrogen carbonate, NaHCO3. It can be prepared during the Solvay process by passing carbon dioxide through a suitable concentrated brine solution containing ammonia. It is used in baking powder, as a mild antacid and in some fire extinguishers. Washing soda is sodium carbonate decahydrate, Na2CO3·10H2O. It is obtained by crystallising sodium carbonate with water. Washing soda is used for cleaning, softening hard water and in certain industrial processes. Both are important sodium compounds, but their chemical formulae and uses differ."
        },
        {
          q: "What are bleaching powder and Plaster of Paris? Describe their preparation and uses.",
          a: "Bleaching powder is commonly represented at this level by CaOCl2. It is prepared by passing chlorine over dry slaked lime under suitable conditions. It is used for bleaching cotton and paper pulp and for disinfecting water when appropriately applied. Plaster of Paris has the formula CaSO4·1/2H2O. It is prepared by carefully heating gypsum, CaSO4·2H2O, so that part of its water of crystallisation is removed. When mixed with water, Plaster of Paris sets into a hard mass. It is used for casts, moulds, decorative work and making models."
        },
        {
          q: "Explain neutralisation and discuss its applications in everyday life.",
          a: "Neutralisation is the reaction of an acid with a base to form salt and water. For example, hydrochloric acid reacts with sodium hydroxide: HCl + NaOH → NaCl + H2O. Neutralisation has several applications. Suitable antacids neutralise excess stomach acid. Farmers may add lime to soil that is too acidic. Some insect stings are acidic or alkaline, and appropriate treatments may involve neutralising their effects where suitable. Industrial waste may also require careful pH adjustment before treatment or discharge. The correct method depends on the substance and situation; unknown chemicals should never be mixed casually."
        }
      ]
    },

    flashcards: [
      { q: "What is an acid?", a: "A substance that produces H+ ions in aqueous solution." },
      { q: "What is a base?", a: "A substance that neutralises an acid." },
      { q: "What is an alkali?", a: "A base that dissolves in water." },
      { q: "What is the pH of a neutral solution at 25°C?", a: "7." },
      { q: "What does pH below 7 indicate?", a: "An acidic solution." },
      { q: "What does pH above 7 indicate?", a: "A basic solution." },
      { q: "What happens to blue litmus in acid?", a: "It turns red." },
      { q: "What happens to red litmus in base?", a: "It turns blue." },
      { q: "Name one natural indicator.", a: "Litmus." },
      { q: "What is neutralisation?", a: "Reaction of an acid and a base to form salt and water." },
      { q: "What is the formula of common salt?", a: "NaCl." },
      { q: "What is the formula of baking soda?", a: "NaHCO3." },
      { q: "What is the formula of washing soda?", a: "Na2CO3·10H2O." },
      { q: "What is the formula of Plaster of Paris?", a: "CaSO4·1/2H2O." },
      { q: "What is the formula commonly used for bleaching powder?", a: "CaOCl2." },
      { q: "Which acid is present in the stomach?", a: "Hydrochloric acid." },
      { q: "Which acid is present in lemons?", a: "Citric acid." },
      { q: "Which gas is formed when acids react with carbonates?", a: "Carbon dioxide." },
      { q: "Which gas is often formed when dilute acids react with suitable metals?", a: "Hydrogen." },
      { q: "What does an acid and a base form during neutralisation?", a: "Salt and water." },
      { q: "What is water of crystallisation?", a: "Water present in a fixed proportion in certain crystals." },
      { q: "What is the approximate pH below which enamel can start dissolving?", a: "About 5.5." },
      { q: "Why is baking soda useful in baking?", a: "It releases carbon dioxide, helping dough rise." },
      { q: "Name one use of washing soda.", a: "Softening hard water." },
      { q: "How is Plaster of Paris made?", a: "By carefully heating gypsum." },
      { q: "What is the formula of gypsum?", a: "CaSO4·2H2O." },
      { q: "What colour are hydrated copper sulphate crystals?", a: "Blue." },
      { q: "What is the formula of hydrated copper sulphate?", a: "CuSO4·5H2O." },
      { q: "Why is acid added slowly to water?", a: "Dilution releases heat, so careful addition reduces splashing risk." },
      { q: "What is one use of bleaching powder?", a: "Bleaching suitable materials or disinfecting water appropriately." }
    ],

    mcqs: [
      {
        q: "Which ion is produced by acids in aqueous solution?",
        options: ["H+", "OH-", "Na+", "Cl- only"],
        answer: 0
      },
      {
        q: "Which of these is an alkali?",
        options: ["Copper oxide", "Sodium hydroxide solution", "Sand", "Copper metal"],
        answer: 1
      },
      {
        q: "What happens to blue litmus in an acidic solution?",
        options: ["It turns red", "It turns green", "It stays blue in every acid", "It turns black"],
        answer: 0
      },
      {
        q: "What is the pH of a neutral solution at 25°C?",
        options: ["1", "5", "7", "14"],
        answer: 2
      },
      {
        q: "Which formula represents baking soda?",
        options: ["NaCl", "NaHCO3", "Na2CO3·10H2O", "CaCO3"],
        answer: 1
      },
      {
        q: "Which formula represents washing soda crystals?",
        options: ["NaOH", "NaCl", "Na2CO3·10H2O", "NaHCO3"],
        answer: 2
      },
      {
        q: "Which gas is produced when an acid reacts with a metal carbonate?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Chlorine"],
        answer: 1
      },
      {
        q: "Which acid is present in the stomach?",
        options: ["Citric acid", "Hydrochloric acid", "Acetic acid", "Lactic acid"],
        answer: 1
      },
      {
        q: "Which acid is commonly found in lemon juice?",
        options: ["Citric acid", "Hydrochloric acid", "Sulphuric acid", "Nitric acid"],
        answer: 0
      },
      {
        q: "Which compound is commonly used in some antacids?",
        options: ["A suitable base", "Concentrated acid", "Petrol", "Sand"],
        answer: 0
      },
      {
        q: "What are the products of a typical acid-base neutralisation?",
        options: ["Salt and water", "Only hydrogen", "Only oxygen", "Metal and oxygen"],
        answer: 0
      },
      {
        q: "What is the formula of Plaster of Paris?",
        options: ["CaSO4·1/2H2O", "CaSO4·2H2O", "NaCl", "CaCO3"],
        answer: 0
      },
      {
        q: "Plaster of Paris is prepared by heating:",
        options: ["Gypsum", "Sodium chloride", "Copper", "Sugar"],
        answer: 0
      },
      {
        q: "Which gas is often released when dilute hydrochloric acid reacts with zinc?",
        options: ["Hydrogen", "Carbon dioxide", "Nitrogen", "Sulphur dioxide"],
        answer: 0
      },
      {
        q: "Which of these is a natural indicator?",
        options: ["Litmus", "Sodium chloride", "Distilled water", "Sugar"],
        answer: 0
      },
      {
        q: "What should be added slowly to water when diluting concentrated acid?",
        options: ["Acid", "Water into the acid", "Oil", "Sand"],
        answer: 0
      },
      {
        q: "Which substance is used to reduce excessive acidity in suitable soil?",
        options: ["A suitable base such as lime", "More acid", "Sugar", "Common salt in every case"],
        answer: 0
      },
      {
        q: "What causes rancidity in fats and oils?",
        options: ["Oxidation", "Freezing alone", "Filtration", "Neutralisation only"],
        answer: 0
      },
      {
        q: "Which compound is commonly used for bleaching and disinfection?",
        options: ["Bleaching powder", "Baking soda only", "Sugar", "Ethanol only"],
        answer: 0
      },
      {
        q: "Which statement about alkalis is correct?",
        options: [
          "They are bases soluble in water",
          "They are all acids",
          "They cannot neutralise acids",
          "They are always metals"
        ],
        answer: 0
      }
    ],

    infographic: {
      title: "Acids, Bases and Salts",
      image: "images/infographics/science/acids-bases-salts.jpg",
      alt: "Class 10 science infographic showing acids, bases, pH scale, indicators and common salts",
      status: "awaiting-image"
    }
  };

  const key = data.subjectId + "::" + data.chapterName;
  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    src: data.infographic.image,
    alt: data.infographic.alt,
    status: data.infographic.status
  };

  console.log(
    "Class 10 Hub: Science chapter content loaded:",
    data.chapterName
  );
})();
           
/* =========================================================
   CLASS 10 HUB — PART 4
   SCIENCE: METALS AND NON-METALS
   CBSE EXAM-FOCUSED CHAPTER CONTENT
   Append below Part 3 in content.js
========================================================= */

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "science::Metals and Non-metals";

  const data = {
    overview:
      "This chapter covers the physical and chemical properties of metals and non-metals, reactivity series, ionic compounds, extraction of metals, corrosion and prevention of corrosion. Revise the reactions, observations and reasons carefully for CBSE-style examinations.",

    keyPoints: [
      "Metals are generally lustrous, malleable, ductile and good conductors of heat and electricity.",
      "Non-metals are generally poor conductors and are neither malleable nor ductile.",
      "Exceptions exist: mercury is a liquid metal; graphite conducts electricity; iodine is lustrous.",
      "Metals react with oxygen to form metal oxides, which are generally basic or amphoteric.",
      "Aluminium oxide and zinc oxide are amphoteric oxides.",
      "Some metals react with water to form hydroxides or oxides and hydrogen gas.",
      "Metals above hydrogen in the reactivity series can generally displace hydrogen from dilute acids.",
      "A more reactive metal displaces a less reactive metal from its salt solution.",
      "Ionic compounds form through electron transfer and contain oppositely charged ions.",
      "Ionic compounds generally have high melting and boiling points.",
      "Ionic compounds conduct electricity in molten or aqueous states, but not in solid states.",
      "Highly reactive metals are extracted by electrolytic reduction.",
      "Sulphide ores are generally converted into oxides by roasting.",
      "Carbonate ores are generally converted into oxides by calcination.",
      "Corrosion damages metals; rusting of iron requires oxygen and moisture."
    ],

    questions: {
      veryShort: [
        {
          q: "Q1. What is malleability?",
          a: "Malleability is the property of a material by which it can be beaten into thin sheets."
        },
        {
          q: "Q2. What is ductility?",
          a: "Ductility is the property by which a material can be drawn into thin wires."
        },
        {
          q: "Q3. Name a metal that is liquid at room temperature.",
          a: "Mercury."
        },
        {
          q: "Q4. Name a non-metal that conducts electricity.",
          a: "Graphite, an allotrope of carbon."
        },
        {
          q: "Q5. What is an amphoteric oxide?",
          a: "An oxide that reacts with both acids and bases to form salt and water."
        },
        {
          q: "Q6. Give two examples of amphoteric oxides.",
          a: "Aluminium oxide (Al₂O₃) and zinc oxide (ZnO)."
        },
        {
          q: "Q7. What is the reactivity series?",
          a: "It is a list of metals arranged in decreasing order of their reactivity."
        },
        {
          q: "Q8. Which gas is generally released when a metal reacts with a dilute acid?",
          a: "Hydrogen gas."
        },
        {
          q: "Q9. Name the most reactive metal among sodium, copper and iron.",
          a: "Sodium."
        },
        {
          q: "Q10. What is an ionic compound?",
          a: "A compound made up of positively and negatively charged ions held together by electrostatic attraction."
        },
        {
          q: "Q11. Which type of bond is present in sodium chloride?",
          a: "An ionic bond."
        },
        {
          q: "Q12. Why do metals generally form positive ions?",
          a: "They lose one or more electrons to form positively charged ions."
        },
        {
          q: "Q13. What is roasting?",
          a: "Roasting is heating a sulphide ore strongly in excess air to convert it into an oxide."
        },
        {
          q: "Q14. What is calcination?",
          a: "Calcination is heating a carbonate ore strongly in limited or no air to convert it into an oxide."
        },
        {
          q: "Q15. What is corrosion?",
          a: "Corrosion is the gradual deterioration of a metal due to its reaction with substances in the environment."
        },
        {
          q: "Q16. What is rust?",
          a: "Rust is hydrated iron(III) oxide formed when iron corrodes in the presence of oxygen and moisture."
        },
        {
          q: "Q17. Name one metal stored under kerosene.",
          a: "Sodium."
        },
        {
          q: "Q18. What is galvanisation?",
          a: "Galvanisation is coating iron or steel with a protective layer of zinc."
        },
        {
          q: "Q19. What is an alloy?",
          a: "An alloy is a homogeneous mixture of two or more metals, or a metal and another element."
        },
        {
          q: "Q20. Name the process used to extract highly reactive metals such as sodium.",
          a: "Electrolytic reduction of their molten compounds."
        }
      ],

      short: [
        {
          q: "Q1. State three physical properties of metals.",
          a: "Metals are generally lustrous, malleable and ductile. They are also usually good conductors of heat and electricity. These are general properties and have exceptions."
        },
        {
          q: "Q2. Why is sodium stored under kerosene?",
          a: "Sodium reacts vigorously with oxygen and moisture in the air. The reaction can produce enough heat to cause fire. Kerosene prevents sodium from coming into direct contact with air and water."
        },
        {
          q: "Q3. Why do ionic compounds have high melting points?",
          a: "Ionic compounds contain oppositely charged ions held together by strong electrostatic forces. A large amount of energy is required to overcome these forces, so ionic compounds generally have high melting points."
        },
        {
          q: "Q4. Why do ionic compounds conduct electricity in molten state but not in solid state?",
          a: "In solid ionic compounds, ions are fixed in their positions and cannot move freely. In the molten state, ions become mobile and carry electric charge, allowing electricity to pass."
        },
        {
          q: "Q5. What happens when zinc reacts with dilute hydrochloric acid? Write the equation.",
          a: "Zinc reacts with dilute hydrochloric acid to form zinc chloride and hydrogen gas. Effervescence is observed.\n\nZn + 2HCl → ZnCl₂ + H₂↑"
        },
        {
          q: "Q6. Differentiate between roasting and calcination.",
          a: "Roasting involves heating a sulphide ore strongly in excess air, whereas calcination involves heating a carbonate ore strongly in limited or no air. Roasting releases sulphur dioxide from sulphide ores; calcination releases carbon dioxide from carbonate ores."
        },
        {
          q: "Q7. What happens when an iron nail is placed in copper sulphate solution?",
          a: "Iron is more reactive than copper, so it displaces copper from copper sulphate solution. The blue solution turns green due to iron sulphate formation, and a reddish-brown copper deposit forms on the nail.\n\nFe + CuSO₄ → FeSO₄ + Cu"
        },
        {
          q: "Q8. Why are copper and aluminium used for electrical wires?",
          a: "Copper and aluminium are good conductors of electricity and are ductile, so they can be drawn into wires. Their electrical conductivity makes them useful for transmitting electric current."
        },
        {
          q: "Q9. What are amphoteric oxides? Give two examples.",
          a: "Amphoteric oxides react with both acids and bases to form salt and water. Aluminium oxide and zinc oxide are examples.\n\nAl₂O₃ and ZnO are amphoteric oxides."
        },
        {
          q: "Q10. Mention three methods of preventing corrosion.",
          a: "Corrosion can be prevented by painting, oiling or greasing, and galvanisation. Other methods include electroplating and alloying. These methods protect the metal from contact with air, moisture or corrosive substances."
        }
      ],

      long: [
        {
          q: "Q1. Explain the chemical properties of metals with suitable equations.",
          a: "Metals show different chemical properties:\n\n1. Reaction with oxygen: Metals generally form metal oxides. For example, magnesium burns in oxygen with a dazzling white flame.\n\n2Mg + O₂ → 2MgO\n\n2. Reaction with water: Sodium reacts vigorously with cold water to form sodium hydroxide and hydrogen.\n\n2Na + 2H₂O → 2NaOH + H₂↑\n\n3. Reaction with dilute acids: Zinc reacts with dilute hydrochloric acid to produce zinc chloride and hydrogen.\n\nZn + 2HCl → ZnCl₂ + H₂↑\n\n4. Displacement reactions: A more reactive metal displaces a less reactive metal from its salt solution.\n\nFe + CuSO₄ → FeSO₄ + Cu\n\nThe extent of reaction depends on the reactivity of the metal and the conditions."
        },
        {
          q: "Q2. Explain the formation of sodium chloride by electron transfer and state its properties.",
          a: "A sodium atom has one electron in its outermost shell, while a chlorine atom needs one electron to complete its outermost shell.\n\n1. Sodium loses one electron and forms a positive ion:\nNa → Na⁺ + e⁻\n\n2. Chlorine gains one electron and forms a negative ion:\nCl + e⁻ → Cl⁻\n\n3. The oppositely charged Na⁺ and Cl⁻ ions attract each other by electrostatic forces and form ionic sodium chloride (NaCl).\n\nProperties of ionic compounds:\n\n• They are generally crystalline solids.\n• They usually have high melting and boiling points.\n• They are generally soluble in water, though solubility varies.\n• They conduct electricity in molten or aqueous states because their ions are mobile, but not in the solid state."
        },
        {
          q: "Q3. Explain the extraction of metals according to their position in the reactivity series.",
          a: "The method of extraction depends on the reactivity of the metal.\n\n1. Highly reactive metals: Potassium, sodium, calcium, magnesium and aluminium cannot generally be extracted by reduction with carbon. Their compounds are reduced by electrolysis.\n\n2. Moderately reactive metals: Metals such as zinc and iron are commonly extracted by converting their ores into oxides and then reducing the oxides with carbon or carbon monoxide.\n\nFor example:\nZnO + C → Zn + CO\n\n3. Low-reactivity metals: Metals such as copper, mercury and gold may occur in native form or can be obtained through comparatively easier extraction methods. Mercury can be obtained from cinnabar by roasting followed by reduction.\n\nThe ore is first concentrated to remove unwanted impurities. The exact extraction process depends on the ore and the metal."
        },
        {
          q: "Q4. Explain roasting and calcination. Why are metal oxides easier to reduce?",
          a: "Roasting and calcination are processes used to convert ores into metal oxides before extraction.\n\n1. Roasting: A sulphide ore is heated strongly in excess air. For example:\n\n2ZnS + 3O₂ → 2ZnO + 2SO₂\n\n2. Calcination: A carbonate ore is heated strongly in limited or no air. For example:\n\nZnCO₃ → ZnO + CO₂\n\nMetal oxides are generally easier to reduce to metals than their corresponding sulphide or carbonate ores. After conversion into an oxide, the oxygen can be removed using a suitable reducing agent such as carbon or carbon monoxide, depending on the metal's reactivity."
        },
        {
          q: "Q5. What is corrosion? Explain rusting of iron and describe methods of prevention.",
          a: "Corrosion is the gradual deterioration of a metal due to chemical reactions with its surroundings. Rusting is the corrosion of iron in the presence of both oxygen and moisture, producing hydrated iron(III) oxide.\n\nPrevention methods:\n\n1. Painting: A paint layer prevents air and moisture from reaching the iron.\n\n2. Oiling or greasing: The protective coating reduces contact with moisture and oxygen.\n\n3. Galvanisation: Coating iron or steel with zinc protects the underlying metal.\n\n4. Electroplating: A protective layer of another metal is deposited on the surface.\n\n5. Alloying: Iron is mixed with other elements to make corrosion-resistant alloys, such as stainless steel.\n\nPreventing corrosion increases the life of metal objects and reduces economic losses."
        }
      ]
    },

    flashcards: [
      { q: "What is malleability?", a: "Ability to be beaten into thin sheets." },
      { q: "What is ductility?", a: "Ability to be drawn into wires." },
      { q: "Which metal is liquid at room temperature?", a: "Mercury." },
      { q: "Which non-metal conducts electricity?", a: "Graphite." },
      { q: "What are amphoteric oxides?", a: "Oxides reacting with both acids and bases." },
      { q: "Name two amphoteric oxides.", a: "Al₂O₃ and ZnO." },
      { q: "What is the reactivity series?", a: "Metals arranged in decreasing reactivity." },
      { q: "Which gas often forms when metals react with dilute acids?", a: "Hydrogen." },
      { q: "Which metal is stored under kerosene?", a: "Sodium." },
      { q: "What is an ionic bond?", a: "Electrostatic attraction between oppositely charged ions." },
      { q: "What charge does a sodium ion carry?", a: "+1." },
      { q: "What charge does a chloride ion carry?", a: "−1." },
      { q: "Why do ionic compounds have high melting points?", a: "Strong electrostatic attraction between ions." },
      { q: "When do ionic compounds conduct electricity?", a: "When molten or dissolved in aqueous solution." },
      { q: "Why don't solid ionic compounds conduct electricity?", a: "Their ions cannot move freely." },
      { q: "What is roasting?", a: "Heating sulphide ore in excess air." },
      { q: "What is calcination?", a: "Heating carbonate ore in limited or no air." },
      { q: "What gas is released in carbonate ore calcination?", a: "Carbon dioxide." },
      { q: "What gas forms during sulphide ore roasting?", a: "Sulphur dioxide." },
      { q: "How are highly reactive metals extracted?", a: "Usually by electrolytic reduction." },
      { q: "How is iron commonly protected from rusting?", a: "Painting, oiling, greasing or galvanisation." },
      { q: "What is galvanisation?", a: "Coating iron or steel with zinc." },
      { q: "What is corrosion?", a: "Gradual deterioration of metal by its environment." },
      { q: "What is rust mainly composed of?", a: "Hydrated iron(III) oxide." },
      { q: "What two conditions are needed for rusting?", a: "Oxygen and moisture." },
      { q: "What is an alloy?", a: "A mixture of a metal with other element(s)." },
      { q: "Why is copper used in electrical wiring?", a: "It conducts electricity well and is ductile." },
      { q: "What happens when iron is placed in CuSO₄ solution?", a: "Iron displaces copper from the solution." },
      { q: "What colour is copper sulphate solution?", a: "Blue." },
      { q: "What colour is iron sulphate solution?", a: "Pale green." }
    ],

    mcqs: [
      {
        q: "Which property allows metals to be beaten into sheets?",
        options: ["Ductility", "Malleability", "Sonority", "Brittleness"],
        answer: 1
      },
      {
        q: "Which of the following is a liquid metal at room temperature?",
        options: ["Sodium", "Aluminium", "Mercury", "Iron"],
        answer: 2
      },
      {
        q: "Which non-metal is a good conductor of electricity?",
        options: ["Sulphur", "Phosphorus", "Graphite", "Oxygen"],
        answer: 2
      },
      {
        q: "Which pair contains amphoteric oxides?",
        options: ["Na₂O and MgO", "CO₂ and SO₂", "Al₂O₃ and ZnO", "CaO and K₂O"],
        answer: 2
      },
      {
        q: "Which metal is commonly stored under kerosene?",
        options: ["Copper", "Sodium", "Gold", "Silver"],
        answer: 1
      },
      {
        q: "Which gas is generally released when zinc reacts with dilute HCl?",
        options: ["Oxygen", "Nitrogen", "Hydrogen", "Chlorine"],
        answer: 2
      },
      {
        q: "Which metal can displace copper from copper sulphate solution?",
        options: ["Silver", "Gold", "Iron", "Platinum"],
        answer: 2
      },
      {
        q: "The blue colour of copper sulphate solution changes to which colour when iron is added?",
        options: ["Red", "Pale green", "Black", "Colourless"],
        answer: 1
      },
      {
        q: "What type of bond is present in sodium chloride?",
        options: ["Covalent", "Metallic", "Ionic", "Hydrogen"],
        answer: 2
      },
      {
        q: "Why do ionic compounds conduct electricity when molten?",
        options: [
          "Their atoms become neutral",
          "Their ions become mobile",
          "They contain free electrons like metals",
          "Their melting points become zero"
        ],
        answer: 1
      },
      {
        q: "Which process is used for converting sulphide ores into oxides?",
        options: ["Calcination", "Roasting", "Galvanisation", "Electroplating"],
        answer: 1
      },
      {
        q: "Which process is commonly used for carbonate ores?",
        options: ["Calcination", "Roasting in excess air", "Galvanisation", "Distillation only"],
        answer: 0
      },
      {
        q: "Which gas is commonly released when a metal carbonate undergoes calcination?",
        options: ["Hydrogen", "Carbon dioxide", "Oxygen", "Ammonia"],
        answer: 1
      },
      {
        q: "Highly reactive metals are generally extracted by:",
        options: [
          "Reduction with water",
          "Electrolytic reduction",
          "Painting",
          "Simple filtration"
        ],
        answer: 1
      },
      {
        q: "Which of the following helps prevent rusting?",
        options: ["Keeping iron wet", "Galvanisation", "Adding salt water", "Scratching paint away"],
        answer: 1
      },
      {
        q: "Galvanisation involves coating iron with:",
        options: ["Copper", "Zinc", "Sulphur", "Carbon"],
        answer: 1
      },
      {
        q: "Rusting of iron requires:",
        options: [
          "Only nitrogen",
          "Only carbon dioxide",
          "Oxygen and moisture",
          "Only sunlight"
        ],
        answer: 2
      },
      {
        q: "Which of the following is generally a poor conductor of electricity?",
        options: ["Copper", "Aluminium", "Silver", "Sulphur"],
        answer: 3
      },
      {
        q: "Which equation represents the reaction between zinc and hydrochloric acid?",
        options: [
          "Zn + HCl → ZnO + H₂",
          "Zn + 2HCl → ZnCl₂ + H₂",
          "Zn + HCl → ZnCl₂ + O₂",
          "Zn + 2HCl → ZnH₂ + Cl₂"
        ],
        answer: 1
      },
      {
        q: "Which metal is generally extracted from its molten compound by electrolysis because of its high reactivity?",
        options: ["Sodium", "Copper", "Silver", "Gold"],
        answer: 0
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Metals and Non-metals",
    images: [
      "images/infographics/science/metals-non-metals.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Metals and Non-metals content loaded.");
})();
         
/* =========================================================
   CLASS 10 HUB — PART 5
   SCIENCE: CARBON AND ITS COMPOUNDS
   CBSE EXAM-FOCUSED CONTENT
   Append below Part 4 in content.js
========================================================= */

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "science::Carbon and Its Compounds";

  const data = {
    overview:
      "This chapter explains the bonding properties of carbon, covalent compounds, saturated and unsaturated hydrocarbons, homologous series, nomenclature, functional groups, chemical properties of ethanol and ethanoic acid, and the cleansing action of soaps and detergents.",

    keyPoints: [
      "Carbon has atomic number 6 and electronic configuration 2,4.",
      "Carbon forms four covalent bonds because it has four electrons in its outermost shell.",
      "Catenation is the ability of carbon atoms to form bonds with other carbon atoms.",
      "Covalent bonds form by sharing electron pairs between atoms.",
      "Saturated hydrocarbons contain only single carbon-carbon bonds.",
      "Unsaturated hydrocarbons contain at least one carbon-carbon double or triple bond.",
      "Alkanes have the general formula CₙH₂ₙ₊₂.",
      "Alkenes have the general formula CₙH₂ₙ for open-chain compounds with one double bond.",
      "Alkynes have the general formula CₙH₂ₙ₋₂ for open-chain compounds with one triple bond.",
      "A homologous series contains compounds with the same functional group and similar chemical properties.",
      "Successive members of a homologous series differ by a –CH₂– unit and 14 u in molecular mass.",
      "Ethanol has the formula C₂H₅OH.",
      "Ethanoic acid has the formula CH₃COOH.",
      "Ethanol reacts with sodium to release hydrogen gas.",
      "Ethanoic acid reacts with carbonates and hydrogencarbonates to release carbon dioxide.",
      "Esterification is the reaction between an alcohol and a carboxylic acid to form an ester and water.",
      "Soaps form scum with calcium and magnesium ions in hard water.",
      "Detergents generally clean effectively in hard water.",
      "Combustion of carbon compounds generally produces carbon dioxide and water when oxygen is sufficient.",
      "Addition reactions convert unsaturated compounds into saturated compounds by adding atoms across multiple bonds."
    ],

    questions: {
      veryShort: [
        {
          q: "Q1. What is the atomic number of carbon?",
          a: "6."
        },
        {
          q: "Q2. What is the electronic configuration of carbon?",
          a: "2,4."
        },
        {
          q: "Q3. What is tetravalency?",
          a: "The ability of an atom to form four covalent bonds."
        },
        {
          q: "Q4. Define catenation.",
          a: "Catenation is the ability of an element to form bonds with atoms of the same element, producing chains or rings."
        },
        {
          q: "Q5. What is a covalent bond?",
          a: "A chemical bond formed by sharing electron pairs between atoms."
        },
        {
          q: "Q6. What are saturated hydrocarbons?",
          a: "Hydrocarbons containing only single bonds between carbon atoms."
        },
        {
          q: "Q7. What are unsaturated hydrocarbons?",
          a: "Hydrocarbons containing at least one carbon-carbon double or triple bond."
        },
        {
          q: "Q8. Write the general formula of alkanes.",
          a: "CₙH₂ₙ₊₂ for open-chain alkanes."
        },
        {
          q: "Q9. Write the molecular formula of methane.",
          a: "CH₄."
        },
        {
          q: "Q10. Write the molecular formula of ethene.",
          a: "C₂H₄."
        },
        {
          q: "Q11. Write the molecular formula of ethyne.",
          a: "C₂H₂."
        },
        {
          q: "Q12. What is a homologous series?",
          a: "A series of organic compounds having the same functional group and a common general formula, with similar chemical properties."
        },
        {
          q: "Q13. Which functional group is present in alcohols?",
          a: "The hydroxyl group, –OH."
        },
        {
          q: "Q14. Which functional group is present in carboxylic acids?",
          a: "The carboxyl group, –COOH."
        },
        {
          q: "Q15. Write the formula of ethanol.",
          a: "C₂H₅OH."
        },
        {
          q: "Q16. Write the formula of ethanoic acid.",
          a: "CH₃COOH."
        },
        {
          q: "Q17. What is esterification?",
          a: "The reaction of an alcohol with a carboxylic acid to form an ester and water."
        },
        {
          q: "Q18. Name the gas released when ethanoic acid reacts with sodium hydrogencarbonate.",
          a: "Carbon dioxide."
        },
        {
          q: "Q19. Why do soaps form scum in hard water?",
          a: "Soap reacts with calcium and magnesium ions to form insoluble salts."
        },
        {
          q: "Q20. What is the cleansing structure formed by soap molecules in water called?",
          a: "A micelle."
        }
      ],

      short: [
        {
          q: "Q1. Why does carbon form a large number of compounds?",
          a: "Carbon forms a large number of compounds mainly because of tetravalency and catenation. Its four valence electrons allow it to form four covalent bonds. Carbon atoms can bond with one another to form long chains, branched chains and rings, and can also form single, double and triple bonds."
        },
        {
          q: "Q2. Explain why carbon generally forms covalent compounds rather than ionic compounds.",
          a: "Carbon has four electrons in its outermost shell. Losing four electrons or gaining four electrons would require or involve a large energy change. Carbon therefore generally completes its outer shell by sharing electrons with other atoms and forming covalent bonds."
        },
        {
          q: "Q3. Differentiate between saturated and unsaturated hydrocarbons.",
          a: "Saturated hydrocarbons contain only single bonds between carbon atoms; alkanes are examples. Unsaturated hydrocarbons contain at least one double or triple carbon-carbon bond; alkenes and alkynes are examples. Unsaturated compounds generally undergo addition reactions more readily."
        },
        {
          q: "Q4. What is a homologous series? State two characteristics.",
          a: "A homologous series is a family of organic compounds with the same functional group and a common general formula. Successive members differ by a –CH₂– unit, corresponding to a mass difference of 14 u. They show similar chemical properties and a gradual change in physical properties."
        },
        {
          q: "Q5. What happens when ethanol reacts with sodium? Write the equation.",
          a: "Ethanol reacts with sodium to form sodium ethoxide and hydrogen gas.\n\n2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑"
        },
        {
          q: "Q6. What happens when ethanoic acid reacts with sodium hydrogencarbonate?",
          a: "Ethanoic acid reacts with sodium hydrogencarbonate to form sodium ethanoate, carbon dioxide and water. Brisk effervescence occurs because carbon dioxide gas is released.\n\nCH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑"
        },
        {
          q: "Q7. What is esterification? Write a representative equation.",
          a: "Esterification is the reaction between an alcohol and a carboxylic acid in the presence of concentrated sulphuric acid to produce an ester and water. Esters often have pleasant fruity smells.\n\nCH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O\n\nConditions: concentrated H₂SO₄ and heating."
        },
        {
          q: "Q8. Why is conversion of ethanol into ethanoic acid an oxidation reaction?",
          a: "Ethanol is oxidised to ethanoic acid by an oxidising agent such as alkaline potassium permanganate or acidified potassium dichromate. Oxidation involves the addition of oxygen or removal of hydrogen.\n\nC₂H₅OH + 2[O] → CH₃COOH + H₂O"
        },
        {
          q: "Q9. Why do soaps not work well in hard water?",
          a: "Hard water contains calcium and magnesium ions. These ions react with soap to form insoluble salts called scum. Scum reduces lather formation and wastes soap, making cleaning less effective."
        },
        {
          q: "Q10. How does soap remove oily dirt?",
          a: "A soap molecule has a hydrophilic ionic end that interacts with water and a hydrophobic hydrocarbon tail that interacts with oil and grease. The tails become embedded in oily dirt while the heads remain in water. Many soap molecules surround the dirt to form micelles, allowing it to be suspended in water and washed away."
        }
      ],

      long: [
        {
          q: "Q1. Explain the unique properties of carbon that enable it to form a large variety of compounds.",
          a: "Carbon forms a very large number of compounds because of two important properties:\n\n1. Tetravalency: Carbon has four electrons in its outermost shell. It shares electrons with other atoms to form four covalent bonds. It can bond with hydrogen, oxygen, nitrogen, sulphur, chlorine and other elements.\n\n2. Catenation: Carbon atoms form strong covalent bonds with other carbon atoms. They can produce straight chains, branched chains and rings.\n\nCarbon can also form single, double and triple bonds. For example, methane (CH₄) contains single bonds, ethene (C₂H₄) contains a double bond, and ethyne (C₂H₂) contains a triple bond. The combination of these properties produces a vast variety of organic compounds."
        },
        {
          q: "Q2. Differentiate between saturated and unsaturated hydrocarbons. Explain their important chemical reactions.",
          a: "Saturated hydrocarbons contain only single carbon-carbon bonds and are called alkanes. Unsaturated hydrocarbons contain one or more carbon-carbon double or triple bonds and include alkenes and alkynes.\n\n1. Combustion: Carbon compounds burn in oxygen, producing heat. With sufficient oxygen, complete combustion generally produces carbon dioxide and water.\n\nCH₄ + 2O₂ → CO₂ + 2H₂O\n\n2. Substitution: Saturated hydrocarbons can undergo substitution reactions. For example, methane reacts with chlorine in sunlight, replacing a hydrogen atom with chlorine.\n\nCH₄ + Cl₂ → CH₃Cl + HCl\n\n3. Addition: Unsaturated hydrocarbons add hydrogen in the presence of a catalyst such as nickel.\n\nC₂H₄ + H₂ → C₂H₆\n\nThis is hydrogenation. It is used to convert certain vegetable oils into more saturated fats. The process and its conditions depend on the material being treated."
        },
        {
          q: "Q3. Describe the chemical properties of ethanol with equations.",
          a: "Ethanol (C₂H₅OH) is an alcohol with several important chemical properties.\n\n1. Reaction with sodium: Ethanol reacts with sodium to form sodium ethoxide and hydrogen gas.\n\n2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑\n\n2. Oxidation: Ethanol can be oxidised to ethanoic acid using alkaline potassium permanganate or acidified potassium dichromate.\n\nC₂H₅OH + 2[O] → CH₃COOH + H₂O\n\n3. Combustion: Ethanol burns in oxygen to produce carbon dioxide, water and heat.\n\nC₂H₅OH + 3O₂ → 2CO₂ + 3H₂O\n\n4. Dehydration: When ethanol is heated with excess concentrated sulphuric acid at about 443 K, it loses water and forms ethene.\n\nC₂H₅OH → C₂H₄ + H₂O\n\nThe last reaction requires the specified conditions."
        },
        {
          q: "Q4. Describe the chemical properties of ethanoic acid and write balanced equations.",
          a: "Ethanoic acid (CH₃COOH) is a carboxylic acid. Its important reactions include:\n\n1. Reaction with a base: It reacts with sodium hydroxide to form sodium ethanoate and water.\n\nCH₃COOH + NaOH → CH₃COONa + H₂O\n\n2. Reaction with a carbonate: It reacts with sodium carbonate to form sodium ethanoate, water and carbon dioxide.\n\n2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂↑\n\n3. Reaction with a hydrogencarbonate:\n\nCH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑\n\n4. Esterification: It reacts with ethanol in the presence of concentrated sulphuric acid to form ethyl ethanoate and water.\n\nCH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O\n\nEthanoic acid is commonly known as acetic acid. A dilute aqueous solution is present in vinegar."
        },
        {
          q: "Q5. Explain the cleansing action of soap. Why are detergents more effective than soaps in hard water?",
          a: "A soap molecule has two different ends: a hydrophilic ionic end that interacts with water and a hydrophobic hydrocarbon tail that interacts with oil and grease.\n\nWhen soap is added to water containing oily dirt, its hydrophobic tails attach to the oily material while the hydrophilic heads remain in water. Many soap molecules surround the dirt and form structures called micelles. The dirt becomes suspended in water and can be removed during rinsing.\n\nIn hard water, calcium and magnesium ions react with soap to produce insoluble scum. This reduces lather formation and cleaning efficiency.\n\nDetergents generally do not form insoluble precipitates with calcium and magnesium ions in the same way. Therefore, they are usually more effective than soaps in hard water. Some detergents may have environmental disadvantages depending on their chemical composition and biodegradability."
        }
      ]
    },

    flashcards: [
      { q: "What is carbon's atomic number?", a: "6." },
      { q: "What is carbon's electronic configuration?", a: "2,4." },
      { q: "What is tetravalency?", a: "Ability to form four covalent bonds." },
      { q: "What is catenation?", a: "Formation of chains or rings using same-element atoms." },
      { q: "What is a covalent bond?", a: "A bond formed by sharing electron pairs." },
      { q: "What is methane's formula?", a: "CH₄." },
      { q: "What is ethene's formula?", a: "C₂H₄." },
      { q: "What is ethyne's formula?", a: "C₂H₂." },
      { q: "What are alkanes?", a: "Hydrocarbons with only single carbon-carbon bonds." },
      { q: "What are alkenes?", a: "Hydrocarbons containing a carbon-carbon double bond." },
      { q: "What are alkynes?", a: "Hydrocarbons containing a carbon-carbon triple bond." },
      { q: "General formula of open-chain alkanes?", a: "CₙH₂ₙ₊₂." },
      { q: "General formula of alkenes with one double bond?", a: "CₙH₂ₙ." },
      { q: "General formula of alkynes with one triple bond?", a: "CₙH₂ₙ₋₂." },
      { q: "What is a homologous series?", a: "Family with same functional group and similar chemistry." },
      { q: "How do successive homologues differ?", a: "By one –CH₂– unit and 14 u in mass." },
      { q: "Which group defines alcohols?", a: "Hydroxyl group, –OH." },
      { q: "Which group defines carboxylic acids?", a: "Carboxyl group, –COOH." },
      { q: "What is ethanol's formula?", a: "C₂H₅OH." },
      { q: "What is ethanoic acid's formula?", a: "CH₃COOH." },
      { q: "What is oxidation of ethanol's product here?", a: "Ethanoic acid." },
      { q: "What is esterification?", a: "Alcohol plus acid forms ester and water." },
      { q: "What gas forms when acid reacts with NaHCO₃?", a: "Carbon dioxide." },
      { q: "What is vinegar's main acid?", a: "Ethanoic acid." },
      { q: "What is hydrogenation?", a: "Adding hydrogen to an unsaturated compound." },
      { q: "What is a soap micelle?", a: "Soap molecules surrounding oily dirt in water." },
      { q: "Which soap end interacts with water?", a: "The hydrophilic ionic head." },
      { q: "Which soap end interacts with grease?", a: "The hydrophobic hydrocarbon tail." },
      { q: "Why does soap form scum in hard water?", a: "Calcium and magnesium ions form insoluble salts." },
      { q: "Why are detergents useful in hard water?", a: "They generally avoid forming insoluble scum with these ions." }
    ],

    mcqs: [
      {
        q: "What is the electronic configuration of carbon?",
        options: ["2,2", "2,4", "2,6", "2,8"],
        answer: 1
      },
      {
        q: "The ability of carbon to form four covalent bonds is called:",
        options: ["Catenation", "Tetravalency", "Oxidation", "Hydrogenation"],
        answer: 1
      },
      {
        q: "The ability of carbon atoms to form chains is called:",
        options: ["Catenation", "Esterification", "Substitution", "Combustion"],
        answer: 0
      },
      {
        q: "Which of the following is a saturated hydrocarbon?",
        options: ["Ethene", "Ethyne", "Ethane", "Propene"],
        answer: 2
      },
      {
        q: "What is the general formula of open-chain alkanes?",
        options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"],
        answer: 1
      },
      {
        q: "Which compound contains a carbon-carbon double bond?",
        options: ["Methane", "Ethane", "Ethene", "Propane"],
        answer: 2
      },
      {
        q: "Successive members of a homologous series differ by:",
        options: ["–CH₃", "–CH₂–", "–OH", "–COOH"],
        answer: 1
      },
      {
        q: "What is the molecular formula of ethanol?",
        options: ["CH₃OH", "C₂H₅OH", "CH₃COOH", "C₂H₆"],
        answer: 1
      },
      {
        q: "Which functional group is present in ethanoic acid?",
        options: ["–OH", "–CHO", "–COOH", "–Cl"],
        answer: 2
      },
      {
        q: "Ethanol reacts with sodium to release:",
        options: ["Carbon dioxide", "Hydrogen", "Oxygen", "Nitrogen"],
        answer: 1
      },
      {
        q: "Oxidation of ethanol produces:",
        options: ["Methane", "Ethanoic acid", "Ethene only", "Sodium ethoxide only"],
        answer: 1
      },
      {
        q: "Which gas is released when ethanoic acid reacts with sodium hydrogencarbonate?",
        options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Chlorine"],
        answer: 2
      },
      {
        q: "The reaction between ethanol and ethanoic acid forms:",
        options: ["An ester and water", "A soap and hydrogen", "Only carbon dioxide", "A metal oxide"],
        answer: 0
      },
      {
        q: "Which catalyst is commonly used for hydrogenation of vegetable oils?",
        options: ["Nickel", "Sodium chloride", "Calcium carbonate", "Copper sulphate"],
        answer: 0
      },
      {
        q: "Which type of reaction is characteristic of saturated hydrocarbons with chlorine in sunlight?",
        options: ["Addition", "Substitution", "Neutralisation", "Precipitation"],
        answer: 1
      },
      {
        q: "Why do soaps form scum in hard water?",
        options: [
          "Water evaporates immediately",
          "Calcium and magnesium ions form insoluble salts",
          "Soap becomes a metal",
          "Oxygen is released"
        ],
        answer: 1
      },
      {
        q: "Which structure helps soap suspend oily dirt in water?",
        options: ["Crystal lattice", "Micelle", "Metallic bond", "Salt bridge"],
        answer: 1
      },
      {
        q: "Which end of a soap molecule interacts with oil and grease?",
        options: ["Hydrophobic hydrocarbon tail", "Hydrophilic ionic head", "Both ends are identical", "Neither end"],
        answer: 0
      },
      {
        q: "Complete combustion of methane produces:",
        options: [
          "Carbon dioxide and water",
          "Carbon monoxide only",
          "Hydrogen and chlorine",
          "Carbon and nitrogen"
        ],
        answer: 0
      },
      {
        q: "Which statement about detergents is generally correct?",
        options: [
          "They never clean in water",
          "They generally work better than soaps in hard water",
          "They are always natural oils",
          "They always form scum with calcium ions"
        ],
        answer: 1
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Carbon and Its Compounds",
    images: [
      "images/infographics/science/carbon-compounds.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Carbon and Its Compounds content loaded.");
})();
/* =========================================================
   CLASS 10 HUB — PART 6
   SCIENCE: LIFE PROCESSES
   CBSE EXAM-FOCUSED CHAPTER CONTENT
   Append below Part 5 in content.js
========================================================= */

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "science::Life Processes";

  const data = {
    overview:
      "Life processes are the basic activities that living organisms perform to maintain life. This chapter covers nutrition, photosynthesis, digestion, respiration, transportation in humans and plants, and excretion. Focus on biological processes, differences, labelled diagrams and important functions.",

    keyPoints: [
      "The major life processes include nutrition, respiration, transportation and excretion.",
      "Autotrophs prepare their own food, whereas heterotrophs depend on other organisms for food.",
      "Photosynthesis uses carbon dioxide, water, sunlight and chlorophyll to prepare carbohydrates.",
      "Stomata allow gaseous exchange and help regulate water loss in plants.",
      "Human digestion begins in the mouth, where saliva contains salivary amylase.",
      "Hydrochloric acid in the stomach creates an acidic medium and helps kill many microbes.",
      "Bile is produced by the liver and stored in the gall bladder; it helps emulsify fats.",
      "The small intestine is the main site of digestion completion and nutrient absorption.",
      "Respiration releases energy from food; it may be aerobic or anaerobic.",
      "Aerobic respiration uses oxygen and generally releases more energy than anaerobic respiration.",
      "The alveoli of the lungs provide a large surface area for gaseous exchange.",
      "In humans, the heart has four chambers and helps maintain double circulation.",
      "Arteries generally carry blood away from the heart, while veins carry blood towards it.",
      "Xylem transports water and minerals from roots to other parts of a plant.",
      "Phloem transports prepared food from source regions to other parts of the plant.",
      "The nephron is the structural and functional unit of the kidney.",
      "Kidneys filter blood and help remove nitrogenous wastes through urine formation.",
      "Plants remove or store wastes through processes such as diffusion, storage and shedding of parts.",
      "Transpiration is the loss of water vapour from aerial parts of plants, mainly through stomata.",
      "The lymphatic system returns excess tissue fluid to the bloodstream and transports absorbed fats."
    ],

    questions: {
      veryShort: [
        {
          q: "Q1. What are life processes?",
          a: "Life processes are the essential activities performed by living organisms to maintain life, such as nutrition, respiration, transportation and excretion."
        },
        {
          q: "Q2. What is nutrition?",
          a: "Nutrition is the process by which organisms obtain food and use it for energy, growth, repair and maintenance."
        },
        {
          q: "Q3. What is autotrophic nutrition?",
          a: "It is a mode of nutrition in which organisms prepare their own food from simple inorganic substances."
        },
        {
          q: "Q4. Name the green pigment required for photosynthesis.",
          a: "Chlorophyll."
        },
        {
          q: "Q5. Which gas is taken in by plants during photosynthesis?",
          a: "Carbon dioxide."
        },
        {
          q: "Q6. Which tiny pores on leaves help in gaseous exchange?",
          a: "Stomata."
        },
        {
          q: "Q7. Which enzyme is present in saliva?",
          a: "Salivary amylase."
        },
        {
          q: "Q8. What is the function of hydrochloric acid in the stomach?",
          a: "It creates an acidic medium for the action of pepsin and helps kill many microbes."
        },
        {
          q: "Q9. Which organ produces bile?",
          a: "The liver."
        },
        {
          q: "Q10. Where is bile stored?",
          a: "In the gall bladder."
        },
        {
          q: "Q11. Where does most absorption of digested food occur in humans?",
          a: "In the small intestine."
        },
        {
          q: "Q12. What is the main function of haemoglobin?",
          a: "It transports oxygen in the blood."
        },
        {
          q: "Q13. What is the basic unit of the lungs for gaseous exchange?",
          a: "The alveolus; plural: alveoli."
        },
        {
          q: "Q14. How many chambers are present in the human heart?",
          a: "Four."
        },
        {
          q: "Q15. Which blood vessels generally carry blood away from the heart?",
          a: "Arteries."
        },
        {
          q: "Q16. Which tissue transports water and minerals in plants?",
          a: "Xylem."
        },
        {
          q: "Q17. Which tissue transports prepared food in plants?",
          a: "Phloem."
        },
        {
          q: "Q18. What is the structural and functional unit of the kidney?",
          a: "The nephron."
        },
        {
          q: "Q19. What is transpiration?",
          a: "Transpiration is the loss of water vapour from the aerial parts of a plant, mainly through stomata."
        },
        {
          q: "Q20. Name the main nitrogenous waste excreted by healthy humans.",
          a: "Urea."
        }
      ],

      short: [
        {
          q: "Q1. Why are life processes necessary for living organisms?",
          a: "Living organisms require energy and materials to grow, repair damaged parts and maintain their bodies. Nutrition supplies food, respiration releases usable energy, transportation distributes materials, and excretion removes harmful metabolic wastes. These processes help organisms maintain life."
        },
        {
          q: "Q2. Write the word equation for photosynthesis and state its requirements.",
          a: "Photosynthesis is the process by which green plants prepare carbohydrates from carbon dioxide and water using light energy absorbed by chlorophyll.\n\nCarbon dioxide + Water → Glucose + Oxygen\n\nRequirements: sunlight, chlorophyll, carbon dioxide and water. The equation represents the overall process; glucose may be converted into other carbohydrates or stored as starch."
        },
        {
          q: "Q3. Explain the role of saliva in digestion.",
          a: "Saliva moistens food and helps form a bolus that can be swallowed easily. It contains salivary amylase, which begins the digestion of starch into simpler sugars. Saliva also helps dissolve substances so that they can be tasted."
        },
        {
          q: "Q4. State the functions of hydrochloric acid and pepsin in the stomach.",
          a: "Hydrochloric acid makes the stomach contents acidic, creating a suitable medium for pepsin and helping kill many microbes. Pepsin is a protein-digesting enzyme that breaks proteins into smaller peptides. The stomach's mucus lining helps protect its wall from acid and digestive enzymes."
        },
        {
          q: "Q5. What is the role of bile in digestion?",
          a: "Bile is produced by the liver and stored in the gall bladder. It neutralises acidic food arriving from the stomach and provides an alkaline medium for intestinal enzymes. Bile salts emulsify large fat globules into smaller droplets, increasing the surface area for lipase action."
        },
        {
          q: "Q6. Differentiate between aerobic and anaerobic respiration.",
          a: "Aerobic respiration uses oxygen and generally breaks down glucose completely into carbon dioxide and water, releasing more energy. Anaerobic respiration occurs without oxygen and releases less energy. In yeast, anaerobic breakdown produces ethanol and carbon dioxide; in human muscles under oxygen shortage, it can produce lactic acid."
        },
        {
          q: "Q7. How are alveoli adapted for gaseous exchange?",
          a: "Alveoli are present in large numbers, providing a very large surface area. Their walls are thin and moist, and they are surrounded by a dense network of blood capillaries. These features allow oxygen and carbon dioxide to diffuse efficiently between air and blood."
        },
        {
          q: "Q8. What is double circulation in humans?",
          a: "In double circulation, blood passes through the heart twice during one complete circuit of the body. The pulmonary circuit carries blood from the heart to the lungs and back. The systemic circuit carries blood from the heart to the body and back. This helps keep oxygenated and deoxygenated blood largely separate."
        },
        {
          q: "Q9. Differentiate between xylem and phloem.",
          a: "Xylem transports water and dissolved minerals mainly from roots towards the aerial parts of a plant; most of its conducting elements are dead at maturity. Phloem transports sugars and other organic nutrients from source regions to sink regions. Phloem transport can occur in different directions according to the plant's needs and requires energy."
        },
        {
          q: "Q10. Explain the main steps of urine formation in a nephron.",
          a: "Urine formation involves three major processes. First, ultrafiltration occurs as blood is filtered in the glomerulus. Second, selective reabsorption returns useful substances such as glucose, amino acids, salts and much of the water to the blood. Third, additional wastes and ions may be secreted into the tubule. The remaining fluid forms urine."
        }
      ],

      long: [
        {
          q: "Q1. Explain the process of nutrition in human beings.",
          a: "Human nutrition is holozoic and involves ingestion, digestion, absorption, assimilation and egestion.\n\n1. Ingestion: Food enters the body through the mouth. The teeth chew food, and the tongue mixes it with saliva.\n\n2. Digestion in the mouth: Salivary amylase begins the breakdown of starch. The tongue helps form food into a bolus for swallowing.\n\n3. Digestion in the stomach: Gastric glands release hydrochloric acid, pepsin and mucus. The acidic medium supports pepsin action, which begins protein digestion. Mucus protects the stomach lining.\n\n4. Digestion in the small intestine: Bile from the liver helps neutralise acidic food and emulsifies fats. Pancreatic and intestinal enzymes break carbohydrates, proteins and fats into simpler molecules.\n\n5. Absorption: The inner surface of the small intestine contains numerous finger-like villi that increase surface area. Digested nutrients pass into blood or lymph for transport.\n\n6. Assimilation: Body cells use absorbed nutrients for energy, growth and repair. Excess nutrients may be stored.\n\n7. Egestion: Undigested material passes into the large intestine, where water and salts are absorbed. The remaining waste is expelled through the anus."
        },
        {
          q: "Q2. Describe photosynthesis and explain how plants obtain the materials needed for it.",
          a: "Photosynthesis is the process by which green plants use light energy to prepare carbohydrates from carbon dioxide and water in the presence of chlorophyll. Oxygen is released as a by-product.\n\nOverall word equation:\n\nCarbon dioxide + Water → Glucose + Oxygen\n\nRequirements and their sources:\n\n1. Sunlight: Chlorophyll in chloroplasts absorbs light energy.\n\n2. Carbon dioxide: It enters leaves through stomata by diffusion.\n\n3. Water: Roots absorb water from the soil. It is transported to leaves through xylem.\n\n4. Chlorophyll: This green pigment captures light energy needed for the process.\n\nStomata are controlled by guard cells, which regulate their opening and closing. The carbohydrates produced may be used immediately or converted into starch for storage. Photosynthesis provides food for plants and supports most food chains."
        },
        {
          q: "Q3. Explain the process of respiration in humans and describe gaseous exchange in the lungs.",
          a: "Respiration is the process by which food molecules are broken down to release energy. In humans, air enters through the nostrils and passes through the nasal cavity, pharynx, larynx, trachea, bronchi and bronchioles before reaching the alveoli.\n\nThe nasal passages help filter, warm and moisten incoming air. The diaphragm and intercostal muscles change the volume of the chest cavity during breathing, helping air move into and out of the lungs.\n\nThe alveoli have thin, moist walls, a large surface area and a rich blood supply. Oxygen diffuses from the air in the alveoli into the blood and binds to haemoglobin in red blood cells. Carbon dioxide diffuses from the blood into the alveoli and is removed during exhalation.\n\nInside cells, glucose is broken down during cellular respiration. In aerobic respiration, glucose is broken down in the presence of oxygen to form carbon dioxide and water, releasing energy. When oxygen is insufficient, muscle cells can produce lactic acid; yeast can produce ethanol and carbon dioxide through anaerobic respiration."
        },
        {
          q: "Q4. Describe the structure and working of the human heart. Why is double circulation important?",
          a: "The human heart is a muscular organ with four chambers: the right atrium, right ventricle, left atrium and left ventricle. Valves help prevent the backward flow of blood.\n\n1. Deoxygenated blood from the body enters the right atrium through the venae cavae. It passes into the right ventricle and is pumped to the lungs through the pulmonary artery.\n\n2. In the lungs, blood releases carbon dioxide and takes up oxygen.\n\n3. Oxygenated blood returns to the left atrium through the pulmonary veins. It passes into the left ventricle, which pumps it to the body through the aorta.\n\nDouble circulation means that blood passes through the heart twice in one complete circuit: once through the pulmonary circuit and once through the systemic circuit.\n\nImportance:\n\n• It helps keep oxygenated and deoxygenated blood separate.\n• It supports efficient oxygen delivery to body tissues.\n• The left ventricle generates the pressure needed to send blood throughout the body.\n• It supports the high energy requirements of humans."
        },
        {
          q: "Q5. Explain excretion in humans, including the role of the nephron.",
          a: "Excretion is the removal of metabolic wastes from the body. In humans, the urinary system consists of two kidneys, two ureters, the urinary bladder and the urethra.\n\nThe kidneys filter blood and remove nitrogenous wastes such as urea, along with excess water and salts. The nephron is the structural and functional unit of a kidney.\n\nUrine formation:\n\n1. Ultrafiltration: Blood enters the glomerulus under pressure. Water and small dissolved substances pass into Bowman's capsule, while blood cells and most proteins remain in the blood.\n\n2. Selective reabsorption: Useful substances, including glucose, amino acids, required salts and much of the water, are reabsorbed into surrounding capillaries.\n\n3. Tubular secretion: Certain additional ions and wastes are secreted from blood into the tubule.\n\nThe fluid left in the tubule becomes urine. Urine passes through the ureters to the urinary bladder, where it is stored temporarily, and is later released through the urethra.\n\nKidneys also help regulate water and salt balance. If kidney function is severely impaired, dialysis may be used to remove wastes and excess water from the blood."
        }
      ]
    },

    flashcards: [
      { q: "Name four major life processes.", a: "Nutrition, respiration, transportation and excretion." },
      { q: "What is nutrition?", a: "Obtaining and using food." },
      { q: "What is autotrophic nutrition?", a: "Preparing food from simple inorganic substances." },
      { q: "What is heterotrophic nutrition?", a: "Obtaining food from other organisms or organic matter." },
      { q: "Which pigment absorbs light for photosynthesis?", a: "Chlorophyll." },
      { q: "Which gas enters leaves for photosynthesis?", a: "Carbon dioxide." },
      { q: "Which pores regulate gas exchange in leaves?", a: "Stomata." },
      { q: "Which cells control the opening of stomata?", a: "Guard cells." },
      { q: "Which enzyme in saliva starts starch digestion?", a: "Salivary amylase." },
      { q: "Which acid is present in the stomach?", a: "Hydrochloric acid." },
      { q: "Which stomach enzyme digests proteins?", a: "Pepsin." },
      { q: "Which organ produces bile?", a: "Liver." },
      { q: "Where is bile stored?", a: "Gall bladder." },
      { q: "What does bile do to fats?", a: "Emulsifies large fat globules into smaller droplets." },
      { q: "Where is most digested food absorbed?", a: "Small intestine." },
      { q: "What increases absorption area in the small intestine?", a: "Villi." },
      { q: "What is aerobic respiration?", a: "Energy release from food using oxygen." },
      { q: "What is anaerobic respiration in yeast?", a: "Breakdown producing ethanol and carbon dioxide without oxygen." },
      { q: "What is the main respiratory pigment in humans?", a: "Haemoglobin." },
      { q: "Where does gaseous exchange occur in lungs?", a: "Alveoli." },
      { q: "How many chambers does the human heart have?", a: "Four." },
      { q: "What is double circulation?", a: "Blood passes through the heart twice per complete circuit." },
      { q: "Which vessel carries blood from the heart to the lungs?", a: "Pulmonary artery." },
      { q: "Which vessels return oxygenated blood from lungs?", a: "Pulmonary veins." },
      { q: "Which plant tissue transports water and minerals?", a: "Xylem." },
      { q: "Which plant tissue transports prepared food?", a: "Phloem." },
      { q: "What is transpiration?", a: "Loss of water vapour from aerial parts of plants." },
      { q: "What is the functional unit of the kidney?", a: "Nephron." },
      { q: "Name the main nitrogenous waste in human urine.", a: "Urea." },
      { q: "What is dialysis?", a: "A treatment that removes wastes and excess water from blood when kidneys cannot do so adequately." }
    ],

    mcqs: [
      {
        q: "Which of the following is a life process?",
        options: ["Nutrition", "Rusting", "Melting", "Evaporation only"],
        answer: 0
      },
      {
        q: "Which organism shows autotrophic nutrition?",
        options: ["Human", "Mushroom", "Green plant", "Tapeworm"],
        answer: 2
      },
      {
        q: "Which substance absorbs light energy during photosynthesis?",
        options: ["Haemoglobin", "Chlorophyll", "Pepsin", "Insulin"],
        answer: 1
      },
      {
        q: "Which gas is used by green plants during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: 2
      },
      {
        q: "Which enzyme in saliva begins starch digestion?",
        options: ["Pepsin", "Trypsin", "Salivary amylase", "Lipase only"],
        answer: 2
      },
      {
        q: "What is the role of hydrochloric acid in the stomach?",
        options: [
          "It emulsifies fats",
          "It creates an acidic medium for pepsin",
          "It transports oxygen",
          "It forms urine"
        ],
        answer: 1
      },
      {
        q: "Which organ produces bile?",
        options: ["Pancreas", "Liver", "Kidney", "Small intestine"],
        answer: 1
      },
      {
        q: "Bile helps in the digestion of fats by:",
        options: [
          "Converting fats directly into glucose",
          "Emulsifying large fat globules",
          "Transporting oxygen",
          "Breaking down starch in the mouth"
        ],
        answer: 1
      },
      {
        q: "Most absorption of digested food occurs in the:",
        options: ["Stomach", "Oesophagus", "Small intestine", "Large intestine"],
        answer: 2
      },
      {
        q: "Which process generally releases more energy from glucose?",
        options: ["Aerobic respiration", "Anaerobic respiration", "Diffusion", "Transpiration"],
        answer: 0
      },
      {
        q: "Which product may form during anaerobic respiration in human muscles?",
        options: ["Ethanol", "Lactic acid", "Urea", "Bile"],
        answer: 1
      },
      {
        q: "Gaseous exchange in the lungs takes place mainly in:",
        options: ["Trachea", "Alveoli", "Larynx", "Diaphragm"],
        answer: 1
      },
      {
        q: "How many chambers are present in the human heart?",
        options: ["Two", "Three", "Four", "Five"],
        answer: 2
      },
      {
        q: "Which blood vessel carries blood from the right ventricle to the lungs?",
        options: ["Aorta", "Vena cava", "Pulmonary artery", "Pulmonary vein"],
        answer: 2
      },
      {
        q: "Which plant tissue transports water and minerals?",
        options: ["Phloem", "Xylem", "Epidermis only", "Stomata"],
        answer: 1
      },
      {
        q: "Which plant tissue transports sugars?",
        options: ["Xylem", "Phloem", "Root cap", "Cork only"],
        answer: 1
      },
      {
        q: "The loss of water vapour from the aerial parts of plants is called:",
        options: ["Respiration", "Transpiration", "Digestion", "Filtration"],
        answer: 1
      },
      {
        q: "What is the functional unit of the kidney?",
        options: ["Neuron", "Alveolus", "Nephron", "Villus"],
        answer: 2
      },
      {
        q: "Which process filters small substances from blood in the glomerulus?",
        options: ["Ultrafiltration", "Photosynthesis", "Emulsification", "Egestion"],
        answer: 0
      },
      {
        q: "What is the main nitrogenous waste excreted by healthy humans?",
        options: ["Oxygen", "Urea", "Starch", "Chlorophyll"],
        answer: 1
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Life Processes",
    images: [
      "images/infographics/science/life-processes.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Life Processes content loaded.");
})();
/* =========================================================
   CLASS 10 HUB — PART 7
   SCIENCE: CONTROL AND COORDINATION
   CBSE EXAM-FOCUSED CHAPTER CONTENT
   Append below Part 6 in content.js
========================================================= */

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "science::Control and Coordination";

  const data = {
    overview:
      "Control and coordination help organisms respond to changes in their surroundings. Animals use nervous and hormonal systems, while plants coordinate their responses mainly through chemical substances and growth movements. Study neuron structure, reflex arcs, brain functions, endocrine glands and plant hormones.",

    keyPoints: [
      "Coordination enables different organs to work together in response to internal and external changes.",
      "The nervous system uses electrical impulses and chemical neurotransmitters to transmit information.",
      "A neuron is the structural and functional unit of the nervous system.",
      "The main parts of a neuron are dendrites, the cell body and the axon.",
      "A synapse is the junction between two neurons or between a neuron and an effector.",
      "A reflex action is a rapid, automatic response to a stimulus.",
      "A reflex arc is the pathway followed by nerve impulses during a reflex action.",
      "The central nervous system consists of the brain and spinal cord.",
      "The forebrain is involved in thinking, memory, sensory interpretation and voluntary actions.",
      "The cerebellum helps maintain posture, balance and precision of voluntary movements.",
      "The medulla controls several involuntary activities, including breathing and blood pressure regulation.",
      "Receptors detect stimuli, while effectors such as muscles and glands produce responses.",
      "Plants do not have a nervous system like animals; they coordinate many responses through chemical signals and growth changes.",
      "Auxin promotes cell elongation in shoots and plays a role in phototropism.",
      "Phototropism is a growth response to light.",
      "Geotropism or gravitropism is a growth response to gravity.",
      "Hydrotropism is a growth response to water.",
      "Thigmotropism is a growth response to touch or contact.",
      "Plant hormones include auxins, gibberellins, cytokinins and abscisic acid.",
      "In animals, endocrine glands release hormones into the bloodstream.",
      "Insulin helps regulate blood glucose levels.",
      "Thyroxine regulates metabolism and requires iodine for its synthesis.",
      "Adrenaline prepares the body for emergency situations.",
      "Growth hormone from the pituitary gland supports normal body growth.",
      "Testosterone and oestrogen are important sex hormones involved in puberty and reproductive development."
    ],

    questions: {
      veryShort: [
        {
          q: "Q1. What is coordination?",
          a: "Coordination is the organised working together of different organs and systems to produce suitable responses."
        },
        {
          q: "Q2. What is a stimulus?",
          a: "A stimulus is a change in the internal or external environment that can be detected and produce a response."
        },
        {
          q: "Q3. What is a neuron?",
          a: "A neuron is a specialised nerve cell that receives and transmits information."
        },
        {
          q: "Q4. Name the three main parts of a neuron.",
          a: "Dendrites, cell body and axon."
        },
        {
          q: "Q5. What is a synapse?",
          a: "A synapse is the junction between two neurons or between a neuron and another target cell."
        },
        {
          q: "Q6. What is a reflex action?",
          a: "A reflex action is a rapid, automatic response to a stimulus."
        },
        {
          q: "Q7. What is a reflex arc?",
          a: "A reflex arc is the pathway followed by nerve impulses during a reflex action."
        },
        {
          q: "Q8. Name the two main parts of the central nervous system.",
          a: "The brain and the spinal cord."
        },
        {
          q: "Q9. Which part of the brain helps maintain balance?",
          a: "The cerebellum."
        },
        {
          q: "Q10. Which brain region controls many involuntary activities?",
          a: "The medulla, part of the hindbrain."
        },
        {
          q: "Q11. Which part of the neuron receives signals?",
          a: "Dendrites."
        },
        {
          q: "Q12. What are effectors?",
          a: "Effectors are muscles or glands that carry out a response."
        },
        {
          q: "Q13. What is phototropism?",
          a: "Phototropism is the growth response of a plant part to light."
        },
        {
          q: "Q14. What is geotropism?",
          a: "Geotropism is the growth response of a plant part to gravity."
        },
        {
          q: "Q15. Name a plant hormone that promotes cell elongation in shoots.",
          a: "Auxin."
        },
        {
          q: "Q16. Which plant hormone helps in cell division?",
          a: "Cytokinin."
        },
        {
          q: "Q17. Which hormone helps regulate blood glucose levels?",
          a: "Insulin."
        },
        {
          q: "Q18. Which gland produces thyroxine?",
          a: "The thyroid gland."
        },
        {
          q: "Q19. Which hormone is associated with emergency responses?",
          a: "Adrenaline."
        },
        {
          q: "Q20. Which hormone is important for male secondary sexual characteristics?",
          a: "Testosterone."
        }
      ],

      short: [
        {
          q: "Q1. Why is coordination necessary in multicellular organisms?",
          a: "Multicellular organisms contain many specialised organs that perform different functions. These organs must work together in an organised manner. Coordination allows the body to detect changes, process information and produce suitable responses, helping maintain normal functioning and survival."
        },
        {
          q: "Q2. Describe the structure and function of a neuron.",
          a: "A neuron consists of a cell body containing the nucleus, branched dendrites and a long axon. Dendrites receive signals, and the cell body processes information. The axon carries nerve impulses away from the cell body towards another neuron, muscle or gland. At a synapse, chemical neurotransmitters commonly help pass the signal to the next cell."
        },
        {
          q: "Q3. Explain the pathway of a simple reflex action.",
          a: "A receptor detects a stimulus and sends an impulse along a sensory neuron to the spinal cord. The signal is relayed through one or more neurons, often including a relay neuron, to a motor neuron. The motor neuron carries the impulse to an effector such as a muscle, which produces the response. The brain is also informed of the event."
        },
        {
          q: "Q4. State the functions of the forebrain, cerebellum and medulla.",
          a: "The forebrain interprets sensory information and is involved in thinking, memory, learning and voluntary actions. The cerebellum coordinates voluntary movements and helps maintain balance and posture. The medulla controls several involuntary functions, such as breathing and regulation of heart activity and blood pressure."
        },
        {
          q: "Q5. Why are reflex actions useful?",
          a: "Reflex actions produce rapid and automatic responses to certain stimuli. They can reduce the time taken to react to potentially harmful situations. Many simple reflexes are coordinated through the spinal cord, although the brain may receive information about the event."
        },
        {
          q: "Q6. What is phototropism? Explain how a shoot bends towards light.",
          a: "Phototropism is the growth response of a plant part to light. When light comes from one direction, auxin distribution in a shoot can become uneven. Cells on the shaded side generally elongate more than those on the illuminated side, causing the shoot to bend towards the light."
        },
        {
          q: "Q7. Differentiate between nervous and hormonal coordination.",
          a: "Nervous coordination mainly uses electrical impulses along neurons and neurotransmitters at synapses. It is generally rapid and often has a localised effect. Hormonal coordination uses chemical messengers released by endocrine glands into the blood. Its effects are often slower to begin and may last longer, depending on the hormone and target tissue."
        },
        {
          q: "Q8. What are plant hormones? Name four examples.",
          a: "Plant hormones are chemical substances that regulate plant growth, development and responses. Auxins promote cell elongation, gibberellins support stem growth and other developmental processes, cytokinins promote cell division, and abscisic acid is associated with growth inhibition and responses such as stomatal closure during water stress."
        },
        {
          q: "Q9. Explain the role of insulin and thyroxine.",
          a: "Insulin is produced by the pancreas and helps lower blood glucose by promoting glucose uptake and storage. Thyroxine is produced by the thyroid gland and regulates metabolism and normal growth and development. The thyroid needs iodine to synthesise thyroxine; iodine deficiency can lead to goitre."
        },
        {
          q: "Q10. How do chemical signals coordinate activities in animals?",
          a: "Endocrine glands release hormones directly into the bloodstream. The hormones travel to target cells or organs that have suitable receptors. When a hormone binds to its receptor, it changes the activity of the target cells. Hormones regulate processes such as growth, metabolism, blood glucose control, stress responses and reproduction."
        }
      ],

      long: [
        {
          q: "Q1. Explain how information is transmitted through a neuron and across a synapse.",
          a: "A neuron is a specialised cell that carries information through electrical and chemical signals. Its main parts are dendrites, the cell body and the axon.\n\n1. Reception: Dendrites receive a stimulus or signal from a receptor or another neuron.\n\n2. Processing: The signal is passed towards the cell body, where incoming information is integrated.\n\n3. Impulse conduction: If the signal is sufficient to trigger an action potential, an electrical impulse travels along the axon.\n\n4. Transmission at the axon terminal: When the impulse reaches the terminal, it can cause the release of chemical neurotransmitters.\n\n5. Synaptic transmission: Neurotransmitters cross the tiny synaptic gap and bind to receptors on the next cell. This may initiate a new electrical signal or another response.\n\n6. Response: The signal may pass to another neuron or activate an effector such as a muscle or gland.\n\nSynapses help transmit information between cells and support organised communication within the nervous system. The direction of signalling across a typical chemical synapse is controlled by neurotransmitter release from the sending cell and receptors on the receiving cell."
        },
        {
          q: "Q2. Describe the human nervous system and explain the functions of the major parts of the brain.",
          a: "The nervous system receives information, processes it and coordinates responses. The central nervous system consists of the brain and spinal cord. The peripheral nervous system consists of nerves connecting the central nervous system with receptors, muscles and glands.\n\nMajor parts of the brain:\n\n1. Forebrain: It includes regions involved in interpreting sensory information, thinking, memory, learning and voluntary actions. The cerebrum is a major part of the forebrain.\n\n2. Midbrain: It participates in several pathways and reflex responses associated with visual and auditory information.\n\n3. Hindbrain: It includes the cerebellum, pons and medulla.\n\n4. Cerebellum: It coordinates voluntary movements and helps maintain posture and balance.\n\n5. Medulla: It regulates several involuntary activities, including breathing, heart activity and blood pressure.\n\nThe brain is protected by the skull, membranes called meninges and cerebrospinal fluid. The spinal cord carries messages between the brain and body and coordinates many reflex actions. Together, these structures enable the body to respond appropriately to stimuli."
        },
        {
          q: "Q3. What is a reflex action? Explain a reflex arc with an example.",
          a: "A reflex action is a quick, automatic response to a stimulus. For example, withdrawing a hand after touching a very hot object is a protective reflex.\n\nThe pathway followed by the nerve impulse is called a reflex arc.\n\n1. Receptor: Receptors in the skin detect the harmful stimulus.\n\n2. Sensory neuron: It carries the impulse from the receptor towards the spinal cord.\n\n3. Relay neuron: Within the spinal cord, the impulse is passed through connecting neurons in a typical withdrawal reflex.\n\n4. Motor neuron: It carries a signal from the spinal cord to the relevant muscle.\n\n5. Effector: The muscle contracts and pulls the hand away.\n\nThe brain is informed as well, so the person becomes aware of the pain. The rapid spinal response helps reduce delay. Not every reflex uses exactly the same pathway; some reflexes involve the brainstem or other parts of the nervous system."
        },
        {
          q: "Q4. Explain how plants respond to stimuli. Describe tropic movements and the role of plant hormones.",
          a: "Plants do not possess a nervous system like animals, but they respond to light, gravity, water, touch and other stimuli. Some responses involve growth, while others involve changes in cell pressure or chemical activity.\n\nTypes of tropic movements:\n\n1. Phototropism: Growth in response to light. Shoots usually grow towards light.\n\n2. Geotropism or gravitropism: Growth in response to gravity. Roots generally show positive gravitropism by growing towards gravity, while shoots usually show negative gravitropism.\n\n3. Hydrotropism: Growth in response to water. Roots can grow towards regions with greater water availability.\n\n4. Thigmotropism: Growth in response to touch. Tendrils of climbing plants coil around a support.\n\nPlant hormones regulate these responses. Auxins influence cell elongation and are important in shoot phototropism. Gibberellins promote stem growth and other developmental processes. Cytokinins promote cell division. Abscisic acid is associated with growth inhibition and stress responses, including stomatal closure during water shortage.\n\nThrough chemical signals and changes in growth, plants adjust their development to environmental conditions."
        },
        {
          q: "Q5. Explain hormonal coordination in humans, giving the functions of important hormones.",
          a: "Hormonal coordination is carried out by the endocrine system. Endocrine glands release hormones into the bloodstream, which transports them to target cells containing suitable receptors. Hormones regulate growth, metabolism, blood glucose, stress responses and reproduction.\n\nImportant hormones and their functions:\n\n1. Growth hormone: Secreted by the pituitary gland; it supports normal growth of the body.\n\n2. Thyroxine: Secreted by the thyroid gland; it regulates metabolism and supports normal growth and development. Iodine is required for its synthesis.\n\n3. Insulin: Produced by the pancreas; it helps regulate blood glucose levels by promoting glucose uptake and storage.\n\n4. Adrenaline: Released by the adrenal glands during stressful or emergency situations; it prepares the body for rapid action by increasing heart rate and directing resources towards immediate needs.\n\n5. Testosterone: Produced mainly by the testes; it supports the development of male secondary sexual characteristics and reproductive functions.\n\n6. Oestrogen: Produced mainly by the ovaries; it contributes to the development of female secondary sexual characteristics and regulation of the reproductive cycle.\n\nHormone levels are commonly controlled through feedback mechanisms. For example, feedback regulation helps maintain suitable levels of thyroid hormones. The nervous and endocrine systems work together to coordinate the body's activities."
        }
      ]
    },

    flashcards: [
      { q: "What is coordination?", a: "Organised working together of body parts." },
      { q: "What is a stimulus?", a: "A detectable change that can produce a response." },
      { q: "What is a neuron?", a: "A specialised nerve cell." },
      { q: "Name the three main parts of a neuron.", a: "Dendrites, cell body and axon." },
      { q: "What do dendrites do?", a: "They receive signals." },
      { q: "What is the function of the axon?", a: "It carries impulses away from the cell body." },
      { q: "What is a synapse?", a: "A junction where a signal passes between cells." },
      { q: "What is a reflex action?", a: "A rapid, automatic response to a stimulus." },
      { q: "What is a reflex arc?", a: "The pathway followed by impulses during a reflex." },
      { q: "Name the parts of the central nervous system.", a: "Brain and spinal cord." },
      { q: "Which brain region is important for thinking and memory?", a: "The forebrain, including the cerebrum." },
      { q: "Which brain part helps maintain balance?", a: "Cerebellum." },
      { q: "What does the medulla control?", a: "Several involuntary activities, including breathing and heart activity." },
      { q: "What are effectors?", a: "Muscles or glands that produce a response." },
      { q: "What is phototropism?", a: "Plant growth response to light." },
      { q: "What is geotropism?", a: "Plant growth response to gravity." },
      { q: "What is hydrotropism?", a: "Plant growth response to water." },
      { q: "What is thigmotropism?", a: "Plant growth response to touch." },
      { q: "Name a hormone that promotes shoot cell elongation.", a: "Auxin." },
      { q: "Which plant hormone promotes cell division?", a: "Cytokinin." },
      { q: "Which plant hormone is associated with stress responses and growth inhibition?", a: "Abscisic acid." },
      { q: "Which gland secretes thyroxine?", a: "Thyroid gland." },
      { q: "Which mineral is required to make thyroxine?", a: "Iodine." },
      { q: "Which organ produces insulin?", a: "Pancreas." },
      { q: "What does insulin help regulate?", a: "Blood glucose levels." },
      { q: "Which hormone prepares the body for emergencies?", a: "Adrenaline." },
      { q: "Which gland secretes growth hormone?", a: "Pituitary gland." },
      { q: "Which hormone supports male secondary sexual characteristics?", a: "Testosterone." },
      { q: "Which hormone contributes to female secondary sexual characteristics?", a: "Oestrogen." },
      { q: "What is hormonal coordination?", a: "Coordination through hormones carried in the bloodstream." }
    ],

    mcqs: [
      {
        q: "The structural and functional unit of the nervous system is the:",
        options: ["Nephron", "Neuron", "Alveolus", "Villus"],
        answer: 1
      },
      {
        q: "Which part of a neuron generally receives signals?",
        options: ["Dendrites", "Axon terminal only", "Myelin only", "Nucleus only"],
        answer: 0
      },
      {
        q: "The junction between two neurons is called a:",
        options: ["Tendon", "Synapse", "Villus", "Nephron"],
        answer: 1
      },
      {
        q: "A rapid, automatic response to a stimulus is called:",
        options: ["Digestion", "Reflex action", "Transpiration", "Photosynthesis"],
        answer: 1
      },
      {
        q: "Which structure coordinates many simple reflex actions?",
        options: ["Spinal cord", "Gall bladder", "Pancreas", "Kidney"],
        answer: 0
      },
      {
        q: "Which part of the brain helps maintain posture and balance?",
        options: ["Cerebellum", "Cerebrum only", "Thyroid", "Pituitary"],
        answer: 0
      },
      {
        q: "Which brain region regulates breathing and several other involuntary activities?",
        options: ["Medulla", "Dendrite", "Retina", "Cerebellum only"],
        answer: 0
      },
      {
        q: "The muscles or glands that carry out a response are called:",
        options: ["Receptors", "Effectors", "Stimuli", "Synapses"],
        answer: 1
      },
      {
        q: "Growth of a shoot towards light is an example of:",
        options: ["Phototropism", "Hydrotropism", "Excretion", "Diffusion only"],
        answer: 0
      },
      {
        q: "Roots generally grow towards gravity. This is:",
        options: ["Negative phototropism", "Positive geotropism", "Thigmotropism", "Respiration"],
        answer: 1
      },
      {
        q: "Which plant hormone promotes cell elongation in shoots?",
        options: ["Auxin", "Insulin", "Adrenaline", "Thyroxine"],
        answer: 0
      },
      {
        q: "Which plant hormone is associated with cell division?",
        options: ["Cytokinin", "Testosterone", "Insulin", "Adrenaline"],
        answer: 0
      },
      {
        q: "Which gland secretes thyroxine?",
        options: ["Thyroid", "Adrenal", "Salivary", "Sweat"],
        answer: 0
      },
      {
        q: "Iodine is needed for the synthesis of:",
        options: ["Insulin", "Thyroxine", "Adrenaline only", "Auxin"],
        answer: 1
      },
      {
        q: "Which hormone helps regulate blood glucose?",
        options: ["Insulin", "Auxin", "Gibberellin", "Oestrogen only"],
        answer: 0
      },
      {
        q: "Which hormone prepares the body for an emergency?",
        options: ["Adrenaline", "Cytokinin", "Auxin", "Abscisic acid only"],
        answer: 0
      },
      {
        q: "Which gland produces growth hormone?",
        options: ["Pituitary", "Gall bladder", "Liver only", "Salivary gland"],
        answer: 0
      },
      {
        q: "Which is a major male sex hormone?",
        options: ["Testosterone", "Insulin", "Thyroxine", "Auxin"],
        answer: 0
      },
      {
        q: "Which statement correctly describes nervous coordination?",
        options: [
          "It uses only hormones in blood",
          "It commonly uses electrical impulses in neurons",
          "It occurs only in plants",
          "It never involves chemical messengers"
        ],
        answer: 1
      },
      {
        q: "Hormones usually reach their target organs through the:",
        options: ["Bloodstream", "Air passages only", "Digestive tract only", "Bone marrow only"],
        answer: 0
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Control and Coordination",
    images: [
      "images/infographics/science/control-coordination.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Control and Coordination content loaded.");
})();
/* =========================================================
   CLASS 10 HUB — PART 8
   SCIENCE: HOW DO ORGANISMS REPRODUCE?
   CBSE EXAM-FOCUSED CHAPTER CONTENT
   Append below Part 7 in content.js
========================================================= */

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "science::How Do Organisms Reproduce";

  const data = {
    overview:
      "Reproduction is the biological process through which organisms produce new individuals. This chapter covers asexual reproduction, sexual reproduction in flowering plants and humans, reproductive health, and the importance of DNA copying and variation.",

    keyPoints: [
      "Reproduction is not essential for the survival of an individual but is essential for the continuity of a species.",
      "DNA copying transfers hereditary information from parents to offspring.",
      "Small inaccuracies during DNA copying can produce variations.",
      "Asexual reproduction generally involves one parent and does not involve the fusion of gametes.",
      "Binary fission occurs when one organism divides into two individuals.",
      "Multiple fission produces several daughter cells from one parent cell.",
      "Budding occurs when a new individual develops as an outgrowth of the parent.",
      "Fragmentation and regeneration are different processes; regeneration is the development of a complete organism or lost parts from suitable body tissues.",
      "Vegetative propagation produces new plants from roots, stems, leaves or other vegetative parts.",
      "Spore formation is a method of asexual reproduction in organisms such as Rhizopus.",
      "Sexual reproduction involves the formation and fusion of male and female gametes.",
      "Flowers are the reproductive structures of flowering plants.",
      "The stamen is the male reproductive part of a flower; the carpel or pistil is the female reproductive part.",
      "Pollination is the transfer of pollen grains from anther to stigma.",
      "Fertilisation is the fusion of male and female gametes.",
      "After fertilisation, the ovule generally develops into a seed and the ovary develops into a fruit.",
      "In humans, testes produce sperm and testosterone, while ovaries produce ova and female sex hormones.",
      "The sperm carries paternal genetic information, while the ovum carries maternal genetic information.",
      "The human reproductive system includes specialised organs for gamete production, fertilisation and development.",
      "The placenta enables exchange of nutrients, oxygen and wastes between maternal and foetal blood without their normally mixing directly.",
      "Menstruation occurs when fertilisation and implantation do not occur and the uterine lining is shed.",
      "Contraceptive methods help prevent unwanted pregnancy; some methods also reduce the risk of sexually transmitted infections.",
      "Barrier methods can reduce the risk of many sexually transmitted infections when used correctly.",
      "Sexually transmitted infections can be caused by bacteria, viruses and other pathogens.",
      "Sexual reproduction creates genetic variation that may help populations adapt to changing environments."
    ],

    questions: {
      veryShort: [
        {
          q: "Q1. What is reproduction?",
          a: "Reproduction is the biological process by which organisms produce new individuals of their own kind."
        },
        {
          q: "Q2. Why is reproduction important for a species?",
          a: "It ensures the continuity of the species by producing new individuals."
        },
        {
          q: "Q3. What is DNA copying?",
          a: "DNA copying is the process of making a copy of genetic material during reproduction."
        },
        {
          q: "Q4. What is asexual reproduction?",
          a: "It is reproduction that generally involves one parent without the fusion of male and female gametes."
        },
        {
          q: "Q5. What is binary fission?",
          a: "Binary fission is a process in which one parent organism divides into two daughter individuals."
        },
        {
          q: "Q6. Name an organism that reproduces by budding.",
          a: "Hydra or yeast."
        },
        {
          q: "Q7. What is fragmentation?",
          a: "Fragmentation is a process in which an organism breaks into fragments that can grow into new individuals under suitable conditions."
        },
        {
          q: "Q8. What is vegetative propagation?",
          a: "It is the production of new plants from vegetative parts such as roots, stems or leaves."
        },
        {
          q: "Q9. Which organism commonly forms spores in bread mould?",
          a: "Rhizopus."
        },
        {
          q: "Q10. What is sexual reproduction?",
          a: "It is reproduction involving the formation and fusion of male and female gametes."
        },
        {
          q: "Q11. Name the male reproductive part of a flower.",
          a: "Stamen."
        },
        {
          q: "Q12. Name the female reproductive part of a flower.",
          a: "Carpel or pistil."
        },
        {
          q: "Q13. What is pollination?",
          a: "Pollination is the transfer of pollen grains from anther to stigma."
        },
        {
          q: "Q14. What is fertilisation?",
          a: "Fertilisation is the fusion of male and female gametes to form a zygote."
        },
        {
          q: "Q15. Which organ produces sperm in human males?",
          a: "The testes."
        },
        {
          q: "Q16. Which organs produce ova in human females?",
          a: "The ovaries."
        },
        {
          q: "Q17. What is the function of the placenta?",
          a: "It enables the exchange of nutrients, oxygen and wastes between the maternal and foetal circulations."
        },
        {
          q: "Q18. What is menstruation?",
          a: "Menstruation is the periodic shedding of the uterine lining when pregnancy has not occurred."
        },
        {
          q: "Q19. What is contraception?",
          a: "Contraception refers to methods used to prevent pregnancy."
        },
        {
          q: "Q20. What are sexually transmitted infections?",
          a: "They are infections that can spread through sexual contact."
        }
      ],

      short: [
        {
          q: "Q1. Why is reproduction important even though it is not necessary for the survival of an individual?",
          a: "An individual can live without reproducing, but a species cannot continue indefinitely without producing new individuals. Reproduction replaces organisms that die and transfers hereditary information to the next generation. It therefore maintains the continuity of species."
        },
        {
          q: "Q2. How does DNA copying produce variation?",
          a: "During reproduction, DNA is copied so that hereditary information can pass to offspring. The copying process is not always perfectly accurate, so small differences may arise. Environmental influences and, in sexual reproduction, the combination of genetic material from two parents also contribute to variation."
        },
        {
          q: "Q3. Differentiate between binary fission and multiple fission.",
          a: "In binary fission, one parent organism divides to form two daughter individuals; Amoeba is a common example. In multiple fission, the nucleus divides repeatedly and the parent cell produces many daughter cells, as in Plasmodium under suitable conditions."
        },
        {
          q: "Q4. Explain budding with one example.",
          a: "In budding, a small outgrowth called a bud develops on the parent organism due to cell division. The bud grows and may detach to live independently. Hydra and yeast are examples of organisms that reproduce by budding."
        },
        {
          q: "Q5. State two advantages of vegetative propagation.",
          a: "Vegetative propagation can produce new plants quickly and preserve desirable characteristics of the parent plant. It is useful for plants that produce few viable seeds or do not produce seeds easily. The offspring are usually genetically very similar to the parent, apart from variations that may arise."
        },
        {
          q: "Q6. Differentiate between pollination and fertilisation.",
          a: "Pollination is the transfer of pollen grains from the anther to the stigma of a flower. Fertilisation is the fusion of the male gamete with the female gamete. Pollination generally occurs before fertilisation in flowering plants and helps make fertilisation possible."
        },
        {
          q: "Q7. What changes occur in a flower after fertilisation?",
          a: "After fertilisation, the zygote develops into an embryo. The ovule generally develops into a seed, and the ovary usually develops into a fruit. Other flower parts may wither and fall off, although details can vary among plant species."
        },
        {
          q: "Q8. State the functions of the testes and ovaries.",
          a: "The testes produce sperm and the hormone testosterone. The ovaries produce ova and hormones such as oestrogen and progesterone. These hormones help regulate reproductive functions and the development of secondary sexual characteristics."
        },
        {
          q: "Q9. What is the role of the placenta during pregnancy?",
          a: "The placenta forms a specialised exchange surface between maternal and foetal circulations. Oxygen and nutrients pass from the mother to the foetus, while carbon dioxide and metabolic wastes move towards the maternal circulation for removal. Maternal and foetal blood normally do not mix directly."
        },
        {
          q: "Q10. Why are contraceptive methods used? Give examples.",
          a: "Contraceptive methods help prevent unwanted pregnancy and allow people to plan the timing and spacing of children. Examples include condoms, oral contraceptive pills prescribed appropriately, intrauterine devices and surgical methods. Condoms can also reduce the risk of many sexually transmitted infections when used correctly."
        }
      ],

      long: [
        {
          q: "Q1. Explain different methods of asexual reproduction with suitable examples.",
          a: "Asexual reproduction generally involves one parent and does not require the fusion of male and female gametes. The offspring are usually genetically very similar to the parent, although variations may occur.\n\n1. Binary fission: One parent divides into two daughter individuals. It occurs in organisms such as Amoeba.\n\n2. Multiple fission: The nucleus divides repeatedly before the parent cell forms many daughter cells. Plasmodium is a familiar example.\n\n3. Budding: A small outgrowth develops on the parent through cell division, grows and may separate. Hydra and yeast reproduce by budding.\n\n4. Fragmentation: In suitable organisms, the body breaks into fragments, and each fragment may grow into a new individual. Spirogyra is a common example.\n\n5. Regeneration: Certain organisms can develop complete individuals or replace lost body parts from suitable cells or tissues. Planaria demonstrates strong regenerative ability. Regeneration is not the main reproductive method of every organism capable of repairing tissues.\n\n6. Spore formation: Organisms such as Rhizopus produce spores that can germinate under favourable conditions. Spores often have protective coverings that help them survive unfavourable conditions.\n\n7. Vegetative propagation: New plants grow from roots, stems or leaves. Examples include potato tubers, ginger rhizomes and Bryophyllum leaves.\n\nAsexual reproduction is often rapid and efficient, but it generally creates less genetic variation than sexual reproduction."
        },
        {
          q: "Q2. Describe sexual reproduction in flowering plants.",
          a: "The flower is the reproductive structure of flowering plants. It contains male and female reproductive organs.\n\n1. Male reproductive part: The stamen consists of anther and filament. The anther produces pollen grains that contain the male reproductive cells or their precursors.\n\n2. Female reproductive part: The carpel or pistil consists of stigma, style and ovary. The ovary contains ovules, each with an egg cell.\n\n3. Pollination: Pollen grains are transferred from the anther to the stigma. Pollination may occur through agents such as wind, water or animals.\n\n4. Pollen tube formation: A compatible pollen grain germinates on the stigma and forms a pollen tube that grows through the style towards an ovule.\n\n5. Fertilisation: The male gamete reaches the embryo sac and fuses with the egg cell to form a zygote. Flowering plants also undergo double fertilisation, in which another male gamete participates in forming the endosperm.\n\n6. Development: The zygote develops into an embryo. The ovule usually becomes a seed, and the ovary usually becomes a fruit.\n\nWhen conditions are favourable, the seed germinates and develops into a new plant. Sexual reproduction produces genetic variation through the combination of hereditary material."
        },
        {
          q: "Q3. Describe the human male and female reproductive systems and their main functions.",
          a: "The human reproductive systems produce gametes and enable fertilisation and development of offspring.\n\nMale reproductive system:\n\n1. Testes: Located in the scrotum, they produce sperm and testosterone. The scrotum helps maintain a temperature suitable for sperm production.\n\n2. Sperm ducts: The vas deferens transports sperm from the reproductive tract towards the urethra.\n\n3. Accessory glands: Seminal vesicles and the prostate gland add fluids that support sperm and form semen.\n\n4. Urethra and penis: The urethra carries semen out of the body through the penis; it also carries urine at different times.\n\nFemale reproductive system:\n\n1. Ovaries: They produce ova and hormones such as oestrogen and progesterone.\n\n2. Oviducts or fallopian tubes: They carry the ovum towards the uterus. Fertilisation commonly occurs in an oviduct.\n\n3. Uterus: It is the organ in which an embryo implants and develops during pregnancy.\n\n4. Cervix and vagina: The cervix is the lower opening of the uterus into the vagina. The vagina receives sperm during sexual intercourse and also functions as the birth canal.\n\nIn humans, fertilisation occurs when a sperm fuses with an ovum. The resulting zygote divides and develops, and implantation normally occurs in the uterine lining."
        },
        {
          q: "Q4. Explain the menstrual cycle, fertilisation and development of the embryo in humans.",
          a: "The menstrual cycle involves coordinated changes in the ovaries and uterine lining. Its length varies between individuals and from cycle to cycle.\n\n1. Menstruation: If pregnancy has not occurred, the thickened uterine lining breaks down and is shed with blood and tissue through the vagina.\n\n2. Development of an egg: During the cycle, an ovarian follicle develops and an ovum matures.\n\n3. Ovulation: An ovary releases an ovum, usually around the middle of a typical cycle, although the timing varies.\n\n4. Uterine preparation: Hormones help prepare and maintain the uterine lining for possible implantation.\n\n5. Fertilisation: If sperm meets the ovum in the oviduct, one sperm may fuse with it to form a zygote.\n\n6. Cell division and implantation: The zygote divides repeatedly as it travels towards the uterus. The developing embryo implants in the uterine lining.\n\n7. Development during pregnancy: The placenta supports exchange of oxygen, nutrients and wastes between maternal and foetal circulations. The embryo develops into a foetus, and organs continue to grow and mature.\n\nIf fertilisation and implantation do not occur, hormone levels change and the uterine lining is shed during menstruation. The menstrual cycle is regulated by hormones and is part of the reproductive system's normal functioning."
        },
        {
          q: "Q5. Explain reproductive health and discuss methods of contraception and prevention of sexually transmitted infections.",
          a: "Reproductive health includes physical, mental and social well-being in matters related to the reproductive system. It involves accurate information, responsible decisions, access to appropriate healthcare and prevention of infections.\n\nContraceptive methods:\n\n1. Barrier methods: Condoms physically reduce the chance of sperm reaching the egg. Condoms can also reduce the risk of many sexually transmitted infections when used correctly and consistently.\n\n2. Hormonal methods: Certain oral contraceptive pills alter hormonal regulation and prevent pregnancy. They should be selected with suitable medical guidance.\n\n3. Intrauterine devices: Some IUDs prevent pregnancy through effects within the uterus and reproductive tract. A trained healthcare professional places them.\n\n4. Surgical methods: Vasectomy in males and tubal ligation in females are intended as permanent methods of contraception.\n\nSexually transmitted infections:\n\nInfections such as gonorrhoea and syphilis are caused by bacteria, while HIV infection is caused by a virus. Some infections may have no obvious symptoms, so testing and medical advice can be important.\n\nPrevention and care:\n\n• Use condoms correctly and consistently to reduce the risk of many STIs.\n• Seek appropriate testing and treatment when exposure or symptoms are suspected.\n• Do not share needles or equipment that may be contaminated with blood.\n• Follow reliable medical advice and avoid stigma towards people living with infections.\n• Obtain reproductive-health information from qualified healthcare professionals.\n\nReproductive health education supports informed choices, safer behaviour and timely medical care."
        }
      ]
    },

    flashcards: [
      { q: "What is reproduction?", a: "The process of producing new individuals." },
      { q: "Why is reproduction important?", a: "It maintains continuity of a species." },
      { q: "What is DNA copying?", a: "Making a copy of genetic material during reproduction." },
      { q: "What is variation?", a: "Differences in characteristics among individuals." },
      { q: "What is asexual reproduction?", a: "Reproduction generally involving one parent without gamete fusion." },
      { q: "What is binary fission?", a: "One parent divides into two daughter individuals." },
      { q: "Name an organism that reproduces by binary fission.", a: "Amoeba." },
      { q: "What is multiple fission?", a: "One parent produces many daughter cells." },
      { q: "Name an organism that reproduces by budding.", a: "Hydra or yeast." },
      { q: "What is fragmentation?", a: "A body breaks into fragments that can grow into new individuals in suitable organisms." },
      { q: "What is regeneration?", a: "The ability to regrow lost parts or develop an individual from suitable tissues in certain organisms." },
      { q: "What is vegetative propagation?", a: "Producing new plants from vegetative parts." },
      { q: "Which organism commonly reproduces by spores in bread mould?", a: "Rhizopus." },
      { q: "What is sexual reproduction?", a: "Reproduction involving formation and fusion of gametes." },
      { q: "What is the male reproductive part of a flower?", a: "Stamen." },
      { q: "What is the female reproductive part of a flower?", a: "Carpel or pistil." },
      { q: "What is pollination?", a: "Transfer of pollen from anther to stigma." },
      { q: "What is fertilisation?", a: "Fusion of male and female gametes." },
      { q: "What does the ovule usually become after fertilisation?", a: "A seed." },
      { q: "What does the ovary usually become after fertilisation?", a: "A fruit." },
      { q: "Which organs produce sperm?", a: "Testes." },
      { q: "Which organs produce ova?", a: "Ovaries." },
      { q: "Which male hormone is produced by the testes?", a: "Testosterone." },
      { q: "Where does fertilisation commonly occur in humans?", a: "In an oviduct or fallopian tube." },
      { q: "Where does the embryo implant?", a: "In the lining of the uterus." },
      { q: "What is the function of the placenta?", a: "Exchange of nutrients, oxygen and wastes between maternal and foetal circulations." },
      { q: "What is menstruation?", a: "Shedding of the uterine lining when pregnancy has not occurred." },
      { q: "What is contraception?", a: "Methods used to prevent pregnancy." },
      { q: "Name a barrier contraceptive method.", a: "Condom." },
      { q: "Name one bacterial sexually transmitted infection.", a: "Gonorrhoea or syphilis." }
    ],

    mcqs: [
      {
        q: "The main importance of reproduction is to:",
        options: [
          "Keep every individual alive forever",
          "Maintain continuity of a species",
          "Prevent all variation",
          "Stop organisms from growing"
        ],
        answer: 1
      },
      {
        q: "Which process produces two daughter individuals from one parent?",
        options: ["Binary fission", "Pollination", "Fertilisation", "Transpiration"],
        answer: 0
      },
      {
        q: "Budding is commonly observed in:",
        options: ["Hydra", "Human kidney", "Mango fruit only", "Earth's atmosphere"],
        answer: 0
      },
      {
        q: "Which organism commonly forms spores in bread mould?",
        options: ["Rhizopus", "Amoeba only", "Human", "Hydra only"],
        answer: 0
      },
      {
        q: "Vegetative propagation produces plants from:",
        options: [
          "Only fertilised eggs",
          "Roots, stems or leaves",
          "Only animal tissues",
          "Only pollen grains"
        ],
        answer: 1
      },
      {
        q: "The male reproductive part of a flower is the:",
        options: ["Stigma", "Stamen", "Ovary", "Ovule"],
        answer: 1
      },
      {
        q: "The transfer of pollen from anther to stigma is called:",
        options: ["Fertilisation", "Pollination", "Germination", "Implantation"],
        answer: 1
      },
      {
        q: "Fusion of male and female gametes forms a:",
        options: ["Stamen", "Zygote", "Stigma", "Pollen grain"],
        answer: 1
      },
      {
        q: "After fertilisation, the ovule usually develops into a:",
        options: ["Root", "Seed", "Leaf", "Stamen"],
        answer: 1
      },
      {
        q: "Which organ produces sperm in human males?",
        options: ["Ovaries", "Testes", "Uterus", "Gall bladder"],
        answer: 1
      },
      {
        q: "Which organs produce ova in human females?",
        options: ["Kidneys", "Ovaries", "Lungs", "Testes"],
        answer: 1
      },
      {
        q: "Fertilisation commonly occurs in the human:",
        options: ["Oviduct", "Urinary bladder", "Stomach", "Cervix only"],
        answer: 0
      },
      {
        q: "The embryo normally implants in the:",
        options: ["Uterine lining", "Lung tissue", "Kidney", "Oesophagus"],
        answer: 0
      },
      {
        q: "Which structure supports exchange between maternal and foetal circulations?",
        options: ["Placenta", "Stamen", "Nephron", "Alveolus"],
        answer: 0
      },
      {
        q: "Menstruation involves the shedding of the:",
        options: ["Uterine lining", "Kidney lining", "Lung lining", "Oviduct entirely"],
        answer: 0
      },
      {
        q: "Which hormone is produced mainly by the testes?",
        options: ["Testosterone", "Insulin", "Thyroxine", "Auxin"],
        answer: 0
      },
      {
        q: "Which of the following is a barrier contraceptive method?",
        options: ["Condom", "Antibiotic", "Vaccine for every STI", "Painkiller"],
        answer: 0
      },
      {
        q: "Which statement about condoms is correct?",
        options: [
          "They guarantee prevention of every infection",
          "They can reduce the risk of many STIs when used correctly",
          "They are a treatment for all STIs",
          "They always prevent every pregnancy"
        ],
        answer: 1
      },
      {
        q: "Which infection is caused by a virus?",
        options: ["HIV infection", "Gonorrhoea", "Syphilis", "All bacterial infections"],
        answer: 0
      },
      {
        q: "Sexual reproduction usually produces greater genetic variation because:",
        options: [
          "It always creates identical offspring",
          "Hereditary material from two parents is combined",
          "DNA is never copied",
          "It prevents fertilisation"
        ],
        answer: 1
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "How Do Organisms Reproduce?",
    images: [
      "images/infographics/science/how-organisms-reproduce.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: How Do Organisms Reproduce content loaded.");
})();
/* =========================================================
   CLASS 10 HUB — PART 9
   SCIENCE: HEREDITY
   CBSE EXAM-FOCUSED CHAPTER CONTENT
   Append below Part 8 in content.js
========================================================= */

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "science::Heredity";

  const data = {
    overview:
      "Heredity is the transmission of characteristics from parents to offspring. This chapter explains inherited traits, variations, genes, chromosomes, Mendel's experiments, dominant and recessive traits, sex determination in humans, and how variations arise during reproduction.",

    keyPoints: [
      "Heredity is the transmission of traits from parents to offspring.",
      "A trait is a characteristic of an organism, such as a particular form of a seed or a blood group.",
      "Variations are differences among individuals of the same species.",
      "DNA carries hereditary information and genes are segments of DNA that influence traits.",
      "Genes are located on chromosomes inside cells.",
      "In sexually reproducing organisms, offspring receive hereditary material from both parents.",
      "Mendel studied inheritance using garden pea plants and selected contrasting traits.",
      "Mendel's monohybrid cross studied the inheritance of one pair of contrasting traits.",
      "A dominant trait is expressed in a heterozygote in a simple dominant-recessive inheritance pattern.",
      "A recessive trait is expressed when a dominant allele is absent in a simple dominant-recessive pattern.",
      "Different versions of a gene are called alleles.",
      "Genotype refers to the genetic constitution for a trait, while phenotype refers to the observable characteristic.",
      "In a typical monohybrid cross between two heterozygotes, the genotypic ratio is 1:2:1.",
      "In the same simple monohybrid cross, the phenotypic ratio is commonly 3:1 when complete dominance occurs.",
      "Inherited variations arise through genetic differences, including changes in DNA and recombination during sexual reproduction.",
      "Acquired traits that do not alter the DNA of reproductive cells are generally not inherited genetically.",
      "Human body cells usually contain 46 chromosomes arranged in 23 pairs.",
      "Human gametes normally contain 23 chromosomes.",
      "In humans, females usually have XX sex chromosomes and males usually have XY sex chromosomes.",
      "An ovum normally carries an X chromosome, while sperm can carry either an X or a Y chromosome.",
      "The sex-chromosome contribution of the fertilising sperm determines whether the usual XX or XY combination forms.",
      "Evolution involves changes in inherited characteristics of populations over generations.",
      "Variation can increase the chances that some individuals survive environmental changes.",
      "Natural selection can influence which inherited variations become more common in a population.",
      "Not every variation is beneficial; its effect depends on the environment and other factors."
    ],

    questions: {
      veryShort: [
        {
          q: "Q1. What is heredity?",
          a: "Heredity is the transmission of characteristics from parents to offspring."
        },
        {
          q: "Q2. What is a trait?",
          a: "A trait is a characteristic or feature of an organism."
        },
        {
          q: "Q3. What is variation?",
          a: "Variation refers to differences in characteristics among individuals of the same species."
        },
        {
          q: "Q4. What is a gene?",
          a: "A gene is a segment of DNA that contains information influencing a functional product or trait."
        },
        {
          q: "Q5. Where are genes located?",
          a: "Genes are located on chromosomes."
        },
        {
          q: "Q6. What is DNA?",
          a: "DNA is the molecule that stores hereditary information in most living organisms."
        },
        {
          q: "Q7. Who is known as the father of genetics?",
          a: "Gregor Johann Mendel."
        },
        {
          q: "Q8. Which plant did Mendel use in his experiments?",
          a: "The garden pea plant, Pisum sativum."
        },
        {
          q: "Q9. What is an allele?",
          a: "An allele is an alternative form of a gene."
        },
        {
          q: "Q10. What is a dominant trait?",
          a: "A dominant trait is expressed in a heterozygote in a simple dominant-recessive inheritance pattern."
        },
        {
          q: "Q11. What is a recessive trait?",
          a: "A recessive trait is expressed when the dominant allele is absent in a simple dominant-recessive inheritance pattern."
        },
        {
          q: "Q12. What is a genotype?",
          a: "Genotype is the genetic constitution of an organism for a particular trait."
        },
        {
          q: "Q13. What is a phenotype?",
          a: "Phenotype is the observable expression of a trait."
        },
        {
          q: "Q14. What is a homozygous condition?",
          a: "It is a condition in which both alleles of a gene are the same, such as TT or tt."
        },
        {
          q: "Q15. What is a heterozygous condition?",
          a: "It is a condition in which the two alleles of a gene differ, such as Tt."
        },
        {
          q: "Q16. How many chromosomes are usually present in a human body cell?",
          a: "46 chromosomes, arranged in 23 pairs."
        },
        {
          q: "Q17. How many chromosomes are usually present in a human gamete?",
          a: "23 chromosomes."
        },
        {
          q: "Q18. What are the usual sex chromosomes of a human female?",
          a: "XX."
        },
        {
          q: "Q19. What are the usual sex chromosomes of a human male?",
          a: "XY."
        },
        {
          q: "Q20. What is natural selection?",
          a: "Natural selection is the process by which inherited variations affecting survival and reproduction can become more or less common over generations."
        }
      ],

      short: [
        {
          q: "Q1. Why do offspring resemble their parents but are not always identical to them?",
          a: "Offspring inherit DNA and genes from their parents, which makes them resemble their parents. However, DNA copying can introduce small differences, and sexual reproduction combines genetic material from two parents. These processes create variation among offspring."
        },
        {
          q: "Q2. Explain the relationship between DNA, genes and chromosomes.",
          a: "DNA is the hereditary molecule that stores genetic information. A gene is a particular segment of DNA containing information for a functional product or influencing a trait. Chromosomes are structures made mainly of DNA and proteins that organise and carry genes inside cells."
        },
        {
          q: "Q3. Differentiate between dominant and recessive traits.",
          a: "In a simple dominant-recessive pattern, a dominant allele can determine the phenotype even when only one copy is present. A recessive phenotype appears when the dominant allele is absent, usually when two recessive alleles are present. Dominance does not mean that a trait is more common or more beneficial."
        },
        {
          q: "Q4. What was the importance of Mendel's pea plant experiments?",
          a: "Mendel studied contrasting traits in pea plants and carefully recorded the results of crosses. His experiments showed that hereditary factors are passed from parents to offspring in predictable patterns. They helped establish basic principles of inheritance, including dominance and segregation of alleles."
        },
        {
          q: "Q5. What is a monohybrid cross? Give an example.",
          a: "A monohybrid cross studies the inheritance of one pair of contrasting traits. For example, crossing a pure tall pea plant (TT) with a pure dwarf plant (tt) produces F1 offspring that are Tt and tall when tallness is dominant. Crossing two F1 plants (Tt × Tt) commonly produces a 3:1 tall-to-dwarf phenotypic ratio."
        },
        {
          q: "Q6. Differentiate between genotype and phenotype.",
          a: "Genotype is the genetic combination for a trait, such as TT, Tt or tt. Phenotype is the observable expression of the trait, such as tall or dwarf in a pea plant. Under complete dominance, TT and Tt have different genotypes but the same tall phenotype."
        },
        {
          q: "Q7. Why are variations important for a population?",
          a: "Variations make individuals in a population different from one another. If environmental conditions change, some inherited variations may help certain individuals survive and reproduce more successfully. Over generations, these variations may become more common through natural selection."
        },
        {
          q: "Q8. Why are acquired traits generally not inherited?",
          a: "Acquired traits usually result from an individual's experiences, environment or changes in body cells. If these changes do not alter the DNA in reproductive cells, they are not normally passed to offspring through genes. Genetic inheritance depends on hereditary information transmitted through gametes."
        },
        {
          q: "Q9. Explain sex determination in humans.",
          a: "Human females usually have XX sex chromosomes, while males usually have XY. An ovum normally carries an X chromosome. Sperm carry either an X or a Y chromosome. Fertilisation by an X-bearing sperm usually results in XX, while fertilisation by a Y-bearing sperm usually results in XY. The two outcomes are approximately equally likely."
        },
        {
          q: "Q10. How is the inheritance of traits connected with evolution?",
          a: "Heredity passes genetic information from one generation to the next, while variation creates differences among individuals. Some inherited variations affect survival and reproductive success. Over many generations, natural selection and other evolutionary processes can change the characteristics of populations."
        }
      ],

      long: [
        {
          q: "Q1. Explain Mendel's monohybrid cross and the results obtained from it.",
          a: "Gregor Mendel used garden pea plants to investigate how contrasting traits are inherited. Consider plant height, where tallness (T) is dominant over dwarfness (t) in the simple example.\n\nParental generation:\n\nA pure tall plant (TT) is crossed with a pure dwarf plant (tt).\n\nGametes: The tall parent produces T gametes, and the dwarf parent produces t gametes.\n\nFirst filial generation (F1):\n\nAll offspring have genotype Tt and are tall because T is dominant over t.\n\nCrossing the F1 plants:\n\nWhen two heterozygous plants are crossed (Tt × Tt), each parent can produce T or t gametes.\n\nPossible offspring:\n\n• TT — tall\n• Tt — tall\n• Tt — tall\n• tt — dwarf\n\nGenotypic ratio: 1 TT : 2 Tt : 1 tt.\n\nPhenotypic ratio: 3 tall : 1 dwarf, assuming complete dominance and the usual Mendelian conditions.\n\nThe results show that hereditary factors occur in pairs and that the two alleles separate during gamete formation. The recessive trait can reappear in the F2 generation when an offspring inherits a recessive allele from each parent."
        },
        {
          q: "Q2. Explain how traits are inherited through DNA, genes and chromosomes.",
          a: "Heredity depends on the transfer of genetic information from parents to offspring. DNA stores this information, and genes are segments of DNA that influence functional products and traits.\n\n1. Organisation of genetic material: DNA is organised with proteins into chromosomes. Genes occupy particular positions on chromosomes.\n\n2. Inheritance from parents: During sexual reproduction, offspring receive genetic material through the gametes of both parents.\n\n3. Gamete formation: In humans, meiosis produces gametes containing one chromosome from each homologous pair, so each gamete normally has 23 chromosomes.\n\n4. Fertilisation: The male and female gametes fuse, restoring the usual diploid chromosome number of 46 in a human zygote.\n\n5. Expression of traits: Genes influence the production of proteins or functional RNA, which can affect how an organism develops and functions. Environmental factors may also influence the phenotype.\n\n6. Variation: Differences in inherited alleles, recombination and occasional changes in DNA create variation among offspring.\n\nTherefore, genes and chromosomes provide the physical basis for the transmission of hereditary information, while interactions between genes and the environment contribute to observable characteristics."
        },
        {
          q: "Q3. What is variation? Explain its causes and importance in the survival of a species.",
          a: "Variation refers to differences among individuals of the same species. Individuals are not perfectly identical because genetic information can be combined and copied in different ways.\n\nCauses of variation:\n\n1. DNA copying differences: Small changes may occur when DNA is copied.\n\n2. Recombination: During meiosis, genetic material is reshuffled, producing new combinations of alleles.\n\n3. Random fertilisation: In sexual reproduction, the fusion of different gametes creates unique combinations of genetic information.\n\n4. Environmental influences: Nutrition, climate and other environmental factors can influence the development of some characteristics, although such acquired changes are not necessarily inherited.\n\nImportance of variation:\n\n• It creates differences in a population.\n• Some inherited variations may help individuals survive particular environmental conditions.\n• Individuals with advantageous variations may reproduce more successfully.\n• Natural selection can increase the frequency of such inherited variations over generations.\n• Variation contributes to the long-term process of evolution.\n\nNot every variation is useful. Its effect depends on environmental conditions, and some variations may be neutral or harmful. Variation is important because it provides differences on which evolutionary processes can act."
        },
        {
          q: "Q4. Explain sex determination in human beings with a suitable cross.",
          a: "In humans, sex chromosomes usually determine the chromosomal sex of an individual. Females generally have XX sex chromosomes, while males generally have XY.\n\nFemale parent (XX):\n\nThe ova normally carry only an X chromosome because the female has two X chromosomes.\n\nMale parent (XY):\n\nDuring sperm formation, approximately half the sperm carry an X chromosome and half carry a Y chromosome.\n\nPossible combinations at fertilisation:\n\n• X ovum + X sperm = XX.\n• X ovum + Y sperm = XY.\n\nThe XX combination usually develops as female, and the XY combination usually develops as male. Each outcome has an approximately 50% probability under the simple model, although actual biological sex development involves additional genes and processes.\n\nThis explains why the sex-chromosome contribution of the fertilising sperm determines the usual XX or XY combination. Neither parent consciously controls which sperm fertilises the ovum, and the outcome is a matter of biological chance."
        },
        {
          q: "Q5. Differentiate between inherited and acquired traits. Explain why acquired traits generally do not pass to offspring.",
          a: "Inherited traits are influenced by genetic information passed from parents to offspring through reproductive cells. Examples include many inherited aspects of blood group and naturally occurring genetic characteristics.\n\nAcquired traits develop during an individual's lifetime due to experience, environment, training, injury or other non-hereditary influences. For example, developing a skill through practice does not normally change the genes in reproductive cells.\n\nDifferences:\n\n1. Origin: Inherited traits arise from genetic information; acquired traits arise through life experiences or environmental influences.\n\n2. Transmission: Inherited genetic information can pass through gametes. Acquired changes generally do not pass genetically unless they also involve a heritable change in reproductive cells.\n\n3. Examples: A genetically determined blood group is inherited. Improved handwriting through practice is acquired.\n\nWhy acquired traits are generally not inherited:\n\nA change in a body cell does not automatically change the DNA of sperm or egg cells. For a trait to be inherited genetically, relevant hereditary information must be present in the reproductive cells and transmitted to the next generation.\n\nThus, ordinary acquired changes such as improved skills or body-building through exercise are not generally passed to offspring through genes."
        }
      ]
    },

    flashcards: [
      { q: "What is heredity?", a: "Transmission of characteristics from parents to offspring." },
      { q: "What is a trait?", a: "A characteristic of an organism." },
      { q: "What is variation?", a: "Differences among individuals of the same species." },
      { q: "What molecule carries hereditary information?", a: "DNA." },
      { q: "What is a gene?", a: "A segment of DNA that contains genetic information." },
      { q: "Where are genes located?", a: "On chromosomes." },
      { q: "Who is known as the father of genetics?", a: "Gregor Johann Mendel." },
      { q: "Which plant did Mendel study?", a: "Garden pea." },
      { q: "What is an allele?", a: "An alternative form of a gene." },
      { q: "What is a dominant allele?", a: "An allele expressed in a heterozygote in a simple dominant-recessive pattern." },
      { q: "What is a recessive allele?", a: "An allele whose phenotype appears when the dominant allele is absent in a simple inheritance pattern." },
      { q: "What does genotype mean?", a: "The genetic constitution for a trait." },
      { q: "What does phenotype mean?", a: "The observable expression of a trait." },
      { q: "What is homozygous?", a: "Having two identical alleles for a gene." },
      { q: "What is heterozygous?", a: "Having two different alleles for a gene." },
      { q: "What is a monohybrid cross?", a: "A cross studying one pair of contrasting traits." },
      { q: "What is the F1 genotype from TT × tt?", a: "All offspring are Tt." },
      { q: "What is the F2 phenotypic ratio in a typical Tt × Tt cross?", a: "3 dominant phenotype : 1 recessive phenotype." },
      { q: "What is the F2 genotypic ratio in Tt × Tt?", a: "1 TT : 2 Tt : 1 tt." },
      { q: "How many chromosomes are usually in a human body cell?", a: "46." },
      { q: "How many chromosomes are usually in a human gamete?", a: "23." },
      { q: "What are the usual sex chromosomes in human females?", a: "XX." },
      { q: "What are the usual sex chromosomes in human males?", a: "XY." },
      { q: "Which sex chromosome does a human ovum normally carry?", a: "X." },
      { q: "Which sex chromosome can a human sperm carry?", a: "X or Y." },
      { q: "What is natural selection?", a: "Differential survival and reproduction associated with inherited variations." },
      { q: "How does sexual reproduction create variation?", a: "It combines genetic material from two parents and reshuffles alleles." },
      { q: "What is an acquired trait?", a: "A characteristic developed during an individual's lifetime." },
      { q: "Are acquired skills normally inherited through genes?", a: "No, not unless a heritable genetic change is involved." },
      { q: "Why can variation help a species survive environmental change?", a: "Some inherited variations may improve survival or reproductive success under new conditions." }
    ],

    mcqs: [
      {
                q: "The transmission of traits from parents to offspring is called:",
        options: ["Respiration", "Heredity", "Excretion", "Digestion"],
        answer: 1
      },
      {
        q: "Which molecule stores hereditary information?",
        options: ["DNA", "Starch", "Bile", "Cellulose only"],
        answer: 0
      },
      {
        q: "Genes are located on:",
        options: ["Chromosomes", "Ribosomes only", "Cell walls only", "Vacuoles only"],
        answer: 0
      },
      {
        q: "Who performed famous inheritance experiments using pea plants?",
        options: ["Gregor Mendel", "Charles Darwin only", "Louis Pasteur", "Robert Hooke"],
        answer: 0
      },
      {
        q: "An alternative form of a gene is called an:",
        options: ["Allele", "Organ", "Enzyme", "Antibody"],
        answer: 0
      },
      {
        q: "In a simple dominant-recessive pattern, a dominant allele is expressed in:",
        options: [
          "Only a homozygous recessive condition",
          "A heterozygous condition",
          "No offspring",
          "Only non-living matter"
        ],
        answer: 1
      },
      {
        q: "Which genotype is heterozygous?",
        options: ["TT", "tt", "Tt", "XX only"],
        answer: 2
      },
      {
        q: "The observable characteristic of an organism is its:",
        options: ["Phenotype", "Genotype only", "Allele pair only", "Chromosome number only"],
        answer: 0
      },
      {
        q: "A monohybrid cross studies:",
        options: [
          "One pair of contrasting traits",
          "Only digestion",
          "Two unrelated species with no inheritance",
          "Only chromosome movement in muscles"
        ],
        answer: 0
      },
      {
        q: "What is the F1 genotype from a TT × tt cross?",
        options: ["TT only", "tt only", "Tt", "Tt and tt only"],
        answer: 2
      },
      {
        q: "In a typical Tt × Tt cross with complete dominance, the phenotypic ratio is:",
        options: ["1:1", "3:1", "1:2:1", "9:3:3:1"],
        answer: 1
      },
      {
        q: "In a typical Tt × Tt cross, the genotypic ratio is:",
        options: ["3:1", "1:1", "1:2:1", "2:1"],
        answer: 2
      },
      {
        q: "How many chromosomes are normally present in a human somatic cell?",
        options: ["23", "46", "44", "92"],
        answer: 1
      },
      {
        q: "How many chromosomes are normally present in a human gamete?",
        options: ["46", "23", "22 pairs", "44"],
        answer: 1
      },
      {
        q: "The usual sex chromosomes in a human female are:",
        options: ["XY", "XX", "YY", "XO in all cases"],
        answer: 1
      },
      {
        q: "A human ovum normally carries which sex chromosome?",
        options: ["Y only", "X", "Both X and Y together", "No chromosome"],
        answer: 1
      },
      {
        q: "Which sex chromosomes can be present in human sperm?",
        options: ["X or Y", "Only X", "Only Y", "XX only"],
        answer: 0
      },
      {
        q: "Which process can create new combinations of alleles during sexual reproduction?",
        options: ["Genetic recombination", "Digestion", "Transpiration", "Filtration"],
        answer: 0
      },
      {
        q: "Which statement about acquired traits is generally correct?",
        options: [
          "Every acquired trait changes reproductive-cell DNA",
          "They are always inherited",
          "They are generally not inherited genetically unless a heritable change is involved",
          "They never affect an individual's life"
        ],
        answer: 2
      },
      {
        q: "Natural selection acts on differences that affect survival and reproduction. Over generations it can:",
        options: [
          "Change the frequency of inherited variations",
          "Stop all reproduction",
          "Make every individual identical immediately",
          "Remove all genetic variation in every situation"
        ],
        answer: 0
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Heredity",
    images: [
      "images/infographics/science/heredity.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Heredity content loaded.");
})();
/* =========================================================
   CLASS 10 HUB — PART 10
   SCIENCE: LIGHT — REFLECTION AND REFRACTION
   Append below Part 9 in content.js
========================================================= */

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "science::Light: Reflection and Refraction";

  const data = {
    overview:
      "This chapter explains reflection and refraction of light, spherical mirrors, image formation, mirror and lens formulae, magnification, refractive index, and the formation of images by convex and concave lenses. It includes important numerical concepts for Class 10 examinations.",

    keyPoints: [
      "Light travels in straight lines through a uniform transparent medium.",
      "Reflection is the bouncing back of light into the same medium after striking a surface.",
      "The angle of incidence is equal to the angle of reflection.",
      "The incident ray, reflected ray and normal lie in the same plane.",
      "A concave mirror has a reflecting surface curved inward.",
      "A convex mirror has a reflecting surface curved outward.",
      "The principal axis passes through the pole and centre of curvature of a spherical mirror.",
      "The centre of curvature is the centre of the sphere of which the mirror forms a part.",
      "The radius of curvature is twice the focal length: R = 2f.",
      "A concave mirror can form real or virtual images depending on the object's position.",
      "A convex mirror forms a virtual, erect and diminished image of a real object.",
      "The mirror formula is 1/f = 1/v + 1/u, using the Cartesian sign convention.",
      "Mirror magnification is m = h_i/h_o = -v/u.",
      "Refraction is the change in direction of light when it passes obliquely from one transparent medium to another.",
      "Refraction occurs because the speed of light changes when it enters a medium with a different optical density.",
      "When light enters a denser medium obliquely from a rarer medium, it bends towards the normal.",
      "When light enters a rarer medium obliquely from a denser medium, it bends away from the normal.",
      "The refractive index of a medium is n = c/v, where c is the speed of light in vacuum and v is its speed in the medium.",
      "A convex lens is thicker at the centre than at the edges and converges parallel rays.",
      "A concave lens is thinner at the centre than at the edges and diverges parallel rays.",
      "The lens formula is 1/f = 1/v - 1/u, using the Cartesian sign convention.",
      "Lens magnification is m = h_i/h_o = v/u.",
      "The power of a lens is P = 1/f when focal length is measured in metres.",
      "The SI unit of lens power is the dioptre (D).",
      "A convex lens has positive focal length and positive power under the Cartesian sign convention.",
      "A concave lens has negative focal length and negative power under the Cartesian sign convention."
    ],

    questions: {
      veryShort: [
        {
          q: "Q1. What is reflection of light?",
          a: "Reflection is the bouncing back of light into the same medium after striking a surface."
        },
        {
          q: "Q2. State the first law of reflection.",
          a: "The angle of incidence is equal to the angle of reflection."
        },
        {
          q: "Q3. State the second law of reflection.",
          a: "The incident ray, reflected ray and normal at the point of incidence lie in the same plane."
        },
        {
          q: "Q4. What is the principal axis of a spherical mirror?",
          a: "It is the straight line passing through the pole and centre of curvature of the mirror."
        },
        {
          q: "Q5. What is the pole of a spherical mirror?",
          a: "The pole is the geometrical centre of the reflecting surface of a spherical mirror."
        },
        {
          q: "Q6. What is the centre of curvature?",
          a: "It is the centre of the sphere of which a spherical mirror forms a part."
        },
        {
          q: "Q7. What is the relation between radius of curvature and focal length?",
          a: "R = 2f, or f = R/2."
        },
        {
          q: "Q8. Which mirror is used as a rear-view mirror in vehicles?",
          a: "A convex mirror."
        },
        {
          q: "Q9. What type of image does a convex mirror form?",
          a: "For a real object, it forms a virtual, erect and diminished image."
        },
        {
          q: "Q10. What is refraction of light?",
          a: "Refraction is the change in direction of light when it passes obliquely from one transparent medium to another."
        },
        {
          q: "Q11. What is the refractive index of a medium?",
          a: "It is the ratio of the speed of light in vacuum to its speed in the medium: n = c/v."
        },
        {
          q: "Q12. Which lens is thicker at the centre?",
          a: "A convex lens."
        },
        {
          q: "Q13. Which lens is thinner at the centre?",
          a: "A concave lens."
        },
        {
          q: "Q14. What is the SI unit of lens power?",
          a: "The dioptre (D)."
        },
        {
          q: "Q15. What is the power of a lens with focal length 1 metre?",
          a: "Its power is 1 dioptre."
        },
        {
          q: "Q16. What is the mirror formula?",
          a: "1/f = 1/v + 1/u."
        },
        {
          q: "Q17. What is the lens formula?",
          a: "1/f = 1/v - 1/u."
        },
        {
          q: "Q18. What is magnification?",
          a: "Magnification is the ratio of image height to object height."
        },
        {
          q: "Q19. Which type of lens converges parallel rays of light?",
          a: "A convex lens."
        },
        {
          q: "Q20. Which type of lens diverges parallel rays of light?",
          a: "A concave lens."
        }
      ],

      short: [
        {
          q: "Q1. State the laws of reflection of light.",
          a: "The two laws of reflection are:\n\n1. The angle of incidence is equal to the angle of reflection.\n2. The incident ray, reflected ray and normal at the point of incidence lie in the same plane."
        },
        {
          q: "Q2. Differentiate between concave and convex mirrors.",
          a: "A concave mirror has its reflecting surface curved inward and can converge parallel rays. Depending on object position, it can form real or virtual images. A convex mirror has its reflecting surface curved outward and diverges parallel rays. It forms a virtual, erect and diminished image of a real object."
        },
        {
          q: "Q3. Why are convex mirrors used as rear-view mirrors in vehicles?",
          a: "Convex mirrors form erect and diminished images and provide a wider field of view than plane mirrors. Drivers can therefore see a larger area of traffic behind them. The images are virtual and appear behind the mirror."
        },
        {
          q: "Q4. Define the principal focus of a concave mirror.",
          a: "The principal focus of a concave mirror is the point on its principal axis where rays parallel to the principal axis converge after reflection. For a spherical mirror under the paraxial approximation, the focal length is half its radius of curvature."
        },
        {
          q: "Q5. What is magnification produced by a spherical mirror?",
          a: "Magnification is the ratio of image height to object height. For spherical mirrors, m = h_i/h_o = -v/u, where h_i is image height, h_o is object height, v is image distance and u is object distance. The sign indicates the orientation of the image under the sign convention."
        },
        {
          q: "Q6. Explain refraction with an example.",
          a: "Refraction is the bending of light when it passes obliquely from one transparent medium to another because its speed changes. For example, a pencil partly immersed in water appears bent at the water surface. This apparent bending occurs because light from the submerged part changes direction as it passes from water to air."
        },
        {
          q: "Q7. Why does a ray of light bend towards the normal when it enters glass from air?",
          a: "Light travels more slowly in glass than in air. When it enters glass obliquely, its speed changes and the ray bends towards the normal. This statement applies to oblique incidence; a ray travelling exactly along the normal does not change direction."
        },
        {
          q: "Q8. Define the refractive index of a medium.",
          a: "The absolute refractive index of a medium is the ratio of the speed of light in vacuum to the speed of light in that medium. It is given by n = c/v. A larger refractive index means that light travels more slowly in that medium compared with vacuum."
        },
        {
          q: "Q9. Differentiate between convex and concave lenses.",
          a: "A convex lens is generally thicker at the centre and converges parallel rays of light. It can form real or virtual images depending on object position. A concave lens is generally thinner at the centre and diverges parallel rays. For a real object, it forms a virtual, erect and diminished image."
        },
        {
          q: "Q10. A lens has focal length 0.5 m. Calculate its power.",
          a: "Given: f = +0.5 m for a convex lens.\n\nFormula: P = 1/f.\n\nCalculation: P = 1/0.5 = +2 D.\n\nTherefore, the power of the convex lens is +2 dioptres. If the lens were concave with the same focal-length magnitude, its power would be -2 D."
        }
      ],

      long: [
        {
          q: "Q1. Explain image formation by a concave mirror for different object positions.",
          a: "A concave mirror can form different types of images depending on the position of the object relative to the pole (P), focus (F) and centre of curvature (C).\n\n1. Object at infinity: The image forms approximately at F. It is real, inverted and highly diminished.\n\n2. Object beyond C: The image forms between C and F. It is real, inverted and diminished.\n\n3. Object at C: The image forms at C. It is real, inverted and the same size as the object.\n\n4. Object between C and F: The image forms beyond C. It is real, inverted and enlarged.\n\n5. Object at F: The reflected rays become parallel, so the image forms at infinity in the ideal ray model.\n\n6. Object between F and P: The reflected rays diverge and their backward extensions meet behind the mirror. The image is virtual, erect and enlarged.\n\nThese results can be established using principal rays: a ray parallel to the principal axis reflects through F, a ray passing through F reflects parallel to the axis, and a ray directed towards C retraces its path."
        },
        {
          q: "Q2. Explain image formation by a convex lens for different object positions.",
          a: "A convex lens converges light rays and forms images depending on the position of the object relative to the optical centre (O), principal focus (F) and twice the focal length (2F).\n\n1. Object at infinity: The image forms at F on the opposite side. It is real, inverted and highly diminished.\n\n2. Object beyond 2F: The image forms between F and 2F on the opposite side. It is real, inverted and diminished.\n\n3. Object at 2F: The image forms at 2F on the opposite side. It is real, inverted and the same size as the object.\n\n4. Object between F and 2F: The image forms beyond 2F on the opposite side. It is real, inverted and enlarged.\n\n5. Object at F: The emergent rays are parallel, so the image forms at infinity in the ideal ray model.\n\n6. Object between F and O: The image forms on the same side as the object. It is virtual, erect and enlarged.\n\nRay diagrams are drawn using a ray parallel to the principal axis, which refracts through the opposite focus, and a ray through the optical centre, which travels approximately undeviated for a thin lens."
        },
        {
          q: "Q3. State the mirror formula and explain magnification. Include the sign convention.",
          a: "The mirror formula relates focal length, image distance and object distance:\n\n1/f = 1/v + 1/u\n\nHere, f is the focal length, v is the image distance and u is the object distance, all measured from the pole using the Cartesian sign convention.\n\nMirror magnification is:\n\nm = h_i/h_o = -v/u\n\nHere, h_i is image height and h_o is object height.\n\nCartesian sign convention:\n\n• All distances are measured from the pole along the principal axis.\n• Distances measured in the direction of incident light are positive; distances measured opposite to that direction are negative.\n• Heights measured above the principal axis are positive and those below it are negative.\n\nInterpretation:\n\n• Positive magnification indicates an erect image under this convention.\n• Negative magnification indicates an inverted image.\n• The magnitude of magnification greater than 1 indicates an enlarged image; less than 1 indicates a diminished image.\n\nExample: If u = -30 cm and v = -15 cm, then m = -(-15)/(-30) = -0.5. The negative sign indicates an inverted image, and its magnitude shows that the image is half the object's height."
        },
        {
          q: "Q4. Explain refraction and the laws of refraction. Define refractive index.",
          a: "Refraction is the change in direction of light as it passes obliquely between transparent media because its speed changes.\n\nLaws of refraction:\n\n1. The incident ray, refracted ray and normal at the point of incidence lie in the same plane.\n\n2. For a given pair of media and a fixed colour of light, the ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant. This is Snell's law:\n\nn₁ sin i = n₂ sin r.\n\nHere, n₁ and n₂ are the refractive indices of the first and second media, and i and r are the angles measured from the normal.\n\nAbsolute refractive index:\n\nn = c/v\n\nwhere c is the speed of light in vacuum and v is its speed in the medium.\n\nWhen light enters a medium with a higher refractive index obliquely, it bends towards the normal. When it enters a medium with a lower refractive index, it bends away from the normal. At normal incidence, the ray changes speed but not direction."
        },
        {
          q: "Q5. Explain the power of a lens and solve a numerical example.",
          a: "The power of a lens measures its ability to converge or diverge light. It is defined as the reciprocal of its focal length in metres.\n\nFormula:\n\nP = 1/f\n\nHere, P is measured in dioptres (D) and f in metres. A convex lens has positive focal length and positive power. A concave lens has negative focal length and negative power under the Cartesian sign convention.\n\nNumerical example:\n\nA concave lens has focal length -25 cm. Find its power.\n\nStep 1: Convert the focal length into metres.\n\nf = -25/100 m = -0.25 m.\n\nStep 2: Use the formula.\n\nP = 1/f = 1/(-0.25).\n\nP = -4 D.\n\nTherefore, the power of the concave lens is -4 dioptres. The negative sign indicates that the lens diverges parallel rays of light."
        }
      ]
    },

    flashcards: [
      { q: "What is reflection?", a: "The bouncing back of light into the same medium." },
      { q: "What is the first law of reflection?", a: "Angle of incidence equals angle of reflection." },
      { q: "What is the second law of reflection?", a: "The incident ray, reflected ray and normal lie in the same plane." },
      { q: "What is the pole of a spherical mirror?", a: "The geometrical centre of its reflecting surface." },
      { q: "What is the centre of curvature?", a: "The centre of the sphere of which the mirror forms a part." },
      { q: "What is the relation between R and f?", a: "R = 2f." },
      { q: "Which mirror gives a wider field of view?", a: "A convex mirror." },
      { q: "What image does a convex mirror form for a real object?", a: "Virtual, erect and diminished." },
      { q: "What is the mirror formula?", a: "1/f = 1/v + 1/u." },
      { q: "What is mirror magnification?", a: "m = -v/u = hᵢ/hₒ." },
      { q: "What is refraction?", a: "Change in direction of light when it passes obliquely between transparent media." },
      { q: "Why does refraction occur?", a: "Because the speed of light changes between media." },
      { q: "What is absolute refractive index?", a: "n = c/v." },
      { q: "What is Snell's law?", a: "n₁ sin i = n₂ sin r." },
      { q: "What happens when light enters a higher-index medium obliquely?", a: "It bends towards the normal." },
      { q: "What happens when light enters a lower-index medium obliquely?", a: "It bends away from the normal." },
      { q: "Which lens converges parallel rays?", a: "A convex lens." },
      { q: "Which lens diverges parallel rays?", a: "A concave lens." },
      { q: "What is the lens formula?", a: "1/f = 1/v - 1/u." },
      { q: "What is lens magnification?", a: "m = v/u = hᵢ/hₒ." },
      { q: "What is the formula for lens power?", a: "P = 1/f, with f in metres." },
      { q: "What is the SI unit of lens power?", a: "Dioptre (D)." },
      { q: "What is the power of a convex lens?", a: "Positive." },
      { q: "What is the power of a concave lens?", a: "Negative." },
      { q: "What image does a concave lens form for a real object?", a: "Virtual, erect and diminished." },
      { q: "When does a convex lens form a virtual image?", a: "When the object is between the optical centre and the principal focus." },
      { q: "When does a concave mirror form a virtual image?", a: "When the object is between the pole and the principal focus." },
      { q: "What does negative magnification indicate?", a: "An inverted image under the usual Cartesian sign convention." },
      { q: "Convert 50 cm into metres.", a: "0.50 m." },
      { q: "Find the power of a lens with f = +0.25 m.", a: "+4 D." }
    ],

    mcqs: [
      {
        q: "According to the law of reflection:",
        options: [
          "Angle of incidence equals angle of reflection",
          "Angle of incidence is always twice the angle of reflection",
          "The reflected ray is always perpendicular to the incident ray",
          "The angle of reflection is always zero"
        ],
        answer: 0
      },
      {
        q: "The centre of curvature of a spherical mirror is:",
        options: [
          "The centre of the sphere of which the mirror is a part",
          "The centre of the reflecting surface only",
          "Always the principal focus",
          "Always outside the mirror's principal axis"
        ],
        answer: 0
      },
      {
        q: "The relation between radius of curvature R and focal length f for a spherical mirror is:",
        options: ["R = f/2", "R = 2f", "R = 4f", "R = f"],
        answer: 1
      },
      {
        q: "Which mirror is commonly used as a vehicle rear-view mirror?",
        options: ["Plane mirror only", "Concave mirror", "Convex mirror", "A cylindrical mirror only"],
        answer: 2
      },
      {
        q: "A convex mirror forms which type of image for a real object?",
        options: [
          "Always real and inverted",
          "Virtual, erect and diminished",
          "Real and enlarged",
          "Virtual and inverted"
        ],
        answer: 1
      },
      {
        q: "The mirror formula is:",
        options: [
          "1/f = 1/v + 1/u",
          "1/f = 1/v - 1/u",
          "f = u + v",
          "P = 1/f²"
        ],
        answer: 0
      },
      {
        q: "Mirror magnification is given by:",
        options: ["m = v/u", "m = -v/u", "m = u/v", "m = uv"],
        answer: 1
      },
      {
        q: "Refraction of light occurs mainly because:",
        options: [
          "The speed of light changes between media",
          "Light always stops at a boundary",
          "The colour of the medium disappears",
          "The normal absorbs all light"
        ],
        answer: 0
      },
      {
        q: "When light enters glass obliquely from air, it generally bends:",
        options: ["Away from the normal", "Towards the normal", "Along the surface", "Back into the air in every case"],
        answer: 1
      },
      {
        q: "The absolute refractive index of a medium is:",
        options: ["v/c", "c/v", "c × v", "c + v"],
        answer: 1
      },
      {
        q: "Which lens converges parallel rays of light?",
        options: ["Concave lens", "Convex lens", "Both always diverge", "Neither lens"],
        answer: 1
      },
      {
        q: "Which lens is thinner at the centre than at the edges?",
        options: ["Convex lens", "Concave lens", "Both are always identical", "Plane glass only"],
        answer: 1
      },
      {
        q: "The lens formula using the Cartesian sign convention is:",
        options: [
          "1/f = 1/v - 1/u",
          "1/f = 1/v + 1/u",
          "f = uv",
          "1/f = u + v"
        ],
        answer: 0
      },
      {
        q: "Lens magnification is:",
        options: ["m = -v/u", "m = v/u", "m = f/u", "m = u + v"],
        answer: 1
      },
      {
        q: "The SI unit of lens power is:",
        options: ["Metre", "Centimetre", "Dioptre", "Watt"],
        answer: 2
      },
      {
        q: "The power of a convex lens with focal length +0.5 m is:",
        options: ["-2 D", "+2 D", "+0.5 D", "-0.5 D"],
        answer: 1
      },
      {
        q: "The power of a concave lens with focal length -0.25 m is:",
        options: ["+4 D", "-4 D", "+0.25 D", "-0.25 D"],
        answer: 1
      },
      {
        q: "An object placed between the optical centre and principal focus of a convex lens forms an image that is:",
        options: [
          "Real, inverted and diminished",
          "Virtual, erect and enlarged",
          "Real and same-sized",
          "Virtual, inverted and diminished"
        ],
        answer: 1
      },
      {
        q: "For a real object, a concave lens generally forms an image that is:",
        options: [
          "Real, inverted and enlarged",
          "Virtual, erect and diminished",
          "Real and same-sized",
          "Always at infinity"
        ],
        answer: 1
      },
      {
        q: "A lens has focal length +20 cm. Its power is:",
        options: ["+5 D", "-5 D", "+0.2 D", "-0.2 D"],
        answer: 0
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Light: Reflection and Refraction",
    images: [
      "images/infographics/science/light-reflection-refraction.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Light: Reflection and Refraction content loaded.");
})();
   
/* =========================================================
   CLASS 10 HUB — PART 11
   SCIENCE: THE HUMAN EYE AND THE COLOURFUL WORLD
   Append below Part 10 in content.js
========================================================= */

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "science::The Human Eye and the Colourful World";

  const data = {
    overview:
      "This chapter explains the structure and working of the human eye, accommodation, near and far points, common vision defects and their correction, refraction through a prism, dispersion, atmospheric refraction, twinkling of stars, advance sunrise and delayed sunset, and scattering of light.",

    keyPoints: [
      "The human eye is a natural optical instrument that enables us to see objects.",
      "The cornea is the transparent front surface of the eye and provides much of its converging power.",
      "The iris controls the size of the pupil.",
      "The pupil regulates the amount of light entering the eye.",
      "The eye lens is a convex lens whose curvature can change.",
      "Ciliary muscles change the curvature and focal length of the eye lens.",
      "The retina is the light-sensitive screen on which the image is formed.",
      "The image formed on the retina is real and inverted; the brain interprets visual information.",
      "The optic nerve carries visual signals from the retina to the brain.",
      "Accommodation is the ability of the eye lens to change its focal length to focus objects at different distances.",
      "The near point of a normal young adult eye is approximately 25 cm.",
      "The far point of a normal eye is at infinity.",
      "Myopia is also called short-sightedness; distant objects appear blurred.",
      "Myopia is corrected using a suitable concave lens.",
      "Hypermetropia is also called long-sightedness; nearby objects appear blurred.",
      "Hypermetropia is corrected using a suitable convex lens.",
      "Presbyopia is an age-related reduction in accommodation, often associated with reduced flexibility of the eye lens and changes in ciliary muscle function.",
      "A prism refracts light at its two non-parallel refracting surfaces.",
      "Dispersion is the splitting of white light into its constituent colours.",
      "The spectrum of visible light is commonly represented as VIBGYOR: violet, indigo, blue, green, yellow, orange and red.",
      "In a glass prism, violet light deviates more than red light under ordinary visible-light conditions.",
      "Atmospheric refraction occurs because the refractive index of air changes with density and height.",
      "Stars appear to twinkle because of changing atmospheric refraction.",
      "Advance sunrise and delayed sunset occur because of atmospheric refraction.",
      "The sky appears blue mainly because shorter wavelengths of sunlight are scattered more strongly by air molecules.",
      "The Sun appears reddish at sunrise and sunset because much of the shorter-wavelength light is scattered out of the direct path through the atmosphere."
    ],

    questions: {
      veryShort: [
        {
          q: "Q1. What is the function of the cornea?",
          a: "The cornea protects the front of the eye and provides much of the eye's converging power."
        },
        {
          q: "Q2. What is the function of the iris?",
          a: "The iris controls the size of the pupil and regulates the amount of light entering the eye."
        },
        {
          q: "Q3. What is the pupil?",
          a: "The pupil is the opening in the iris through which light enters the eye."
        },
        {
          q: "Q4. What is the function of the retina?",
          a: "The retina is the light-sensitive layer on which the image is formed."
        },
        {
          q: "Q5. What is accommodation of the eye?",
          a: "Accommodation is the ability of the eye lens to change its focal length to focus objects at different distances."
        },
        {
          q: "Q6. What is the near point of a normal young adult eye?",
          a: "Approximately 25 cm."
        },
        {
          q: "Q7. What is the far point of a normal eye?",
          a: "Infinity."
        },
        {
          q: "Q8. What is myopia?",
          a: "Myopia is a vision defect in which distant objects appear blurred."
        },
        {
          q: "Q9. Which lens corrects myopia?",
          a: "A concave lens of suitable power."
        },
        {
          q: "Q10. What is hypermetropia?",
          a: "Hypermetropia is a vision defect in which nearby objects appear blurred."
        },
        {
          q: "Q11. Which lens corrects hypermetropia?",
          a: "A convex lens of suitable power."
        },
        {
          q: "Q12. What is presbyopia?",
          a: "Presbyopia is an age-related reduction in the eye's power of accommodation."
        },
        {
          q: "Q13. What is dispersion of light?",
          a: "Dispersion is the splitting of white light into its constituent colours."
        },
        {
          q: "Q14. Which colour deviates the most in a glass prism?",
          a: "Violet light."
        },
        {
          q: "Q15. Which colour deviates the least in a glass prism?",
          a: "Red light."
        },
        {
          q: "Q16. What is atmospheric refraction?",
          a: "It is the refraction of light as it travels through atmospheric layers of varying refractive index."
        },
        {
          q: "Q17. Why do stars appear to twinkle?",
          a: "Because changing atmospheric refraction causes fluctuations in their apparent brightness and position."
        },
        {
          q: "Q18. Why does the sky appear blue?",
          a: "Air molecules scatter shorter wavelengths of sunlight, especially blue light, more strongly than longer wavelengths."
        },
        {
          q: "Q19. Why does the Sun appear reddish at sunrise and sunset?",
          a: "Light travels through a longer atmospheric path, scattering much of the shorter-wavelength light away from the direct path."
        },
        {
          q: "Q20. What is the function of the optic nerve?",
          a: "It carries visual signals from the retina to the brain."
        }
      ],

      short: [
        {
          q: "Q1. Explain the role of the ciliary muscles in vision.",
          a: "Ciliary muscles change the curvature of the eye lens. When focusing on nearby objects, the lens becomes thicker and its focal length decreases. When focusing on distant objects, the lens becomes thinner and its focal length increases. This adjustment helps form a clear image on the retina."
        },
        {
          q: "Q2. What is accommodation? Why is it necessary?",
          a: "Accommodation is the ability of the eye lens to adjust its focal length by changing its curvature. It is necessary because light from nearby and distant objects enters the eye with different degrees of divergence. Accommodation enables the eye to focus these objects clearly on the retina."
        },
        {
          q: "Q3. Explain myopia and its correction.",
          a: "Myopia, or short-sightedness, is a defect in which nearby objects are seen clearly but distant objects appear blurred. The image of a distant object tends to form in front of the retina. It may result from excessive converging power of the eye or an elongated eyeball. A suitable concave lens diverges incoming light so that the eye can focus the image on the retina."
        },
        {
          q: "Q4. Explain hypermetropia and its correction.",
          a: "Hypermetropia, or long-sightedness, is a defect in which distant objects may be seen clearly but nearby objects appear blurred. The image of a nearby object tends to form behind the retina. It may result from insufficient converging power of the eye or a shorter eyeball. A suitable convex lens converges the light before it enters the eye and helps focus the image on the retina."
        },
        {
          q: "Q5. What is presbyopia? How can it be corrected?",
          a: "Presbyopia is an age-related defect in which the eye gradually loses some of its accommodation ability, making nearby objects difficult to see clearly. It is commonly associated with reduced flexibility of the eye lens and changes in the focusing system. It may be corrected using suitable convex reading lenses. Bifocal or progressive lenses may help when both near and distant vision need correction."
        },
        {
          q: "Q6. What is dispersion of white light? Explain it using a prism.",
          a: "Dispersion is the splitting of white light into its constituent colours. When white light passes through a glass prism, different colours are refracted by different amounts because the refractive index of glass depends on wavelength. Violet deviates the most and red the least, producing a spectrum commonly represented as VIBGYOR."
        },
        {
          q: "Q7. Why do stars twinkle but planets usually do not twinkle noticeably?",
          a: "Stars are extremely far away and appear as point-like sources of light. Atmospheric refraction changes continuously as light passes through moving layers of air, causing fluctuations in the apparent brightness of a star. Planets appear as small extended sources, so variations from different parts of their apparent discs tend to average out. Therefore, planets usually do not twinkle noticeably."
        },
        {
          q: "Q8. Explain advance sunrise and delayed sunset.",
          a: "Earth's atmosphere has layers with different refractive indices. Light from the Sun bends gradually as it passes through these layers. The Sun can therefore appear slightly above its actual geometric position when it is just below the horizon. This atmospheric refraction makes sunrise appear earlier and sunset appear later than they would without the atmosphere."
        },
        {
          q: "Q9. Why is the sky blue but clouds usually appear white?",
          a: "Air molecules scatter shorter wavelengths of sunlight more strongly, so blue light is scattered throughout the sky and reaches our eyes from many directions. Clouds contain comparatively large water droplets and ice crystals that scatter a broad range of visible wavelengths. These wavelengths reach the eye together, so clouds generally appear white or grey depending on lighting and thickness."
        },
        {
          q: "Q10. Why does the Sun appear reddish at sunrise and sunset?",
          a: "At sunrise and sunset, sunlight travels through a longer path in the atmosphere than it does when the Sun is high in the sky. Shorter wavelengths, such as blue and violet, are scattered away from the direct path more strongly. More of the longer-wavelength red and orange light reaches the observer, making the Sun appear reddish."
        }
      ],

      long: [
        {
          q: "Q1. Describe the structure and working of the human eye.",
          a: "The human eye is a natural optical instrument that receives light and forms images on a light-sensitive layer.\n\n1. Cornea: The transparent curved front surface through which most light enters. It provides much of the eye's converging power.\n\n2. Iris: The coloured muscular part that controls the size of the pupil.\n\n3. Pupil: The opening through which light enters. It becomes smaller in bright light and larger in dim light.\n\n4. Eye lens: A transparent convex lens that helps focus light on the retina. Its curvature can change.\n\n5. Ciliary muscles: These muscles adjust the curvature and focal length of the eye lens during accommodation.\n\n6. Retina: The light-sensitive layer containing photoreceptor cells. A real, inverted image is formed on it.\n\n7. Optic nerve: It carries electrical signals generated by the retina to the brain, where the visual information is processed.\n\nWorking:\n\nLight enters through the cornea and pupil. The cornea and eye lens refract the light and focus it on the retina. Photoreceptors convert light into electrical signals. The optic nerve carries these signals to the brain, which interprets them as vision. Changes in lens curvature allow the eye to focus on objects at different distances."
        },
        {
          q: "Q2. Explain myopia, hypermetropia and presbyopia, including their causes and correction.",
          a: "1. Myopia (short-sightedness): A person with myopia sees nearby objects clearly but distant objects appear blurred. Light from distant objects is focused in front of the retina. This may occur because the eyeball is too long or the eye's converging power is too great. A suitable concave lens diverges the incoming rays and helps the eye focus the image on the retina.\n\n2. Hypermetropia (long-sightedness): Nearby objects appear blurred because their images tend to form behind the retina. This may occur because the eyeball is too short or the eye's converging power is insufficient. A suitable convex lens converges the rays before they enter the eye and helps form a clear image on the retina.\n\n3. Presbyopia: With age, the eye's power of accommodation often decreases. The lens becomes less flexible and the focusing system may not adjust sufficiently for nearby objects. Suitable convex reading lenses, bifocal lenses or progressive lenses may be prescribed according to the person's needs.\n\nThe appropriate lens power depends on the individual's eye examination. A qualified eye-care professional can determine the correction needed."
        },
        {
          q: "Q3. Explain dispersion of white light through a glass prism and describe the spectrum.",
          a: "Dispersion is the phenomenon in which white light separates into its constituent colours when it passes through a prism.\n\nWhen white light enters a glass prism, it is refracted at the first surface. The different wavelengths of visible light travel at different speeds in glass and experience slightly different refractive indices. Consequently, each colour is refracted by a different amount at the prism surfaces.\n\nThe colours spread out to form a spectrum. The familiar order is VIBGYOR: violet, indigo, blue, green, yellow, orange and red.\n\nViolet light deviates the most, while red light deviates the least in an ordinary glass prism under usual conditions. The spectrum shows that white light is composed of different visible colours.\n\nA second suitable prism can recombine the separated colours under an appropriate arrangement, producing white light again. This supports the conclusion that the prism separates the colours already present in white light rather than creating them."
        },
        {
          q: "Q4. Explain atmospheric refraction and describe two of its effects.",
          a: "Atmospheric refraction is the bending of light as it passes through layers of the atmosphere having different densities and refractive indices. Air density generally changes with altitude, so light may follow a curved path through the atmosphere.\n\nEffect 1: Twinkling of stars.\n\nStars are extremely distant and appear point-like. Their light passes through continuously changing atmospheric layers. As a result, the apparent position and brightness of a star fluctuate, producing twinkling.\n\nEffect 2: Advance sunrise and delayed sunset.\n\nWhen the Sun is just below the horizon, its light bends through the atmosphere and can reach the observer. The Sun appears slightly higher than its actual geometric position. Thus, we see sunrise a little earlier and sunset a little later than we would without atmospheric refraction.\n\nThese effects demonstrate that the atmosphere can change the apparent direction of light. Atmospheric refraction is different from scattering, which involves light being redirected by particles or molecules."
        },
        {
          q: "Q5. Explain scattering of light and why the sky, Sun and clouds appear in different colours.",
          a: "Scattering occurs when light is redirected by particles or molecules in a medium. The amount of scattering depends on factors such as wavelength and the size of the scattering particles.\n\n1. Blue sky: Air molecules scatter shorter wavelengths of visible light much more strongly than longer wavelengths. Blue light is therefore scattered in many directions and reaches our eyes from across the sky.\n\n2. Reddish Sun at sunrise and sunset: Sunlight travels through a longer path in the atmosphere when the Sun is near the horizon. Much of the shorter-wavelength light is scattered out of the direct path. The remaining direct sunlight contains proportionally more red and orange light, so the Sun appears reddish.\n\n3. White clouds: Water droplets and ice crystals in clouds scatter a broad range of visible wavelengths. When these colours are scattered together, clouds generally appear white. Thick clouds may appear grey because less sunlight reaches their lower surfaces.\n\nScattering helps explain the colours of the sky and the appearance of sunlight under different atmospheric conditions."
        }
      ]
    },

    flashcards: [
      { q: "What is the cornea?", a: "The transparent front surface of the eye that provides much of its converging power." },
      { q: "What controls the size of the pupil?", a: "The iris." },
      { q: "What is the pupil?", a: "The opening in the iris through which light enters." },
      { q: "Where is the image formed in the eye?", a: "On the retina." },
      { q: "What does the optic nerve do?", a: "Carries visual signals from the retina to the brain." },
      { q: "What is accommodation?", a: "The ability of the eye lens to change focal length." },
      { q: "What is the normal near point for a young adult?", a: "Approximately 25 cm." },
      { q: "What is the far point of a normal eye?", a: "Infinity." },
      { q: "What is myopia?", a: "A defect in which distant objects appear blurred." },
      { q: "Which lens corrects myopia?", a: "A concave lens." },
      { q: "What is hypermetropia?", a: "A defect in which nearby objects appear blurred." },
      { q: "Which lens corrects hypermetropia?", a: "A convex lens." },
      { q: "What is presbyopia?", a: "An age-related reduction in the eye's accommodation ability." },
      { q: "How may presbyopia be corrected?", a: "With suitable reading, bifocal or progressive lenses, depending on need." },
      { q: "What is dispersion?", a: "Splitting white light into its constituent colours." },
      { q: "What is the common order of visible spectrum colours?", a: "VIBGYOR." },
      { q: "Which colour deviates most in a glass prism?", a: "Violet." },
      { q: "Which colour deviates least in a glass prism?", a: "Red." },
      { q: "What is atmospheric refraction?", a: "Refraction caused by varying refractive indices in atmospheric layers." },
      { q: "Why do stars twinkle?", a: "Changing atmospheric refraction changes their apparent brightness and position." },
      { q: "Why is sunrise seen early?", a: "Atmospheric refraction makes the Sun visible before its geometric sunrise." },
      { q: "Why is sunset seen late?", a: "Atmospheric refraction keeps the Sun apparently visible after its geometric sunset." },
      { q: "Why does the sky look blue?", a: "Air molecules scatter shorter visible wavelengths more strongly." },
      { q: "Why does the Sun look red near the horizon?", a: "Shorter wavelengths are scattered out of the long direct atmospheric path." },
      { q: "Why are clouds generally white?", a: "Cloud droplets scatter a broad range of visible wavelengths together." },
      { q: "What happens to the pupil in bright light?", a: "It becomes smaller." },
      { q: "What happens to the pupil in dim light?", a: "It becomes larger." },
      { q: "What kind of image is formed on the retina?", a: "A real, inverted image." },
      { q: "What is the role of ciliary muscles?", a: "They change the curvature of the eye lens." },
      { q: "What causes advance sunrise and delayed sunset?", a: "Atmospheric refraction." }
    ],

    mcqs: [
      {
        q: "Which part of the human eye controls the size of the pupil?",
        options: ["Retina", "Iris", "Optic nerve", "Eye lens"],
        answer: 1
      },
      {
        q: "The image in a normal human eye is formed on the:",
        options: ["Cornea", "Iris", "Retina", "Optic nerve"],
        answer: 2
      },
      {
        q: "The ability of the eye lens to adjust its focal length is called:",
        options: ["Dispersion", "Accommodation", "Scattering", "Reflection"],
        answer: 1
      },
      {
        q: "The near point of a normal young adult eye is approximately:",
        options: ["2.5 cm", "25 cm", "2.5 m", "25 m"],
        answer: 1
      },
      {
        q: "Myopia is corrected using a:",
        options: ["Convex lens", "Concave lens", "Plane glass plate", "Prism only"],
        answer: 1
      },
      {
        q: "Hypermetropia is corrected using a:",
        options: ["Concave lens", "Convex lens", "Plane mirror", "Concave mirror"],
        answer: 1
      },
      {
        q: "In myopia, the image of a distant object tends to form:",
        options: ["In front of the retina", "Behind the retina", "On the iris", "Outside the eye"],
        answer: 0
      },
      {
        q: "Presbyopia is commonly associated with:",
        options: [
          "Age-related reduction in accommodation",
          "Only a change in eye colour",
          "Excessive production of tears",
          "The absence of the cornea"
        ],
        answer: 0
      },
      {
        q: "Dispersion of white light by a prism occurs because:",
        options: [
          "All colours have exactly the same refractive index in glass",
          "Different wavelengths are refracted by different amounts",
          "The prism absorbs all colours except red",
          "White light contains no colours"
        ],
        answer: 1
      },
      {
        q: "Which colour deviates the most in a glass prism?",
        options: ["Red", "Yellow", "Green", "Violet"],
        answer: 3
      },
      {
        q: "Which colour deviates the least in a glass prism?",
        options: ["Violet", "Blue", "Red", "Indigo"],
        answer: 2
      },
      {
        q: "The twinkling of stars is mainly due to:",
        options: [
          "Atmospheric refraction",
          "Reflection from the Moon",
          "Dispersion inside the eye only",
          "The rotation of stars around Earth each second"
        ],
        answer: 0
      },
      {
        q: "Advance sunrise and delayed sunset are caused mainly by:",
        options: ["Atmospheric refraction", "Sound waves", "Magnetic fields", "Reflection from oceans only"],
        answer: 0
      },
      {
        q: "The sky appears blue mainly because:",
        options: [
          "Blue light is scattered more strongly by air molecules than red light",
          "The atmosphere produces blue paint",
          "Red light is always absent from sunlight",
          "Clouds absorb every other colour completely"
        ],
        answer: 0
      },
      {
        q: "The Sun appears reddish near the horizon because:",
        options: [
          "Shorter wavelengths are scattered away from the direct path more strongly",
          "The Sun changes its surface colour at sunset",
          "Red light has the shortest wavelength",
          "The atmosphere stops all light from reaching Earth"
        ],
        answer: 0
      },
      {
        q: "Clouds usually appear white because their droplets:",
        options: [
          "Scatter a broad range of visible wavelengths",
          "Scatter only violet light",
          "Absorb all visible light",
          "Produce their own sunlight"
        ],
        answer: 0
      },
      {
        q: "Which structure carries visual signals from the retina to the brain?",
        options: ["Iris", "Optic nerve", "Pupil", "Ciliary muscle"],
        answer: 1
      },
      {
        q: "In bright light, the pupil generally:",
        options: ["Becomes larger", "Becomes smaller", "Disappears permanently", "Changes into the retina"],
        answer: 1
      },
      {
        q: "The eye lens becomes more curved to focus on nearby objects. This generally:",
        options: [
          "Decreases its focal length",
          "Increases its focal length without limit",
          "Stops refraction",
          "Removes the need for the retina"
        ],
        answer: 0
      },
      {
        q: "Which statement about a normal eye is correct?",
        options: [
          "Its far point is at infinity",
          "Its near point is always 25 metres",
          "Its retina does not detect light",
          "Its pupil focuses the image by itself"
        ],
        answer: 0
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "The Human Eye and the Colourful World",
    images: [
      "images/infographics/science/human-eye-colourful-world.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: The Human Eye and the Colourful World content loaded.");
})();
/* =========================================================
   CLASS 10 HUB — PART 12
   SCIENCE: ELECTRICITY
   Append below Part 11 in content.js
========================================================= */

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "science::Electricity";

  const data = {
    overview:
      "This chapter covers electric current, potential difference, circuit diagrams, Ohm's law, resistance, factors affecting resistance, resistors in series and parallel, heating effect of current, electric power, and electrical energy. It includes key formulae and numerical questions for Class 10 examinations.",

    keyPoints: [
      "Electric current is the rate of flow of electric charge through a conductor.",
      "The SI unit of electric current is the ampere (A).",
      "Electric current is given by I = Q/t when charge flows uniformly.",
      "Conventional current flows from the positive terminal to the negative terminal through the external circuit.",
      "Electrons in a metallic conductor drift in the direction opposite to conventional current.",
      "Potential difference between two points is the work done per unit charge in moving charge between them.",
      "The SI unit of potential difference is the volt (V).",
      "Potential difference is given by V = W/Q.",
      "An ammeter measures current and is connected in series.",
      "A voltmeter measures potential difference and is connected in parallel.",
      "Resistance is the opposition offered by a conductor to the flow of electric current.",
      "The SI unit of resistance is the ohm (Ω).",
      "Ohm's law states that, at constant physical conditions, current through an ohmic conductor is directly proportional to the potential difference across it.",
      "Ohm's law is written as V = IR.",
      "Resistance depends on the length, cross-sectional area, material and temperature of a conductor.",
      "For a uniform conductor at constant temperature, R = ρL/A.",
      "Resistivity (ρ) is a property of the material and its SI unit is Ω m.",
      "In a series combination, the same current flows through every resistor.",
      "The equivalent resistance in series is R = R₁ + R₂ + R₃ + ...",
      "In a parallel combination, the potential difference across each branch is the same.",
      "For parallel resistors, 1/R = 1/R₁ + 1/R₂ + 1/R₃ + ...",
      "The heating effect of current is described by Joule's law: H = I²Rt.",
      "Electric power is the rate at which electrical energy is transferred or consumed.",
      "Electric power is given by P = VI = I²R = V²/R for an ohmic resistor.",
      "The SI unit of electric power is the watt (W).",
      "One kilowatt-hour (kWh) equals 3.6 × 10⁶ joules."
    ],

    questions: {
      veryShort: [
        {
          q: "Q1. Define electric current.",
          a: "Electric current is the rate of flow of electric charge through a conductor."
        },
        {
          q: "Q2. What is the SI unit of electric current?",
          a: "Ampere (A)."
        },
        {
          q: "Q3. Write the formula for electric current.",
          a: "I = Q/t, where Q is charge and t is time."
        },
        {
          q: "Q4. What is the SI unit of electric charge?",
          a: "Coulomb (C)."
        },
        {
          q: "Q5. Define potential difference.",
          a: "Potential difference is the work done per unit charge in moving charge between two points."
        },
        {
          q: "Q6. What is the SI unit of potential difference?",
          a: "Volt (V)."
        },
        {
          q: "Q7. Which instrument measures electric current?",
          a: "An ammeter."
        },
        {
          q: "Q8. How is an ammeter connected in a circuit?",
          a: "In series."
        },
        {
          q: "Q9. Which instrument measures potential difference?",
          a: "A voltmeter."
        },
        {
          q: "Q10. How is a voltmeter connected in a circuit?",
          a: "In parallel across the component."
        },
        {
          q: "Q11. Define electrical resistance.",
          a: "Resistance is the opposition offered by a conductor to the flow of electric current."
        },
        {
          q: "Q12. What is the SI unit of resistance?",
          a: "Ohm (Ω)."
        },
        {
          q: "Q13. State Ohm's law.",
          a: "At constant physical conditions, the current through an ohmic conductor is directly proportional to the potential difference across it."
        },
        {
          q: "Q14. Write the mathematical form of Ohm's law.",
          a: "V = IR."
        },
        {
          q: "Q15. What is resistivity?",
          a: "Resistivity is a property of a material that characterises its opposition to electric current in a uniform conductor."
        },
        {
          q: "Q16. What is the SI unit of resistivity?",
          a: "Ohm metre (Ω m)."
        },
        {
          q: "Q17. What is the equivalent resistance of two resistors in series?",
          a: "R = R₁ + R₂."
        },
        {
          q: "Q18. What is the SI unit of electric power?",
          a: "Watt (W)."
        },
        {
          q: "Q19. Write the formula for electric power.",
          a: "P = VI."
        },
        {
          q: "Q20. How many joules are there in one kilowatt-hour?",
          a: "1 kWh = 3.6 × 10⁶ J."
        }
      ],

      short: [
        {
          q: "Q1. Differentiate between electric current and potential difference.",
          a: "Electric current is the rate of flow of electric charge and is measured in amperes. Potential difference is the work done per unit charge between two points and is measured in volts. Current describes charge flow, while potential difference represents the energy transferred per unit charge."
        },
        {
          q: "Q2. State Ohm's law and mention the condition under which it is valid.",
          a: "Ohm's law states that the current through an ohmic conductor is directly proportional to the potential difference across it, provided its temperature and other physical conditions remain constant. Mathematically, V = IR, where V is potential difference, I is current and R is resistance."
        },
        {
          q: "Q3. Why is an ammeter connected in series and a voltmeter in parallel?",
          a: "An ammeter is connected in series so that the same current flowing through the circuit component also flows through the ammeter. It has very low resistance to minimise changes in circuit current. A voltmeter is connected in parallel across a component to measure the potential difference between its ends. It has very high resistance so that it draws very little current."
        },
        {
          q: "Q4. State the factors affecting the resistance of a conductor.",
          a: "Resistance depends on the length, cross-sectional area, material and temperature of the conductor. For a uniform conductor at constant temperature, resistance increases with length and decreases with cross-sectional area. The relation is R = ρL/A, where ρ is the resistivity of the material."
        },
        {
          q: "Q5. Differentiate between resistors connected in series and parallel.",
          a: "In series, the same current flows through every resistor, and the equivalent resistance is the sum of individual resistances. In parallel, the potential difference across each resistor is the same, and the reciprocal of equivalent resistance equals the sum of the reciprocals of individual resistances. Parallel combination generally has a lower equivalent resistance than its smallest branch resistance."
        },
        {
          q: "Q6. Why is the equivalent resistance in a series combination greater than each individual resistance?",
          a: "In a series combination, resistors are connected one after another, so their resistances add: R = R₁ + R₂ + R₃ + ... . For positive resistances, the sum is greater than any one individual resistance. Each resistor adds to the total opposition to current."
        },
        {
          q: "Q7. State Joule's law of heating.",
          a: "Joule's law states that the heat produced in a resistor is proportional to the square of the current, its resistance and the time for which current flows. It is written as H = I²Rt, where H is heat energy, I is current, R is resistance and t is time."
        },
        {
          q: "Q8. Define electric power and write its common formulae.",
          a: "Electric power is the rate at which electrical energy is transferred or consumed. It is given by P = W/t, where W is energy transferred and t is time. In an electric circuit, P = VI. Using Ohm's law, the formulae P = I²R and P = V²/R can also be used for an ohmic resistor."
        },
        {
          q: "Q9. A current of 2 A flows through a resistor of 5 Ω. Find the potential difference.",
          a: "Given: I = 2 A and R = 5 Ω.\n\nUsing Ohm's law:\nV = IR\nV = 2 × 5\nV = 10 V.\n\nTherefore, the potential difference across the resistor is 10 V."
        },
        {
          q: "Q10. An electric appliance uses 1,000 W for 2 hours. Calculate the energy consumed in kWh.",
          a: "Given: Power = 1,000 W = 1 kW; time = 2 h.\n\nElectrical energy = Power × Time\n= 1 kW × 2 h\n= 2 kWh.\n\nTherefore, the appliance consumes 2 kWh of electrical energy."
        }
      ],

      long: [
        {
          q: "Q1. Explain Ohm's law and describe how it can be verified experimentally.",
          a: "Ohm's law states that the current flowing through an ohmic conductor is directly proportional to the potential difference across its ends, provided its temperature and other physical conditions remain constant.\n\nMathematically:\n\nV ∝ I\n\nV = IR\n\nHere, V is potential difference, I is current and R is resistance.\n\nExperimental verification:\n\n1. Connect a resistor, an ammeter, a battery, a key and a rheostat in series.\n2. Connect a voltmeter in parallel across the resistor.\n3. Close the key and note the current and potential difference.\n4. Adjust the rheostat to obtain several different current values and record the corresponding potential differences.\n5. Calculate V/I for each observation.\n\nIf the conductor obeys Ohm's law, the ratio V/I remains approximately constant at constant temperature. A graph of V against I is a straight line passing through the origin, and its slope represents resistance.\n\nConclusion: For an ohmic conductor under constant physical conditions, potential difference is directly proportional to current."
        },
        {
          q: "Q2. Derive the expressions for equivalent resistance in series and parallel combinations.",
          a: "Series combination:\n\nSuppose resistors R₁, R₂ and R₃ are connected in series. The same current I flows through each resistor. The total potential difference is the sum of the individual potential differences:\n\nV = V₁ + V₂ + V₃\n\nUsing Ohm's law:\n\nIR = IR₁ + IR₂ + IR₃\n\nDividing by I gives:\n\nR = R₁ + R₂ + R₃\n\nTherefore, the equivalent resistance in series is the sum of the individual resistances.\n\nParallel combination:\n\nSuppose resistors R₁, R₂ and R₃ are connected in parallel. The potential difference V across each branch is the same. The total current is the sum of the branch currents:\n\nI = I₁ + I₂ + I₃\n\nUsing Ohm's law:\n\nV/R = V/R₁ + V/R₂ + V/R₃\n\nDividing by V gives:\n\n1/R = 1/R₁ + 1/R₂ + 1/R₃\n\nTherefore, the reciprocal of equivalent resistance in parallel equals the sum of the reciprocals of the individual resistances. This arrangement provides multiple paths for current."
        },
        {
          q: "Q3. Explain the factors affecting the resistance of a conductor and define resistivity.",
          a: "The resistance of a conductor depends on four main factors:\n\n1. Length: For the same material and cross-sectional area at constant temperature, resistance is directly proportional to length. A longer conductor offers greater resistance.\n\n2. Cross-sectional area: Resistance is inversely proportional to cross-sectional area. A thicker conductor generally offers less resistance than a thinner conductor of the same material and length.\n\n3. Material: Different materials have different resistivities. For example, metals such as copper generally have low resistivity and are useful for electrical wiring.\n\n4. Temperature: Resistance can change with temperature. For metallic conductors, resistance generally increases as temperature rises over an ordinary operating range.\n\nFor a uniform conductor at constant temperature:\n\nR = ρL/A\n\nwhere R is resistance, L is length, A is cross-sectional area and ρ is resistivity.\n\nResistivity is a property of the material that characterises its resistance for a given geometry. Its SI unit is ohm metre (Ω m). A material with lower resistivity is generally a better conductor, all other conditions being comparable."
        },
        {
          q: "Q4. Explain the heating effect of electric current and give its applications.",
          a: "When electric current passes through a resistor, electrical energy is converted into heat energy. This is called the heating effect of electric current.\n\nAccording to Joule's law of heating:\n\nH = I²Rt\n\nwhere H is heat produced, I is current, R is resistance and t is time.\n\nThe heat produced increases with the square of current, resistance and time, provided the relevant quantities remain constant.\n\nApplications:\n\n1. Electric iron: Current heats a high-resistance heating element, which transfers heat to the base plate.\n\n2. Electric heater: A heating element converts electrical energy into thermal energy.\n\n3. Toaster: Electric current heats the element that toasts bread.\n\n4. Electric fuse: Excessive current heats the fuse wire until it melts, breaking the circuit and helping protect the wiring.\n\n5. Incandescent bulb: Its filament becomes very hot and emits light, although much of the electrical energy is also released as heat.\n\nThe heating effect is useful in appliances, but unwanted heating in wires can waste energy and create a safety hazard."
        },
        {
          q: "Q5. Define electric power and electrical energy. Explain their units and solve a numerical example.",
          a: "Electric power is the rate at which electrical energy is transferred or consumed. Electrical energy is the total work done by an electric current over a period of time.\n\nPower formulae:\n\nP = W/t\nP = VI\nP = I²R\nP = V²/R\n\nHere, P is power, W is energy transferred, V is potential difference, I is current and R is resistance. The SI unit of power is watt (W).\n\nElectrical energy:\n\nE = Pt\n\nThe SI unit of electrical energy is joule (J). Electricity bills commonly measure energy in kilowatt-hours (kWh).\n\n1 kWh = 1,000 W × 3,600 s\n= 3.6 × 10⁶ J.\n\nNumerical example:\n\nA 100 W bulb operates for 5 hours. Find the energy consumed in kWh.\n\nStep 1: Convert power into kilowatts.\nP = 100/1,000 = 0.1 kW.\n\nStep 2: Multiply power by time.\nE = 0.1 kW × 5 h = 0.5 kWh.\n\nTherefore, the bulb consumes 0.5 kWh of electrical energy."
        }
      ]
    },

    flashcards: [
      { q: "What is electric current?", a: "The rate of flow of electric charge." },
      { q: "What is the formula for current?", a: "I = Q/t." },
      { q: "What is the SI unit of current?", a: "Ampere (A)." },
      { q: "What is the SI unit of charge?", a: "Coulomb (C)." },
      { q: "What is potential difference?", a: "Work done per unit charge between two points." },
      { q: "What is the formula for potential difference?", a: "V = W/Q." },
      { q: "What is the SI unit of potential difference?", a: "Volt (V)." },
      { q: "Which instrument measures current?", a: "Ammeter." },
      { q: "How is an ammeter connected?", a: "In series." },
      { q: "Which instrument measures potential difference?", a: "Voltmeter." },
      { q: "How is a voltmeter connected?", a: "In parallel." },
      { q: "What is resistance?", a: "Opposition offered to the flow of current." },
      { q: "What is the SI unit of resistance?", a: "Ohm (Ω)." },
      { q: "State Ohm's law mathematically.", a: "V = IR." },
      { q: "What is resistivity?", a: "A material property describing its electrical resistance for a given geometry." },
      { q: "What is the SI unit of resistivity?", a: "Ohm metre (Ω m)." },
      { q: "What is the resistance formula for a uniform conductor?", a: "R = ρL/A." },
      { q: "What is the equivalent resistance in series?", a: "R = R₁ + R₂ + R₃ + ..." },
      { q: "What is the parallel resistance formula?", a: "1/R = 1/R₁ + 1/R₂ + ..." },
      { q: "What stays the same through resistors in series?", a: "Current." },
      { q: "What stays the same across parallel branches?", a: "Potential difference." },
      { q: "State Joule's law of heating.", a: "H = I²Rt." },
      { q: "What is electric power?", a: "The rate of electrical energy transfer or consumption." },
      { q: "What is the formula P = VI used for?", a: "Calculating electric power from voltage and current." },
      { q: "What is the SI unit of power?", a: "Watt (W)." },
      { q: "What is the formula for electrical energy?", a: "E = Pt." },
      { q: "What is one kilowatt-hour in joules?", a: "3.6 × 10⁶ J." },
      { q: "What is the equivalent resistance of 2 Ω and 3 Ω in series?", a: "5 Ω." },
      { q: "What is the power of a device using 2 A at 10 V?", a: "P = VI = 20 W." },
      { q: "How much energy does a 1 kW appliance use in 3 hours?", a: "3 kWh." }
    ],

    mcqs: [
      {
        q: "Electric current is the rate of flow of:",
        options: ["Mass", "Electric charge", "Temperature", "Resistance"],
        answer: 1
      },
      {
        q: "The SI unit of electric current is:",
        options: ["Volt", "Ohm", "Ampere", "Watt"],
        answer: 2
      },
      {
        q: "The relation between charge, current and time is:",
        options: ["I = Qt", "I = Q/t", "I = t/Q", "Q = I/t"],
        answer: 1
      },
      {
        q: "Potential difference is equal to:",
        options: [
          "Work done per unit charge",
          "Charge per unit time",
          "Resistance per unit length",
          "Power multiplied by resistance in every case"
        ],
        answer: 0
      },
      {
        q: "An ammeter is connected:",
        options: ["In series", "In parallel only", "Across the battery only", "Without completing the circuit"],
        answer: 0
      },
      {
        q: "A voltmeter is connected:",
        options: ["In series", "In parallel across a component", "Only in place of a resistor", "Only across an open switch"],
        answer: 1
      },
      {
        q: "Ohm's law is represented by:",
        options: ["V = IR", "V = I/R", "R = VI", "I = VR"],
        answer: 0
      },
      {
        q: "The SI unit of resistance is:",
        options: ["Ampere", "Ohm", "Volt", "Joule"],
        answer: 1
      },
      {
        q: "The resistance of a uniform conductor is:",
        options: ["R = ρA/L", "R = ρL/A", "R = LA/ρ", "R = ρLA"],
        answer: 1
      },
      {
        q: "If the length of a uniform wire doubles while its material and cross-sectional area remain unchanged, its resistance becomes:",
        options: ["Half", "Double", "Four times", "Unchanged"],
        answer: 1
      },
      {
        q: "The equivalent resistance of 2 Ω and 4 Ω connected in series is:",
        options: ["2 Ω", "4 Ω", "6 Ω", "8 Ω"],
        answer: 2
      },
      {
        q: "In a series circuit, the same quantity flows through every resistor:",
        options: ["Potential difference", "Current", "Resistance", "Power"],
        answer: 1
      },
      {
        q: "In a parallel circuit, each branch has the same:",
        options: ["Current in every case", "Resistance in every case", "Potential difference", "Power in every case"],
        answer: 2
      },
      {
        q: "The equivalent resistance of two 6 Ω resistors connected in parallel is:",
        options: ["12 Ω", "6 Ω", "3 Ω", "1 Ω"],
        answer: 2
      },
      {
        q: "Joule's law of heating is:",
        options: ["H = IRt", "H = I²Rt", "H = V/R", "H = I/t"],
        answer: 1
      },
      {
        q: "The SI unit of electric power is:",
        options: ["Joule", "Coulomb", "Watt", "Ohm"],
        answer: 2
      },
      {
        q: "Electric power can be calculated using:",
        options: ["P = VI", "P = V/I only", "P = R/I", "P = Q + t"],
        answer: 0
      },
      {
        q: "One kilowatt-hour is equal to:",
        options: ["3.6 × 10³ J", "3.6 × 10⁶ J", "1,000 J", "36 J"],
        answer: 1
      },
      {
        q: "A 12 V potential difference drives a current of 3 A through a resistor. Its resistance is:",
        options: ["4 Ω", "9 Ω", "15 Ω", "36 Ω"],
        answer: 0
      },
      {
        q: "A 100 W appliance operates for 2 hours. The energy consumed is:",
        options: ["0.2 kWh", "2 kWh", "200 kWh", "0.02 kWh"],
        answer: 0
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Electricity",
    images: [
      "images/infographics/science/electricity.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Electricity content loaded.");
})();

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "science::Magnetic Effects of Electric Current";

  const data = {
    overview:
      "This chapter explains magnetic fields produced by electric currents, magnetic field patterns, electromagnets, the force on a current-carrying conductor, electric motors, electromagnetic induction, generators and safe domestic electric circuits.",

    keyPoints: [
      "A current-carrying conductor produces a magnetic field around it.",
      "Magnetic field lines form closed curves and never intersect.",
      "The right-hand thumb rule gives the direction of the magnetic field around a straight current-carrying conductor.",
      "A circular coil produces a magnetic field that becomes stronger when its current or number of turns increases.",
      "A solenoid produces a magnetic field similar to that of a bar magnet.",
      "An electromagnet is a temporary magnet produced by electric current.",
      "A current-carrying conductor in a magnetic field can experience a force.",
      "Fleming's left-hand rule gives the direction of force on a current-carrying conductor.",
      "An electric motor converts electrical energy into mechanical energy.",
      "Electromagnetic induction is the production of induced current due to a changing magnetic field.",
      "An electric generator converts mechanical energy into electrical energy.",
      "Domestic circuits use live and neutral wires; an earth wire provides an important safety path.",
      "A fuse or MCB helps protect a circuit from excessive current.",
      "Overloading and short circuits can cause excessive current and dangerous heating."
    ],

    questions: {
      veryShort: [
        {
          q: "1. What is a magnetic field?",
          a: "The region around a magnet or current-carrying conductor where magnetic force can be experienced."
        },
        {
          q: "2. What is the SI unit of magnetic field?",
          a: "The tesla (T)."
        },
        {
          q: "3. What produces a magnetic field around a wire?",
          a: "Electric current flowing through the wire."
        },
        {
          q: "4. What are magnetic field lines?",
          a: "Imaginary lines used to represent the direction and relative strength of a magnetic field."
        },
        {
          q: "5. Where are magnetic field lines closest together?",
          a: "Where the magnetic field is strongest, such as near the poles of a bar magnet."
        },
        {
          q: "6. Can two magnetic field lines intersect?",
          a: "No. If they intersected, the field would have two directions at the same point."
        },
        {
          q: "7. State the right-hand thumb rule.",
          a: "Point the right thumb in the direction of current; the curled fingers show the direction of the magnetic field."
        },
        {
          q: "8. What is a solenoid?",
          a: "A long cylindrical coil consisting of many turns of insulated wire."
        },
        {
          q: "9. What is an electromagnet?",
          a: "A magnet produced by electric current, usually using a coil wound around a soft iron core."
        },
        {
          q: "10. What is the main property of an electromagnet?",
          a: "Its magnetic effect can be controlled by switching the current on or off."
        },
        {
          q: "11. What happens when current through a coil increases?",
          a: "Its magnetic field generally becomes stronger."
        },
        {
          q: "12. What is Fleming's left-hand rule used for?",
          a: "To determine the direction of force on a current-carrying conductor in a magnetic field."
        },
        {
          q: "13. What is an electric motor?",
          a: "A device that converts electrical energy into mechanical energy."
        },
        {
          q: "14. What is electromagnetic induction?",
          a: "The production of induced current when the magnetic field linked with a circuit changes."
        },
        {
          q: "15. What is an electric generator?",
          a: "A device that converts mechanical energy into electrical energy."
        },
        {
          q: "16. What is alternating current (AC)?",
          a: "Current that periodically changes its direction."
        },
        {
          q: "17. What is direct current (DC)?",
          a: "Current that flows in one direction."
        },
        {
          q: "18. What is the function of a fuse?",
          a: "It breaks the circuit when excessive current heats and melts its fuse element."
        },
        {
          q: "19. What is a short circuit?",
          a: "An unintended low-resistance connection that can cause a very large current."
        },
        {
          q: "20. What is the purpose of an earth wire?",
          a: "It provides a low-resistance path for fault current to help reduce electric-shock risk."
        }
      ],

      short: [
        {
          q: "1. Describe the magnetic field around a straight current-carrying conductor.",
          a: "The magnetic field lines form concentric circles around the conductor. Their direction depends on the direction of current. The field becomes stronger when the current increases and weaker as the distance from the conductor increases."
        },
        {
          q: "2. Explain the right-hand thumb rule.",
          a: "Imagine holding a straight current-carrying conductor in your right hand. Point your thumb in the direction of conventional current. The direction in which your fingers curl represents the direction of the magnetic field lines."
        },
        {
          q: "3. How does a circular coil produce a magnetic field?",
          a: "Each part of a current-carrying circular coil produces a magnetic field. The fields combine near the centre to produce a stronger resultant field. Increasing the current or the number of turns generally increases the field strength."
        },
        {
          q: "4. Describe the magnetic field of a solenoid.",
          a: "A solenoid produces a magnetic field similar to that of a bar magnet. Inside a long solenoid, the field lines are nearly parallel and closely spaced, indicating a nearly uniform magnetic field. Its poles depend on the direction of current."
        },
        {
          q: "5. How can the strength of an electromagnet be increased?",
          a: "Its strength can be increased by increasing the current through the coil, increasing the number of turns per unit length, and inserting a suitable soft iron core."
        },
        {
          q: "6. What happens when a current-carrying conductor is placed in a magnetic field?",
          a: "The conductor may experience a force because of the interaction between its magnetic field and the external magnetic field. The force depends on the current, magnetic field strength and angle between the conductor and the field."
        },
        {
          q: "7. State Fleming's left-hand rule.",
          a: "Stretch the thumb, forefinger and middle finger of the left hand so they are mutually perpendicular. The forefinger indicates the magnetic field, the middle finger indicates current, and the thumb indicates the force or motion."
        },
        {
          q: "8. What is the function of a split-ring commutator in a DC motor?",
          a: "It reverses the direction of current in the rotating coil after every half-turn. This helps the torque continue to act in the same rotational direction, allowing the coil to keep rotating."
        },
        {
          q: "9. Differentiate between AC and DC.",
          a: "Alternating current periodically reverses direction, whereas direct current flows in one direction. AC is commonly used in household electricity supply, while batteries usually provide DC."
        },
        {
          q: "10. Differentiate between overloading and short circuiting.",
          a: "Overloading occurs when a circuit draws more current than its safe capacity, for example when too many high-power appliances operate on one circuit. A short circuit occurs when conductors at different potentials become connected through an unintended low-resistance path."
        }
      ],

      long: [
        {
          q: "1. Explain the magnetic field around a straight conductor, a circular coil and a solenoid.",
          a: "A current-carrying conductor produces a magnetic field around it. Around a straight conductor, the field lines are concentric circles, and their direction is found using the right-hand thumb rule. The field is stronger near the wire and becomes weaker with increasing distance.\n\nIn a circular coil, the magnetic fields produced by different parts of the wire combine. Near the centre, these fields reinforce one another, producing a stronger field. Increasing the current or the number of turns increases the field strength.\n\nA solenoid is a coil containing many closely wound turns of insulated wire. Its field pattern resembles that of a bar magnet. Inside a long solenoid, field lines are nearly parallel, showing that the field is almost uniform. Placing a soft iron core inside the solenoid can make it a strong electromagnet."
        },
        {
          q: "2. Explain the construction and working principle of an electric motor.",
          a: "An electric motor converts electrical energy into mechanical energy. A simple motor contains a rectangular coil placed between the poles of a magnet, a split-ring commutator, carbon brushes and a source of electric current.\n\nWhen current flows through the coil, its two sides experience forces in opposite directions because they carry current in opposite directions while lying in the magnetic field. These forces form a turning effect, or torque, that rotates the coil. Fleming's left-hand rule helps determine the force direction.\n\nAfter every half-turn, the split-ring commutator reverses the current in the coil. This reverses the forces on the sides in a way that keeps the coil rotating in the same overall direction. Motors are used in fans, pumps, mixers and many other electrical appliances."
        },
        {
          q: "3. Explain electromagnetic induction and the working principle of an electric generator.",
          a: "Electromagnetic induction is the production of an induced current in a conductor when the magnetic field linked with it changes. This can happen when a magnet moves relative to a coil or when a coil moves in a magnetic field. The induced current depends on the rate of change of magnetic flux and the circuit arrangement.\n\nAn electric generator uses this principle to convert mechanical energy into electrical energy. In a simple generator, a coil rotates in a magnetic field. As the coil rotates, the magnetic flux linked with it changes, inducing an electromotive force and, in a closed circuit, a current.\n\nA generator may use slip rings to produce alternating current, while a split-ring arrangement can produce a unidirectional output in a simple model. Generators are used in power stations and other systems that convert mechanical energy into electrical energy."
        },
        {
          q: "4. Describe domestic electric circuits and explain the role of their safety devices.",
          a: "In a domestic electric circuit, the live wire carries the supply voltage, the neutral wire completes the circuit, and the earth wire provides a protective path for fault current. Appliances are generally connected in parallel so each receives the appropriate supply voltage and can be operated independently.\n\nA fuse contains a wire or element that melts if excessive current flows, breaking the circuit. An MCB, or miniature circuit breaker, automatically switches off the circuit under specified overcurrent conditions and can usually be reset after the fault is corrected. Earthing helps reduce the risk of electric shock if a fault makes an appliance's exposed metal body live.\n\nOverloading can occur when the current drawn exceeds the safe capacity of a circuit. A short circuit can occur when live and neutral conductors make an unintended low-resistance connection. Both can cause overheating and fire. Electrical installation and repairs should be handled by a qualified person, and protective devices must never be bypassed."
        },
        {
          q: "5. Explain the factors affecting the force on a current-carrying conductor in a magnetic field and state Fleming's left-hand rule.",
          a: "A current-carrying conductor placed in an external magnetic field can experience a force due to the interaction of magnetic fields. The force increases when the current or magnetic field strength increases, provided other conditions remain the same. It also depends on the length of conductor within the field and its orientation relative to the field.\n\nFor a straight conductor in a uniform magnetic field, the force is greatest when the current is perpendicular to the field. When the conductor is parallel to the magnetic field, the magnetic force on it is zero in the ideal case. Reversing the current or reversing the magnetic field reverses the direction of the force.\n\nFleming's left-hand rule determines the direction: hold the thumb, forefinger and middle finger of the left hand mutually perpendicular. The forefinger represents the magnetic field, the middle finger represents conventional current, and the thumb represents force or motion. This principle is used in electric motors."
        }
      ]
    },

    flashcards: [
      { q: "What produces a magnetic field around a wire?", a: "Electric current flowing through the wire." },
      { q: "What is the SI unit of magnetic field?", a: "Tesla (T)." },
      { q: "What shape are the field lines around a straight current-carrying wire?", a: "Concentric circles." },
      { q: "Which rule gives the magnetic field direction around a straight conductor?", a: "Right-hand thumb rule." },
      { q: "What does the thumb represent in the right-hand thumb rule?", a: "The direction of conventional current." },
      { q: "What do closely spaced field lines indicate?", a: "A stronger magnetic field." },
      { q: "Can magnetic field lines intersect?", a: "No." },
      { q: "What is a solenoid?", a: "A long coil made of many turns of insulated wire." },
      { q: "What does a solenoid's field resemble?", a: "The field of a bar magnet." },
      { q: "What is an electromagnet?", a: "A magnet produced by electric current." },
      { q: "Which core is commonly used to strengthen an electromagnet?", a: "Soft iron." },
      { q: "How can a coil's magnetic field be strengthened?", a: "Increase the current or the number of turns." },
      { q: "What may happen to a conductor carrying current in a magnetic field?", a: "It may experience a force." },
      { q: "Which rule determines the force direction on a current-carrying conductor?", a: "Fleming's left-hand rule." },
      { q: "What does the forefinger represent in Fleming's left-hand rule?", a: "The magnetic field direction." },
      { q: "What does the middle finger represent in Fleming's left-hand rule?", a: "The conventional current direction." },
      { q: "What does the thumb represent in Fleming's left-hand rule?", a: "The force or motion direction." },
      { q: "What energy conversion occurs in an electric motor?", a: "Electrical energy to mechanical energy." },
      { q: "What is the purpose of a split-ring commutator in a simple DC motor?", a: "It reverses coil current after each half-turn." },
      { q: "What is electromagnetic induction?", a: "Induced current produced by a changing magnetic field linked with a circuit." },
      { q: "What energy conversion occurs in an electric generator?", a: "Mechanical energy to electrical energy." },
      { q: "What type of current periodically reverses direction?", a: "Alternating current (AC)." },
      { q: "What type of current flows in one direction?", a: "Direct current (DC)." },
      { q: "What does a fuse do?", a: "Breaks a circuit when excessive current melts its element." },
      { q: "What is the full form of MCB?", a: "Miniature Circuit Breaker." },
      { q: "What is the purpose of an earth wire?", a: "To provide a protective path for fault current." },
      { q: "What is overloading?", a: "Drawing more current than a circuit can safely carry." },
      { q: "What is a short circuit?", a: "An unintended low-resistance connection causing excessive current." },
      { q: "Why are household appliances connected in parallel?", a: "They receive the supply voltage and can operate independently." },
      { q: "Who should carry out domestic electrical repairs?", a: "A qualified electrician." }
    ],

    mcqs: [
      {
        q: "1. The magnetic field around a straight current-carrying conductor consists of:",
        options: ["Straight parallel lines", "Concentric circles", "Elliptical orbits", "Random curves"],
        answer: 1
      },
      {
        q: "2. The SI unit of magnetic field is:",
        options: ["Ampere", "Volt", "Tesla", "Ohm"],
        answer: 2
      },
      {
        q: "3. Which rule gives the direction of the magnetic field around a straight conductor?",
        options: ["Ohm's law", "Right-hand thumb rule", "Fleming's left-hand rule", "Law of reflection"],
        answer: 1
      },
      {
        q: "4. If the current through a straight conductor increases, the magnetic field near it generally:",
        options: ["Becomes stronger", "Becomes zero", "Always reverses", "Remains unchanged"],
        answer: 0
      },
      {
        q: "5. Magnetic field lines never intersect because:",
        options: ["They are always straight", "A magnetic field has a unique direction at a point", "They exist only in air", "They have no direction"],
        answer: 1
      },
      {
        q: "6. The magnetic field inside a long solenoid is approximately:",
        options: ["Uniform", "Always zero", "Random", "Circular only at every point"],
        answer: 0
      },
      {
        q: "7. Which material is commonly used as the core of an electromagnet?",
        options: ["Wood", "Glass", "Soft iron", "Rubber"],
        answer: 2
      },
      {
        q: "8. Which change generally strengthens an electromagnet?",
        options: ["Reducing its current", "Removing all coil turns", "Increasing its coil current", "Opening the circuit permanently"],
        answer: 2
      },
      {
        q: "9. Fleming's left-hand rule is used to find the direction of:",
        options: ["Induced current in every situation", "Force on a current-carrying conductor in a magnetic field", "Resistance of a wire", "Refraction of light"],
        answer: 1
      },
      {
        q: "10. An electric motor converts:",
        options: ["Mechanical energy into chemical energy", "Electrical energy into mechanical energy", "Heat into nuclear energy", "Light into sound only"],
        answer: 1
      },
      {
        q: "11. The split-ring commutator in a simple DC motor helps to:",
        options: ["Stop all current", "Reverse coil current every half-turn", "Remove the magnetic field permanently", "Increase wire resistance to infinity"],
        answer: 1
      },
      {
        q: "12. Electromagnetic induction occurs when:",
        options: ["The magnetic flux linked with a circuit changes", "A circuit is made only of plastic", "A magnet is permanently motionless relative to the coil and field", "The circuit has no conductor"],
        answer: 0
      },
      {
        q: "13. An electric generator converts:",
        options: ["Electrical energy into mechanical energy", "Mechanical energy into electrical energy", "Electrical energy into mass", "Chemical energy into matter"],
        answer: 1
      },
      {
        q: "14. Which type of current periodically changes direction?",
        options: ["Direct current", "Alternating current", "Static charge", "No current"],
        answer: 1
      },
      {
        q: "15. Which device is designed to interrupt a circuit during excessive current?",
        options: ["A fuse", "A wooden block", "A plastic ruler", "A magnet used alone"],
        answer: 0
      },
      {
        q: "16. What is the main protective purpose of an earth wire?",
        options: ["To increase normal appliance resistance", "To provide a protective path for fault current", "To replace the live wire", "To make all appliances consume more power"],
        answer: 1
      },
      {
        q: "17. Which situation is an example of overloading?",
        options: ["Current stays within the circuit rating", "Too many high-power appliances draw excessive current from one circuit", "A switch is switched off", "A lamp is disconnected"],
        answer: 1
      },
      {
        q: "18. A short circuit may occur when:",
        options: ["Live and neutral conductors become connected through an unintended low-resistance path", "An appliance is used at its normal rating", "A circuit is properly switched off", "A wire is stored safely"],
        answer: 0
      },
      {
        q: "19. Household appliances are generally connected in parallel so that:",
        options: ["Each appliance can operate independently", "All appliances must stop if one is switched off", "The current is always zero", "No appliance receives supply voltage"],
        answer: 0
      },
      {
        q: "20. Which is the safest response to a suspected electrical wiring fault?",
        options: ["Touch the exposed wire to test it", "Bypass the fuse", "Keep using the circuit", "Keep away and ask a qualified electrician for help"],
        answer: 3
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Magnetic Effects of Electric Current",
    images: [
      "images/infographics/science/magnetic-effects-electric-current.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Magnetic Effects of Electric Current content loaded.");
})();

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "science::Our Environment";

  const data = {
    overview:
      "This chapter explains ecosystems, biotic and abiotic components, food chains, food webs, trophic levels, energy transfer, biological magnification, ozone depletion and the management of biodegradable and non-biodegradable wastes.",

    keyPoints: [
      "The environment includes living organisms and the physical conditions around them.",
      "An ecosystem consists of organisms interacting with one another and with their surroundings.",
      "Biotic components include producers, consumers and decomposers.",
      "Abiotic components include air, water, soil, sunlight and temperature.",
      "Green plants are producers because they make food through photosynthesis.",
      "A food chain shows the transfer of food and energy from one organism to another.",
      "A food web consists of interconnected food chains.",
      "Each step in a food chain is called a trophic level.",
      "Only about 10% of the energy at one trophic level is transferred to the next level.",
      "Energy flow through an ecosystem is unidirectional.",
      "Decomposers break down dead organisms and organic wastes.",
      "Biological magnification is the increase in the concentration of certain harmful chemicals at higher trophic levels.",
      "Biodegradable substances can be broken down by biological processes.",
      "Non-biodegradable substances do not break down easily through natural biological processes.",
      "The ozone layer absorbs much of the Sun's harmful ultraviolet radiation.",
      "Certain chemicals, including CFCs, contribute to ozone depletion.",
      "Waste reduction, reuse, recycling and responsible disposal help protect the environment."
    ],

    questions: {
      veryShort: [
        {
          q: "1. What is the environment?",
          a: "The environment includes all living and non-living surroundings that affect organisms."
        },
        {
          q: "2. What is an ecosystem?",
          a: "A system in which living organisms interact with one another and with their physical environment."
        },
        {
          q: "3. Name two abiotic components of an ecosystem.",
          a: "Air and water."
        },
        {
          q: "4. What are biotic components?",
          a: "The living components of an ecosystem."
        },
        {
          q: "5. Who are producers?",
          a: "Organisms, such as green plants, that make their own food."
        },
        {
          q: "6. Who are consumers?",
          a: "Organisms that obtain food by eating other organisms or organic matter."
        },
        {
          q: "7. What are decomposers?",
          a: "Organisms such as many bacteria and fungi that break down dead organic matter."
        },
        {
          q: "8. What is a food chain?",
          a: "A sequence showing how food and energy pass from one organism to another."
        },
        {
          q: "9. What is a food web?",
          a: "A network of interconnected food chains in an ecosystem."
        },
        {
          q: "10. What is a trophic level?",
          a: "A feeding position occupied by an organism in a food chain."
        },
        {
          q: "11. State the 10% law.",
          a: "Approximately 10% of the energy at one trophic level is transferred to the next trophic level."
        },
        {
          q: "12. In which direction does energy flow in an ecosystem?",
          a: "Energy flows in one direction through the ecosystem."
        },
        {
          q: "13. What is biological magnification?",
          a: "The increase in the concentration of certain harmful chemicals at higher trophic levels."
        },
        {
          q: "14. What is a biodegradable substance?",
          a: "A substance that can be broken down by biological processes."
        },
        {
          q: "15. What is a non-biodegradable substance?",
          a: "A substance that is not easily broken down by natural biological processes."
        },
        {
          q: "16. Give one example of biodegradable waste.",
          a: "Vegetable peels."
        },
        {
          q: "17. Give one example of non-biodegradable waste.",
          a: "A plastic bag."
        },
        {
          q: "18. What is the ozone layer?",
          a: "A region of the stratosphere containing relatively high concentrations of ozone."
        },
        {
          q: "19. Which type of radiation is absorbed by the ozone layer?",
          a: "Much of the Sun's harmful ultraviolet (UV) radiation."
        },
        {
          q: "20. Name one group of chemicals responsible for ozone depletion.",
          a: "Chlorofluorocarbons (CFCs)."
        }
      ],

      short: [
        {
          q: "1. Differentiate between biotic and abiotic components.",
          a: "Biotic components are the living parts of an ecosystem, such as plants, animals and microorganisms. Abiotic components are its non-living physical and chemical factors, such as air, water, soil, sunlight and temperature."
        },
        {
          q: "2. What are the roles of producers, consumers and decomposers?",
          a: "Producers prepare food, usually through photosynthesis. Consumers obtain energy by feeding on plants or other organisms. Decomposers break down dead organisms and organic waste, returning nutrients to the environment."
        },
        {
          q: "3. Explain a food chain with an example.",
          a: "A food chain represents the transfer of food and energy between organisms. For example: grass → grasshopper → frog → snake. Grass is the producer, while the other organisms obtain energy by feeding on organisms before them in the chain."
        },
        {
          q: "4. Why are food webs important in ecosystems?",
          a: "A food web connects multiple food chains. It shows that an organism may have several food sources and predators. These connections can provide alternative feeding pathways and help us understand the complex relationships that maintain an ecosystem."
        },
        {
          q: "5. Explain the 10% law with an example.",
          a: "Only about 10% of the energy available at one trophic level passes to the next. If producers contain 10,000 units of energy, primary consumers may receive about 1,000 units and secondary consumers about 100 units. The values are illustrative."
        },
        {
          q: "6. Why are food chains usually limited to a few trophic levels?",
          a: "A large amount of energy is used in life processes and dissipated as heat at each trophic level. Only a small fraction passes to the next level. Therefore, the available energy decreases along the food chain and can support only a limited number of levels."
        },
        {
          q: "7. Why are decomposers essential for an ecosystem?",
          a: "Decomposers break down dead organisms and organic wastes. They release nutrients back into the environment, where these nutrients can be reused by producers. Without decomposition, organic matter would accumulate and nutrient cycling would be disrupted."
        },
        {
          q: "8. Differentiate between biodegradable and non-biodegradable substances.",
          a: "Biodegradable substances can be broken down by organisms and biological processes, such as vegetable peels and many food scraps. Non-biodegradable substances, such as many plastics, persist for long periods because they do not break down easily through natural biological processes."
        },
        {
          q: "9. What is biological magnification, and why is it harmful?",
          a: "Biological magnification is the increase in the concentration of certain persistent harmful chemicals at successive trophic levels. Predators at higher levels may accumulate high concentrations of these chemicals, causing health problems and disturbing ecosystem balance."
        },
        {
          q: "10. State three ways to reduce environmental pollution caused by waste.",
          a: "We should reduce unnecessary consumption, reuse suitable products and recycle materials such as paper, glass and metals. Organic waste can be composted where appropriate. Hazardous and electronic waste should be handled through suitable collection and disposal systems."
        }
      ],

      long: [
        {
          q: "1. Explain the structure and functioning of an ecosystem.",
          a: "An ecosystem is a functional unit in which living organisms interact with one another and with the non-living environment. A pond, forest, grassland or garden can function as an ecosystem.\n\nIts components are broadly classified as biotic and abiotic. Biotic components include producers, consumers and decomposers. Green plants act as producers because they prepare food through photosynthesis. Herbivores feed on plants, while carnivores feed on other animals. Decomposers, including many bacteria and fungi, break down dead organisms and organic wastes.\n\nAbiotic components include air, water, soil, sunlight, minerals and temperature. These factors influence the survival and distribution of organisms. Energy generally enters the ecosystem through sunlight, passes from producers to consumers and is eventually dissipated as heat. Decomposers help recycle nutrients, which can be used again by producers. Thus, energy flow and nutrient cycling are essential for ecosystem functioning."
        },
        {
          q: "2. What are food chains and food webs? Explain the flow of energy through trophic levels.",
          a: "A food chain is a sequence of organisms through which food and energy pass. For example, grass → grasshopper → frog → snake. Grass is the producer, the grasshopper is the primary consumer, the frog is the secondary consumer, and the snake occupies a higher consumer level in this example.\n\nA food web is formed when several food chains are interconnected. It represents the many feeding relationships within an ecosystem. Because organisms may feed on different species, a food web gives a more realistic picture of an ecosystem than a single food chain.\n\nEach feeding position is called a trophic level. According to the 10% law commonly taught at this level, roughly 10% of the energy available at one trophic level is transferred to the next. Much of the remaining energy is used in life processes or dissipated as heat. Consequently, the energy available decreases at higher levels, and food chains generally contain only a few trophic levels. Energy flow is unidirectional rather than cyclic."
        },
        {
          q: "3. Differentiate between biodegradable and non-biodegradable substances. Discuss their environmental effects and suitable waste-management practices.",
          a: "Biodegradable substances can be broken down by microorganisms and other biological processes. Examples include vegetable peels, fallen leaves and many food scraps. Their decomposition returns nutrients to the environment. However, when large amounts of organic waste decompose without sufficient oxygen, unpleasant gases may be produced, so appropriate management is important.\n\nNon-biodegradable substances do not break down easily through natural biological processes. Many plastics and certain persistent chemical pollutants can remain in the environment for long periods. They may accumulate in soil and water, harm wildlife and enter food chains. Some persistent pollutants can undergo biological magnification.\n\nWaste can be managed by following the principles of reducing, reusing and recycling. Organic waste may be composted when suitable. Reusable products can reduce the need for new materials, while paper, glass and metals may be recycled through proper systems. Single-use products should be avoided when practical. Batteries, electronic waste and hazardous chemicals require appropriate collection and disposal rather than being mixed with ordinary household waste."
        },
        {
          q: "4. Explain biological magnification and describe why persistent chemical pollutants are dangerous.",
          a: "Biological magnification refers to the increase in the concentration of certain persistent harmful chemicals at successive trophic levels of a food chain. It is particularly concerning when pollutants are difficult to break down and may accumulate in the tissues of organisms.\n\nFor example, a persistent pesticide entering a water body may be taken up by small organisms. Small aquatic animals may consume many of these organisms, and larger fish may eat numerous smaller animals. A bird feeding on the larger fish may then accumulate a still higher concentration of the pollutant. The exact concentrations depend on the chemical and ecosystem, but the pattern illustrates why top-level consumers may be at particular risk.\n\nSuch pollutants can damage organs, interfere with reproduction and affect the survival of organisms. Humans may also be exposed through contaminated food. Preventing pollution at its source, regulating harmful chemicals, treating waste properly and monitoring ecosystems are important ways to reduce these risks."
        },
        {
          q: "5. Explain the importance of the ozone layer, how ozone depletion occurs and how it can be reduced.",
          a: "The ozone layer is found in the stratosphere and absorbs much of the Sun's harmful ultraviolet radiation. Excessive exposure to ultraviolet radiation can damage living tissues, increase the risk of skin and eye problems, and affect plants and aquatic organisms. Therefore, the ozone layer is important for protecting life on Earth.\n\nCertain chemicals, particularly chlorofluorocarbons (CFCs) and related ozone-depleting substances, can reach the stratosphere. Ultraviolet radiation breaks them down and releases reactive chlorine or other atoms that take part in reactions destroying ozone. This reduces the amount of ozone available to absorb ultraviolet radiation.\n\nOzone depletion can be reduced by phasing out ozone-depleting substances under international agreements, using suitable alternatives, preventing refrigerant leaks and ensuring that old cooling equipment is serviced and disposed of responsibly. International cooperation is important because the atmosphere is shared by all countries. Protecting the ozone layer helps reduce harmful ultraviolet exposure and supports the health of ecosystems."
        }
      ]
    },

    flashcards: [
      { q: "What is an ecosystem?", a: "A system of interacting organisms and their physical environment." },
      { q: "Name two biotic components.", a: "Plants and animals." },
      { q: "Name two abiotic components.", a: "Air and water." },
      { q: "What are producers?", a: "Organisms that make their own food." },
      { q: "What is the main role of green plants in a food chain?", a: "They produce food through photosynthesis." },
      { q: "What are consumers?", a: "Organisms that obtain food from other organisms or organic matter." },
      { q: "What are decomposers?", a: "Organisms that break down dead organic matter." },
      { q: "What is a food chain?", a: "A sequence showing the transfer of food and energy between organisms." },
      { q: "What is a food web?", a: "A network of interconnected food chains." },
      { q: "Define trophic level.", a: "The feeding position of an organism in a food chain." },
      { q: "State the 10% law.", a: "About 10% of energy passes from one trophic level to the next." },
      { q: "Is energy flow in an ecosystem cyclic or unidirectional?", a: "Unidirectional." },
      { q: "Why does energy decrease at higher trophic levels?", a: "Much energy is used in life processes and dissipated as heat." },
      { q: "Why are food chains generally short?", a: "Only a small fraction of energy reaches each higher level." },
      { q: "What is biological magnification?", a: "An increase in the concentration of certain harmful chemicals at higher trophic levels." },
      { q: "Which pollutants may undergo biological magnification?", a: "Certain persistent chemicals that accumulate in organisms." },
      { q: "Define biodegradable substance.", a: "A substance that can be broken down by biological processes." },
      { q: "Give an example of biodegradable waste.", a: "Vegetable peels." },
      { q: "Define non-biodegradable substance.", a: "A substance that does not break down easily through natural biological processes." },
      { q: "Give an example of non-biodegradable waste.", a: "Many plastic products." },
      { q: "What is composting?", a: "Controlled biological decomposition of suitable organic waste into compost." },
      { q: "What does the 3R principle stand for?", a: "Reduce, Reuse and Recycle." },
      { q: "Where is the ozone layer mainly located?", a: "In the stratosphere." },
      { q: "What does the ozone layer absorb?", a: "Much of the Sun's harmful ultraviolet radiation." },
      { q: "Name one group of ozone-depleting substances.", a: "Chlorofluorocarbons (CFCs)." },
      { q: "How can ozone depletion affect living organisms?", a: "It can increase exposure to harmful ultraviolet radiation." },
      { q: "Why should plastic waste be managed responsibly?", a: "It can persist, pollute habitats and harm wildlife." },
      { q: "How do decomposers help nutrient cycling?", a: "They release nutrients from dead organic matter into the environment." },
      { q: "What is one responsible way to manage electronic waste?", a: "Send it to an appropriate authorised collection or recycling system." },
      { q: "How can an individual reduce waste?", a: "Avoid unnecessary purchases, reuse suitable items and recycle correctly." }
    ],

    mcqs: [
      {
        q: "1. Which of the following is an abiotic component?",
        options: ["Grass", "Fungus", "Water", "Deer"],
        answer: 2
      },
      {
        q: "2. Which organisms generally act as producers in a green ecosystem?",
        options: ["Green plants", "Carnivores", "Most herbivores", "Decomposers only"],
        answer: 0
      },
      {
        q: "3. Which organisms break down dead organic matter?",
        options: ["Only top predators", "Decomposers", "Only herbivores", "Only producers"],
        answer: 1
      },
      {
        q: "4. Which sequence is a food chain?",
        options: ["Snake → grass → Sun", "Grass → grasshopper → frog", "Rock → water → soil", "Sun → rock → plastic"],
        answer: 1
      },
      {
        q: "5. A network of interconnected food chains is called a:",
        options: ["Food web", "Trophic unit", "Mineral cycle only", "Single consumer"],
        answer: 0
      },
      {
        q: "6. The feeding position occupied by an organism is its:",
        options: ["Habitat", "Trophic level", "Climate zone", "Physical state"],
        answer: 1
      },
      {
        q: "7. According to the 10% law, approximately how much energy is transferred to the next trophic level?",
        options: ["1%", "10%", "50%", "100%"],
        answer: 1
      },
      {
        q: "8. Energy flow through a food chain is generally:",
        options: ["Unidirectional", "Cyclic like nutrients", "Always reversed", "Independent of food"],
        answer: 0
      },
      {
        q: "9. Why are food chains usually limited to a few trophic levels?",
        options: ["Energy decreases at successive levels", "Energy is created at each level", "Consumers never need energy", "Producers contain no energy"],
        answer: 0
      },
      {
        q: "10. Which is an example of biodegradable waste?",
        options: ["Vegetable peels", "A glass bottle", "A plastic bag", "An aluminium can"],
        answer: 0
      },
      {
        q: "11. Which item is generally non-biodegradable under ordinary environmental conditions?",
        options: ["Fallen leaves", "Vegetable scraps", "Many plastic products", "Untreated fruit peels"],
        answer: 2
      },
      {
        q: "12. Biological magnification refers to:",
        options: ["The increase of certain harmful chemical concentrations at higher trophic levels", "The growth of plants in sunlight", "The breakdown of all pollutants immediately", "The recycling of clean water only"],
        answer: 0
      },
      {
        q: "13. Which organism may be especially exposed to high concentrations of a persistent pollutant in a food chain?",
        options: ["A top-level predator", "Every producer equally in all cases", "An organism that never feeds", "A non-living rock"],
        answer: 0
      },
      {
        q: "14. What is an important role of decomposers?",
        options: ["Stopping all nutrient cycling", "Returning nutrients to the environment", "Producing plastic", "Removing all sunlight"],
        answer: 1
      },
      {
        q: "15. The ozone layer is mainly found in the:",
        options: ["Troposphere", "Stratosphere", "Earth's core", "Ocean floor"],
        answer: 1
      },
      {
        q: "16. The ozone layer protects living organisms by absorbing much of the Sun's:",
        options: ["Ultraviolet radiation", "Visible light only", "Radio waves only", "Sound waves"],
        answer: 0
      },
      {
        q: "17. Which chemicals have contributed to ozone depletion?",
        options: ["CFCs", "Oxygen alone", "Water alone", "Ordinary sand"],
        answer: 0
      },
      {
        q: "18. Which is the correct order of the 3R principle?",
        options: ["Reuse, Remove, Rebuild", "Reduce, Reuse, Recycle", "Recycle, Replace, Release", "Reduce, Reject, Burn"],
        answer: 1
      },
      {
        q: "19. Which is a suitable way to manage clean organic kitchen waste?",
        options: ["Throw it into a river", "Burn all waste openly", "Compost it where suitable", "Mix it with hazardous waste"],
        answer: 2
      },
      {
        q: "20. Which action is best for unwanted electronic waste?",
        options: ["Dump it in a water body", "Burn it in an open area", "Send it to an appropriate authorised collection or recycling system", "Mix it with food scraps"],
        answer: 2
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Our Environment",
    images: [
      "images/infographics/science/our-environment.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Our Environment content loaded.");
})();

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "maths::Real Numbers";

  const data = {
    overview:
      "Real Numbers — numerical practice with prime factorisation, HCF, LCM, Euclid's division algorithm, terminating decimals and irrational numbers. Solutions use notebook-style working.",

    keyPoints: [
      "HCF: multiply the common prime factors with their smallest powers.",
      "LCM: multiply all prime factors with their greatest powers.",
      "For two positive integers: HCF × LCM = product of the two integers.",
      "Euclid's division lemma: a = bq + r, where 0 ≤ r < b.",
      "A rational number p/q in lowest terms has a terminating decimal if q has only prime factors 2 and/or 5.",
      "For a terminating decimal, make the denominator a power of 10.",
      "A square root of a positive integer that is not a perfect square is irrational.",
      "In irrationality proofs, assume the opposite and derive a contradiction."
    ],

    questions: {
      veryShort: [
        {
          q: "1. Find the HCF of 18 and 24.",
          a: "Solution:\n18 = 2 × 3²\n24 = 2³ × 3\nHCF = 2 × 3\n∴ HCF = 6"
        },
        {
          q: "2. Find the LCM of 12 and 18.",
          a: "Solution:\n12 = 2² × 3\n18 = 2 × 3²\nLCM = 2² × 3²\n∴ LCM = 36"
        },
        {
          q: "3. Find the HCF of 36 and 60.",
          a: "Solution:\n36 = 2² × 3²\n60 = 2² × 3 × 5\nHCF = 2² × 3\n∴ HCF = 12"
        },
        {
          q: "4. Find the LCM of 8 and 14.",
          a: "Solution:\n8 = 2³\n14 = 2 × 7\nLCM = 2³ × 7\n∴ LCM = 56"
        },
        {
          q: "5. Express 72 as a product of prime factors.",
          a: "Solution:\n72 = 2 × 2 × 2 × 3 × 3\n∴ 72 = 2³ × 3²"
        },
        {
          q: "6. Express 120 as a product of prime factors.",
          a: "Solution:\n120 = 2 × 2 × 2 × 3 × 5\n∴ 120 = 2³ × 3 × 5"
        },
        {
          q: "7. Find the HCF of 45 and 75.",
          a: "Solution:\n45 = 3² × 5\n75 = 3 × 5²\nHCF = 3 × 5\n∴ HCF = 15"
        },
        {
          q: "8. Find the LCM of 15 and 20.",
          a: "Solution:\n15 = 3 × 5\n20 = 2² × 5\nLCM = 2² × 3 × 5\n∴ LCM = 60"
        },
        {
          q: "9. Find the HCF of 26 and 39.",
          a: "Solution:\n26 = 2 × 13\n39 = 3 × 13\nHCF = 13\n∴ HCF = 13"
        },
        {
          q: "10. Find the LCM of 9 and 12.",
          a: "Solution:\n9 = 3²\n12 = 2² × 3\nLCM = 2² × 3²\n∴ LCM = 36"
        },
        {
          q: "11. Express 156 as a product of prime factors.",
          a: "Solution:\n156 = 2 × 78\n= 2 × 2 × 39\n= 2² × 3 × 13\n∴ 156 = 2² × 3 × 13"
        },
        {
          q: "12. Find the HCF of 48 and 64.",
          a: "Solution:\n48 = 2⁴ × 3\n64 = 2⁶\nHCF = 2⁴\n∴ HCF = 16"
        },
        {
          q: "13. Find the LCM of 16 and 24.",
          a: "Solution:\n16 = 2⁴\n24 = 2³ × 3\nLCM = 2⁴ × 3\n∴ LCM = 48"
        },
        {
          q: "14. Express 225 as a product of prime factors.",
          a: "Solution:\n225 = 15 × 15\n= 3² × 5²\n∴ 225 = 3² × 5²"
        },
        {
          q: "15. Find the HCF of 81 and 108.",
          a: "Solution:\n81 = 3⁴\n108 = 2² × 3³\nHCF = 3³\n∴ HCF = 27"
        },
        {
          q: "16. Find the LCM of 21 and 28.",
          a: "Solution:\n21 = 3 × 7\n28 = 2² × 7\nLCM = 2² × 3 × 7\n∴ LCM = 84"
        },
        {
          q: "17. Express 360 as a product of prime factors.",
          a: "Solution:\n360 = 36 × 10\n= (2² × 3²) × (2 × 5)\n∴ 360 = 2³ × 3² × 5"
        },
        {
          q: "18. Find the HCF of 17 and 51.",
          a: "Solution:\n17 = 17\n51 = 3 × 17\nHCF = 17\n∴ HCF = 17"
        },
        {
          q: "19. Convert 3/8 into a decimal.",
          a: "Solution:\n3/8 = 3 × 125 / (8 × 125)\n= 375/1000\n∴ 3/8 = 0.375"
        },
        {
          q: "20. Convert 7/20 into a decimal.",
          a: "Solution:\n7/20 = 7 × 5 / (20 × 5)\n= 35/100\n∴ 7/20 = 0.35"
        }
      ],

      short: [
        {
          q: "1. Find the HCF and LCM of 96 and 404 using prime factorisation.",
          a: "Solution:\n96 = 2⁵ × 3\n404 = 2² × 101\n\nHCF = 2² = 4\n\nLCM = 2⁵ × 3 × 101\n= 32 × 303\n= 9696\n\nCheck:\n4 × 9696 = 96 × 404\n38784 = 38784\n\n∴ HCF = 4, LCM = 9696"
        },
        {
          q: "2. Find the HCF and LCM of 72 and 120.",
          a: "Solution:\n72 = 2³ × 3²\n120 = 2³ × 3 × 5\n\nHCF = 2³ × 3 = 24\nLCM = 2³ × 3² × 5 = 360\n\nCheck:\n24 × 360 = 72 × 120\n8640 = 8640\n\n∴ HCF = 24, LCM = 360"
        },
        {
          q: "3. Use Euclid's division algorithm to find the HCF of 135 and 225.",
          a: "Solution:\n225 = 135 × 1 + 90\n135 = 90 × 1 + 45\n90 = 45 × 2 + 0\n\nThe last non-zero remainder is 45.\n\n∴ HCF = 45"
        },
        {
          q: "4. Find the HCF of 867 and 255 using Euclid's division algorithm.",
          a: "Solution:\n867 = 255 × 3 + 102\n255 = 102 × 2 + 51\n102 = 51 × 2 + 0\n\nThe last non-zero remainder is 51.\n\n∴ HCF = 51"
        },
        {
          q: "5. Determine whether 13/3125 has a terminating decimal expansion.",
          a: "Solution:\n3125 = 5⁵\n\nThe denominator in lowest terms has only the prime factor 5.\nTherefore, its decimal expansion terminates.\n\n13/3125 = 13 × 32 / (3125 × 32)\n= 416/100000\n\n∴ 13/3125 = 0.00416"
        },
        {
          q: "6. Determine whether 77/210 has a terminating decimal expansion.",
          a: "Solution:\n77/210 = 11/30\n30 = 2 × 3 × 5\n\nThe denominator contains the prime factor 3, which is different from 2 and 5.\n\n∴ The decimal expansion is non-terminating recurring."
        },
        {
          q: "7. Find the HCF and LCM of 26 and 91.",
          a: "Solution:\n26 = 2 × 13\n91 = 7 × 13\n\nHCF = 13\nLCM = 2 × 7 × 13 = 182\n\nCheck:\n13 × 182 = 26 × 91\n2366 = 2366\n\n∴ HCF = 13, LCM = 182"
        },
        {
          q: "8. Find the smallest number divisible by 12, 15 and 20.",
          a: "Solution:\n12 = 2² × 3\n15 = 3 × 5\n20 = 2² × 5\n\nLCM = 2² × 3 × 5\n= 4 × 15\n= 60\n\n∴ Required smallest number = 60"
        },
        {
          q: "9. Express 0.875 in the form p/q in lowest terms.",
          a: "Solution:\n0.875 = 875/1000\n\nDivide numerator and denominator by 125:\n= 7/8\n\nHCF(7, 8) = 1\n\n∴ p/q = 7/8"
        },
        {
          q: "10. Find the greatest number that divides 245 and 1029, leaving remainder 5 in each case.",
          a: "Solution:\nRequired divisor must divide:\n245 − 5 = 240\n1029 − 5 = 1024\n\n1024 = 2¹⁰\n240 = 2⁴ × 3 × 5\n\nHCF = 2⁴ = 16\n\n∴ Greatest required number = 16"
        }
      ],

      long: [
        {
          q: "1. Use Euclid's division algorithm to find the HCF of 405 and 252. Verify your answer using prime factorisation.",
          a: "Solution:\n\nStep 1: Apply Euclid's division lemma.\n405 = 252 × 1 + 153\n\nStep 2:\n252 = 153 × 1 + 99\n\nStep 3:\n153 = 99 × 1 + 54\n\nStep 4:\n99 = 54 × 1 + 45\n\nStep 5:\n54 = 45 × 1 + 9\n\nStep 6:\n45 = 9 × 5 + 0\n\nLast non-zero remainder = 9\n∴ HCF = 9\n\nVerification by prime factorisation:\n405 = 3⁴ × 5\n252 = 2² × 3² × 7\n\nCommon prime factor with the smallest power:\nHCF = 3² = 9\n\n∴ Verified: HCF = 9"
        },
        {
          q: "2. Find the HCF and LCM of 144 and 180 using prime factorisation. Verify the product relationship.",
          a: "Solution:\n\nStep 1: Prime factorisation.\n144 = 2⁴ × 3²\n180 = 2² × 3² × 5\n\nStep 2: Find HCF.\nHCF = 2² × 3²\n= 4 × 9\n= 36\n\nStep 3: Find LCM.\nLCM = 2⁴ × 3² × 5\n= 16 × 9 × 5\n= 720\n\nStep 4: Verify.\nHCF × LCM = 36 × 720 = 25920\n144 × 180 = 25920\n\nBoth products are equal.\n\n∴ HCF = 36 and LCM = 720"
        },
        {
          q: "3. Three bells ring at intervals of 18, 24 and 30 minutes. If they ring together now, after how many minutes will they ring together again?",
          a: "Solution:\n\nThe bells will ring together again after the LCM of their intervals.\n\n18 = 2 × 3²\n24 = 2³ × 3\n30 = 2 × 3 × 5\n\nTake the greatest power of each prime:\nLCM = 2³ × 3² × 5\n\n= 8 × 9 × 5\n= 72 × 5\n= 360 minutes\n\nConvert into hours:\n360 ÷ 60 = 6 hours\n\n∴ They will ring together again after 360 minutes, or 6 hours."
        },
        {
          q: "4. Prove that √5 is irrational.",
          a: "Solution:\n\nAssume that √5 is rational.\nThen √5 = a/b, where a and b are coprime integers and b ≠ 0.\n\nSquaring both sides:\n5 = a²/b²\n\nTherefore:\na² = 5b²\n\nThus, 5 divides a². Since 5 is prime, 5 divides a.\nLet a = 5k, where k is an integer.\n\nSubstitute:\n(5k)² = 5b²\n25k² = 5b²\nb² = 5k²\n\nTherefore, 5 also divides b.\n\nSo 5 divides both a and b. This contradicts the assumption that a and b are coprime.\n\nHence, our assumption is false.\n\n∴ √5 is irrational."
        },
        {
          q: "5. Without performing long division, determine whether 17/1600 has a terminating decimal expansion. If it does, find the decimal.",
          a: "Solution:\n\nStep 1: Factorise the denominator.\n1600 = 16 × 100\n= 2⁴ × (2² × 5²)\n= 2⁶ × 5²\n\nStep 2: Check the denominator.\nThe fraction 17/1600 is already in lowest terms because 17 is not a factor of 1600.\nThe denominator contains only the prime factors 2 and 5.\n\nTherefore, the decimal expansion terminates.\n\nStep 3: Convert the denominator into a power of 10.\n1600 × 625 = 1000000\n\nSo:\n17/1600 = (17 × 625)/(1600 × 625)\n= 10625/1000000\n\n∴ 17/1600 = 0.010625"
        }
      ]
    },

    flashcards: [
      { q: "Find HCF(16, 24).", a: "16 = 2⁴; 24 = 2³ × 3. HCF = 2³ = 8." },
      { q: "Find LCM(16, 24).", a: "LCM = 2⁴ × 3 = 48." },
      { q: "Find HCF(30, 45).", a: "30 = 2 × 3 × 5; 45 = 3² × 5. HCF = 15." },
      { q: "Find LCM(30, 45).", a: "LCM = 2 × 3² × 5 = 90." },
      { q: "Find HCF(42, 56).", a: "42 = 2 × 3 × 7; 56 = 2³ × 7. HCF = 14." },
      { q: "Find LCM(42, 56).", a: "LCM = 2³ × 3 × 7 = 168." },
      { q: "Prime factorise 84.", a: "84 = 2² × 3 × 7." },
      { q: "Prime factorise 196.", a: "196 = 2² × 7²." },
      { q: "Find HCF(54, 90).", a: "54 = 2 × 3³; 90 = 2 × 3² × 5. HCF = 18." },
      { q: "Find LCM(54, 90).", a: "LCM = 2 × 3³ × 5 = 270." },
      { q: "Convert 5/16 into a decimal.", a: "5/16 = 3125/10000 = 0.3125." },
      { q: "Convert 7/25 into a decimal.", a: "7/25 = 28/100 = 0.28." },
      { q: "Convert 11/40 into a decimal.", a: "11/40 = 275/1000 = 0.275." },
      { q: "Convert 13/50 into a decimal.", a: "13/50 = 26/100 = 0.26." },
      { q: "Convert 9/125 into a decimal.", a: "9/125 = 72/1000 = 0.072." },
      { q: "Does 7/30 terminate?", a: "30 = 2 × 3 × 5. The factor 3 remains, so the decimal is non-terminating recurring." },
      { q: "Does 13/40 terminate?", a: "40 = 2³ × 5. Yes, it terminates: 13/40 = 0.325." },
      { q: "Find HCF(105, 252).", a: "105 = 3 × 5 × 7; 252 = 2² × 3² × 7. HCF = 21." },
      { q: "Find LCM(105, 252).", a: "LCM = 2² × 3² × 5 × 7 = 1260." },
      { q: "Find HCF(65, 104).", a: "65 = 5 × 13; 104 = 2³ × 13. HCF = 13." },
      { q: "Find LCM(65, 104).", a: "LCM = 2³ × 5 × 13 = 520." },
      { q: "Find the greatest number dividing 85 and 135 exactly.", a: "HCF(85, 135) = 5." },
      { q: "Find the least number divisible by 8, 12 and 15.", a: "LCM = 2³ × 3 × 5 = 120." },
      { q: "Find HCF(119, 187).", a: "119 = 7 × 17; 187 = 11 × 17. HCF = 17." },
      { q: "Find LCM(119, 187).", a: "LCM = 7 × 11 × 17 = 1309." },
      { q: "Convert 0.625 into p/q form.", a: "0.625 = 625/1000 = 5/8." },
      { q: "Convert 0.45 into p/q form.", a: "0.45 = 45/100 = 9/20." },
      { q: "Find HCF(144, 216).", a: "144 = 2⁴ × 3²; 216 = 2³ × 3³. HCF = 2³ × 3² = 72." },
      { q: "Find LCM(144, 216).", a: "LCM = 2⁴ × 3³ = 432." },
      { q: "Find the remainder when 125 is divided by 9.", a: "125 = 9 × 13 + 8. Remainder = 8." }
    ],

    mcqs: [
      {
        q: "1. The HCF of 24 and 36 is:",
        options: ["6", "8", "12", "18"],
        answer: 2
      },
      {
        q: "2. The LCM of 15 and 25 is:",
        options: ["50", "75", "100", "125"],
        answer: 1
      },
      {
        q: "3. The prime factorisation of 180 is:",
        options: ["2² × 3² × 5", "2 × 3³ × 5", "2² × 3 × 5²", "2³ × 3² × 5"],
        answer: 0
      },
      {
        q: "4. The HCF of 42 and 70 is:",
        options: ["7", "14", "21", "35"],
        answer: 1
      },
      {
        q: "5. The LCM of 18 and 24 is:",
        options: ["48", "60", "72", "96"],
        answer: 2
      },
      {
        q: "6. The HCF of 96 and 144 is:",
        options: ["24", "36", "48", "72"],
        answer: 2
      },
      {
        q: "7. The LCM of 12, 15 and 20 is:",
        options: ["30", "60", "120", "180"],
        answer: 1
      },
      {
        q: "8. The decimal form of 3/16 is:",
        options: ["0.1875", "0.375", "0.625", "0.875"],
        answer: 0
      },
      {
        q: "9. Which fraction has a terminating decimal expansion?",
        options: ["7/12", "5/18", "9/40", "11/21"],
        answer: 2
      },
      {
        q: "10. The HCF of 65 and 91 is:",
        options: ["7", "13", "26", "1"],
        answer: 1
      },
      {
        q: "11. The LCM of 14 and 35 is:",
        options: ["35", "49", "70", "140"],
        answer: 2
      },
      {
        q: "12. The prime factorisation of 240 is:",
        options: ["2⁴ × 3 × 5", "2³ × 3² × 5", "2⁴ × 5²", "2² × 3 × 5²"],
        answer: 0
      },
      {
        q: "13. The HCF of 135 and 225 is:",
        options: ["15", "25", "45", "75"],
        answer: 2
      },
      {
        q: "14. The LCM of 16 and 20 is:",
        options: ["40", "60", "80", "160"],
        answer: 2
      },
      {
        q: "15. The simplest form of 0.875 is:",
        options: ["5/8", "7/8", "3/4", "9/10"],
        answer: 1
      },
      {
        q: "16. The decimal expansion of 7/125 is:",
        options: ["0.056", "0.56", "0.0056", "0.75"],
        answer: 0
      },
      {
        q: "17. The HCF of 17 and 68 is:",
        options: ["4", "17", "34", "68"],
        answer: 1
      },
      {
        q: "18. The LCM of 21 and 30 is:",
        options: ["90", "105", "210", "630"],
        answer: 2
      },
      {
        q: "19. If HCF = 6 and LCM = 72 for two positive integers, their product is:",
        options: ["78", "216", "432", "864"],
        answer: 2
      },
      {
        q: "20. The remainder when 257 is divided by 12 is:",
        options: ["3", "4", "5", "7"],
        answer: 2
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Real Numbers — Numerical Practice",
    images: [
      "images/infographics/maths/real-numbers.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Real Numbers numerical content loaded.");
})();
             
(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "maths::Polynomials";

  const data = {
    overview:
      "Polynomials — numerical practice on zeroes of polynomials, the relationship between zeroes and coefficients, finding unknown coefficients, and division algorithm problems. All answers include notebook-style working.",

    keyPoints: [
      "For a quadratic polynomial ax² + bx + c, the sum of zeroes is −b/a.",
      "For ax² + bx + c, the product of zeroes is c/a.",
      "If the zeroes are α and β, a monic quadratic polynomial is x² − (α + β)x + αβ.",
      "For a cubic polynomial ax³ + bx² + cx + d, the sum of zeroes is −b/a.",
      "For a cubic polynomial, the sum of pairwise products of zeroes is c/a.",
      "For a cubic polynomial, the product of zeroes is −d/a.",
      "A zero of a polynomial is a value that makes the polynomial equal to zero.",
      "The division algorithm is: p(x) = g(x)q(x) + r(x), where r(x) = 0 or degree r(x) < degree g(x)."
    ],

    questions: {
      veryShort: [
        {
          q: "1. Find the zeroes of x² − 5x + 6.",
          a: "Solution:\nx² − 5x + 6 = 0\n(x − 2)(x − 3) = 0\nx = 2 or x = 3\n∴ Zeroes = 2, 3"
        },
        {
          q: "2. Find the sum of zeroes of 2x² − 7x + 3.",
          a: "Solution:\na = 2, b = −7\nSum = −b/a\n= −(−7)/2\n∴ Sum = 7/2"
        },
        {
          q: "3. Find the product of zeroes of 3x² + 5x − 2.",
          a: "Solution:\na = 3, c = −2\nProduct = c/a\n= −2/3\n∴ Product = −2/3"
        },
        {
          q: "4. Form a monic quadratic polynomial whose zeroes are 2 and 4.",
          a: "Solution:\nSum = 2 + 4 = 6\nProduct = 2 × 4 = 8\np(x) = x² − (sum)x + product\n∴ p(x) = x² − 6x + 8"
        },
        {
          q: "5. Check whether 2 is a zero of p(x) = x² − 4.",
          a: "Solution:\np(2) = 2² − 4\n= 4 − 4 = 0\n∴ 2 is a zero."
        },
        {
          q: "6. Find the zeroes of x² − 9.",
          a: "Solution:\nx² − 9 = 0\n(x − 3)(x + 3) = 0\nx = 3 or x = −3\n∴ Zeroes = 3, −3"
        },
        {
          q: "7. Find the sum of zeroes of x² + 8x + 12.",
          a: "Solution:\na = 1, b = 8\nSum = −b/a = −8/1\n∴ Sum = −8"
        },
        {
          q: "8. Find the product of zeroes of x² − 11x + 24.",
          a: "Solution:\na = 1, c = 24\nProduct = c/a = 24/1\n∴ Product = 24"
        },
        {
          q: "9. Find the zeroes of x² − 7x + 10.",
          a: "Solution:\nx² − 7x + 10 = 0\n(x − 5)(x − 2) = 0\nx = 5 or x = 2\n∴ Zeroes = 5, 2"
        },
        {
          q: "10. Find the sum of zeroes of 4x² + 12x + 5.",
          a: "Solution:\na = 4, b = 12\nSum = −b/a = −12/4\n∴ Sum = −3"
        },
        {
          q: "11. Find the product of zeroes of 5x² − 3x − 2.",
          a: "Solution:\na = 5, c = −2\nProduct = c/a\n∴ Product = −2/5"
        },
        {
          q: "12. Form a monic quadratic polynomial with zeroes −2 and 3.",
          a: "Solution:\nSum = −2 + 3 = 1\nProduct = (−2)(3) = −6\np(x) = x² − x − 6\n∴ Required polynomial = x² − x − 6"
        },
        {
          q: "13. Find k if 2 is a zero of x² + kx − 6.",
          a: "Solution:\np(2) = 0\n4 + 2k − 6 = 0\n2k − 2 = 0\n2k = 2\n∴ k = 1"
        },
        {
          q: "14. Find the zeroes of x² − 4x.",
          a: "Solution:\nx² − 4x = 0\nx(x − 4) = 0\nx = 0 or x = 4\n∴ Zeroes = 0, 4"
        },
        {
          q: "15. Find the sum of zeroes of 3x² − 12x + 7.",
          a: "Solution:\na = 3, b = −12\nSum = −b/a\n= 12/3\n∴ Sum = 4"
        },
        {
          q: "16. Find the product of zeroes of 2x² + 9x + 4.",
          a: "Solution:\na = 2, c = 4\nProduct = c/a\n= 4/2\n∴ Product = 2"
        },
        {
          q: "17. Find the zeroes of x² + x − 12.",
          a: "Solution:\nx² + x − 12 = 0\n(x + 4)(x − 3) = 0\nx = −4 or x = 3\n∴ Zeroes = −4, 3"
        },
        {
          q: "18. Form a monic quadratic polynomial with zeroes 5 and −1.",
          a: "Solution:\nSum = 5 − 1 = 4\nProduct = 5 × (−1) = −5\np(x) = x² − 4x − 5\n∴ Required polynomial = x² − 4x − 5"
        },
        {
          q: "19. Find p(−1) for p(x) = 2x² + 3x − 4.",
          a: "Solution:\np(−1) = 2(−1)² + 3(−1) − 4\n= 2 − 3 − 4\n∴ p(−1) = −5"
        },
        {
          q: "20. Find the remainder when x² + 3x + 5 is divided by x − 1.",
          a: "Solution:\nBy the remainder theorem,\nRemainder = p(1)\n= 1² + 3(1) + 5\n= 1 + 3 + 5\n∴ Remainder = 9"
        }
      ],

      short: [
        {
          q: "1. Find the zeroes of 2x² − 5x + 2 and verify the relationship between zeroes and coefficients.",
          a: "Solution:\n2x² − 5x + 2 = 0\n(2x − 1)(x − 2) = 0\n\nZeroes: α = 1/2, β = 2\n\nSum = 1/2 + 2 = 5/2\n−b/a = −(−5)/2 = 5/2\n\nProduct = (1/2)(2) = 1\nc/a = 2/2 = 1\n\n∴ Both relationships are verified."
        },
        {
          q: "2. Find a quadratic polynomial whose zeroes are 3 and −4.",
          a: "Solution:\nα = 3, β = −4\n\nSum = 3 + (−4) = −1\nProduct = 3 × (−4) = −12\n\np(x) = x² − (sum)x + product\n= x² − (−1)x − 12\n\n∴ p(x) = x² + x − 12"
        },
        {
          q: "3. Find k if the sum of zeroes of 3x² + kx + 6 is 4.",
          a: "Solution:\nSum = −b/a\n4 = −k/3\n\n12 = −k\n\n∴ k = −12"
        },
        {
          q: "4. Find k if the product of zeroes of 4x² − 7x + k is 3.",
          a: "Solution:\nProduct = c/a\n3 = k/4\n\n12 = k\n\n∴ k = 12"
        },
        {
          q: "5. Find the zeroes of x² − 2x − 15 and verify the sum and product.",
          a: "Solution:\nx² − 2x − 15 = 0\n(x − 5)(x + 3) = 0\n\nZeroes: 5, −3\n\nSum = 5 − 3 = 2\n−b/a = −(−2)/1 = 2\n\nProduct = 5 × (−3) = −15\nc/a = −15/1 = −15\n\n∴ Both relationships are verified."
        },
        {
          q: "6. Divide 2x³ + 3x² − 11x − 6 by x − 2.",
          a: "Solution:\nUsing polynomial division:\n\n2x³ + 3x² − 11x − 6\n÷ (x − 2)\n\nFirst term: 2x³ ÷ x = 2x²\nSubtracting gives 7x² − 11x − 6.\n\nNext: 7x² ÷ x = 7x\nSubtracting gives 3x − 6.\n\nNext: 3x ÷ x = 3\nRemainder = 0.\n\n∴ Quotient = 2x² + 7x + 3\nRemainder = 0"
        },
        {
          q: "7. Find the remainder when 2x³ − 3x² + 4x − 5 is divided by x + 1.",
          a: "Solution:\nBy the remainder theorem:\nRemainder = p(−1)\n\n= 2(−1)³ − 3(−1)² + 4(−1) − 5\n= −2 − 3 − 4 − 5\n\n∴ Remainder = −14"
        },
        {
          q: "8. Find the quadratic polynomial whose zeroes have sum 7 and product 10.",
          a: "Solution:\nSum = 7\nProduct = 10\n\np(x) = x² − (sum)x + product\n= x² − 7x + 10\n\n∴ Required polynomial = x² − 7x + 10"
        },
        {
          q: "9. If one zero of x² − 7x + k is 3, find k and the other zero.",
          a: "Solution:\np(3) = 0\n9 − 21 + k = 0\nk − 12 = 0\n∴ k = 12\n\nPolynomial = x² − 7x + 12\n= (x − 3)(x − 4)\n\n∴ Other zero = 4"
        },
        {
          q: "10. Find the zeroes of 3x² + x − 2 and verify the relationship between zeroes and coefficients.",
          a: "Solution:\n3x² + x − 2 = 0\n(3x − 2)(x + 1) = 0\n\nZeroes: 2/3, −1\n\nSum = 2/3 − 1 = −1/3\n−b/a = −1/3\n\nProduct = (2/3)(−1) = −2/3\nc/a = −2/3\n\n∴ Both relationships are verified."
        }
      ],

      long: [
        {
          q: "1. Find the zeroes of 6x² − x − 2 and verify the relationship between zeroes and coefficients.",
          a: "Solution:\n\nStep 1: Factorise the polynomial.\n6x² − x − 2 = 0\n6x² + 3x − 4x − 2 = 0\n3x(2x + 1) − 2(2x + 1) = 0\n(3x − 2)(2x + 1) = 0\n\nStep 2: Find zeroes.\n3x − 2 = 0  ⇒  x = 2/3\n2x + 1 = 0  ⇒  x = −1/2\n\nThus, α = 2/3 and β = −1/2.\n\nStep 3: Verify the sum.\nα + β = 2/3 − 1/2\n= 4/6 − 3/6 = 1/6\n\n−b/a = −(−1)/6 = 1/6\n\nStep 4: Verify the product.\nαβ = (2/3)(−1/2) = −1/3\n\nc/a = −2/6 = −1/3\n\n∴ Both relationships are verified."
        },
        {
          q: "2. Form a quadratic polynomial whose zeroes are 4 + √3 and 4 − √3.",
          a: "Solution:\n\nLet α = 4 + √3\nand β = 4 − √3.\n\nStep 1: Find the sum.\nα + β = (4 + √3) + (4 − √3)\n= 8\n\nStep 2: Find the product.\nαβ = (4 + √3)(4 − √3)\n= 4² − (√3)²\n= 16 − 3\n= 13\n\nStep 3: Form the polynomial.\np(x) = x² − (α + β)x + αβ\n\n= x² − 8x + 13\n\n∴ Required polynomial = x² − 8x + 13"
        },
        {
          q: "3. If α and β are the zeroes of 2x² − 5x + 3, find α² + β² without solving for the zeroes separately.",
          a: "Solution:\n\nGiven:\n2x² − 5x + 3\n\na = 2, b = −5, c = 3\n\nSum of zeroes:\nα + β = −b/a = 5/2\n\nProduct of zeroes:\nαβ = c/a = 3/2\n\nUse the identity:\nα² + β² = (α + β)² − 2αβ\n\nSubstitute:\nα² + β² = (5/2)² − 2(3/2)\n= 25/4 − 3\n= 25/4 − 12/4\n= 13/4\n\n∴ α² + β² = 13/4"
        },
        {
          q: "4. Divide x³ − 3x² − 4x + 12 by x − 3 and verify the division algorithm.",
          a: "Solution:\n\nStep 1: Divide the first terms.\nx³ ÷ x = x²\n\nMultiply:\nx²(x − 3) = x³ − 3x²\n\nSubtracting leaves:\n−4x + 12\n\nStep 2: Divide again.\n−4x ÷ x = −4\n\nMultiply:\n−4(x − 3) = −4x + 12\n\nSubtracting leaves remainder 0.\n\nTherefore:\nQuotient = x² − 4\nRemainder = 0\n\nStep 3: Verify.\np(x) = (x − 3)(x² − 4) + 0\n\nExpand:\n(x − 3)(x² − 4)\n= x³ − 3x² − 4x + 12\n\nThis equals the original polynomial.\n\n∴ Division algorithm is verified."
        },
        {
          q: "5. If the zeroes of x² + (k − 2)x − 8 are 4 and β, find k and β.",
          a: "Solution:\n\nGiven polynomial:\nx² + (k − 2)x − 8\n\nOne zero is 4.\n\nStep 1: Substitute x = 4.\n4² + (k − 2)(4) − 8 = 0\n16 + 4k − 8 − 8 = 0\n4k = 0\n∴ k = 0\n\nStep 2: Substitute k = 0.\nPolynomial = x² − 2x − 8\n\nFactorise:\nx² − 2x − 8 = 0\n(x − 4)(x + 2) = 0\n\nZeroes are 4 and −2.\n\n∴ k = 0 and β = −2"
        }
      ]
    },

    flashcards: [
      { q: "Find the zeroes of x² − 4.", a: "x² − 4 = (x − 2)(x + 2). Zeroes: 2, −2." },
      { q: "Find the zeroes of x² − 9x + 20.", a: "(x − 4)(x − 5) = 0. Zeroes: 4, 5." },
      { q: "Find the sum of zeroes of 2x² − 3x + 1.", a: "−b/a = 3/2." },
      { q: "Find the product of zeroes of 2x² − 3x + 1.", a: "c/a = 1/2." },
      { q: "Form a polynomial with zeroes 1 and 6.", a: "Sum = 7; product = 6. Polynomial: x² − 7x + 6." },
      { q: "Form a polynomial with zeroes −3 and 2.", a: "Sum = −1; product = −6. Polynomial: x² + x − 6." },
      { q: "Find the zeroes of x² + 5x + 6.", a: "(x + 2)(x + 3) = 0. Zeroes: −2, −3." },
      { q: "Find the zeroes of 2x² − 8x.", a: "2x(x − 4) = 0. Zeroes: 0, 4." },
      { q: "Find the sum of zeroes of 5x² + 10x + 3.", a: "−b/a = −10/5 = −2." },
      { q: "Find the product of zeroes of 5x² + 10x + 3.", a: "c/a = 3/5." },
      { q: "Find k if 1 is a zero of x² + kx − 6.", a: "1 + k − 6 = 0 ⇒ k = 5." },
      { q: "Find k if −2 is a zero of x² + 3x + k.", a: "4 − 6 + k = 0 ⇒ k = 2." },
      { q: "Find the remainder when x² + 4x + 7 is divided by x − 2.", a: "p(2) = 4 + 8 + 7 = 19." },
      { q: "Find the remainder when x² − 5x + 8 is divided by x + 1.", a: "p(−1) = 1 + 5 + 8 = 14." },
      { q: "Find the zeroes of x² − x − 20.", a: "(x − 5)(x + 4) = 0. Zeroes: 5, −4." },
      { q: "Form a polynomial with sum 9 and product 20.", a: "x² − 9x + 20." },
      { q: "Form a polynomial with sum −2 and product −15.", a: "x² + 2x − 15." },
      { q: "Find α² + β² if α + β = 5 and αβ = 4.", a: "(α + β)² − 2αβ = 25 − 8 = 17." },
      { q: "Find α³ + β³ if α + β = 3 and αβ = 2.", a: "(α + β)³ − 3αβ(α + β) = 27 − 18 = 9." },
      { q: "Find the sum of zeroes of 7x² − 14x + 2.", a: "−b/a = 14/7 = 2." },
      { q: "Find the product of zeroes of 7x² − 14x + 2.", a: "c/a = 2/7." },
      { q: "Find the zeroes of x² − 16.", a: "(x − 4)(x + 4) = 0. Zeroes: 4, −4." },
      { q: "Find k if the sum of zeroes of x² + kx + 9 is −4.", a: "−k = −4 ⇒ k = 4." },
      { q: "Find k if the product of zeroes of 3x² + 2x + k is 5.", a: "k/3 = 5 ⇒ k = 15." },
      { q: "Find the remainder when 2x³ + x − 4 is divided by x − 1.", a: "p(1) = 2 + 1 − 4 = −1." },
      { q: "Find the remainder when x³ − 2x² + 3 is divided by x + 2.", a: "p(−2) = −8 − 8 + 3 = −13." },
      { q: "Find the zeroes of 2x² + 7x + 3.", a: "(2x + 1)(x + 3) = 0. Zeroes: −1/2, −3." },
      { q: "Form a polynomial with zeroes 0 and −5.", a: "Sum = −5; product = 0. Polynomial: x² + 5x." },
      { q: "Find αβ if α + β = 6 and α² + β² = 20.", a: "36 − 2αβ = 20 ⇒ αβ = 8." },
      { q: "Find α + β if αβ = 6 and α² + β² = 13.", a: "(α + β)² = 13 + 12 = 25. Thus α + β = 5 or −5." }
    ],

    mcqs: [
      {
        q: "1. The zeroes of x² − 5x + 6 are:",
        options: ["1, 6", "2, 3", "−2, −3", "−1, −6"],
        answer: 1
      },
      {
        q: "2. The sum of zeroes of 3x² − 7x + 2 is:",
        options: ["−7/3", "7/3", "2/3", "−2/3"],
        answer: 1
      },
      {
        q: "3. The product of zeroes of 4x² + 3x − 5 is:",
        options: ["5/4", "−5/4", "3/4", "−3/4"],
        answer: 1
      },
      {
        q: "4. The polynomial with zeroes 2 and 5 is:",
        options: ["x² + 7x + 10", "x² − 7x + 10", "x² − 3x + 10", "x² + 3x − 10"],
        answer: 1
      },
      {
        q: "5. If 2 is a zero of x² + kx − 6, k equals:",
        options: ["−1", "0", "1", "2"],
        answer: 2
      },
      {
        q: "6. The zeroes of x² − 16 are:",
        options: ["4, 4", "−4, −4", "4, −4", "0, 16"],
        answer: 2
      },
      {
        q: "7. The sum of zeroes of 2x² + 8x + 3 is:",
        options: ["4", "−4", "3/2", "−3/2"],
        answer: 1
      },
      {
        q: "8. The product of zeroes of 5x² − 2x + 7 is:",
        options: ["−7/5", "7/5", "2/5", "−2/5"],
        answer: 1
      },
      {
        q: "9. The zeroes of x² + x − 12 are:",
        options: ["4, −3", "3, −4", "−4, −3", "4, 3"],
        answer: 1
      },
      {
        q: "10. The remainder when x² + 2x + 3 is divided by x − 1 is:",
        options: ["3", "5", "6", "7"],
        answer: 1
      },
      {
        q: "11. A monic quadratic polynomial with sum 6 and product 8 is:",
        options: ["x² + 6x + 8", "x² − 6x + 8", "x² + 6x − 8", "x² − 8x + 6"],
        answer: 1
      },
      {
        q: "12. If the zeroes of x² − 7x + k include 3, then k is:",
        options: ["10", "12", "14", "21"],
        answer: 1
      },
      {
        q: "13. The sum of zeroes of 6x² + 5x − 1 is:",
        options: ["5/6", "−5/6", "−1/6", "1/6"],
        answer: 1
      },
      {
        q: "14. The product of zeroes of 3x² − 4x + 9 is:",
        options: ["−3", "3", "4/3", "−4/3"],
        answer: 1
      },
      {
        q: "15. The zeroes of 2x² − 5x + 2 are:",
        options: ["2, 1/2", "−2, −1/2", "2, −1/2", "−2, 1/2"],
        answer: 0
      },
      {
        q: "16. If α + β = 5 and αβ = 3, then α² + β² equals:",
        options: ["19", "25", "13", "16"],
        answer: 0
      },
      {
        q: "17. If α + β = 4 and αβ = 2, then α³ + β³ equals:",
        options: ["40", "48", "52", "56"],
        answer: 2
      },
      {
        q: "18. The remainder when x³ − 2x + 1 is divided by x + 1 is:",
        options: ["−2", "0", "2", "4"],
        answer: 2
      },
      {
        q: "19. The quotient when x³ − 4x is divided by x is:",
        options: ["x² − 4", "x² + 4", "x³ − 4", "x²"],
        answer: 0
      },
      {
        q: "20. A quadratic polynomial with zeroes −2 and 3 is:",
        options: ["x² + x − 6", "x² − x − 6", "x² − 5x + 6", "x² + 5x − 6"],
        answer: 0
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Polynomials — Numerical Practice",
    images: [
      "images/infographics/maths/polynomials.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Polynomials numerical content loaded.");
})();
             
(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "maths::Pair of Linear Equations in Two Variables";

  const data = {
    overview: "Class 10 Mathematics — solve pairs of linear equations using substitution, elimination and cross-multiplication. All questions include numerical working.",
    keyPoints: [
      "Substitution: find one variable, then substitute it into the other equation.",
      "Elimination: multiply equations if needed, then add or subtract them to eliminate a variable.",
      "Cross-multiplication: for a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0, use the standard determinant formula.",
      "One solution: a₁/a₂ ≠ b₁/b₂.",
      "No solution: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
      "Infinitely many solutions: a₁/a₂ = b₁/b₂ = c₁/c₂."
    ],

    questions: {
      veryShort: [
        {
          q: "1. Solve: x + y = 7, x − y = 1.",
          a: "Solution:\nx + y = 7 ...(1)\nx − y = 1 ...(2)\nAdding (1) and (2): 2x = 8\nx = 4\nPut x = 4 in (1): 4 + y = 7\n**Answer: x = 4, y = 3.**"
        },
        {
          q: "2. Solve: x + y = 10, x = 6.",
          a: "Solution:\n6 + y = 10\ny = 10 − 6\n**Answer: x = 6, y = 4.**"
        },
        {
          q: "3. Solve: 2x + y = 9, x = 3.",
          a: "Solution:\n2(3) + y = 9\n6 + y = 9\ny = 3\n**Answer: x = 3, y = 3.**"
        },
        {
          q: "4. Solve: x + 2y = 11, x = 5.",
          a: "Solution:\n5 + 2y = 11\n2y = 6\ny = 3\n**Answer: x = 5, y = 3.**"
        },
        {
          q: "5. Solve: 3x + y = 13, x + y = 7.",
          a: "Solution:\nSubtract the second equation from the first:\n2x = 6, so x = 3.\nPut x = 3 in x + y = 7:\n3 + y = 7, so y = 4.\n**Answer: x = 3, y = 4.**"
        },
        {
          q: "6. Solve: 2x + 2y = 14, x − y = 1.",
          a: "Solution:\nDivide the first equation by 2:\nx + y = 7 ...(1)\nx − y = 1 ...(2)\nAdding: 2x = 8, so x = 4.\nThen y = 7 − 4 = 3.\n**Answer: x = 4, y = 3.**"
        },
        {
          q: "7. Solve: 2x + y = 8, x + y = 5.",
          a: "Solution:\nSubtract the second equation from the first:\nx = 3.\nPut x = 3 in x + y = 5:\n3 + y = 5, so y = 2.\n**Answer: x = 3, y = 2.**"
        },
        {
          q: "8. Solve: x + y = 12, x − y = 4.",
          a: "Solution:\nAdding the equations:\n2x = 16, so x = 8.\nPut x = 8 in x + y = 12:\ny = 4.\n**Answer: x = 8, y = 4.**"
        },
        {
          q: "9. Solve: 4x + y = 14, 2x + y = 8.",
          a: "Solution:\nSubtract the second equation from the first:\n2x = 6, so x = 3.\nPut x = 3 in 2x + y = 8:\n6 + y = 8, so y = 2.\n**Answer: x = 3, y = 2.**"
        },
        {
          q: "10. Solve: 3x − y = 5, x − y = 1.",
          a: "Solution:\nSubtract the second equation from the first:\n2x = 4, so x = 2.\nPut x = 2 in x − y = 1:\n2 − y = 1, so y = 1.\n**Answer: x = 2, y = 1.**"
        },
        {
          q: "11. Find x: x + y = 9 and y = 2.",
          a: "Solution:\nx + 2 = 9\nx = 9 − 2\n**Answer: x = 7.**"
        },
        {
          q: "12. Solve: 5x + y = 17, 3x + y = 11.",
          a: "Solution:\nSubtract the second equation from the first:\n2x = 6, so x = 3.\nPut x = 3 in 3x + y = 11:\n9 + y = 11, so y = 2.\n**Answer: x = 3, y = 2.**"
        },
        {
          q: "13. Solve: x + 3y = 13, x = 4.",
          a: "Solution:\n4 + 3y = 13\n3y = 9\ny = 3\n**Answer: x = 4, y = 3.**"
        },
        {
          q: "14. Solve: 2x − y = 3, x = 4.",
          a: "Solution:\n2(4) − y = 3\n8 − y = 3\ny = 5\n**Answer: x = 4, y = 5.**"
        },
        {
          q: "15. Solve: x + y = 8, 2x + y = 13.",
          a: "Solution:\nSubtract the first equation from the second:\nx = 5.\nPut x = 5 in x + y = 8:\n5 + y = 8, so y = 3.\n**Answer: x = 5, y = 3.**"
        },
        {
          q: "16. Solve: 2x + y = 10, x − y = 2.",
          a: "Solution:\nFrom x − y = 2, y = x − 2.\nSubstitute:\n2x + x − 2 = 10\n3x = 12, x = 4.\ny = 4 − 2 = 2.\n**Answer: x = 4, y = 2.**"
        },
        {
          q: "17. Solve: x + 2y = 9, x − y = 3.",
          a: "Solution:\nFrom x − y = 3, x = y + 3.\nSubstitute:\ny + 3 + 2y = 9\n3y = 6, y = 2.\nx = 2 + 3 = 5.\n**Answer: x = 5, y = 2.**"
        },
        {
          q: "18. Solve: 3x + 2y = 16, x + 2y = 8.",
          a: "Solution:\nSubtract the second equation from the first:\n2x = 8, x = 4.\nPut x = 4 in x + 2y = 8:\n4 + 2y = 8, y = 2.\n**Answer: x = 4, y = 2.**"
        },
        {
          q: "19. Solve: 2x + 3y = 13, 2x + y = 7.",
          a: "Solution:\nSubtract the second equation from the first:\n2y = 6, y = 3.\nPut y = 3 in 2x + y = 7:\n2x + 3 = 7, x = 2.\n**Answer: x = 2, y = 3.**"
        },
        {
          q: "20. Solve: x + y = 6, 2x − y = 3.",
          a: "Solution:\nAdding the equations:\n3x = 9, x = 3.\nPut x = 3 in x + y = 6:\ny = 3.\n**Answer: x = 3, y = 3.**"
        }
      ],

      short: [
        {
          q: "1. Solve by substitution: 2x + y = 11, x − y = 1.",
          a: "Solution:\nFrom x − y = 1:\ny = x − 1 ...(1)\nSubstitute in 2x + y = 11:\n2x + x − 1 = 11\n3x = 12\nx = 4\nFrom (1), y = 4 − 1 = 3.\n**Answer: x = 4, y = 3.**"
        },
        {
          q: "2. Solve by elimination: 3x + 2y = 16, 2x + 2y = 11.",
          a: "Solution:\n3x + 2y = 16 ...(1)\n2x + 2y = 11 ...(2)\nSubtract (2) from (1):\nx = 5\nPut x = 5 in (2):\n10 + 2y = 11\n2y = 1\ny = 1/2\n**Answer: x = 5, y = 1/2.**"
        },
        {
          q: "3. Solve: 2x + 3y = 13, 3x + 2y = 12.",
          a: "Solution:\n2x + 3y = 13 ...(1)\n3x + 2y = 12 ...(2)\nMultiply (1) by 3: 6x + 9y = 39\nMultiply (2) by 2: 6x + 4y = 24\nSubtract: 5y = 15, y = 3\nPut y = 3 in (2): 3x + 6 = 12\n3x = 6, x = 2\n**Answer: x = 2, y = 3.**"
        },
        {
          q: "4. Solve: 4x − y = 9, 2x + y = 9.",
          a: "Solution:\n4x − y = 9 ...(1)\n2x + y = 9 ...(2)\nAdding: 6x = 18\nx = 3\nPut x = 3 in (2):\n6 + y = 9, y = 3\n**Answer: x = 3, y = 3.**"
        },
        {
          q: "5. Solve: 5x + 2y = 19, 3x + 2y = 13.",
          a: "Solution:\nSubtract the second equation from the first:\n2x = 6, x = 3\nPut x = 3 in 3x + 2y = 13:\n9 + 2y = 13\n2y = 4, y = 2\n**Answer: x = 3, y = 2.**"
        },
        {
          q: "6. Solve: x/2 + y = 5, x − y = 1.",
          a: "Solution:\nMultiply the first equation by 2:\nx + 2y = 10 ...(1)\nx − y = 1 ...(2)\nSubtract (2) from (1):\n3y = 9, y = 3\nThen x − 3 = 1, so x = 4.\n**Answer: x = 4, y = 3.**"
        },
        {
          q: "7. Solve: 2x − 3y = 1, 4x + y = 17.",
          a: "Solution:\nFrom 4x + y = 17:\ny = 17 − 4x\nSubstitute:\n2x − 3(17 − 4x) = 1\n2x − 51 + 12x = 1\n14x = 52, x = 26/7\nThen y = 17 − 104/7 = 15/7\n**Answer: x = 26/7, y = 15/7.**"
        },
        {
          q: "8. The sum of two numbers is 27 and their difference is 5. Find them.",
          a: "Solution:\nLet the numbers be x and y.\nx + y = 27 ...(1)\nx − y = 5 ...(2)\nAdding: 2x = 32, x = 16\nThen y = 27 − 16 = 11\n**Answer: 16 and 11.**"
        },
        {
          q: "9. Two pens and three pencils cost ₹19. Three pens and two pencils cost ₹21. Find each price.",
          a: "Solution:\nLet a pen cost ₹x and a pencil cost ₹y.\n2x + 3y = 19 ...(1)\n3x + 2y = 21 ...(2)\nMultiply (1) by 3: 6x + 9y = 57\nMultiply (2) by 2: 6x + 4y = 42\nSubtract: 5y = 15, y = 3\nPut y = 3 in (2): 3x + 6 = 21\nx = 5\n**Answer: Pen = ₹5, pencil = ₹3.**"
        },
        {
          q: "10. A two-digit number has digits whose sum is 9. The tens digit is 3 more than the units digit. Find the number.",
          a: "Solution:\nLet tens digit = x and units digit = y.\nx + y = 9 ...(1)\nx − y = 3 ...(2)\nAdding: 2x = 12, x = 6\nThen y = 9 − 6 = 3\nNumber = 10x + y = 10(6) + 3 = 63\n**Answer: 63.**"
        }
      ],

      long: [
        {
          q: "1. Solve by elimination: 3x + 4y = 25 and 5x − 2y = 11.",
          a: "Solution:\n3x + 4y = 25 ...(1)\n5x − 2y = 11 ...(2)\nMultiply (2) by 2:\n10x − 4y = 22 ...(3)\nAdd (1) and (3):\n13x = 47\nx = 47/13\nSubstitute in (2):\n5(47/13) − 2y = 11\n235/13 − 2y = 143/13\n2y = 92/13\ny = 46/13\n**Answer: x = 47/13, y = 46/13.**"
        },
        {
          q: "2. The sum of two numbers is 35. Three times the first number minus twice the second number is 40. Find both numbers.",
          a: "Solution:\nLet the numbers be x and y.\nx + y = 35 ...(1)\n3x − 2y = 40 ...(2)\nFrom (1): y = 35 − x\nSubstitute in (2):\n3x − 2(35 − x) = 40\n3x − 70 + 2x = 40\n5x = 110\nx = 22\nThen y = 35 − 22 = 13\nCheck: 3(22) − 2(13) = 66 − 26 = 40.\n**Answer: 22 and 13.**"
        },
        {
          q: "3. Adult tickets cost ₹50 and child tickets cost ₹30. A total of 20 tickets cost ₹760. Find the number of adult and child tickets.",
          a: "Solution:\nLet adult tickets = x and child tickets = y.\nx + y = 20 ...(1)\n50x + 30y = 760\nDivide by 10:\n5x + 3y = 76 ...(2)\nMultiply (1) by 3:\n3x + 3y = 60 ...(3)\nSubtract (3) from (2):\n2x = 16, x = 8\nFrom (1): y = 20 − 8 = 12\nCheck: 8 × ₹50 + 12 × ₹30 = ₹400 + ₹360 = ₹760.\n**Answer: 8 adult tickets and 12 child tickets.**"
        },
        {
          q: "4. The numerator and denominator of a fraction add up to 11. If 1 is added to both, the fraction becomes 2/3. Find the original fraction.",
          a: "Solution:\nLet numerator = x and denominator = y.\nx + y = 11 ...(1)\n(x + 1)/(y + 1) = 2/3\n3(x + 1) = 2(y + 1)\n3x + 3 = 2y + 2\n3x − 2y = −1 ...(2)\nFrom (1), y = 11 − x\nSubstitute in (2):\n3x − 2(11 − x) = −1\n3x − 22 + 2x = −1\n5x = 21\nx = 21/5\nThen y = 11 − 21/5 = 34/5.\nThese are not integers, so the given conditions do not produce a fraction with integer numerator and denominator.\n**Answer: No integer numerator-denominator fraction satisfies both stated conditions.**"
        },
        {
          q: "5. A boat travels 30 km downstream and 18 km upstream in 6 hours. It travels 20 km downstream and 24 km upstream in 6 hours. Find its downstream and upstream speeds.",
          a: "Solution:\nLet downstream speed = x km/h and upstream speed = y km/h.\n30/x + 18/y = 6\n20/x + 24/y = 6\nLet u = 1/x and v = 1/y.\n30u + 18v = 6 ...(1)\n20u + 24v = 6 ...(2)\nDivide (1) by 6: 5u + 3v = 1 ...(3)\nDivide (2) by 4: 5u + 6v = 3/2 ...(4)\nSubtract (3) from (4): 3v = 1/2\nv = 1/6, so y = 6 km/h.\nPut v = 1/6 in (3):\n5u + 1/2 = 1\n5u = 1/2, u = 1/10\nSo x = 10 km/h.\n**Answer: Downstream speed = 10 km/h; upstream speed = 6 km/h.**"
        }
      ]
    },

    flashcards: [
      { q: "1. Solve x + y = 9, x − y = 3.", a: "Add: 2x = 12, x = 6. Then y = 3." },
      { q: "2. Solve 2x + y = 10, x + y = 7.", a: "Subtract: x = 3. Then y = 4." },
      { q: "3. Solve 3x + y = 14, x + y = 8.", a: "Subtract: 2x = 6, x = 3, y = 5." },
      { q: "4. Solve x + 2y = 12, x = 4.", a: "4 + 2y = 12, so y = 4." },
      { q: "5. Solve 2x − y = 5, x = 4.", a: "8 − y = 5, so y = 3." },
      { q: "6. Solve x + y = 15, x − y = 5.", a: "2x = 20, x = 10, y = 5." },
      { q: "7. Solve 4x + y = 18, 2x + y = 10.", a: "2x = 8, x = 4, y = 2." },
      { q: "8. Solve 3x + 2y = 18, x + 2y = 10.", a: "2x = 8, x = 4, y = 3." },
      { q: "9. Solve 2x + 3y = 13, 2x + y = 7.", a: "2y = 6, y = 3, x = 2." },
      { q: "10. Solve x + y = 11, x = 7.", a: "y = 11 − 7 = 4." },
      { q: "11. Solve 5x + y = 22, 3x + y = 14.", a: "2x = 8, x = 4, y = 2." },
      { q: "12. Solve 2x + y = 12, x − y = 3.", a: "y = x − 3; 3x − 3 = 12, x = 5, y = 2." },
      { q: "13. Solve x + 3y = 16, x = 7.", a: "7 + 3y = 16, y = 3." },
      { q: "14. Solve 3x − y = 8, x − y = 2.", a: "2x = 6, x = 3, y = 1." },
      { q: "15. Solve x + y = 20, x − y = 8.", a: "2x = 28, x = 14, y = 6." },
      { q: "16. Solve 2x + 2y = 24, x − y = 2.", a: "x + y = 12; adding with x − y = 2 gives x = 7, y = 5." },
      { q: "17. Solve 4x + 2y = 20, x + y = 7.", a: "2x + y = 10; subtract x + y = 7, x = 3, y = 4." },
      { q: "18. Solve 3x + 3y = 21, x = 4.", a: "x + y = 7, so y = 3." },
      { q: "19. Solve 2x − 2y = 6, x + y = 9.", a: "x − y = 3; adding gives 2x = 12, x = 6, y = 3." },
      { q: "20. Solve 3x + y = 17, x − y = 3.", a: "y = x − 3; 4x − 3 = 17, x = 5, y = 2." },
      { q: "21. Solve x + 2y = 14, x − y = 2.", a: "x = y + 2; 3y + 2 = 14, y = 4, x = 6." },
      { q: "22. Solve 2x + 5y = 19, x = 2.", a: "4 + 5y = 19, y = 3." },
      { q: "23. Solve 6x + y = 25, 4x + y = 17.", a: "2x = 8, x = 4, y = 1." },
      { q: "24. Solve x + y = 13, 2x + y = 18.", a: "Subtract: x = 5, then y = 8." },
      { q: "25. Solve 2x + y = 9, x + 2y = 12.", a: "From first y = 9 − 2x; substitute: 2x + 2(9 − 2x) = 12, x = 3, y = 3." },
      { q: "26. Solve 3x + 2y = 19, x + 2y = 9.", a: "Subtract: 2x = 10, x = 5, y = 2." },
      { q: "27. Solve 5x − y = 14, x − y = 2.", a: "Subtract: 4x = 12, x = 3, y = 1." },
      { q: "28. Solve 2x + 3y = 16, x + y = 6.", a: "x = 6 − y; 12 − 2y + 3y = 16, y = 4, x = 2." },
      { q: "29. Solve x + y = 18, x = 11.", a: "y = 18 − 11 = 7." },
      { q: "30. Solve 4x + y = 23, 2x + y = 13.", a: "2x = 10, x = 5, y = 3." }
    ],

    mcqs: [
      { q: "1. Solve x + y = 8 and x − y = 2.", options: ["x = 5, y = 3", "x = 3, y = 5", "x = 4, y = 4", "x = 6, y = 2"], answer: 0 },
      { q: "2. Solve 2x + y = 9 and x + y = 6.", options: ["x = 2, y = 4", "x = 3, y = 3", "x = 4, y = 1", "x = 1, y = 5"], answer: 1 },
      { q: "3. Solve 3x + y = 13 and x + y = 7.", options: ["x = 2, y = 5", "x = 4, y = 1", "x = 3, y = 4", "x = 5, y = 2"], answer: 2 },
      { q: "4. Solve x + 2y = 11 and x = 5.", options: ["y = 2", "y = 4", "y = 5", "y = 3"], answer: 3 },
      { q: "5. Solve 4x + y = 17 and 2x + y = 11.", options: ["x = 3, y = 5", "x = 2, y = 7", "x = 4, y = 1", "x = 5, y = 2"], answer: 0 },
      { q: "6. Solve x + y = 14 and x − y = 4.", options: ["x = 8, y = 6", "x = 9, y = 5", "x = 10, y = 4", "x = 7, y = 7"], answer: 1 },
      { q: "7. Solve 2x + y = 12 and x + y = 8.", options: ["x = 2, y = 6", "x = 5, y = 3", "x = 4, y = 4", "x = 3, y = 5"], answer: 2 },
      { q: "8. Solve 3x + 2y = 18 and x + 2y = 10.", options: ["x = 2, y = 4", "x = 3, y = 5", "x = 5, y = 1", "x = 4, y = 3"], answer: 3 },
      { q: "9. Solve 5x + y = 21 and 3x + y = 13.", options: ["x = 4, y = 1", "x = 3, y = 6", "x = 2, y = 7", "x = 5, y = 2"], answer: 0 },
      { q: "10. Solve x + 3y = 13 and x = 4.", options: ["y = 2", "y = 3", "y = 4", "y = 5"], answer: 1 },
      { q: "11. Solve 2x − y = 5 and x = 4.", options: ["y = 1", "y = 2", "y = 3", "y = 4"], answer: 2 },
      { q: "12. Solve x + y = 10 and 2x + y = 16.", options: ["x = 4, y = 6", "x = 5, y = 5", "x = 7, y = 3", "x = 6, y = 4"], answer: 3 },
      { q: "13. Solve 2x + 3y = 12 and x + y = 5.", options: ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 1", "x = 1, y = 4"], answer: 0 },
      { q: "14. Solve 3x − y = 7 and x − y = 1.", options: ["x = 2, y = 1", "x = 3, y = 2", "x = 4, y = 5", "x = 5, y = 4"], answer: 1 },
      { q: "15. Solve x + y = 16 and x − y = 6.", options: ["x = 10, y = 6", "x = 12, y = 4", "x = 11, y = 5", "x = 9, y = 7"], answer: 2 },
      { q: "16. Solve 4x + y = 19 and 2x + y = 11.", options: ["x = 3, y = 5", "x = 5, y = 1", "x = 2, y = 7", "x = 4, y = 3"], answer: 3 },
      { q: "17. Solve 2x + y = 14 and x − y = 1.", options: ["x = 5, y = 4", "x = 4, y = 6", "x = 6, y = 2", "x = 3, y = 8"], answer: 0 },
      { q: "18. Solve 3x + 2y = 17 and x + 2y = 9.", options: ["x = 2, y = 3", "x = 4, y = 5/2", "x = 3, y = 4", "x = 5, y = 1"], answer: 1 },
      { q: "19. Solve 2x + 3y = 18 and 2x + y = 10.", options: ["x = 2, y = 4", "x = 5, y = 1", "x = 3, y = 4", "x = 4, y = 2"], answer: 2 },
      { q: "20. Solve x + y = 12 and 2x − y = 6.", options: ["x = 4, y = 8", "x = 5, y = 7", "x = 7, y = 5", "x = 6, y = 6"], answer: 3 }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Pair of Linear Equations in Two Variables",
    images: [
      "images/infographics/maths/pair-of-linear-equations.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Pair of Linear Equations in Two Variables loaded.");
})();
         
(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "maths::Quadratic Equations";

  const data = {
    overview: "Class 10 Mathematics — Quadratic Equations. Numerical practice using factorisation, completing the square, the quadratic formula and discriminants, with step-by-step solutions.",

    keyPoints: [
      "Standard form: ax² + bx + c = 0, where a ≠ 0.",
      "Factorisation: split the middle term and find the two roots.",
      "Quadratic formula: x = [-b ± √(b² − 4ac)]/(2a).",
      "Discriminant: D = b² − 4ac.",
      "If D > 0, there are two distinct real roots.",
      "If D = 0, there are two equal real roots.",
      "If D < 0, there are no real roots.",
      "For ax² + bx + c = 0: sum of roots = −b/a and product = c/a."
    ],

    questions: {
      veryShort: [
        {
          q: "1. Solve: x² − 5x + 6 = 0.",
          a: "Solution:\nx² − 5x + 6 = 0\nx² − 2x − 3x + 6 = 0\nx(x − 2) − 3(x − 2) = 0\n(x − 2)(x − 3) = 0\nx = 2 or x = 3.\n**Answer: x = 2, 3.**"
        },
        {
          q: "2. Solve: x² − 9 = 0.",
          a: "Solution:\nx² − 9 = 0\nx² = 9\nx = ±3\n**Answer: x = 3, −3.**"
        },
        {
          q: "3. Solve: x² − 7x + 12 = 0.",
          a: "Solution:\nx² − 3x − 4x + 12 = 0\nx(x − 3) − 4(x − 3) = 0\n(x − 3)(x − 4) = 0\n**Answer: x = 3, 4.**"
        },
        {
          q: "4. Solve: x² + 5x + 6 = 0.",
          a: "Solution:\nx² + 2x + 3x + 6 = 0\nx(x + 2) + 3(x + 2) = 0\n(x + 2)(x + 3) = 0\n**Answer: x = −2, −3.**"
        },
        {
          q: "5. Find the discriminant of  x² − 4x + 4 = 0.",
          a: "Solution:\na = 1, b = −4, c = 4\nD = b² − 4ac\nD = (−4)² − 4(1)(4)\nD = 16 − 16 = 0\n**Answer: D = 0.**"
        },
        {
          q: "6. Find the sum of roots of 2x² − 7x + 3 = 0.",
          a: "Solution:\nSum of roots = −b/a\n= −(−7)/2\n**Answer: 7/2.**"
        },
        {
          q: "7. Find the product of roots of x² − 8x + 15 = 0.",
          a: "Solution:\nProduct of roots = c/a\n= 15/1\n**Answer: 15.**"
        },
        {
          q: "8. Solve: x² − 4x = 0.",
          a: "Solution:\nx(x − 4) = 0\nx = 0 or x − 4 = 0\n**Answer: x = 0, 4.**"
        },
        {
          q: "9. Solve: x² + 2x = 0.",
          a: "Solution:\nx(x + 2) = 0\nx = 0 or x = −2\n**Answer: x = 0, −2.**"
        },
        {
          q: "10. Solve: x² − 16 = 0.",
          a: "Solution:\nx² = 16\nx = ±√16\n**Answer: x = 4, −4.**"
        },
        {
          q: "11. Solve: x² − 3x − 10 = 0.",
          a: "Solution:\nx² − 5x + 2x − 10 = 0\nx(x − 5) + 2(x − 5) = 0\n(x − 5)(x + 2) = 0\n**Answer: x = 5, −2.**"
        },
        {
          q: "12. Find the discriminant of x² + 2x + 5 = 0.",
          a: "Solution:\na = 1, b = 2, c = 5\nD = b² − 4ac\n= 2² − 4(1)(5)\n= 4 − 20 = −16\n**Answer: D = −16.**"
        },
        {
          q: "13. Solve: 2x² − 8 = 0.",
          a: "Solution:\n2x² = 8\nx² = 4\nx = ±2\n**Answer: x = 2, −2.**"
        },
        {
          q: "14. Solve: x² + 7x + 12 = 0.",
          a: "Solution:\n(x + 3)(x + 4) = 0\nx + 3 = 0 or x + 4 = 0\n**Answer: x = −3, −4.**"
        },
        {
          q: "15. Find the sum of roots of 3x² + 6x − 2 = 0.",
          a: "Solution:\nSum of roots = −b/a\n= −6/3\n**Answer: −2.**"
        },
        {
          q: "16. Find the product of roots of 4x² − 3x + 7 = 0.",
          a: "Solution:\nProduct of roots = c/a\n= 7/4\n**Answer: 7/4.**"
        },
        {
          q: "17. Solve: x² − 10x + 25 = 0.",
          a: "Solution:\nx² − 10x + 25 = 0\n(x − 5)² = 0\nx − 5 = 0\n**Answer: x = 5, 5 (equal roots).**"
        },
        {
          q: "18. Solve: x² + x − 6 = 0.",
          a: "Solution:\nx² + 3x − 2x − 6 = 0\nx(x + 3) − 2(x + 3) = 0\n(x + 3)(x − 2) = 0\n**Answer: x = −3, 2.**"
        },
        {
          q: "19. Find the discriminant of 2x² + 3x + 1 = 0.",
          a: "Solution:\nD = b² − 4ac\n= 3² − 4(2)(1)\n= 9 − 8 = 1\n**Answer: D = 1.**"
        },
        {
          q: "20. Solve: 3x² − 12x = 0.",
          a: "Solution:\n3x(x − 4) = 0\nx = 0 or x − 4 = 0\n**Answer: x = 0, 4.**"
        }
      ],

      short: [
        {
          q: "1. Solve by factorisation: 2x² − 7x + 3 = 0.",
          a: "Solution:\n2x² − 7x + 3 = 0\n2x² − 6x − x + 3 = 0\n2x(x − 3) − 1(x − 3) = 0\n(2x − 1)(x − 3) = 0\n2x − 1 = 0 or x − 3 = 0\nx = 1/2 or x = 3\n**Answer: x = 1/2, 3.**"
        },
        {
          q: "2. Solve: 3x² − 5x − 2 = 0.",
          a: "Solution:\n3x² − 6x + x − 2 = 0\n3x(x − 2) + 1(x − 2) = 0\n(3x + 1)(x − 2) = 0\n3x + 1 = 0 or x − 2 = 0\n**Answer: x = −1/3, 2.**"
        },
        {
          q: "3. Solve using the quadratic formula: x² − 6x + 5 = 0.",
          a: "Solution:\na = 1, b = −6, c = 5\nx = [−b ± √(b² − 4ac)]/(2a)\nx = [6 ± √(36 − 20)]/2\nx = [6 ± 4]/2\nx = 10/2 or 2/2\n**Answer: x = 5, 1.**"
        },
        {
          q: "4. Find the nature of roots of 2x² − 4x + 5 = 0.",
          a: "Solution:\na = 2, b = −4, c = 5\nD = b² − 4ac\n= (−4)² − 4(2)(5)\n= 16 − 40 = −24\nSince D < 0, there are no real roots.\n**Answer: No real roots.**"
        },
        {
          q: "5. Solve: x² + 4x − 12 = 0.",
          a: "Solution:\nx² + 6x − 2x − 12 = 0\nx(x + 6) − 2(x + 6) = 0\n(x + 6)(x − 2) = 0\n**Answer: x = −6, 2.**"
        },
        {
          q: "6. Solve: 5x² − 13x + 6 = 0.",
          a: "Solution:\n5x² − 10x − 3x + 6 = 0\n5x(x − 2) − 3(x − 2) = 0\n(5x − 3)(x − 2) = 0\n**Answer: x = 3/5, 2.**"
        },
        {
          q: "7. Find k if x² − 8x + k = 0 has equal roots.",
          a: "Solution:\nFor equal roots, D = 0.\na = 1, b = −8, c = k\nD = b² − 4ac\n0 = 64 − 4k\n4k = 64\n**Answer: k = 16.**"
        },
        {
          q: "8. Solve: 4x² − 12x + 9 = 0.",
          a: "Solution:\n4x² − 12x + 9 = 0\n(2x − 3)² = 0\n2x − 3 = 0\nx = 3/2\n**Answer: x = 3/2, 3/2 (equal roots).**"
        },
        {
          q: "9. The product of two consecutive positive integers is 72. Find the integers.",
          a: "Solution:\nLet the integers be x and x + 1.\nx(x + 1) = 72\nx² + x − 72 = 0\n(x + 9)(x − 8) = 0\nx = −9 or x = 8\nSince the integers are positive, x = 8.\n**Answer: 8 and 9.**"
        },
        {
          q: "10. The area of a rectangle is 48 cm². Its length is 2 cm more than its breadth. Find its dimensions.",
          a: "Solution:\nLet breadth = x cm.\nLength = (x + 2) cm\nx(x + 2) = 48\nx² + 2x − 48 = 0\n(x + 8)(x − 6) = 0\nx = −8 or x = 6\nReject the negative length.\nBreadth = 6 cm; length = 8 cm.\n**Answer: 6 cm × 8 cm.**"
        }
      ],

      long: [
        {
          q: "1. Solve 2x² − 5x − 3 = 0 using the quadratic formula.",
          a: "Solution:\n2x² − 5x − 3 = 0\nHere a = 2, b = −5, c = −3.\n\nx = [−b ± √(b² − 4ac)]/(2a)\n\nx = [5 ± √{(−5)² − 4(2)(−3)}]/4\n\nx = [5 ± √(25 + 24)]/4\nx = [5 ± √49]/4\nx = (5 ± 7)/4\n\nCase 1: x = (5 + 7)/4 = 3\nCase 2: x = (5 − 7)/4 = −1/2\n\n**Answer: x = 3, −1/2.**"
        },
        {
          q: "2. Solve 3x² − 2x − 1 = 0 by factorisation and verify the roots.",
          a: "Solution:\n3x² − 2x − 1 = 0\n3x² − 3x + x − 1 = 0\n3x(x − 1) + 1(x − 1) = 0\n(3x + 1)(x − 1) = 0\n\n3x + 1 = 0 gives x = −1/3.\nx − 1 = 0 gives x = 1.\n\nVerification:\nFor x = 1:\n3(1)² − 2(1) − 1 = 3 − 2 − 1 = 0.\n\nFor x = −1/3:\n3(1/9) − 2(−1/3) − 1\n= 1/3 + 2/3 − 1 = 0.\n\n**Answer: x = 1, −1/3. Both roots are verified.**"
        },
        {
          q: "3. The product of two consecutive positive integers is 306. Find the integers.",
          a: "Solution:\nLet the smaller integer be x.\nThe next integer = x + 1.\n\nx(x + 1) = 306\nx² + x − 306 = 0\n\nFind two numbers whose product is −306 and sum is 1:\n18 and −17.\n\nx² + 18x − 17x − 306 = 0\nx(x + 18) − 17(x + 18) = 0\n(x + 18)(x − 17) = 0\n\nx = −18 or x = 17.\nSince the integers are positive, x = 17.\nNext integer = 18.\n\nCheck: 17 × 18 = 306.\n**Answer: 17 and 18.**"
        },
        {
          q: "4. The area of a rectangular garden is 180 m². Its length is 3 m more than twice its breadth. Find its dimensions.",
          a: "Solution:\nLet breadth = x m.\nLength = (2x + 3) m.\n\nArea = length × breadth\n180 = x(2x + 3)\n2x² + 3x − 180 = 0\n\nUsing the quadratic formula:\na = 2, b = 3, c = −180\nD = b² − 4ac\n= 9 − 4(2)(−180)\n= 9 + 1440 = 1449\n\nx = [−3 ± √1449]/4\n\nSince √1449 is not an integer, the positive breadth is\nx = (−3 + √1449)/4 ≈ 8.26 m.\n\nLength = 2x + 3 ≈ 19.52 m.\n\n**Answer: Breadth ≈ 8.26 m and length ≈ 19.52 m.**"
        },
        {
          q: "5. A train travels 300 km at a uniform speed. If its speed were 5 km/h more, the journey would take 2 hours less. Find the original speed.",
          a: "Solution:\nLet original speed = x km/h.\nOriginal time = 300/x hours.\nNew speed = (x + 5) km/h.\nNew time = 300/(x + 5) hours.\n\nGiven:\n300/x − 300/(x + 5) = 2\n\nMultiply by x(x + 5):\n300(x + 5) − 300x = 2x(x + 5)\n1500 = 2x² + 10x\nx² + 5x − 750 = 0\n\nFactorise:\n(x + 30)(x − 25) = 0\nx = −30 or x = 25\n\nReject the negative speed.\nCheck: 300/25 = 12 hours.\nAt 30 km/h: 300/30 = 10 hours.\nDifference = 2 hours.\n\n**Answer: Original speed = 25 km/h.**"
        }
      ]
    },

    flashcards: [
      { q: "1. Solve x² − 5x + 6 = 0.", a: "(x − 2)(x − 3) = 0; x = 2, 3." },
      { q: "2. Solve x² − 9 = 0.", a: "x² = 9; x = ±3." },
      { q: "3. Solve x² − 7x + 12 = 0.", a: "(x − 3)(x − 4) = 0; x = 3, 4." },
      { q: "4. Solve x² + 5x + 6 = 0.", a: "(x + 2)(x + 3) = 0; x = −2, −3." },
      { q: "5. Solve x² − 4x = 0.", a: "x(x − 4) = 0; x = 0, 4." },
      { q: "6. Solve x² + 2x = 0.", a: "x(x + 2) = 0; x = 0, −2." },
      { q: "7. Solve x² − 16 = 0.", a: "x = ±4." },
      { q: "8. Solve x² − 3x − 10 = 0.", a: "(x − 5)(x + 2) = 0; x = 5, −2." },
      { q: "9. Solve x² + x − 6 = 0.", a: "(x + 3)(x − 2) = 0; x = −3, 2." },
      { q: "10. Solve 2x² − 8 = 0.", a: "x² = 4; x = ±2." },
      { q: "11. Solve x² − 10x + 25 = 0.", a: "(x − 5)² = 0; x = 5, 5." },
      { q: "12. Solve 2x² − 7x + 3 = 0.", a: "(2x − 1)(x − 3) = 0; x = 1/2, 3." },
      { q: "13. Solve 3x² − 5x − 2 = 0.", a: "(3x + 1)(x − 2) = 0; x = −1/3, 2." },
      { q: "14. Solve x² + 4x − 12 = 0.", a: "(x + 6)(x − 2) = 0; x = −6, 2." },
      { q: "15. Solve 5x² − 13x + 6 = 0.", a: "(5x − 3)(x − 2) = 0; x = 3/5, 2." },
      { q: "16. Find D for x² − 4x + 4 = 0.", a: "D = (−4)² − 4(1)(4) = 0." },
      { q: "17. Find D for x² + 2x + 5 = 0.", a: "D = 4 − 20 = −16." },
      { q: "18. Find D for 2x² + 3x + 1 = 0.", a: "D = 9 − 8 = 1." },
      { q: "19. Find the sum of roots of 2x² − 7x + 3 = 0.", a: "Sum = −b/a = 7/2." },
      { q: "20. Find the product of roots of x² − 8x + 15 = 0.", a: "Product = c/a = 15." },
      { q: "21. Find k if x² − 8x + k = 0 has equal roots.", a: "D = 0; 64 − 4k = 0; k = 16." },
      { q: "22. Solve 4x² − 12x + 9 = 0.", a: "(2x − 3)² = 0; x = 3/2." },
      { q: "23. Solve 3x² − 12x = 0.", a: "3x(x − 4) = 0; x = 0, 4." },
      { q: "24. Solve x² − 2x − 15 = 0.", a: "(x − 5)(x + 3) = 0; x = 5, −3." },
      { q: "25. Solve x² + 7x + 10 = 0.", a: "(x + 5)(x + 2) = 0; x = −5, −2." },
      { q: "26. Solve 2x² + x − 6 = 0.", a: "(2x − 3)(x + 2) = 0; x = 3/2, −2." },
      { q: "27. Solve 6x² − x − 2 = 0.", a: "(3x − 2)(2x + 1) = 0; x = 2/3, −1/2." },
      { q: "28. Find D for x² − 6x + 9 = 0.", a: "D = 36 − 36 = 0." },
      { q: "29. Find the sum of roots of 3x² + 6x − 2 = 0.", a: "Sum = −6/3 = −2." },
      { q: "30. Find the product of roots of 4x² − 3x + 7 = 0.", a: "Product = 7/4." }
    ],

    mcqs: [
      { q: "1. Solve x² − 5x + 6 = 0.", options: ["x = 2, 3", "x = −2, −3", "x = 1, 6", "x = −1, −6"], answer: 0 },
      { q: "2. Solve x² − 9 = 0.", options: ["x = 0, 9", "x = 3, −3", "x = 9, −9", "x = 3, 3"], answer: 1 },
      { q: "3. Solve x² + 5x + 6 = 0.", options: ["x = 2, 3", "x = −1, −6", "x = −2, −3", "x = 1, 6"], answer: 2 },
      { q: "4. Find D for x² − 4x + 4 = 0.", options: ["4", "8", "−4", "0"], answer: 3 },
      { q: "5. Solve x² − 7x + 12 = 0.", options: ["x = 3, 4", "x = −3, −4", "x = 2, 6", "x = 1, 12"], answer: 0 },
      { q: "6. Solve x² + x − 6 = 0.", options: ["x = 3, −2", "x = 2, −3", "x = −1, 6", "x = −2, −3"], answer: 1 },
      { q: "7. Solve 2x² − 7x + 3 = 0.", options: ["x = 1, 3", "x = −1/2, 3", "x = 1/2, 3", "x = 2, 3"], answer: 2 },
      { q: "8. Find the sum of roots of 2x² − 7x + 3 = 0.", options: ["3/2", "−7/2", "−3/2", "7/2"], answer: 3 },
      { q: "9. Find the product of roots of x² − 8x + 15 = 0.", options: ["15", "8", "−8", "−15"], answer: 0 },
      { q: "10. Solve x² − 10x + 25 = 0.", options: ["x = 5, −5", "x = 5, 5", "x = 10, 25", "x = 0, 5"], answer: 1 },
      { q: "11. Find D for x² + 2x + 5 = 0.", options: ["16", "−4", "−16", "24"], answer: 2 },
      { q: "12. Solve x² − 4x = 0.", options: ["x = 2, 4", "x = −4, 4", "x = 0, −4", "x = 0, 4"], answer: 3 },
      { q: "13. Solve 3x² − 5x − 2 = 0.", options: ["x = 2, −1/3", "x = −2, 1/3", "x = 1, −2", "x = 3, −1"], answer: 0 },
      { q: "14. Find k if x² − 8x + k = 0 has equal roots.", options: ["8", "16", "4", "64"], answer: 1 },
      { q: "15. Solve x² + 4x − 12 = 0.", options: ["x = 6, −2", "x = 4, −3", "x = 2, −6", "x = −2, −6"], answer: 2 },
      { q: "16. Find D for 2x² + 3x + 1 = 0.", options: ["9", "−1", "8", "1"], answer: 3 },
      { q: "17. Solve 5x² − 13x + 6 = 0.", options: ["x = 2, 3/5", "x = 3, 2/5", "x = −2, 3/5", "x = 1, 6/5"], answer: 0 },
      { q: "18. Find the product of roots of 4x² − 3x + 7 = 0.", options: ["7", "7/4", "−3/4", "4/7"], answer: 1 },
      { q: "19. Solve 4x² − 12x + 9 = 0.", options: ["x = 3, 3", "x = −3/2, −3/2", "x = 3/2, 3/2", "x = 0, 3/2"], answer: 2 },
      { q: "20. A rectangle has area 48 cm² and length 2 cm more than breadth. What are its dimensions?", options: ["4 cm × 12 cm", "5 cm × 10 cm", "7 cm × 9 cm", "6 cm × 8 cm"], answer: 3 }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Quadratic Equations",
    images: [
      "images/infographics/maths/quadratic-equations.jpg"
    ],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Quadratic Equations loaded.");
})();
         
(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "maths::Arithmetic Progressions";

  const data = {
    overview: "Class 10 Mathematics — Arithmetic Progressions. Numerical practice on common difference, nth term, sum of n terms and real-life applications, with notebook-style step-by-step solutions.",

    keyPoints: [
      "First term = a; common difference = d; number of terms = n.",
      "Common difference: d = a₂ − a₁.",
      "Nth term: aₙ = a + (n − 1)d.",
      "Sum of n terms: Sₙ = n/2 [2a + (n − 1)d].",
      "If the last term l is known: Sₙ = n/2 (a + l).",
      "To find the number of terms: solve l = a + (n − 1)d.",
      "Always substitute the values carefully and include the correct units in word problems."
    ],

    questions: {
      veryShort: [
        {
          q: "1. Find the common difference of 3, 7, 11, 15, ...",
          a: "Solution:\nd = 7 − 3 = 4\n**Answer: d = 4.**"
        },
        {
          q: "2. Find the 10th term of 2, 5, 8, 11, ...",
          a: "Solution:\na = 2, d = 3, n = 10\naₙ = a + (n − 1)d\na₁₀ = 2 + 9(3) = 29\n**Answer: 29.**"
        },
        {
          q: "3. Find the 15th term of 5, 9, 13, 17, ...",
          a: "Solution:\na = 5, d = 4, n = 15\na₁₅ = 5 + 14(4) = 61\n**Answer: 61.**"
        },
        {
          q: "4. Find the 20th term of 7, 10, 13, 16, ...",
          a: "Solution:\na = 7, d = 3\na₂₀ = 7 + 19(3) = 64\n**Answer: 64.**"
        },
        {
          q: "5. Find the common difference of 18, 13, 8, 3, ...",
          a: "Solution:\nd = 13 − 18 = −5\n**Answer: d = −5.**"
        },
        {
          q: "6. Find the 12th term of 4, 8, 12, 16, ...",
          a: "Solution:\na = 4, d = 4\na₁₂ = 4 + 11(4) = 48\n**Answer: 48.**"
        },
        {
          q: "7. Find the 8th term of 10, 7, 4, 1, ...",
          a: "Solution:\na = 10, d = −3\na₈ = 10 + 7(−3) = −11\n**Answer: −11.**"
        },
        {
          q: "8. Find the sum of the first 10 natural numbers.",
          a: "Solution:\na = 1, d = 1, n = 10\nSₙ = n/2 [2a + (n − 1)d]\nS₁₀ = 10/2 [2 + 9] = 5 × 11\n**Answer: 55.**"
        },
        {
          q: "9. Find the sum of the first 5 terms of 2, 4, 6, 8, ...",
          a: "Solution:\na = 2, d = 2, n = 5\nS₅ = 5/2 [4 + 4(2)]\n= 5/2 × 12 = 30\n**Answer: 30.**"
        },
        {
          q: "10. Find the 25th term of 1, 4, 7, 10, ...",
          a: "Solution:\na = 1, d = 3\na₂₅ = 1 + 24(3) = 73\n**Answer: 73.**"
        },
        {
          q: "11. Find the common difference if a = 6 and a₂ = 11.",
          a: "Solution:\na₂ = a + d\n11 = 6 + d\nd = 5\n**Answer: 5.**"
        },
        {
          q: "12. Find the 9th term of 20, 18, 16, 14, ...",
          a: "Solution:\na = 20, d = −2\na₉ = 20 + 8(−2) = 4\n**Answer: 4.**"
        },
        {
          q: "13. Find the sum of the first 8 terms of 3, 6, 9, 12, ...",
          a: "Solution:\na = 3, d = 3, n = 8\nS₈ = 8/2 [6 + 7(3)]\n= 4 × 27 = 108\n**Answer: 108.**"
        },
        {
          q: "14. Find the 11th term of an AP where a = 8 and d = 5.",
          a: "Solution:\naₙ = a + (n − 1)d\na₁₁ = 8 + 10(5) = 58\n**Answer: 58.**"
        },
        {
          q: "15. Find the first term of an AP if a₅ = 18 and d = 3.",
          a: "Solution:\na₅ = a + 4d\n18 = a + 12\na = 6\n**Answer: 6.**"
        },
        {
          q: "16. Find the common difference if a = 4 and a₆ = 24.",
          a: "Solution:\na₆ = a + 5d\n24 = 4 + 5d\n20 = 5d\nd = 4\n**Answer: 4.**"
        },
        {
          q: "17. Find the sum of the first 6 terms of 5, 10, 15, 20, ...",
          a: "Solution:\na = 5, d = 5, n = 6\nS₆ = 6/2 [10 + 5(5)]\n= 3 × 35 = 105\n**Answer: 105.**"
        },
        {
          q: "18. Find the 30th term of 100, 95, 90, 85, ...",
          a: "Solution:\na = 100, d = −5\na₃₀ = 100 + 29(−5)\n= 100 − 145 = −45\n**Answer: −45.**"
        },
        {
          q: "19. Find the sum of the first 10 terms of 1, 3, 5, 7, ...",
          a: "Solution:\na = 1, d = 2, n = 10\nS₁₀ = 10/2 [2 + 9(2)]\n= 5 × 20 = 100\n**Answer: 100.**"
        },
        {
          q: "20. Find the 15th term of 50, 45, 40, 35, ...",
          a: "Solution:\na = 50, d = −5\na₁₅ = 50 + 14(−5)\n= 50 − 70 = −20\n**Answer: −20.**"
        }
      ],

      short: [
        {
          q: "1. Find the 25th term of the AP 7, 11, 15, 19, ...",
          a: "Solution:\na = 7, d = 11 − 7 = 4, n = 25\naₙ = a + (n − 1)d\na₂₅ = 7 + 24(4)\n= 7 + 96\n**Answer: a₂₅ = 103.**"
        },
        {
          q: "2. Find the sum of the first 20 terms of 3, 7, 11, 15, ...",
          a: "Solution:\na = 3, d = 4, n = 20\nSₙ = n/2 [2a + (n − 1)d]\nS₂₀ = 20/2 [6 + 19(4)]\n= 10(6 + 76)\n= 10 × 82\n**Answer: S₂₀ = 820.**"
        },
        {
          q: "3. Which term of the AP 5, 9, 13, 17, ... is 81?",
          a: "Solution:\na = 5, d = 4, aₙ = 81\n81 = 5 + (n − 1)4\n76 = 4(n − 1)\n19 = n − 1\nn = 20\n**Answer: 81 is the 20th term.**"
        },
        {
          q: "4. Find the number of terms in 8, 13, 18, ..., 78.",
          a: "Solution:\na = 8, d = 5, l = 78\nl = a + (n − 1)d\n78 = 8 + 5(n − 1)\n70 = 5(n − 1)\n14 = n − 1\nn = 15\n**Answer: 15 terms.**"
        },
        {
          q: "5. Find the sum of the first 15 terms of 2, 5, 8, 11, ...",
          a: "Solution:\na = 2, d = 3, n = 15\nS₁₅ = 15/2 [4 + 14(3)]\n= 15/2 [46]\n= 15 × 23\n**Answer: 345.**"
        },
        {
          q: "6. Find the first term if a₁₂ = 38 and d = 3.",
          a: "Solution:\na₁₂ = a + 11d\n38 = a + 11(3)\n38 = a + 33\na = 5\n**Answer: First term = 5.**"
        },
        {
          q: "7. Find d if a₄ = 14 and a₉ = 34.",
          a: "Solution:\na₄ = a + 3d = 14 ...(1)\na₉ = a + 8d = 34 ...(2)\nSubtract (1) from (2):\n5d = 20\nd = 4\n**Answer: d = 4.**"
        },
        {
          q: "8. Find the sum of the first 25 positive integers.",
          a: "Solution:\na = 1, d = 1, n = 25\nS₂₅ = 25/2 [2 + 24]\n= 25/2 × 26\n= 25 × 13\n**Answer: 325.**"
        },
        {
          q: "9. Find the sum of the first 12 terms of 30, 27, 24, 21, ...",
          a: "Solution:\na = 30, d = −3, n = 12\nS₁₂ = 12/2 [60 + 11(−3)]\n= 6(60 − 33)\n= 6 × 27\n**Answer: 162.**"
        },
        {
          q: "10. A student saves ₹20 in the first week and increases the saving by ₹5 each week. Find the total saved in 12 weeks.",
          a: "Solution:\na = ₹20, d = ₹5, n = 12\nS₁₂ = 12/2 [2(20) + 11(5)]\n= 6[40 + 55]\n= 6 × 95\n**Answer: ₹570.**"
        }
      ],

      long: [
        {
          q: "1. Find the sum of the first 30 terms of the AP 8, 13, 18, 23, ...",
          a: "Solution:\nFirst term, a = 8\nCommon difference, d = 13 − 8 = 5\nNumber of terms, n = 30\n\nFormula:\nSₙ = n/2 [2a + (n − 1)d]\n\nS₃₀ = 30/2 [2(8) + 29(5)]\n= 15 [16 + 145]\n= 15 × 161\n= 2415\n\n**Answer: S₃₀ = 2415.**"
        },
        {
          q: "2. Which term of the AP 3, 8, 13, 18, ... is 198?",
          a: "Solution:\na = 3, d = 5, aₙ = 198\n\nFormula:\naₙ = a + (n − 1)d\n\n198 = 3 + (n − 1)5\n195 = 5(n − 1)\n39 = n − 1\nn = 40\n\nVerification:\na₄₀ = 3 + 39(5)\n= 3 + 195 = 198\n\n**Answer: 198 is the 40th term.**"
        },
        {
          q: "3. Find the sum of all multiples of 7 between 1 and 100.",
          a: "Solution:\nThe AP is 7, 14, 21, ..., 98.\nFirst term, a = 7\nCommon difference, d = 7\nLast term, l = 98\n\nFind the number of terms:\n98 = 7 + (n − 1)7\n91 = 7(n − 1)\nn − 1 = 13\nn = 14\n\nNow use:\nSₙ = n/2 (a + l)\nS₁₄ = 14/2 (7 + 98)\n= 7 × 105\n= 735\n\n**Answer: 735.**"
        },
        {
          q: "4. A theatre has 20 seats in the first row. Each next row has 2 more seats than the previous row. Find the total number of seats in 15 rows.",
          a: "Solution:\nFirst row, a = 20\nCommon difference, d = 2\nNumber of rows, n = 15\n\nSₙ = n/2 [2a + (n − 1)d]\n\nS₁₅ = 15/2 [2(20) + 14(2)]\n= 15/2 [40 + 28]\n= 15/2 × 68\n= 15 × 34\n= 510\n\n**Answer: 510 seats.**"
        },
        {
          q: "5. A person repays a loan in 12 monthly instalments. The first instalment is ₹500 and each next instalment is ₹100 more than the previous one. Find the total amount repaid.",
          a: "Solution:\nFirst instalment, a = ₹500\nCommon difference, d = ₹100\nNumber of instalments, n = 12\n\nSₙ = n/2 [2a + (n − 1)d]\n\nS₁₂ = 12/2 [2(500) + 11(100)]\n= 6 [1000 + 1100]\n= 6 × 2100\n= 12600\n\n**Answer: Total repaid = ₹12,600.**"
        }
      ]
    },

    flashcards: [
      { q: "1. Find d for 2, 6, 10, 14, ...", a: "d = 6 − 2 = 4." },
      { q: "2. Find the 10th term of 1, 4, 7, ...", a: "a₁₀ = 1 + 9(3) = 28." },
      { q: "3. Find the 15th term if a = 4, d = 2.", a: "a₁₅ = 4 + 14(2) = 32." },
      { q: "4. Find the 20th term if a = 3, d = 5.", a: "a₂₀ = 3 + 19(5) = 98." },
      { q: "5. Find the 12th term of 10, 8, 6, ...", a: "a₁₂ = 10 + 11(−2) = −12." },
      { q: "6. Find S₁₀ for 1, 2, 3, ...", a: "S₁₀ = 10/2(1 + 10) = 55." },
      { q: "7. Find S₅ for 4, 8, 12, ...", a: "S₅ = 5/2[8 + 4(4)] = 60." },
      { q: "8. Find the 8th term if a = 7, d = 3.", a: "a₈ = 7 + 7(3) = 28." },
      { q: "9. Find d if a₁ = 5 and a₂ = 12.", a: "d = 12 − 5 = 7." },
      { q: "10. Find a if a₆ = 27 and d = 4.", a: "27 = a + 5(4); a = 7." },
      { q: "11. Find the 25th term of 2, 4, 6, ...", a: "a₂₅ = 2 + 24(2) = 50." },
      { q: "12. Find S₁₀ for 5, 10, 15, ...", a: "S₁₀ = 10/2[10 + 9(5)] = 275." },
      { q: "13. Find the 15th term of 20, 17, 14, ...", a: "a₁₅ = 20 + 14(−3) = −22." },
      { q: "14. Find S₈ for 2, 5, 8, ...", a: "S₈ = 8/2[4 + 7(3)] = 100." },
      { q: "15. Which term of 4, 7, 10, ... is 40?", a: "40 = 4 + 3(n − 1); n = 13." },
      { q: "16. Find the number of terms in 3, 8, 13, ..., 48.", a: "48 = 3 + 5(n − 1); n = 10." },
      { q: "17. Find S₂₀ for 1, 3, 5, ...", a: "S₂₀ = 20/2[2 + 19(2)] = 400." },
      { q: "18. Find the 30th term of 6, 10, 14, ...", a: "a₃₀ = 6 + 29(4) = 122." },
      { q: "19. Find S₁₅ if a = 10, d = 2.", a: "S₁₅ = 15/2[20 + 14(2)] = 360." },
      { q: "20. Find d if a₃ = 12 and a₈ = 32.", a: "5d = 32 − 12 = 20; d = 4." },
      { q: "21. Find S₁₂ for 30, 27, 24, ...", a: "S₁₂ = 12/2[60 + 11(−3)] = 162." },
      { q: "22. Find the 11th term if a = 9, d = −2.", a: "a₁₁ = 9 + 10(−2) = −11." },
      { q: "23. Find S₁₀ for 10, 20, 30, ...", a: "S₁₀ = 10/2[20 + 9(10)] = 550." },
      { q: "24. Find the 18th term of 5, 9, 13, ...", a: "a₁₈ = 5 + 17(4) = 73." },
      { q: "25. Find S₅ for 10, 15, 20, ...", a: "S₅ = 5/2[20 + 4(5)] = 100." },
      { q: "26. Find the 12th term of 2, 7, 12, ...", a: "a₁₂ = 2 + 11(5) = 57." },
      { q: "27. Find S₂₀ for 5, 10, 15, ...", a: "S₂₀ = 20/2[10 + 19(5)] = 1050." },
      { q: "28. Find the 16th term if a = 100, d = −4.", a: "a₁₆ = 100 + 15(−4) = 40." },
      { q: "29. Find the sum of the first 25 natural numbers.", a: "S₂₅ = 25/2(1 + 25) = 325." },
      { q: "30. Find the sum of the first 10 multiples of 6.", a: "S₁₀ = 10/2(6 + 60) = 330." }
    ],

    mcqs: [
      { q: "1. Find d for 4, 9, 14, 19, ...", options: ["5", "4", "3", "6"], answer: 0 },
      { q: "2. Find the 10th term of 2, 5, 8, ...", options: ["27", "29", "30", "32"], answer: 1 },
      { q: "3. Find the 15th term if a = 3, d = 4.", options: ["55", "56", "59", "63"], answer: 2 },
      { q: "4. Find S₁₀ for 1, 2, 3, ...", options: ["45", "50", "60", "55"], answer: 3 },
      { q: "5. Find the 8th term of 10, 7, 4, ...", options: ["−11", "−10", "−8", "−14"], answer: 0 },
      { q: "6. Find the number of terms in 5, 10, 15, ..., 50.", options: ["9", "10", "11", "12"], answer: 1 },
      { q: "7. Find S₅ for 2, 4, 6, ...", options: ["25", "28", "30", "32"], answer: 2 },
      { q: "8. Find the 20th term if a = 7, d = 3.", options: ["61", "62", "63", "64"], answer: 3 },
      { q: "9. Find d if a₃ = 12 and a₈ = 32.", options: ["4", "5", "3", "6"], answer: 0 },
      { q: "10. Find S₁₀ for 3, 6, 9, ...", options: ["150", "165", "180", "195"], answer: 1 },
      { q: "11. Which term of 2, 5, 8, ... is 50?", options: ["15th", "16th", "17th", "18th"], answer: 2 },
      { q: "12. Find the 12th term of 20, 18, 16, ...", options: ["0", "2", "−4", "−2"], answer: 3 },
      { q: "13. Find S₂₀ for 1, 3, 5, ...", options: ["400", "380", "420", "200"], answer: 0 },
      { q: "14. Find the first term if a₆ = 27 and d = 4.", options: ["5", "7", "8", "9"], answer: 1 },
      { q: "15. Find S₁₀ for 5, 10, 15, ...", options: ["250", "265", "275", "300"], answer: 2 },
      { q: "16. Find the 25th term of 1, 4, 7, ...", options: ["70", "71", "72", "73"], answer: 3 },
      { q: "17. Find the sum of the first 10 multiples of 6.", options: ["330", "300", "360", "390"], answer: 0 },
      { q: "18. Find S₁₅ if a = 2, d = 2.", options: ["225", "240", "255", "270"], answer: 1 },
      { q: "19. Find the 30th term if a = 100, d = −3.", options: ["10", "16", "13", "19"], answer: 2 },
      { q: "20. A person saves ₹100 in the first month and ₹50 more each month. How much is saved in 6 months?", options: ["₹1,200", "₹1,250", "₹1,300", "₹1,350"], answer: 3 }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Arithmetic Progressions",
    images: [
      "images/infographics/maths/arithmetic-progressions.jpg"
    ],
(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "maths::Triangles";

  const data = {
    overview:
      "Class 10 Mathematics — Triangles. Numerical practice on similarity, proportional sides, BPT, area ratios and the Pythagoras theorem. Solutions are arranged in notebook style.",

    keyPoints: [
      "Similar triangles have equal corresponding angles and proportional corresponding sides.",
      "If the side ratio is a:b, the ratio of their perimeters is a:b.",
      "The ratio of areas of similar triangles is the square of the ratio of corresponding sides.",
      "Basic Proportionality Theorem: a line parallel to one side of a triangle divides the other two sides in the same ratio.",
      "Pythagoras theorem: hypotenuse² = perpendicular² + base².",
      "For a right triangle, use the converse of Pythagoras to check whether the triangle is right-angled."
    ],

    questions: {
      veryShort: [
        {
          q: "1. Two similar triangles have corresponding sides in the ratio 2:3. If the smaller side is 8 cm, find the corresponding larger side.",
          a: "Solution:\nSide ratio = 2:3\nLet the larger side be x.\n8/x = 2/3\n2x = 24\n∴ x = 12 cm."
        },
        {
          q: "2. The sides of two similar triangles are in the ratio 3:5. Find their area ratio.",
          a: "Solution:\nArea ratio = (side ratio)²\n= 3²:5²\n= 9:25."
        },
        {
          q: "3. A right triangle has perpendicular sides 6 cm and 8 cm. Find its hypotenuse.",
          a: "Solution:\nHypotenuse² = 6² + 8²\n= 36 + 64 = 100\nHypotenuse = √100\n∴ 10 cm."
        },
        {
          q: "4. A right triangle has hypotenuse 13 cm and one side 5 cm. Find the other side.",
          a: "Solution:\nOther side² = 13² − 5²\n= 169 − 25 = 144\nOther side = √144\n∴ 12 cm."
        },
        {
          q: "5. Similar triangles have side ratio 4:7. If a corresponding side of the first triangle is 12 cm, find the matching side of the second.",
          a: "Solution:\n12/x = 4/7\n4x = 84\nx = 84/4\n∴ x = 21 cm."
        },
        {
          q: "6. The sides of two similar triangles are in the ratio 2:5. Find their perimeter ratio.",
          a: "Solution:\nFor similar triangles, perimeter ratio equals corresponding side ratio.\n∴ Perimeter ratio = 2:5."
        },
        {
          q: "7. In ΔABC, DE ∥ BC. If AD = 3 cm, DB = 2 cm and AE = 6 cm, find EC.",
          a: "Solution:\nBy BPT, AD/DB = AE/EC\n3/2 = 6/EC\n3EC = 12\n∴ EC = 4 cm."
        },
        {
          q: "8. A triangle has sides 5 cm, 12 cm and 13 cm. Verify whether it is right-angled.",
          a: "Solution:\n5² + 12² = 25 + 144 = 169\n13² = 169\nBoth are equal.\n∴ The triangle is right-angled."
        },
        {
          q: "9. Two similar triangles have areas 16 cm² and 64 cm². Find their corresponding side ratio.",
          a: "Solution:\nSide ratio = √(area ratio)\n= √(16:64)\n= 4:8\n∴ 1:2."
        },
        {
          q: "10. In ΔABC, DE ∥ BC. If AD = 4 cm, AB = 10 cm and AC = 15 cm, find AE.",
          a: "Solution:\nAD/AB = AE/AC\n4/10 = AE/15\n10AE = 60\n∴ AE = 6 cm."
        },
        {
          q: "11. The corresponding sides of two similar triangles are 9 cm and 12 cm. If another side of the first is 15 cm, find the corresponding side of the second.",
          a: "Solution:\nScale factor = 12/9 = 4/3\nRequired side = 15 × 4/3\n= 20 cm."
        },
        {
          q: "12. A right triangle has hypotenuse 17 cm and one leg 8 cm. Find the other leg.",
          a: "Solution:\nOther leg² = 17² − 8²\n= 289 − 64 = 225\nOther leg = √225\n∴ 15 cm."
        },
        {
          q: "13. Two similar triangles have side ratio 5:6. If the perimeter of the smaller triangle is 25 cm, find the perimeter of the larger triangle.",
          a: "Solution:\n25/P = 5/6\n5P = 150\n∴ P = 30 cm."
        },
        {
          q: "14. The area ratio of two similar triangles is 25:49. Find their side ratio.",
          a: "Solution:\nSide ratio = √25:√49\n= 5:7."
        },
        {
          q: "15. In ΔABC, DE ∥ BC. If AD = 5 cm, DB = 5 cm and AE = 7 cm, find AC.",
          a: "Solution:\nAB = AD + DB = 5 + 5 = 10 cm\nAD/AB = AE/AC\n5/10 = 7/AC\nAC = 14 cm."
        },
        {
          q: "16. A triangle has sides 7 cm, 24 cm and 25 cm. Find the value of 7² + 24².",
          a: "Solution:\n7² + 24² = 49 + 576\n∴ 625."
        },
        {
          q: "17. Two similar triangles have corresponding sides 6 cm and 15 cm. If the area of the smaller triangle is 20 cm², find the area of the larger triangle.",
          a: "Solution:\nArea ratio = 6²:15² = 36:225 = 4:25\n20/A = 4/25\n4A = 500\n∴ A = 125 cm²."
        },
        {
          q: "18. A right triangle has legs 9 cm and 12 cm. Find its hypotenuse.",
          a: "Solution:\nHypotenuse² = 9² + 12²\n= 81 + 144 = 225\nHypotenuse = √225\n∴ 15 cm."
        },
        {
          q: "19. In ΔABC, DE ∥ BC. If AD = 2 cm, AB = 6 cm and BC = 18 cm, find DE.",
          a: "Solution:\nAD/AB = DE/BC\n2/6 = DE/18\n6DE = 36\n∴ DE = 6 cm."
        },
        {
          q: "20. The corresponding sides of two similar triangles are in the ratio 7:9. Find the ratio of their areas.",
          a: "Solution:\nArea ratio = 7²:9²\n∴ 49:81."
        }
      ],

      short: [
        {
          q: "1. In ΔABC, DE ∥ BC. If AD = 4 cm, DB = 6 cm and AE = 5 cm, calculate EC and AC.",
          a: "Solution:\nBy BPT, AD/DB = AE/EC\n4/6 = 5/EC\n4EC = 30\nEC = 7.5 cm\nAC = AE + EC = 5 + 7.5\n∴ AC = 12.5 cm."
        },
        {
          q: "2. Two similar triangles have corresponding sides 8 cm and 12 cm. If the area of the smaller triangle is 40 cm², find the area of the larger triangle.",
          a: "Solution:\nSide ratio = 8:12 = 2:3\nArea ratio = 2²:3² = 4:9\n40/A = 4/9\n4A = 360\n∴ A = 90 cm²."
        },
        {
          q: "3. A ladder 10 m long reaches a window 8 m above the ground. Find the distance of its foot from the wall.",
          a: "Solution:\nLet the distance be x m.\nBy Pythagoras theorem:\n10² = 8² + x²\n100 = 64 + x²\nx² = 36\nx = 6 m."
        },
        {
          q: "4. The sides of two similar triangles are in the ratio 4:7. If the perimeter of the larger triangle is 56 cm, find the perimeter of the smaller triangle.",
          a: "Solution:\nSmaller perimeter / 56 = 4/7\nSmaller perimeter = 56 × 4/7\n= 8 × 4\n∴ 32 cm."
        },
        {
          q: "5. In ΔABC, DE ∥ BC. AD = 6 cm, AB = 9 cm and BC = 15 cm. Find DE and EC if AC = 12 cm.",
          a: "Solution:\nAD/AB = DE/BC\n6/9 = DE/15\n9DE = 90\nDE = 10 cm\nAlso, AD/AB = AE/AC\n6/9 = AE/12\n9AE = 72\nAE = 8 cm\nEC = AC − AE = 12 − 8 = 4 cm."
        },
        {
          q: "6. A triangle has sides 10 cm, 24 cm and 26 cm. Check whether it is right-angled.",
          a: "Solution:\nLargest side = 26 cm\n10² + 24² = 100 + 576 = 676\n26² = 676\nSince 10² + 24² = 26²,\n∴ The triangle is right-angled."
        },
        {
          q: "7. The areas of two similar triangles are 36 cm² and 81 cm². If a corresponding side of the smaller triangle is 10 cm, find the matching side of the larger triangle.",
          a: "Solution:\nArea ratio = 36:81 = 4:9\nSide ratio = √4:√9 = 2:3\n10/x = 2/3\n2x = 30\n∴ x = 15 cm."
        },
        {
          q: "8. A right triangle has hypotenuse 25 cm and one leg 7 cm. Find its other leg and perimeter.",
          a: "Solution:\nOther leg² = 25² − 7²\n= 625 − 49 = 576\nOther leg = 24 cm\nPerimeter = 7 + 24 + 25\n∴ 56 cm."
        },
        {
          q: "9. In ΔABC, DE ∥ BC. AD = 3 cm, DB = 4 cm and AC = 14 cm. Find AE and EC.",
          a: "Solution:\nAB = 3 + 4 = 7 cm\nAD/AB = AE/AC\n3/7 = AE/14\n7AE = 42\nAE = 6 cm\nEC = 14 − 6\n∴ EC = 8 cm."
        },
        {
          q: "10. Two similar triangles have perimeters 30 cm and 45 cm. If a side of the smaller triangle is 8 cm, find its corresponding side in the larger triangle and the area ratio.",
          a: "Solution:\nSide ratio = perimeter ratio = 30:45 = 2:3\nLarger side = 8 × 3/2 = 12 cm\nArea ratio = 2²:3²\n∴ Smaller : larger area = 4:9."
        }
      ],

      long: [
        {
          q: "1. In ΔABC, D lies on AB and E lies on AC such that DE ∥ BC. Given AD = 6 cm, DB = 4 cm, AE = 9 cm and BC = 20 cm, find AB, AC, EC and DE.",
          a: "Solution:\nStep 1: Find AB.\nAB = AD + DB\n= 6 + 4 = 10 cm\n\nStep 2: Use BPT.\nAD/DB = AE/EC\n6/4 = 9/EC\n6EC = 36\nEC = 6 cm\n\nStep 3: Find AC.\nAC = AE + EC\n= 9 + 6 = 15 cm\n\nStep 4: Find DE.\nAD/AB = DE/BC\n6/10 = DE/20\n10DE = 120\nDE = 12 cm\n\nFinal answers: AB = 10 cm, AC = 15 cm, EC = 6 cm and DE = 12 cm."
        },
        {
          q: "2. Two similar triangles have corresponding sides in the ratio 3:5. The perimeter of the smaller triangle is 36 cm and its area is 54 cm². Find the perimeter and area of the larger triangle.",
          a: "Solution:\nGiven side ratio = 3:5\n\nStep 1: Find the larger perimeter.\n36/P = 3/5\n3P = 180\nP = 60 cm\n\nStep 2: Find the area ratio.\nSmaller area : larger area = 3²:5²\n= 9:25\n\nStep 3: Calculate the larger area.\n54/A = 9/25\n9A = 54 × 25\nA = 1350/9\nA = 150 cm²\n\nFinal answers: Larger perimeter = 60 cm; larger area = 150 cm²."
        },
        {
          q: "3. A 13 m ladder is placed against a vertical wall. Its foot is 5 m from the wall. Calculate the height reached by the ladder. If the foot is moved 2 m farther away while the ladder remains the same length, find the new height.",
          a: "Solution:\nFirst position:\nLet height = h.\nBy Pythagoras theorem:\n13² = h² + 5²\n169 = h² + 25\nh² = 144\nh = 12 m\n\nSecond position:\nNew distance = 5 + 2 = 7 m\nLet new height = H.\n13² = H² + 7²\n169 = H² + 49\nH² = 120\nH = √120 = 2√30 m\nApproximately H = 10.95 m\n\nFinal answers: First height = 12 m; new height = 2√30 m (approximately 10.95 m)."
        },
        {
          q: "4. In ΔABC, DE ∥ BC. AD = 8 cm, AB = 12 cm, AC = 15 cm and the area of ΔADE is 40 cm². Find AE, EC, DE/BC and the area of ΔABC.",
          a: "Solution:\nStep 1: Find AE.\nAD/AB = AE/AC\n8/12 = AE/15\n12AE = 120\nAE = 10 cm\n\nStep 2: Find EC.\nEC = AC − AE\n= 15 − 10 = 5 cm\n\nStep 3: Find DE/BC.\nDE/BC = AD/AB\n= 8/12 = 2/3\n\nStep 4: Find the area of ΔABC.\nArea ratio ADE : ABC = (2/3)²\n= 4:9\n40/Area(ABC) = 4/9\n4 × Area(ABC) = 360\nArea(ABC) = 90 cm²\n\nFinal answers: AE = 10 cm, EC = 5 cm, DE/BC = 2/3 and area of ΔABC = 90 cm²."
        },
        {
          q: "5. A triangular park has sides 15 m, 20 m and 25 m. Verify that it is right-angled and calculate its area. A similar park has corresponding sides 9 m, 12 m and 15 m. Find the ratio of their areas.",
          a: "Solution:\nStep 1: Check Pythagoras theorem.\nLargest side = 25 m\n15² + 20² = 225 + 400\n= 625\n25² = 625\nBoth sides are equal.\nTherefore, the triangle is right-angled.\n\nStep 2: Calculate its area.\nArea = 1/2 × base × height\n= 1/2 × 15 × 20\n= 150 m²\n\nStep 3: Compare areas.\nCorresponding side ratio = 15:9 = 5:3\nArea ratio = 5²:3²\n= 25:9\n\nFinal answers: The triangle is right-angled; area = 150 m²; first park : second park area = 25:9."
        }
      ]
    },

    flashcards: [
      { q: "If corresponding sides are in ratio 2:3, what is the area ratio?", a: "2²:3² = 4:9." },
      { q: "Side ratio is 4:5. Find the area ratio.", a: "4²:5² = 16:25." },
      { q: "Side ratio is 3:7. Find the perimeter ratio.", a: "3:7." },
      { q: "Find the hypotenuse when legs are 3 cm and 4 cm.", a: "√(9 + 16) = 5 cm." },
      { q: "Find the hypotenuse when legs are 5 cm and 12 cm.", a: "√(25 + 144) = 13 cm." },
      { q: "Find the missing leg when hypotenuse = 10 cm and one leg = 6 cm.", a: "√(100 − 36) = 8 cm." },
      { q: "Find the missing leg when hypotenuse = 15 cm and one leg = 9 cm.", a: "√(225 − 81) = 12 cm." },
      { q: "Areas are in ratio 9:16. Find the side ratio.", a: "√9:√16 = 3:4." },
      { q: "Areas are in ratio 25:36. Find the side ratio.", a: "5:6." },
      { q: "AD = 4, DB = 6 and DE ∥ BC. If AE = 8, find EC.", a: "4/6 = 8/EC; EC = 12 cm." },
      { q: "AD = 3, AB = 9 and AC = 18. If DE ∥ BC, find AE.", a: "3/9 = AE/18; AE = 6 cm." },
      { q: "A corresponding side is 7 cm and the scale factor is 2. Find the new side.", a: "7 × 2 = 14 cm." },
      { q: "A side is 12 cm and the scale factor is 3/2. Find the new side.", a: "12 × 3/2 = 18 cm." },
      { q: "Similar triangles have perimeters 24 cm and 36 cm. Find the side ratio.", a: "24:36 = 2:3." },
      { q: "A small triangle has area 20 cm² and side ratio small:large = 2:3. Find the larger area.", a: "20/A = 4/9; A = 45 cm²." },
      { q: "A small triangle has perimeter 18 cm and side ratio small:large = 3:5. Find the larger perimeter.", a: "18/P = 3/5; P = 30 cm." },
      { q: "Find the hypotenuse for legs 8 cm and 15 cm.", a: "√(64 + 225) = 17 cm." },
      { q: "Find the missing leg for hypotenuse 26 cm and leg 10 cm.", a: "√(676 − 100) = 24 cm." },
      { q: "Find 6² + 8².", a: "36 + 64 = 100." },
      { q: "Is a triangle with sides 9, 12, 15 right-angled?", a: "9² + 12² = 81 + 144 = 225 = 15²; yes." },
      { q: "Find the area ratio for side ratio 6:11.", a: "36:121." },
      { q: "Find the side ratio for area ratio 49:64.", a: "7:8." },
      { q: "AB = 14 cm, AD = 6 cm and DE ∥ BC. Find DB.", a: "DB = AB − AD = 14 − 6 = 8 cm." },
      { q: "AE = 9 cm and EC = 5 cm. Find AC.", a: "AC = 9 + 5 = 14 cm." },
      { q: "If side ratio is 1:4, find the area ratio.", a: "1:16." },
      { q: "If area ratio is 1:25, find the side ratio.", a: "1:5." },
      { q: "A triangle has legs 7 cm and 24 cm. Find its hypotenuse.", a: "√(49 + 576) = 25 cm." },
      { q: "Hypotenuse = 41 cm, one leg = 9 cm. Find the other leg.", a: "√(1681 − 81) = √1600 = 40 cm." },
      { q: "Side ratio is 5:8. Find the area ratio.", a: "25:64." },
      { q: "A triangle has sides 12, 16, 20 cm. Find its perimeter.", a: "12 + 16 + 20 = 48 cm." }
    ],

    mcqs: [
      {
        q: "1. The side ratio of two similar triangles is 2:3. Their area ratio is:",
        options: ["2:3", "4:9", "8:27", "3:2"],
        answer: 1
      },
      {
        q: "2. The legs of a right triangle are 6 cm and 8 cm. Its hypotenuse is:",
        options: ["9 cm", "12 cm", "10 cm", "14 cm"],
        answer: 2
      },
      {
        q: "3. The hypotenuse is 13 cm and one leg is 5 cm. The other leg is:",
        options: ["8 cm", "10 cm", "12 cm", "18 cm"],
        answer: 2
      },
      {
        q: "4. The area ratio is 16:25. The corresponding side ratio is:",
        options: ["4:5", "16:25", "8:25", "5:4"],
        answer: 0
      },
      {
        q: "5. Similar triangles have perimeters 20 cm and 30 cm. Their side ratio is:",
        options: ["3:2", "2:3", "4:9", "1:3"],
        answer: 1
      },
      {
        q: "6. If AD = 4, DB = 6, DE ∥ BC and AE = 10, EC equals:",
        options: ["12 cm", "15 cm", "16 cm", "20 cm"],
        answer: 1
      },
      {
        q: "7. A right triangle has legs 9 cm and 12 cm. The hypotenuse is:",
        options: ["13 cm", "14 cm", "15 cm", "21 cm"],
        answer: 2
      },
      {
        q: "8. The side ratio is 3:5. The area ratio is:",
        options: ["3:5", "9:25", "6:10", "27:125"],
        answer: 1
      },
      {
        q: "9. A triangle has sides 8 cm, 15 cm and 17 cm. It is:",
        options: ["Right-angled", "Equilateral", "Impossible", "Not right-angled"],
        answer: 0
      },
      {
        q: "10. The areas of similar triangles are 49 cm² and 81 cm². Their side ratio is:",
        options: ["49:81", "7:9", "14:18", "9:7"],
        answer: 1
      },
      {
        q: "11. AD = 5 cm, AB = 10 cm and AC = 16 cm. If DE ∥ BC, AE is:",
        options: ["5 cm", "8 cm", "10 cm", "12 cm"],
        answer: 1
      },
      {
        q: "12. The legs of a right triangle are 5 cm and 12 cm. Its perimeter is:",
        options: ["25 cm", "30 cm", "17 cm", "20 cm"],
        answer: 0
      },
      {
        q: "13. A side of a triangle is 8 cm. The scale factor for enlargement is 3/2. The new side is:",
        options: ["10 cm", "12 cm", "16 cm", "24 cm"],
        answer: 1
      },
      {
        q: "14. The area ratio is 4:9. If the smaller corresponding side is 6 cm, the larger side is:",
        options: ["8 cm", "9 cm", "12 cm", "15 cm"],
        answer: 1
      },
      {
        q: "15. The hypotenuse is 25 cm and one leg is 7 cm. The other leg is:",
        options: ["18 cm", "20 cm", "24 cm", "32 cm"],
        answer: 2
      },
      {
        q: "16. The side ratio is 5:7. The area ratio is:",
        options: ["5:7", "10:14", "25:49", "125:343"],
        answer: 2
      },
      {
        q: "17. A triangle has sides 10 cm, 24 cm and 26 cm. The largest side squared is:",
        options: ["576", "625", "676", "729"],
        answer: 2
      },
      {
        q: "18. Similar triangles have side ratio 4:9. If a smaller side is 12 cm, its corresponding larger side is:",
        options: ["18 cm", "24 cm", "27 cm", "36 cm"],
        answer: 2
      },
      {
        q: "19. AD = 3 cm, DB = 5 cm and DE ∥ BC. If AE = 6 cm, EC is:",
        options: ["8 cm", "10 cm", "12 cm", "15 cm"],
        answer: 1
      },
      {
        q: "20. The area ratio of two similar triangles is 1:36. Their side ratio is:",
        options: ["1:6", "1:12", "1:18", "1:36"],
        answer: 0
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Triangles — Class 10 Mathematics",
    images: ["images/infographics/maths/triangles.jpg"],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Triangles content loaded.");
})();
       
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Arithmetic Progressions loaded.");
})();

(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "maths::Triangles";

  const data = {
    overview:
      "Class 10 Mathematics — Triangles. Numerical practice on similarity, proportional sides, BPT, area ratios and the Pythagoras theorem. Solutions are arranged in notebook style.",

    keyPoints: [
      "Similar triangles have equal corresponding angles and proportional corresponding sides.",
      "If the side ratio is a:b, the ratio of their perimeters is a:b.",
      "The ratio of areas of similar triangles is the square of the ratio of corresponding sides.",
      "Basic Proportionality Theorem: a line parallel to one side of a triangle divides the other two sides in the same ratio.",
      "Pythagoras theorem: hypotenuse² = perpendicular² + base².",
      "For a right triangle, use the converse of Pythagoras to check whether the triangle is right-angled."
    ],

    questions: {
      veryShort: [
        {
          q: "1. Two similar triangles have corresponding sides in the ratio 2:3. If the smaller side is 8 cm, find the corresponding larger side.",
          a: "Solution:\nSide ratio = 2:3\nLet the larger side be x.\n8/x = 2/3\n2x = 24\n∴ x = 12 cm."
        },
        {
          q: "2. The sides of two similar triangles are in the ratio 3:5. Find their area ratio.",
          a: "Solution:\nArea ratio = (side ratio)²\n= 3²:5²\n= 9:25."
        },
        {
          q: "3. A right triangle has perpendicular sides 6 cm and 8 cm. Find its hypotenuse.",
          a: "Solution:\nHypotenuse² = 6² + 8²\n= 36 + 64 = 100\nHypotenuse = √100\n∴ 10 cm."
        },
        {
          q: "4. A right triangle has hypotenuse 13 cm and one side 5 cm. Find the other side.",
          a: "Solution:\nOther side² = 13² − 5²\n= 169 − 25 = 144\nOther side = √144\n∴ 12 cm."
        },
        {
          q: "5. Similar triangles have side ratio 4:7. If a corresponding side of the first triangle is 12 cm, find the matching side of the second.",
          a: "Solution:\n12/x = 4/7\n4x = 84\nx = 84/4\n∴ x = 21 cm."
        },
        {
          q: "6. The sides of two similar triangles are in the ratio 2:5. Find their perimeter ratio.",
          a: "Solution:\nFor similar triangles, perimeter ratio equals corresponding side ratio.\n∴ Perimeter ratio = 2:5."
        },
        {
          q: "7. In ΔABC, DE ∥ BC. If AD = 3 cm, DB = 2 cm and AE = 6 cm, find EC.",
          a: "Solution:\nBy BPT, AD/DB = AE/EC\n3/2 = 6/EC\n3EC = 12\n∴ EC = 4 cm."
        },
        {
          q: "8. A triangle has sides 5 cm, 12 cm and 13 cm. Verify whether it is right-angled.",
          a: "Solution:\n5² + 12² = 25 + 144 = 169\n13² = 169\nBoth are equal.\n∴ The triangle is right-angled."
        },
        {
          q: "9. Two similar triangles have areas 16 cm² and 64 cm². Find their corresponding side ratio.",
          a: "Solution:\nSide ratio = √(area ratio)\n= √(16:64)\n= 4:8\n∴ 1:2."
        },
        {
          q: "10. In ΔABC, DE ∥ BC. If AD = 4 cm, AB = 10 cm and AC = 15 cm, find AE.",
          a: "Solution:\nAD/AB = AE/AC\n4/10 = AE/15\n10AE = 60\n∴ AE = 6 cm."
        },
        {
          q: "11. The corresponding sides of two similar triangles are 9 cm and 12 cm. If another side of the first is 15 cm, find the corresponding side of the second.",
          a: "Solution:\nScale factor = 12/9 = 4/3\nRequired side = 15 × 4/3\n= 20 cm."
        },
        {
          q: "12. A right triangle has hypotenuse 17 cm and one leg 8 cm. Find the other leg.",
          a: "Solution:\nOther leg² = 17² − 8²\n= 289 − 64 = 225\nOther leg = √225\n∴ 15 cm."
        },
        {
          q: "13. Two similar triangles have side ratio 5:6. If the perimeter of the smaller triangle is 25 cm, find the perimeter of the larger triangle.",
          a: "Solution:\n25/P = 5/6\n5P = 150\n∴ P = 30 cm."
        },
        {
          q: "14. The area ratio of two similar triangles is 25:49. Find their side ratio.",
          a: "Solution:\nSide ratio = √25:√49\n= 5:7."
        },
        {
          q: "15. In ΔABC, DE ∥ BC. If AD = 5 cm, DB = 5 cm and AE = 7 cm, find AC.",
          a: "Solution:\nAB = AD + DB = 5 + 5 = 10 cm\nAD/AB = AE/AC\n5/10 = 7/AC\nAC = 14 cm."
        },
        {
          q: "16. A triangle has sides 7 cm, 24 cm and 25 cm. Find the value of 7² + 24².",
          a: "Solution:\n7² + 24² = 49 + 576\n∴ 625."
        },
        {
          q: "17. Two similar triangles have corresponding sides 6 cm and 15 cm. If the area of the smaller triangle is 20 cm², find the area of the larger triangle.",
          a: "Solution:\nArea ratio = 6²:15² = 36:225 = 4:25\n20/A = 4/25\n4A = 500\n∴ A = 125 cm²."
        },
        {
          q: "18. A right triangle has legs 9 cm and 12 cm. Find its hypotenuse.",
          a: "Solution:\nHypotenuse² = 9² + 12²\n= 81 + 144 = 225\nHypotenuse = √225\n∴ 15 cm."
        },
        {
          q: "19. In ΔABC, DE ∥ BC. If AD = 2 cm, AB = 6 cm and BC = 18 cm, find DE.",
          a: "Solution:\nAD/AB = DE/BC\n2/6 = DE/18\n6DE = 36\n∴ DE = 6 cm."
        },
        {
          q: "20. The corresponding sides of two similar triangles are in the ratio 7:9. Find the ratio of their areas.",
          a: "Solution:\nArea ratio = 7²:9²\n∴ 49:81."
        }
      ],

      short: [
        {
          q: "1. In ΔABC, DE ∥ BC. If AD = 4 cm, DB = 6 cm and AE = 5 cm, calculate EC and AC.",
          a: "Solution:\nBy BPT, AD/DB = AE/EC\n4/6 = 5/EC\n4EC = 30\nEC = 7.5 cm\nAC = AE + EC = 5 + 7.5\n∴ AC = 12.5 cm."
        },
        {
          q: "2. Two similar triangles have corresponding sides 8 cm and 12 cm. If the area of the smaller triangle is 40 cm², find the area of the larger triangle.",
          a: "Solution:\nSide ratio = 8:12 = 2:3\nArea ratio = 2²:3² = 4:9\n40/A = 4/9\n4A = 360\n∴ A = 90 cm²."
        },
        {
          q: "3. A ladder 10 m long reaches a window 8 m above the ground. Find the distance of its foot from the wall.",
          a: "Solution:\nLet the distance be x m.\nBy Pythagoras theorem:\n10² = 8² + x²\n100 = 64 + x²\nx² = 36\nx = 6 m."
        },
        {
          q: "4. The sides of two similar triangles are in the ratio 4:7. If the perimeter of the larger triangle is 56 cm, find the perimeter of the smaller triangle.",
          a: "Solution:\nSmaller perimeter / 56 = 4/7\nSmaller perimeter = 56 × 4/7\n= 8 × 4\n∴ 32 cm."
        },
        {
          q: "5. In ΔABC, DE ∥ BC. AD = 6 cm, AB = 9 cm and BC = 15 cm. Find DE and EC if AC = 12 cm.",
          a: "Solution:\nAD/AB = DE/BC\n6/9 = DE/15\n9DE = 90\nDE = 10 cm\nAlso, AD/AB = AE/AC\n6/9 = AE/12\n9AE = 72\nAE = 8 cm\nEC = AC − AE = 12 − 8 = 4 cm."
        },
        {
          q: "6. A triangle has sides 10 cm, 24 cm and 26 cm. Check whether it is right-angled.",
          a: "Solution:\nLargest side = 26 cm\n10² + 24² = 100 + 576 = 676\n26² = 676\nSince 10² + 24² = 26²,\n∴ The triangle is right-angled."
        },
        {
          q: "7. The areas of two similar triangles are 36 cm² and 81 cm². If a corresponding side of the smaller triangle is 10 cm, find the matching side of the larger triangle.",
          a: "Solution:\nArea ratio = 36:81 = 4:9\nSide ratio = √4:√9 = 2:3\n10/x = 2/3\n2x = 30\n∴ x = 15 cm."
        },
        {
          q: "8. A right triangle has hypotenuse 25 cm and one leg 7 cm. Find its other leg and perimeter.",
          a: "Solution:\nOther leg² = 25² − 7²\n= 625 − 49 = 576\nOther leg = 24 cm\nPerimeter = 7 + 24 + 25\n∴ 56 cm."
        },
        {
          q: "9. In ΔABC, DE ∥ BC. AD = 3 cm, DB = 4 cm and AC = 14 cm. Find AE and EC.",
          a: "Solution:\nAB = 3 + 4 = 7 cm\nAD/AB = AE/AC\n3/7 = AE/14\n7AE = 42\nAE = 6 cm\nEC = 14 − 6\n∴ EC = 8 cm."
        },
        {
          q: "10. Two similar triangles have perimeters 30 cm and 45 cm. If a side of the smaller triangle is 8 cm, find its corresponding side in the larger triangle and the area ratio.",
          a: "Solution:\nSide ratio = perimeter ratio = 30:45 = 2:3\nLarger side = 8 × 3/2 = 12 cm\nArea ratio = 2²:3²\n∴ Smaller : larger area = 4:9."
        }
      ],

      long: [
        {
          q: "1. In ΔABC, D lies on AB and E lies on AC such that DE ∥ BC. Given AD = 6 cm, DB = 4 cm, AE = 9 cm and BC = 20 cm, find AB, AC, EC and DE.",
          a: "Solution:\nStep 1: Find AB.\nAB = AD + DB\n= 6 + 4 = 10 cm\n\nStep 2: Use BPT.\nAD/DB = AE/EC\n6/4 = 9/EC\n6EC = 36\nEC = 6 cm\n\nStep 3: Find AC.\nAC = AE + EC\n= 9 + 6 = 15 cm\n\nStep 4: Find DE.\nAD/AB = DE/BC\n6/10 = DE/20\n10DE = 120\nDE = 12 cm\n\nFinal answers: AB = 10 cm, AC = 15 cm, EC = 6 cm and DE = 12 cm."
        },
        {
          q: "2. Two similar triangles have corresponding sides in the ratio 3:5. The perimeter of the smaller triangle is 36 cm and its area is 54 cm². Find the perimeter and area of the larger triangle.",
          a: "Solution:\nGiven side ratio = 3:5\n\nStep 1: Find the larger perimeter.\n36/P = 3/5\n3P = 180\nP = 60 cm\n\nStep 2: Find the area ratio.\nSmaller area : larger area = 3²:5²\n= 9:25\n\nStep 3: Calculate the larger area.\n54/A = 9/25\n9A = 54 × 25\nA = 1350/9\nA = 150 cm²\n\nFinal answers: Larger perimeter = 60 cm; larger area = 150 cm²."
        },
        {
          q: "3. A 13 m ladder is placed against a vertical wall. Its foot is 5 m from the wall. Calculate the height reached by the ladder. If the foot is moved 2 m farther away while the ladder remains the same length, find the new height.",
          a: "Solution:\nFirst position:\nLet height = h.\nBy Pythagoras theorem:\n13² = h² + 5²\n169 = h² + 25\nh² = 144\nh = 12 m\n\nSecond position:\nNew distance = 5 + 2 = 7 m\nLet new height = H.\n13² = H² + 7²\n169 = H² + 49\nH² = 120\nH = √120 = 2√30 m\nApproximately H = 10.95 m\n\nFinal answers: First height = 12 m; new height = 2√30 m (approximately 10.95 m)."
        },
        {
          q: "4. In ΔABC, DE ∥ BC. AD = 8 cm, AB = 12 cm, AC = 15 cm and the area of ΔADE is 40 cm². Find AE, EC, DE/BC and the area of ΔABC.",
          a: "Solution:\nStep 1: Find AE.\nAD/AB = AE/AC\n8/12 = AE/15\n12AE = 120\nAE = 10 cm\n\nStep 2: Find EC.\nEC = AC − AE\n= 15 − 10 = 5 cm\n\nStep 3: Find DE/BC.\nDE/BC = AD/AB\n= 8/12 = 2/3\n\nStep 4: Find the area of ΔABC.\nArea ratio ADE : ABC = (2/3)²\n= 4:9\n40/Area(ABC) = 4/9\n4 × Area(ABC) = 360\nArea(ABC) = 90 cm²\n\nFinal answers: AE = 10 cm, EC = 5 cm, DE/BC = 2/3 and area of ΔABC = 90 cm²."
        },
        {
          q: "5. A triangular park has sides 15 m, 20 m and 25 m. Verify that it is right-angled and calculate its area. A similar park has corresponding sides 9 m, 12 m and 15 m. Find the ratio of their areas.",
          a: "Solution:\nStep 1: Check Pythagoras theorem.\nLargest side = 25 m\n15² + 20² = 225 + 400\n= 625\n25² = 625\nBoth sides are equal.\nTherefore, the triangle is right-angled.\n\nStep 2: Calculate its area.\nArea = 1/2 × base × height\n= 1/2 × 15 × 20\n= 150 m²\n\nStep 3: Compare areas.\nCorresponding side ratio = 15:9 = 5:3\nArea ratio = 5²:3²\n= 25:9\n\nFinal answers: The triangle is right-angled; area = 150 m²; first park : second park area = 25:9."
        }
      ]
    },

    flashcards: [
      { q: "If corresponding sides are in ratio 2:3, what is the area ratio?", a: "2²:3² = 4:9." },
      { q: "Side ratio is 4:5. Find the area ratio.", a: "4²:5² = 16:25." },
      { q: "Side ratio is 3:7. Find the perimeter ratio.", a: "3:7." },
      { q: "Find the hypotenuse when legs are 3 cm and 4 cm.", a: "√(9 + 16) = 5 cm." },
      { q: "Find the hypotenuse when legs are 5 cm and 12 cm.", a: "√(25 + 144) = 13 cm." },
      { q: "Find the missing leg when hypotenuse = 10 cm and one leg = 6 cm.", a: "√(100 − 36) = 8 cm." },
      { q: "Find the missing leg when hypotenuse = 15 cm and one leg = 9 cm.", a: "√(225 − 81) = 12 cm." },
      { q: "Areas are in ratio 9:16. Find the side ratio.", a: "√9:√16 = 3:4." },
      { q: "Areas are in ratio 25:36. Find the side ratio.", a: "5:6." },
      { q: "AD = 4, DB = 6 and DE ∥ BC. If AE = 8, find EC.", a: "4/6 = 8/EC; EC = 12 cm." },
      { q: "AD = 3, AB = 9 and AC = 18. If DE ∥ BC, find AE.", a: "3/9 = AE/18; AE = 6 cm." },
      { q: "A corresponding side is 7 cm and the scale factor is 2. Find the new side.", a: "7 × 2 = 14 cm." },
      { q: "A side is 12 cm and the scale factor is 3/2. Find the new side.", a: "12 × 3/2 = 18 cm." },
      { q: "Similar triangles have perimeters 24 cm and 36 cm. Find the side ratio.", a: "24:36 = 2:3." },
      { q: "A small triangle has area 20 cm² and side ratio small:large = 2:3. Find the larger area.", a: "20/A = 4/9; A = 45 cm²." },
      { q: "A small triangle has perimeter 18 cm and side ratio small:large = 3:5. Find the larger perimeter.", a: "18/P = 3/5; P = 30 cm." },
      { q: "Find the hypotenuse for legs 8 cm and 15 cm.", a: "√(64 + 225) = 17 cm." },
      { q: "Find the missing leg for hypotenuse 26 cm and leg 10 cm.", a: "√(676 − 100) = 24 cm." },
      { q: "Find 6² + 8².", a: "36 + 64 = 100." },
      { q: "Is a triangle with sides 9, 12, 15 right-angled?", a: "9² + 12² = 81 + 144 = 225 = 15²; yes." },
      { q: "Find the area ratio for side ratio 6:11.", a: "36:121." },
      { q: "Find the side ratio for area ratio 49:64.", a: "7:8." },
      { q: "AB = 14 cm, AD = 6 cm and DE ∥ BC. Find DB.", a: "DB = AB − AD = 14 − 6 = 8 cm." },
      { q: "AE = 9 cm and EC = 5 cm. Find AC.", a: "AC = 9 + 5 = 14 cm." },
      { q: "If side ratio is 1:4, find the area ratio.", a: "1:16." },
      { q: "If area ratio is 1:25, find the side ratio.", a: "1:5." },
      { q: "A triangle has legs 7 cm and 24 cm. Find its hypotenuse.", a: "√(49 + 576) = 25 cm." },
      { q: "Hypotenuse = 41 cm, one leg = 9 cm. Find the other leg.", a: "√(1681 − 81) = √1600 = 40 cm." },
      { q: "Side ratio is 5:8. Find the area ratio.", a: "25:64." },
      { q: "A triangle has sides 12, 16, 20 cm. Find its perimeter.", a: "12 + 16 + 20 = 48 cm." }
    ],

    mcqs: [
      {
        q: "1. The side ratio of two similar triangles is 2:3. Their area ratio is:",
        options: ["2:3", "4:9", "8:27", "3:2"],
        answer: 1
      },
      {
        q: "2. The legs of a right triangle are 6 cm and 8 cm. Its hypotenuse is:",
        options: ["9 cm", "12 cm", "10 cm", "14 cm"],
        answer: 2
      },
      {
        q: "3. The hypotenuse is 13 cm and one leg is 5 cm. The other leg is:",
        options: ["8 cm", "10 cm", "12 cm", "18 cm"],
        answer: 2
      },
      {
        q: "4. The area ratio is 16:25. The corresponding side ratio is:",
        options: ["4:5", "16:25", "8:25", "5:4"],
        answer: 0
      },
      {
        q: "5. Similar triangles have perimeters 20 cm and 30 cm. Their side ratio is:",
        options: ["3:2", "2:3", "4:9", "1:3"],
        answer: 1
      },
      {
        q: "6. If AD = 4, DB = 6, DE ∥ BC and AE = 10, EC equals:",
        options: ["12 cm", "15 cm", "16 cm", "20 cm"],
        answer: 1
      },
      {
        q: "7. A right triangle has legs 9 cm and 12 cm. The hypotenuse is:",
        options: ["13 cm", "14 cm", "15 cm", "21 cm"],
        answer: 2
      },
      {
        q: "8. The side ratio is 3:5. The area ratio is:",
        options: ["3:5", "9:25", "6:10", "27:125"],
        answer: 1
      },
      {
        q: "9. A triangle has sides 8 cm, 15 cm and 17 cm. It is:",
        options: ["Right-angled", "Equilateral", "Impossible", "Not right-angled"],
        answer: 0
      },
      {
        q: "10. The areas of similar triangles are 49 cm² and 81 cm². Their side ratio is:",
        options: ["49:81", "7:9", "14:18", "9:7"],
        answer: 1
      },
      {
        q: "11. AD = 5 cm, AB = 10 cm and AC = 16 cm. If DE ∥ BC, AE is:",
        options: ["5 cm", "8 cm", "10 cm", "12 cm"],
        answer: 1
      },
      {
        q: "12. The legs of a right triangle are 5 cm and 12 cm. Its perimeter is:",
        options: ["25 cm", "30 cm", "17 cm", "20 cm"],
        answer: 0
      },
      {
        q: "13. A side of a triangle is 8 cm. The scale factor for enlargement is 3/2. The new side is:",
        options: ["10 cm", "12 cm", "16 cm", "24 cm"],
        answer: 1
      },
      {
        q: "14. The area ratio is 4:9. If the smaller corresponding side is 6 cm, the larger side is:",
        options: ["8 cm", "9 cm", "12 cm", "15 cm"],
        answer: 1
      },
      {
        q: "15. The hypotenuse is 25 cm and one leg is 7 cm. The other leg is:",
        options: ["18 cm", "20 cm", "24 cm", "32 cm"],
        answer: 2
      },
      {
        q: "16. The side ratio is 5:7. The area ratio is:",
        options: ["5:7", "10:14", "25:49", "125:343"],
        answer: 2
      },
      {
        q: "17. A triangle has sides 10 cm, 24 cm and 26 cm. The largest side squared is:",
        options: ["576", "625", "676", "729"],
        answer: 2
      },
      {
        q: "18. Similar triangles have side ratio 4:9. If a smaller side is 12 cm, its corresponding larger side is:",
        options: ["18 cm", "24 cm", "27 cm", "36 cm"],
        answer: 2
      },
      {
        q: "19. AD = 3 cm, DB = 5 cm and DE ∥ BC. If AE = 6 cm, EC is:",
        options: ["8 cm", "10 cm", "12 cm", "15 cm"],
        answer: 1
      },
      {
        q: "20. The area ratio of two similar triangles is 1:36. Their side ratio is:",
        options: ["1:6", "1:12", "1:18", "1:36"],
        answer: 0
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Triangles — Class 10 Mathematics",
    images: ["images/infographics/maths/triangles.jpg"],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Triangles content loaded.");
})();
           
(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "maths::Coordinate Geometry";

  const data = {
    overview:
      "Class 10 Mathematics — Coordinate Geometry. Numerical practice on distance formula, section formula, midpoint, area of triangles and collinearity. All solutions use step-by-step notebook formatting.",

    keyPoints: [
      "Distance formula: d = √[(x₂ − x₁)² + (y₂ − y₁)²].",
      "Midpoint: M = ((x₁ + x₂)/2, (y₁ + y₂)/2).",
      "Section formula for AP:PB = m:n gives P = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)).",
      "Area of a triangle = ½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|.",
      "If the calculated area of a triangle is 0, its three vertices are collinear.",
      "For points on the x-axis, y = 0; for points on the y-axis, x = 0."
    ],

    questions: {
      veryShort: [
        {
          q: "1. Find the distance between A(0,0) and B(3,4).",
          a: "Solution:\nd = √[(3 − 0)² + (4 − 0)²]\n= √(9 + 16)\n= √25\n∴ d = 5 units."
        },
        {
          q: "2. Find the distance between A(1,2) and B(4,6).",
          a: "Solution:\nd = √[(4 − 1)² + (6 − 2)²]\n= √(9 + 16)\n= √25\n∴ d = 5 units."
        },
        {
          q: "3. Find the midpoint of A(2,4) and B(6,8).",
          a: "Solution:\nM = ((x₁+x₂)/2, (y₁+y₂)/2)\n= ((2+6)/2, (4+8)/2)\n= (4,6)."
        },
        {
          q: "4. Find the distance between A(2,3) and B(2,9).",
          a: "Solution:\nd = √[(2−2)² + (9−3)²]\n= √(0 + 36)\n∴ d = 6 units."
        },
        {
          q: "5. Find the midpoint of A(−2,4) and B(6,8).",
          a: "Solution:\nM = ((−2+6)/2, (4+8)/2)\n= (4/2, 12/2)\n∴ M = (2,6)."
        },
        {
          q: "6. Find the distance between A(−1,0) and B(2,0).",
          a: "Solution:\nd = √[(2+1)² + (0−0)²]\n= √9\n∴ d = 3 units."
        },
        {
          q: "7. Find the midpoint of A(0,0) and B(8,6).",
          a: "Solution:\nM = ((0+8)/2, (0+6)/2)\n= (4,3)."
        },
        {
          q: "8. Find the distance between A(0,5) and B(0,−3).",
          a: "Solution:\nd = √[(0−0)² + (−3−5)²]\n= √64\n∴ d = 8 units."
        },
        {
          q: "9. Find the distance between A(−3,4) and B(1,1).",
          a: "Solution:\nd = √[(1+3)² + (1−4)²]\n= √(16+9)\n= √25\n∴ d = 5 units."
        },
        {
          q: "10. Find the midpoint of A(−4,−2) and B(2,6).",
          a: "Solution:\nM = ((−4+2)/2, (−2+6)/2)\n= (−2/2, 4/2)\n∴ M = (−1,2)."
        },
        {
          q: "11. Find the distance between A(3,−2) and B(3,4).",
          a: "Solution:\nd = √[(3−3)² + (4+2)²]\n= √36\n∴ d = 6 units."
        },
        {
          q: "12. Find the midpoint of A(1,−3) and B(5,7).",
          a: "Solution:\nM = ((1+5)/2, (−3+7)/2)\n= (3,2)."
        },
        {
          q: "13. Find the distance between A(−2,−3) and B(1,1).",
          a: "Solution:\nd = √[(1+2)² + (1+3)²]\n= √(9+16)\n= √25\n∴ d = 5 units."
        },
        {
          q: "14. Find the midpoint of A(4,2) and B(10,2).",
          a: "Solution:\nM = ((4+10)/2, (2+2)/2)\n= (7,2)."
        },
        {
          q: "15. Find the distance between A(−4,0) and B(4,0).",
          a: "Solution:\nd = √[(4+4)² + 0²]\n= √64\n∴ d = 8 units."
        },
        {
          q: "16. Find the point dividing A(0,0) and B(6,9) internally in the ratio 1:2.",
          a: "Solution:\nP = ((1×6+2×0)/3, (1×9+2×0)/3)\n= (6/3, 9/3)\n∴ P = (2,3)."
        },
        {
          q: "17. Find the point dividing A(2,4) and B(8,10) internally in the ratio 1:1.",
          a: "Solution:\nP = ((1×8+1×2)/2, (1×10+1×4)/2)\n= (10/2,14/2)\n∴ P = (5,7)."
        },
        {
          q: "18. Find the area of the triangle with vertices (0,0), (4,0), and (0,3).",
          a: "Solution:\nArea = ½ × base × height\n= ½ × 4 × 3\n∴ Area = 6 square units."
        },
        {
          q: "19. Find the distance between A(1,1) and B(4,5).",
          a: "Solution:\nd = √[(4−1)²+(5−1)²]\n= √(9+16)\n= √25\n∴ d = 5 units."
        },
        {
          q: "20. Find the midpoint of A(−6,8) and B(4,−2).",
          a: "Solution:\nM = ((−6+4)/2, (8−2)/2)\n= (−2/2, 6/2)\n∴ M = (−1,3)."
        }
      ],

      short: [
        {
          q: "1. Find the distance between A(−2,3) and B(4,−5).",
          a: "Solution:\nd = √[(4−(−2))² + (−5−3)²]\n= √[6² + (−8)²]\n= √(36+64)\n= √100\n∴ d = 10 units."
        },
        {
          q: "2. Find the point dividing A(2,3) and B(8,9) internally in the ratio 2:1.",
          a: "Solution:\nm = 2, n = 1\nP = ((2×8+1×2)/3, (2×9+1×3)/3)\n= (18/3,21/3)\n∴ P = (6,7)."
        },
        {
          q: "3. Find the area of the triangle with vertices A(1,1), B(5,1) and C(3,4).",
          a: "Solution:\nAB = 5−1 = 4 units\nHeight = 4−1 = 3 units\nArea = ½ × 4 × 3\n∴ Area = 6 square units."
        },
        {
          q: "4. Find the midpoint of A(−5,7) and B(3,−1), then find its distance from the origin.",
          a: "Solution:\nMidpoint M = ((−5+3)/2, (7−1)/2)\n= (−1,3)\nDistance from origin:\nd = √[(−1)²+3²]\n= √10 units."
        },
        {
          q: "5. Find the point dividing A(−4,2) and B(6,7) internally in the ratio 2:3.",
          a: "Solution:\nP = ((2×6+3×(−4))/5, (2×7+3×2)/5)\n= ((12−12)/5, (14+6)/5)\n= (0,20/5)\n∴ P = (0,4)."
        },
        {
          q: "6. Find the area of the triangle with vertices (2,3), (6,3) and (4,8).",
          a: "Solution:\nBase = 6−2 = 4 units\nHeight = 8−3 = 5 units\nArea = ½ × 4 × 5\n∴ Area = 10 square units."
        },
        {
          q: "7. Find the distance between A(−3,−4) and B(5,2).",
          a: "Solution:\nd = √[(5+3)²+(2+4)²]\n= √(64+36)\n= √100\n∴ d = 10 units."
        },
        {
          q: "8. Find the point dividing A(1,2) and B(7,8) internally in the ratio 1:2.",
          a: "Solution:\nP = ((1×7+2×1)/3, (1×8+2×2)/3)\n= (9/3,12/3)\n∴ P = (3,4)."
        },
        {
          q: "9. Find the value of k if the distance between A(2,3) and B(6,k) is 5 units.",
          a: "Solution:\n√[(6−2)²+(k−3)²] = 5\n16+(k−3)² = 25\n(k−3)² = 9\nk−3 = ±3\n∴ k = 6 or k = 0."
        },
        {
          q: "10. Check whether A(1,2), B(3,6) and C(5,10) are collinear using the slopes.",
          a: "Solution:\nSlope AB = (6−2)/(3−1) = 4/2 = 2\nSlope BC = (10−6)/(5−3) = 4/2 = 2\nBoth slopes are equal.\n∴ The three points are collinear."
        }
      ],

      long: [
        {
          q: "1. The points A(−2,4) and B(6,−2) are given. Find (i) AB, (ii) the midpoint of AB, and (iii) the distance of the midpoint from the origin.",
          a: "Solution:\n(i) Distance AB\nAB = √[(6−(−2))²+(−2−4)²]\n= √[8²+(−6)²]\n= √(64+36)\n= √100 = 10 units\n\n(ii) Midpoint M\nM = ((−2+6)/2, (4−2)/2)\n= (4/2,2/2)\n= (2,1)\n\n(iii) Distance from origin\nOM = √[(2−0)²+(1−0)²]\n= √(4+1)\n= √5 units\n\nFinal answers: AB = 10 units; M = (2,1); OM = √5 units."
        },
        {
          q: "2. Find the point P that divides A(−4,6) and B(8,−3) internally in the ratio 2:1. Then calculate AP and PB.",
          a: "Solution:\nStep 1: Apply the section formula.\nP = ((2×8+1×(−4))/3, (2×(−3)+1×6)/3)\n= ((16−4)/3, (−6+6)/3)\n= (4,0)\n\nStep 2: Calculate AP.\nAP = √[(4+4)²+(0−6)²]\n= √(64+36)\n= 10 units\n\nStep 3: Calculate PB.\nPB = √[(8−4)²+(−3−0)²]\n= √(16+9)\n= 5 units\n\nCheck: AP:PB = 10:5 = 2:1.\n∴ P = (4,0), AP = 10 units and PB = 5 units."
        },
        {
          q: "3. Find the area of the triangle with vertices A(−2,1), B(4,1) and C(1,6). Also find its perimeter.",
          a: "Solution:\nStep 1: Find the base AB.\nAB = 4−(−2) = 6 units\nHeight = 6−1 = 5 units\n\nStep 2: Find the area.\nArea = ½ × base × height\n= ½ × 6 × 5\n= 15 square units\n\nStep 3: Find AC.\nAC = √[(1+2)²+(6−1)²]\n= √(9+25)\n= √34 units\n\nStep 4: Find BC.\nBC = √[(1−4)²+(6−1)²]\n= √(9+25)\n= √34 units\n\nStep 5: Find the perimeter.\nPerimeter = AB + AC + BC\n= 6 + √34 + √34\n= 6 + 2√34 units\n≈ 17.66 units\n\nFinal answers: Area = 15 square units; perimeter = (6 + 2√34) units."
        },
        {
          q: "4. The points A(2,−3) and B(8,9) are joined. Find the coordinates of the point P that divides AB internally in the ratio 1:2. Also find the midpoint of AB and the distance AB.",
          a: "Solution:\nStep 1: Find P using the section formula.\nP = ((1×8+2×2)/3, (1×9+2×(−3))/3)\n= (12/3,3/3)\n= (4,1)\n\nStep 2: Find the midpoint M.\nM = ((2+8)/2, (−3+9)/2)\n= (5,3)\n\nStep 3: Find AB.\nAB = √[(8−2)²+(9−(−3))²]\n= √(36+144)\n= √180\n= 6√5 units\n\nFinal answers: P = (4,1); M = (5,3); AB = 6√5 units."
        },
        {
          q: "5. Find the value of k for which A(2,3), B(4,k) and C(6,7) are collinear. Then calculate the distance AB.",
          a: "Solution:\nStep 1: Use equal slopes for collinear points.\nSlope AB = (k−3)/(4−2) = (k−3)/2\nSlope BC = (7−k)/(6−4) = (7−k)/2\n\nEquate the slopes:\n(k−3)/2 = (7−k)/2\nk−3 = 7−k\n2k = 10\n∴ k = 5\n\nStep 2: Find AB using B(4,5).\nAB = √[(4−2)²+(5−3)²]\n= √(4+4)\n= √8\n= 2√2 units\n\nFinal answers: k = 5; AB = 2√2 units."
        }
      ]
    },

    flashcards: [
      { q: "Find the distance between (0,0) and (6,8).", a: "√(36+64) = 10 units." },
      { q: "Find the distance between (1,2) and (4,6).", a: "√(9+16) = 5 units." },
      { q: "Find the midpoint of (2,4) and (8,10).", a: "(5,7)." },
      { q: "Find the midpoint of (−4,2) and (6,8).", a: "(1,5)." },
      { q: "Find the distance between (−3,0) and (5,0).", a: "8 units." },
      { q: "Find the distance between (0,−2) and (0,7).", a: "9 units." },
      { q: "Find the distance between (−1,−2) and (2,2).", a: "√(9+16) = 5 units." },
      { q: "Find the midpoint of (−6,4) and (2,−8).", a: "(−2,−2)." },
      { q: "Find the midpoint of (3,5) and (7,9).", a: "(5,7)." },
      { q: "Find the distance between (−2,3) and (4,11).", a: "√(36+64) = 10 units." },
      { q: "Divide (0,0) and (9,6) in ratio 1:2.", a: "(3,2)." },
      { q: "Divide (2,4) and (8,10) in ratio 1:1.", a: "(5,7)." },
      { q: "Divide (1,2) and (7,8) in ratio 2:1.", a: "(5,6)." },
      { q: "Divide (−2,4) and (10,7) in ratio 1:2.", a: "(2,5)." },
      { q: "Find the area with vertices (0,0), (6,0), (0,4).", a: "½ × 6 × 4 = 12 square units." },
      { q: "Find the area with vertices (1,1), (5,1), (3,4).", a: "½ × 4 × 3 = 6 square units." },
      { q: "Find the area with vertices (2,2), (8,2), (5,7).", a: "½ × 6 × 5 = 15 square units." },
      { q: "Find the distance between (2,3) and (2,10).", a: "7 units." },
      { q: "Find the midpoint of (−8,−4) and (4,10).", a: "(−2,3)." },
      { q: "Find the distance between (−5,−12) and (0,0).", a: "√(25+144) = 13 units." },
      { q: "If distance between (2,3) and (6,k) is 5, find k.", a: "16 + (k−3)² = 25; k = 0 or 6." },
      { q: "Find the distance between (−4,1) and (2,9).", a: "√(36+64) = 10 units." },
      { q: "Find the midpoint of (−3,7) and (9,−1).", a: "(3,3)." },
      { q: "Divide (−4,2) and (6,7) in ratio 2:3.", a: "(0,4)." },
      { q: "Find the distance between (1,−1) and (5,2).", a: "√(16+9) = 5 units." },
      { q: "Find the area with vertices (0,0), (8,0), (0,5).", a: "½ × 8 × 5 = 20 square units." },
      { q: "Find the midpoint of (−2,−6) and (8,4).", a: "(3,−1)." },
      { q: "Find the distance between (−3,4) and (1,1).", a: "√(16+9) = 5 units." },
      { q: "Find the area with vertices (2,1), (6,1), (4,6).", a: "½ × 4 × 5 = 10 square units." },
      { q: "Find the distance between (−8,−15) and (0,0).", a: "√(64+225) = 17 units." }
    ],

    mcqs: [
      {
        q: "1. The distance between (0,0) and (3,4) is:",
        options: ["3 units", "4 units", "5 units", "7 units"],
        answer: 2
      },
      {
        q: "2. The midpoint of (2,4) and (6,8) is:",
        options: ["(3,6)", "(4,6)", "(4,4)", "(8,12)"],
        answer: 1
      },
      {
        q: "3. The distance between (1,2) and (4,6) is:",
        options: ["4 units", "5 units", "6 units", "7 units"],
        answer: 1
      },
      {
        q: "4. The midpoint of (−2,4) and (6,8) is:",
        options: ["(2,6)", "(4,6)", "(2,4)", "(−4,2)"],
        answer: 0
      },
      {
        q: "5. The point dividing (0,0) and (6,9) in ratio 1:2 is:",
        options: ["(4,6)", "(2,3)", "(3,2)", "(1,3)"],
        answer: 1
      },
      {
        q: "6. The distance between (0,5) and (0,−3) is:",
        options: ["2 units", "5 units", "8 units", "10 units"],
        answer: 2
      },
      {
        q: "7. The area of the triangle with vertices (0,0), (4,0), (0,3) is:",
        options: ["6 square units", "7 square units", "12 square units", "24 square units"],
        answer: 0
      },
      {
        q: "8. The distance between (−3,4) and (1,1) is:",
        options: ["4 units", "5 units", "6 units", "7 units"],
        answer: 1
      },
      {
        q: "9. The midpoint of (−4,−2) and (2,6) is:",
        options: ["(−1,2)", "(1,2)", "(−2,4)", "(2,−1)"],
        answer: 0
      },
      {
        q: "10. The point dividing (2,3) and (8,9) in ratio 2:1 is:",
        options: ["(4,5)", "(5,6)", "(6,7)", "(7,8)"],
        answer: 2
      },
      {
        q: "11. The distance between (−1,−2) and (2,2) is:",
        options: ["3 units", "4 units", "5 units", "6 units"],
        answer: 2
      },
      {
        q: "12. The area of the triangle with vertices (1,1), (5,1), (3,4) is:",
        options: ["4 square units", "6 square units", "8 square units", "12 square units"],
        answer: 1
      },
      {
        q: "13. If the distance between (2,3) and (6,k) is 5, the possible values of k are:",
        options: ["Only 0", "Only 6", "0 or 6", "3 or 5"],
        answer: 2
      },
      {
        q: "14. The distance between (−5,−12) and (0,0) is:",
        options: ["12 units", "13 units", "15 units", "17 units"],
        answer: 1
      },
      {
        q: "15. The midpoint of (−6,8) and (4,−2) is:",
        options: ["(−1,3)", "(1,3)", "(−2,5)", "(−1,5)"],
        answer: 0
      },
      {
        q: "16. The point dividing (−4,2) and (6,7) in ratio 2:3 is:",
        options: ["(2,4)", "(0,4)", "(1,5)", "(0,5)"],
        answer: 1
      },
      {
        q: "17. The distance between (−4,1) and (2,9) is:",
        options: ["8 units", "9 units", "10 units", "12 units"],
        answer: 2
      },
      {
        q: "18. The area of the triangle with vertices (0,0), (8,0), (0,5) is:",
        options: ["13 square units", "20 square units", "26 square units", "40 square units"],
        answer: 1
      },
      {
        q: "19. The midpoint of (−3,7) and (9,−1) is:",
        options: ["(3,3)", "(6,6)", "(−3,3)", "(3,4)"],
        answer: 0
      },
      {
        q: "20. The distance between (−8,−15) and (0,0) is:",
        options: ["15 units", "16 units", "17 units", "23 units"],
        answer: 2
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Coordinate Geometry — Class 10 Mathematics",
    images: ["images/infographics/maths/coordinate-geometry.jpg"],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Coordinate Geometry content loaded.");
})();
           
(function () {
  "use strict";

  const DB = window.CLASS10_CONTENT;
  const key = "maths::Introduction to Trigonometry";

  const data = {
    overview:
      "Class 10 Mathematics — Introduction to Trigonometry. Numerical practice on trigonometric ratios, standard angles, complementary angles, identities and finding unknown ratios. Solutions are presented in notebook style.",

    keyPoints: [
      "sin θ = Perpendicular/Hypotenuse",
      "cos θ = Base/Hypotenuse",
      "tan θ = Perpendicular/Base",
      "cosec θ = 1/sin θ; sec θ = 1/cos θ; cot θ = 1/tan θ.",
      "sin²θ + cos²θ = 1.",
      "1 + tan²θ = sec²θ.",
      "1 + cot²θ = cosec²θ.",
      "sin(90° − θ) = cos θ and cos(90° − θ) = sin θ.",
      "tan θ = sin θ/cos θ, provided cos θ ≠ 0."
    ],

    questions: {
      veryShort: [
        {
          q: "1. In a right triangle, perpendicular = 3 cm and hypotenuse = 5 cm. Find sin θ.",
          a: "Solution:\nsin θ = Perpendicular/Hypotenuse\n= 3/5\n∴ sin θ = 3/5."
        },
        {
          q: "2. If base = 4 cm and hypotenuse = 5 cm, find cos θ.",
          a: "Solution:\ncos θ = Base/Hypotenuse\n= 4/5\n∴ cos θ = 4/5."
        },
        {
          q: "3. If perpendicular = 3 cm and base = 4 cm, find tan θ.",
          a: "Solution:\ntan θ = Perpendicular/Base\n= 3/4."
        },
        {
          q: "4. Calculate sin 30° + cos 60°.",
          a: "Solution:\nsin 30° = 1/2\ncos 60° = 1/2\nSum = 1/2 + 1/2\n∴ Answer = 1."
        },
        {
          q: "5. Calculate sin 45° × cos 45°.",
          a: "Solution:\nsin 45° = 1/√2\ncos 45° = 1/√2\nProduct = 1/2\n∴ Answer = 1/2."
        },
        {
          q: "6. Find tan 45° + sin 30°.",
          a: "Solution:\ntan 45° = 1\nsin 30° = 1/2\nSum = 1 + 1/2\n∴ 3/2."
        },
        {
          q: "7. Find sec 60°.",
          a: "Solution:\ncos 60° = 1/2\nsec 60° = 1/cos 60°\n= 1/(1/2)\n∴ 2."
        },
        {
          q: "8. Find cosec 30°.",
          a: "Solution:\nsin 30° = 1/2\ncosec 30° = 1/sin 30°\n= 1/(1/2)\n∴ 2."
        },
        {
          q: "9. Find cot 45°.",
          a: "Solution:\ntan 45° = 1\ncot 45° = 1/tan 45°\n∴ cot 45° = 1."
        },
        {
          q: "10. Calculate sin² 30° + cos² 30°.",
          a: "Solution:\nsin² 30° = (1/2)² = 1/4\ncos² 30° = (√3/2)² = 3/4\nSum = 1/4 + 3/4\n∴ Answer = 1."
        },
        {
          q: "11. If sin θ = 3/5 and θ is acute, find cos θ.",
          a: "Solution:\nsin² θ + cos² θ = 1\ncos² θ = 1 − 9/25\n= 16/25\nSince θ is acute, cos θ > 0.\n∴ cos θ = 4/5."
        },
        {
          q: "12. If tan θ = 3/4, find cot θ.",
          a: "Solution:\ncot θ = 1/tan θ\n= 1/(3/4)\n∴ cot θ = 4/3."
        },
        {
          q: "13. Calculate 2 sin 30° + 3 cos 60°.",
          a: "Solution:\n= 2(1/2) + 3(1/2)\n= 1 + 3/2\n∴ 5/2."
        },
        {
          q: "14. Find tan 30° × tan 60°.",
          a: "Solution:\ntan 30° = 1/√3\ntan 60° = √3\nProduct = (1/√3) × √3\n∴ Answer = 1."
        },
        {
          q: "15. Calculate sin 60°/cos 30°.",
          a: "Solution:\nsin 60° = √3/2\ncos 30° = √3/2\nRatio = 1\n∴ Answer = 1."
        },
        {
          q: "16. Find sec² 45° − tan² 45°.",
          a: "Solution:\nsec 45° = √2, so sec² 45° = 2\ntan 45° = 1, so tan² 45° = 1\nDifference = 2 − 1\n∴ Answer = 1."
        },
        {
          q: "17. If cos θ = 12/13 and θ is acute, find sin θ.",
          a: "Solution:\nsin² θ = 1 − cos² θ\n= 1 − 144/169\n= 25/169\n∴ sin θ = 5/13."
        },
        {
          q: "18. Find cosec 90° + sec 0°.",
          a: "Solution:\ncosec 90° = 1/sin 90° = 1\nsec 0° = 1/cos 0° = 1\nSum = 1 + 1\n∴ Answer = 2."
        },
        {
          q: "19. Find sin 0° + cos 0°.",
          a: "Solution:\nsin 0° = 0\ncos 0° = 1\nSum = 0 + 1\n∴ Answer = 1."
        },
        {
          q: "20. Calculate tan 60°/cot 30°.",
          a: "Solution:\ntan 60° = √3\ncot 30° = √3\nRatio = √3/√3\n∴ Answer = 1."
        }
      ],

      short: [
        {
          q: "1. If sin θ = 5/13 and θ is acute, find cos θ and tan θ.",
          a: "Solution:\nsin θ = 5/13\nLet perpendicular = 5 and hypotenuse = 13.\nBase² = 13² − 5²\n= 169 − 25 = 144\nBase = 12\n\ncos θ = Base/Hypotenuse = 12/13\ntan θ = Perpendicular/Base = 5/12\n∴ cos θ = 12/13, tan θ = 5/12."
        },
        {
          q: "2. Evaluate (sin 30° + cos 60°)/(tan 45°).",
          a: "Solution:\n= (1/2 + 1/2)/1\n= 1/1\n∴ Answer = 1."
        },
        {
          q: "3. Evaluate sin² 60° + cos² 30° + tan² 45°.",
          a: "Solution:\nsin² 60° = 3/4\ncos² 30° = 3/4\ntan² 45° = 1\nSum = 3/4 + 3/4 + 1\n= 3/2 + 1\n∴ Answer = 5/2."
        },
        {
          q: "4. If tan θ = 8/15 and θ is acute, find sin θ and cos θ.",
          a: "Solution:\nPerpendicular = 8, base = 15\nHypotenuse² = 8² + 15²\n= 64 + 225 = 289\nHypotenuse = 17\nsin θ = 8/17\ncos θ = 15/17."
        },
        {
          q: "5. Evaluate (sec² 60° − tan² 60°) + sin 30°.",
          a: "Solution:\nsec 60° = 2, so sec² 60° = 4\ntan 60° = √3, so tan² 60° = 3\nExpression = 4 − 3 + 1/2\n= 1 + 1/2\n∴ 3/2."
        },
        {
          q: "6. If cos θ = 7/25 and θ is acute, find sin θ and tan θ.",
          a: "Solution:\nBase = 7, hypotenuse = 25\nPerpendicular² = 25² − 7²\n= 625 − 49 = 576\nPerpendicular = 24\nsin θ = 24/25\ntan θ = 24/7."
        },
        {
          q: "7. Evaluate (2 sin 30° + 3 cos 60°) × tan 45°.",
          a: "Solution:\n= [2(1/2) + 3(1/2)] × 1\n= (1 + 3/2) × 1\n∴ Answer = 5/2."
        },
        {
          q: "8. If sec θ = 13/12 and θ is acute, find tan θ.",
          a: "Solution:\nsec θ = Hypotenuse/Base = 13/12\nLet hypotenuse = 13 and base = 12.\nPerpendicular² = 13² − 12²\n= 169 − 144 = 25\nPerpendicular = 5\ntan θ = 5/12."
        },
        {
          q: "9. Evaluate sin 60° cos 30° + sin 30° cos 60°.",
          a: "Solution:\n= (√3/2)(√3/2) + (1/2)(1/2)\n= 3/4 + 1/4\n∴ Answer = 1."
        },
        {
          q: "10. If tan θ = 5/12 and θ is acute, find sec θ and cosec θ.",
          a: "Solution:\nPerpendicular = 5, base = 12\nHypotenuse = √(25 + 144) = 13\nsec θ = Hypotenuse/Base = 13/12\ncosec θ = Hypotenuse/Perpendicular = 13/5."
        }
      ],

      long: [
        {
          q: "1. If sin θ = 8/17 and θ is acute, find cos θ, tan θ, cot θ, sec θ and cosec θ.",
          a: "Solution:\nGiven sin θ = 8/17\nPerpendicular = 8, hypotenuse = 17\n\nStep 1: Find the base.\nBase² = 17² − 8²\n= 289 − 64 = 225\nBase = 15\n\nStep 2: Calculate the ratios.\ncos θ = 15/17\ntan θ = 8/15\ncot θ = 15/8\nsec θ = 17/15\ncosec θ = 17/8\n\nFinal answers:\ncos θ = 15/17, tan θ = 8/15, cot θ = 15/8, sec θ = 17/15, cosec θ = 17/8."
        },
        {
          q: "2. Evaluate: (sin 30° + cos 60°)² + (tan 45° − cos 60°)².",
          a: "Solution:\nExpression = (1/2 + 1/2)² + (1 − 1/2)²\n= (1)² + (1/2)²\n= 1 + 1/4\n∴ Answer = 5/4."
        },
        {
          q: "3. If tan θ = 7/24 and θ is acute, calculate sin θ, cos θ, sec θ and cosec θ.",
          a: "Solution:\nGiven tan θ = 7/24\nPerpendicular = 7, base = 24\n\nStep 1: Find hypotenuse.\nH² = 7² + 24²\n= 49 + 576 = 625\nH = 25\n\nStep 2: Find ratios.\nsin θ = 7/25\ncos θ = 24/25\nsec θ = 25/24\ncosec θ = 25/7\n\nFinal answers: sin θ = 7/25, cos θ = 24/25, sec θ = 25/24 and cosec θ = 25/7."
        },
        {
          q: "4. Prove numerically that (1 − sin² 30°)/cos² 30° = 1, and then calculate its value.",
          a: "Solution:\nLHS = (1 − sin² 30°)/cos² 30°\n= [1 − (1/2)²]/(√3/2)²\n= (1 − 1/4)/(3/4)\n= (3/4)/(3/4)\n= 1\nRHS = 1\n∴ LHS = RHS = 1."
        },
        {
          q: "5. If cos θ = 15/17 and θ is acute, calculate sin θ, tan θ and the value of (1 + tan² θ).",
          a: "Solution:\nGiven cos θ = 15/17\nBase = 15, hypotenuse = 17\n\nStep 1: Find perpendicular.\nP² = 17² − 15²\n= 289 − 225 = 64\nP = 8\n\nStep 2: Find sin θ and tan θ.\nsin θ = 8/17\ntan θ = 8/15\n\nStep 3: Calculate 1 + tan² θ.\n= 1 + (8/15)²\n= 1 + 64/225\n= 289/225\n= (17/15)²\n\nFinal answers: sin θ = 8/17, tan θ = 8/15 and 1 + tan² θ = 289/225."
        }
      ]
    },

    flashcards: [
      { q: "Find sin 30°.", a: "1/2." },
      { q: "Find cos 60°.", a: "1/2." },
      { q: "Find tan 45°.", a: "1." },
      { q: "Find sin 90°.", a: "1." },
      { q: "Find cos 0°.", a: "1." },
      { q: "Find tan 30°.", a: "1/√3." },
      { q: "Find tan 60°.", a: "√3." },
      { q: "Find sin 45°.", a: "1/√2." },
      { q: "Find cos 45°.", a: "1/√2." },
      { q: "Find sin 60°.", a: "√3/2." },
      { q: "Find cos 30°.", a: "√3/2." },
      { q: "Find sec 60°.", a: "2." },
      { q: "Find cosec 30°.", a: "2." },
      { q: "Find cot 45°.", a: "1." },
      { q: "Find sec 0°.", a: "1." },
      { q: "Find cosec 90°.", a: "1." },
      { q: "Calculate sin² 30° + cos² 30°.", a: "1/4 + 3/4 = 1." },
      { q: "Calculate tan 30° × tan 60°.", a: "(1/√3) × √3 = 1." },
      { q: "If sin θ = 3/5, find cos θ for acute θ.", a: "4/5." },
      { q: "If cos θ = 5/13, find sin θ for acute θ.", a: "12/13." },
      { q: "If tan θ = 3/4, find cot θ.", a: "4/3." },
      { q: "If tan θ = 5/12, find sec θ for acute θ.", a: "Hypotenuse = 13; sec θ = 13/12." },
      { q: "If sin θ = 8/17, find tan θ for acute θ.", a: "Base = 15; tan θ = 8/15." },
      { q: "Calculate sec² 45° − tan² 45°.", a: "2 − 1 = 1." },
      { q: "Calculate sin 30° + cos 60°.", a: "1/2 + 1/2 = 1." },
      { q: "Calculate sin 60°/cos 30°.", a: "1." },
      { q: "Calculate 2 sin 30° + 4 cos 60°.", a: "1 + 2 = 3." },
      { q: "If cos θ = 12/13, find sin θ for acute θ.", a: "5/13." },
      { q: "Calculate cosec 30° + sec 60°.", a: "2 + 2 = 4." },
      { q: "Calculate tan 45° + cot 45°.", a: "1 + 1 = 2." }
    ],

    mcqs: [
      {
        q: "1. The value of sin 30° is:",
        options: ["1", "1/2", "√3/2", "0"],
        answer: 1
      },
      {
        q: "2. The value of cos 60° is:",
        options: ["√3/2", "1", "1/2", "0"],
        answer: 2
      },
      {
        q: "3. The value of tan 45° is:",
        options: ["0", "1/√3", "1", "√3"],
        answer: 2
      },
      {
        q: "4. The value of tan 60° is:",
        options: ["1", "√3", "1/√3", "2"],
        answer: 1
      },
      {
        q: "5. The value of sec 60° is:",
        options: ["1/2", "√3", "2", "1"],
        answer: 2
      },
      {
        q: "6. If sin θ = 3/5 and θ is acute, cos θ equals:",
        options: ["3/4", "4/5", "5/3", "2/5"],
        answer: 1
      },
      {
        q: "7. If tan θ = 3/4, cot θ equals:",
        options: ["3/4", "4/3", "5/4", "1"],
        answer: 1
      },
      {
        q: "8. The value of sin² 30° + cos² 30° is:",
        options: ["0", "1/2", "1", "2"],
        answer: 2
      },
      {
        q: "9. The value of tan 30° × tan 60° is:",
        options: ["0", "1", "√3", "3"],
        answer: 1
      },
      {
        q: "10. The value of cosec 30° is:",
        options: ["1", "√3", "2", "1/2"],
        answer: 2
      },
      {
        q: "11. If cos θ = 12/13 and θ is acute, sin θ equals:",
        options: ["12/5", "5/13", "13/12", "1/13"],
        answer: 1
      },
      {
        q: "12. The value of sec² 45° − tan² 45° is:",
        options: ["0", "1", "2", "3"],
        answer: 1
      },
      {
        q: "13. The value of sin 60°/cos 30° is:",
        options: ["1/2", "√3", "1", "2"],
        answer: 2
      },
      {
        q: "14. If tan θ = 5/12 and θ is acute, sec θ equals:",
        options: ["12/13", "13/12", "13/5", "5/13"],
        answer: 1
      },
      {
        q: "15. The value of sin 0° + cos 0° is:",
        options: ["0", "1", "2", "−1"],
        answer: 1
      },
      {
        q: "16. The value of cosec 90° + sec 0° is:",
        options: ["0", "1", "2", "3"],
        answer: 2
      },
      {
        q: "17. If sin θ = 8/17 and θ is acute, tan θ equals:",
        options: ["8/15", "15/8", "8/17", "17/15"],
        answer: 0
      },
      {
        q: "18. The value of 2 sin 30° + 3 cos 60° is:",
        options: ["1", "2", "5/2", "3"],
        answer: 2
      },
      {
        q: "19. The value of cot 45° + tan 45° is:",
        options: ["0", "1", "2", "√3"],
        answer: 2
      },
      {
        q: "20. If cos θ = 15/17 and θ is acute, sin θ equals:",
        options: ["15/8", "8/17", "8/15", "17/8"],
        answer: 1
      }
    ]
  };

  DB.chapterContent[key] = data;

  DB.infographicImages[key] = {
    title: "Introduction to Trigonometry — Class 10 Mathematics",
    images: ["images/infographics/maths/introduction-to-trigonometry.jpg"],
    status: "awaiting-image",
    note: "Add the actual infographic image at the listed path."
  };

  console.log("Class 10 Hub: Introduction to Trigonometry content loaded.");
})();
           
