import { ARMORS } from "../game-data/index";
import { WEAPONS } from "../game-data/index";
import { MISC } from "../game-data/index";
import { UNIQUE_ITEMS } from "../game-data/index";
import { SET_ITEMS } from "../game-data/index";
import { SETS } from "../game-data/index";
import { PROPERTIES } from "../game-data/index";
import { ITEM_STATS } from "../game-data/index";
import { STAT_GROUPS } from "../game-data/index";
import { SKILLS } from "../game-data/index";
import { SKILL_TABS } from "../game-data/index";
import { CHAR_CLASSES } from "../game-data/index";
import { RARE_NAMES } from "../game-data/index";
import { MAGIC_PREFIXES } from "../game-data/index";
import { MAGIC_SUFFIXES } from "../game-data/index";
import { RUNEWORDS } from "../game-data/index";
import { GEMS } from "../game-data/index";
import fs from 'fs';
export * from "../game-data/types";

// Display ARMORS, ARMORS, UNIQUE_ITEMS and SETS the data as a generated html page
const generateHtmlPage = () => {
  const armorsData = ARMORS;
  const weaponsData = WEAPONS;
  const miscData = MISC;
  const uniqueItemsData = UNIQUE_ITEMS;
  const setItemsData = SET_ITEMS;
  const setsData = SETS;
  const propertiesData = PROPERTIES;
  const itemStatsData = ITEM_STATS;
  const statGroupsData = STAT_GROUPS;
  const skillsData = SKILLS;
  const skillTabsData = SKILL_TABS;
  const charClassesData = CHAR_CLASSES;
  const rareNamesData = RARE_NAMES;
  const magicPrefixesData = MAGIC_PREFIXES;
  const magicSuffixesData = MAGIC_SUFFIXES;
  const runewordsData = RUNEWORDS;
  const gemsData = GEMS;

  // Generate HTML code for displaying ARMORS, WEAPONS, UNIQUE_ITEMS, and SETS data
  const html = `
    <html>
    <head>
      <title>Game Data</title>
      <style>
        body {
          background-color: black;
          color: white;
        }
      </style>
    </head>
      <body>
        <h1>ARMORS</h1>
        <pre>${JSON.stringify(armorsData, null, 2)}</pre>

        <h1>WEAPONS</h1>
        <pre>${JSON.stringify(weaponsData, null, 2)}</pre>

        <h1>MISC</h1>
        <pre>${JSON.stringify(miscData, null, 2)}</pre>

        <h1>UNIQUE ITEMS</h1>
        <pre>${JSON.stringify(uniqueItemsData, null, 2)}</pre>

        <h1>SET ITEMS</h1>
        <pre>${JSON.stringify(setItemsData, null, 2)}</pre>

        <h1>SETS</h1>
        <pre>${JSON.stringify(setsData, null, 2)}</pre>

        <h1>PROPERTIES</h1>
        <pre>${JSON.stringify(propertiesData, null, 2)}</pre>

        <h1>ITEM STATS</h1>
        <pre>${JSON.stringify(itemStatsData, null, 2)}</pre>

        <h1>STAT GROUPS</h1>
        <pre>${JSON.stringify(statGroupsData, null, 2)}</pre>

        <h1>SKILLS</h1>
        <pre>${JSON.stringify(skillsData, null, 2)}</pre>

        <h1>SKILL TABS</h1>
        <pre>${JSON.stringify(skillTabsData, null, 2)}</pre>

        <h1>CHARACTER CLASSES</h1>
        <pre>${JSON.stringify(charClassesData, null, 2)}</pre>

        <h1>RARE NAMES</h1>
        <pre>${JSON.stringify(rareNamesData, null, 2)}</pre>

        <h1>MAGIC PREFIXES</h1>
        <pre>${JSON.stringify(magicPrefixesData, null, 2)}</pre>

        <h1>MAGIC SUFFIXES</h1>
        <pre>${JSON.stringify(magicSuffixesData, null, 2)}</pre>

        <h1>RUNEWORDS</h1>
        <pre>${JSON.stringify(runewordsData, null, 2)}</pre>

        <h1>GEMS</h1>
        <pre>${JSON.stringify(gemsData, null, 2)}</pre>
      </body>
    </html>
  `;

  return html;
};

// Display ARMORS, WEAPONS, UNIQUE_ITEMS, and SETS data as a generated HTML page
const htmlPage = generateHtmlPage();
// ...

// Save the generated HTML page as a file
fs.writeFile('./output.html', htmlPage, (err) => {
  if (err) {
    console.error('Error saving HTML file:', err);
  } else {
    console.log('HTML file saved successfully!');
  }
});
