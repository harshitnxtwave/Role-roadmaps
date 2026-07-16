# NextWave Academy - Role Roadmaps Portal

An interactive, high-fidelity Single Page Application (SPA) designed to demonstrate the career-aligned **Role Roadmaps (Path-based learning)** learning portal feature.

## Tech Stack
- **Structure**: Semantic HTML5 & SVG Vector elements.
- **Styling**: Vanilla CSS3 using custom properties (CSS variables), CSS Flexbox/Grid, and glassmorphic overlays (`backdrop-filter`).
- **Logic**: Vanilla JavaScript with native state synchronization and persistence using `localStorage`.
- **Assets**: Dynamic Lucide icons and Adventurer SVG avatars.

---

## Running the Application

Since this codebase runs purely in the browser with zero external framework dependencies, you can launch a local development server using Python:

1. Open your terminal in the workspace directory.
2. Run the following command:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your browser and navigate to:
   [http://localhost:8000](http://localhost:8000)

---

## Interactive Feature Guide

You can test all user stories end-to-end:

### 1. Career Path Selector
- Explore the **Role Roadmaps Grid** displaying 7 tech careers (SDE, Frontend, Data Analyst, Associate Software Engineer, and Backend Node/Python/Java).
- Click the **Details** button on any card to view the **Detailed Overview Modal** showing what they learn, hiring partners, and key benefits.
- Use the **sub-tabs** (All, Engineering, Web Dev, Data Analytics) to quickly filter careers.
- Try the **Career Path Finder Quiz** to answer 3 quick questions and receive a recommended career path highlighted in the grid.

### 2. Active Roadmap (2-Column Layout)
- Clicking **Start Role** opens the active roadmap dashboard.
- The dashboard is organized into two visual sections:
  - **Left Column (Curriculum & Certificate)**: Shows the sequence of learning courses. Click **Study (+25%)** or **Finish** to simulate progress. At the bottom of this column is the **Skills Certificate Glimpse Card**, which remains locked until the Job Readiness Assessment is cleared.
  - **Right Column (Parallel Assessments & Job Boards)**: Prominently hosts the **Fast-Track Assessments** (Internship Prep and Job Readiness) and the **Hiring Boards** status panel.

### 3. Parallel Skippable Assessments
- You do NOT need to complete the courses to unlock assessments. You can click **Take Test** (Internship Prep) or **Take Exam** (Job Readiness) at any time.
- Clear the simulated assessments:
  - Passing **Internship Prep** unlocks the **Internship Job Board**.
  - Passing **Job Readiness** unlocks the **Placement Job Board** and unlocks the verified **Skills Certificate Glimpse Card** at the bottom of your curriculum column.
- Click any unlocked board pill to open and browse the available job postings.

### 4. Smart Role Switching
- Click **Switch / View Other Roles** in the header to change paths.
- Selecting a new role checks for overlap. Overlapping courses (like *CCBP 4.0 Introduction*) are automatically credited, reducing the time required in the new path.
- Your progress in previous roles is preserved so you can switch back and resume where you left off.

### 5. Resetting State
- Run `resetJourneyProgress()` in your browser console (`F12`) to clear all progress and start fresh.
