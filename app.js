const modules = [
  {
    title: 'Introduction to Git and GitHub',
    description: 'Understand version control and the GitHub ecosystem.',
    sections: [
      { title: 'Why version control matters', objective: 'Explain how version control helps people safely manage changing files.', body: 'Version control records changes over time. A project history makes it possible to understand what changed, compare versions, and restore earlier work. Git is a distributed version control system: each collaborator can work with a complete local copy of a repository.', example: 'A team is updating a product guide. With version control, each writer can work independently and the team can review exactly what changed before publishing.', flowTitle: 'A project history', flow: [['Edit', 'Change a file'], ['Commit', 'Save a snapshot'], ['History', 'Review or restore']], question: 'What is a practical benefit of keeping a version history?', options: ['It records changes so they can be reviewed or restored.', 'It prevents more than one person from editing a project.', 'It automatically approves every change.'], answer: 0, explanation: 'A version history records snapshots and their context, making changes easier to inspect and recover.' },
      { title: 'Git and GitHub work together', objective: 'Distinguish Git, GitHub, and a repository.', body: 'Git is the tool and data model that tracks changes. GitHub is a cloud platform for hosting Git repositories and collaborating around them. A repository, or repo, holds project files and their history. GitHub adds collaboration features such as pull requests, issues, and automation.', example: 'You can use Git on your laptop without GitHub. Hosting that Git repository on GitHub makes it easier for teammates to review and coordinate work.', flowTitle: 'From local work to collaboration', flow: [['Git', 'Track changes'], ['Repository', 'Organize project'], ['GitHub', 'Share and collaborate']], question: 'Which statement best describes the relationship between Git and GitHub?', options: ['Git is a hosting website; GitHub is a command-line tool.', 'Git tracks versions; GitHub hosts repositories and collaboration features.', 'Git and GitHub are two names for the same application.'], answer: 1, explanation: 'Git handles version control; GitHub provides hosted repositories and tools for working together.' }
    ]
  },
  {
    title: 'Working with GitHub Repositories',
    description: 'Create, explore, and configure a project repository.',
    sections: [
      { title: 'Repository structure and visibility', objective: 'Identify common repository files and choose an appropriate visibility setting.', body: 'A repository brings related files and their history together. A README introduces the project, while folders can organize source code, documentation, and tests. Public repositories can be viewed by anyone; private repositories restrict access to invited collaborators, subject to organization policy and plan.', example: 'A public sample project can help others learn from your work. An internal product prototype usually belongs in a private repository with access limited to its team.', flowTitle: 'A repository at a glance', flow: [['README', 'Project context'], ['Files', 'Project content'], ['Settings', 'Access and rules']], question: 'Where would you look first to understand a repository’s purpose?', options: ['Its README file.', 'Its commit hash format.', 'Its repository visibility setting.'], answer: 0, explanation: 'A README commonly explains a project’s purpose, setup, and how to contribute.' },
      { title: 'Create, clone, or fork', objective: 'Choose a repository workflow for starting or contributing to a project.', body: 'Create a repository when starting a project. Clone copies a repository to your computer so you can work with it locally. Fork creates a separate GitHub copy under your account, often as a starting point for contributing to a project you do not own.', example: 'To suggest a change to an open source project, fork it, make a change in your copy, then open a pull request to propose it upstream.', flowTitle: 'A contribution path', flow: [['Fork', 'Create your copy'], ['Change', 'Work on a branch'], ['Propose', 'Open a pull request']], question: 'You want to propose a change to a project where you do not have write access. What is a common approach?', options: ['Fork the repository, make your change, and open a pull request.', 'Change the original repository’s settings.', 'Clone it and assume the original updates automatically.'], answer: 0, explanation: 'A fork gives you a writable copy; a pull request lets maintainers review your proposed change.' }
    ]
  },
  {
    title: 'Git Fundamentals',
    description: 'Track changes from your working files into project history.',
    sections: [
      { title: 'The Git change lifecycle', objective: 'Describe how edits move from your working tree into a commit.', body: 'Git separates editing files from recording them. The working tree contains your current edits. Staging selects the changes for the next snapshot, and committing records that staged snapshot in the repository history. This lets you make focused commits rather than saving every edit together.', example: 'If you update both a typo and a new feature, stage and commit them separately so each change has a clear purpose.', flowTitle: 'From edit to history', flow: [['Working tree', 'Edit files'], ['Staging area', 'Select changes'], ['Commit', 'Record snapshot']], question: 'What does staging a file do?', options: ['Selects its changes for the next commit.', 'Publishes the repository to GitHub.', 'Deletes its previous versions.'], answer: 0, explanation: 'The staging area lets you choose which changes will be included in the next commit.' },
      { title: 'Commits and useful history', objective: 'Recognize a useful commit and inspect project history.', body: 'A commit is a recorded snapshot with an identifier and a message. A concise message explains the intent of the change, such as “Document setup steps.” Reviewing history helps you understand when and why files changed. Git commands such as git status and git log expose your current state and past commits.', example: 'Before committing, run git status to check what is staged. Afterward, git log can help confirm the commit appears in the project history.', flowTitle: 'A clear commit', flow: [['Review', 'Check staged work'], ['Describe', 'Write a useful message'], ['Record', 'Create the commit']], question: 'Which commit message gives teammates the clearest context?', options: ['update', 'stuff', 'Document the local setup steps'], answer: 2, explanation: 'A focused message explains the intent of the change and makes history easier to scan.' }
    ]
  },
  {
    title: 'Branching and Collaboration',
    description: 'Use branches and pull requests to review changes together.',
    sections: [
      { title: 'Branches support parallel work', objective: 'Explain how branches help isolate a change from the default branch.', body: 'A branch is a movable name for a line of work. Creating a branch lets you develop a feature or fix separately from the default branch. When the work is ready, it can be proposed and reviewed without interrupting other contributors.', example: 'A teammate can build a search feature on a feature/search branch while the default branch remains available for stable work.', flowTitle: 'Parallel work with branches', flow: [['Default', 'Stable baseline'], ['Branch', 'Isolated change'], ['Merge', 'Bring work together']], question: 'Why create a branch for a new feature?', options: ['To isolate work so it can be developed and reviewed separately.', 'To permanently hide the feature from collaborators.', 'To make Git stop tracking the files.'], answer: 0, explanation: 'A branch keeps work separate until the change is ready to be reviewed and integrated.' },
      { title: 'Pull requests and review', objective: 'Describe how a pull request supports discussion and integration.', body: 'A pull request (PR) proposes changes from one branch into another. It gives collaborators a place to inspect a diff, discuss the approach, run checks, and request updates. After required review and checks pass, the change can be merged.', example: 'A reviewer notices that a new API route lacks a test. They leave a comment on the changed lines; the author adds the test and pushes another commit to the same branch.', flowTitle: 'A reviewed change', flow: [['Propose', 'Open a pull request'], ['Review', 'Discuss and check'], ['Merge', 'Integrate the change']], question: 'What is the main purpose of a pull request?', options: ['To propose and review changes before they are merged.', 'To replace the repository’s commit history.', 'To automatically grant repository access.'], answer: 0, explanation: 'A pull request creates a review and discussion workflow around a proposed change.' }
    ]
  },
  {
    title: 'GitHub Issues and Project Management',
    description: 'Coordinate work with issues, discussions, and project views.',
    sections: [
      { title: 'Issues organize work', objective: 'Use issues to describe, discuss, and assign work.', body: 'An issue tracks a task, bug, or idea. A useful issue explains the context and expected outcome. Assignees clarify ownership, labels add categories, and milestones group issues toward a larger goal. Discussions are better suited to open-ended community conversations.', example: 'A bug report can include steps to reproduce, expected behavior, and actual behavior, helping a teammate investigate without guessing.', flowTitle: 'From idea to owned work', flow: [['Describe', 'Create an issue'], ['Organize', 'Add labels'], ['Assign', 'Set an owner']], question: 'Which is the strongest starting point for a reproducible bug report?', options: ['A clear description with steps and expected versus actual behavior.', 'A label with no details.', 'A project board with no issue attached.'], answer: 0, explanation: 'Reproduction steps and expected behavior give the team actionable context.' },
      { title: 'Projects make work visible', objective: 'Choose a project view that helps a team understand work status.', body: 'GitHub Projects can organize issues and pull requests in a table, board, or roadmap view. Fields such as status, priority, and iteration add useful context. Views help teams understand what is planned, in progress, or complete without changing the underlying issue.', example: 'A small team might use a board grouped by status for daily coordination and a table to sort the same work by priority.', flowTitle: 'One project, useful views', flow: [['Items', 'Issues and PRs'], ['Fields', 'Status and priority'], ['Views', 'Board or table']], question: 'What is a useful distinction between an issue and a project view?', options: ['An issue describes a unit of work; a project view organizes work items.', 'A project view replaces all issues.', 'An issue is only used for community discussions.'], answer: 0, explanation: 'Issues hold individual work and discussion; project views help organize and track items.' }
    ]
  },
  {
    title: 'GitHub Actions',
    description: 'Understand workflows, triggers, jobs, and automation.',
    sections: [
      { title: 'Workflows respond to events', objective: 'Explain how a workflow starts and where its definition lives.', body: 'GitHub Actions automates work in response to events. A workflow is defined in a YAML file in .github/workflows. Its trigger, often called an event, can be a push, pull request, schedule, or manual request. Workflows help teams repeat checks consistently.', example: 'A pull request event can start a workflow that runs the project’s tests before reviewers approve a change.', flowTitle: 'An automated check starts', flow: [['Event', 'Pull request opened'], ['Workflow', 'YAML instructions'], ['Run', 'Checks begin']], question: 'Where do repository workflows for GitHub Actions live?', options: ['In the .github/workflows directory.', 'In the repository’s README only.', 'In a branch protection rule.'], answer: 0, explanation: 'Workflow YAML files are stored in the repository’s .github/workflows directory.' },
      { title: 'Jobs, steps, and runners', objective: 'Distinguish a workflow, job, step, and runner.', body: 'A workflow contains one or more jobs. A job is a unit of work that runs on a runner, which provides the execution environment. Each job contains ordered steps, such as checking out the repository, installing dependencies, and running tests. Jobs can run in parallel or depend on other jobs.', example: 'A CI workflow could run a lint job and a test job on separate runners, then publish a package only after both succeed.', flowTitle: 'Inside a workflow run', flow: [['Workflow', 'Defines automation'], ['Job', 'Groups work'], ['Step', 'Runs a command']], question: 'What is a runner in GitHub Actions?', options: ['The environment that executes a job.', 'A YAML trigger that starts a workflow.', 'A label that groups issues.'], answer: 0, explanation: 'A runner is the machine or environment that executes the workflow job.' }
    ]
  },
  {
    title: 'GitHub Copilot',
    description: 'Use AI assistance thoughtfully and review its suggestions.',
    sections: [
      { title: 'AI assistance in development', objective: 'Describe how GitHub Copilot can assist a developer.', body: 'GitHub Copilot can suggest code, explain unfamiliar code, and help explore approaches using natural-language context. It is an assistant, not an authority: suggestions can be incorrect, incomplete, insecure, or inconsistent with project requirements.', example: 'Ask Copilot to draft a unit test for a documented function, then inspect the assertions, run the test, and adjust edge cases yourself.', flowTitle: 'A responsible assistance loop', flow: [['Context', 'Explain the task'], ['Suggestion', 'Review the output'], ['Validation', 'Test and refine']], question: 'What should you do before accepting a Copilot suggestion?', options: ['Review it in context and validate that it works as intended.', 'Assume it is correct because it was generated quickly.', 'Remove all tests to avoid slowing it down.'], answer: 0, explanation: 'The developer remains responsible for reviewing and validating generated suggestions.' },
      { title: 'Prompts and responsible use', objective: 'Improve prompt context while protecting sensitive information.', body: 'A useful prompt states the goal, relevant constraints, and expected format. Give only the context needed to get help. Follow your organization’s policies, avoid sharing secrets or sensitive data, and check generated code for correctness, security, licensing, and fit with the project.', example: 'Instead of “write code,” ask for a Python function that parses ISO dates, names the expected behavior for invalid input, and includes two focused tests.', flowTitle: 'A better prompt', flow: [['Goal', 'State the task'], ['Constraints', 'Share relevant context'], ['Check', 'Verify the result']], question: 'Which prompt habit supports responsible use?', options: ['Include a production secret so the suggestion is realistic.', 'State the goal and constraints, then verify the response.', 'Accept generated code without reviewing it.'], answer: 1, explanation: 'Clear, limited context improves relevance; review protects quality and sensitive information.' }
    ]
  },
  {
    title: 'GitHub Security',
    description: 'Protect repositories and respond to vulnerabilities.',
    sections: [
      { title: 'Security signals and secret scanning', objective: 'Recognize how repository security features help identify risk.', body: 'Secret scanning looks for exposed credentials in a repository and can alert maintainers. If a credential is exposed, revoke or rotate it promptly; deleting it from the latest file does not necessarily remove it from history. Security policies help explain how to report vulnerabilities responsibly.', example: 'If a token is committed by mistake, revoke it at the service that issued it first, then remove it from the repository and review the exposure.', flowTitle: 'Respond to an exposed secret', flow: [['Detect', 'Review the alert'], ['Revoke', 'Rotate the credential'], ['Remediate', 'Clean up and review']], question: 'A valid API token was committed to a repository. What is the first priority?', options: ['Revoke or rotate the token so it can no longer be used.', 'Only delete the line from the latest version of the file.', 'Wait for a pull request review.'], answer: 0, explanation: 'Removing a file line does not invalidate a credential; revoke or rotate it immediately.' },
      { title: 'Dependencies and code scanning', objective: 'Distinguish dependency alerts from code analysis alerts.', body: 'Dependabot can alert you to vulnerable dependencies and may help create an update. Code scanning analyzes source code for potential vulnerabilities. Neither tool replaces review: teams should assess findings, prioritize risk, test fixes, and keep security processes current.', example: 'A dependency alert identifies a vulnerable library version; a code scanning alert may point to an unsafe data flow in your own code.', flowTitle: 'Turn findings into fixes', flow: [['Alert', 'Understand the risk'], ['Prioritize', 'Assess impact'], ['Remediate', 'Fix and validate']], question: 'Which tool commonly raises alerts about vulnerable dependency versions?', options: ['Dependabot.', 'GitHub Projects.', 'A README file.'], answer: 0, explanation: 'Dependabot identifies vulnerable dependencies and can help propose version updates.' }
    ]
  },
  {
    title: 'Open Source and Community Participation',
    description: 'Contribute with respect for project standards and licenses.',
    sections: [
      { title: 'Open source contributions', objective: 'Follow a project’s contribution guidance before proposing a change.', body: 'Open source projects publish code under licenses that define how it may be used and shared. Before contributing, read the README and contribution guide, look for existing issues, and follow the project’s pull request process. Small, focused contributions are easier to review.', example: 'A first contribution might correct a documentation example. Check the project’s style and open an issue first if the change could affect behavior.', flowTitle: 'A thoughtful contribution', flow: [['Learn', 'Read project guidance'], ['Contribute', 'Make a focused change'], ['Collaborate', 'Request review']], question: 'What should you do before opening a contribution to an unfamiliar project?', options: ['Read its contribution guidance and understand the change you propose.', 'Assume every project uses the same license and process.', 'Skip tests because the repository is public.'], answer: 0, explanation: 'Projects have different licenses, standards, and review processes; follow their published guidance.' },
      { title: 'Community standards and licensing', objective: 'Explain how community health files support responsible collaboration.', body: 'A Code of Conduct sets expectations for respectful participation. A license communicates permitted use of project code. Issue and pull request templates help contributors provide consistent information. These files make expectations visible and help maintainers build welcoming, sustainable communities.', example: 'A bug report template can prompt for environment details and reproduction steps, while a Code of Conduct explains how community members are expected to treat one another.', flowTitle: 'Clear community expectations', flow: [['Standards', 'Set expectations'], ['Templates', 'Guide participation'], ['License', 'Define reuse']], question: 'What does a project license primarily communicate?', options: ['Terms under which others may use and share the project’s work.', 'Whether a pull request has passed its tests.', 'Who is assigned to the next issue.'], answer: 0, explanation: 'A license defines permissions and conditions for using or distributing project work.' }
    ]
  },
  {
    title: 'GH-900 Exam Preparation',
    description: 'Review core concepts and plan your final readiness check.',
    sections: [
      { title: 'Map your study to exam objectives', objective: 'Use the current certification guide to focus your review.', body: 'Certification details and measured skills can change. Use the official Microsoft Learn certification page as the source of truth, then map each objective to a concrete example you can explain. Spend extra time on concepts that are unfamiliar rather than rereading only the topics you already know.', example: 'For an objective about collaboration, be ready to explain the difference between a branch, a pull request, and a review, and describe when each is useful.', flowTitle: 'A focused review cycle', flow: [['Check', 'Read current objectives'], ['Practice', 'Explain from memory'], ['Review', 'Revisit weak topics']], question: 'Where should you confirm current certification objectives?', options: ['The official Microsoft Learn certification page.', 'An old exam-prep note with no date.', 'A random issue in an unrelated repository.'], answer: 0, explanation: 'Certification objectives may change, so confirm them on the official Microsoft Learn page.' },
      { title: 'Check understanding and next steps', objective: 'Build readiness through retrieval practice and targeted review.', body: 'Practice recalling ideas without notes, then explain them in your own words. Use scenario questions to connect tools to a real task. Review incorrect answers to find the underlying concept, and revisit the matching lesson before trying again. This course is a study aid, not a guarantee of exam performance.', example: 'If you miss a question about GitHub Actions, sketch the relationship between an event, workflow, job, runner, and step, then answer a new scenario.', flowTitle: 'Turn a gap into a next step', flow: [['Recall', 'Try without notes'], ['Diagnose', 'Find the missing idea'], ['Revisit', 'Practice that topic']], question: 'You repeatedly miss questions about a topic. What is the most useful next step?', options: ['Review that topic’s key concept, then try a fresh scenario.', 'Memorize the answer position.', 'Skip all related objectives.'], answer: 0, explanation: 'Targeted review and a new scenario help you learn the concept rather than memorize a choice.' }
    ]
  }
];

const resources = [
  { group: 'Official certification', items: [
    ['GH-900 certification', 'Certification overview and exam details.', 'https://learn.microsoft.com/credentials/certifications/github-foundations/'],
    ['Microsoft Learn', 'Browse GitHub Foundations learning content.', 'https://learn.microsoft.com/training/browse/?terms=GitHub%20Foundations']
  ] },
  { group: 'Practice and documentation', items: [
    ['GitHub Skills', 'Learn GitHub workflows in hands-on courses.', 'https://skills.github.com/'],
    ['GitHub Docs', 'Reference for repositories, collaboration, and more.', 'https://docs.github.com/'],
    ['GitHub Actions docs', 'Learn about workflow syntax and automation.', 'https://docs.github.com/actions'],
    ['GitHub security docs', 'Explore security features and best practices.', 'https://docs.github.com/code-security']
  ] }
];

const app = document.querySelector('#app');
const moduleList = document.querySelector('#module-list');
const sectionsTotal = modules.reduce((total, module) => total + module.sections.length, 0);
const storageKey = 'gh900-course-progress-v1';
let view = 'overview';
let activeModule = 0;
let activeSection = 0;
let selectedAnswer = null;
let answeredCorrectly = false;
let flowTimer;
let flowStepIndex = 0;
let mobileMenuOpen = false;
let progress = loadProgress();

function loadProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || '{}');
    return new Set(Array.isArray(stored.completed) ? stored.completed : []);
  } catch {
    return new Set();
  }
}

function saveProgress() {
  try { localStorage.setItem(storageKey, JSON.stringify({ completed: [...progress] })); } catch { /* Progress remains available for this session. */ }
}

function sectionKey(moduleIndex, sectionIndex) { return `${moduleIndex}:${sectionIndex}`; }
function isComplete(moduleIndex, sectionIndex) { return progress.has(sectionKey(moduleIndex, sectionIndex)); }
function moduleCompletion(index) { return modules[index].sections.filter((_, sectionIndex) => isComplete(index, sectionIndex)).length; }
function overallPercent() { return Math.round((progress.size / sectionsTotal) * 100); }

function firstIncomplete() {
  for (let moduleIndex = 0; moduleIndex < modules.length; moduleIndex += 1) {
    for (let sectionIndex = 0; sectionIndex < modules[moduleIndex].sections.length; sectionIndex += 1) {
      if (!isComplete(moduleIndex, sectionIndex)) return { moduleIndex, sectionIndex };
    }
  }
  return { moduleIndex: modules.length - 1, sectionIndex: modules.at(-1).sections.length - 1 };
}

function setLocation(moduleIndex, sectionIndex = 0) {
  if (moduleIndex > firstIncomplete().moduleIndex) return;
  activeModule = moduleIndex;
  activeSection = sectionIndex;
  selectedAnswer = null;
  answeredCorrectly = isComplete(moduleIndex, sectionIndex);
  view = 'lesson';
  render();
  document.querySelector('#main-content').focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setView(nextView) {
  view = nextView;
  mobileMenuOpen = false;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavigation() {
  document.querySelectorAll('.nav-link').forEach(button => {
    const active = button.dataset.view === view || (view === 'lesson' && button.dataset.view === 'curriculum');
    button.classList.toggle('is-active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  const next = firstIncomplete();
  moduleList.innerHTML = modules.map((module, index) => {
    const done = moduleCompletion(index);
    const active = view === 'lesson' && activeModule === index;
    const locked = index > next.moduleIndex;
    return `<button class="module-link ${active ? 'is-active' : ''} ${done === module.sections.length ? 'is-complete' : ''} ${locked ? 'is-locked' : ''}" data-module="${index}" ${locked ? 'disabled aria-label="${module.title}, locked until earlier sections are complete"' : ''} ${active ? 'aria-current="step"' : ''}>
      <span class="module-number">${done === module.sections.length ? '✓' : String(index + 1).padStart(2, '0')}</span>
      <span class="module-name">${module.title}</span><span class="module-count">${done}/${module.sections.length}</span>
    </button>`;
  }).join('');
  const percent = overallPercent();
  document.querySelector('#sidebar-progress-label').textContent = `${percent}%`;
  const bar = document.querySelector('#sidebar-progress-bar');
  bar.setAttribute('aria-valuenow', String(percent));
  bar.querySelector('span').style.width = `${percent}%`;
  const sidebar = document.querySelector('#course-sidebar');
  sidebar.classList.toggle('is-open', mobileMenuOpen);
  const toggle = document.querySelector('#menu-toggle');
  toggle.setAttribute('aria-expanded', String(mobileMenuOpen));
  toggle.setAttribute('aria-label', mobileMenuOpen ? 'Close course navigation' : 'Open course navigation');
}

function renderOverview() {
  const next = firstIncomplete();
  const nextModule = modules[next.moduleIndex];
  const nextSection = nextModule.sections[next.sectionIndex];
  const complete = progress.size === sectionsTotal;
  return `<div class="breadcrumb"><span>GH-900</span><span aria-hidden="true">/</span><span>Overview</span></div>
    <section class="hero" aria-labelledby="page-title">
      <div class="hero-copy"><div class="hero-kicker"><span class="kicker-dot"></span>GITHUB FOUNDATIONS · GH-900</div>
        <h1 id="page-title">Build your GitHub foundation.</h1>
        <p>A guided path through version control, collaboration, automation, security, and responsible AI. Learn one concept at a time, then check what stuck.</p>
      </div>
      <div class="hero-stat"><div class="progress-ring" style="--progress:${overallPercent() * 3.6}deg"><span class="ring-value">${overallPercent()}%</span></div><small>${progress.size} of ${sectionsTotal} sections complete</small></div>
    </section>
    <div class="section-heading"><div><h2>Your next step</h2><p>${complete ? 'You have completed every section in this study path.' : 'Pick up where you left off.'}</p></div><button class="text-button" data-action="curriculum">View full curriculum <span aria-hidden="true">→</span></button></div>
    <section class="resume-row" aria-label="Recommended next lesson"><div><div class="resume-label">${complete ? 'Study path complete' : `Module ${String(next.moduleIndex + 1).padStart(2, '0')} · ${nextModule.title}`}</div><h3>${complete ? 'Review any topic at your own pace' : nextSection.title}</h3><p>${complete ? 'Your completed sections remain saved on this device.' : nextSection.objective}</p></div><button class="primary-button" data-action="resume" data-module="${next.moduleIndex}" data-section="${next.sectionIndex}">${complete ? 'Review lessons' : progress.size ? 'Continue learning' : 'Start learning'} <span aria-hidden="true">→</span></button></section>
    <div class="section-heading"><div><h2>Curriculum</h2><p>Ten modules, built for steady progress.</p></div></div>
    <section class="module-grid" aria-label="GH-900 curriculum modules">${modules.map((module, index) => { const locked = index > next.moduleIndex; return `<button class="module-card ${moduleCompletion(index) === module.sections.length ? 'is-complete' : ''}" data-module="${index}" ${locked ? 'disabled aria-label="Module ' + (index + 1) + ', locked until earlier sections are complete"' : ''}><span class="card-number">${moduleCompletion(index) === module.sections.length ? '✓' : String(index + 1).padStart(2, '0')}</span><span class="card-copy"><strong>${module.title}</strong><small>${locked ? 'Complete earlier sections to unlock' : `${moduleCompletion(index)} of ${module.sections.length} sections · ${module.sections.length} short lessons`}</small></span><span class="module-card-arrow" aria-hidden="true">${locked ? '•' : '›'}</span></button>`; }).join('')}</section>
    <div class="dashboard-bottom"><section class="focus-panel"><div class="panel-heading"><span class="panel-mark" aria-hidden="true">✦</span><h3>Study with purpose</h3></div><p>Each lesson pairs a practical example with a small workflow visual. Answer the knowledge check correctly to unlock the next section. Your progress stays on this device.</p></section><section class="resource-panel"><div class="panel-heading"><span class="panel-mark" aria-hidden="true">↗</span><h3>Useful resources</h3></div><p>Keep authoritative references close as you study.</p><div class="resource-list"><a href="https://learn.microsoft.com/credentials/certifications/github-foundations/" target="_blank" rel="noreferrer">GH-900 certification guide <span>↗</span></a><a href="https://skills.github.com/" target="_blank" rel="noreferrer">GitHub Skills <span>↗</span></a></div></section></div>`;
}

function renderCurriculum() {
  return `<div class="breadcrumb"><button data-action="overview">Overview</button><span aria-hidden="true">/</span><span>Curriculum</span></div>
    <header class="curriculum-header"><div><span class="eyebrow">GH-900 LEARNING PATH</span><h1>Curriculum</h1><p>Continue in sequence, or revisit a completed topic.</p></div><label class="search-box"><span aria-hidden="true">⌕</span><span class="sr-only">Search modules</span><input id="module-search" type="search" placeholder="Find a topic" autocomplete="off"></label></header>
    <div class="curriculum-table" id="curriculum-table">${modules.map((module, index) => { const locked = index > firstIncomplete().moduleIndex; return `<button class="curriculum-item" data-module="${index}" data-search="${`${module.title} ${module.description} ${module.sections.map(section => section.title).join(' ')}`.toLowerCase()}" ${locked ? 'disabled aria-label="Module ' + (index + 1) + ', locked until earlier sections are complete"' : ''}><span class="module-number">${moduleCompletion(index) === module.sections.length ? '✓' : String(index + 1).padStart(2, '0')}</span><span><strong>${module.title}</strong><small>${module.description}</small></span><span class="curriculum-status">${locked ? 'Locked' : `${moduleCompletion(index)}/${module.sections.length} sections`}</span><span class="curriculum-arrow" aria-hidden="true">${locked ? '•' : '›'}</span></button>`; }).join('')}</div><p class="empty-search" id="empty-search" hidden>No modules match that search.</p>`;
}

function renderResources() {
  return `<div class="breadcrumb"><button data-action="overview">Overview</button><span aria-hidden="true">/</span><span>Resources</span></div>
    <section class="resource-hero"><span class="eyebrow">KEEP LEARNING</span><h1>Trusted resources</h1><p>Use official references to deepen a topic and confirm current certification details.</p></section>
    ${resources.map(group => `<section class="resource-group"><h2>${group.group}</h2><div class="resource-cards">${group.items.map(([title, description, url]) => `<a class="resource-card" href="${url}" target="_blank" rel="noreferrer"><div><strong>${title}</strong><p>${description}</p></div><span>Open resource ↗</span></a>`).join('')}</div></section>`).join('')}`;
}

function renderLesson() {
  const module = modules[activeModule];
  const section = module.sections[activeSection];
  const completed = isComplete(activeModule, activeSection);
  const canContinue = completed || answeredCorrectly;
  const isLast = activeModule === modules.length - 1 && activeSection === module.sections.length - 1;
  const flowSteps = section.flow.map(([label, detail], index) => `<div class="flow-step ${index === 0 ? 'is-active' : ''}" data-flow-step="${index}"><span class="flow-node">${index + 1}</span><strong>${label}</strong><small>${detail}</small></div>`).join('');
  return `<div class="lesson-shell"><div class="breadcrumb"><button data-action="overview">Overview</button><span aria-hidden="true">/</span><button data-action="curriculum">Curriculum</button><span aria-hidden="true">/</span><span>${module.title}</span></div>
    <div class="lesson-meta"><span class="meta-tag">MODULE ${String(activeModule + 1).padStart(2, '0')}</span><span>Section ${activeSection + 1} of ${module.sections.length}</span><span aria-hidden="true">·</span><span>${completed ? 'Completed' : 'About 4 minutes'}</span></div>
    <h1 class="lesson-title" id="page-title">${section.title}</h1><p class="lesson-intro">${module.description}</p>
    <section class="objective"><span class="objective-icon" aria-hidden="true">◎</span><div><strong>Learning objective</strong><p>${section.objective}</p></div></section>
    <section class="lesson-section"><h2>The idea</h2><p>${section.body}</p><div class="example-box"><div class="example-label">In practice</div><p>${section.example}</p></div></section>
    <section class="visual-card" aria-labelledby="visual-title"><div class="visual-head"><div><h3 id="visual-title">${section.flowTitle}</h3><p>Follow each step to see how the pieces connect.</p></div><button class="play-button" data-action="play-flow" aria-label="${window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'Show next workflow step' : 'Play workflow visualization'}">${window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'Next step →' : '▶ Play steps'}</button></div><div class="flow-wrap"><div class="flow-track" style="--steps:${section.flow.length}" role="list" aria-label="${section.flowTitle}">${flowSteps}</div><p class="flow-caption" id="flow-caption" aria-live="polite">${section.flow[0][0]}: ${section.flow[0][1]}</p></div></section>
    <section class="check-panel" aria-labelledby="check-title"><div class="check-top"><span class="check-icon" aria-hidden="true">?</span><span>Knowledge check · answer to continue</span></div><h2 id="check-title">${section.question}</h2><fieldset class="answer-list"><legend class="sr-only">Choose one answer</legend>${section.options.map((option, index) => `<label class="answer-option"><input type="radio" name="answer" value="${index}" ${selectedAnswer === index ? 'checked' : ''}><span>${option}</span></label>`).join('')}</fieldset><div class="check-actions"><p>Select an answer, then check your understanding.</p><button class="primary-button" data-action="check-answer" ${selectedAnswer === null || canContinue ? 'disabled' : ''}>Check answer</button></div><div class="feedback ${completed || answeredCorrectly ? 'is-visible is-correct' : ''}" id="feedback" role="status">${completed || answeredCorrectly ? `Correct. ${section.explanation}` : ''}</div></section>
    <div class="lesson-footer"><button class="secondary-button" data-action="previous" ${activeModule === 0 && activeSection === 0 ? 'disabled' : ''}>← Previous</button><button class="primary-button" data-action="continue" ${canContinue ? '' : 'disabled'}>${isLast ? 'Finish course' : 'Continue'} <span aria-hidden="true">→</span></button></div>
    ${isLast && completed ? '<div class="lesson-complete" role="status"><strong>Study path complete.</strong> Revisit any module from the course navigation or check the official certification guide for current exam details.</div>' : ''}
  </div>`;
}

function render() {
  clearInterval(flowTimer);
  flowStepIndex = 0;
  updateNavigation();
  app.innerHTML = view === 'overview' ? renderOverview() : view === 'curriculum' ? renderCurriculum() : view === 'resources' ? renderResources() : renderLesson();
  if (view === 'curriculum') document.querySelector('#module-search').addEventListener('input', filterModules);
}

function filterModules(event) {
  const query = event.target.value.trim().toLowerCase();
  let visible = 0;
  document.querySelectorAll('.curriculum-item').forEach(item => {
    const matches = item.dataset.search.includes(query);
    item.hidden = !matches;
    if (matches) visible += 1;
  });
  document.querySelector('#empty-search').hidden = visible !== 0;
}

function animateFlow() {
  const steps = [...document.querySelectorAll('.flow-step')];
  if (!steps.length) return;
  clearInterval(flowTimer);
  let current = 0;
  const showStep = index => {
    steps.forEach((step, stepIndex) => {
      step.classList.toggle('is-active', stepIndex === index);
      step.classList.toggle('is-past', stepIndex < index);
    });
    document.querySelector('#flow-caption').textContent = `${modules[activeModule].sections[activeSection].flow[index][0]}: ${modules[activeModule].sections[activeSection].flow[index][1]}`;
  };
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    flowStepIndex = (flowStepIndex + 1) % steps.length;
    showStep(flowStepIndex);
    return;
  }
  showStep(current);
  flowTimer = setInterval(() => {
    current += 1;
    if (current >= steps.length) {
      clearInterval(flowTimer);
      return;
    }
    showStep(current);
  }, 1200);
}

function handleAction(action, target) {
  if (action === 'overview') return setView('overview');
  if (action === 'curriculum') return setView('curriculum');
  if (action === 'resume') return setLocation(Number(target.dataset.module), Number(target.dataset.section));
  if (action === 'play-flow') return animateFlow();
  if (action === 'check-answer') {
    if (selectedAnswer === null) return;
    const section = modules[activeModule].sections[activeSection];
    const feedback = document.querySelector('#feedback');
    feedback.classList.add('is-visible');
    if (selectedAnswer === section.answer) {
      answeredCorrectly = true;
      progress.add(sectionKey(activeModule, activeSection));
      saveProgress();
      feedback.className = 'feedback is-visible is-correct';
      feedback.textContent = `Correct. ${section.explanation}`;
      document.querySelector('[data-action="continue"]').disabled = false;
      document.querySelector('[data-action="check-answer"]').disabled = true;
      updateNavigation();
    } else {
      feedback.className = 'feedback is-visible is-incorrect';
      feedback.textContent = `Not quite. Review the explanation and try again. ${section.explanation}`;
    }
    return;
  }
  if (action === 'continue') {
    if (!answeredCorrectly && !isComplete(activeModule, activeSection)) return;
    const nextSection = activeSection + 1;
    if (nextSection < modules[activeModule].sections.length) return setLocation(activeModule, nextSection);
    if (activeModule + 1 < modules.length) return setLocation(activeModule + 1, 0);
    setView('overview');
    return;
  }
  if (action === 'previous') {
    if (activeSection > 0) return setLocation(activeModule, activeSection - 1);
    if (activeModule > 0) return setLocation(activeModule - 1, modules[activeModule - 1].sections.length - 1);
  }
}

document.addEventListener('click', event => {
  const viewButton = event.target.closest('[data-view]');
  if (viewButton) return setView(viewButton.dataset.view);
  const actionButton = event.target.closest('[data-action]');
  if (actionButton) return handleAction(actionButton.dataset.action, actionButton);
  const moduleButton = event.target.closest('[data-module]');
  if (moduleButton) return setLocation(Number(moduleButton.dataset.module));
});

document.addEventListener('change', event => {
  if (event.target.matches('input[name="answer"]')) {
    selectedAnswer = Number(event.target.value);
    const checkButton = document.querySelector('[data-action="check-answer"]');
    if (checkButton && !answeredCorrectly) checkButton.disabled = false;
  }
});

document.querySelector('#menu-toggle').addEventListener('click', () => {
  mobileMenuOpen = !mobileMenuOpen;
  updateNavigation();
});

render();