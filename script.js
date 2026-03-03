const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const findBtn = document.getElementById("findBtn");

function getSpecialEvent(day, month, year) {

    if (year !== 2026) return null;

    const events2026 = {

        // January
        "0-1": "New Year’s Day 🎉 – Beginning of a fresh year.",
        "0-14": "Maghe Sankranti 🌞 – Festival marking winter solstice.",
        "0-26": "Republic Day 🇮🇳 – Celebration of Constitution.",

        // February (Valentine Week)
        "1-7": "Rose Day 🌹 – Start of Valentine Week.",
        "1-8": "Propose Day 💍 – Express your love.",
        "1-9": "Chocolate Day 🍫 – Share sweetness.",
        "1-10": "Teddy Day 🧸 – Gift affection.",
        "1-11": "Promise Day 🤝 – Make commitments.",
        "1-12": "Hug Day 🤗 – Spread warmth.",
        "1-13": "Kiss Day 💋 – Celebrate closeness.",
        "1-14": "Valentine’s Day ❤️ – Celebration of love.",

        // March
        "2-8": "International Women's Day 🌷 – Celebrating women.",
        "2-25": "Holi 🎨 – Festival of colors.",

        // April
        "3-14": "Nepali New Year 🇳🇵 – Bikram Sambat New Year.",
        "3-22": "Earth Day 🌍 – Awareness for environment.",

        // May
        "4-1": "Labour Day 👷 – Workers' celebration.",
        "4-15": "Buddha Jayanti 🕊️ – Birth of Lord Buddha.",

        // August
        "7-15": "Independence Day 🇮🇳 – Freedom celebration.",

        // September
        "8-5": "Teacher’s Day 🍎 – Respect for teachers.",

        // October
        "9-2": "Gandhi Jayanti 🕊️ – Birth anniversary of Mahatma Gandhi.",
        "9-24": "Dashain 🪔 – Biggest Hindu festival.",
        "9-31": "Creator Birthday🥳💥",

        // November
        "10-4": "Tihar 🪔 – Festival of lights in Nepal.",

        // December
        "11-1": "Cosmo Rising Day💫, Start of End💥🔥",
        "11-25": "Christmas 🎄 – Festival of joy and giving."
    };

    return events2026[`${month}-${day}`] || null;
}

function findDay() {

    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    if (isNaN(day) || day < 1 || day > 31 || isNaN(year)) {
        document.getElementById("result").innerHTML =
            "<p>Please enter valid day and year</p>";
        dayInput.focus();
        return;
    }

    const date = new Date(year, month, day);

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekday = daysOfWeek[date.getDay()];

    const monthNames = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    const specialEvent = getSpecialEvent(day, month, year);

    if (specialEvent) {

        // Print ONLY event (no "Auspicious Day")
        document.getElementById("result").innerHTML =
            `<h3>${day} ${monthNames[month]} ${year} (${weekday})<br>
            ${specialEvent}</h3>`;

    } else {

        document.getElementById("result").innerHTML =
            `<h3>On ${day} ${monthNames[month]} ${year}, it is ${weekday}</h3>`;
    }
}

findBtn.addEventListener("click", findDay);

dayInput.addEventListener("keyup", (e) => { if (e.key === "Enter") findDay(); });
yearInput.addEventListener("keyup", (e) => { if (e.key === "Enter") findDay(); });
monthInput.addEventListener("keyup", (e) => { if (e.key === "Enter") findDay(); });