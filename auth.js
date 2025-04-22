// Initialize analytics in localStorage
if (!localStorage.getItem('analytics')) {
    localStorage.setItem('analytics', JSON.stringify({
        departmentAccess: {},
        quizScores: {},
        moduleCompletions: {}
    }));
}

// Function to save user data to Netlify Function
async function saveUserToDatabase(userData) {
    try {
        const response = await fetch('/.netlify/functions/saveUser', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
}

// Function to get all users from database
async function getAllUsers() {
    try {
        const response = await fetch('/.netlify/functions/getUsers');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting users:', error);
        throw error;
    }
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
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const npk = document.getElementById('npk').value;
    const nama = document.getElementById('nama').value;
    const bagian = document.getElementById('bagian').value;

    if (!validateForm(npk, nama, bagian)) {
        return;
    }

    try {
        // Get all users from database
        const users = await getAllUsers();
        
        // Check if user exists
        let user = users.find(u => u.data.npk === npk);
        
        let userData = {
            npk,
            nama,
            bagian,
            progress: user ? user.data.progress : initializeUserProgress()
        };

        // Update last access time
        userData.progress.lastAccess = new Date().toISOString();
        
        // Save/update user in database
        await saveUserToDatabase(userData);
        
        // Update analytics
        updateAnalytics(bagian);
        
        // Save current user in localStorage for session
        localStorage.setItem('currentUser', JSON.stringify(userData));
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } catch (error) {
        showErrorModal('Terjadi kesalahan saat login. Silakan coba lagi.');
        console.error('Login error:', error);
    }
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

        // Save final progress to database before logout
        saveUserToDatabase(currentUser).then(() => {
            // Clear user session and redirect to login
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        }).catch(error => {
            console.error('Error saving final progress:', error);
            showErrorModal('Terjadi kesalahan saat menyimpan progress. Silakan coba lagi.');
        });
        return true;
    }
    
    // If no current user, redirect to login immediately
    window.location.href = 'index.html';
    return true;
}

// Export functions for use in other files
window.checkAuth = checkAuth;
window.logout = logout;
window.showErrorModal = showErrorModal;
window.closeErrorModal = closeErrorModal;
