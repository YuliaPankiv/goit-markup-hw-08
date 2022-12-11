(() =>{
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef=document.querySelector('[data-menu]');

    menuBtnRef.addEventListener("click",  () => {
            const expanded=
            menuBtnRef.getAttribute("area-expanded") ==="true" || false;
            menuBtnRef.classList.toggle("is-open");
            menuBtnRef.setAttribute("area-expanded", !expanded);
            mobileMenuRef.classList.toggle("is-open");
        });
})();