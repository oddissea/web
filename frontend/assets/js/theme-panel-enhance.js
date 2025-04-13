const setTheme = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.dispatchEvent(new CustomEvent(app.darkMode.eventName));
};

const resetThemeSwitches = (activeSwitchId) => {
    ['appThemeDarkMode', 'appThemeAccessibleMode', 'appThemeHighContrastMode'].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.id !== activeSwitchId) {
            el.checked = false;
        }
    });
};

document.getElementById('appThemeDarkMode').addEventListener('change', function() {
    if (this.checked) {
        resetThemeSwitches(this.id);
        setTheme('dark');
    } else {
        setTheme('light');
    }
});

document.getElementById('appThemeAccessibleMode').addEventListener('change', function() {
    if (this.checked) {
        resetThemeSwitches(this.id);
        setTheme('accessible');
    } else {
        setTheme('light');
    }
});

document.getElementById('appThemeHighContrastMode').addEventListener('change', function() {
    if (this.checked) {
        resetThemeSwitches(this.id);
        setTheme('high-contrast');
    } else {
        setTheme('light');
    }
});

document.addEventListener('theme-reload', function () {
    const isHighContrast = document.documentElement.getAttribute('data-bs-theme') === 'high-contrast';
    const themeColorBoxes = document.querySelectorAll('.theme-panel .theme-list-item a');

    themeColorBoxes.forEach(el => {
        if (isHighContrast) {
            el.setAttribute('tabindex', '-1');     // lo saca del foco tab
            el.setAttribute('aria-hidden', 'true'); // opcional, mejora accesibilidad
        } else {
            el.removeAttribute('tabindex');
            el.removeAttribute('aria-hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Forzar modo normal por defecto al cargar
    document.documentElement.removeAttribute('data-bs-theme');

    // Desmarcar todos los switches
    ['appThemeDarkMode', 'appThemeAccessibleMode', 'appThemeHighContrastMode'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.checked = false;
        }
    });
});


