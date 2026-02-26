// Data Definitions
const topics = {
    cities: {
        title: "Dünya Şehirleri",
        description: "Dünyanın en önemli 20 şehri ve özellikleri.",
        data: [
            { word: "ANKARA", clue: "Modern Türkiye'nin kurucusu Atatürk'ün mozolesinin bulunduğu, Türkiye'nin başkenti ve idari merkezi." },
            { word: "İSTANBUL", clue: "Asya ve Avrupa kıtalarını birbirine bağlayan, Boğaziçi'nin incisi ve tarihi yarımadasıyla ünlü metropol." },
            { word: "PARİS", clue: "Eyfel Kulesi, Louvre Müzesi gibi simgeleriyle tanınan, modanın ve romantizmin dünya başkenti olarak bilinen şehir." },
            { word: "LONDRA", clue: "Big Ben kulesi, kırmızı otobüsleri ve Thames Nehri ile ikonikleşmiş, Birleşik Krallık'ın başkenti." },
            { word: "NEWYORK", clue: "Özgürlük Heykeli, Times Meydanı ve gökdelenleriyle ünlü, 'Hiç uyumayan şehir' lakaplı Amerikan metropolü." },
            { word: "TOKYO", clue: "Geleneksel tapınakları fütüristik teknolojiyle harmanlayan, dünyanın en kalabalık metropol alanına sahip Japonya başkenti." },
            { word: "ROMA", clue: "Kolezyum ve Vatikan'a ev sahipliği yapan, 'Ebedi Şehir' olarak anılan İtalya'nın tarihi başkenti." },
            { word: "BERLİN", clue: "Soğuk Savaş döneminde bir duvarla bölünmüş, günümüzde sanat ve kültürün merkezi olan Almanya'nın başkenti." },
            { word: "MOSKOVA", clue: "Kızıl Meydan ve renkli soğan kubbeli Kremlin Sarayı ile tanınan, Rusya'nın kalbi ve başkenti." },
            { word: "KAHİRE", clue: "Giza Piramitleri ve Sfenks'in yanı başında, Nil Nehri kıyısında kurulmuş Afrika'nın en büyük şehirlerinden biri." },
            { word: "ATİNA", clue: "Akropolis ve Parthenon tapınağıyla Batı medeniyetinin beşiği sayılan, Yunanistan'ın tarihi başkenti." },
            { word: "PEKİN", clue: "Yasak Şehir ve Çin Seddi'nin yakınlarında bulunan, Çin Halk Cumhuriyeti'nin devasa başkenti." },
            { word: "SYDNEY", clue: "Yelken şeklindeki Opera Binası ve Liman Köprüsü ile ünlü, Avustralya'nın en tanınmış ve canlı şehri." },
            { word: "VENEDİK", clue: "Yolları yerine kanalları ve gondollarıyla meşhur, San Marco Meydanı'na sahip yüzen İtalyan şehri." },
            { word: "DUBAİ", clue: "Dünyanın en yüksek binası Burç Halife'ye ev sahipliği yapan, lüks alışveriş ve modern mimarinin çöl içindeki vahası." },
            { word: "MADRİD", clue: "Kraliyet Sarayı ve Prado Müzesi ile zengin bir kültüre sahip, İspanya'nın hareketli başkenti." },
            { word: "VİYANA", clue: "Mozart ve Beethoven gibi bestecilere ev sahipliği yapmış, sarayları ve klasik müziğiyle ünlü Avusturya başkenti." },
            { word: "AMSTERDAM", clue: "Bisikletleri, kanalları ve renkli lale bahçeleriyle tanınan, Hollanda'nın özgürlükçü başkenti." },
            { word: "TORONTO", clue: "CN Kulesi ile silüeti belirlenen, Kanada'nın en büyük, çok kültürlü ve dinamik şehri." },
            { word: "BARSELONA", clue: "Mimar Gaudi'nin eseri Sagrada Familia bazilikasıyla ünlü, İspanya'nın Katalonya bölgesindeki sahil şehri." }
        ]
    },
    science: {
        title: "Bilim ve Teknoloji",
        description: "Temel bilim terimleri, icatlar ve teknolojik kavramlar.",
        data: [
            { word: "ATOM", clue: "Maddenin en küçük yapı taşı." },
            { word: "GRAVİTE", clue: "Kütlesi olan cisimlerin birbirini çekmesi, yerçekimi." },
            { word: "DNA", clue: "Canlıların genetik kodunu taşıyan molekül." },
            { word: "EVRİM", clue: "Canlı türlerinin zaman içinde değişerek yeni türlere dönüşmesi süreci." },
            { word: "ROBOT", clue: "Programlanabilir, otomatik iş yapabilen makine." },
            { word: "YAZILIM", clue: "Bilgisayara ne yapması gerektiğini söyleyen komutlar bütünü." },
            { word: "İNTERNET", clue: "Dünya genelindeki bilgisayar ağlarını birbirine bağlayan sistem." },
            { word: "BAKTERİ", clue: "Tek hücreli mikroorganizma." },
            { word: "FOTOSENTEZ", clue: "Bitkilerin güneş ışığını kullanarak besin üretmesi." },
            { word: "ENERJİ", clue: "İş yapabilme yeteneği." },
            { word: "TELESKOP", clue: "Uzaktaki gök cisimlerini gözlemlemeye yarayan optik araç." },
            { word: "MİKROSKOP", clue: "Gözle görülemeyecek kadar küçük cisimleri büyütmeye yarayan alet." },
            { word: "ELEKTRİK", clue: "Elektronların akışıyla oluşan enerji türü." },
            { word: "ALGORİTMA", clue: "Bir problemin çözümü için izlenen işlem basamakları." },
            { word: "YAPAYZEKA", clue: "İnsan zekasını taklit eden bilgisayar sistemleri." }
        ]
    },
    history: {
        title: "Tarih Yolculuğu",
        description: "Tarihi olaylar, dönemler ve önemli şahsiyetler.",
        data: [
            { word: "SÜMERLER", clue: "Yazıyı bulan ilk uygarlık." },
            { word: "PİRAMİT", clue: "Mısır firavunları için yapılan anıt mezarlar." },
            { word: "RÖNESANS", clue: "Avrupa'da bilim ve sanatın yeniden doğduğu dönem." },
            { word: "OSMANLI", clue: "600 yıl hüküm sürmüş büyük Türk imparatorluğu." },
            { word: "CUMHURİYET", clue: "Halkın kendi kendini yönettiği yönetim şekli." },
            { word: "MALAZGİRT", clue: "1071 yılında Anadolu'nun kapılarını Türklere açan savaş." },
            { word: "FATİH", clue: "İstanbul'u fetheden padişahın unvanı." },
            { word: "HİTİT", clue: "Hattuşaş merkezli eski Anadolu uygarlığı." },
            { word: "MEZOPOTAMYA", clue: "İki nehir arası anlamına gelen, medeniyetlerin doğduğu bölge." },
            { word: "VİKİNG", clue: "Kuzey Avrupa'dan denize açılarak yağmalar ve keşifler yapan savaşçı halk." }
        ]
    }
};

// Engine
class CrosswordGenerator {
    constructor(wordList) {
        this.wordList = wordList; // { word, clue }
        this.gridSize = 80;
        this.grid = Array(this.gridSize).fill().map(() => Array(this.gridSize).fill(null));
        this.placedWords = [];
    }

    generate() {
        this.wordList.sort((a, b) => b.word.length - a.word.length);

        const firstWord = this.wordList[0];
        const startX = Math.floor(this.gridSize / 2) - Math.floor(firstWord.word.length / 2);
        const startY = Math.floor(this.gridSize / 2);

        this.placeWord(firstWord, startX, startY, 'across');

        const remainingWords = this.wordList.slice(1);
        this.backtrackPlace(remainingWords);

        return {
            grid: this.grid,
            placedWords: this.placedWords,
            bounds: this.getBounds()
        };
    }

    backtrackPlace(words) {
        if (words.length === 0) return true;

        const currentWordObj = words[0];
        const word = currentWordObj.word;

        const potentialPlacements = this.findPotentialPlacements(word);

        potentialPlacements.sort(() => Math.random() - 0.5);

        for (const placement of potentialPlacements) {
            if (this.canPlace(word, placement.x, placement.y, placement.direction)) {
                this.placeWord(currentWordObj, placement.x, placement.y, placement.direction);

                if (this.backtrackPlace(words.slice(1))) {
                    return true;
                }

                this.removeWord(currentWordObj);
            }
        }

        return this.backtrackPlace(words.slice(1));
    }

    findPotentialPlacements(word) {
        const placements = [];
        const letters = word.split('');
        const shuffledPlacedWords = [...this.placedWords].sort(() => 0.5 - Math.random());

        for (const placed of shuffledPlacedWords) {
            const placedWordStr = placed.word;

            for (let i = 0; i < letters.length; i++) {
                const letter = letters[i];

                for (let j = 0; j < placedWordStr.length; j++) {
                    if (placedWordStr[j] === letter) {
                        if (placed.direction === 'across') {
                            placements.push({
                                x: placed.x + j,
                                y: placed.y - i,
                                direction: 'down'
                            });
                        } else {
                            placements.push({
                                x: placed.x - i,
                                y: placed.y + j,
                                direction: 'across'
                            });
                        }
                    }
                }
            }
        }
        return placements;
    }

    canPlace(word, x, y, direction) {
        if (x < 0 || y < 0 || x >= this.gridSize || y >= this.gridSize) return false;

        if (direction === 'across') {
            if (x + word.length >= this.gridSize) return false;
        } else {
            if (y + word.length >= this.gridSize) return false;
        }

        for (let i = 0; i < word.length; i++) {
            const cx = direction === 'across' ? x + i : x;
            const cy = direction === 'across' ? y : y + i;
            const letter = word[i];
            const cell = this.grid[cy][cx];

            if (cell !== null && cell !== letter) return false;

            if (cell === null) {
                if (direction === 'across') {
                    if (this.grid[cy - 1] && this.grid[cy - 1][cx] !== null) return false;
                    if (this.grid[cy + 1] && this.grid[cy + 1][cx] !== null) return false;
                } else {
                    if (this.grid[cy][cx - 1] !== null) return false;
                    if (this.grid[cy][cx + 1] !== null) return false;
                }
            }
        }

        if (direction === 'across') {
            if (x > 0 && this.grid[y][x - 1] !== null) return false;
            if (x + word.length < this.gridSize && this.grid[y][x + word.length] !== null) return false;
        } else {
            if (y > 0 && this.grid[y - 1][x] !== null) return false;
            if (y + word.length < this.gridSize && this.grid[y + word.length][x] !== null) return false;
        }

        return true;
    }

    placeWord(wordObj, x, y, direction) {
        for (let i = 0; i < wordObj.word.length; i++) {
            const cx = direction === 'across' ? x + i : x;
            const cy = direction === 'across' ? y : y + i;
            this.grid[cy][cx] = wordObj.word[i];
        }
        this.placedWords.push({ ...wordObj, x, y, direction });
    }

    removeWord(wordObj) {
        const target = this.placedWords.pop();
        if (!target || target.word !== wordObj.word) throw new Error("Stack mismatch");
        this.rebuildGrid();
    }

    rebuildGrid() {
        for (let y = 0; y < this.gridSize; y++) {
            for (let x = 0; x < this.gridSize; x++) {
                this.grid[y][x] = null;
            }
        }
        for (const wordObj of this.placedWords) {
            const { word, x, y, direction } = wordObj;
            for (let i = 0; i < word.length; i++) {
                const cx = direction === 'across' ? x + i : x;
                const cy = direction === 'across' ? y : y + i;
                this.grid[cy][cx] = word[i];
            }
        }
    }

    getBounds() {
        let minX = this.gridSize, minY = this.gridSize, maxX = 0, maxY = 0;
        for (const p of this.placedWords) {
            if (p.x < minX) minX = p.x;
            if (p.y < minY) minY = p.y;
            const endX = p.direction === 'across' ? p.x + p.word.length : p.x + 1;
            const endY = p.direction === 'across' ? p.y + 1 : p.y + p.word.length;
            if (endX > maxX) maxX = endX;
            if (endY > maxY) maxY = endY;
        }
        return { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY };
    }
}

// Global Logic
let boardState = {
    grid: [],
    words: [],
    bounds: {},
    cells: {},
    activeWord: null,
    activeWordIndex: 0,
    completed: false,
    isNavigating: false,
    currentTopicKey: null,
    currentCustomData: null,
    solutionShown: false
};

// UI Elements
const gridElement = document.getElementById('crossword-grid');
const acrossContainer = document.getElementById('clues-across');
const downContainer = document.getElementById('clues-down');
const menuOverlay = document.getElementById('menu-overlay');
const gameContainer = document.getElementById('game-container');
const topicListDiv = document.getElementById('topic-list');
const puzzleTitleEl = document.getElementById('puzzle-title');
const puzzleDescEl = document.getElementById('puzzle-desc');
const toastEl = document.getElementById('toast');

// URL Sharing Logic
function handleUrlOrMenu() {
    const params = new URLSearchParams(window.location.search);
    const topicKey = params.get('topic');
    const encodedData = params.get('data');
    const adminKey = params.get('admin');

    // Admin password check
    const ADMIN_PASSWORD = 'maviblue2000';
    const isAdmin = adminKey === ADMIN_PASSWORD;

    // Hide menu button by default (security), show only for admin
    const menuButtons = document.querySelectorAll('.header-controls .btn-small');
    menuButtons.forEach(btn => {
        if (btn.textContent.includes('Menü')) {
            btn.style.display = isAdmin ? 'inline-block' : 'none';
        }
    });

    if (topicKey && topics[topicKey]) {
        // Load stock topic
        const t = topics[topicKey];
        startGame(t.data, t.title, t.description);
        boardState.currentTopicKey = topicKey;
    } else if (encodedData) {
        // Load custom data
        try {
            const jsonStr = decodeURIComponent(escape(window.atob(encodedData)));
            const puzzleData = JSON.parse(jsonStr); // { title: "...", data: [...] }
            if (puzzleData.data && Array.isArray(puzzleData.data)) {
                startGame(puzzleData.data, puzzleData.title || "Özel Bulmaca", "Paylaşılan Bulmaca");
                boardState.currentCustomData = puzzleData;
            } else {
                throw new Error("Invalid structure");
            }
        } catch (e) {
            console.error("Failed to parse shared data", e);
            alert("Paylaşılan bulmaca yüklenemedi. Link bozuk olabilir.");
            showMenu();
        }
    } else if (isAdmin) {
        // Admin mode - show menu
        showMenu();
    } else {
        // No parameters and not admin - hide everything, show message
        menuOverlay.style.display = 'flex';
        const menuCard = menuOverlay.querySelector('.menu-card');
        menuCard.innerHTML = `
            <h1>Bulmaca Stüdyosu</h1>
            <p style="margin: 20px 0; color: #666;">Bu sayfa bulmaca paylaşımı içindir.</p>
            <p style="font-size: 0.9rem; color: #888;">Bir bulmaca linki almak için oluşturucuyla iletişime geçin.</p>
        `;
    }
}

window.sharePuzzle = function () {
    let shareUrl = window.location.origin + window.location.pathname;

    if (boardState.currentTopicKey) {
        shareUrl += `?topic=${boardState.currentTopicKey}`;
    } else if (boardState.currentCustomData) {
        const payload = {
            title: puzzleTitleEl.innerText,
            data: boardState.words.map(w => ({ word: w.word, clue: w.clue })) // Only need minimal data
        };
        // Use Base64 to encode
        // Simple unicode safe base64 encoding
        const str = JSON.stringify(payload);
        const encoded = window.btoa(unescape(encodeURIComponent(str)));
        shareUrl += `?data=${encoded}`;
    } else {
        // Fallback for custom created but not yet shared context, reconstruct from state
        // (This happens if user created via menu but URL isn't updated yet)
        const payload = {
            title: puzzleTitleEl.innerText,
            data: boardState.words.map(w => ({ word: w.word, clue: w.clue }))
        };
        const str = JSON.stringify(payload);
        const encoded = window.btoa(unescape(encodeURIComponent(str)));
        shareUrl += `?data=${encoded}`;
    }

    navigator.clipboard.writeText(shareUrl).then(() => {
        showToast();
    }).catch(err => {
        alert("Link kopyalanamadı: " + shareUrl);
    });
}

function showToast() {
    toastEl.className = "show";
    setTimeout(() => { toastEl.className = toastEl.className.replace("show", ""); }, 3000);
}

// Menu Functions
function initMenu() {
    topicListDiv.innerHTML = '';
    Object.keys(topics).forEach(key => {
        const t = topics[key];
        const btn = document.createElement('button');
        btn.classList.add('topic-btn');
        btn.innerHTML = `
            ${t.title} <br>
            <span style="font-size:0.8rem; font-weight:400; opacity:0.8">${t.data.length} Kelime</span>
        `;
        btn.onclick = () => {
            // Clean URL params when selecting from menu
            history.pushState({}, "", window.location.pathname);
            boardState.currentTopicKey = key;
            boardState.currentCustomData = null;
            startGame(t.data, t.title, t.description);
        };
        topicListDiv.appendChild(btn);
    });

    // Load saved puzzles
    loadSavedPuzzles();
}

// Archive Functions
window.saveToArchive = function () {
    const text = document.getElementById('custom-text').value;
    const title = document.getElementById('custom-title').value || "Özel Bulmaca";

    if (!text.trim()) {
        alert("Lütfen en az bir kelime girin!");
        return;
    }

    // Parse Data
    const lines = text.split('\n');
    const customData = [];

    lines.forEach(line => {
        if (line.includes(':')) {
            const parts = line.split(':');
            const w = parts[0].trim().toUpperCase('tr-TR').replace(/[^A-ZÇĞIİÖŞÜ]/g, '');
            const c = parts.slice(1).join(':').trim();
            if (w.length > 1 && c.length > 0) {
                customData.push({ word: w, clue: c });
            }
        }
    });

    if (customData.length < 2) {
        alert("Geçerli format: KELİME: İpucu\nEn az 2 kelime giriniz.");
        return;
    }

    // Create archive entry
    const archiveEntry = {
        title: title,
        data: customData,
        date: new Date().toISOString(),
        dateString: new Date().toLocaleDateString('tr-TR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };

    // Get existing archives
    let archives = JSON.parse(localStorage.getItem('puzzleArchives') || '[]');
    
    // Check limit (50 puzzles max)
    if (archives.length >= 50) {
        if (!confirm(`Arşivde ${archives.length} bulmaca var. Eski bulmacalar silinsin mi?\n\nYeni bulmaca eklemek için yer açmanız gerekiyor.`)) {
            return;
        }
        archives = archives.slice(0, 40);
    }
    
    archives.unshift(archiveEntry);
    
    try {
        localStorage.setItem('puzzleArchives', JSON.stringify(archives));
        alert(`"${title}" arşive kaydedildi! ✅`);
        loadSavedPuzzles();
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            alert('❌ Depolama alanı dolu!\n\nLütfen eski bulmacalarınızı silin.');
            if (confirm('En eski 20 bulmacayı silmek ister misiniz?')) {
                archives = archives.slice(1, 31);
                try {
                    localStorage.setItem('puzzleArchives', JSON.stringify(archives));
                    alert('✅ Yer açıldı! Şimdi tekrar deneyin.');
                    loadSavedPuzzles();
                } catch (e2) {
                    alert('❌ Hata devam ediyor. Tarayıcı ayarlarını kontrol edin.');
                }
            }
        }
    }
}

function loadSavedPuzzles() {
    const archives = JSON.parse(localStorage.getItem('puzzleArchives') || '[]');
    const listContainer = document.getElementById('saved-puzzles-list');
    const divider = document.getElementById('archive-divider');

    if (archives.length === 0) {
        listContainer.style.display = 'none';
        divider.style.display = 'none';
        return;
    }

    listContainer.style.display = 'block';
    divider.style.display = 'flex';
    listContainer.innerHTML = '';

    // Warning if too many puzzles
    if (archives.length > 40) {
        const warning = document.createElement('div');
        warning.style.cssText = 'background: #fff3cd; border: 2px solid #ffc107; border-radius: 8px; padding: 12px; margin-bottom: 15px; text-align: center;';
        warning.innerHTML = `<p style="margin: 0; color: #856404; font-size: 0.9rem;">⚠️ Arşivde ${archives.length} bulmaca var. ${archives.length >= 45 ? '<br><strong>Yakında depolama dolacak!</strong>' : ''}</p>`;
        listContainer.appendChild(warning);
    }

    archives.forEach((archive, index) => {
        const card = document.createElement('div');
        card.classList.add('saved-puzzle-card');
        card.innerHTML = `
            <div style="flex: 1;">
                <h3 style="margin: 0 0 5px 0; color: var(--color-olive);">${archive.title}</h3>
                <p style="margin: 0; font-size: 0.85rem; color: #666;">${archive.dateString}</p>
                <p style="margin: 5px 0 0 0; font-size: 0.85rem; color: #888;">${archive.data.length} kelime</p>
            </div>
            <div style="display: flex; gap: 8px;">
                <button class="btn-small" onclick="loadArchivedPuzzle(${index})" style="background: var(--color-sage); color: white;">▶ Aç</button>
                <button class="btn-small" onclick="deleteArchivedPuzzle(${index})" style="background: #e74c3c; color: white; border: none;">🗑️</button>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

window.loadArchivedPuzzle = function (index) {
    const archives = JSON.parse(localStorage.getItem('puzzleArchives') || '[]');
    const archive = archives[index];

    if (archive) {
        boardState.currentCustomData = { title: archive.title, data: archive.data };
        boardState.currentTopicKey = null;
        startGame(archive.data, archive.title, `${archive.data.length} Kelimelik Özel Bulmaca`);
    }
}

window.deleteArchivedPuzzle = function (index) {
    const archives = JSON.parse(localStorage.getItem('puzzleArchives') || '[]');
    const archive = archives[index];

    if (confirm(`"${archive.title}" bulmacasını silmek istediğinize emin misiniz?`)) {
        archives.splice(index, 1);
        localStorage.setItem('puzzleArchives', JSON.stringify(archives));
        loadSavedPuzzles();
    }
}

window.showMenu = function () {
    menuOverlay.style.display = 'flex';
    gameContainer.style.display = 'none';
    document.getElementById('win-modal').style.display = 'none';
    // Clear URL so back button works or sharing doesn't get confused?
    // Optionally keep it, but visual clear is nice
    history.pushState({}, "", window.location.pathname);
}

window.toggleCustomInput = function () {
    const el = document.getElementById('custom-input-area');
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

window.startCustomGame = function () {
    const text = document.getElementById('custom-text').value;
    const title = document.getElementById('custom-title').value || "Özel Bulmaca";

    if (!text.trim()) {
        alert("Lütfen en az bir kelime girin!");
        return;
    }

    // Parse Data
    const lines = text.split('\n');
    const customData = [];

    lines.forEach(line => {
        if (line.includes(':')) {
            const parts = line.split(':');
            const w = parts[0].trim().toUpperCase('tr-TR').replace(/[^A-ZÇĞIİÖŞÜ]/g, '');
            const c = parts.slice(1).join(':').trim();
            if (w.length > 1 && c.length > 0) {
                customData.push({ word: w, clue: c });
            }
        }
    });

    if (customData.length < 2) {
        alert("Geçerli format: KELİME: İpucu\nEn az 2 kelime giriniz.");
        return;
    }

    boardState.currentCustomData = { title: title, data: customData };
    boardState.currentTopicKey = null;
    startGame(customData, title, `${customData.length} Kelimelik Özel Bulmaca`);
}

window.startGame = function (data, title, desc) {
    menuOverlay.style.display = 'none';
    gameContainer.style.display = 'flex';

    puzzleTitleEl.innerText = title;
    puzzleDescEl.innerText = desc;

    // Reset State (keep connection info)
    const savedTopic = boardState.currentTopicKey;
    const savedCustom = boardState.currentCustomData;

    boardState = {
        grid: [],
        words: [],
        bounds: {},
        cells: {},
        activeWord: null,
        activeWordIndex: 0,
        completed: false,
        isNavigating: false,
        currentTopicKey: savedTopic,
        currentCustomData: savedCustom,
        solutionShown: false
    };

    // Generate
    if (!generateBoard(data)) {
        alert("Bulmaca oluşturulamadı. Lütfen kelimeleri kontrol edip tekrar deneyin.");
        showMenu();
    }
}

function generateBoard(data) {
    let bestResult = null;
    let maxWords = 0;
    const ATTEMPTS = 20;

    for (let k = 0; k < ATTEMPTS; k++) {
        const dataClone = JSON.parse(JSON.stringify(data));
        const generator = new CrosswordGenerator(dataClone);

        try {
            const result = generator.generate();
            if (result.placedWords.length > maxWords) {
                maxWords = result.placedWords.length;
                bestResult = result;
            }
            if (result.placedWords.length === data.length) break;
        } catch (e) {
            console.warn("Generation error", e);
        }
    }

    if (!bestResult || bestResult.placedWords.length < 2) {
        return false;
    }

    const words = bestResult.placedWords.map(w => ({ ...w }));

    const startPositions = [];
    words.forEach(w => {
        const key = `${w.x},${w.y}`;
        if (!startPositions.find(p => p.key === key)) {
            startPositions.push({ key, x: w.x, y: w.y });
        }
    });

    startPositions.sort((a, b) => (a.y - b.y) || (a.x - b.x));

    startPositions.forEach((p, idx) => {
        p.number = idx + 1;
        words.filter(w => w.x === p.x && w.y === p.y).forEach(w => w.number = p.number);
    });

    boardState.words = words;
    boardState.grid = bestResult.grid;
    boardState.bounds = bestResult.bounds;

    renderBoard();
    renderClues();
    return true;
}

function renderBoard() {
    gridElement.innerHTML = '';
    const { minX, minY, width, height } = boardState.bounds;

    const cols = width + 2;
    const rows = height + 2;

    gridElement.style.gridTemplateColumns = `repeat(${cols}, 32px)`;
    gridElement.style.gridTemplateRows = `repeat(${rows}, 32px)`;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');

            const gx = minX + c - 1;
            const gy = minY + r - 1;

            if (gx >= 0 && gy >= 0 && gx < boardState.grid[0].length && gy < boardState.grid.length) {
                const char = boardState.grid[gy][gx];
                if (char) {
                    cellDiv.classList.add('active');
                    cellDiv.dataset.x = gx;
                    cellDiv.dataset.y = gy;
                    cellDiv.dataset.char = char;

                    const startNum = boardState.words.find(w => w.x === gx && w.y === gy)?.number;
                    if (startNum) {
                        const numSpan = document.createElement('span');
                        numSpan.classList.add('cell-number');
                        numSpan.innerText = startNum;
                        cellDiv.appendChild(numSpan);
                    }

                    const input = document.createElement('input');
                    input.classList.add('input-ghost');
                    input.maxLength = 1;
                    input.style.caretColor = 'transparent';
                    // Mobil iyileştirmeleri: iOS zoom engeli (font-size >= 16px ile birlikte)
                    input.setAttribute('autocomplete', 'off');
                    input.setAttribute('autocorrect', 'off');
                    input.setAttribute('autocapitalize', 'characters');
                    input.setAttribute('spellcheck', 'false');
                    input.setAttribute('inputmode', 'text');
                    cellDiv.appendChild(input);

                    boardState.cells[`${gx},${gy}`] = { el: cellDiv, input };

                    input.addEventListener('focus', () => {
                        handleCellFocus(gx, gy);
                        showMobilePopup();
                    });
                    input.addEventListener('blur', () => {
                        setTimeout(() => {
                            const activeEl = document.activeElement;
                            if (!activeEl || !activeEl.classList.contains('input-ghost')) {
                                closeMobilePopup();
                            }
                        }, 100);
                    });
                    input.addEventListener('input', (e) => handleInput(e, gx, gy));
                    input.addEventListener('keydown', (e) => handleKeyDown(e, gx, gy));
                    input.addEventListener('click', (e) => handleCellClick(e, gx, gy));
                }
            }
            gridElement.appendChild(cellDiv);
        }
    }
}

function renderClues() {
    acrossContainer.innerHTML = '';
    downContainer.innerHTML = '';

    const sortedWords = [...boardState.words].sort((a, b) => a.number - b.number);
    sortedWords.forEach((wordObj) => {
        const div = document.createElement('div');
        div.classList.add('clue-item');

        const originalIndex = boardState.words.indexOf(wordObj);
        div.id = `clue-${originalIndex}`;
        div.innerHTML = `<strong>${wordObj.number}</strong> ${wordObj.clue}`;
        div.onclick = () => selectWord(originalIndex);

        if (wordObj.direction === 'across') {
            acrossContainer.appendChild(div);
        } else {
            downContainer.appendChild(div);
        }
    });
}

function handleCellClick(e, x, y) {
    if (boardState.isNavigating) return;

    const wordsHere = boardState.words.filter(w => {
        if (w.direction === 'across') {
            return w.y === y && x >= w.x && x < w.x + w.word.length;
        } else {
            return w.x === x && y >= w.y && y < w.y + w.word.length;
        }
    });

    if (wordsHere.length === 0) return;

    if (boardState.activeWord !== null) {
        const currentWord = boardState.words[boardState.activeWord];
        const isCurrentActive = wordsHere.includes(currentWord);

        if (isCurrentActive) {
            if (wordsHere.length > 1) {
                const other = wordsHere.find(w => w !== currentWord);
                selectWord(boardState.words.indexOf(other));
                return;
            }
        }
    }

    if (boardState.activeWord !== null) {
        const current = boardState.words[boardState.activeWord];
        if (wordsHere.includes(current)) {
            const index = (current.direction === 'across') ? x - current.x : y - current.y;
            focusCellAt(current, index);
            return;
        }
    }

    selectWord(boardState.words.indexOf(wordsHere[0]));
    const w = boardState.words[boardState.activeWord];
    let index = (w.direction === 'across') ? x - w.x : y - w.y;
    focusCellAt(w, index);
}

function handleCellFocus(x, y) {
    // When navigating (auto-advancing after input), preserve the current active word
    if (boardState.isNavigating && boardState.activeWord !== null) {
        const currentWord = boardState.words[boardState.activeWord];
        const belongs = (currentWord.direction === 'across' && currentWord.y === y && x >= currentWord.x && x < currentWord.x + currentWord.word.length) ||
            (currentWord.direction === 'down' && currentWord.x === x && y >= currentWord.y && y < currentWord.y + currentWord.word.length);

        if (belongs) {
            boardState.activeWordIndex = (currentWord.direction === 'across') ? x - currentWord.x : y - currentWord.y;
            highlightBoard();
            boardState.isNavigating = false;
            return;
        }
        // If the new cell doesn't belong to current word during navigation, something went wrong
        // Reset navigation flag
        boardState.isNavigating = false;
    }

    // Manual focus (not auto-navigation) - check if cell belongs to current active word
    if (boardState.activeWord !== null) {
        const currentWord = boardState.words[boardState.activeWord];
        const belongs = (currentWord.direction === 'across' && currentWord.y === y && x >= currentWord.x && x < currentWord.x + currentWord.word.length) ||
            (currentWord.direction === 'down' && currentWord.x === x && y >= currentWord.y && y < currentWord.y + currentWord.word.length);

        if (belongs) {
            boardState.activeWordIndex = (currentWord.direction === 'across') ? x - currentWord.x : y - currentWord.y;
            highlightBoard();
            return;
        }
    }

    // Cell doesn't belong to current word, find words at this position
    const wordsHere = boardState.words.filter(w => {
        if (w.direction === 'across') {
            return w.y === y && x >= w.x && x < w.x + w.word.length;
        } else {
            return w.x === x && y >= w.y && y < w.y + w.word.length;
        }
    });

    if (wordsHere.length > 0) {
        selectWord(boardState.words.indexOf(wordsHere[0]));
        const w = boardState.words[boardState.activeWord];
        let index = (w.direction === 'across') ? x - w.x : y - w.y;
        focusCellAt(w, index);
    }
}

function selectWord(wordIndex) {
    boardState.activeWord = wordIndex;
    boardState.activeWordIndex = 0;

    highlightBoard();

    document.querySelectorAll('.clue-item').forEach(el => el.classList.remove('active-clue'));
    const clueEl = document.getElementById(`clue-${wordIndex}`);
    if (clueEl) {
        clueEl.classList.add('active-clue');
        clueEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function highlightBoard() {
    Object.values(boardState.cells).forEach(({ el }) => {
        el.classList.remove('highlighted-word');
        el.classList.remove('selected');
    });

    if (boardState.activeWord === null) return;

    const w = boardState.words[boardState.activeWord];
    if (!w) return;

    for (let i = 0; i < w.word.length; i++) {
        const cx = w.direction === 'across' ? w.x + i : w.x;
        const cy = w.direction === 'across' ? w.y : w.y + i;

        const cell = boardState.cells[`${cx},${cy}`];
        if (cell) {
            cell.el.classList.add('highlighted-word');
            if (i === boardState.activeWordIndex) {
                cell.el.classList.add('selected');
            }
        }
    }
}

function focusCellAt(wordObj, index) {
    boardState.isNavigating = true;

    boardState.activeWordIndex = index;
    const cx = wordObj.direction === 'across' ? wordObj.x + index : wordObj.x;
    const cy = wordObj.direction === 'across' ? wordObj.y : wordObj.y + index;

    const cell = boardState.cells[`${cx},${cy}`];
    if (cell) {
        cell.input.focus();
        highlightBoard();
    } else {
        boardState.isNavigating = false;
    }
}

function handleInput(e, x, y) {
    let val = e.target.value;
    val = val.toLocaleUpperCase('tr-TR');
    e.target.value = val;

    if (!val) {
        boardState.isNavigating = false;
        // Remove incorrect class when cell is cleared
        e.target.classList.remove('incorrect');
        return;
    }

    // Check if the entered letter is correct
    const cell = boardState.cells[`${x},${y}`];
    if (cell) {
        const correctChar = cell.el.dataset.char;
        if (val === correctChar) {
            // Correct letter - remove incorrect class
            e.target.classList.remove('incorrect');
        } else {
            // Incorrect letter - add red styling
            e.target.classList.add('incorrect');
        }
    }

    const w = boardState.words[boardState.activeWord];

    // Try to move to next cell
    if (boardState.activeWordIndex < w.word.length - 1) {
        let nextIndex = boardState.activeWordIndex + 1;

        // Skip already filled cells (useful at intersections)
        while (nextIndex < w.word.length) {
            const nextX = w.direction === 'across' ? w.x + nextIndex : w.x;
            const nextY = w.direction === 'across' ? w.y : w.y + nextIndex;
            const nextCell = boardState.cells[`${nextX},${nextY}`];

            // If cell is empty or this is the last cell, stop here
            if (!nextCell || !nextCell.input.value || nextIndex === w.word.length - 1) {
                focusCellAt(w, nextIndex);
                break;
            }

            // Cell is filled, skip to next
            nextIndex++;

            // If we've reached the end, just go to the last cell
            if (nextIndex >= w.word.length) {
                focusCellAt(w, w.word.length - 1);
                break;
            }
        }
    } else {
        boardState.isNavigating = false;
    }

    checkCompletion();
}

function handleKeyDown(e, x, y) {
    const w = boardState.words[boardState.activeWord];
    if (!w) return;

    if (e.key === 'Backspace') {
        e.preventDefault(); // Prevent browser back navigation

        // Delete current cell and move to previous
        if (e.target.value !== '') {
            // Current cell has content, delete it
            e.target.value = '';
            e.target.classList.remove('incorrect'); // Remove red color when deleted
        } else {
            // Current cell is empty, move to previous cell and delete it
            if (boardState.activeWordIndex > 0) {
                const prevIndex = boardState.activeWordIndex - 1;
                const prevX = w.direction === 'across' ? w.x + prevIndex : w.x;
                const prevY = w.direction === 'across' ? w.y : w.y + prevIndex;
                const prevCell = boardState.cells[`${prevX},${prevY}`];
                if (prevCell) {
                    prevCell.input.value = ''; // Clear previous cell
                    prevCell.input.classList.remove('incorrect'); // Remove red color
                    focusCellAt(w, prevIndex); // Move to previous cell
                }
            }
        }
    } else if (e.key === 'ArrowRight') {
        if (w.direction === 'across' && boardState.activeWordIndex < w.word.length - 1) {
            focusCellAt(w, boardState.activeWordIndex + 1);
        }
    } else if (e.key === 'ArrowLeft') {
        if (w.direction === 'across' && boardState.activeWordIndex > 0) {
            focusCellAt(w, boardState.activeWordIndex - 1);
        }
    } else if (e.key === 'ArrowDown') {
        if (w.direction === 'down' && boardState.activeWordIndex < w.word.length - 1) {
            focusCellAt(w, boardState.activeWordIndex + 1);
        }
    } else if (e.key === 'ArrowUp') {
        if (w.direction === 'down' && boardState.activeWordIndex > 0) {
            focusCellAt(w, boardState.activeWordIndex - 1);
        }
    }
}

function checkCompletion() {
    let allCorrect = true;
    for (const key in boardState.cells) {
        const { el, input } = boardState.cells[key];
        const correctChar = el.dataset.char;
        if (input.value !== correctChar) {
            allCorrect = false;
        }
    }
    if (allCorrect && !boardState.completed) {
        boardState.completed = true;
        setTimeout(() => {
            document.getElementById('win-modal').style.display = 'flex';
        }, 300);
    }
}

// Win Modal Management
window.closeWinModal = function () {
    document.getElementById('win-modal').style.display = 'none';
}

// Solution Display Functions
window.confirmShowSolution = function () {
    document.getElementById('solution-confirm-modal').style.display = 'flex';
}

window.closeSolutionModal = function () {
    document.getElementById('solution-confirm-modal').style.display = 'none';
}

window.showSolution = function () {
    // Close the modal
    closeSolutionModal();

    // Mark that solution was shown
    boardState.solutionShown = true;

    // Fill in all correct answers
    for (const key in boardState.cells) {
        const { el, input } = boardState.cells[key];
        const correctChar = el.dataset.char;
        input.value = correctChar;
        input.disabled = true; // Disable editing after showing solution
    }

    // Show a simple notification instead of win modal
    const toast = document.getElementById('toast');
    toast.textContent = 'Çözüm gösteriliyor... 🔍';
    toast.className = 'show';
    setTimeout(() => {
        toast.className = toast.className.replace('show', '');
    }, 2000);
}

// Mobile Popup Functions
window.showMobilePopup = function() {
    // Mobile detection: width <= 768px OR height <= 500px (landscape phones)
    const isMobile = window.innerWidth <= 768 || window.innerHeight <= 500;
    
    if (isMobile && boardState.activeWord !== null) {
        updateMobilePopup();
        const popup = document.getElementById('mobile-clue-popup');
        if (popup) {
            popup.classList.add('show');
        }
    }
}

window.closeMobilePopup = function() {
    const popup = document.getElementById('mobile-clue-popup');
    if (popup) {
        popup.classList.remove('show');
    }
}

function updateMobilePopup() {
    const numberEl = document.getElementById('popup-clue-number');
    const directionEl = document.getElementById('popup-clue-direction');
    const textEl = document.getElementById('popup-clue-text');

    if (!numberEl) return;

    if (boardState.activeWord === null || boardState.activeWord === undefined) {
        numberEl.textContent = '';
        directionEl.textContent = '';
        textEl.textContent = 'Bir kelime seçin...';
        return;
    }

    const word = boardState.words[boardState.activeWord];
    if (word) {
        numberEl.textContent = word.number;
        directionEl.textContent = word.direction === 'across' ? 'YATAY' : 'DİKEY';
        textEl.textContent = word.clue;
    }
}

// Start
initMenu();
handleUrlOrMenu(); // Check on load
