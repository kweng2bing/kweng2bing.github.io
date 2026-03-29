# Explanation of /src/* files


## Components:
* Functionality: Builds individual componenets for a website
* Input: Props (data)
* Output: UI description (jsx)

## Hooks
* Functionality: states


## Lib
* API clients, formatting functions, configs

## Pagees


# Setting Up Repo


1. `npm  create vite@latest [my-app-name]  -- --template react-ts`
2. `npm install -D tailwindcss@3 postcss autoprefixer`
3. `npx tailwindcss init -p`


* `npx shadcn@latest init`
* `npx shadcn@latest add tooltip`

#  Cleaning
1. `rm -rf node_modules/ package-lock.json`
2. `npm cache clean --force`