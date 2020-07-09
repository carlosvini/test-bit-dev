This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Articles that might interest you:

* https://docs.bit.dev/docs/tutorials/bit-react-tutorial
* https://docs.bit.dev/docs/react-guidelines
* https://bit.dev/bit/envs/compilers/react-typescript

## Initialize bit in main repo:
```sh
bit init --package-manager yarn
bit login
bit add src/components/Button
bit tag button
bit export
```

## Export new version in main repo:

```sh
bit tag button # or: bit tag --all
bit export
```

## Use component in another repo (consumer repo):

```sh
yarn add @bit/<username>.test.button
```

## Edit component in another repo (consumer repo):

* Install component via "yarn add @bit/<username>.test.button"
* Import component:
```sh
bit init --package-manager yarn
bit import <username>.test/button
```
* Modify code
* Export normally (via bit tag & bit export)

## Update modified component in main repo:

```sh
bit import
bit checkout latest --all
```
