const mainStages = [	
	//==========
	// MAIN STORY
	//==========

	//Episode 3
	{category: "main", chapter: "Episode 3", stage: "3-1", cm:"yes"},
	{category: "main", chapter: "Episode 3", stage: "3-2", cm:"yes"},
	{category: "main", chapter: "Episode 3", stage: "3-3", cm:"yes"},
	{category: "main", chapter: "Episode 3", stage: "S3-1", cm:"no"},
	{category: "main", chapter: "Episode 3", stage: "S3-2", cm:"no"},
	{category: "main", chapter: "Episode 3", stage: "3-4", cm:"yes"},
	{category: "main", chapter: "Episode 3", stage: "3-5", cm:"yes"},
	{category: "main", chapter: "Episode 3", stage: "3-6", cm:"yes"},
	{category: "main", chapter: "Episode 3", stage: "3-7", cm:"yes"},
	{category: "main", chapter: "Episode 3", stage: "3-8", cm:"yes"},
	{category: "main", chapter: "Episode 3", stage: "S3-3", cm:"no"},
	{category: "main", chapter: "Episode 3", stage: "S3-4", cm:"no"},
	{category: "main", chapter: "Episode 3", stage: "S3-5", cm:"no"},
	{category: "main", chapter: "Episode 3", stage: "S3-6", cm:"no"},
	{category: "main", chapter: "Episode 3", stage: "S3-7", cm:"no"},

	//Episode 4
	{category: "main", chapter: "Episode 4", stage: "4-1", cm:"yes"},
	{category: "main", chapter: "Episode 4", stage: "4-2", cm:"yes"},
	{category: "main", chapter: "Episode 4", stage: "4-3", cm:"yes"},
	{category: "main", chapter: "Episode 4", stage: "S4-1", cm:"no"},
	{category: "main", chapter: "Episode 4", stage: "S4-2", cm:"no"},
	{category: "main", chapter: "Episode 4", stage: "S4-3", cm:"no"},
	{category: "main", chapter: "Episode 4", stage: "4-4", cm:"yes"},
	{category: "main", chapter: "Episode 4", stage: "4-5", cm:"yes"},
	{category: "main", chapter: "Episode 4", stage: "4-6", cm:"yes"},
	{category: "main", chapter: "Episode 4", stage: "S4-4", cm:"no"},
	{category: "main", chapter: "Episode 4", stage: "S4-5", cm:"no"},
	{category: "main", chapter: "Episode 4", stage: "S4-6", cm:"no"},
	{category: "main", chapter: "Episode 4", stage: "4-7", cm:"yes"},
	{category: "main", chapter: "Episode 4", stage: "4-8", cm:"yes"},
	{category: "main", chapter: "Episode 4", stage: "4-9", cm:"yes"},
	{category: "main", chapter: "Episode 4", stage: "S4-7", cm:"no"},
	{category: "main", chapter: "Episode 4", stage: "S4-8", cm:"no"},
	{category: "main", chapter: "Episode 4", stage: "S4-9", cm:"no"},
	{category: "main", chapter: "Episode 4", stage: "S4-10", cm:"no"},
	{category: "main", chapter: "Episode 4", stage: "4-10", cm:"yes"},

	//Episode 5
	{category: "main", chapter: "Episode 5", stage: "5-1", cm:"yes"},
	{category: "main", chapter: "Episode 5", stage: "5-2", cm:"yes"},
	{category: "main", chapter: "Episode 5", stage: "S5-1", cm:"no"},
	{category: "main", chapter: "Episode 5", stage: "S5-2", cm:"no"},
	{category: "main", chapter: "Episode 5", stage: "5-3", cm:"yes"},
	{category: "main", chapter: "Episode 5", stage: "5-4", cm:"yes"},
	{category: "main", chapter: "Episode 5", stage: "5-5", cm:"yes"},
	{category: "main", chapter: "Episode 5", stage: "5-6", cm:"yes"},
	{category: "main", chapter: "Episode 5", stage: "S5-3", cm:"no"},
	{category: "main", chapter: "Episode 5", stage: "S5-4", cm:"no"},
	{category: "main", chapter: "Episode 5", stage: "5-7", cm:"yes"},
	{category: "main", chapter: "Episode 5", stage: "5-8", cm:"yes"},
	{category: "main", chapter: "Episode 5", stage: "5-9", cm:"yes"},
	{category: "main", chapter: "Episode 5", stage: "S5-5", cm:"no"},
	{category: "main", chapter: "Episode 5", stage: "S5-6", cm:"no"},
	{category: "main", chapter: "Episode 5", stage: "S5-7", cm:"no"},
	{category: "main", chapter: "Episode 5", stage: "S5-8", cm:"no"},
	{category: "main", chapter: "Episode 5", stage: "S5-9", cm:"no"},
	{category: "main", chapter: "Episode 5", stage: "5-10", cm:"yes"},
	{category: "main", chapter: "Episode 5", stage: "H5-1", cm:"no"},
	{category: "main", chapter: "Episode 5", stage: "H5-2", cm:"no"},
	{category: "main", chapter: "Episode 5", stage: "H5-3", cm:"no"},
	{category: "main", chapter: "Episode 5", stage: "H5-4", cm:"no"},

	//Episode 6
	{category: "main", chapter: "Episode 6", stage: "6-1", cm:"yes"},
	{category: "main", chapter: "Episode 6", stage: "6-2", cm:"yes"},
	{category: "main", chapter: "Episode 6", stage: "6-3", cm:"yes"},
	{category: "main", chapter: "Episode 6", stage: "6-4", cm:"yes"},
	{category: "main", chapter: "Episode 6", stage: "6-5", cm:"yes"},
	{category: "main", chapter: "Episode 6", stage: "6-8", cm:"yes"},
	{category: "main", chapter: "Episode 6", stage: "6-9", cm:"yes"},
	{category: "main", chapter: "Episode 6", stage: "6-10", cm:"yes"},
	{category: "main", chapter: "Episode 6", stage: "S6-1", cm:"no"},
	{category: "main", chapter: "Episode 6", stage: "S6-2", cm:"no"},
	{category: "main", chapter: "Episode 6", stage: "6-11", cm:"yes"},
	{category: "main", chapter: "Episode 6", stage: "6-12", cm:"yes"},
	{category: "main", chapter: "Episode 6", stage: "6-14", cm:"yes"},
	{category: "main", chapter: "Episode 6", stage: "6-15", cm:"yes"},
	{category: "main", chapter: "Episode 6", stage: "S6-3", cm:"no"},
	{category: "main", chapter: "Episode 6", stage: "S6-4", cm:"no"},
	{category: "main", chapter: "Episode 6", stage: "6-16", cm:"yes"},
	{category: "main", chapter: "Episode 6", stage: "H6-1", cm:"no"},
	{category: "main", chapter: "Episode 6", stage: "H6-2", cm:"no"},
	{category: "main", chapter: "Episode 6", stage: "H6-3", cm:"no"},
	{category: "main", chapter: "Episode 6", stage: "H6-4", cm:"no"},

	//Episode 7
	{category: "main", chapter: "Episode 7", stage: "7-2", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "7-3", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "7-4", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "7-5", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "7-6", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "7-8", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "7-9", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "7-10", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "7-11", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "7-12", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "7-13", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "7-14", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "7-15", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "7-16", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "S7-1", cm:"no"},
	{category: "main", chapter: "Episode 7", stage: "S7-2", cm:"no"},
	{category: "main", chapter: "Episode 7", stage: "7-17", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "7-18", cm:"yes"},
	{category: "main", chapter: "Episode 7", stage: "H7-1", cm:"no"},
	{category: "main", chapter: "Episode 7", stage: "H7-2", cm:"no"},
	{category: "main", chapter: "Episode 7", stage: "H7-3", cm:"no"},
	{category: "main", chapter: "Episode 7", stage: "H7-4", cm:"no"},

	// Episode 8
	{category: "main", chapter: "Episode 8", stage: "R8-1", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "R8-2", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "R8-3", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "R8-4", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "R8-5", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "R8-6", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "R8-7", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "R8-8", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "M8-6", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "R8-9", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "R8-10", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "M8-7", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "R8-11", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "M8-8", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "JT8-2", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "JT8-3", cm:"yes"},
	{category: "main", chapter: "Episode 8", stage: "H8-1", cm:"no"},
	{category: "main", chapter: "Episode 8", stage: "H8-2", cm:"no"},
	{category: "main", chapter: "Episode 8", stage: "H8-3", cm:"no"},
	{category: "main", chapter: "Episode 8", stage: "H8-4", cm:"no"},

]

const eventStages = [
	
	//==========
	// Events
	//==========

	//Grani Events
	{category: "event", chapter: "Grani and the Knights' Treasure", stage: "GT-1", cm:"no"},
	{category: "event", chapter: "Grani and the Knights' Treasure", stage: "GT-2", cm:"no"},
	{category: "event", chapter: "Grani and the Knights' Treasure", stage: "GT-3", cm:"no"},
	{category: "event", chapter: "Grani and the Knights' Treasure", stage: "GT-4", cm:"no"},
	{category: "event", chapter: "Grani and the Knights' Treasure", stage: "GT-5", cm:"no"},
	{category: "event", chapter: "Grani and the Knights' Treasure", stage: "GT-6", cm:"no"},
	{category: "event", chapter: "Grani and the Knights' Treasure", stage: "GT-EX-1", cm:"no"},
	{category: "event", chapter: "Grani and the Knights' Treasure", stage: "GT-EX-2", cm:"no"},
	{category: "event", chapter: "Grani and the Knights' Treasure", stage: "GT-EX-3", cm:"no"},
	{category: "event", chapter: "Grani and the Knights' Treasure", stage: "GT-HX-1", cm:"yes"},
	{category: "event", chapter: "Grani and the Knights' Treasure", stage: "GT-HX-2", cm:"yes"},
	{category: "event", chapter: "Grani and the Knights' Treasure", stage: "GT-HX-3", cm:"yes"},

	//Heart of Surging Flame
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-1", cm:"no"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-2", cm:"no"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-3", cm:"no"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-4", cm:"no"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-5", cm:"no"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-6", cm:"no"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-7", cm:"no"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-8", cm:"no"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-F1", cm:"no"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-F2", cm:"no"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-F3", cm:"no"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-F4", cm:"no"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-EX1", cm:"yes"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-EX2", cm:"yes"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-EX3", cm:"yes"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-EX4", cm:"yes"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-EX5", cm:"yes"},
	{category: "event", chapter: "Heart of Surging Flame", stage: "OF-EX6", cm:"yes"},

	//Code of Brawl
	{category: "event", chapter: "Code of Brawl", stage: "CB-1", cm:"no"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-2", cm:"no"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-3", cm:"no"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-4", cm:"no"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-5", cm:"no"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-6", cm:"no"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-7", cm:"no"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-8", cm:"no"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-9", cm:"no"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-10", cm:"no"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-EX1", cm:"yes"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-EX2", cm:"yes"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-EX3", cm:"yes"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-EX4", cm:"yes"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-EX5", cm:"yes"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-EX6", cm:"yes"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-EX7", cm:"yes"},
	{category: "event", chapter: "Code of Brawl", stage: "CB-EX8", cm:"yes"},

	//Darknights Memoir
	{category: "event", chapter: "Darknights Memoir", stage: "DM-1", cm:"no"},
	{category: "event", chapter: "Darknights Memoir", stage: "DM-2", cm:"no"},
	{category: "event", chapter: "Darknights Memoir", stage: "DM-3", cm:"no"},
	{category: "event", chapter: "Darknights Memoir", stage: "DM-4", cm:"no"},
	{category: "event", chapter: "Darknights Memoir", stage: "DM-5", cm:"no"},
	{category: "event", chapter: "Darknights Memoir", stage: "DM-6", cm:"no"},
	{category: "event", chapter: "Darknights Memoir", stage: "DM-7", cm:"no"},
	{category: "event", chapter: "Darknights Memoir", stage: "DM-8", cm:"no"},
	{category: "event", chapter: "Darknights Memoir", stage: "DM-EX-1", cm:"yes"},
	{category: "event", chapter: "Darknights Memoir", stage: "DM-EX-2", cm:"yes"},
	{category: "event", chapter: "Darknights Memoir", stage: "DM-EX-3", cm:"yes"},
	{category: "event", chapter: "Darknights Memoir", stage: "DM-EX-4", cm:"yes"},
	{category: "event", chapter: "Darknights Memoir", stage: "DM-EX-5", cm:"yes"},
	{category: "event", chapter: "Darknights Memoir", stage: "DM-EX-6", cm:"yes"},
	{category: "event", chapter: "Darknights Memoir", stage: "DM-MO-1", cm:"no"},

	//==========
	// Temporary
	//==========

	//A Walk in The Dust
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-1", cm:"no"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-2", cm:"no"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-3", cm:"no"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-4", cm:"no"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-5", cm:"no"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-6", cm:"no"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-7", cm:"no"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-8", cm:"no"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-EX-1", cm:"yes"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-EX-2", cm:"yes"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-EX-3", cm:"yes"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-EX-4", cm:"yes"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-EX-5", cm:"yes"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-EX-6", cm:"yes"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-EX-7", cm:"yes"},
	// {category: "event", chapter: "A Walk in The Dust", stage: "WD-EX-8", cm:"yes"},

	//==========
	// Waiting
	//==========

]

const supplyStages = [

	//==========
	// Supply
	//==========
	{category:"supply", chapter: "Chip", stage: "PR-A-1", cm:"no"},
	{category:"supply", chapter: "Chip", stage: "PR-A-2", cm:"no"},
	{category:"supply", chapter: "Chip", stage: "PR-B-1", cm:"no"},
	{category:"supply", chapter: "Chip", stage: "PR-B-2", cm:"no"},
	{category:"supply", chapter: "Chip", stage: "PR-C-1", cm:"no"},
	{category:"supply", chapter: "Chip", stage: "PR-C-2", cm:"no"},
	{category:"supply", chapter: "Chip", stage: "PR-D-1", cm:"no"},
	{category:"supply", chapter: "EXP - LMD - Skill", stage: "LS-4", cm:"no"},
	{category:"supply", chapter: "EXP - LMD - Skill", stage: "LS-5", cm:"no"},
	{category:"supply", chapter: "EXP - LMD - Skill", stage: "CE-5", cm:"no"},
	{category:"supply", chapter: "EXP - LMD - Skill", stage: "CA-5", cm:"no"},	
	{category:"supply", chapter: "Other", stage: "SK-4", cm:"no"},
	{category:"supply", chapter: "Other", stage: "SK-5", cm:"no"},
	{category:"supply", chapter: "Other", stage: "AP-4", cm:"no"},
	{category:"supply", chapter: "Other", stage: "AP-5", cm:"no"},
	
]

const logoCard = document.getElementById("logo")
const modalDom = document.getElementById("randomizerStage")
const modalCloseBtn = modalDom.querySelector(".closeBtn")
const chapterName = modalDom.querySelector(".chapterName")
const stageName = modalDom.querySelector(".stageName")
const challengeMode = modalDom.querySelector(".challengeMode")
const generateBtn = modalDom.querySelector(".generateBtn")
const map = modalDom.querySelector(".map img")
const sidePanel = document.getElementById("randomizerStageSidePanel")
const sidePanelBtn = document.getElementById("randomizerStageSidePanelBtn")
const checkboxMain = document.getElementById("checkboxMain")
const checkboxEvent = document.getElementById("checkboxEvent")
const checkboxSupplies = document.getElementById("checkboxSupplies")

hideChallengeMode()
closeModal()

logoCard.addEventListener("click", openModal)
modalCloseBtn.addEventListener("click", closeModal)
window.addEventListener("click", e => { if(e.target == modalDom) closeModal() })
sidePanelBtn.addEventListener("click", toggleSidePanel)

function openModal() { modalDom.classList.toggle("hidden", false) }
function closeModal() { modalDom.classList.toggle("hidden", true) }
function showChallengeMode() { challengeMode.classList.toggle("hidden-visibility", false) }
function hideChallengeMode() { challengeMode.classList.toggle("hidden-visibility", true) }
function toggleSidePanel() { sidePanel.classList.contains("out") ? closeSidePanel() : openSidePanel() }
function openSidePanel() { sidePanel.classList.toggle("out", true) }
function closeSidePanel() { sidePanel.classList.toggle("out", false) }

function randomMap(stages){
    if(stages.length <= 0) return
	const i = Math.floor(Math.random() * stages.length)
	chapterName.innerText = stages[i].chapter
    stageName.innerText = stages[i].stage
	map.src = `stages/${stages[i].category}/${stages[i].chapter}/${stages[i].stage}.png`
	stages[i].cm == "yes" && Math.floor(Math.random() * 6) == 0 ? showChallengeMode() : hideChallengeMode()
}

function generateStagePool() {
    const stages = []
    if(checkboxMain.checked) stages.push(...mainStages)
    if(checkboxEvent.checked) stages.push(...eventStages)
    if(checkboxSupplies.checked) stages.push(...supplyStages)
    return stages
}

generateBtn.addEventListener("click", () => randomMap(generateStagePool()))