document.addEventListener("DOMContentLoaded", function() {
    const consoles = [
        "3do.png", "adam.png", "advision.png", "amiga.png", "amiga1200.png", "amiga4000.png",
        "amiga500.png", "amigacd32.png", "amigacdtv.png", "amstradcpc.png", "apps.png",
        "archimedes.png", "arduboy.png", "atari.png", "atari2600.png", "atari800.png",
        "atarijaguar.png", "atarijaguarcd.png", "atarilynx.png", "atarist.png", "atom.png",
        "atomiswave.png", "banpresto.png", "bbcmicro.png", "c128.png", "c20.png", "c64.png",
        "camplynx.png", "capcom.png", "cave.png", "cave3rd.png", "chihiro.png", "coco.png",
        "cplus4.png", "cps1.png", "cps2.png", "cps3.png", "daphne.png", "dataeast.png",
        "default.png", "dreamcast.png", "easyrpg.png", "electron.png", "famicom.png",
        "fba.png", "fbn.png", "fbneo.png", "fds.png", "flash.png", "flatpak.png", "fm7.png",
        "fmtowns.png", "gaelco.png", "gamate.png", "gameandwatch.png", "gamecom.png",
        "gamegear.png", "gamepock.png", "gb.png", "gb2players.png", "gba.png", "gba2players.png",
        "gbc.png", "gbc2players.png", "genesis.png", "genh.png", "gmaster.png", "gottlieb.png",
        "gp32.png", "gx4000.png", "hbmame.png", "hikaru.png", "igs.png", "ikemen.png",
        "irem.png", "jaleco.png", "kaneko.png", "konami.png", "laser310.png", "lcdgames.png",
        "lowresnx.png", "mame.png", "mastersystem.png", "megadrive.png", "megadrive-japan.png",
        "megadrivemsu.png", "megadrive-msu.png", "megaduck.png", "midway.png", "mitchell.png",
        "model2.png", "model3.png", "moonlight.png", "msu-md.png", "msx.png", "msx1.png",
        "msx2.png", "msx2+.png", "msxturbor.png", "n64.png", "namco.png", "naomi.png",
        "naomi2.png", "nds.png", "neogeo.png", "neogeo64.png", "neogeocd.png", "neogeomsv.png",
        "nes.png", "nesh.png", "ngp.png", "ngpc.png", "nichibutsu.png", "nintendo.png",
        "oric.png", "pc.png", "pce-cd.png", "pcengine.png", "pcfx.png", "pet.png", "pico8.png",
        "pokemini.png", "ports.png", "psikyo.png", "psp.png", "pspminis.png", "psx.png",
        "pygame.png", "samcoupe.png", "satellaview.png", "saturn.png", "scummvm.png",
        "sega.png", "sega32x.png", "segacd.png", "segastv.png", "seibukaihatsu.png",
        "sfc.png", "sgb.png", "snes.png", "snesh.png", "snk.png", "socrates.png",
        "spectravideo.png", "sufami.png", "supergrafx.png", "supervision.png", "supracan.png",
        "taito.png", "technos.png", "tecmo.png", "teknoparrot.png", "tg16.png", "tg16cd.png",
        "tg-cd.png", "thomson.png", "ti99.png", "tic80.png", "tic-80.png", "toaplan.png",
        "triforce.png", "tutor.png", "universal.png", "vic20.png", "virtualboy.png", "wasm4.png",
        "wonderswan.png", "wonderswancolor.png", "x1.png", "x68000.png", "zx81.png",
        "zxspectrum.png"
    ];

    const consolesContainer = document.getElementById("consoles-container");

    consoles.forEach(console => {
        const consoleDiv = document.createElement("div");
        consoleDiv.classList.add("console");

        const consoleImg = document.createElement("img");
        consoleImg.src = `assets/img/controles/${console}`;
        consoleImg.alt = console.split(".")[0];
        consoleImg.style.maxWidth = "100%";
        consoleImg.style.maxHeight = "100%";
        consoleDiv.appendChild(consoleImg);

        const consoleName = document.createElement("span");
        consoleName.textContent = console.split(".")[0];
        consoleName.style.textAlign = "center";
        consoleName.style.fontSize = "14px";
        consoleName.style.fontWeight = "bold";
        consoleName.style.color = "white"; 
        consoleDiv.appendChild(consoleName);

        consolesContainer.appendChild(consoleDiv);
    });
});
