function checkAdminAccess() {
    const isAdmin = localStorage.getItem('isAdmin'); // Or however you store admin status
    if (!isAdmin) {
        window.location.href = '/login.html';
    }
} 