# Creative Portfolio (static site)

Plain HTML, CSS and JavaScript. No build step.

## Run locally
Pick one:

    npm run dev                  # needs Node.js, opens at http://localhost:3000
    python3 -m http.server 3000  # needs Python, opens at http://localhost:3000

Use a local server instead of double-clicking index.html, so images load reliably.

## Add your photo
Save it as `assets/photo.jpg` (portrait or square, about 1000px wide is plenty).

## Add your work
1. Put screenshots in `assets/projects/<brand-folder>/` and name them `1.jpg`, `2.jpg`, `3.jpg`, ...
2. In `js/main.js`, set `count` for that project to the number of images.
3. Text for each brand (roles, description, bullets) is in the `PROJECTS` list at the top of `js/main.js`.

## Things to check before publishing
- LinkedIn button in `index.html` (search for `TODO`) currently points to a LinkedIn search. Replace it with your profile URL.
- The "account followers" badge shows each account's total followers from your CV screenshots. It is not a result you measured. Replace it with your own numbers (reach, engagement, growth) or delete it.

## Deploy to Vercel
- Push the folder to GitHub, then "Add New Project" on vercel.com and import the repo. Framework preset: Other. Leave build command and output directory empty.
- Or with the CLI: `npx vercel` inside this folder.
