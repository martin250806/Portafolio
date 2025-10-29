    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("header nav a");

    console.log("Secciones encontradas:", sections.length);
    console.log("Enlaces encontrados:", navLinks.length);

    // Scroll listener robusto
    window.addEventListener("scroll", () => {
      let current = sections[0].id; // por defecto primera sección

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 0) { // cerca de la parte superior
          current = section.id;
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });

    // Activar el enlace de la primera sección al cargar
    navLinks[0].classList.add("active");