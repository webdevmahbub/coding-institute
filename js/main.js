// FAQ collapsible (vanilla JS)
document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const container = btn.closest('.list-group-item');
        const ans = container.querySelector('.faq-answer');
        const isOpen = ans.classList.contains('show');
        // Close all others
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('show'));
        // Toggle current
        if (!isOpen) { ans.classList.add('show'); }
    });
});