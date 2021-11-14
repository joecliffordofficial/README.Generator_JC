function licenseBadge(license) {
    let badges = {
        'Apache': `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
        'Boost': `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
        'BSD': `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
        'Creative Commons': `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`,
        'Eclipse': `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
        'GNU': `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
        'MIT': `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
        'Mozilla': `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
        'None': ''
    }
    return badges[license]
}

function licenseLink(license) {
    let links = {
        'Apache': `https://opensource.org/licenses/Apache-2.0`,
        'Boost': `https://www.boost.org/LICENSE_1_0.txt`,
        'BSD': `https://opensource.org/licenses/BSD-3-Clause`,
        'Creative Commons': `http://creativecommons.org/publicdomain/zero/1.0/`,
        'Eclipse': `https://opensource.org/licenses/EPL-1.0`,
        'GNU': `https://www.gnu.org/licenses/gpl-3.0`,
        'MIT': `https://opensource.org/licenses/MIT`,
        'Mozilla': `https://opensource.org/licenses/MPL-2.0`,
        'None': ''
    }
    return links[license]
}

function licenseBadgeSection(license) {
    return `Licensed for open source through ${license}. Visit ${licenseLink(license)} for more information.`
}


function readMeOutline(data) {
    return `# ${data.titleQ}

<a name = "License"></a>

### License

${licenseBadge(data.license)}

${licenseBadgeSection(data.license)}
    
### Table of Contents
1. [License](#license)
2. [User Story](#userStory)
3. [Description](#description)
4. [Links & Images](#linksImages)
5. [Author](#author)
6. [Usage & Installation](#usageInstallation)
7. [Contribute](#contribute)
    
<a name = "userStory"></a>

## UserStory
    
"As a USER I want "${data.userStoryOne}
    
"So THAT "${data.userStoryTwo}
    
<a name = "description"></a>
    
## Description
    
${data.projectDescription}
    
<a name = "linksImages"></a>
    
## Links & Images
        
[Repository](${data.linkOne})
      
[Profile](${data.linkTwo})
    
<img src = '${data.imageOne}'>
    
<img src = '${data.imageTwo}'>
    
<a name = "author"></a>
    
### Author
    
${data.contributorsQ}

<a name = "usageInstallation"></a>
    
### Usage & Installation
    
This program was developed solely for educational purposes. 

To Install this program make sure you run a npm install in your command line. 
Next you will need to download npm inquirer. Open an integrated terminal from the file and run npm install inquirer. 
    
Finally, to run the program run node index.js in your command line. 
    
<a name = "contribute"></a>
    
### Contribute
    
    
If you would like to contribute please feel free! Just fork over the files and send your changes through! 
    
    
    `;
}


module.exports = readMeOutline;