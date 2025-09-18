(() => {
  // <stdin>
  window.addEventListener("load", function() {
    function handleNavigation(e) {
      const href = this.getAttribute("href");
      if (href === "/" || href.startsWith("/#")) {
        e.preventDefault();
        if (window.location.pathname !== "/") {
          window.location.href = href;
          return;
        }
        const targetId = href === "/" ? "top" : href.substring(2);
        const targetElement = targetId === "top" ? document.body : document.getElementById(targetId);
        if (targetElement) {
          if (targetId === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    }
    const menuLinks = document.querySelectorAll("nav a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", handleNavigation);
    });
  });
})();
