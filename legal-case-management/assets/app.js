const DATA_KEY = 'legal-case-management-public-demo-en-v2';
const AUTH_KEY = 'legal-case-management-public-demo-auth-en-v2';
const DEMO_EMAIL = 'demo@example.com';
const DEMO_PASSWORD = 'demo';

const seedData = {
    clients: [
        { client_id: 1, name: 'Horizon Technology Ltd', email: 'contact@horizon.example', phone: '0131 555 0101', contact_officer: 'Sarah Morgan' },
        { client_id: 2, name: 'Northbridge Trading Ltd', email: 'office@northbridge.example', phone: '0131 555 0102', contact_officer: 'Oliver Bennett' },
        { client_id: 3, name: 'Westbrook Investments', email: 'legal@westbrook.example', phone: '0131 555 0103', contact_officer: 'Lucy Harris' },
        { client_id: 4, name: 'Pioneer Services Ltd', email: 'admin@pioneer.example', phone: '0131 555 0104', contact_officer: 'Daniel Cooper' }
    ],
    employees: [
        { employee_id: 1, name: 'Emma Collins', job_title: 'Senior Solicitor', email: 'emma.collins@demo.example', phone: '0131 555 0201', contact_officer: 'Management' },
        { employee_id: 2, name: 'James Walker', job_title: 'Legal Consultant', email: 'james.walker@demo.example', phone: '0131 555 0202', contact_officer: 'Management' },
        { employee_id: 3, name: 'Olivia Turner', job_title: 'Legal Researcher', email: 'olivia.turner@demo.example', phone: '0131 555 0203', contact_officer: 'Management' },
        { employee_id: 4, name: 'Daniel Reed', job_title: 'Case Coordinator', email: 'daniel.reed@demo.example', phone: '0131 555 0204', contact_officer: 'Management' },
        { employee_id: 5, name: 'Administrative Team', job_title: 'Administrative Support', email: 'administration@demo.example', phone: '0131 555 0205', contact_officer: 'Management' }
    ],
    projects: [
        { project_id: 1, client_id: 1, type: 'Commercial Dispute', number: 'LC-2026-0142', name: 'Contract dispute concerning the supply of a technology system', assignee_id: 1, status: 'Open', start_at: '2026-06-02T09:00:00.000Z', closed_at: null },
        { project_id: 2, client_id: 2, type: 'Consultation', number: 'LC-2026-0148', name: 'Review of a commercial partnership agreement', assignee_id: 2, status: 'Open', start_at: '2026-06-10T10:30:00.000Z', closed_at: null },
        { project_id: 3, client_id: 3, type: 'Employment Dispute', number: 'LC-2026-0154', name: 'Review of an employment claim and employment documents', assignee_id: 3, status: 'Open', start_at: '2026-06-19T08:00:00.000Z', closed_at: null },
        { project_id: 4, client_id: 4, type: 'Contract Review', number: 'LC-2026-0159', name: 'Review of an annual services and operations contract', assignee_id: 1, status: 'Draft', start_at: '2026-06-27T11:00:00.000Z', closed_at: null },
        { project_id: 5, client_id: 1, type: 'Consultation', number: 'LC-2026-0121', name: 'Advice on data protection and digital contracts', assignee_id: 2, status: 'Closed', start_at: '2026-04-12T09:30:00.000Z', closed_at: '2026-05-03T13:00:00.000Z' },
        { project_id: 6, client_id: 3, type: 'Commercial Dispute', number: 'LC-2026-0133', name: 'Financial claim related to an investment agreement', assignee_id: 1, status: 'Open', start_at: '2026-05-18T10:00:00.000Z', closed_at: null },
        { project_id: 7, client_id: 2, type: 'Contract Review', number: 'LC-2026-0162', name: 'Review of a regional distribution agreement', assignee_id: 3, status: 'Draft', start_at: '2026-07-01T09:00:00.000Z', closed_at: null },
        { project_id: 8, client_id: 4, type: 'Internal Administration', number: 'INT-2026-0022', name: 'Organise the contract archive and internal files', assignee_id: 5, status: 'Open', start_at: '2026-07-04T09:00:00.000Z', closed_at: null }
    ],
    tasks: [
        { task_id: 1, project_id: 1, description: 'Review the contract and correspondence and identify the main points of dispute.', assignee_id: 1, duration: 5, created_at: '2026-06-02T09:30:00.000Z', status: 'Completed' },
        { task_id: 2, project_id: 1, description: 'Prepare an initial draft legal memorandum for internal review.', assignee_id: 3, duration: 4, created_at: '2026-06-09T08:30:00.000Z', status: 'Ready for Review' },
        { task_id: 3, project_id: 1, description: 'Organise the supporting documents and index them by date.', assignee_id: 4, duration: 3, created_at: '2026-06-15T10:00:00.000Z', status: 'Active' },
        { task_id: 4, project_id: 2, description: 'Review the liability, termination and dispute-resolution clauses.', assignee_id: 2, duration: 3, created_at: '2026-06-10T11:00:00.000Z', status: 'Completed' },
        { task_id: 5, project_id: 2, description: 'Prepare a list of proposed amendments before the client meeting.', assignee_id: 3, duration: 2, created_at: '2026-06-16T09:00:00.000Z', status: 'Active' },
        { task_id: 6, project_id: 3, description: 'Review the employment contract, records and correspondence related to the claim.', assignee_id: 3, duration: 4, created_at: '2026-06-19T08:30:00.000Z', status: 'Active' },
        { task_id: 7, project_id: 4, description: 'Compare the new version with the previous contract and record the differences.', assignee_id: 1, duration: 2, created_at: '2026-06-27T11:30:00.000Z', status: 'Active' },
        { task_id: 8, project_id: 5, description: 'Prepare a final memorandum containing data protection recommendations.', assignee_id: 2, duration: 3, created_at: '2026-04-18T10:00:00.000Z', status: 'Completed' },
        { task_id: 9, project_id: 6, description: 'Summarise the facts, amounts and dates contained in the documents.', assignee_id: 4, duration: 5, created_at: '2026-05-18T10:30:00.000Z', status: 'Overdue' },
        { task_id: 10, project_id: 6, description: 'Draft a request for additional documents from the client.', assignee_id: 1, duration: 1, created_at: '2026-06-01T09:00:00.000Z', status: 'Ready for Review' },
        { task_id: 11, project_id: 7, description: 'Review the distribution scope, exclusivity terms and annual targets.', assignee_id: 3, duration: 4, created_at: '2026-07-01T09:30:00.000Z', status: 'Active' },
        { task_id: 12, project_id: 8, description: 'Create a consistent classification system for old files and contracts.', assignee_id: 5, duration: 6, created_at: '2026-07-04T09:30:00.000Z', status: 'Active' }
    ],
    attachments: [
        { attachment_id: 1, project_id: 1, task_id: null, name: 'Demo contract.pdf', type: 'Demo document' },
        { attachment_id: 2, project_id: null, task_id: 2, name: 'Demo draft memorandum.docx', type: 'Demo document' },
        { attachment_id: 3, project_id: 5, task_id: null, name: 'Demo recommendations summary.txt', type: 'Demo note' }
    ]
};

const icons = {
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>',
    rotate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
    logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M12 5v14"/></svg>',
    edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.06 12.35a1 1 0 0 1 0-.7C3.73 7.6 7.5 5 12 5c4.5 0 8.27 2.6 9.94 6.65a1 1 0 0 1 0 .7C20.27 16.4 16.5 19 12 19c-4.5 0-8.27-2.6-9.94-6.65"/><circle cx="12" cy="12" r="3"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v5M14 11v5"/></svg>'
};

const app = document.getElementById('app');
let data = loadData();
let currentView = 'dashboard';
let modal = null;
let sidebarOpen = false;
let filters = {
    projectSearch: '',
    projectStatus: 'active',
    taskSearch: '',
    taskStatus: 'all',
    peopleSearch: ''
};
let toastTimer = null;

function clone(value) {
    return JSON.parse(JSON.stringify(value));
}

function loadData() {
    try {
        const stored = localStorage.getItem(DATA_KEY);
        if (stored) return JSON.parse(stored);
    } catch {
        localStorage.removeItem(DATA_KEY);
    }
    const initial = clone(seedData);
    localStorage.setItem(DATA_KEY, JSON.stringify(initial));
    return initial;
}

function saveData() {
    localStorage.setItem(DATA_KEY, JSON.stringify(data));
}

function nextId(items, key) {
    return items.reduce((highest, item) => Math.max(highest, Number(item[key]) || 0), 0) + 1;
}

function escapeHtml(value) {
    return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function cleanText(value, maxLength = 300) {
    return String(value ?? '').replace(/[<>]/g, '').trim().slice(0, maxLength);
}

function formatDate(value) {
    if (!value) return '—';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '—';
    return new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
}

function dueDate(task) {
    const date = new Date(task.created_at);
    date.setDate(date.getDate() + Number(task.duration || 0));
    return formatDate(date);
}

function getClient(id) {
    return data.clients.find((item) => item.client_id === Number(id));
}

function getEmployee(id) {
    return data.employees.find((item) => item.employee_id === Number(id));
}

function getProject(id) {
    return data.projects.find((item) => item.project_id === Number(id));
}

function projectTasks(projectId) {
    return data.tasks.filter((item) => item.project_id === Number(projectId));
}

function projectProgress(projectId) {
    const tasks = projectTasks(projectId);
    if (!tasks.length) return 0;
    const complete = tasks.filter((task) => task.status === 'Completed').length;
    return Math.round((complete / tasks.length) * 100);
}

function statusClass(status) {
    if (status === 'Closed' || status === 'Completed') return 'status-closed';
    if (status === 'Draft') return 'status-draft';
    if (status === 'Overdue') return 'status-late';
    if (status === 'Ready for Review') return 'status-review';
    return 'status-active';
}

function statusBadge(status) {
    return `<span class="status ${statusClass(status)}">${escapeHtml(status)}</span>`;
}

function personOptions(selectedId = null) {
    return data.employees.map((employee) => (
        `<option value="${employee.employee_id}" ${Number(selectedId) === employee.employee_id ? 'selected' : ''}>${escapeHtml(employee.name)}</option>`
    )).join('');
}

function clientOptions(selectedId = null) {
    return data.clients.map((client) => (
        `<option value="${client.client_id}" ${Number(selectedId) === client.client_id ? 'selected' : ''}>${escapeHtml(client.name)}</option>`
    )).join('');
}

function projectOptions(selectedId = null) {
    return data.projects
        .filter((project) => project.status !== 'Closed')
        .map((project) => (
            `<option value="${project.project_id}" ${Number(selectedId) === project.project_id ? 'selected' : ''}>${escapeHtml(project.number)} — ${escapeHtml(project.name)}</option>`
        )).join('');
}

function showToast(message, isError = false) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    if (toastTimer) clearTimeout(toastTimer);
    const toast = document.createElement('div');
    toast.className = `toast${isError ? ' error' : ''}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    toastTimer = setTimeout(() => toast.remove(), 2800);
}

function renderLogin(error = '') {
    app.innerHTML = `
        <main class="login-page">
            <section class="login-card" aria-labelledby="login-title">
                <h1 id="login-title">Case Management System</h1>
                <form id="login-form">
                    <div class="field">
                        <label for="login-email">Email address</label>
                        <input class="input" id="login-email" name="email" type="email" value="${DEMO_EMAIL}" autocomplete="username" required>
                    </div>
                    <div class="field">
                        <label for="login-password">Password</label>
                        <input class="input" id="login-password" name="password" type="password" value="${DEMO_PASSWORD}" autocomplete="current-password" required>
                    </div>
                    <div class="login-actions">
                        <button class="button button-primary" type="submit">Sign in to demo</button>
                        <button class="button button-secondary" type="button" data-action="quick-login">Quick access</button>
                    </div>
                </form>
                <div class="credentials"><span>${DEMO_EMAIL}</span><span>${DEMO_PASSWORD}</span></div>
                ${error ? `<div class="login-error">${escapeHtml(error)}</div>` : ''}
            </section>
        </main>
    `;
}

function navButton(view, label, iconName) {
    return `
        <button class="nav-button ${currentView === view ? 'active' : ''}" type="button" data-action="navigate" data-view="${view}">
            ${icons[iconName]}
            <span>${label}</span>
        </button>
    `;
}

function pageHeader(title, description, actions = '') {
    return `
        <header class="page-header">
            <div>
                <h1>${title}</h1>
                <p>${description}</p>
            </div>
            <div class="header-actions">${actions}</div>
        </header>
    `;
}


function renderShell() {
    app.innerHTML = `
        <div class="app-shell">
            <aside class="sidebar ${sidebarOpen ? 'open' : ''}" id="sidebar">
                <div class="brand">
                    <p class="brand-title">Case Management</p>
                    <p class="brand-subtitle">Legal Operations Platform</p>
                </div>
                <nav class="nav-list" aria-label="Main navigation">
                    ${navButton('dashboard', 'Dashboard', 'grid')}
                    ${navButton('employees', 'Employees', 'users')}
                    ${navButton('clients', 'Clients', 'building')}
                </nav>
                <div class="sidebar-footer">
                    <button class="demo-action" type="button" data-action="reset">${icons.rotate}<span>Reset data</span></button>
                    <button class="demo-action" type="button" data-action="logout">${icons.logout}<span>Sign out</span></button>
                </div>
            </aside>
            <div class="main-column">
                <header class="mobile-header">
                    <span class="mobile-title">Case Management</span>
                    <button class="mobile-menu" type="button" data-action="toggle-sidebar" aria-label="Open menu">${icons.menu}</button>
                </header>
                <main class="page" id="page-content">${renderCurrentView()}</main>
            </div>
        </div>
        <div id="modal-root"></div>
    `;
    if (modal) renderModal();
}

function renderCurrentView() {
    if (currentView === 'employees') return renderEmployees();
    if (currentView === 'clients') return renderClients();
    return renderDashboard();
}

function renderDashboard() {
    const openProjects = data.projects.filter((project) => project.status === 'Open').length;
    const drafts = data.projects.filter((project) => project.status === 'Draft').length;
    const activeTasks = data.tasks.filter((task) => ['Active', 'Overdue', 'Ready for Review'].includes(task.status)).length;
    const overdueTasks = data.tasks.filter((task) => task.status === 'Overdue').length;
    const projectActions = `
        <button class="button button-primary" type="button" data-action="new-project">${icons.plus}<span>New project</span></button>
        <button class="button button-secondary" type="button" data-action="new-task">${icons.plus}<span>New task</span></button>
    `;

    return `
        ${pageHeader('Dashboard', 'Track cases, tasks and files from one place.', projectActions)}
        <section class="metrics" aria-label="System summary">
            <article class="metric"><p class="metric-label">Open projects</p><p class="metric-value">${openProjects}</p><p class="metric-detail">out of ${data.projects.length} projects</p></article>
            <article class="metric"><p class="metric-label">Drafts</p><p class="metric-value">${drafts}</p><p class="metric-detail">Require activation or review</p></article>
            <article class="metric"><p class="metric-label">Current tasks</p><p class="metric-value">${activeTasks}</p><p class="metric-detail">Active or awaiting review</p></article>
            <article class="metric"><p class="metric-label">Overdue tasks</p><p class="metric-value">${overdueTasks}</p><p class="metric-detail">Require follow-up</p></article>
        </section>
        ${renderProjectsPanel()}
        ${renderTasksPanel()}
    `;
}

function filteredProjects() {
    const query = filters.projectSearch.toLowerCase().trim();
    return data.projects.filter((project) => {
        const client = getClient(project.client_id);
        const matchesQuery = !query || `${project.number} ${project.name} ${client?.name || ''}`.toLowerCase().includes(query);
        let matchesStatus = true;
        if (filters.projectStatus === 'active') matchesStatus = project.status === 'Open';
        if (filters.projectStatus === 'draft') matchesStatus = project.status === 'Draft';
        if (filters.projectStatus === 'closed') matchesStatus = project.status === 'Closed';
        return matchesQuery && matchesStatus;
    }).sort((a, b) => b.project_id - a.project_id);
}

function renderProjectsPanel() {
    const rows = filteredProjects().map((project) => {
        const client = getClient(project.client_id);
        const employee = getEmployee(project.assignee_id);
        const progress = projectProgress(project.project_id);
        return `
            <tr>
                <td><button class="link-button" type="button" data-action="view-project" data-id="${project.project_id}">${escapeHtml(project.number || 'No number')}</button></td>
                <td class="primary-cell">${escapeHtml(project.name)}</td>
                <td>${escapeHtml(client?.name || '—')}</td>
                <td>${escapeHtml(employee?.name || '—')}</td>
                <td>${statusBadge(project.status)}</td>
                <td>
                    <div class="progress">
                        <progress class="progress-bar" value="${progress}" max="100" aria-label="${progress}% complete">${progress}%</progress>
                        <div class="progress-label">${progress}%</div>
                    </div>
                </td>
                <td>
                    <div class="row-actions">
                        <button class="icon-button" type="button" data-action="view-project" data-id="${project.project_id}" aria-label="View project">${icons.eye}</button>
                        <button class="icon-button" type="button" data-action="edit-project" data-id="${project.project_id}" aria-label="Edit project">${icons.edit}</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    return `
        <section class="panel">
            <div class="panel-header">
                <div><h2 class="panel-title">Projects and cases</h2><p class="panel-subtitle">Search, open project details or edit project information.</p></div>
                <span class="count-chip">${filteredProjects().length} results</span>
            </div>
            <div class="filters">
                <div class="search-wrap">${icons.search}<input class="input" id="project-search" data-filter="projectSearch" value="${escapeHtml(filters.projectSearch)}" placeholder="Search by number, name or client"></div>
                <select class="select" id="project-status" data-filter="projectStatus">
                    <option value="active" ${filters.projectStatus === 'active' ? 'selected' : ''}>Open</option>
                    <option value="draft" ${filters.projectStatus === 'draft' ? 'selected' : ''}>Drafts</option>
                    <option value="closed" ${filters.projectStatus === 'closed' ? 'selected' : ''}>Closed</option>
                    <option value="all" ${filters.projectStatus === 'all' ? 'selected' : ''}>All</option>
                </select>
                <button class="button button-secondary button-small" type="button" data-action="new-project">${icons.plus}<span>Add</span></button>
            </div>
            <div class="table-wrap">
                <table>
                    <thead><tr><th>Number</th><th>Project</th><th>Client</th><th>Assignee</th><th>Status</th><th>Progress</th><th>Actions</th></tr></thead>
                    <tbody>${rows || '<tr><td colspan="7"><div class="empty-state">No matching projects.</div></td></tr>'}</tbody>
                </table>
            </div>
        </section>
    `;
}

function filteredTasks() {
    const query = filters.taskSearch.toLowerCase().trim();
    return data.tasks.filter((task) => {
        const project = getProject(task.project_id);
        const employee = getEmployee(task.assignee_id);
        const matchesQuery = !query || `${project?.number || ''} ${project?.name || ''} ${task.description} ${employee?.name || ''}`.toLowerCase().includes(query);
        const matchesStatus = filters.taskStatus === 'all' || task.status === filters.taskStatus;
        return matchesQuery && matchesStatus;
    }).sort((a, b) => b.task_id - a.task_id);
}

function taskStatusOptions(status) {
    return ['Active', 'Ready for Review', 'Overdue', 'Completed'].map((option) => (
        `<option value="${option}" ${status === option ? 'selected' : ''}>${option}</option>`
    )).join('');
}

function renderTasksPanel() {
    const rows = filteredTasks().map((task) => {
        const project = getProject(task.project_id);
        const employee = getEmployee(task.assignee_id);
        return `
            <tr>
                <td><button class="link-button" type="button" data-action="view-project" data-id="${task.project_id}">${escapeHtml(project?.number || '—')}</button></td>
                <td class="primary-cell">${escapeHtml(task.description)}</td>
                <td>${escapeHtml(employee?.name || '—')}</td>
                <td>${formatDate(task.created_at)}</td>
                <td>${dueDate(task)}</td>
                <td><select class="inline-select" data-action="task-status" data-id="${task.task_id}">${taskStatusOptions(task.status)}</select></td>
            </tr>
        `;
    }).join('');

    return `
        <section class="panel">
            <div class="panel-header">
                <div><h2 class="panel-title">Tasks</h2><p class="panel-subtitle">Changing a task status saves it locally in this browser.</p></div>
                <span class="count-chip">${filteredTasks().length} results</span>
            </div>
            <div class="filters">
                <div class="search-wrap">${icons.search}<input class="input" id="task-search" data-filter="taskSearch" value="${escapeHtml(filters.taskSearch)}" placeholder="Search projects and tasks"></div>
                <select class="select" id="task-status" data-filter="taskStatus">
                    <option value="all" ${filters.taskStatus === 'all' ? 'selected' : ''}>All statuses</option>
                    <option value="Active" ${filters.taskStatus === 'Active' ? 'selected' : ''}>Active</option>
                    <option value="Ready for Review" ${filters.taskStatus === 'Ready for Review' ? 'selected' : ''}>Awaiting review</option>
                    <option value="Overdue" ${filters.taskStatus === 'Overdue' ? 'selected' : ''}>Overdue</option>
                    <option value="Completed" ${filters.taskStatus === 'Completed' ? 'selected' : ''}>Completed</option>
                </select>
                <button class="button button-secondary button-small" type="button" data-action="new-task">${icons.plus}<span>Add</span></button>
            </div>
            <div class="table-wrap">
                <table>
                    <thead><tr><th>Project</th><th>Task description</th><th>Assignee</th><th>Created</th><th>Due date</th><th>Status</th></tr></thead>
                    <tbody>${rows || '<tr><td colspan="6"><div class="empty-state">No matching tasks.</div></td></tr>'}</tbody>
                </table>
            </div>
        </section>
    `;
}

function renderEmployees() {
    const query = filters.peopleSearch.toLowerCase().trim();
    const employees = data.employees.filter((employee) => `${employee.name} ${employee.job_title} ${employee.email}`.toLowerCase().includes(query));
    const cards = employees.map((employee) => {
        const assigned = data.tasks.filter((task) => task.assignee_id === employee.employee_id);
        const active = assigned.filter((task) => task.status !== 'Completed').length;
        return `
            <article class="person-card">
                <h3>${escapeHtml(employee.name)}</h3>
                <p class="person-role">${escapeHtml(employee.job_title)}</p>
                <p class="person-meta">${escapeHtml(employee.email)}</p>
                <p class="person-meta">${escapeHtml(employee.phone)}</p>
                <div class="person-footer">
                    <span class="count-chip">${active} current tasks</span>
                    <button class="button button-secondary button-small" type="button" data-action="edit-employee" data-id="${employee.employee_id}">${icons.edit}<span>Edit</span></button>
                </div>
            </article>
        `;
    }).join('');

    return `
        ${pageHeader('Employees', 'Manage the team and assign tasks.', `<button class="button button-primary" type="button" data-action="new-employee">${icons.plus}<span>New employee</span></button>`)}
        <div class="panel">
            <div class="filters" style="grid-template-columns:1fr auto">
                <div class="search-wrap">${icons.search}<input class="input" id="people-search" data-filter="peopleSearch" value="${escapeHtml(filters.peopleSearch)}" placeholder="Search by name, job title or email"></div>
                <span class="count-chip">${employees.length} employees</span>
            </div>
        </div>
        <section class="people-grid" style="margin-top:18px">${cards || '<div class="empty-state">No results.</div>'}</section>
    `;
}

function renderClients() {
    const query = filters.peopleSearch.toLowerCase().trim();
    const clients = data.clients.filter((client) => `${client.name} ${client.email} ${client.contact_officer}`.toLowerCase().includes(query));
    const rows = clients.map((client) => {
        const projects = data.projects.filter((project) => project.client_id === client.client_id).length;
        return `
            <tr>
                <td class="primary-cell">${escapeHtml(client.name)}</td>
                <td dir="ltr">${escapeHtml(client.email)}</td>
                <td dir="ltr">${escapeHtml(client.phone)}</td>
                <td>${escapeHtml(client.contact_officer)}</td>
                <td><span class="count-chip">${projects} projects</span></td>
                <td><button class="icon-button" type="button" data-action="edit-client" data-id="${client.client_id}" aria-label="Edit client">${icons.edit}</button></td>
            </tr>
        `;
    }).join('');

    return `
        ${pageHeader('Clients', 'Contact details and projects associated with each client.', `<button class="button button-primary" type="button" data-action="new-client">${icons.plus}<span>New client</span></button>`)}
        <section class="panel">
            <div class="filters" style="grid-template-columns:1fr auto">
                <div class="search-wrap">${icons.search}<input class="input" id="people-search" data-filter="peopleSearch" value="${escapeHtml(filters.peopleSearch)}" placeholder="Search by name, email or contact person"></div>
                <span class="count-chip">${clients.length} clients</span>
            </div>
            <div class="table-wrap">
                <table>
                    <thead><tr><th>Client or company</th><th>Email</th><th>Phone</th><th>Contact person</th><th>Projects</th><th>Actions</th></tr></thead>
                    <tbody>${rows || '<tr><td colspan="6"><div class="empty-state">No results.</div></td></tr>'}</tbody>
                </table>
            </div>
        </section>
    `;
}

function openModal(type, id = null) {
    modal = { type, id: id === null ? null : Number(id) };
    renderModal();
}

function closeModal() {
    modal = null;
    const root = document.getElementById('modal-root');
    if (root) root.innerHTML = '';
}

function modalShell(title, body, footer = '', wide = false) {
    return `
        <div class="modal-backdrop" data-action="backdrop-close">
            <section class="modal ${wide ? 'modal-wide' : ''}" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <header class="modal-header">
                    <h2 id="modal-title">${title}</h2>
                    <button class="close-button" type="button" data-action="close-modal" aria-label="Close">${icons.x}</button>
                </header>
                <div class="modal-body">${body}</div>
                ${footer ? `<footer class="modal-footer">${footer}</footer>` : ''}
            </section>
        </div>
    `;
}

function renderModal() {
    const root = document.getElementById('modal-root');
    if (!root || !modal) return;
    if (modal.type === 'project-form') root.innerHTML = projectFormModal(modal.id);
    if (modal.type === 'task-form') root.innerHTML = taskFormModal(modal.id);
    if (modal.type === 'employee-form') root.innerHTML = employeeFormModal(modal.id);
    if (modal.type === 'client-form') root.innerHTML = clientFormModal(modal.id);
    if (modal.type === 'project-detail') root.innerHTML = projectDetailModal(modal.id);
}

function projectFormModal(id) {
    const project = id ? getProject(id) : null;
    const body = `
        <form id="project-form" data-id="${project?.project_id || ''}">
            <div class="form-grid">
                <div class="field field-full"><label for="project-name">Project name</label><textarea class="textarea" id="project-name" name="name" required>${escapeHtml(project?.name || '')}</textarea></div>
                <div class="field"><label for="project-number">File number</label><input class="input" id="project-number" name="number" value="${escapeHtml(project?.number || '')}" required></div>
                <div class="field"><label for="project-type">Type</label><select class="select" id="project-type" name="type" required>
                    ${['Commercial Dispute', 'Employment Dispute', 'Consultation', 'Contract Review', 'Internal Administration'].map((type) => `<option value="${type}" ${project?.type === type ? 'selected' : ''}>${type}</option>`).join('')}
                </select></div>
                <div class="field"><label for="project-client">Client</label><select class="select" id="project-client" name="client_id" required><option value="">Select a client</option>${clientOptions(project?.client_id)}</select></div>
                <div class="field"><label for="project-assignee">Assignee</label><select class="select" id="project-assignee" name="assignee_id" required><option value="">Select an employee</option>${personOptions(project?.assignee_id)}</select></div>
                <div class="field"><label for="project-state">Status</label><select class="select" id="project-state" name="status">
                    ${['Draft', 'Open', 'Closed'].map((status) => `<option value="${status}" ${project?.status === status ? 'selected' : ''}>${status}</option>`).join('')}
                </select></div>
            </div>
        </form>
    `;
    const footer = `
        ${project ? `<button class="button button-danger" type="button" data-action="delete-project" data-id="${project.project_id}">${icons.trash}<span>Delete locally</span></button>` : ''}
        <button class="button button-secondary" type="button" data-action="close-modal">Cancel</button>
        <button class="button button-primary" type="submit" form="project-form">${project ? 'Save changes' : 'Add project'}</button>
    `;
    return modalShell(project ? 'Edit project' : 'New project', body, footer);
}

function taskFormModal(projectId = null) {
    const body = `
        <form id="task-form">
            <div class="form-grid">
                <div class="field field-full"><label for="task-description">Task description</label><textarea class="textarea" id="task-description" name="description" required></textarea></div>
                <div class="field field-full"><label for="task-project">Project</label><select class="select" id="task-project" name="project_id" required><option value="">Select a project</option>${projectOptions(projectId)}</select></div>
                <div class="field"><label for="task-assignee">Assignee</label><select class="select" id="task-assignee" name="assignee_id" required><option value="">Select an employee</option>${personOptions()}</select></div>
                <div class="field"><label for="task-duration">Duration in days</label><input class="input" id="task-duration" name="duration" type="number" min="1" max="90" value="3" required></div>
                <div class="field"><label for="task-state">Status</label><select class="select" id="task-state" name="status">${taskStatusOptions('Active')}</select></div>
            </div>
        </form>
    `;
    const footer = `<button class="button button-secondary" type="button" data-action="close-modal">Cancel</button><button class="button button-primary" type="submit" form="task-form">Add task</button>`;
    return modalShell('New task', body, footer);
}

function employeeFormModal(id) {
    const employee = id ? getEmployee(id) : null;
    const body = `
        <form id="employee-form" data-id="${employee?.employee_id || ''}">
            <div class="form-grid">
                <div class="field"><label for="employee-name">Name</label><input class="input" id="employee-name" name="name" value="${escapeHtml(employee?.name || '')}" required></div>
                <div class="field"><label for="employee-title">Job title</label><input class="input" id="employee-title" name="job_title" value="${escapeHtml(employee?.job_title || '')}" required></div>
                <div class="field"><label for="employee-email">Email address</label><input class="input" id="employee-email" name="email" type="email" value="${escapeHtml(employee?.email || '')}" required></div>
                <div class="field"><label for="employee-phone">Phone</label><input class="input" id="employee-phone" name="phone" value="${escapeHtml(employee?.phone || '')}" required></div>
                <div class="field field-full"><label for="employee-contact">Contact department</label><input class="input" id="employee-contact" name="contact_officer" value="${escapeHtml(employee?.contact_officer || '')}" required></div>
            </div>
        </form>
    `;
    const footer = `<button class="button button-secondary" type="button" data-action="close-modal">Cancel</button><button class="button button-primary" type="submit" form="employee-form">${employee ? 'Save changes' : 'Add employee'}</button>`;
    return modalShell(employee ? 'Edit employee' : 'New employee', body, footer);
}

function clientFormModal(id) {
    const client = id ? getClient(id) : null;
    const body = `
        <form id="client-form" data-id="${client?.client_id || ''}">
            <div class="form-grid">
                <div class="field field-full"><label for="client-name">Client or company name</label><input class="input" id="client-name" name="name" value="${escapeHtml(client?.name || '')}" required></div>
                <div class="field"><label for="client-email">Email address</label><input class="input" id="client-email" name="email" type="email" value="${escapeHtml(client?.email || '')}" required></div>
                <div class="field"><label for="client-phone">Phone</label><input class="input" id="client-phone" name="phone" value="${escapeHtml(client?.phone || '')}" required></div>
                <div class="field field-full"><label for="client-contact">Contact person</label><input class="input" id="client-contact" name="contact_officer" value="${escapeHtml(client?.contact_officer || '')}" required></div>
            </div>
        </form>
    `;
    const footer = `<button class="button button-secondary" type="button" data-action="close-modal">Cancel</button><button class="button button-primary" type="submit" form="client-form">${client ? 'Save changes' : 'Add client'}</button>`;
    return modalShell(client ? 'Edit client' : 'New client', body, footer);
}

function projectDetailModal(id) {
    const project = getProject(id);
    if (!project) return modalShell('Project not found', '<div class="empty-state">The project could not be found.</div>');
    const client = getClient(project.client_id);
    const employee = getEmployee(project.assignee_id);
    const tasks = projectTasks(project.project_id);
    const attachments = data.attachments.filter((attachment) => attachment.project_id === project.project_id);
    const taskRows = tasks.map((task) => `
        <tr>
            <td class="primary-cell">${escapeHtml(task.description)}</td>
            <td>${escapeHtml(getEmployee(task.assignee_id)?.name || '—')}</td>
            <td>${dueDate(task)}</td>
            <td><select class="inline-select" data-action="task-status" data-id="${task.task_id}">${taskStatusOptions(task.status)}</select></td>
        </tr>
    `).join('');
    const attachmentRows = attachments.map((attachment) => `
        <div class="attachment-item"><span>${escapeHtml(attachment.name)}</span><span class="attachment-label">${escapeHtml(attachment.type)}</span></div>
    `).join('');
    const body = `
        <div class="detail-grid">
            <div class="detail-item"><p class="detail-label">File number</p><p class="detail-value">${escapeHtml(project.number)}</p></div>
            <div class="detail-item"><p class="detail-label">Type</p><p class="detail-value">${escapeHtml(project.type)}</p></div>
            <div class="detail-item"><p class="detail-label">Status</p><p class="detail-value">${statusBadge(project.status)}</p></div>
            <div class="detail-item"><p class="detail-label">Client</p><p class="detail-value">${escapeHtml(client?.name || '—')}</p></div>
            <div class="detail-item"><p class="detail-label">Assignee</p><p class="detail-value">${escapeHtml(employee?.name || '—')}</p></div>
            <div class="detail-item"><p class="detail-label">Start date</p><p class="detail-value">${formatDate(project.start_at)}</p></div>
        </div>
        <section class="modal-section"><h3>${escapeHtml(project.name)}</h3></section>
        <section class="modal-section">
            <div class="panel-header" style="padding-inline:0;border:0"><h3>Tasks</h3><button class="button button-secondary button-small" type="button" data-action="new-task-for-project" data-id="${project.project_id}">${icons.plus}<span>Add task</span></button></div>
            <div class="table-wrap" style="border:1px solid var(--line);border-radius:10px"><table><thead><tr><th>Description</th><th>Assignee</th><th>Due date</th><th>Status</th></tr></thead><tbody>${taskRows || '<tr><td colspan="4"><div class="empty-state">No tasks.</div></td></tr>'}</tbody></table></div>
        </section>
        <section class="modal-section"><h3>Attachments</h3><p class="panel-subtitle" style="margin-bottom:10px">Demo names only; there are no files available to download.</p><div class="attachment-list">${attachmentRows || '<div class="empty-state">No attachments.</div>'}</div></section>
    `;
    const footer = `
        <button class="button button-secondary" type="button" data-action="edit-project" data-id="${project.project_id}">${icons.edit}<span>Edit</span></button>
        ${project.status !== 'Closed' ? `<button class="button button-primary" type="button" data-action="close-project" data-id="${project.project_id}">Close project</button>` : ''}
        <button class="button button-secondary" type="button" data-action="close-modal">Close</button>
    `;
    return modalShell('Project details', body, footer, true);
}

function rerenderViewPreservingFocus() {
    const active = document.activeElement;
    const id = active?.id;
    const selection = typeof active?.selectionStart === 'number' ? active.selectionStart : null;
    const content = document.getElementById('page-content');
    if (content) content.innerHTML = renderCurrentView();
    if (id) {
        const replacement = document.getElementById(id);
        if (replacement) {
            replacement.focus();
            if (selection !== null && typeof replacement.setSelectionRange === 'function') replacement.setSelectionRange(selection, selection);
        }
    }
}

function submitProject(form) {
    const values = Object.fromEntries(new FormData(form).entries());
    const id = Number(form.dataset.id || 0);
    const item = id ? getProject(id) : null;
    const project = item || {
        project_id: nextId(data.projects, 'project_id'),
        start_at: new Date().toISOString(),
        closed_at: null
    };
    project.name = cleanText(values.name, 180);
    project.number = cleanText(values.number, 50);
    project.type = cleanText(values.type, 70);
    project.client_id = Number(values.client_id);
    project.assignee_id = Number(values.assignee_id);
    project.status = cleanText(values.status, 30);
    project.closed_at = project.status === 'Closed' ? (project.closed_at || new Date().toISOString()) : null;
    if (!item) data.projects.push(project);
    saveData();
    closeModal();
    renderShell();
    showToast(item ? 'Project changes were saved locally.' : 'The project was added to the demo.');
}

function submitTask(form) {
    const values = Object.fromEntries(new FormData(form).entries());
    data.tasks.push({
        task_id: nextId(data.tasks, 'task_id'),
        project_id: Number(values.project_id),
        description: cleanText(values.description, 300),
        assignee_id: Number(values.assignee_id),
        duration: Math.max(1, Math.min(90, Number(values.duration) || 1)),
        created_at: new Date().toISOString(),
        status: cleanText(values.status, 40)
    });
    saveData();
    closeModal();
    renderShell();
    showToast('The task was added locally.');
}

function submitEmployee(form) {
    const values = Object.fromEntries(new FormData(form).entries());
    const id = Number(form.dataset.id || 0);
    const item = id ? getEmployee(id) : null;
    const employee = item || { employee_id: nextId(data.employees, 'employee_id') };
    employee.name = cleanText(values.name, 100);
    employee.job_title = cleanText(values.job_title, 100);
    employee.email = cleanText(values.email, 120);
    employee.phone = cleanText(values.phone, 30);
    employee.contact_officer = cleanText(values.contact_officer, 100);
    if (!item) data.employees.push(employee);
    saveData();
    closeModal();
    renderShell();
    showToast(item ? 'Employee changes were saved.' : 'The employee was added.');
}

function submitClient(form) {
    const values = Object.fromEntries(new FormData(form).entries());
    const id = Number(form.dataset.id || 0);
    const item = id ? getClient(id) : null;
    const client = item || { client_id: nextId(data.clients, 'client_id') };
    client.name = cleanText(values.name, 120);
    client.email = cleanText(values.email, 120);
    client.phone = cleanText(values.phone, 30);
    client.contact_officer = cleanText(values.contact_officer, 100);
    if (!item) data.clients.push(client);
    saveData();
    closeModal();
    renderShell();
    showToast(item ? 'Client changes were saved.' : 'The client was added.');
}

app.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.target.id === 'login-form') {
        const values = Object.fromEntries(new FormData(event.target).entries());
        if (values.email === DEMO_EMAIL && values.password === DEMO_PASSWORD) {
            sessionStorage.setItem(AUTH_KEY, 'true');
            renderShell();
        } else {
            renderLogin('Use the demo login details shown below the form.');
        }
    }
    if (event.target.id === 'project-form') submitProject(event.target);
    if (event.target.id === 'task-form') submitTask(event.target);
    if (event.target.id === 'employee-form') submitEmployee(event.target);
    if (event.target.id === 'client-form') submitClient(event.target);
});

app.addEventListener('input', (event) => {
    const key = event.target.dataset.filter;
    if (!key || event.target.tagName === 'SELECT') return;
    filters[key] = event.target.value;
    rerenderViewPreservingFocus();
});

app.addEventListener('change', (event) => {
    const filterKey = event.target.dataset.filter;
    if (filterKey) {
        filters[filterKey] = event.target.value;
        rerenderViewPreservingFocus();
        return;
    }
    if (event.target.dataset.action === 'task-status') {
        const task = data.tasks.find((item) => item.task_id === Number(event.target.dataset.id));
        if (!task) return;
        task.status = cleanText(event.target.value, 40);
        saveData();
        if (modal?.type === 'project-detail') renderModal();
        else rerenderViewPreservingFocus();
        showToast('The task status was updated locally.');
    }
});

app.addEventListener('click', (event) => {
    const target = event.target.closest('[data-action]');
    if (!target) return;
    const action = target.dataset.action;
    const id = Number(target.dataset.id || 0);

    if (action === 'quick-login') {
        sessionStorage.setItem(AUTH_KEY, 'true');
        renderShell();
    }

    if (action === 'navigate') {
        currentView = target.dataset.view;
        filters.peopleSearch = '';
        sidebarOpen = false;
        modal = null;
        renderShell();
    }

    if (action === 'toggle-sidebar') {
        sidebarOpen = !sidebarOpen;
        document.getElementById('sidebar')?.classList.toggle('open', sidebarOpen);
    }

    if (action === 'logout') {
        sessionStorage.removeItem(AUTH_KEY);
        modal = null;
        renderLogin();
    }

    if (action === 'reset') {
        const confirmed = window.confirm('Your local changes will be deleted and the original demo data will be restored. Continue?');
        if (!confirmed) return;
        data = clone(seedData);
        saveData();
        modal = null;
        renderShell();
        showToast('The original demo data was restored.');
    }

    if (action === 'new-project') openModal('project-form');
    if (action === 'edit-project') openModal('project-form', id);
    if (action === 'new-task') openModal('task-form');
    if (action === 'new-task-for-project') openModal('task-form', id);
    if (action === 'new-employee') openModal('employee-form');
    if (action === 'edit-employee') openModal('employee-form', id);
    if (action === 'new-client') openModal('client-form');
    if (action === 'edit-client') openModal('client-form', id);
    if (action === 'view-project') openModal('project-detail', id);
    if (action === 'close-modal') closeModal();

    if (action === 'backdrop-close' && event.target === target) closeModal();

    if (action === 'close-project') {
        const project = getProject(id);
        if (!project) return;
        project.status = 'Closed';
        project.closed_at = new Date().toISOString();
        saveData();
        modal = { type: 'project-detail', id };
        renderShell();
        showToast('The project was closed locally.');
    }

    if (action === 'delete-project') {
        const project = getProject(id);
        if (!project) return;
        const confirmed = window.confirm(`Delete the demo project "${project.name}" from this browser?`);
        if (!confirmed) return;
        const taskIds = data.tasks.filter((task) => task.project_id === id).map((task) => task.task_id);
        data.projects = data.projects.filter((item) => item.project_id !== id);
        data.tasks = data.tasks.filter((item) => item.project_id !== id);
        data.attachments = data.attachments.filter((item) => item.project_id !== id && !taskIds.includes(item.task_id));
        saveData();
        closeModal();
        renderShell();
        showToast('The project was deleted from the browser data.');
    }
});

if (sessionStorage.getItem(AUTH_KEY) === 'true') renderShell();
else renderLogin();
