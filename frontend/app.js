// Shared utility functions for all pages

// Get current user from localStorage
function getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

// Update cart count in navigation
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.textContent = totalItems;
    }
}

// Update navigation to show user info
function updateNavigation() {
    const user = getCurrentUser();
    const authButtonContainer = document.getElementById('authButton');

    if (!authButtonContainer) return;

    if (user) {
        // User is logged in
        authButtonContainer.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1rem;">
        ${user.role === 'admin' ? `
          <a href="admin.html" class="btn btn-secondary" style="padding: 0.5rem 1rem;">
            Admin Dashboard 👑
          </a>
        ` : ''}
        <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: var(--radius-sm);">
          <span style="color: var(--text-secondary); font-size: 0.9rem;">👤</span>
          <span style="color: var(--text-primary); font-weight: 600;">${user.username}</span>
        </div>
        <button onclick="logout()" class="btn btn-outline" style="padding: 0.5rem 1rem;">
          Logout
        </button>
      </div>
    `;
    } else {
        // User is not logged in
        authButtonContainer.innerHTML = `
      <a href="login.html" class="btn btn-primary" style="padding: 0.5rem 1.5rem;">Login</a>
    `;
    }
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('user');
        showToast('Logged out successfully', 'info');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }
}

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
    <div style="display: flex; align-items: center; gap: 1rem;">
      <span style="font-size: 1.5rem;">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
      <span>${message}</span>
    </div>
  `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Initialize common functionality
function initCommon() {
    updateCartCount();
    updateNavigation();
}

// Run on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCommon);
} else {
    initCommon();
}
