// Initialize user data in localStorage if it doesn't exist
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

if (!localStorage.getItem('analytics')) {
    localStorage.setItem('analytics', JSON.stringify({
        departmentAccess: {},
        quizScores: {},
        moduleCompletions: {}
    }));
}

// Function to show error modal
function showErrorModal(message) {
    document.getElementById('errorMessage').textContent = message;
    document.getElementById('errorModal').classList.remove('hidden');
}

// Function to close error modal
function closeErrorModal() {
    document.getElementById('errorModal').classList.add('hidden');
}

// Function to validate login form
function validateForm(npk, nama, bagian) {
    if (!npk || npk.trim() === '') {
        showErrorModal('NPK harus diisi');
        return false;
    }
    if (!nama || nama.trim() === '') {
        showErrorModal('Nama harus diisi');
        return false;
    }
    if (!bagian || bagian === '') {
        showErrorModal('Bagian harus dipilih');
        return false;
    }
    return true;
}

// Function to update analytics
function updateAnalytics(bagian) {
    const analytics = JSON.parse(localStorage.getItem('analytics'));
    analytics.departmentAccess[bagian] = (analytics.departmentAccess[bagian] || 0) + 1;
    localStorage.setItem('analytics', JSON.stringify(analytics));
}

// Function to initialize user progress
function initializeUserProgress() {
    return {
        modules: {
            basic: { completed: false, score: 0 },
            braking: { completed: false, score: 0 },
            hazard: { completed: false, score: 0 },
            microsleep: { completed: false, score: 0 },
            blindspot: { completed: false, score: 0 }
        },
        commitment: '',
        startTime: new Date().toISOString(),
        lastAccess: new Date().toISOString()
    };
}

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const npk = document.getElementById('npk').value;
    const nama = document.getElementById('nama').value;
    const bagian = document.getElementById('bagian').value;

    if (!validateForm(npk, nama, bagian)) {
        return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem('users'));
    
    // Check if user exists
    let user = users.find(u => u.npk === npk);
    
    if (!user) {
        // Create new user
        user = {
            npk,
            nama,
            bagian,
            progress: initializeUserProgress()
        };
        users.push(user);
    }

    // Update last access time
    user.progress.lastAccess = new Date().toISOString();
    
    // Save updated users array
    localStorage.setItem('users', JSON.stringify(users));
    
    // Update analytics
    updateAnalytics(bagian);
    
    // Save current user
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
});

// Function to check if user is logged in
function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// Function to handle logout
function logout(isCommitmentSubmitted = false) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        // Check if all modules are completed
        const progress = currentUser.progress.modules;
        const allCompleted = Object.values(progress).every(module => module.completed);
        
        if (!isCommitmentSubmitted) {
            if (!allCompleted) {
                showErrorModal('Anda harus menyelesaikan semua modul sebelum keluar');
                return false;
            }
            
            if (!currentUser.progress.commitment) {
                showErrorModal('Anda harus mengisi komitmen keselamatan berkendara sebelum keluar');
                return false;
            }
        }

        // Clear user session and redirect to login
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
        return true;
    }
    
    // If no current user, redirect to login immediately
    window.location.href = 'index.html';
    return true;
}

// Function to force logout (for use in quiz completions and other forced exits)
function forceLogout() {
    localStorage.removeItem('currentUser');
    window.location.replace('index.html');
}

// Export functions for use in other files
window.checkAuth = checkAuth;
window.logout = logout;
window.forceLogout = forceLogout;
window.showErrorModal = showErrorModal;
window.closeErrorModal = closeErrorModal;
