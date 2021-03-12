# <img src="https://freesvg.org/img/ftpackage-games.png" width="30" height="30"/> EpicJulius <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/662px-Epic_Games_logo.svg.png" width="30" height="30"/>

How about be notified about new free games at epic store?
:robot: So start using EpicJulius Bot.

![executing](/imgs/executing.gif)

:tada: Add this bot to your server:

> https://discord.com/oauth2/authorize?client_id=747636000083279873&scope=bot&permissions=8

## :fast_forward: Commands

These are the available commands:

> \$help - Get all the available commands
> \$speak - The bot speak something
> \$ping - Ping of the bot
> \$free - Show free games | Can use: '\$free now' to show the free games of the week and '\$free next' to show the free games of the next week.

## :floppy_disk: Requirements

<img src="https://miro.medium.com/max/2800/1*y5YLuOKO5XM7MOzve6XsDQ.png" width="300" height="150">

:arrow_forward: I used:

- **NPM** to install some packages.

### :arrow_down_small: Downloads

Some downloads to use this repository:

- npm install --save discord.js
- npm install dotenv --save
- npm install node-fetch --save
- npm install --save google-translate-open-api
- npm install --save express

#### :v: Want to change something?

- Make a fork
- Create an application here [discord application](https://discord.com/developers/applications)
- Go to: 'Bot' and accept it is a Bot
- Configure your Bot(public or not)
- Go to: 'General Information', copy your Client ID and click here: [permission calculator](https://discordapi.com/permissions.html#8)
- At 'OAUTH Url Generator', put your client id at 'Client ID' and copy the Link or use it to add the bot to your server
- Host the bot somewhere, I use repl.it
- And I am using: [uptime bot](https://uptimerobot.com/) to notify when the bot is down

OBS.: Don't forget to create a file called '.env' and write 'TOKEN=yourTokenHere' in it and 'PORT=3333'. The Token has to be secret, so take care about it.

**Enjoy it :wink:**
