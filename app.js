// (() => {
    const openNav = document.querySelector(".menu"),
    closeNav = document.querySelector(".close-menu"),
    navMenu = document.querySelector(".nav-links-container"),
    mediaSize = 992;

    openNav.addEventListener("click", toggleMenu);
    closeNav.addEventListener("click", toggleMenu);

    function toggleMenu() {
        navMenu.classList.toggle("open");
    }
    
    navMenu.addEventListener("click" , (event) => {
        if (
            event.target.hasAttribute("data-toggle") && 
            window.innerWidth <= mediaSize
        ) {
            event.preventDefault();
            const dropdownMenuBranch = event.target.parentElement;

        if (dropdownMenuBranch.classList.contains("active")) {
            collapseDropdownMenu();
        } else {
            if (navMenu.querySelector(".dropdown-menu-branch.active")) {
                collapseDropdownMenu();
            }

            dropdownMenuBranch.classList.add("active");
            const dropdownMenu = dropdownMenuBranch.querySelector(".dropdown-menu");
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
            }
        }
    });

    function collapseDropdownMenu() {
        const activeBranch =
            navMenu.querySelector(".dropdown-menu-branch.active");

        if (activeBranch) {
            activeBranch.classList.remove("active");

            const dropdownMenu =
                activeBranch.querySelector(".dropdown-menu");

            dropdownMenu.removeAttribute("style");
        }
    }

// })();