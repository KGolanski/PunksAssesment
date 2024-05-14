# PunksAssesment
This repository is created for assessment purposes for BITCOIN TECHONOLGIES sp. z o.o.

# Prerequisite

In cypress.env.json file you can put your own credentials, but it have to be user which was registered and sucessfuly completed quiz on https://testnet.binancefuture.com

Plesae, after fire up test -> handle with captcha manually, then wait for 'Sign in' of api.saasexch.co, click 'cancel' on popup, then hit 'play' at the top of cypress test runner window"


### Initial setup

1. Clone this repository
2. Run `npm install`
3. Run `npm run cypress:open`
4. Close cypress -> 'CTR+C'
5. Run particular sripts from `package.json` using `npm run`<p>
  `cy:open` - will open cypress with GUI<br>
  <!-- `cy:run`  - will start hedaless run for all test specs 

   Also headless run generates *.html reports. Click on `Reports` folder in your IDE and open in sysem file explorer. Move into `html` folder and click `index.html`  -->
6. Enjoy it!