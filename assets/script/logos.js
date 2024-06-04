document.addEventListener("DOMContentLoaded", function() {
    const consoles = [
        "3do", "adam", "advision", "amiga", "amiga1200", "amiga500", "amigacd32", "amigacdtv",
        "amstradcpc", "apfm1000", "arcadia", "astrocade", "atari2600", "atari5200",
        "atari7800", "atarijaguar", "atarilynx", "atomiswave", "c128", "c64", "cave", "cave3rd",
        "cavestory", "cdi", "channelf", "colecovision", "daphne", "dreamcast", "fds", "gaelco",
        "gameandwatch", "gamecom", "gamegear", "gb", "gba", "gbc","gmaster", "gp32", "gx4000", 
        "hikaru", "intellivision", "mame", "mastersystem",
        "megadrive", "msx", "msx1", "msx2", "mugen", "n64","naomi", "naomi2", "nds",
        "neogeo", "neogeocd", "nes", "ngp", "ngpc", "odyssey2", "openbor", "pc", "pc98", "pce-cd",
        "pcengine", "pcfx", "pokemini", "psp", "psx", "pv1000", "satellaview", "saturn", "scummvm",
        "scv", "sega32x", "segacd", "sg1000", "sg-1000", "sgb", "snes", "socrates", "sufami",
        "supergrafx", "supervision", "supracan", "triforce", "videopacplus", "virtualboy", "vsmile",
        "wonderswan", "wonderswancolor", "zxspectrum"
    ];

    const consolesContainer = document.getElementById("consoles-container");

    consoles.forEach(console => {
        const consoleDiv = document.createElement("div");
        consoleDiv.classList.add("console");

        const firstLogoImg = document.createElement("img");
        firstLogoImg.src = `assets/img/logos/${console}/logo.png`;
        firstLogoImg.alt = `${console} - Logo`;
        firstLogoImg.style.maxWidth = "100%";
        firstLogoImg.style.maxHeight = "100%";
        const firstLogoContainer = document.createElement("div");
        firstLogoContainer.classList.add("logo-container");
        firstLogoContainer.appendChild(firstLogoImg);
        consoleDiv.appendChild(firstLogoContainer);

        for (let i = 2; i <= 4; i++) {
            const logoImg = document.createElement("img");
            logoImg.src = `assets/img/logos/${console}/logo${i}.png`;
            logoImg.alt = `${console} - Logo ${i}`;
            logoImg.style.maxWidth = "100%";
            logoImg.style.maxHeight = "100%";
            const logoContainer = document.createElement("div");
            logoContainer.classList.add("logo-container");
            logoContainer.appendChild(logoImg);
            consoleDiv.appendChild(logoContainer);
        }

        const consoleName = document.createElement("span");
        consoleName.textContent = console;
        consoleName.style.textAlign = "center";
        consoleName.style.fontSize = "14px";
        consoleName.style.fontWeight = "bold";
        consoleName.style.color = "white"; 
        consoleDiv.appendChild(consoleName);

        consolesContainer.appendChild(consoleDiv);
    });
});
