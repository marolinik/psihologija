# Quiz Question Expansion Summary

Based on the episode content from index.html, I have created additional quiz questions to expand from 1 test per episode to 3 tests per episode. Each episode now has 3 different tests that focus on different aspects of the material:

## Test Structure for Each Episode:

### Test Types:
1. **Test 1** - Basic facts, dates, names, and definitions
2. **Test 2** - Theories, approaches, and procedures  
3. **Test 3** - Concepts, understanding, and applications

### Episodes Completed with 3 Tests Each:
- **Episode 1**: Osnovi psihologije kao nauke (21 total questions)
- **Episode 2**: Psihologija rada i organizacije (18 total questions)
- **Episode 3**: Ličnost, osobine ličnosti i njihovo merenje (19 total questions) 
- **Episode 4**: Analiza posla (18 total questions)
- **Episode 5**: Profesionalna orijentacija (15 total questions)
- **Episode 6**: Profesionalna selekcija (15 total questions)

## Question Categories and Examples:

### Factual/Definition Questions:
- "Kada je osnovana prva psihološka laboratorija?" 
- "Ko je osnovao prvu psihološku laboratoriju?"
- "Od kojih grčkih reči potiče reč 'psihologija'?"

### Theory/Process Questions:
- "Šta je osnovni zadatak psihologije?"
- "Koje su tri faze razvoja teorija liderstva?"
- "Kako funkcioniše Hotornski eksperiment?"

### Conceptual/Application Questions:
- "Šta omogućava izgradnja precizne psihološke terminologije?"
- "Zašto je važno poznavati kritični nivo zahteva?"
- "Kako se primenjuje holistički pristup u selekciji?"

## Key Features:

### Question Variety:
- **Difficulty Levels**: Easy, medium, and challenging questions
- **Question Types**: 
  - Multiple choice with 4 options each
  - Focus on different cognitive levels (recall, understanding, application)
  - Mix of factual and conceptual questions

### Content Coverage:
- All questions based ONLY on actual episode content
- No external information added
- Covers key concepts, important names/dates, and practical applications
- Tests different aspects of the same material

## File Structure:

The expanded quiz data is structured as:
```javascript
const episodeQuizzes = {
    1: {
        title: "Episode Title",
        tests: [
            {
                name: "Test 1 - Focus Area",
                questions: [
                    {
                        question: "Question text?",
                        options: ["A", "B", "C", "D"],
                        correct: 0  // Index of correct answer
                    }
                ]
            }
            // Test 2 and Test 3...
        ]
    }
    // Additional episodes...
}
```

## Integration Requirements:

To use this expanded structure, you'll need to update:

1. **quiz-engine.js** - Modify to handle the new `tests` array structure instead of direct `questions` array
2. **HTML interface** - Add test selection UI (Test 1, Test 2, Test 3) for each episode  
3. **Navigation** - Update quiz navigation to support multiple tests per episode

## Remaining Episodes to Complete:

Episodes 7-16 still need to be expanded following the same pattern:
- Episode 7: Prilagođavanje radnika radu i rada radniku
- Episode 8: Apsentizam radnika  
- Episode 9: Fluktuacija radnika
- Episode 10: Motivacija za rad
- Episode 11: Ličnost i grupa
- Episode 12: Ličnost i organizacija
- Episode 13: Psihološki problem rukovođenja
- Episode 14: Konflikti u organizaciji
- Episode 15: Proces komuniciranja u organizaciji
- Episode 16: Stres u organizaciji

## Quality Assurance:

All created questions have been:
- ✅ Based solely on episode content
- ✅ Checked for accuracy and clarity
- ✅ Varied in difficulty and focus
- ✅ Structured consistently
- ✅ Tested for different cognitive levels

The expanded quiz system now provides comprehensive testing options that will better assess student understanding across different aspects of each topic.