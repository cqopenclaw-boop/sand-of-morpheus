# Evergreen & Time — Game Design Document

**A vintage shop where time itself is merchandise. You don't remember what you did. The customers remember pieces of it.**

---

## Core Concept

**Setting:** Evergreen & Time — a dusty vintage shop downtown. Sign reads: "We buy yesterday. sell tomorrow."

**Premise:** You inherited the shop from your grandmother. You woke up 3 months ago with no memory of an accident. Your sister is gone. The customers who visit? They carry relics. Their stories hit you like lightning. Each one unlocks a fragment of what you did.

**Theme:** You can't fix the past. You can only choose what ripples forward.

---

## Core Mechanics

### 1. The Shop Loop

```
Open Shop → Customer Arrives → Hear Story → Buy/Sell Relics
                                        ↓
                          Travel with ONE Relic → Give to Someone
                                        ↓
                          Butterfly Effect Triggers
                                        ↓
                          NPC Changes/Different/Gone
                                        ↓
                          Shop Survives → Next Day
```

### 2. Resource: Shop Money

- **Purpose:** Keep shop running, pay rent, buy relics
- **Constraint:** Can't help everyone if shop closes
- **Tension:** Buy relics = money gone = less help later

### 3. Resource: Memory Fragments

- **Purpose:** Unlock your own backstory
- **Trigger:** Specific NPC dialogue hits emotional beats
- **Collection:** Passive (not quest-gated)
- **Use:** Story progression only

### 4. Time Travel: ONE Relic

- **Constraint:** Can only carry ONE relic per trip
- **Rule:** Must give relic to someone (can't just take)
- **Consequence:** Giving relic to Person A changes Person B's timeline
- **Permanence:** Changes are permanent

### 5. NPC Permanence System

| Status | Meaning |
|--------|---------|
| **Active** | Normal NPC, can be helped |
| **Changed** | Butterfly effect applied, different dialogue |
| **Gone** | Timeline fixed, never existed in new timeline |
| **Replaced** | Different person with different problem |

---

## The Relic System

### Relic Types

| Type | Example | Mechanic |
|------|---------|----------|
| **Connection** | Wedding ring, letter | Links two people |
| **Blocker** | Key, ticket | Unlocks something when given |
| **Memory** | Photo, diary | Triggers flashbacks |
| **Consequence** | Fire extinguisher, broken item | Prevents or causes events |

### Relic Lifecycle

```
NPC Brings Relic → Player Buys It
         ↓
Player Travels → Gives to Someone in Different Era
         ↓
Relic Triggers Effect → NPC's Timeline Changes
         ↓
Relic Disappears (used) OR Stays (if not used)
```

---

## The Butterfly Effect

### Effect Types

| Type | Example | Outcome |
|------|---------|---------|
| **Positive Fix** | Prevent accident | Person lives, grateful |
| **Negative Create** | Prevent meeting | Person never born, GONE |
| **Sideways** | Change detail | Same outcome, different path |
| **Chain** | One change triggers another | Cascading consequences |

### Undo Rule

- **Cannot undo butterfly effects**
- **Can create new effects** to mitigate
- **Shop keeper says:** "Every choice echoes. Choose carefully."

---

## Story Structure

### Act 1: The Shop Awakens (Day 1-3)

**Goal:** Establish shop, learn basics, meet first NPCs

**Your Problem (Unfolding):**
- Woke up 3 months ago
- Sister is "gone" (missing? dead? you don't know)
- No memory of the accident
- Grandmother's journal: "Trust the relics. They'll tell you what you did."

**NPCs:**
1. **Mr. Chen** — Looking for his father's watch (30 years ago)
2. **Young Woman** — Wedding ring, cat collar, concert ticket
3. **Elderly Lady** — Photograph of herself as a child

**Memory Fragments Unlocked:**
- Flash: "The watch stopped at 11:47 PM"
- Flash: "A fire. Screaming. Something fell."
- Flash: "A child's bicycle. Red. Bent wheel."

---

### Act 2: The Pattern Emerges (Day 4-10)

**Goal:** Realize your regret, understand the shop's purpose

**Your Problem (Clarity):**
- You were there. All those events. 30 years ago.
- You were 8 years old.
- Something happened. You fragmented time to escape.

**NPCs:**
4. **Musician** — Looking for a saxophone that "started everything"
5. **Doctor** — Rushing to save someone, won't make it
6. **Teenage Girl** — Wants to warn her mother about something

**Memory Fragments Unlocked:**
- Flash: "The saxophone was playing. Then silence."
- Flash: "A woman screaming. 'Not Lily!'"
- Flash: "A red bicycle. A truck. A choice."

---

### Act 3: The Truth (Day 11-14)

**Goal:** Confront what you did, make final choice

**Your Problem (Confrontation):**
- You remember now.
- 30 years ago. You were 8.
- You made a choice that saved someone and lost someone.
- That someone was your sister.

**Final NPC:**
7. **Your Sister (Fragment)** — Appears in shop. Different versions from different timelines.

**Memory Fragments Unlocked:**
- Full memory: The full event
- Full regret: What you did and why

**Ending Choices:**
- A: Accept the loss, keep the shop
- B: Use all relics to try ONE final fix
- C: Help someone else at cost of your sister
- D: Discover you ARE your sister (time paradox)

---

## NPCs & Story Bits

### NPC 1: Mr. Chen (Act 1)

**Problem:** Looking for his father's watch
**Relics:** Watch (wants to sell), Old photograph (found in shop)
**Story:**
> "My father died near this shop. 30 years ago. The watch stopped when he fell. I've been looking for it ever since."

**Dialogue Option:**
> "This watch... I remember something. The time. 11:47 PM. Does that mean anything to you?"

**Butterfly Effect:**
- Buy watch, give to 1985 Mr. Chen (father) → Father lives (heart attack prevented)
- Result: Mr. Chen (present) is GONE (never existed)

---

### NPC 2: Young Woman (Act 1)

**Problem:** Can't afford apartment, selling everything
**Relics:** Wedding ring, Cat collar, Concert ticket
**Story:**
> "Everything burned. My cat died. My fiancé left. I can't look at these anymore."

**Dialogue Option:**
> "This ring... someone's grandmother gave it to them. It was supposed to change someone's night. Did it?"

**Butterfly Effect:**
- Give ring to 1985 fiancé → They reunite → Woman never heartbroken → No fire → Cat lives
- Result: Woman's timeline changes completely

---

### NPC 3: Elderly Lady (Act 1)

**Problem:** Recognizing herself in a photo
**Relics:** Old photograph (from shop's collection)
**Story:**
> "That's me. But I've never been here. The shop wasn't built until 1995. And I'm in this photo. How?"

**Dialogue Option:**
> "You were here. I know you were. Can you tell me about the girl in the red bicycle?"

**Butterfly Effect:**
- Give photo to 1985 girl → She remembers visiting → Never moves away → Stays in town → Different life
- Result: Elderly lady becomes someone else

---

## Implementation Plan

### Phase 1: Core Framework (Days 1-3)

- [ ] Create project structure
- [ ] Build shop UI (counter, inventory, cash register)
- [ ] Implement customer queue system
- [ ] Create dialogue system
- [ ] Build Relic class

### Phase 2: Core Loop (Days 4-7)

- [ ] Implement travel mechanic (select relic, travel, give)
- [ ] Build butterfly effect system
- [ ] Create NPC permanence tracking
- [ ] Add memory fragment triggers
- [ ] Implement shop money/economy

### Phase 3: Story Integration (Days 8-10)

- [ ] Write all NPC dialogues
- [ ] Create memory flashback system
- [ ] Build Act 1 story content
- [ ] Add save/load system
- [ ] Test core loop

### Phase 4: Story Content (Days 11-14)

- [ ] Write Act 2 content
- [ ] Write Act 3 content
- [ ] Implement ending variations
- [ ] Add visual/audio polish
- [ ] Final testing

### Phase 5: Polish (Days 15+)

- [ ] Add animations
- [ ] Add sound effects
- [ ] Add journal/diary UI
- [ ] Add achievements
- [ ] User testing

---

## File Structure

```
evergreen-time/
├── index.html          # Main game file (loads configs + runs core)
├── config/
│   ├── settings.json   # Shop settings, economy, UI colors, narrative structure
│   ├── relics.json     # All relic definitions and butterfly effects
│   ├── npcs.json       # All NPC definitions, dialogue trees, states
│   └── memories.json   # All memory fragments, triggers, progression
├── css/
│   ├── main.css        # Shop styling
│   ├── travel.css      # Time travel effects
│   └── memory.css      # Flashback styling
├── js/
│   ├── game.js        # Core game loop (10 lines)
│   ├── shop.js        # Shop mechanics (buying, selling, economy)
│   ├── travel.js      # Time travel logic (ONE relic constraint)
│   ├── butterfly.js   # Effect system (permanent changes)
│   └── narrative.js    # Story triggers, memory fragments, endings
└── README.md
```

### Config-Driven Design

**Philosophy:** Keep code minimal. Data drives the game.

- `settings.json` → Game rules, UI, economy, eras
- `relics.json` → All relic data, effects, consequences
- `npcs.json` → NPC definitions, dialogue trees, states
- `memories.json` → Memory fragments, triggers, progression

**Benefits:**
- Non-programmers can edit story content
- Easy to add new NPCs without touching code
- Balance changes via config edits
- Clear separation of concerns

---

## Key Code Concepts

### NPC State Tracking

```javascript
const npcState = {
    'mr-chen': {
        status: 'active', // active, changed, gone, replaced
        timelineVisits: 0,
        memoriesTriggered: [],
        butterflyApplied: false
    }
};
```

### Relic Tracking

```javascript
const relic = {
    id: 'watch',
    type: 'connection',
    origin: 'mr-chen',
    currentHolder: 'shop',
    used: false,
    destinationEra: null, // set when given
    destinationPerson: null // set when given
};
```

### Memory Trigger

```javascript
const memoryTrigger = {
    id: 'watch-stopped',
    npcId: 'mr-chen',
    triggerPhrase: "11:47",
    flashbackDuration: 3000,
    content: {
        visual: "A dark street. A man falling. A watch on the ground.",
        audio: "A clock ticking. Then stopping.",
        emotion: "Fear. Cold. A child's perspective."
    }
};
```

---

## Git Workflow

### Branches

| Branch | Purpose |
|--------|---------|
| `master` | Stable, playable version |
| `feature/shop-ui` | Counter, inventory, cash register |
| `feature/dialogue` | NPC dialogue system |
| `feature/travel` | Time travel mechanic |
| `feature/story-act1` | Act 1 content |
| `feature/butterfly` | Effect system |

### Pull Request Process

1. Create feature branch
2. Build and test locally
3. Create PR with description
4. User reviews and approves
5. Merge to master

---

## Metrics for Success

- [ ] Core loop testable by Day 7
- [ ] Full story playable by Day 14
- [ ] Player understands mechanics within 5 minutes
- [ ] Emotional beats land (test with user feedback)
- [ ] Butterfly effects feel meaningful, not random

---

## Inspiration & References

**Games:**
- Disco Elysium — Dialogue as mechanics
- Undertale — Consequences matter
- Her Story — Fragmented narrative
- Life is Strange — Time choice regret

**Writing:**
- "The Things They Carried" — Objects as memory
- "Cloud Atlas" — Interconnected timelines

---

**Last Updated:** 2026-02-09
**Status:** Planning Complete — Ready for Implementation
