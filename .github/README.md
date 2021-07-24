# Equinox Analytics Utilities

These instructions (which are located in the .github folder) are for developing and updating this package. For instructions on how install and use this package in another application please view the README.md located in the root of this repo.

## Getting started

Clone this repo and run `yarn`

For publishing this repo to NPM (if authorized) make sure you have an NPM account and keep your credentials handy.

## Developing

Since this package relies on local storage it is best to develop while connected to an application.
In order to do this run the following commands

1. In one terminal cd to the root of this app and run `yarn link` - this will make this package available to another repo directly enabling you to make changes and see them live
2. run `yarn dev` to run webpack in watch mode. this will capture changes made to this application and update bundle that is served to the connected app through the yarn link
3. cd to the root of the app you wish to connect to and run `yarn link eqx-analytics`
4. start or restart connected app to see the code changes from this repo

## Testing

Test are set up in Jest using JSDOM. Thresholds for coverage currently are not set up but please write test for any new functions. Jest does run on commits in order to help us catch breaking changes.

## Publishing

After changes are approved and you are ready to publish please take the following steps

1. Bump the SemVer appropriately depending on your changes in package.json
2. Make a PR with step 1 and other code changes to master.
3. Once approved - merge, go back to the app, check out master and pull
4. Run `yarn build`
5. Run `npm login` and provide credentials
6. Run `npm publish` - if you have logged in and bumped the version you should see a message noting you successfully published your update.

### That's it! You're done – tell the world!
