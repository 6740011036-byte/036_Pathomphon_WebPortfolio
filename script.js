
document.addEventListener('DOMContentLoaded', () => { 
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const activeClasses = ['text-green-500', 'border-green-500'];
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                const currentId = entry.target.getAttribute('id');

                
                navLinks.forEach(link => {
                    link.classList.remove(...activeClasses);
                    
                    link.classList.add('border-transparent');
                });
                const activeLink = document.querySelector(`.nav-link[href="#${currentId}"]`);
                if (activeLink) {
                    activeLink.classList.remove('border-transparent'); 
                    activeLink.classList.add(...activeClasses); 
                }
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const menuLinks = document.querySelectorAll('.sidebar-link');

    function openSidebar() {
        // เปลี่ยนจาก -translate-x-full เป็น translate-x-full (เอา class ซ่อนออก)
        sidebar.classList.remove('translate-x-full'); 
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
    }

    function closeSidebar() {
        // เพิ่ม translate-x-full กลับเข้าไป (ซ่อนไปทางขวา)
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    }

    if(menuBtn) menuBtn.addEventListener('click', openSidebar);
    if(closeBtn) closeBtn.addEventListener('click', closeSidebar);
    if(overlay) overlay.addEventListener('click', closeSidebar);
    
    menuLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
});