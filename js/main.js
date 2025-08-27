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


// Date/Time Script
const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const elDate = document.getElementById('date');
const elTime = document.getElementById('time');
const elTz = document.getElementById('tz');
const elSmall = document.getElementById('small-datetime');

function updateDateTime() {
    const now = new Date();
    const dateStr = now.toLocaleDateString(undefined, dateOptions);
    const timeStr = now.toLocaleTimeString(undefined, timeOptions);
    const tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;

    elDate.textContent = dateStr;
    elTime.textContent = timeStr;
    elTz.textContent = tzName ? `Timezone: ${tzName}` : '';
    elSmall.textContent = `${dateStr} · ${timeStr}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);