# _Your Galactic Age!!_

#### _Ever wondered how old you were according to another planets solar cycle?, v1.0 13.nov.2020_

#### By _**Jeff Chiu**_

## Description:

_Birthdays and our ages are calculated according to the solar calendar; Every 365 days you (and planet Earth) make another lap around the solar system and you get one year older.  However, how would that change if you were on Mars? On Jupiter? This calculator will determine your age according to the solar cycles of Mercury, Venus, Mars and Jupiter.  For the morbidly inclined, we've gone full 'momento mori' and determined how much time you've got left on each planet_

## Site link

_`[Click here](https://jeffchiudev.github.io/galactic-age-calculator/)` to visit the site._


## Setup/Installation Requirements:

### Software Requirements:

_1. Internet browser of choice. Chrome & Firefox are suggested_

_2. A code editor like VSCode or Atom to view or edit the codebase._

#### Open by downloading:

_1. Download `[this](https://github.com/jeffchiudev/galactic-age-calculator)` repository onto your computer by clicking the 'clone or download button'._

_2. This page utilizes Node package manager and requires local files to be installed. Once you've cloned the repository and it's accompanying config files, use the following command `npm install` to install the necessary NPM files to display correctly._

_3. Double click index.html to open it in your web browser._

### Open via Bash/GitBash:

_1. Open terminal window and navigate to/create desired repository location._

_2. Clone this repository onto your computer by using command:_
`git clone https://github.com/jeffchiudev/galactic-age-calculator`

_3. In the directory where you've cloned the repository, open in Visual Studio Code with `code .` or preferred text editor._

## Testing Specifications:

| Description | Input | Ouput |
| :---------- | :---- | :---- |
| UserAge ||||
| Should correctly intake a user and a users age | user1 = new UserAge(Jeff, 38) | user1 = {Jeff, 38} | 
| UserAge.prototype.mercuryAge |||
| Should correctly calculate user age into Mercury years (age/.24) | userAge = 38 | user1.mercuryAge = 158 |
| UserAge.prototype.venusAge |||
| Should correctly calculate user age into Venus years (age/.62) | userAge = 38 | user1.mercuryAge = 61 |
| UserAge.prototype.marsAge |||
| Should correctly calculate user age into Mars years (age/1.88) | userAge = 38 | user1.mercuryAge = 20 |
| UserAge.prototype.jupiterAge |||
| Should correctly calculate user age into Jupiter years (age/11.86) | userAge = 38 | user1.mercuryAge = 3 |
| UserAge.prototype.lifeLeft |||
| Should correctly log the users life expectancy according to user entering the avg life expectancy for their region on earth | userAge = 38; canadaExpectancy = 82.25 | userLifeExpectancy = 44.25 |
| Should correctly calculate years OVER average exectancy if the user age is > than the average life exectancy of their region (on earth) | userAge = 90; canadaExpectancy = 82.25 | yearsOver = 7.75 |
| UserAge.prototype.mercuryLifeLeft |||
| Should correctly log users Mercury life expectancy | userAge.38 | mercuryLifeLeft = 185 |
| Should correctly calculate if user is older than life expectancy on Mercury | userAge.90; canadaExpectancy = 82.25 | yearsOver = 32 |

## Known Bugs:

_Currently optimized for desktop browsing.  Smart device integration will be added soon._

## Support and contact details:

_If there are any issues, I can be contacted at jeffchiudev@gmail.com_


## Technologies Used:

_* NPM_

_* Webpack_

_* ES6_

_* Jest_

### License:

_This extension is licensed under the MIT license._

Copyright (c) 2020 **_Jeff W. Chiu_** 