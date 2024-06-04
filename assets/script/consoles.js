document.addEventListener("DOMContentLoaded", function() {
    const consoles = [
        "3do.png", "3ds.png", "64dd.png", "amiga.png", "amiga1200.png", "amiga4000.png",
        "amiga500.png", "amigacd32.png", "amigacdtv.png", "amstradcpc.png", "apple2.png",
        "apple2e.png", "apple2gs.png", "arcade.png", "atari2600.png", "atari5200.png",
        "atari7800.png", "atari800.png", "atarijaguar.png", "atarijaguarcd.png",
        "atarilynx.png", "atarist.png", "atomiswave.png", "c128.png", "c16.png", "c64.png",
        "capcom.png", "channelf.png", "colecovision.png", "cps.png", "cps1.png", "cps2.png",
        "cps3.png", "creativision.png", "apps.png", "daphne.png", "default.png",
        "dreamcast.png", "easyrpg.png", "famicom.png", "fba.png", "fbn.png", "fbneo.png",
        "fds.png", "fmtowns.png", "gameandwatch.png", "gamegear.png", "gb.png", "gb2players.png",
        "gba.png", "gbah.png", "gbc.png", "gbc2players.png", "gbch.png", "gbh.png", "gc.png",
        "genesis.png", "genh.png", "ggh.png", "gw.png", "gx4000.png", "hikaru.png",
        "intellivision.png", "mame.png", "mame-libretro.png", "mastersystem.png", "megadrive.png",
        "megadrive-japan.png", "model2.png", "msx.png", "msx1.png", "msx2.png", "msxturbor.png",
        "multivision.png", "n64.png", "naomi.png", "nds.png", "neogeo.png", "neogeocd.png",
        "nes.png", "nesh.png", "nesjp.png", "ngp.png", "ngpc.png", "odyssey2.png", "oric.png",
        "pc.png", "pc88.png", "pc98.png", "pce-cd.png", "pce-gt.png", "pcengine.png",
        "pcenginecd.png", "pcfx.png", "pet.png", "pico8.png", "pokemini.png", "psp.png",
        "pspminis.png", "psx.png", "samcoupe.png", "satellaview.png", "saturn.png",
        "sc-3000.png", "sega32x.png", "segacd.png", "sfc.png", "sg-1000.png", "snes.png",
        "snesh.png", "snes-msu.png", "snesmsu1.png", "spectravideo.png", "supergrafx.png",
        "supervision.png", "tg16.png", "tg16cd.png", "tg-cd.png", "tg-express.png",
        "thomson.png", "tic80.png", "triforce.png", "universal.png", "vc4000.png",
        "vectrex.png", "vic20.png", "videopac.png", "virtualboy.png", "wonderswan.png",
        "wonderswancolor.png", "x1.png", "x68000.png", "zx81.png", "zxspectrum.png"
    ];

    const consolesContainer = document.getElementById("consoles-container");

    consoles.forEach(console => {
        const consoleDiv = document.createElement("div");
        consoleDiv.classList.add("console");

        const consoleImg = document.createElement("img");
        consoleImg.src = `assets/img/consoles/${console}`;
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
